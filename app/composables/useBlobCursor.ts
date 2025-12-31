export function useBlobCursor(target?: Ref<HTMLElement | null>) {
  const container = target || ref<HTMLElement | null>(null);
  const blobPos = ref({ x: 50, y: 50 });
  const mousePos = ref({ x: 50, y: 50 });
  const isHovering = ref(false);

  const blobRadius = 60;
  const currentBlobRadius = computed(() => (isHovering.value ? blobRadius : 0));
  const trails = ref<{ x: number; y: number; size: number; opacity: number; id: number }[]>([]);
  let trailIdCounter = 0;

  let animationFrameId: number;

  const LERP_FACTOR = 0.1;
  const TRAIL_THRESHOLD = 5;
  const TRAIL_SHRINK_RATE = 2;

  function updateLoop() {
    if (!isHovering.value) {
      return;
    }

    const dx = mousePos.value.x - blobPos.value.x;
    const dy = mousePos.value.y - blobPos.value.y;

    const newX = blobPos.value.x + dx * LERP_FACTOR;
    const newY = blobPos.value.y + dy * LERP_FACTOR;

    const velocity = Math.hypot(newX - blobPos.value.x, newY - blobPos.value.y);

    blobPos.value = { x: newX, y: newY };

    if (velocity > TRAIL_THRESHOLD && trails.value.length < 20) {
      trails.value.push({
        id: trailIdCounter++,
        x: blobPos.value.x,
        y: blobPos.value.y,
        size: blobRadius * 0.8,
        opacity: 1.0,
      });
    }

    for (let i = trails.value.length - 1; i >= 0; i--) {
      const trail = trails.value[i];
      if (!trail)
        continue;
      trail.size -= TRAIL_SHRINK_RATE;
      if (trail.size <= 0) {
        trails.value.splice(i, 1);
      }
    }

    animationFrameId = requestAnimationFrame(updateLoop);
  }

  function onMouseMove(e: MouseEvent) {
    if (!container.value)
      return;
    const rect = container.value.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mousePos.value = { x, y };

    if (!animationFrameId && isHovering.value) {
      updateLoop();
    }
  }

  function onMouseEnter() {
    isHovering.value = true;
    updateLoop();
  }

  function onMouseLeave() {
    isHovering.value = false;
    trails.value = [];
    if (animationFrameId)
      cancelAnimationFrame(animationFrameId);
  }

  onUnmounted(() => {
    if (animationFrameId)
      cancelAnimationFrame(animationFrameId);
  });

  return {
    container,
    blobPos,
    currentBlobRadius,
    trails,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
  };
}

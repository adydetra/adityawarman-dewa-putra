<template>
  <button
  @click="goToPrev()"
    class="fixed top-4 left-4 rounded-md bg-gray-200 ring-1 ring-inset ring-gray-400 dark:ring-0 lg:ring-0 dark:bg-white/10 px-2 py-1 lg:p-0 lg:bg-transparent dark:lg:bg-transparent lg:top-7 lg:left-9"
  >
    <Icon name="line-md:arrow-left-circle" class="text-black dark:text-white w-4 h-4 lg:w-8 lg:h-8 -mt-1" />
  </button>
  
</template>

<script>
export default {
  methods: {
    goToPrev() {
      window.history.length > 1 ? this.$router.back() : this.$router.push('/')
    },
  },
}
</script>
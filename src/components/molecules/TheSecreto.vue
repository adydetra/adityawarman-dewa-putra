<script setup>
import { createClient } from '@supabase/supabase-js';

const { public: { SUPABASE_URL, SUPABASE_KEY } } = useRuntimeConfig();
const formatDate = useDateDemo();

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const isSubmitting = ref(false);
const loading = ref(true);
const posts = ref([]);

const postsByYear = computed(() => {
  const grouped = {};
  posts.value.forEach((post) => {
    const year = new Date(post.created_at).getFullYear();
    if (!grouped[year])
      grouped[year] = [];
    grouped[year].push(post);
  });

  return Object.entries(grouped)
    .map(([year, posts]) => ({ year: Number(year), posts }))
    .sort((a, b) => b.year - a.year);
});

const form = ref({
  message: '',
  name: '',
  captchaAnswer: '',
  agreeTerms: false,
});

const message = ref({ text: '', type: '' });
const captcha = ref({ question: '', answer: 0 });

function generateCaptcha() {
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const operators = ['+', '-', '×'];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  let answer, question;
  switch (operator) {
    case '+':
      answer = num1 + num2;
      question = `${num1} + ${num2} = ?`;
      break;
    case '-':
    { const [max, min] = [Math.max(num1, num2), Math.min(num1, num2)];
      answer = max - min;
      question = `${max} - ${min} = ?`;
      break; }
    case '×':
      answer = num1 * num2;
      question = `${num1} × ${num2} = ?`;
      break;
  }

  captcha.value = { question, answer };
}

async function loadPosts() {
  try {
    loading.value = true;
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(20);

    if (error)
      throw error;
    posts.value = data || [];
  }
  catch (error) {
    console.error('Error loading posts:', error);
  }
  finally {
    loading.value = false;
  }
}

async function submitPost() {
  if (Number(form.value.captchaAnswer) !== captcha.value.answer) {
    message.value = { text: 'The answer is wrong!', type: 'error' };
    return;
  }

  try {
    isSubmitting.value = true;
    message.value = { text: '', type: '' };

    const { error } = await supabase
      .from('posts')
      .insert([{
        message: form.value.message.trim(),
        author_name: form.value.name.trim() || 'Anonim',
        created_at: new Date().toISOString(),
      }]);

    if (error)
      throw error;

    message.value = { text: '', type: '' };
    form.value = { message: '', name: '', captchaAnswer: '', agreeTerms: false };
    generateCaptcha();
    await loadPosts();
  }
  catch (error) {
    console.error('Error submitting post:', error);
  }
  finally {
    isSubmitting.value = false;
  }
}

onMounted(() => {
  generateCaptcha();
  loadPosts();
});
</script>

<template>
  <div>
    <div class="bg-gray-300/30 first-letter:dark:bg-slate-800 rounded-lg p-6 mb-8">
      <form class="space-y-6" @submit.prevent="submitPost">
        <textarea
          v-model="form.message"
          placeholder="Type your message here..."
          maxlength="100"
          rows="4"
          required
          class="text-sm md:text-base bg-slate-50 dark:bg-slate-900/50 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <div>
          <input
            v-model="form.name"
            type="text"
            placeholder="Enter your name"
            class="text-sm md:text-base bg-slate-50 dark:bg-slate-900/50 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
          <p class="text-xs mt-4">
            * If empty it will be named "Anonymous"
          </p>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Quest: {{ captcha.question }}</label>
          <input
            v-model="form.captchaAnswer"
            type="text"
            placeholder="Answer"
            class="text-sm md:text-base bg-slate-50 dark:bg-slate-900/50 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          >
        </div>

        <label class="flex items-center">
          <input v-model="form.agreeTerms" type="checkbox" class="mr-2" required>
          <span class="text-xs">I agree that messages containing inappropriate words will be deleted.</span>
        </label>

        <button
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-slate-500 hover:bg-slate-600 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          <div v-if="isSubmitting" class="flex items-center">
            Sending... <Icon name="majesticons:send-line" class="ml-2 size-5" />
          </div>
          <div v-else class="flex items-center">
            Send <Icon name="majesticons:cursor-click-line" class="-mt-0.5 ml-2 size-5" />
          </div>
        </button>
      </form>
    </div>

    <div class="space-y-6">
      <div v-if="loading" class="text-center py-4">
        <p>Loading messages...</p>
      </div>
      <div v-else-if="posts.length === 0" class="text-center py-8">
        <p>No messages yet. Be the first!</p>
      </div>

      <div v-for="group in postsByYear" :key="group.year" class="my-12">
        <h3 class="flex items-center text-lg font-semibold mb-4">
          <Icon name="majesticons:cursor-click" class="-mt-0.5 mr-2 size-5" /> {{ group.year }}
          <div class="ring-[0.5px] ring-gray-300 dark:ring-gray-500 w-full ml-4" />
        </h3>
        <div class="space-y-6">
          <div
            v-for="post in group.posts"
            :key="post.id"
            class="border-double border-8 border-slate-300 dark:border-slate-700 bg-gray-300/30 dark:bg-slate-900/50 rounded-lg shadow-sm p-4"
          >
            <p class="text-sm md:text-base mb-2">
              {{ post.message }}
            </p>
            <div class="flex justify-between items-center text-sm">
              <span class="flex items-center text-gray-400 dark:text-gray-600">
                <Icon name="line-md:person-twotone" class="mr-1.5" />
                {{ post.author_name }}
              </span>
              <span class="flex items-center text-gray-400 dark:text-gray-600">
                <Icon name="line-md:calendar" class="mr-1.5" />
                {{ formatDate(post.created_at) }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

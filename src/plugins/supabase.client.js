import { defineNuxtPlugin, useRuntimeConfig } from '#imports';
import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const supabase = createClient(
    config.public.SUPABASE_URL,
    config.public.SUPABASE_KEY,
  );
  return {
    provide: {
      supabase,
    },
  };
});

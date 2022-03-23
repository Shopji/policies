<template>
  <article>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const article = await $content('legal/shopji-service-terms-20220310-kh').fetch()

      return { article }
    }
  }
</script>

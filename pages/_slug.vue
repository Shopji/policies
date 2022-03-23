<template>
  <div class="content-artical">
    <nuxt-content  :document="post" />
  </div>
</template>

<script>
export default {
  name: 'PoliciesSlug',
  async asyncData({ $content, params, app, error }) {
    console.log(params);
    const post = await $content(app.i18n.locale, params.slug)
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })
    return { post }
  },
}
</script>

<style lang="scss" scoped>
.content-artical {
  padding: 20px;
  margin-top: $top_nav_height+30;
}
</style>

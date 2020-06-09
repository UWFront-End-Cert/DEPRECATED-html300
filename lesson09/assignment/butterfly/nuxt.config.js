module.exports = {
  <template>
  <h1> {{title}} </h1>
  </template>
  <script>
  export default {
    data() {
      return {
        title: 'World of Butterflies',
        }
      },
  head() {
    return {
      title: this.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'A butterfly site for the entertainment and education of the butterfly enthusiast and lover of natural beauty.' }
      ],
      link: [
      //  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'site', href: 'https://www.si.edu/spotlight/buginfo/butterfly'}
      ]
    }
  }
}
</script>
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

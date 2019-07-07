module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: 'src',
          components: 'src/components',
          layouts: 'src/components/layouts',
          pages: 'src/pages',
          styles: 'src/styles',
          static: 'static',
          store: 'src/store',
          providers: 'src/components/providers',
        },
      },
    },
  ],
}

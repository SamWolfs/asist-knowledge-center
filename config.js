const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://asist-knowledge-center.netlify.app',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'http://asist.be/sites/all/themes/asist/images/logo.png',
    logoLink: '/',
    title:
      "<a href='/'><img class='img-responsive' src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/learn-logo.svg' alt='Learn logo' /></a>",
    githubUrl: 'https://github.com/SamWolfs/asist-knowledge-center',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://www.facebook.com/AsistBelgium/" target="_blank" rel="noopener">
		      <div class="facebookBtn">
		        <i class="fab fa-facebook-square"></i>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: true,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/open-source',
      '/tooling',
      '/web-development',
    ],
    collapsedNav: [
      '/open-source',
      '/tooling',
      '/web-development', // add trailing slash if enabled above
    ],
    links: [{ text: 'Asist', link: 'http://asist.be' }],
    frontline: false,
    ignoreIndex: true,
    title: ""
      // "<a href='https://hasura.io/learn/'>graphql </a><div class='greenCircle'></div><a href='https://hasura.io/learn/graphql/react/introduction/'>react</a>",
  },
  siteMetadata: {
    title: 'Asist Knowledge Center',
    description: 'Documentation by Asist Developers for everyone ',
    ogImage: "http://www.asist.be/sites/default/files/favicon_0.ico",
    docsLocation: 'https://github.com/SamWolfs/asist-knowledge-center/tree/main/content',
    favicon: 'http://www.asist.be/sites/default/files/favicon_0.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Asist Knowledge Center',
      short_name: 'AsistKnowledge',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;

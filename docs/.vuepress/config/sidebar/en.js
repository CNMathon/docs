module.exports = {
  '/': [
    {
      title: 'Introduction',
      collapsable: false,
      children: [
        '/',
        '/code-of-conduct',
        '/releases',
        '/contributing',
        '/bugs',
        '/faq'
      ]
    },
    {
      title: 'Setting Up',
      collapsable: false,
      children: [
        '/install',
        '/update',
        '/troubleshoot'
      ]
    },
    {
      title: 'Customization',
      collapsable: false,
      children: [
        '/config',
        '/appearance',
        '/extensions',
        '/languages',
        '/tags',
        '/permissions'
      ]
    }
  ],
  '/extend': [
    {
      title: 'Main Concepts',
      collapsable: false,
      children: [
        '/extend/',
        '/extend/start',
        '/extend/frontend',
        '/extend/routes',
        '/extend/data',
        '/extend/distribution',
        '/extend/update-b8',
        '/extend/update-b10',
        '/extend/update-b12',
        '/extend/update-b13',
      ]
    },
    {
      title: 'Advanced Guides',
      collapsable: false,
      children: [
        '/extend/authorization',
        '/extend/console',
        '/extend/formatting',
        '/extend/i18n',
        '/extend/middleware',
        '/extend/notifications',
        '/extend/permissions',
        '/extend/post-types',
        '/extend/search',
        '/extend/settings',
        '/extend/testing',
      ]
    },
    // {
    //   title: 'Themes',
    //   collapsable: false,
    //   children: [
    //     '/extend/theme',
    //   ]
    // },
    // {
    //   title: 'Localization',
    //   collapsable: false,
    //   children: [
    //   ]
    // }
  ]
}
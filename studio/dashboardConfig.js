export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ced43cfda3be101848570dd',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-7cuj7imj',
                  apiId: 'b06d1cb1-fc02-4d36-b490-238d16b8e6d6'
                },
                {
                  buildHookId: '5ced43d086d35e6640658931',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-9g9ysgv2',
                  apiId: '664688d5-2e93-4735-bba9-3fc49819dba9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ideabrian/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-9g9ysgv2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

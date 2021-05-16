
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/home', component: () => import('pages/PageHome.vue') },
      { path: '/blog', component: () => import('pages/PageBlog.vue') },
      { path: '/about', component: () => import('pages/PageAbout.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

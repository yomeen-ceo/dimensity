
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'contact', path: 'contact', component: () => import('pages/home/Contact.vue') },
      { name: 'home', path: '', component: () => import('pages/home/Home.vue') },
      { name: 'news', path: 'news', component: () => import('pages/home/News.vue') },
      { name: 'products', path: 'products', component: () => import('pages/home/Products.vue') }
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

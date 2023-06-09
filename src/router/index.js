import { createRouter, createWebHistory } from 'vue-router';

function checkAuth(to, from) {
  if (!localStorage.getItem('auth') && to.meta.authRequired) {
    return '/login';
  }
}

export const routes = [
  {
    path: '',
    name: 'main',
    component: () => import('../views/Common.vue'),
    children: [
      {
        name: 'private-area',
        path: '',
        beforeEnter: checkAuth,
        component: () => import('../views/Private.vue'),
        meta: {
          authRequired: true,
        },
        children: [
          {
            path: 'account/:id',
            name: 'account',
            component: () => import('../views/Account.vue'),
          },
        ],
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue'),
      },
    ],
  },
];

export const router = createRouter({
  routes,
  history: createWebHistory(),
});

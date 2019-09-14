import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/basic',
            name: 'basic',
            component: () => import('./views/layouts/basic.vue'),
            chlidren: [
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('./views/index/index.vue')
                },
                {
                    path: 'dingdan',
                    name: 'dingdan',
                    component: () => import('./views/dingdan/quanbudingdan.vue')
                },
                {
                    path: '*',
                    redirect: {
                        name: 'index'
                    }
                }
            ]
        },
        {
            path: '*',
            redirect: {
                name: 'basic'
            }
        }
    ]
});

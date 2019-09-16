import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/basic',
            name: 'basic',
            component: () => import('./views/layouts/basic.vue'),
            children: [
                {
                    path: 'index',
                    name: 'index',
                    component: () => import('./views/index/index.vue')
                },
                {
                    path: 'dingdan',
                    name: 'dingdan',
                    component: () => import('./views/layouts/LR.vue'),
                    redirect: {
                        name: 'qbdd'
                    },
                    children: [
                        {
                            path: 'qbdd',
                            name: 'qbdd',
                            component: () => import('./views/dingdan/quanbudingdan.vue')
                        }
                    ]
                },
                {
                    path: 'wuliu',
                    name: 'wuliu',
                    component: () => import('./views/wuliu/quanbuwuliu.vue')
                }
            ]
        },
        {
            path: '*',
            redirect: {
                name: 'index'
            }
        }
    ]
});


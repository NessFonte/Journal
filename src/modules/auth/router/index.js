export default {
    name: 'auth',
    component: () => import(/* webpackChunkName: "AUth Layout" */ '@/modules/auth/layouts/AuthLayout.vue'),
    children: [
        
    ]
}
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPost from '../views/CreatePostView.vue'
import SinglePost from '../components/SinglePost.vue'
import TagCloud from '../components/TagCloud.vue'

import PostDetail from '../views/PostDetailView.vue'

const routes = [{
        path: '/',
        component: HomeView
    },
    {
        path: '/add',
        component: AddPost,
    }, {
        path: '/posts',
        component: SinglePost,
    }, {
        path: '/post/:id',
        component: PostDetail,
        props: true
    }, {
        path: '/tags/:tag',
        component: TagCloud,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
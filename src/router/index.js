import Vue from "vue"
import VueRouter from "vue-router"
const Home = () => import('views/home/Home.vue')
const Category = () => import('views/category/Category.vue')
const ShopCart = () => import('views/ShopCart/ShopCart.vue')
const Profile = () => import('views/profile/Profile.vue')
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch(err => err);
};

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shopCart',
    component: ShopCart
  },
  {
    path: '/profile',
    component: Profile
  },
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
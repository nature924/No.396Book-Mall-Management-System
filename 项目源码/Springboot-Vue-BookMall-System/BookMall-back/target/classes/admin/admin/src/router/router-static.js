import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import address from '@/views/modules/address/list'
    import cart from '@/views/modules/cart/list'
    import dictionary from '@/views/modules/dictionary/list'
    import tushu from '@/views/modules/tushu/list'
    import tushuCollection from '@/views/modules/tushuCollection/list'
    import tushuCommentback from '@/views/modules/tushuCommentback/list'
    import tushuOrder from '@/views/modules/tushuOrder/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryHuiyuandengji from '@/views/modules/dictionaryHuiyuandengji/list'
    import dictionaryIsdefault from '@/views/modules/dictionaryIsdefault/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShangxia from '@/views/modules/dictionaryShangxia/list'
    import dictionaryTushu from '@/views/modules/dictionaryTushu/list'
    import dictionaryTushuCollection from '@/views/modules/dictionaryTushuCollection/list'
    import dictionaryTushuOrder from '@/views/modules/dictionaryTushuOrder/list'
    import dictionaryTushuOrderPayment from '@/views/modules/dictionaryTushuOrderPayment/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryHuiyuandengji',
        name: '会员等级类型',
        component: dictionaryHuiyuandengji
    }
    ,{
        path: '/dictionaryIsdefault',
        name: '是否默认地址',
        component: dictionaryIsdefault
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShangxia',
        name: '上下架',
        component: dictionaryShangxia
    }
    ,{
        path: '/dictionaryTushu',
        name: '图书类型',
        component: dictionaryTushu
    }
    ,{
        path: '/dictionaryTushuCollection',
        name: '收藏表类型',
        component: dictionaryTushuCollection
    }
    ,{
        path: '/dictionaryTushuOrder',
        name: '订单类型',
        component: dictionaryTushuOrder
    }
    ,{
        path: '/dictionaryTushuOrderPayment',
        name: '订单支付类型',
        component: dictionaryTushuOrderPayment
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/address',
        name: '收货地址',
        component: address
      }
    ,{
        path: '/cart',
        name: '购物车',
        component: cart
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/tushu',
        name: '图书',
        component: tushu
      }
    ,{
        path: '/tushuCollection',
        name: '图书收藏',
        component: tushuCollection
      }
    ,{
        path: '/tushuCommentback',
        name: '图书评价',
        component: tushuCommentback
      }
    ,{
        path: '/tushuOrder',
        name: '图书订单',
        component: tushuOrder
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;

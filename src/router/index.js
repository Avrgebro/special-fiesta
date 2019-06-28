import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/registro',
    component: () => import('@/views/registro/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/reportes',
    component: Layout,
    redirect: '/reportes/tablas',
    name: 'Reportes y estadisticas',
    meta: { title: 'Reportes', icon: 'documentation'},
    children: [
      {
        path: 'tablas',
        name: 'Tablas',
        component: () => import('@/views/reportes/tablas/index'),
        meta: { title: 'Tablas de datos', icon: 'table' }
      },
      {
        path: 'charts',
        name: 'Graficos',
        component: () => import('@/views/reportes/charts/index'),
        meta: { title: 'Graficos estadisticos', icon: 'chart' }
      }
    ]
  },

  {
    path: '/formularios',
    component: Layout,
    redirect: '/formularios/formulario_1',
    name: 'Formularios',
    meta: { title: 'Formularios', icon: 'form' },
    children: [
      {
        path: 'formulario_1',
        name: 'Form 1',
        component: () => import('@/views/formularios/formulario_1/index'),
        meta: { title: 'Formulario_1', icon: 'form' }
      },
      {
        path: 'formulario_2',
        name: 'Form 2',
        component: () => import('@/views/formularios/formulario_2/index'),
        meta: { title: 'Formulario_2', icon: 'form' }
      },
      {
        path: 'formulario_3',
        name: 'Form 3',
        component: () => import('@/views/formularios/formulario_3/index'),
        meta: { title: 'Formulario_3', icon: 'form' }
      }
    ]
  },

  {
    path: '/gestionFormularios',
    component: Layout,
    children: [
      {
        path: 'lista_formularios',
        name: 'lista_formularios',
        component: () => import('@/views/gestionFormularios/listformularios/index'),
        meta: { title: 'Gestion de formularios', icon: 'form' }
      },
      {
        path: 'nuevo_formulario',
        name: 'Nuevo_Formularios',
        component: () => import('@/views/gestionFormularios/newformulario/index'),
        meta: { title: 'Nuevo formulario', icon: 'form' },
        hidden: true
      }
    ]
  },
  
  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'Link de interes', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router

import Vue from 'vue';
import Router from 'vue-router';
import { getToken, setToken, removeToken } from '@/utils/auth'



Vue.use(Router);

/* Layout */
import Layout from '@/layout';

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
var sessToken = getToken()


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
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Dashboard', icon: 'dashboard' }
      }
    ]
  },


  {
    path: '/reportes',
    component: Layout,
    redirect: '/reportes/tablas',
    hidden: !['1','2','3'].includes(sessToken),
    name: 'Reportes y estadisticas',
    meta: { title: 'Reportes', icon: 'documentation' },
    children: [
      {
        path: 'tablas',
        name: 'Tablas',
        component: () => import('@/views/reportes/tablas/index'),
        meta: { title: 'Reportes', icon: 'table' }
      }
      /*{
        path: 'charts',
        name: 'Graficos',
        component: () => import('@/views/reportes/charts/index'),
        meta: { title: 'Graficos estadisticos', icon: 'chart' }
      }*/
    ]
  },

  {
    path: '/censos',
    component: Layout,
    hidden: !['2'].includes(sessToken),
    children: [
      {
        path: 'censos_asignados',
        name: 'censos_asignados',
        component: () => import('@/views/censos/censosasignados/index'),
        meta: { title: 'Censos Asignados', icon: 'form' }
      },
      {
        path: 'responder_censos',
        name: 'responder_censos',
        component: () => import('@/views/censos/respondercenso/index'),
        meta: { title: 'Responder Censo', icon: 'form' },
        hidden: true
      },
      {
        path: 'ver_censo',
        name: 'ver_censo',
        component: () => import('@/views/censos/vercenso/index'),
        meta: { title: 'Detalle Censo', icon: 'form' },
        hidden: true
      }
    ]
  },

  {
    path: '/gestionUsuarios',
    component: Layout,
    hidden: !['1'].includes(sessToken),
    children: [
      {
        path: 'gestion_usuarios',
        name: 'gestion usuarios',
        component: () => import('@/views/gestionUsuarios/index'),
        meta: { title: 'Gestion de usuarios', icon: 'peoples' }
      }
    ]
  },

  {
    path: '/gestionFormularios',
    component: Layout,
    hidden: !['1'].includes(sessToken),
    children: [
      {
        path: 'lista_formularios',
        name: 'lista_formularios',
        component: () =>
          import('@/views/gestionFormularios/listformularios/index'),
        meta: { title: 'Gestion de formularios', icon: 'form' }
      },
      {
        path: 'editor_formulario',
        name: 'editor_formulario',
        component: () =>
          import('@/views/gestionFormularios/newformulario/index'),
        meta: { title: 'Editor de formularios', icon: 'form' },
        hidden: true
      },
      {
        path: 'detalle_formulario',
        name: 'detalle_formulario',
        component: () =>
          import('@/views/gestionFormularios/viewformulario/index'),
        meta: { title: 'Detalle de formulario', icon: 'form' },
        hidden: true
      }
    ]
  },

  {
    path: '/gestionCensos',
    component: Layout,
    hidden: !['1'].includes(sessToken),
    children: [
      {
        path: 'lista_censos',
        name: 'lista_censos',
        component: () => import('@/views/gestionCensos/listCensos/index'),
        meta: { title: 'Gestion de Censos', icon: 'form' }
      },
      {
        path: 'nuevo_censo',
        name: 'nuevo_censo',
        component: () => import('@/views/gestionCensos/newCenso/index'),
        meta: { title: 'Nuevo censo', icon: 'form' },
        hidden: true
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;

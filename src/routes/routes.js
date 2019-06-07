import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Censo from "@/pages/Censo.vue";
import Reportes from "@/pages/Reportes.vue";
import Maps from "@/pages/Maps.vue";
import Login from "@/pages/Auth/Login.vue";
import Registro from "@/pages/Auth/Registro.vue";
import Censo from "@/pages/Censo.vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/registro",
    name: "Registro",
    component: Registro
  },
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/login",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "reportes",
        name: "Reportes",
        component: Reportes
      },
      {
        path: "censo",
        name: "Censo",
        component: Censo
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "upgrade",
        name: "Upgrade to PRO",
        component: UpgradeToPRO
      }
    ]
  }
];

export default routes;

import {NavigationItem} from "../../Interfaces/navigation.types";
import {ADMIN, CAPTURADOR} from "@app/common/groups_roles";

export const defaultNavigation: NavigationItem[] = [
  {
    title: 'Imágenes',
    hidden: false,
    disabled: false,
    permissions: [CAPTURADOR, ADMIN],
    childrenItem: [
      {
        title: 'Captación',
        hidden: false,
        disabled: false,
        tooltip: 'Capturar imagenes',
        icon: 'camera_alt',
        permissions: [CAPTURADOR, ADMIN],
        link: '/imagenes/captacion'
      }
    ],
  },
  {
    title: 'Solapín',
    hidden: true,
    disabled: false,
    permissions: [CAPTURADOR],
    childrenItem: [
      {
        title: 'Asociar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        permissions: [CAPTURADOR],
        link: '/admin/settings'
      }, {
        title: 'Aprobar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        permissions: [CAPTURADOR],
        link: '/admin/settings'
      }, {
        title: 'Activar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        permissions: [CAPTURADOR],
        link: '/admin/settings'
      }, {
        title: 'Anular',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        permissions: [CAPTURADOR],
        link: '/admin/settings'
      },
    ],
  },
  {
    title: 'Administración',
    hidden: false,
    disabled: false,
    permissions: [ADMIN],
    childrenItem: [
      {
        title: 'Usuarios',
        hidden: false,
        disabled: false,
        tooltip: 'Gestionar usuarios',
        icon: 'group',
        permissions: [ADMIN],
        link: '/administracion/usuarios'
      }, {
        title: 'Seguridad',
        hidden: false,
        disabled: false,
        tooltip: 'Gestionar permisos',
        icon: 'security',
        permissions: [ADMIN],
        link: '/administracion/seguridad'
      }
    ],
  },
  {
    title: 'General',
    hidden: true,
    disabled: false,
    permissions: [ADMIN],
    childrenItem: [
      {
        title: 'Dashboard',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'analytics',
        permissions: [ADMIN],
        link: '/admin/dashboard'
      }, {
        title: 'Settings',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'settings',
        permissions: [ADMIN],
        link: '/admin/settings'
      }, {
        title: 'Tables',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'table_chart',
        permissions: [ADMIN],
        link: '/admin/tables'
      }
    ],
  },
];

import {NavigationItem} from "../../Interfaces/navigation.types";

export const defaultNavigation: NavigationItem[] = [
  {
    title: 'Imágenes',
    hidden: false,
    disabled: false,
    childrenItem: [
      {
        title: 'Captación',
        hidden: false,
        disabled: false,
        tooltip: 'Capturar imagenes',
        icon: 'camera_alt',
        link: '/imagenes/captacion'
      }
    ],
  },
  {
    title: 'Solapín',
    hidden: true,
    disabled: false,
    childrenItem: [
      {
        title: 'Asociar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        link: '/admin/settings'
      }, {
        title: 'Aprobar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        link: '/admin/settings'
      }, {
        title: 'Activar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        link: '/admin/settings'
      }, {
        title: 'Anular',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        link: '/admin/settings'
      },
    ],
  },
  {
    title: 'Auth Layout Pages',
    hidden: true,
    disabled: false,
    childrenItem: [
      {
        title: 'Login',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'fas fa-fingerprint',
        link: '/admin/login'
      }
    ],
  },
  {
    title: 'Administración',
    hidden: false,
    disabled: false,
    childrenItem: [
      {
        title: 'Usuarios',
        hidden: false,
        disabled: false,
        tooltip: 'Gestionar usuarios',
        icon: 'group',
        link: '/administracion/usuarios'
      }, {
        title: 'Seguridad',
        hidden: false,
        disabled: false,
        tooltip: 'Gestionar permisos',
        icon: 'security',
        link: '/administracion/seguridad'
      }
    ],
  },
  {
    title: 'General',
    hidden: false,
    disabled: false,
    childrenItem: [
      {
        title: 'Dashboard',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'analytics',
        link: '/admin/dashboard'
      }, {
        title: 'Settings',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'settings',
        link: '/admin/settings'
      }, {
        title: 'Tables',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'table_chart',
        link: '/admin/tables'
      }
    ],
  },
];

import {NavigationItem} from "../../Interfaces/navigation.types";

export const defaultNavigation: NavigationItem[] = [
  {
    title: 'Imágenes',
    hidden: false,
    disabled: false,
    permissions: ['Captacion', 'Admin'],
    childrenItem: [
      {
        title: 'Captación',
        hidden: false,
        disabled: false,
        tooltip: 'Capturar imagenes',
        icon: 'camera_alt',
        permissions: ['Captacion', 'Admin'],
        link: '/imagenes/captacion'
      }
    ],
  },
  {
    title: 'Solapín',
    hidden: true,
    disabled: false,
    permissions: ['Captacion'],
    childrenItem: [
      {
        title: 'Asociar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        permissions: ['Captacion'],
        link: '/admin/settings'
      }, {
        title: 'Aprobar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        permissions: ['Captacion'],
        link: '/admin/settings'
      }, {
        title: 'Activar',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        permissions: ['Captacion'],
        link: '/admin/settings'
      }, {
        title: 'Anular',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'pool',
        permissions: ['Captacion'],
        link: '/admin/settings'
      },
    ],
  },
  {
    title: 'Administración',
    hidden: false,
    disabled: false,
    permissions: ['Admin'],
    childrenItem: [
      {
        title: 'Usuarios',
        hidden: false,
        disabled: false,
        tooltip: 'Gestionar usuarios',
        icon: 'group',
        permissions: ['Admin'],
        link: '/administracion/usuarios'
      }, {
        title: 'Seguridad',
        hidden: false,
        disabled: false,
        tooltip: 'Gestionar permisos',
        icon: 'security',
        permissions: ['Admin'],
        link: '/administracion/seguridad'
      }
    ],
  },
  {
    title: 'General',
    hidden: true,
    disabled: false,
    permissions: ['Admin'],
    childrenItem: [
      {
        title: 'Dashboard',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'analytics',
        permissions: ['Admin'],
        link: '/admin/dashboard'
      }, {
        title: 'Settings',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'settings',
        permissions: ['Admin'],
        link: '/admin/settings'
      }, {
        title: 'Tables',
        hidden: false,
        disabled: false,
        tooltip: 'Acceso al dashboard',
        icon: 'table_chart',
        permissions: ['Admin'],
        link: '/admin/tables'
      }
    ],
  },
];

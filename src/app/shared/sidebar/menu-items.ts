import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    submenu: [],
  },

  {
    path: 'blank/auth/login',
    title: 'Login',
    icon: 'bi bi-box-arrow-in-right',
    class: '',
    extralink: false,
    submenu: [],
  },
  {
    path: 'userapproval/approvedusers',
    title: 'Approved users',
    icon: 'bi bi-person-fill-check',
    class: '',
    extralink: false,
    submenu: [],
  },
  {
    path: 'userapproval/pendingusers',
    title: 'Pending approvals',
    icon: 'bi bi-person-fill-exclamation',
    class: '',
    extralink: false,
    submenu: [],
  },
  {
    path: 'userapproval/rejectedusers',
    title: 'Rejected approvals',
    icon: 'bi bi-person-fill-x',
    class: '',
    extralink: false,
    submenu: [],
  },
  {
    path: '/pages/addclient',
    title: 'Add users',
    icon: 'bi bi-person-add',
    class: '',
    extralink: false,
    submenu: [],
  },
  // {
  //   path: '/pages/toporders',
  //   title: 'All orders',
  //   icon: 'bi bi-file-earmark-text',
  //   class: '',
  //   extralink: false,
  //   submenu: [],
  // },

  // {
  //   path: '/component/alert',
  //   title: 'Alert',
  //   icon: 'bi bi-bell',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/badges',
  //   title: 'Badges',
  //   icon: 'bi bi-patch-check',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/buttons',
  //   title: 'Button',
  //   icon: 'bi bi-hdd-stack',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/card',
  //   title: 'Card',
  //   icon: 'bi bi-card-text',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/dropdown',
  //   title: 'Dropdown',
  //   icon: 'bi bi-menu-app',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/pagination',
  //   title: 'Pagination',
  //   icon: 'bi bi-dice-1',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/nav',
  //   title: 'Nav',
  //   icon: 'bi bi-pause-btn',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/component/table',
  //   title: 'Table',
  //   icon: 'bi bi-layout-split',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // },
  // {
  //   path: '/about',
  //   title: 'About',
  //   icon: 'bi bi-people',
  //   class: '',
  //   extralink: false,
  //   submenu: []
  // }
];

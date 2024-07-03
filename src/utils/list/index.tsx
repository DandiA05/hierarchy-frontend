const MENU_HEADER = [
  {
    name: 'Manajemen & User Role',
    href: '/',
    icon: 'IconDashboard',
    submenu: [],
  },
  {
    name: 'Master',
    href: '',
    icon: 'IconCatalog',
    submenu: [
      {
        name: 'Master Tenant',
        href: '/master-tenant',
        icon: 'IconUser',
      },
      {
        name: 'Master Category Telephony',
        href: '/master-category-telephony',
        icon: 'IconUser',
      },
      {
        name: 'Master Bucket Grouping',
        href: '/master-bucket-grouping',
        icon: 'IconUser',
      },
    ],
  },
  {
    name: 'Bucket Telephont',
    href: '/bucket',
    icon: 'IconBucket',
    submenu: [],
  },
  {
    name: 'Disttribution',
    href: '/roleManagement',
    icon: 'IconRoleManagement',
    submenu: [],
  },
]

export { MENU_HEADER }

/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

const SidebarOrganizationData =  [{
  icon: 'PagesIcon',
  name: 'Switch Organization',
  routes: [
    // submenu
    {
      path: '/app/sub-menu',
      name: 'Sub Menu',
    }
  ]
}]

const SidebarDashboardData = [
  {
    icon: 'PagesIcon',
    name: 'Dashboard',
    path: '/app/dashboard'
  }
]


const SidebarCustomersData = [
  {
      name: 'Users',
      path: '/app/users',
      icon: 'HomeIcon'
  },
  {
      name: 'Guarantors',
      path: '/app/guarantors',
      icon: 'HomeIcon'
  },
  {
      name: 'Loans',
      path: '/app/loans',
      icon: 'HomeIcon'
  },
  {
      name: 'Savings',
      path: '/app/savings',
      icon: 'HomeIcon'
  },
  {
      name: 'Loan Requests',
      path: '/app/loan-requests',
      icon: 'HomeIcon'
  },
  {
      name: 'Whitelist',
      path: '/app/whitelist',
      icon: 'HomeIcon'
  },
  {
      name: 'Karma',
      path: '/app/karma',
      icon: 'HomeIcon'
  }
]

const SidebarBusinessesData = [
  {
      name: 'Organization',
      path: '/app/organization',
      icon: 'HomeIcon'
  },
  {
      name: 'Savings Products',
      path: '/app/savings-products',
      icon: 'HomeIcon'
  },
  {
      name: 'Transactions',
      path: '/app/transactions',
      icon: 'HomeIcon'
  },
  {
      name: 'Services',
      path: '/app/services',
      icon: 'HomeIcon'
  },
  {
      name: 'Service Account',
      path: '/app/service-account',
      icon: 'HomeIcon'
  },
  {
      name: 'Settlements',
      path: '/app/settlements',
      icon: 'HomeIcon'
  },
  {
      name: 'Reports',
      path: '/app/reports',
      icon: 'HomeIcon'
  }
]

const SidebarSettingsData = [
  {
      name: 'Preferences',
      path: '/app/preferences',
      icon: 'HomeIcon'
  },
  {
      name: 'Fees and Pricing',
      path: '/app/fees-pricing',
      icon: 'HomeIcon'
  },
  {
      name: 'Audit Logs',
      path: '/app/audit-logs',
      icon: 'HomeIcon'
  },
  {
      name: 'Systems Messages',
      path: '/app/systems-messages',
      icon: 'HomeIcon'
  }
]

export {
  SidebarBusinessesData,
  SidebarCustomersData,
  SidebarDashboardData,
  SidebarSettingsData,
  SidebarOrganizationData
}
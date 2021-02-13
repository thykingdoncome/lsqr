/**
 * ⚠ These are used just to render the Sidebar!
 * You can include any link here, local or external.
 *
 * If you're looking to actual Router routes, go to
 * `routes/index.js`
 */

const SidebarOrganizationData =  [{
  icon: 'SuitcaseIcon',
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
      icon: 'PeopleIcon'
  },
  {
      name: 'Guarantors',
      path: '/app/guarantors',
      icon: 'PeopleIcon'
  },
  {
      name: 'Loans',
      path: '/app/loans',
      icon: 'LoansIcon'
  },
  {
      name: 'Savings',
      path: '/app/savings',
      icon: 'CoinsIcon'
  },
  {
      name: 'Loan Requests',
      path: '/app/loan-requests',
      icon: 'RequestIcon'
  },
  {
      name: 'Whitelist',
      path: '/app/whitelist',
      icon: 'CheckUserIcon'
  },
  {
      name: 'Karma',
      path: '/app/karma',
      icon: 'CancelUser'
  }
]

const SidebarBusinessesData = [
  {
      name: 'Organization',
      path: '/app/organization',
      icon: 'SuitcaseIcon'
  },
  {
      name: 'Savings Products',
      path: '/app/savings-products',
      icon: 'ProductsIcon'
  },
  {
      name: 'Transactions',
      path: '/app/transactions',
      icon: 'TransactionIcon'
  },
  {
      name: 'Services',
      path: '/app/services',
      icon: 'ServiceIcon'
  },
  {
      name: 'Service Account',
      path: '/app/service-account',
      icon: 'ServiceIcon'
  },
  {
      name: 'Settlements',
      path: '/app/settlements',
      icon: 'ListIcon'
  },
  {
      name: 'Reports',
      path: '/app/reports',
      icon: 'ReportIcon'
  }
]

const SidebarSettingsData = [
  {
      name: 'Preferences',
      path: '/app/preferences',
      icon: 'PreferenceIcon'
  },
  {
      name: 'Fees and Pricing',
      path: '/app/fees-pricing',
      icon: 'PercentIcon'
  },
  {
      name: 'Audit Logs',
      path: '/app/audit-logs',
      icon: 'LogsIcon'
  },
  {
      name: 'Systems Messages',
      path: '/app/systems-messages',
      icon: 'MessageSettings'
  }
]

export {
  SidebarBusinessesData,
  SidebarCustomersData,
  SidebarDashboardData,
  SidebarSettingsData,
  SidebarOrganizationData
}
import React from 'react'
import * as routes from '../../routes/sidebar'
import { NavLink, Route, Link } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'

import { Logout } from '../../icons/index'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 dark:text-gray-400 sidebar-wrapper">
      <ul className="mt-6">
        {routes.SidebarOrganizationData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-base transition-colors duration-150 hover:text-gray-800 mt-2"
              activeClassName="text-primary"
            >
            <li className="relative px-6 py-2 flex w-full" key={route.name}>
              <Route path={route.path} exact={route.exact}>
                <span
                  className="absolute inset-y-0 left-0 w-1 bg-secondary rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              </Route>
              <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
              <span className="ml-4">{route.name}</span>
            </li>
          </NavLink>
          )
        )}
      </ul>

      <ul className="mt-6">
        {routes.SidebarDashboardData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-base pri-col-text-light transition-colors duration-150 hover:text-gray-800 mt-2"
              activeClassName="pri-col-text dark:text-gray-100 bar-active-bg"
            >
            <li className="relative px-6 py-2 flex" style={{width: '100%'}} key={route.name}>
              <Route path={route.path} exact={route.exact}>
                <span
                  className="absolute inset-y-0 left-0 w-1 pri-col-1 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              </Route>
              <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
              <span className="ml-4">{route.name}</span>
            </li>
          </NavLink>
          )
        )}
      </ul>

      <ul className="mt-6">
        <span className="relative px-6 py-4 mb-4 text-xs pri-col-text-md">CUSTOMERS</span>
        {routes.SidebarCustomersData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-base pri-col-text-light transition-colors duration-150 hover:text-gray-800 mt-2"
              activeClassName="pri-col-text dark:text-gray-100 bar-active-bg"
            >
              <li className="relative px-6 py-2 flex" style={{width: '100%'}} key={route.name}>
                <Route path={route.path} exact={route.exact}>
                  <span
                    className="absolute inset-y-0 left-0 w-1 pri-col-1 rounded-tr-lg rounded-br-lg"
                    aria-hidden="true"
                  ></span>
                </Route>
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </li>
            </NavLink>
          )
        )}
      </ul>

      <ul className="mt-6">
      <span className="relative px-6 py-4 text-xs pri-col-text-md">BUSINESSES</span>
        {routes.SidebarBusinessesData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-base pri-col-text-light transition-colors duration-150 hover:text-gray-800 mt-2"
              activeClassName="pri-col-text dark:text-gray-100 bar-active-bg"
            >
            <li className="relative px-6 py-2 flex" style={{width: '100%'}} key={route.name}>
              <Route path={route.path} exact={route.exact}>
                <span
                  className="absolute inset-y-0 left-0 w-1 pri-col-1 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              </Route>
              <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
              <span className="ml-4">{route.name}</span>
            </li>
          </NavLink>
          )
        )}
      </ul>

      <ul className="mt-6">
      <span className="relative px-6 py-4 text-xs pri-col-text-md">SETTINGS</span>
        {routes.SidebarSettingsData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-base pri-col-text-light transition-colors duration-150 hover:text-gray-800 mt-2"
              activeClassName="pri-col-text dark:text-gray-100 bar-active-bg"
            >
            <li className="relative px-6 py-2 flex" style={{width: '100%'}} key={route.name}>
              <Route path={route.path} exact={route.exact}>
                <span
                  className="absolute inset-y-0 left-0 w-1 pri-col-1 rounded-tr-lg rounded-br-lg"
                  aria-hidden="true"
                ></span>
              </Route>
              <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
              <span className="ml-4">{route.name}</span>
            </li>
          </NavLink>
          )
        )}
      </ul>

      <ul className="mt-16 pt-8 border-t-2 border-gray-200">
        <Link to='/' className='mb-8'>
          <li className='flex items-center px-6 text-primary text-base'>
            <Logout /> <span className='ml-4'>Logout</span>
          </li>
        </Link>

        <div className='mt-6'>
          <span className='mt-6 px-6 text-primary text-xs'>v1.2.0</span>
        </div>
      </ul>
    </div>
  )
}

export default SidebarContent

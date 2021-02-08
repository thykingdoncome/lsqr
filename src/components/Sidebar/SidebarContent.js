import React from 'react'
import * as routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'

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
              className="inline-flex items-center w-full text-size-md pri-col-text-light font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 mt-2"
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
        {routes.SidebarDashboardData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-size-md pri-col-text-light font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 mt-2"
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
        <span className="relative px-6 py-3 text-size-sm pri-col-text-md">CUSTOMERS</span>
        {routes.SidebarCustomersData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-size-md pri-col-text-light font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 mt-2"
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
      <span className="relative px-6 py-3 text-size-sm pri-col-text-md">BUSINESSES</span>
        {routes.SidebarBusinessesData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-size-md pri-col-text-light font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 mt-2"
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
      <span className="relative px-6 py-3 text-size-sm pri-col-text-md">SETTINGS</span>
        {routes.SidebarSettingsData.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <NavLink
              exact
              to={route.path}
              className="inline-flex items-center w-full text-size-md pri-col-text-light font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 mt-2"
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
    </div>
  )
}

export default SidebarContent

import React, { useContext, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai'
import { SidebarContext } from '../context/SidebarContext'
import {
  SearchIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from '../icons'
import { Avatar, Badge, Input, Dropdown, DropdownItem } from '@windmill/react-ui'
import Logo from '../assets/img/lendsqr-logo.svg'


function Header() {
  const { toggleSidebar } = useContext(SidebarContext)

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800 fixed-item">
      <div className="flex items-center justify-between h-full px-6 mx-auto text-primary">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>

        <div className="flex items-center justify-between flex-1 lg:mr-32" style={{maxWidth: '700px'}}>
          <a className="text-lg lsqr-logo mr-6" href="/app/dashboard">
            <img src={Logo} alt="Lendsqr"/>
          </a>
          {/* <!-- Search input --> */}
          <div className="relative max-w-sm w-full focus-within:text-purple-500 rounded-md">
            <Input
              className="pl-8 text-gray-700 rounded-l-md "
              placeholder="Search for anything"
              aria-label="Search"
            />
            <div className="absolute right-0 inset-y-0 bg-secondary rounded-r-md flex items-center px-4">
              <SearchIcon className="w-4 h-4 text-white" aria-hidden="true" />
            </div>
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 flex-1 justify-end space-x-6">
          {/* <!-- Notifications menu --> */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={handleNotificationsClick}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5 text-primary" aria-hidden="true" />
              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>

            <Dropdown
              align="right"
              isOpen={isNotificationsMenuOpen}
              onClose={() => setIsNotificationsMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="justify-between text-secondary">
                <span>Messages</span>
                <Badge type="danger">13</Badge>
              </DropdownItem>
              <DropdownItem tag="a" href="#" className="justify-between text-secondary">
                <span>Sales</span>
                <Badge type="danger">2</Badge>
              </DropdownItem>
              <DropdownItem onClick={() => alert('Alerts!')}>
                <span>Alerts</span>
              </DropdownItem>
            </Dropdown>
          </li>
          {/* <!-- Profile menu --> */}
          <li className="relative flex items-center">
            <Avatar
                className="align-middle mr-2"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
            />
            <button
              className="flex items-center focus:outline-none  text-primary"
              onClick={handleProfileClick}
              aria-label="Account"
              aria-haspopup="true"
            >
              <span>Adedeji</span> <AiFillCaretDown />
            </button>
            <Dropdown
              align="right"
              isOpen={isProfileMenuOpen}
              onClose={() => setIsProfileMenuOpen(false)}
            >
              <DropdownItem tag="a" href="#" className="text-secondary">
                <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem tag="a" href="#" className="text-secondary">
                <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem onClick={() => alert('Log out!')}>
                <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header

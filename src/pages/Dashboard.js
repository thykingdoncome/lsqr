import React from 'react'
import { Link } from 'react-router-dom'
import InfoCard from '../components/Cards/InfoCard'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow
} from '@windmill/react-ui'


function Dashboard() {

  const recentLogin = [
    {
      name: 'Adedeji',
      date: 'Mon Feb 03 2020 04:13:15 GMT-0300 (Brasilia Standard Time)',
    },
    {
      name: 'Debby Ogana',
      date: 'Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)',
    },
    {
      name: 'Grace Effiom',
      date: 'Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)',
    },
    {
      name: 'Tosin Dokunmu',
      date: 'Fri Nov 29 2019 10:43:17 GMT-0300 (Brasilia Standard Time)',
    }
  ]

  const organizationsData = [
    {
      name: 'Liberty Credi',
      numberOfUsers: 1000,
      numberOfLoans: 2309
    },
    {
      name: 'Liberty Credi',
      numberOfUsers: 1000,
      numberOfLoans: 2309
    },
    {
      name: 'Liberty Credi',
      numberOfUsers: 1000,
      numberOfLoans: 2309
    },
    {
      name: 'Liberty Credi',
      numberOfUsers: 1000,
      numberOfLoans: 2309
    },
  ]

  return (
    <>
      <PageTitle>Dashboard</PageTitle>

      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        <InfoCard title="USERS" value="6,389">
          <RoundIcon
            icon={PeopleIcon}
            iconColorClass="text-orange-500 dark:text-orange-100"
            bgColorClass="bg-orange-100 dark:bg-orange-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="ACTIVE USERS" value="5,089">
          <RoundIcon
            icon={MoneyIcon}
            iconColorClass="text-green-500 dark:text-green-100"
            bgColorClass="bg-green-100 dark:bg-green-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="USERS WITH LOANS" value="3,766">
          <RoundIcon
            icon={CartIcon}
            iconColorClass="text-blue-500 dark:text-blue-100"
            bgColorClass="bg-blue-100 dark:bg-blue-500"
            className="mr-4"
          />
        </InfoCard>

        <InfoCard title="USERS WITH SAVINGS" value="5,005">
          <RoundIcon
            icon={ChatIcon}
            iconColorClass="text-teal-500 dark:text-teal-100"
            bgColorClass="bg-teal-100 dark:bg-teal-500"
            className="mr-4"
          />
        </InfoCard>
      </div>

      <div className="grid gap-6 mb-8 md:grid-cols-2">

        <TableContainer className='bg-white p-8 table-container'>
          <div className='flex justify-between p-4 bg-white'>
            <h1>Recent Logins</h1>
            <Link to='#' style={{textDecoration: 'underline'}}>view more</Link>
          </div>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>USERS</TableCell>
                <TableCell>DATE/TIME</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {recentLogin.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{user.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-sm">{new Date(user.date).toLocaleDateString()}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>


        <TableContainer className='bg-white p-8 table-container'>
          <div className='flex justify-between p-4 bg-white table-super-header'>
            <h1>Organizations</h1>
            <Link to='#' style={{textDecoration: 'underline'}}>view more</Link>
          </div>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>ORGANIZATIONS</TableCell>
                <TableCell>NUMBER OF USERS</TableCell>
                <TableCell>NUMBER OF LOANS</TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {organizationsData.map((user, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold">{user.name}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p>{user.numberOfUsers}</p>
                  </TableCell>
                  <TableCell>
                    <p>{user.numberOfLoans}</p>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        
      </div>
    </>
  )
}

export default Dashboard

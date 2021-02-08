import React, { useState, useEffect } from 'react'
import InfoCard from '../components/Cards/InfoCard'
import PageTitle from '../components/Typography/PageTitle'
import { ChatIcon, CartIcon, MoneyIcon, PeopleIcon } from '../icons'
import RoundIcon from '../components/RoundIcon'
import response from '../utils/demo/usersData'
import { Tag } from 'antd'
import { MdMoreVert } from 'react-icons/md'
import {
  TableBody,
  TableContainer,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  TableFooter,
  Pagination,
} from '@windmill/react-ui'


function Users({history }) {

  const [page, setPage] = useState(1)
  const [data, setData] = useState([])

  // pagination setup
  const resultsPerPage = 9
  const totalResults = response.length

  // pagination change control
  function onPageChange(p) {
    setPage(p)
  }

  // on page change, load new sliced data
  // here you would make another server request for new data
  useEffect(() => {
    setData(response.slice((page - 1) * resultsPerPage, page * resultsPerPage))
  }, [page])

  const handleViewUser = (e) => history.push(`/app/user-profile/${e}`)

  return (
    <>
      <PageTitle>Users</PageTitle>

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

        <TableContainer className='bg-white p-8 table-container'>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>ORGANIZATIONS</TableCell>
                <TableCell>USERNAME</TableCell>
                <TableCell>EMAIL</TableCell>
                <TableCell>PHONE NUMBER</TableCell>
                <TableCell>DATE JOINED</TableCell>
                <TableCell>STATUS</TableCell>
                <TableCell></TableCell>
              </tr>
            </TableHeader>
            <TableBody>
              {data.map((user) => (
                <TableRow key={user.id} onClick={() => handleViewUser(user.username)}>
                  <TableCell>
                        <p className="font-semibold">{user.organization}</p>
                  </TableCell>
                  <TableCell>
                    <p>{user.username}</p>
                  </TableCell>
                  <TableCell>
                    <p>{user.email}</p>
                  </TableCell>
                  <TableCell>
                    <p>{user.telephone}</p>
                  </TableCell>
                  <TableCell>
                    <p>{new Date(user.dateJoined).toLocaleDateString()}</p>
                  </TableCell>

                  <TableCell>
                    <Tag 
                    style={{padding: '.2rem', width: '100%', textAlign: 'center', borderRadius: '20px'}}
                     color={  user.status === 'Blacklisted' ? 'red' : 
                        user.status === 'Active' ? 'green' :
                        user.status === 'Inactive' ? '#bcc2d2' : 'gold' }>
                      {user.status}
                    </Tag>
                  </TableCell>

                  <TableCell>
                      <MdMoreVert />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
          <TableFooter>
          <Pagination
            totalResults={totalResults}
            resultsPerPage={resultsPerPage}
            onChange={onPageChange}
            label="Table navigation"
          />
        </TableFooter>


    </>
  )
}

export default Users

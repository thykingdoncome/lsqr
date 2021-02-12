import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

function InfoCard({ title, value, count, children: icon }) {
  return (
    <Card className='info-card'>
      <CardBody className="flex flex-col h-full">
        {icon}
        <div className='flex flex-col pt-3'>
          <p className="mb-2 text-sm font-medium text-pale-purple dark:text-gray-400">{title}</p>
          <p className="m-0 font-semibold text-primary" style={{fontSize: '1.5rem'}} >{value}</p>
          {count && <p className='text-pale-purple text-sm'>Count: {count} </p>}
        </div>
      </CardBody>
    </Card>
  )
}

export default InfoCard

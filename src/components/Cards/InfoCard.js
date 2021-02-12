import React from 'react'
import { Card, CardBody } from '@windmill/react-ui'

function InfoCard({ title, value, children: icon }) {
  return (
    <Card className='info-card'>
      <CardBody className="">
        {icon}
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">{title}</p>
          <p className="text-lg font-semibold text-gray-700" >{value}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export default InfoCard

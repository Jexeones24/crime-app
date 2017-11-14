import React from 'react'
import { Table } from './'

export const Main = (props) => {
  console.log('props in main:', props)
  return (
    <div className='main'>
      {props.tableConfig.rowData.length !== 0 ? <Table {...props} /> : []}
    </div>
  )
}

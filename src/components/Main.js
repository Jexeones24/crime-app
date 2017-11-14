import React from 'react'
import { Table } from './'

export const Main = (props) => {
  console.log(props.tableConfig.rowData.length)
  return (
    <div className='main'>
      {props.tableConfig.rowData.length !== 0 ? <Table {...props} /> : []}
    </div>
  )
}

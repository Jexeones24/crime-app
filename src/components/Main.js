import React from 'react'
import { Table } from './'

export const Main = (props) => (
  <div className='main'>
    <div className='main-header'>
      <h3>{props.meta}</h3>
    </div>
    <Table />
  </div>
)

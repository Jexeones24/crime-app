import React from 'react'

export const Table = (props) => (
  <div className='table-container'>
    <div className='main-header'>
      <h3>{props.meta[0]}</h3>
    </div>
    <table>
      <thead>
        <tr>
          <th></th>
          {props.meta.map((m, i) => <th key={i}>{m}</th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Meta</th>
          <td>data</td>
        </tr>
        <tr>
          <th>Row 2</th>
          <td>21</td>
        </tr>
        <tr>
          <th>Row 3</th>
          <td>31</td>
        </tr>
      </tbody>
    </table>
  </div>
)

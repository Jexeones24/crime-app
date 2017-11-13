import React from 'react'

const columns = ['count', 'something', 'more things']
const meta = ['hello', 'bye', 'suck', 'banana', 'dogs', 'cats', 'coffee', 'cookies']
export const Table = () => (
  <div className='table-container'>
    <table>
      <thead>
        <tr>
          <th></th>
          {columns.map((column, i) => <th key={i}>{column}</th>)}
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

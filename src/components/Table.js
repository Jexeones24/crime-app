import React from 'react'

export const Table = (props) => {
  return (
    <div className='table-container'>
      <div className='main-header'>
        <span><h3>COMPARE | SHOW GRAPH | MAP </h3></span>
        <span><p>appears only when table is populated</p></span>
      </div>
      <table>
        <caption>THIS IS A CAPTION</caption>
        <thead>
          <tr>
            <th />
            {props.tableConfig.colHeads.map((m, i) => <th key={i}>{m}</th>)}
          </tr>
        </thead>
        <tbody>
          {props.tableConfig.rowData.map((data, i) => <Row key={i} data={data} />)}
        </tbody>
      </table>
    </div>
  )
}

const Row = ({data}) => {
  let key = Object.keys(data)
  return (
    <tr>
      <th>{key}</th>
      {data[key].map((d, i) => (
        <td key={i}>{d}</td>
      ))}
    </tr>
  )
}

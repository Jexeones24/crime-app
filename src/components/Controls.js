import React from 'react'

const locations = ['NATIONWIDE', 'STATE']
const searches = ['Crime Estimates', 'Hate Crimes', 'Offenders', 'Victims']
const years = ['1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']

export const Controls = () => (
  <div className='sidebar-left'>
    <h4>FILTERS</h4>
    <div className='controls'>
      <Dropdown
        label='SELECT LOCATION'
        values={locations}
      />
      <hr />
      <Dropdown
        label='SEARCH FOR'
        values={searches}
      />
      <hr />
      <Dropdown
        label='YEAR'
        values={years}
      />
    </div>
  </div>
)

const Radio = (props) => (
  <div className='radio-btn'>
    {props.values.map((value, i) => <div key={i}>
      <input type='radio' name={value} value={value} />
      <label>{value}</label>
    </div>)}
  </div>
)

const CheckBox = () => (
  <div className='checkbox'>
    <div>
      <input type='checkbox' />
      {/* <label>{label}</label> */}
    </div>
  </div>
)

const Dropdown = (props) => (
  <div className='filter-location'>
    <select>
      <option defaultValue='selected'>{props.label}</option>
      {props.values.map((value, i) => <option key={i} value={value}>{value}</option>)}
    </select>
  </div>
)

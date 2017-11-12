import React from 'react'

const cities = ['NATIONWIDE', 'CA', 'NY', 'VT']
const years = ['2012', '2013', '2014', '2015']
const ethnicities = ['Unknown', 'Not Hispanic or Latino', 'Multiple', 'Hispanic or Latino']
const sexes = ['Male', 'Female', 'Unknown']

export const Controls = () => (
  <div className='sidebar-left'>
    <Dropdown
      label='SELECT LOCATION'
      values={cities}
    />
    <Dropdown
      label='YEAR'
      values={years}
    />
    <Dropdown
      label='ETHNICITY'
      values={ethnicities}
    />
    <CheckBox />
    <Radio
      values={sexes}
    />
  </div>
)

// if nationwide then show options for arrests, estimated counts of crimes, annual counts of crime

// category: hate crimes, human trafficking, offenders, victim count

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
      <label>HATE CRIMES</label>
    </div>
    <div>
      <input type='checkbox' />
      <label>OFFENDERS</label>
    </div>
    <div>
      <input type='checkbox' />
      <label>VICTIMS</label>
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

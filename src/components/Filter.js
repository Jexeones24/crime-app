import React, { Component } from 'react'

const locations = ['NATIONWIDE', 'STATE']
const searchTypes = ['Crime Estimates', 'Hate Crimes', 'Offenders', 'Victims']
const years = ['1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']

export default class Filter extends Component {
  state = {
    location: '',
    type: '',
    year: ''
  }

  handleFilterChange = (e) => {
    let property = e.target.name.toLowerCase()
    let value = e.target.value
    console.log('property:', property)
    this.setState({ [property]: e.target.value}, () => {console.log(this.state)})
  }
  render () {
    let message='You selected '+this.state.selectValue;
    return (
      <div className='sidebar-left'>
        <h4>FILTERS</h4>
        <div className='controls'>

          <div className='select-location'>
            <select onChange={this.handleFilterChange.bind(this)} name='location'>
              <option value='' selected disabled hidden>SELECT LOCATION</option>
              {locations.map((location, i) => <option key={i} name='location' value={location} ref='location'>{location}</option>)}
            </select>
          </div>

          <hr />

          <div className='select-type'>
            <select onChange={this.handleFilterChange.bind(this)} name='type'>
              <option value='' selected disabled hidden>SEARCH FOR</option>
              {searchTypes.map((type, i) => <option key={i} name='type' value={type} ref='type'>{type}</option>)}
            </select>
          </div>

          <hr />

          <div className='select-year'>
            <select onChange={this.handleFilterChange.bind(this)} name='year'>
              <option value='' selected disabled hidden>YEAR</option>
              {years.map((year, i) => <option key={i} name='year' value={year} ref='year'>{year}</option>)}
            </select>
          </div>
        </div>

        <hr/>
        <p>{message}</p>
      </div>
    )
  }
}

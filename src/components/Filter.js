import React, { Component } from 'react'

const categories = ['Crime Estimates', 'Hate Crimes', 'Offenders', 'Victims']
const years = ['1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']

export default class Filter extends Component {
  state = {
    location: '',
    category: '',
    year: '',

    message: ''
  }

  handleFilterChange = (e) => {
    let property = e.target.name.toLowerCase()
    this.setState({
      [property]: e.target.value,
      message: 'You selected '+e.target.value
    })
  }

  render () {
    return (
      <div className='sidebar-left'>
        <h4>FILTERS</h4>
        <div className='controls'>

          <div className='select-location'>
            <div className='search-label'>
              <label> SEARCH</label>
            </div>

            <div>
              <input type='radio' name='location' value='nationwide' onChange={this.handleFilterChange} />
              <label htmlFor='location'> Nationwide</label>
            </div>
            <div>
              <input type='radio' name='location' value='state' onChange={this.handleFilterChange} />
              <label htmlFor='location'> State</label>
            </div>
          </div>

          <hr />

          <div className='select-category'>
            <div className='category-label'>
              <label> CATEGORY</label>
            </div>
            <select onChange={this.handleFilterChange.bind(this)} name='type'>
              {categories.map((category, i) => <option key={i} name='category' value={category}>{category}</option>)}
            </select>
          </div>

          <hr />

          <div className='select-year'>
            <div className='year-label'>
              <label> CHOOSE YEAR (1994-2016)</label>
            </div>
            <select onChange={this.handleFilterChange.bind(this)} name='year'>
              {years.map((year, i) => <option key={i} name='year' value={year} ref='year'>{year}</option>)}
            </select>
          </div>

          <hr/>

        </div>
        <div className='filter-msg'>
          <p id='message'>{this.state.message}</p>
        </div>
      </div>
    )
  }
}

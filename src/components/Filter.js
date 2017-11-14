import React, { Component } from 'react'

const categories = ['Crime Estimates', 'Hate Crimes', 'Offenders', 'Victims']
const years = ['1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016']

export default class Filter extends Component {
  state = {
    location: '',
    state: '',
    category: '',
    year: '',
    message: ''
  }

  handleFilterChange = (e) => {
    let property = e.target.name.toLowerCase()
    let value = e.target.value
    this.setState({
      [property]: e.target.value,
      message: 'You selected '+e.target.value
    }, () => console.log('state:', this.state, 'callback to App'))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleCrimeEstimatesByState(this.state.state)
  }
  renderStateParams = () => {
    return (
      <div className='state-params'>
        <div className='state-params-label'>
          <label> CHOOSE STATE</label>
        </div>
        <div className='select'>
          <div>
            <select name='state' onChange={this.handleFilterChange.bind(this)}>
              {this.props.states.map((state, i) => <option key={i} name='state' value={state}>{state}</option>)}
            </select>
          </div>
          <div>
            <form onSubmit={this.handleSubmit}>
              <button type='submit' id='btn-state-submit'>GO</button>
            </form>
          </div>
        </div>
      </div>
    )
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
            {this.state.location.trim() == 'state' ? this.renderStateParams() : []}
          </div>

          <hr />

          <div className='select-category'>
            <div className='category-label'>
              <label> CATEGORY</label>
            </div>
            <select onChange={this.handleFilterChange.bind(this)} name='category' defaultValue='no-value'>
              <option value='no-value' disabled hidden>
                Please select
              </option>
              {categories.map((category, i) => <option key={i} name='category' value={category}>{category}</option>)}
            </select>
          </div>

          <hr />

          <div className='select-year'>
            <div className='year-label'>
              <label> CHOOSE YEAR (1994-2016)</label>
            </div>
            <select onChange={this.handleFilterChange.bind(this)} name='year' defaultValue='no-value'>
              <option value='no-value' disabled hidden>
                Please select
              </option>
              {years.map((year, i) => <option key={i} name='year' value={year}>{year}</option>)}
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

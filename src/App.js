import React, { Component } from 'react'
import { states } from './states'
import { getHateCrimeCounts, getCrimeEstimatesNationwide, getHateCrimesByBiasName, getHateCrimesByState, getNationalOffenders, getVictimCount, getCrimeEstimatesByState, getStateInfo } from './lib/crimeService'
import { Main, Footer, Header } from './components'
import Filter from './components/Filter'
import './App.css'

class App extends Component {
  state = {
    nationalArrests: ['blah'],
    tableConfig: {
      colHeads: [],
      rowData: []
    }
  }

  filter = (result) => {
    for (var key in result){
      if(result.hasOwnProperty(key)){
        return result[key]
      }
    }
  }

  makeRowData = (data) => {
    return data.map(result => {
    let values = [],
        year = result['year']
      for (const key in result) {
        if(result.hasOwnProperty(key) && key !== 'year' ){
          values.push(result[key])
        }
      }
      return {[year]: values}
    })
  }

  componentDidMount() {
    getCrimeEstimatesNationwide()
      .then(data => {
        let colHeads = Object.keys(data.results[0]).filter(key => key !== 'year')
        let rowData = this.makeRowData(data.results)
        let tableConfig = Object.assign({}, this.state.tableConfig, {
          colHeads, rowData
        })
        this.setState({ tableConfig })
      })
    // args = year
    // getHateCrimeCounts()
    //   .then(data => {
    //     let filtered = data.results.filter(result => result.year === '2014')
    //     console.log('hate crimes for 2014:', filtered)
    //   })
    // args = bias_name - need a list of bias names in filter
    // getHateCrimesByBiasName()
    //   .then(data => {
    //     let filtered = data.results.filter(result => result.bias_name === 'Anti-Bisexual')
    //     console.log('hate crimes by bias name:', filtered)
    //   })
    // args = state, bias_name (results doesn't give state in resp obj)
    // getHateCrimesByState()
    //   .then(data => {
    //     let filtered = data.results.filter(result => result.bias_name === 'Anti-Bisexual')
    //     console.log('hate crimes by state:', filtered)
    //   })
    // // can filter by year && ethnicity
    // getNationalOffenders()
    //   .then(data => {
    //     let filtered = data.results.filter(result => result.ethnicity === 'Hispanic or Latino')
    //     console.log('national offenders by ethnicity:', filtered)
    //   })
    // filter by year
    // getVictimCount()
    //   .then(data => {
    //     let filtered = data.results.filter(result => result.year === '2015')
    //     console.log('victim count by offender_relationship in 2015:', filtered)
    //   })

  }

  abbreviate = (usState) => {
    let capitalized = usState.charAt(0).toUpperCase() + usState.slice(1).toLowerCase()
    return states[capitalized]
  }

  handleCrimeEstimatesByState = (usState) => {
    let abbr = this.abbreviate(usState).toLowerCase()
    getCrimeEstimatesByState(abbr)
      .then(data => console.log('crime estimates by state:', data.results))
  }


  // handleStateInfo = (state) => {
    // console.log('fetch state info for:', state)
    //https://www.blackbaud.com/files/support/guides/infinitytechref/Content/RESTAPI/3-0/CountryAndStateApi.htm#Country
  //   getStateInfo(state)
  //     .then(data => {console.log('state info for CA:', data)})
  // }

  render () {
    return (
      <div className='App'>
        <Header />
        <Filter
          handleStateInfo={this.handleStateInfo}
          handleCrimeEstimatesByState={this.handleCrimeEstimatesByState}
        />
        <Main
          tableConfig={this.state.tableConfig}
        />
        <div className='sidebar-right'></div>
        <Footer />
      </div>
    )
  }
}

export default App

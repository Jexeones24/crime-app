import React, { Component } from 'react'
import { states, captions } from './data'
import { getNationalCrimeEstimates, getStateCrimeEstimates, getHateCrimesByBiasName, getHateCrimesByState, getNationalOffenders, getVictimCount,  getStateInfo } from './lib/crimeService'
import { abbreviate, makeColHeads, filterObj, findMatchIndices, omit } from './lib/crimeHelper'
import { Main, Footer, Header } from './components'
import Filter from './components/Filter'
import './App.css'

class App extends Component {
  state = {
    caption: 'Crime Estimates Nationwide',
    tableConfig: {
      colHeads: [],
      rowData: []
    }
  }

  makeRowData = (data, header) => {
    return data.map(result => {
      let values = [],
       targetKey = result[header]
      for (const key in result) {
        if(result.hasOwnProperty(key) && key !== header ){
          values.push(result[key])
        }
      }
      return {[targetKey]: values}
    })
  }
  handleCrimeEstimatesByState = (usState) => {
    let abbr = abbreviate(usState)
    getStateCrimeEstimates(abbr)
    .then(data => {
      let parsedData = JSON.parse(JSON.stringify(data.results))
      let keys = (Object.keys(data.results[0]))
      let filterBy = ['state_abbr']
      let removeAt = findMatchIndices(keys, filterBy)
      let colHeads = omit(keys, removeAt)
      let newObj = filterObj(parsedData, colHeads)
      let rowData = this.makeRowData(newObj, 'year')
      let tableConfig = Object.assign({}, this.state.tableConfig, {
        colHeads, rowData
      })
      this.setState({ tableConfig })
    })
  }
  componentDidMount() {
    getNationalCrimeEstimates()
    .then(data => {
      let trash = ['year']
      let colHeads = makeColHeads(data.results[0], trash)
      let rowData = this.makeRowData(data.results, trash)
      let tableConfig = Object.assign({}, this.state.tableConfig, {
        colHeads, rowData
      })
      this.setState({ tableConfig })
    })

  }
  render () {
    const allStates = Object.keys(states)
    return (
      <div className='App'>
        <Header />
        <Filter
          states={allStates}
          handleStateInfo={this.handleStateInfo}
          handleCrimeEstimatesByState={this.handleCrimeEstimatesByState}
        />
        <Main
          tableConfig={this.state.tableConfig}
          caption={this.state.caption}
        />
        <div className='sidebar-right'></div>
        <Footer />
      </div>
    )
  }
}

// getHateCrimesByBiasName()
//   .then(data => {
//     // filter data on front end (bias name, year, etc)
//     let filtered = data.results.filter(result => result.bias_name === 'Anti-Bisexual')
//     console.log('hate crimes by bias name:', filtered)
//   })
// args = state, bias_name (results doesn't give state in resp obj)

// let abbr = abbreviate(usState)
// getHateCrimesByState(abbr)
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

export default App

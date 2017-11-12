import React, { Component } from 'react'
import { getHateCrimeCounts, getCrimeEstimatesNationwide, getHateCrimesByBiasName, getHateCrimesByState, getNationalOffenders, getVictimCount, getCrimeEstimatesByState, getStateInfo } from './lib/crimeService'
import { Table } from './components/Table'
import { Controls } from './components/Controls'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import './App.css'

class App extends Component {
  state = {
    nationalArrests: []
  }

  filter = (result) => {
    for (var key in result){
      if(result.hasOwnProperty(key)){
        return result[key]
      }
    }
  }

  componentDidMount() {
    // getCrimeEstimatesNationwide()
    //   .then(data => console.log('crime estimates nationwide:', data.results))
    // getCrimeEstimatesByState()
    //   .then(data => console.log('crime estimates by state:', data.results))

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
    // getStateInfo()
    //   .then(data => {console.log('state info for CA:', data)})
  }

  render () {
    return (
      <div className='App'>
        <Header />
        <Controls />
        <Main />
        <div className='sidebar-right'></div>
        <Footer />
      </div>
    )
  }
}

const Main = () => (
  <div className='main'>
    <Table />
  </div>
)

export default App

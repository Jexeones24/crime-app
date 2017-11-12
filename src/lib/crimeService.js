const API_KEY = 'DYo0a6mEuf2l1pJ0gliwwEodZj3fiW6jxk58xnao'
const BASE_URL = 'https://api.usa.gov/crime/fbi/ucr/'

// national arrests
export const getNationalArrests = () => {
  return fetch(`${BASE_URL}/arrests/national?api_key=${API_KEY}&per_page=100`)
  .then(resp => resp.json())
}

export const getHateCrimeCounts = () => {
  return fetch(`${BASE_URL}hc/count/national/bias_name?page=1&per_page=10&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

export const getEstimatedAnnualCounts = () => {
  return fetch(`${BASE_URL}estimates/national?page=1&per_page=50&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

// nationwide estimated counts of crime
export const getNationalCrimeEstimates = () => {
  return fetch(`${BASE_URL}estimates/national?page=1&per_page=50&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

export const getHateCrimesByBiasName = () => {
  return fetch(`${BASE_URL}hc/count/national/bias_name?page=1&per_page=10&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

export const getHateCrimesByState = () => {
  return fetch(`${BASE_URL}hc/count/states/NY/bias_name?page=1&per_page=10&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

// args = state, year (figure out how to encode that)
export const getHumanTraffickingByState = () => {
  return fetch(`${BASE_URL}ht/states?page=1&per_page=100&output=json&state_abbr=NY&year=%60%26year%3E2000%26year&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

// args = ethnicity, sex_code, age_num
export const getNationalOffenders = () => {
  return fetch(`${BASE_URL}offenders/count/national/ethnicity?page=1&per_page=10&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

// args = ethnicity, offender relationship, circumstance_name
export const getVictimCount = () => {
  return fetch(`${BASE_URL}victims/count/national/offender_relationship?page=1&per_page=10&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

// args = state postal code (ny) lower case
export const getCrimeRatesByState = () => {
  return fetch(`${BASE_URL}estimates/states/ny?page=1&per_page=50&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

// args = state postal code uppercase
export const getStateInfo = () => {
  return fetch(`${BASE_URL}geo/states/CA?api_key=${API_KEY}`)
  .then(resp => resp.json())
}
// info about states (county_id, county_name, FIPS)
  // https://api.usa.gov/crime/fbi/ucr/geo/states/${CA}?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv

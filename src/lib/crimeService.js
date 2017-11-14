const API_KEY = 'DYo0a6mEuf2l1pJ0gliwwEodZj3fiW6jxk58xnao'
const BASE_URL = 'https://api.usa.gov/crime/fbi/ucr/'

// CRIME ESTIMATES
// nationwide estimated counts of crime
export const getCrimeEstimatesNationwide = () => {
  return fetch(`${BASE_URL}estimates/national?page=1&per_page=50&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}

// args = state postal code (ny) lower case
export const getCrimeEstimatesByState = (abbr) => {
  return fetch(`${BASE_URL}estimates/states/${abbr}?page=1&per_page=50&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}


// HATE CRIMES
export const getHateCrimeCounts = () => {
  return fetch(`${BASE_URL}hc/count/national/bias_name?page=1&per_page=10&output=json&api_key=${API_KEY}`)
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


// OFFENDERS
// args = ethnicity, sex_code, age_num
export const getNationalOffenders = () => {
  return fetch(`${BASE_URL}offenders/count/national/ethnicity?page=1&per_page=10&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}


// VICTIMS
// args = ethnicity, offender relationship, circumstance_name
export const getVictimCount = () => {
  return fetch(`${BASE_URL}victims/count/national/offender_relationship?page=1&per_page=10&output=json&api_key=${API_KEY}`)
  .then(resp => resp.json())
}


// args = state postal code uppercase
export const getStateInfo = () => {
  return fetch(`${BASE_URL}geo/states/CA?api_key=${API_KEY}`)
  .then(resp => resp.json())
}

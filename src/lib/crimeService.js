const API_KEY = 'DYo0a6mEuf2l1pJ0gliwwEodZj3fiW6jxk58xnao'
const BASE_URL = 'https://api.usa.gov/crime/fbi/ucr/'
const params = {
  page: '1',
  per_page: '50',
  output: 'json',
  api_key: API_KEY
}
const esc = encodeURIComponent
const query = Object.keys(params)
  .map(k => esc(k) + '=' + esc(params[k]))
  .join('&')

// CRIME ESTIMATES
export const getNationalCrimeEstimates = () => {
  return fetch(BASE_URL + 'estimates/national?' + query)
  .then(resp => resp.json())
}
// args = state postal code (ny) lower case
export const getStateCrimeEstimates = (abbr) => {
  return fetch(BASE_URL + `estimates/states/${abbr.toLowerCase()}?` + query)
  .then(resp => resp.json())
}

// HATE CRIMES
export const getHateCrimesByBiasName = () => {
  return fetch(BASE_URL + 'hc/count/national/bias_name?' + query)
  .then(resp => resp.json())
}
export const getHateCrimesByState = (abbr) => {
  return fetch(`${BASE_URL}hc/count/states/${abbr.toUpperCase()}/bias_name?${query}`)
  .then(resp => resp.json())
}

// OFFENDERS
// args = ethnicity, sex_code, age_num
export const getNationalOffenders = (category) => {
  return fetch(`${BASE_URL}offenders/count/national/${category}?${query}`)
  .then(resp => resp.json())
}


// VICTIMS
// args = ethnicity, offender relationship, circumstance_name
export const getVictimCount = (category) => {
  return fetch(`${BASE_URL}victims/count/national/${category}?${query}`)
  .then(resp => resp.json())
}

// args = state postal code uppercase
export const getStateInfo = (abbr) => {
  return fetch(`${BASE_URL}geo/states/${abbr.toUpperCase()}?${query}`)
  .then(resp => resp.json())
}

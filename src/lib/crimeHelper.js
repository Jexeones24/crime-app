import { states } from '../data'

export const abbreviate = (usState) => {
  let capitalized = usState.charAt(0).toUpperCase() + usState.slice(1).toLowerCase()
  return states[capitalized]
}

// returns new array of objs with modified info
export const filterObj = (arr, keep) => {
  for(var i = 0; i < arr.length; i++){
    for(var key in arr[i]){
      if(keep.indexOf(key) === -1) {
        delete arr[i][key]
      }
    }
  }
  return arr
}

// returns indices of target values in array
export const findMatchIndices = (sourceArray, targets) => {
  let indices = []
  for (var i = 0; i < sourceArray.length; i++) {
    for (var j = 0; j < targets.length; j++) {
      if (sourceArray[i] === targets[j]) {
        indices.push(i)
      }
    }
  }
  return indices
}

// returns array values to keep
export const omit = (sourceArray, indices) => {
  for (var i = indices.length - 1; i >= 0; i--) {
    sourceArray.splice(indices[i], 1)
  }
  return sourceArray
}

export const makeColHeads = (obj, trash) => {
  let removeAt = findMatchIndices(obj, trash)
  return Object.keys(omit(obj, removeAt))
}

export const makeQueryParams = () => {

}

// handleStateInfo = (state) => {
//   getStateInfo(state)
//     .then(data => {console.log('state info for CA:', data)})
// }

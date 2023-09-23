import { isNotFalsy } from './isNotFalsy.js'
export function  (...params) {
  const returnMessage = []
  for (const values of params) {
    isNotFalsy(values, params)
    if (Array.isArray(values) && values.length > 1) {
      const typeOfData = values[values.length - 1]
      for (let i = 0; i < values.length - 1; i++) {
        const data = values[i]
        isNotFalsy(typeOfData, data)
        if (typeof (data) === typeOfData && !(data instanceof RegExp) && !(data instanceof Date)) {
          returnMessage.push(data)
        } else {
          switch (typeOfData) {
            case 'array':
              if (Array.isArray(data)) {
                returnMessage.push(data)
              } else { returnMessage.push(false) }
              break
            case 'date':
              if (data.constructor === Date) {
                returnMessage.push(data)
              } else { returnMessage.push(false) }
              break
            default:
              returnMessage.push(false)
              break
          }
        }
      }
    } else {
      return (`${values}, must be an array that has at least two elements. Which in the firsts elements you write the data you want to know if its data type is correct and the last one is the type of data you do expect to be. Valide types: date, array, object, boolean, string, number`)
    }
  }
  return returnMessage
}

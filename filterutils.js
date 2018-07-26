const isAnObject = val => {
  return !(!val || val.constructor.name.toLowerCase() !== 'object')
}

const isAnArray = val => {
  return !(!val || val.constructor.name.toLowerCase() !== 'array')
}

const processArray = (arrayToProcess, predicate, boolvalue) => {
  return arrayToProcess.map(
    t => isAnObject(t) ? filterBy(t, predicate, boolvalue) : t
  ).filter(x => predicate(x) === boolvalue)
}

const processObject = (objToProcess, predicate, boolvalue) => {
  const filteredObject = {}
  Object.keys(objToProcess).forEach(thisProperty => {
    if (isAnObject(objToProcess[thisProperty])) {
      filteredObject[thisProperty] = processObject(objToProcess[thisProperty], predicate, boolvalue)
    } else if (isAnArray(objToProcess[thisProperty])) {
      filteredObject[thisProperty] = processArray(objToProcess[thisProperty])
    } else {
      if (predicate(objToProcess[thisProperty]) === boolvalue) {
        filteredObject[thisProperty] = objToProcess[thisProperty]
      }
    }
  })
  return filteredObject
}

const filterBy = (objToProcess, predicate, boolvalue) => {
  if (isAnArray(objToProcess)) {
    return processArray(objToProcess, predicate, boolvalue)
  } else if (isAnObject(objToProcess)) {
    return processObject(objToProcess, predicate, boolvalue)
  }
  return predicate(objToProcess) === boolvalue ? objToProcess : undefined
}

module.exports = {
  filterBy
}

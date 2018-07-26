const isAnObject = val => {
    return !(!val || val.constructor.name.toLowerCase() !== 'object')
}

const filterBy = (objToProcess, predicate, boolvalue) => {
    const filteredObject = {}
    Object.keys(objToProcess).forEach(thisProperty => {
      if(isAnObject(objToProcess[thisProperty])) {
          filteredObject[thisProperty] = filterBy(objToProcess[thisProperty], predicate, boolvalue)
      }
      else {
          if(predicate(objToProcess[thisProperty]) === boolvalue) {
              filteredObject[thisProperty] = objToProcess[thisProperty]
          }
      }
    })
    return filteredObject
}

module.exports = {
    filterBy
}

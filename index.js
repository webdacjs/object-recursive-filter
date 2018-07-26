const {filterBy} = require('./filterutils.js')

const filterOutBy = (objToProcess, predicate) => {
  return filterBy(objToProcess, predicate, false)
}

const filterInBy = (objToProcess, predicate) => {
  return filterBy(objToProcess, predicate, true)
}

module.exports = {
  filterOutBy,
  filterInBy
}

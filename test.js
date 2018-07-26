const test = require('tape')
const colorize = require('tap-colorize')

// Modules loaded for testing.
const orf = require('./index.js')

// Object to test
const countries = {
  Colombia: { code: 'co', area: 1197411 },
  Argentina: { code: 'ar', area: 2766890 },
  canada: { code: 'ca', area: 9984670 },
  NonExistingCountry: undefined,
  Brasil: { code: 'br', area: 8511965 },
  anotherNonExisting: null,
  europe: {
    France: {code: 'fr', area: 551394},
    NonEuropeanCountry: null
  }
}

// Contries with an Array of Objects

test.createStream().pipe(colorize()).pipe(process.stdout)

test('Testing filtering out null or undefined values.', t => {
  t.plan(3)
  const filteredObj = orf.filterOutBy(countries, x => !x)
  t.equal(Object.keys(filteredObj).indexOf('NonExistingCountry'), -1, 'NonExistingCountry is gone.')
  t.equal(Object.keys(filteredObj).indexOf('anotherNonExisting'), -1, 'anotherNonExisting is gone.')
  t.equal(Object.keys(filteredObj.europe).indexOf('NonEuropeanCountry'), -1, 'NonEuropeanCountry is gone.')
  t.end()
})

test('Testing filtering in numeric values.', t => {
  t.plan(3)
  const filteredObj = orf.filterInBy(countries, x => !isNaN(x))
  t.equal(filteredObj.Colombia.code, undefined, 'code filtered out from Colombia.')
  t.equal(filteredObj.canada.area, 9984670, 'area in canada is preserved')
  t.equal(filteredObj.europe.France.code, undefined, 'code filtered out in nested country')
  t.end()
})

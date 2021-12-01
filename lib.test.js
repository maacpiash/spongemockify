const sp = require('./lib')

const isUpperCase = (c) => c == c.toUpperCase() && c != c.toLowerCase()
const isLowerCase = (c) => c != c.toUpperCase() && c == c.toLowerCase()
const isNonAlpha = (c) => c == c.toUpperCase() && c == c.toLowerCase()

function isValid (inp) {
  let str = sp.spongemockify(inp)
  let max = str.length
  let upCount = 0
  let loCount = 0
  let current = ''
  for (let j = 0; j < max; j++) {
    current = str.charAt(j)
    if (isNonAlpha(current)) {
      upCount = 0
      loCount = 0
      continue
    }
    if (isUpperCase(current)) {
      upCount++
      loCount = 0
      if (upCount == 3)
        return false
    }
    if (isLowerCase(current)) {
      loCount++
      upCount = 0
      if (loCount == 3)
        return false
    }
  }
  return true
}

test('generates a valid spongemockifed string #  1', () => {
  const test_str = sp.spongemockify('I need healing.')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string #  2', () => {
  const test_str = sp.spongemockify('Heroes never die!')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string #  3', () => {
  const test_str = sp.spongemockify('Imagination is the essence of discovery.')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string #  4', () => {
  const test_str = sp.spongemockify('FIRE IN THE HOLE!')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string #  5', () => {
  const test_str = sp.spongemockify('Cheers love, the cavalry\'s here!')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string #  6', () => {
  const test_str = sp.spongemockify('I\'ve got you in my sights')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string #  7', () => {
  const test_str = sp.spongemockify('DIE! DIE! DIE!')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string #  8', () => {
  const test_str = sp.spongemockify('1 shot, 1 kill')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string #  9', () => {
  const test_str = sp.spongemockify('It\'s high noon somewhere in the world.')
  expect(isValid(test_str)).toBe(true)
})

test('generates a valid spongemockifed string # 10', () => {
  const test_str = sp.spongemockify('Experience... tranquility.')
  expect(isValid(test_str)).toBe(true)
})

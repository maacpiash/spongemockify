function spongemockify(str) {
  let rand = 0

  let upperCount = 0 // counts consecutive uppercase characters
  let lowerCount = 0 // counts consecutive lowercase characters

  let characters = str.split('')

  let newChars = []

  for (let c of characters) {
    if (upperCount === 2) {
      newChars.push(c.toLowerCase())
      upperCount = 0
      lowerCount = 1
    } else if (lowerCount === 2) {
      newChars.push(c.toUpperCase())
      lowerCount = 0
      upperCount = 1
    } else {
      // upperCount <= 1 && lowerCount <= 1
      rand = Math.floor(Math.random() * 2) // either 0 or 1 only
      newChars.push(rand ? c.toUpperCase() : c.toLowerCase())
      if (rand)
        upperCount++
      else
        lowerCount++
    }
  }

  return newChars.join('')
}

module.exports = { spongemockify }

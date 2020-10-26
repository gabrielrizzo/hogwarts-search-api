const parseQueryStringToString = (queryString) => {
  return Object.keys(queryString).reduce((acc, key, index, array) => {
    acc = `${key}=${queryString[key]}`

    if (index !== array.length - 1) {
      acc = acc + '&'
    }
    return acc
  }, '')
}

module.exports = {
  parseQueryStringToString
}

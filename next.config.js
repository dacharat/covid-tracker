const getEndpoint = () => {
  if (process.env.MOCK === 'true') {
    return 'http://localhost:8000'
  } else {
    return process.env.NODE_ENV === 'production'
      ? 'https://covid-tracker-xi.now.sh'
      : 'http://localhost:3000'
  }
}

module.exports = {
  env: {
    ENDPOINT: getEndpoint(),
  },
}

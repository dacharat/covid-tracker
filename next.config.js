module.exports = {
  env: {
    endpoint:
      process.env.NODE_ENV === 'production'
        ? 'https://covid-tracker-xi.now.sh'
        : 'http://localhost:3000/',
  },
}

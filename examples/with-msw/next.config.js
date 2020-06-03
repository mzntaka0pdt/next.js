const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const { server } = require('./mocks/server')

module.exports = (phase) => {
  if ([PHASE_DEVELOPMENT_SERVER].includes(phase)) {
    // Enable API mocking when serving our application in development mode.
    // This allows to any traffic issued by `getServerSideProps` and similar
    // to go through the request interception, and potentially being mocked.
    server.listen()
  }

  return {
    env: {
      isMockingEnabled: process.env.NODE_ENV === 'development',
    },
  }
}

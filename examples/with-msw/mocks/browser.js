import { setupWorker } from 'msw'
const { handlers } = require('./handlers')

const worker = setupWorker(...handlers)

module.exports = {
  worker,
}

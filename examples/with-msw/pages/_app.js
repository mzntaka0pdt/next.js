if (process.env.isMockingEnabled && typeof window !== 'undefined') {
  const { worker } = require('../mocks/browser')
  worker.start()
}

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

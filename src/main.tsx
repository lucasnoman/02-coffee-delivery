import './globals.css'

import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk'
import { TracingInstrumentation } from '@grafana/faro-web-tracing'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { CoffeeContextProvider } from './contexts/coffee-context'
import { routeTree } from './routeTree.gen'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const router = createRouter({ routeTree })

// NOTE precisei rodar um app Node.js como proxy com lib que libera o CORS.
// Mesmo no Grafana Cloud configurado para aceitar * como fonte de dados, o CORS não funcionou.
const proxyUrl = 'http://localhost:8080/'

initializeFaro({
  url:
    proxyUrl +
    'https://faro-collector-prod-sa-east-1.grafana.net/collect/2ec5c3d6de75e07b1cdb51483449dce4',
  instrumentations: [...getWebInstrumentations(), new TracingInstrumentation()],
  app: {
    name: '02-coffee-delivery',
    version: '1.0.0',
    environment: 'production',
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoffeeContextProvider>
      <RouterProvider router={router} />
    </CoffeeContextProvider>
  </React.StrictMode>,
)

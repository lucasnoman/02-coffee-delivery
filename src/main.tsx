import './globals.css'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { CoffeeContextProvider } from './contexts/coffee-context'
// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
// Create a new router instance
const router = createRouter({ routeTree })

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CoffeeContextProvider>
      <RouterProvider router={router} />
    </CoffeeContextProvider>
  </React.StrictMode>,
)

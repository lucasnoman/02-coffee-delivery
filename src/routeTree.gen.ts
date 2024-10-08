/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as CheckoutIndexImport } from './routes/checkout/index'
import { Route as SuccessDataImport } from './routes/success/$data'

// Create Virtual Routes

const AboutLazyImport = createFileRoute('/about')()

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CheckoutIndexRoute = CheckoutIndexImport.update({
  path: '/checkout/',
  getParentRoute: () => rootRoute,
} as any)

const SuccessDataRoute = SuccessDataImport.update({
  path: '/success/$data',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/success/$data': {
      id: '/success/$data'
      path: '/success/$data'
      fullPath: '/success/$data'
      preLoaderRoute: typeof SuccessDataImport
      parentRoute: typeof rootRoute
    }
    '/checkout/': {
      id: '/checkout/'
      path: '/checkout'
      fullPath: '/checkout'
      preLoaderRoute: typeof CheckoutIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutLazyRoute,
  SuccessDataRoute,
  CheckoutIndexRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/success/$data",
        "/checkout/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/success/$data": {
      "filePath": "success/$data.tsx"
    },
    "/checkout/": {
      "filePath": "checkout/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

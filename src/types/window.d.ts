import { GotRequestFunction } from 'got'
declare global {
  interface Window {
    contextModules: {
      got: GotRequestFunction
    }
  }
}

export {}

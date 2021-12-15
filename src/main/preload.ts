import { contextBridge } from 'electron'

import got from 'got'

contextBridge.exposeInMainWorld('contextModules', {
  got: async (url: string, options = {}) => {
    return got(url, {
      ...options,
      timeout: 7000,
      retry: 3
    })
  }
})
console.log(`preload running ...`)

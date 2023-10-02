import type { Config, PageContextServer } from 'vike/types'

export default {
  title: ({ is404 }: PageContextServer) => {
    console.log('title function') // never called
    return is404 ? 'Page not found' : 'Internal Server Error'
  }
} satisfies Config

declare global {
  namespace VikePackages {
    interface ConfigVikeReact {
      title?: Function | string
    }
  }
}

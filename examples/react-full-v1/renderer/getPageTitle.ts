export { getPageTitle }

import type { PageContext } from 'vike/types'

function getPageTitle(pageContext: PageContext): string {
  console.log(pageContext.config.title) // undefined
  if (pageContext.configEntries.title?.[0]) {
    console.log(pageContext.configEntries.title?.[0].configValue) // undefined
  }
  const title =
    // Title defined dynamically by onBeforeRender()
    pageContext.title ||
    // Title defined statically by /pages/some-page/+title.js (or by `export default { title }` in /pages/some-page/+config.js)
    // The config 'pageContext.config.title' is a custom config we defined at ./+config.ts
    (isCallable(pageContext.config.title) && pageContext.config.title()) ||
    pageContext.config.title ||
    'Demo'
  return title
}

function isCallable<T extends (...args: unknown[]) => unknown>(thing: T | unknown): thing is T {
  return thing instanceof Function || typeof thing === 'function'
}

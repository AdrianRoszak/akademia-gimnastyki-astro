import { onRequest } from './_noop-middleware.mjs'
import { c as createExports } from './chunks/entrypoint_Be0ocXTe.mjs'
import { manifest } from './manifest_Bd_lK15u.mjs'
import { renderers } from './renderers.mjs'

const _page0 = () => import('./pages/_image.astro.mjs')
const _page1 = () => import('./pages/index.astro.mjs')

const pageMap = new Map([
  [
    'node_modules/.pnpm/astro@4.14.2_@types+node@22.4.1_typescript@5.5.4/node_modules/astro/dist/assets/endpoint/generic.js',
    _page0,
  ],
  ['src/pages/index.astro', _page1],
])
const serverIslandMap = new Map()

const _manifest = Object.assign(manifest, {
  pageMap,
  serverIslandMap,
  renderers,
  middleware: onRequest,
})
const _args = {
  middlewareSecret: '887f7f83-4462-40a7-883a-c5400b3f0823',
  skewProtection: false,
}
const _exports = createExports(_manifest, _args)
const __astrojsSsrVirtualEntry = _exports.default

export { __astrojsSsrVirtualEntry as default, pageMap }

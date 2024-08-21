import {
  a as addAttribute,
  e as createAstro,
  c as createComponent,
  m as maybeRenderHead,
  f as renderComponent,
  b as renderHead,
  d as renderSlot,
  r as renderTemplate,
} from '../chunks/astro/server_BzgV5NAo.mjs'
/* empty css                                 */
export { renderers } from '../renderers.mjs'

const $$Astro$1 = createAstro()
const $$Layout = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots)
    Astro2.self = $$Layout
    const { title } = Astro2.props
    return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, 'content')}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots['default'])} </body></html>`
  },
  '/Users/adrian/Desktop/Adrian/Projects/MYPROJECTS/WEIRDO/AkademiaGimnastyki/akademia-gimnastyki-astro/src/layouts/Layout.astro',
  void 0,
)

const $$Astro = createAstro()
const $$Index = createComponent(
  ($$result, $$props, $$slots) => {
    const Astro2 = $$result.createAstro($$Astro, $$props, $$slots)
    Astro2.self = $$Index
    return renderTemplate`${renderComponent(
      $$result,
      'Layout',
      $$Layout,
      { title: 'Welcome to Astro', 'data-astro-cid-j7pv25f6': true },
      {
        default: ($$result2) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>Welcome to <span class="text-gradient" data-astro-cid-j7pv25f6>AG</span></h1> <p class="instructions" data-astro-cid-j7pv25f6>
To get started, open the directory <code data-astro-cid-j7pv25f6>src/pages</code> in your project.<br data-astro-cid-j7pv25f6>
Tweak the "Welcome to Akademia Gimnastyki" message above.
</p> </main> `,
      },
    )} `
  },
  '/Users/adrian/Desktop/Adrian/Projects/MYPROJECTS/WEIRDO/AkademiaGimnastyki/akademia-gimnastyki-astro/src/pages/index.astro',
  void 0,
)

const $$file =
  '/Users/adrian/Desktop/Adrian/Projects/MYPROJECTS/WEIRDO/AkademiaGimnastyki/akademia-gimnastyki-astro/src/pages/index.astro'
const $$url = ''

const _page = /*#__PURE__*/ Object.freeze(
  /*#__PURE__*/ Object.defineProperty(
    {
      __proto__: null,
      default: $$Index,
      file: $$file,
      url: $$url,
    },
    Symbol.toStringTag,
    { value: 'Module' },
  ),
)

const page = () => _page

export { page }

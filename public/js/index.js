import{render,html}from"../node_modules/uhtml/esm/index.js";import"./my-counter.js";addEventListener("DOMContentLoaded",()=>{render(document.body,html`
      <my-counter />
      <footer></footer>
    `),fetch("/package.json").then(e=>e.json()).then(({description:e,version:o})=>{render(document.querySelector("footer"),html`
          ${e} v${o}
        `)})},{once:!0});
import{render as e,html as o}from"../node_modules/uhtml/esm/index.js";import"./my-counter.js";addEventListener("DOMContentLoaded",()=>{e(document.body,o`
      <my-counter />
      <footer></footer>
    `),fetch("package.json").then(e=>e.json()).then(({description:t,version:n})=>{e(document.querySelector("footer"),o`
          ${t} v${n}
        `)})},{once:!0});
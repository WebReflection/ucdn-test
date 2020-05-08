import { render, html } from 'uhtml';

import './my-counter.js';

addEventListener(
  'DOMContentLoaded',
  () => {

    // populate the body
    render(document.body, html`
      <my-counter />
      <footer></footer>
    `);

    // fetch project details and populate the footer
    fetch('/package.json')
      .then(_ => _.json())
      .then(({description, version}) => {
        render(document.querySelector('footer'), html`
          ${description} v${version}
        `);
      });
  },
  {once: true}
);

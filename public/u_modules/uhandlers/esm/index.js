import{isArray as t}from"../../uarray/esm/index.js";export const aria=t=>e=>{for(const r in e)t.setAttribute("role"===r?r:"aria-"+r,e[r])};export const attribute=(t,e)=>{let r,o=!0;const n=document.createAttributeNS(null,e);return e=>{r!==e&&(r=e,null==r?o||(t.removeAttributeNode(n),o=!0):(n.value=e,o&&(t.setAttributeNodeNS(n),o=!1)))}};export const data=({dataset:t})=>e=>{for(const r in e)t[r]=e[r]};export const event=(e,r)=>{let o,n=r.slice(2);return!(r in e)&&r.toLowerCase()in e&&(n=n.toLowerCase()),r=>{const s=t(r)?r:[r,!1];o!==s[0]&&(o&&e.removeEventListener(n,o,s[1]),(o=s[0])&&e.addEventListener(n,o,s[1]))}};export const ref=t=>e=>{"function"==typeof e?e(t):e.current=t};export const setter=(t,e)=>r=>{t[e]=r};export const text=t=>{let e;return r=>{e!=r&&(e=r,t.textContent=null==r?"":r)}};
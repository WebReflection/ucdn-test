import{define}from"../node_modules/uce/esm/index.js";define("my-counter",{init(){this.count=0,this.dec=(()=>{this.count--,this.render()}),this.inc=(()=>{this.count++,this.render()}),this.render()},render(){this.html`
      <button onclick="${this.dec}">-</button>
      <span>${this.count}</span>
      <button onclick="${this.inc}">+</button>
    `}});
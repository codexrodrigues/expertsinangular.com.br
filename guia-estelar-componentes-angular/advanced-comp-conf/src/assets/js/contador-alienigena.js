// contador-alienigena.js
class ContadorAlienigena extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.count = 0;
        this.render();
    }

    connectedCallback() {
        this.addEventListener('click', this.increment.bind(this));
    }

    disconnectedCallback() {
        this.removeEventListener('click', this.increment.bind(this));
    }

    increment() {
        this.count++;
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block;
          padding: 10px;
          background: #AD23F3;
          color: #ffffff;
          font-size: 20px;
          cursor: pointer;
        }
      </style>
      <div>Clique para contar: ${this.count}</div>
    `;
    }
}

customElements.define('contador-alienigena', ContadorAlienigena);

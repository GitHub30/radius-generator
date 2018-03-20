// 差分のみ再描画
import {html, render} from 'https://unpkg.com/lit-html@0.7.1/lit-html.js';


class RadiusGenerator extends HTMLElement {

    static get observedAttributes() {
        return ['radius'];
    }

    get radius() {
        return this.getAttribute('radius');
    }

    set radius(val) {
        this.setAttribute('radius', val);
    }

    get template() {
        return html`
      <style>
        .wrapper {
          padding: 20px;
        }
        .container {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .target {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 300px;
          height: 200px;
          background-color: #eee;
        }
        .controls {
          display: flex;
          justify-content: center;
          padding: 10px 0;
        }
        .controls span {
          margin-right: 10px;
        }
      </style>
      <div class="wrapper">
        <div class="container">
          <div class="target" style="border-radius: ${this.radius}px;">
            border-radius:  ${this.radius}px;
          </div>
        </div>
        <div class="controls">
          <span>radius: </span>
          <input type="range" min="0" max="100" value="${this.radius}">    
        </div>
      </div>
    `;
    }

    constructor() {
        super();

        // shadowRootを返す (Shadow DOM をつくる)
        this.attachShadow({
            mode: 'open'
        });

        // イベントに渡す this の解決
        this.updateRadius = this.updateRadius.bind(this);

        this.render();
    }

    // Documentに追加されたタイミング
    connectedCallback() {
        this.shadowRoot.addEventListener('input', this.updateRadius);
    }

    // Documentから削除されたタイミング
    disconnectedCallback() {
        this.shadowRoot.removeEventListener('input', this.updateRadius);
    }

    // observedAttributesで指定した属性が、追加、削除、更新、または置換されたとき
    attributeChangedCallback(attrName, oldVal, newVal) {
        this.render();
    }

    updateRadius(e) {
        this.radius = e.target.value;
    }

    // lit-html で描画 (テンプレート, this.shadowRoot)
    render() {
        render(this.template, this.shadowRoot);
    }

}

customElements.define('radius-generator', RadiusGenerator);
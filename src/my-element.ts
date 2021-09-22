import {LitElement, html, customElement, property, css, unsafeCSS} from 'lit-element'

const image = require('./SLICKTEAM-A3.png')
const path = require('path')
const filepath = path.resolve(image);

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('slick-login')
export class SlickLogin extends LitElement {
  static styles = css`    
    * {
      display: block;
      font-family: Gill Sans, sans-serif;
    }
    .container {
      margin: auto;
      width: 20%;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 4px;
    }
    
    .container-header {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .container-body {
      padding: 10px 15px;
    }
    
    .container-action {
      padding: 10px 15px 15px;
    }
    
    .input {
      display: block;
    }
    
    .fit {
      width: 80%;
      padding: 5px 0;
      box-sizing: border-box;
    }
    
    input {
      border-radius: 0.25rem;
      width: 100%;
      box-sizing: border-box;
      margin: 10px 0;
      border: 1px solid #e2e8f0;
      box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
      padding: 12px 15px;
    }
    
    label {
      color: #5e5e5e;
      font-weight: 550;
      font-size: 12;
    }
    
    button {
      background-color: #F97316;
      border: 1px solid #F97316;
      border-radius: 4px;
      box-shadow: rgba(0, 0, 0, .1) 0 2px 4px 0;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      font-size: 16px;
      font-weight: 550;
      outline: none;
      padding: 10px 25px;
      text-align: center;
      transform: translateY(0);
      transition: transform 150ms, box-shadow 150ms;
    }

    button:hover {
      background-color: #EA580C;
      box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
      transform: translateY(-2px);
    }
    @media (min-width: 768px) {
      button {
        padding: 10px 30px;
      }
    }
  `

  /**
   * The username linked to the first input
   */
  @property({ type: String })
  username = ''

  /**
   * The password linked to the second input
   */
  @property({ type: Boolean })
  showConsoleHelp = true

  /**
   * The button's color format must be ^#([A-F|a-f|0-9]{6}|[A-F|a-f|0-9]{3})$
   */
  @property({type: String})
  buttonColor = '#FFF'

  getButtonColor() {
    return css`${unsafeCSS(this.buttonColor)}`
  }

  render() {
    return html`
      <div class="container">
        <div class="container-header">
          <img class="fit" src="${filepath}" alt="The logo you want to display as the header of the card">
        </div>
        <div class="container-body">
          <div class="input">
            <label for="username">Identifiant</label>
            <input id="username" type="text" placeholder="Identifiant">
          </div>
          <div class="input">
            <label for="password">Mot de passe</label>
            <input id="password" type="password" placeholder="******************">
          </div>
        </div>
        <div class="container-action">
          <button @click=${this._onConnect}>
            Se connecter
          </button>
        </div>
      </div>
      <slot></slot>
    `
  }

  private _onConnect() {
    if (this.showConsoleHelp) {
      console.log(`Event 'slick-connect' emitted`)
      console.log(`${this.usernameInput.value ? `First input value : ${this.usernameInput.value}` : 'No value entered in first input'}`)
      console.log(`${this.passwordInput.value ? `Second input value : ${this.passwordInput.value}` : 'No value entered in second input'}`)
    }
    const event = new CustomEvent('slick-connect', { detail: { username: this.usernameInput.value, password: this.passwordInput.value } });
    dispatchEvent(event);
  }

  // @ts-ignore
  private get usernameInput(): HTMLInputElement {
    return this.shadowRoot!.getElementById('username')! as HTMLInputElement;
  }

  // @ts-ignore
  private get passwordInput(): HTMLInputElement {
    return this.shadowRoot!.getElementById('password')! as HTMLInputElement;
  }

  foo(): string {
    return 'foo'
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'slick-login': SlickLogin
  }
}


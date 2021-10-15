import {LitElement, html, customElement, property, css} from 'lit-element'

/**
 * An authentication web component
 *
 */
@customElement('slick-login')
export class SlickLogin extends LitElement {
  static styles = css`    
    .container {
      display: block;
      background: #FFF;
      margin: auto;
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
      padding: 5px 10px;
      text-align: center;
      transition: transform 150ms, box-shadow 150ms;
    }

    button:hover {
      background-color: #EA580C;
      box-shadow: rgba(0, 0, 0, .15) 0 3px 9px 0;
      transform: translateY(-2px);
    }
    
    @media (min-width: 600px) {
      button {
        padding: 10px 30px;
      }
    }
    
    @media (min-width: 1600px) {
      .container { 
        width: 650px;
      }
      
      input {
        margin: 10px 0 25px 0;
      }
      
      button {
        width: 100%;
      }
    }
    
    @media (min-width: 600px) and (max-width: 1599px) {
      .container { 
        width: 400px;
      }
    }
    
    @media (max-width: 599px) {
      .container { 
          width: 95%;
        }
    }
  `;

  /**
   * A boolean property to show some usage hints in the console
   */
  @property({ type: Boolean })
  showConsoleHelp = true

  /**
   * The first's input label defaults to username
   */
  @property({type: String})
  firstLabel = 'Username'

  /**
   * The first's input label defaults to password
   */
  @property({type: String})
  secondLabel = 'Password'

  /**
   * The button's label defaults to Sign in
   */
  @property({type: String})
  buttonText = 'Sign in'

  /**
   * A boolean property to hide the header's logo if needed
   */
  @property({type: Boolean})
  hideLogo = false

  /**
   * The header's image path
   */
  @property({type: String})
  imgSrc = ''

  render() {
    return html`
      <div class="container">
        ${this.hideLogo ?
            html`` :
            html`
              <div class="container-header">
                <img class="fit" src="${this.imgSrc}" alt="The logo you want to display as the header of the card">
              </div>
            `}
        <div class="container-body">
          <div class="input">
            <label for="username">${this.firstLabel}</label>
            <input id="username" type="text" placeholder="${this.firstLabel}">
          </div>
          <div class="input">
            <label for="password">${this.secondLabel}</label>
            <input id="password" type="password" placeholder="******************">
          </div>
        </div>
        <div class="container-action">
          <button @click=${this._onConnect}>
            ${this.buttonText}
          </button>
        </div>
      </div>
    `
  }

  private _onConnect() {
    const event = new CustomEvent('slick-connect', { bubbles: true, detail: { username: this.usernameInput.value, password: this.passwordInput.value } });
    this.dispatchEvent(event);
  }

  // @ts-ignore
  private get usernameInput(): HTMLInputElement {
    return this.shadowRoot!.getElementById('username')! as HTMLInputElement;
  }

  // @ts-ignore
  private get passwordInput(): HTMLInputElement {
    return this.shadowRoot!.getElementById('password')! as HTMLInputElement;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'slick-login': SlickLogin
  }
}


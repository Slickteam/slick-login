import { html } from 'lit-html';
import './slick-login.ts';

export default {
    title: 'SlickLogin',
    component: 'slick-login',
    argTypes: {
        showConsoleHelp: { control: 'boolean' },
        firstLabel: { control: 'text' },
        secondLabel: { control: 'text' },
        buttonText: { control: 'text' },
        hideLogo: { control: 'boolean' },
        imgSrc: { control: 'text' },
        onClick: { action: 'onClick' }
    }
};


function Template({
                      showConsoleHelp= true,
                      firstLabel='Username',
                      secondLabel='Password',
                      buttonText='Sign in',
                      hideLogo= false,
                      imgSrc='./SLICKTEAM-A3.png',
                  }) {
    return html`
        <slick-login
                .show-console-help=${showConsoleHelp}
                .first-label=${firstLabel}
                .second-label=${secondLabel}
                .button-text=${buttonText}
                .hide-logo=${hideLogo}
                .img-src=${imgSrc}
        ></slick-login>
    `;
}

export const Regular = Template.bind({});

import { html } from 'lit-html';
import './my-element.ts';

export default {
    title: 'SlickLogin',
    component: 'slick-login',
    argTypes: {
        username: { control: 'text' },
        password: { control: 'text' },
        onClick: { action: 'onClick' }
    }
};


function Template({
                    username= '',
                    password=''
                  }) {
    return html`
        <slick-login
               .username=${username}
               .password=${password}
        ></slick-login>
    `;
}

export const Regular = Template.bind({});

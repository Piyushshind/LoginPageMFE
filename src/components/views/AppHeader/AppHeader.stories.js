import React from 'react'
import AppHeader from './AppHeader';



export default {
    title: 'Component/AppHeader',
    parameters: {
        component: AppHeader,
        componentSubtitle:'heading holder ...........................................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <AppHeader {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'AppHeader'
}
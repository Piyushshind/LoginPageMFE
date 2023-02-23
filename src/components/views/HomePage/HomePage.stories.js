import React from 'react'
import HomePage from './HomePage';



export default {
    title: 'Component/HomePage',
    parameters: {
        component: HomePage,
        componentSubtitle:'HomePage .............................................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <HomePage {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'HomePage'
}
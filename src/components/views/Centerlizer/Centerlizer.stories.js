import React from 'react'
import Centerlizer from './Centerlizer';



export default {
    title: 'Component/Centerlizer',
    parameters: {
        component: Centerlizer,
        componentSubtitle:'this componenet is used to center ...............................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Centerlizer {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Centerlizer'
}
import React from 'react'
import Vertical from './Vertical';



export default {
    title: 'Component/Vertical',
    parameters: {
        component: Vertical,
        componentSubtitle:'to arrange card in vertical a .....................................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Vertical {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Vertical'
}
import React from 'react'
import RoutingComponant from './RoutingComponant';



export default {
    title: 'Component/RoutingComponant',
    parameters: {
        component: RoutingComponant,
        componentSubtitle:'for pages raouting ................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <RoutingComponant {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'RoutingComponant'
}
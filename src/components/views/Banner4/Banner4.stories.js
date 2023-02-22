import React from 'react'
import Banner4 from './Banner4';



export default {
    title: 'Component/Banner4',
    parameters: {
        component: Banner4,
        componentSubtitle:'for banner purpose ............................................',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <Banner4 {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'Banner4'
}
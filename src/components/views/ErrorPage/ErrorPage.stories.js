import React from 'react'
import ErrorPage from './ErrorPage';



export default {
    title: 'Component/ErrorPage',
    parameters: {
        component: ErrorPage,
        componentSubtitle:'for incorrect user url request to shows an error page',
        docs: {
            description: {
                component: ''
            }
        }
    }
};

const Template = ( args ) => (
    <ErrorPage {...args} />
)

export const BasicUsage = Template.bind( {} );
BasicUsage.args = {}

export const Playground = Template.bind( {} );

Playground.args = {
    title: 'ErrorPage'
}
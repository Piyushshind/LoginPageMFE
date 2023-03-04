import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { removeFromCart, updateCart } from './cartHelpers';
import produce from 'immer';

export const useMfeStore = create(persist((set, get) => ({
    user: null,
    count: 0,
    increment: () => set(state => ({ ...state, count: state.count + 1 })),
    cart: {
        cartItems: [],
        pricingDetails: {
            subtotal: 0,
            deliveryCharges: 0,
            total: 0,
        }
    },
    loginUser: (user) => set(produce(state => ({ ...state, user }))), // clears the entire store, actions included
    logoutUser: () => set(produce((state) => ({ ...state, user: null }))),
    addToCart: (product) => set(produce(state => {
        state.cart = updateCart(state.cart, product);
    })),
    removeFromCart: (product) => set(produce(state => {
        state.cart = removeFromCart(state.cart, product);
    })),
    checkoutCart: () => set(produce(state => {
        state.cart = {
            cartItems: [],
            pricingDetails: {
                subtotal: 0,
                deliveryCharges: 0,
                total: 0,
            }
        };
    })),
}), {
    name: 'mfe-store',
    getStorage: () => localStorage,
}));

export default useMfeStore;


// const echo = (a) => {
//     console.log(a)
// }

// const storeConsoleLog = (e, local) => {
//     localStorage.setItem(local, e)
//     return e;
// }

// console.log(useState())

// echo(
//     storeConsoleLog('Hello there', 'store')
// )
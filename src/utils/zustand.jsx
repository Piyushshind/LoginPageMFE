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
    loginUser: (user) => set(state => ({ ...state, user }), true), // clears the entire store, actions included
    logoutUser: () => set((state) => ({ ...state, user: null })),
    addToCart: (product) => set(produce(state => { state.cart = updateCart(state.cart, product) })),
    removeFromCart: (product) => set(produce(state => { state.cart = removeFromCart(state.cart, product) })),
}), {
    name: 'mfe-store',
    getStorage: () => localStorage,
}));

export default useMfeStore;
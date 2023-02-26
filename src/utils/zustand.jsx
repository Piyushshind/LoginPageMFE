import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useMfeStore = create(persist((set, get) => ({
    user: null,
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
    addToCart: () => set(state => ({}))
}), {
    name: 'mfe-store',
    getStorage: () => localStorage,
}));

export default useMfeStore;
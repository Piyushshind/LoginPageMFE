import { atom } from "recoil"
export const userData = atom({
    key:'userData',
    default: []
})

export const cartCount = atom({
    key:'cartCount',
    default : 0
}) 
export const updateCart = (cart, product) => {
    const cartItems = [...cart.cartItems];
    const isAlreadyAdded = cartItems?.findIndex(current => {
        return current.id == product.id
    })
    const pricingDetails = structuredClone(cart.pricingDetails)
    if (isAlreadyAdded == -1) {
        cartItems.push({ ...product, quantity: 1 });
    } else {
        cartItems[isAlreadyAdded] = { ...cartItems[isAlreadyAdded], quantity: cartItems[isAlreadyAdded].quantity + 1 }
    }

    pricingDetails.subtotal += product.price;
    if (pricingDetails.subtotal >= 30) {
        pricingDetails.deliveryCharges = 0;
    } else {
        pricingDetails.deliveryCharges = 10;
    }
    pricingDetails.total = pricingDetails.subtotal + pricingDetails.deliveryCharges;
    return {
        cartItems,
        pricingDetails
    }
}
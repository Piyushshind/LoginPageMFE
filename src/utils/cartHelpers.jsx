export const updateCart = (cart, product) => {
    const cartItems = [...cart.cartItems];
    const isAlreadyAdded = cartItems?.findIndex(current => {
        return current.id == product.id
    })
    const pricingDetails = ({ ...cart.pricingDetails })
    if (isAlreadyAdded == -1) {
        cartItems.push({ ...product, quantity: 1 });
        alert(`${product.productName} has been added to cart`)
    } else {
        cartItems[isAlreadyAdded] = { ...cartItems[isAlreadyAdded], quantity: cartItems[isAlreadyAdded].quantity + 1 }
        alert(`Quantity for ${product.productName} has been updated in cart`)
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

export const removeFromCart = (cart, product) => {
    console.log({ cart, product })
    const productIndex = cart?.cartItems?.findIndex(current => {
        return current.id == product.id
    })

    cart.pricingDetails.subtotal = cart.pricingDetails.subtotal - (cart.cartItems[productIndex].price * cart.cartItems[productIndex].quantity)
    cart.cartItems = cart.cartItems.filter(item => item.id != product.id)

    if (cart.pricingDetails.subtotal >= 30) {
        cart.pricingDetails.deliveryCharges = 0;
    } else {
        cart.pricingDetails.deliveryCharges = 10;
    }
    cart.pricingDetails.total = cart.pricingDetails.subtotal + cart.pricingDetails.deliveryCharges;

    console.log({ cart, product })
    return cart;
}
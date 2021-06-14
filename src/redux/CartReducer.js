
const cartState = {
    cart: [],
    style: {
        display: 'none'
    },
    productDetail: {
        "id": 1,
        "name": "Iphone 12 Pro Max",
        "screen": "OLED 6.7 inch Super Retina XDR",
        "operator-system": "iOS 14",
        "rear-camera": "3 camera 12 MP",
        "front-camera": "12 MP",
        "cpu": "Apple A14 Bionic",
        "ram": "6 GB",
        "rom": "128 GB",
        "pin": "3687 mAh",
        "price": 30990000,
        "image": "./assets/images/product01.jpg"
    }
}

const CartReducer = (state = cartState, action) => {
    let index

    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            index = state.cart.findIndex((product) => {
                return product.id === action.cartProduct.id
            })

            if (index === -1) {
                state.cart.push(action.cartProduct)
            } else {
                state.cart[index].amount++
            }

            state.cart = [...state.cart]

            return {...state}

        case 'DELETE_PRODUCT_FROM_CART':
            index = state.cart.findIndex((product) => product.id === action.productID)
            state.cart.splice(index, 1)

            state.cart = [...state.cart]

            return {...state}

        case 'CHANGE_PRODUCT_AMOUNT':
            index = state.cart.findIndex((product) => product.id === action.productID)

            state.cart[index].amount += action.number
            
            if (state.cart[index].amount <= 0) {
                state.cart[index].amount = 1
            }

            state.cart = [...state.cart]
            
            return {...state}

        case 'SHOW_MODAL':
            state.style = action.style

            return {...state}

        case 'CLOSE_MODAL':
            state.style = action.style

            return {...state}

        case 'SHOW_PRODUCT_DETAIL':
            state.productDetail = action.product

            return {...state}
            
        default:
    }

    return {...state}
}

export default CartReducer
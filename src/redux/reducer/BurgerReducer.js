import { CHANGE_BURGER_COMPONENT } from "../type/BurgerType"

const burgerState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    },
    total: 85
}

const updateTotal = (state) => {
    let newTotal = 0
    const burger = state.burger

    for (let component in burger) {
        newTotal += burger[component] * state.menu[component]
    }

    state.total = newTotal
}

const changeBurgerComponent = (state, componentName, amount) => {
    state.burger[componentName] += amount

    if (state.burger[componentName] < 1) {
        state.burger[componentName] = 1
    }

    state.burger = {...state.burger}

    updateTotal(state)
}

const BurgerReducer = (state = burgerState, action) => {

    switch (action.type) {
        case CHANGE_BURGER_COMPONENT:
            changeBurgerComponent(state, action.componentName, action.amount)
            break

        default:
    }    

    return {...state}
}

export default BurgerReducer
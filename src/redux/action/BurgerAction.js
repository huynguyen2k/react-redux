import { CHANGE_BURGER_COMPONENT } from "../type/BurgerType"

export const changeBurgerComponentAction = (componentName, amount) => {
    return {
        type: CHANGE_BURGER_COMPONENT,
        componentName,
        amount
    }
}
import { HANDEL_SIDEBAR, MODIFIER_COLOR, SELECTED_LINK } from "./typeActions"

export const handelSidebar = (isClose) => {
    return {
        type: HANDEL_SIDEBAR,
        payload: isClose
    }
}

export const selectedLink = (selected) => {
    return {
        type: SELECTED_LINK,
        payload: selected
    }
}

export const modifierColor = (color) => {
    return {
        type: MODIFIER_COLOR,
        payload: color
    }
}
export const required = (value) => {
    if(value) return undefined
    return "the field is required to fill"
}

export const requiredRadio = (value) => {
    debugger
    if(value.paymentType) return undefined
    return "Payment type must be selected"
}
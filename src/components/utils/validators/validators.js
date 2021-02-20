export const required = (value) => {
    if(value) return undefined
    return "the field is required to fill"
}
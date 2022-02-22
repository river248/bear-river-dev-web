export const formatPrice = (price) => {
    const r = (price*100)%100
    const q = price - (r/100)
    if (r === 0)
        if (q > 9) return `${q}.00`
        else return `0${q}.00`
    if (r > 0 && r < 10)
        if (q > 9) return `${q}.0${r}`
        else return `0${q}.0${r}`
    if (r > 9)
        if (q > 9) return `${q}.${r}`
        else return `0${q}.${r}`
}
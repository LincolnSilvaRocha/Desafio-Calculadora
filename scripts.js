const cart = [10, 244, 99, 2, 20, 33, 250]
let finalValueWithDiscount = 0
let totalValue = 0
let economized = 0


function calculateDiscount(price, discount) {

    const result = (price * discount) / 100
        return result

}

cart.forEach(value => {

    totalValue += value
    if (value > 30) {
        const discount = calculateDiscount(value, 10)
        finalValueWithDiscount = finalValueWithDiscount + (value - discount)

    } else {
        finalValueWithDiscount += value
    }
    
});

economized = totalValue - finalValueWithDiscount

console.log(`O valor final da compra de : R$ ${totalValue.toFixed(2)}, 
    porém você teve desconto, irá pagar apenas R$ ${finalValueWithDiscount.toFixed(2)}, 
    você economizou ${economized.toFixed(2)}`)

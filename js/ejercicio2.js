let tasaConversion = 4052

let pesoInput = document.getElementById(('pesoCol'))
let dolarInput = document.getElementById(('dolarUsa'))

let convertirAPesos = (dolares) => dolares * tasaConversion;
let convertirADolares = (pesos) => pesos / tasaConversion;


dolarInput.addEventListener('input', (e) => {
    let dolares = parseFloat(e.target.value);
    if (!isNaN(dolares)) {
        pesoInput.value = convertirAPesos(dolares).toFixed(2)
    } else {
        pesoInput.value = '';
    }

})

pesoInput.addEventListener('input', (e) => {
    let pesos = parseFloat(e.target.value)
    if (!isNaN(pesos)) {
        dolarInput.value = convertirADolares(pesos).toFixed(2)
    } else {
        dolarInput.value = '';
    }
})
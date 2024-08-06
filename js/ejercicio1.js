

let botonCalcular = document.getElementById('calcularIMC');


botonCalcular.addEventListener('click', () => {
   
    let estatura =(document.getElementById('estatura').value);
    let peso = (document.getElementById('peso').value);
 
    if (isNaN(estatura) || isNaN(peso) || estatura <= 0 || peso <= 0) {
        alert('Por favor, ingrese valores válidos para estatura y peso.');
        return;
    }
console.log(estatura);
console.log(peso);
    let estaturaEnMetros = estatura / 100;  
    let imc = peso / (estaturaEnMetros * estaturaEnMetros);
    document.getElementById('resultado').value = imc.toFixed(2);
});

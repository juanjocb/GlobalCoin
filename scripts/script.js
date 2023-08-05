const monedasOrigen = document.getElementById('monedasOrigen');
const monedasCambio = document.getElementById('monedasCambio');
const cantACalcular = document.getElementById('cantACalcular');
const cantidadCalculada = document.getElementById('cantCalculada');
const btnCalcular = document.getElementById('btnCalcular');
const cambiarMoneda = document.getElementById('btnCambiarModena');


//Fetch para calcular el cambio de modena. Actualizar los datos del DOM.
function calculate() {
    const monedaOrigen = monedasOrigen.value;
    const monedaCambio = monedasCambio.value;

    //   //El fetch es el que trae la api y nos deja hacer las peticiones. El then sirve para tener las respuestas. Le mandamos el valor de modenaOrigen refiriendonos a la moneda con la cual queremos hacer la conversion
    fetch(`https://api.exchangerate-api.com/v4/latest/${monedaOrigen}`)
        .then(res => res.json())
        .then(data => {
            const tasa = data.rates[monedaCambio];

            btnCalcular.addEventListener('click', () =>{
                cantidadCalculada.value = (cantACalcular.value * tasa).toFixed(2)
            })
        })
};

cambiarMoneda.addEventListener('click', () =>{
    const temp = monedasOrigen.value;
    monedasOrigen.value = monedasCambio.value;
    monedasCambio.value = temp;
    calculate();
} );


monedasOrigen.addEventListener('change', calculate)
monedasCambio.addEventListener('change', calculate)
cantACalcular.addEventListener('input', calculate)
cantidadCalculada.addEventListener('input', calculate)

calculate();


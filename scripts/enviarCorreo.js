const enviarCorreoBtn = document.getElementById("buy-button");
const enviarCorreoVenta = document.getElementById("venta");

const mailOptions = {};

enviarCorreoBtn.addEventListener("click", () => {

  alert("Solicitud Enviada")

  const correo = document.getElementById("celular").value;
  const nombre = document.getElementById("nombre").value;
  const monedasOrigen = document.getElementById('monedasOrigen').value;
  const monedasCambio = document.getElementById('monedasCambio').value;
  const cantACalcular = document.getElementById('cantACalcular').value;
  const cantidadCalculada = document.getElementById('cantCalculada').value;

  const mailOptions = {
    from: "juanjo2003gg@gmail.com",
    to: correo,
    subject: "Global Coin",
    text: `Bienvenid@ ${nombre}. SOLICITUD APROBADA. Compraste ${cantACalcular} ${monedasOrigen} por la cantidad de ${cantidadCalculada} ${monedasCambio} ¡Que tengas un excelente día!`,
  };

  // Obtén el valor del elemento que deseas enviar

  fetch("/enviar-correo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mailOptions),
  })
    .then((response) => response.text())
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
});

enviarCorreoVenta.addEventListener("click", () => {

  alert("Solicitud Enviada")
  const correo = document.getElementById("celular").value;
  const nombre = document.getElementById("nombre").value;
  const monedasOrigen = document.getElementById('monedasOrigen').value;
  const monedasCambio = document.getElementById('monedasCambio').value;
  const cantACalcular = document.getElementById('cantACalcular').value;
  const cantidadCalculada = document.getElementById('cantCalculada').value;

  const mailOptions = {
    from: "juanjo2003gg@gmail.com",
    to: correo,
    subject: "Global Coin",
    text: `Bienvenid@ ${nombre}. SOLICITUD APROBADA. Vendiste ${monedasOrigen} ${cantACalcular} a ${cantidadCalculada} ${monedasCambio}. ¡Que tengas un excelente día!`,
  };

  // Obtén el valor del elemento que deseas enviar

  fetch("/enviar-correo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(mailOptions),
  })
    .then((response) => response.text())
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
});

// Funciones para mostrar y ocultar secciones
function mostrarsaldo() {
    document.getElementById("consultar-saldo").style.display = "block";
  }
  
  function ocultarsaldo() {
    document.getElementById("consultar-saldo").style.display = "none";
  }
  
  function mostrardepositar() {
    document.getElementById("depositar-monto").style.display = "block";
  }
  
  function ocultardepositar() {
    document.getElementById("depositar-monto").style.display = "none";
  }
  
  function mostrarretirar() {
    document.getElementById("retirar-monto").style.display = "block";
  }
  
  function ocultarretirar() {
    document.getElementById("retirar-monto").style.display = "none";
  }
  
  // Funciones para sumar y restar montos al saldo
  let saldo = 700;
  
  function sumarsaldo() {
    let monto = parseFloat(document.getElementById("mas-monto").value);
    if (!isNaN(monto)) {
      saldo += monto;
      document.getElementById("title").innerText = saldo;
    }
  }
  
  function restarsaldo() {
    let monto = parseFloat(document.getElementById("menos-monto").value);
    if (!isNaN(monto) && monto <= saldo) {
      saldo -= monto;
      document.getElementById("title").innerText = saldo;
    }
  }
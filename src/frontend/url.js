var teste = document.getElementById("test");

function tecla() {
  // window.alert("O código da tecla pressionada foi: " + event.keyCode);
  test.textContent = "você clicou na tecla " + event.keyCode;
}

document.body.onkeypress = tecla;
test.textContent()
test.addEventListener("test", onButtonClick);

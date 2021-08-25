// Voltar a página anterior 
function voltar() {
    window.history.back();
}

// Aumentar velocidade de descrição
var $slider = $("#slider");
var $fill = $(".bar .fill");

function setBar() {
    $fill.css("width", $slider.val() + "%");
}

$slider.on("input", setBar);

setBar();

// Percentagem da mudança de tom
var $slider2 = $("#slider2");
var $fill2 = $(".bar2 .fill2");

function setBar1() {
    $fill2.css("width", $slider2.val() + "%");
}

$slider2.on("input", setBar1);

setBar1();

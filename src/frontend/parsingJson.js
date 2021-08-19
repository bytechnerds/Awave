var teste = document.getElementById("test");

function navigateButtons(){
   
    var items = [];
    items.push(document.getElementsByTagName('button'))
    console.log(items)
    
    for (let index = 0; index < items.length; index++) {
        //ouvir a tecla pressionada
        window.addEventListener("keydown", function(e) {
            
            if (e.key === "b") {
               button = document.getElementById(items[index])
               button.focus()
            }
        console.log(e)
        })
    }
}


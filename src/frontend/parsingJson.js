var teste = document.getElementById("test");

function navigateButtons() {

    var items = ['button1', 'button2', 'button3', 'button4'];
    // items.push(document.getElementsByTagName('button'))
    console.log(items)

    //ouvir a tecla pressionada
    window.addEventListener("keydown", function (e) {

        console.log(e)
        let index = 0;

        if (e.key === "b") {
            console.log(index)
            
            button = document.getElementById(items[index])
            button.style.border = '2px solid red'
            button.focus()

        }

    })
}
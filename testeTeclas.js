function checkEventObj(_event_) {
    // --- IE explorer
    if (window.event)
        return window.event;
    // --- Netscape and other explorers
    else
        return _event_;
}


//CRIAR OS CONDICIONAIS DENTRO DESSA FUNÇÃO PARA ESCUTAR O PRESSIONAMENTO DAS TECLAS DE CADA ATALHO QUE FOI DEFINIDO
function applyKey(_event_) {
    // --- Retrieve event object from current web explorer
    let winObj = checkEventObj(_event_);

    let intKeyCode = winObj.keyCode;
    let intAltKey = winObj.altKey;
    let intCtrlKey = winObj.ctrlKey;
    let REMAP_KEY_T = 5019



    if (intCtrlKey && intAltKey) {
        // if (intAltKey) {
        if (intKeyCode == 66) {
            navigateButtons()
            // Map the keyCode in another keyCode not used
            winObj.keyCode = intKeyCode = REMAP_KEY_T;
            winObj.returnValue = false;
            return false;
        }
    }
    // }
}

//CRIAR A FUNÇÃO DE NAVIGATE POR CLICÁVEIS, IMAGENS, MÍDIAS, ENTRADA DE DADOS (login, search)
//CONSEGUIMOS USAR OS REGEX QUE A @ISABELA JÁ TINHA MONTADO PRO OUTRO CÓDIGO?
function navigateButtons() {
    console.log('MODO - NAVEGAÇÃO POR BOTÕES')
    const list = []
    const items = []

    let regex = new RegExp('(button+)|(btn+)|(botao+)|(botão+)', 'ig')

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'BUTTON' || i.nodeName == 'A') {
            list.push(i)
        }
    }
    console.log(list)

    /*Attrs:
    tagname (we used the outerHTML, which gets all the tag and its content), Id, class, type, name, aria-label, role, title, placeholder*/

    for (let i of list) {
        let itemTagName = i.outerHTML
        let itemClass = i.getAttribute('class')
        let itemId = i.getAttribute('id')
        let itemType = i.getAttribute('type')
        let itemName = i.getAttribute('name')
        let itemAriaLabel = i.getAttribute('aria-label')
        let itemRole = i.getAttribute('role')
        let itemTitle = i.getAttribute('title')
        let itemPlaceholder = i.getAttribute('placeholder')

        console.log(itemTagName)
        if (regex.test(itemTagName) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            items.push(i)

    }

    // let buttons = document.getElementsByTagName('button')
    // let button_name = document.getElementsByName(regex)
    // let button_id = document.getElementById(regex)
    // let button_class = document.getElementsByClassName(regex)
    // Array.prototype.forEach.call(buttons, function (b) {
    //     items.push(b)
    // });
    // Array.prototype.forEach.call(button_name, function (bn) {
    //     items.push(bn)
    // });
    // items.push(button_id)
    // Array.prototype.forEach.call(button_class, function (bc) {
    //     items.push(bc)
    // });
    // let links = document.getElementsByTagName('a')
    // Array.prototype.forEach.call(links, function(l) {
    //     console.log(l);
    //     items.push(l)
    // });

    console.log(items)
    //NOTE: AINDA PRECISO ARRUMAR! ELE JOGOU O LINK NO FIM, QUEREMOS PEGAR TODOS OS ELEMENTOS NA ORDEM EM QUE ELES APARECEM, MAS SÓ POSSO PASSAR UM PARAMETRO PARA O getElementsByTagName! 


    let cont = 0;
    let index = -1;

    //ouvir a tecla pressionada
    window.addEventListener("keydown", function (e) {

        if (e.key === "ArrowRight") {
            index++
            if (index > items.length)
                index--

            let item = (items[index])
            item.style.outline = 'none'
            if (index >= 1)
                (items[index - 1]).style.border = 'none'
            item.style.border = '2px solid red'
            item.focus()
            cont = index
        }

        if (e.key === "ArrowLeft") {
            index--
            if (index < 0)
                index = 0

            let item = (items[index])
            item.style.outline = 'none'
            if (index <= 2)
                (items[index + 1]).style.border = 'none'
            item.style.border = '2px solid red'
            item.focus()
            cont = index
        }
    })
}
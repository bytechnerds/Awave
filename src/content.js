//This script has all the navigation mode functions (the keyboard shortcuts function and the spcecifc navigation modes) 
window.addEventListener('load', applyKey)

let synth = window.speechSynthesis;

let funcD = true
let funcB = true
let funcI = true
let funcV = true
let funcL = true
let funcS = true
let funcE = true
let funcM = true

function activateDescription() {
    chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          console.log(sender.tab ?
                      "from a content script:" + sender.tab.url :
                      "from the extension");
          if (request.action === "activate_description"){
              description()
              sendResponse({farewell: "description was activated"});
          }
        }
      );
}


function applyKey(_event_) {
    window.addEventListener("keydown", function (e) {
        console.log(`KeyboardEvent: key='${e.key}' | code='${e.code}'`)

        let intKeyCode = e.code;
        let intAltKey = 'AltLeft';
        let intCtrlKey = 'ControlLeft';
        let REMAP_KEY_T = 5019


        if (intCtrlKey && intAltKey) {
            if (intKeyCode === 'KeyD') {
                funcB = false
                funcI = false
                funcV = false
                funcL = false
                funcS = false
                funcE = false
                funcM = false
                if (funcD = true)
                    description()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyB') {
                funcD = false
                funcI = false
                funcV = false
                funcL = false
                funcS = false
                funcE = false
                funcM = false
                if (funcB = true)
                    navigateClickables()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyI') {
                funcD = false
                funcB = false
                funcV = false
                funcL = false
                funcS = false
                funcE = false
                funcM = false
                if (funcI = true)
                    navigateImages()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyV') {
                funcD = false
                funcB = false
                funcI = false
                funcL = false
                funcS = false
                funcE = false
                funcM = false
                if (funcV = true)
                    navigatePlayables()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyL') {
                funcD = false
                funcB = false
                funcI = false
                funcV = false
                funcS = false
                funcE = false
                funcM = false
                if (funcL = true)
                    navigateLogin()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyS') {
                funcD = false
                funcB = false
                funcI = false
                funcV = false
                funcL = false
                funcE = false
                funcM = false
                if (funcS = true)
                    navigateSearch()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyE') {
                funcD = false
                funcB = false
                funcI = false
                funcV = false
                funcL = false
                funcS = false
                funcM = false
                if (funcE = true)
                    navigateForms()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyM') {
                funcD = false
                funcB = false
                funcI = false
                funcV = false
                funcL = false
                funcS = false
                funcE = false
                if (funcM = true)
                    navigateBlocks()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'Space') {
                funcD = false
                funcB = false
                funcI = false
                funcV = false
                funcL = false
                funcS = false
                funcE = false
                funcM = false
                console.log('COMANDO CANCELADO')
                utterThis = new SpeechSynthesisUtterance("Comando Cancelado")
                synth.speak(utterThis)
            }
        }


    }, true);
}

//TO-DO
//ADICIONAR UM CONDICIONAL PARA SÓ JOGAR O ELEMENTO NO ARRAY SE ELE ESTIVER VISIVEL
//ADICIONAR OS TIPOS INPUT SUBMIT. TENHO QUE ADICIONAR TAMBÉM OS LINKS DE MODO GERAL... SE É UM MÉTODO PARA PEGAR CLICÁVEIS NÃO PODEMOS TER SÓ ALGUNS LINKS.
function navigateClickables() {
    console.log('MODO - NAVEGAÇÃO POR ELEMENTOS CLICÁVEIS')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO POR ELEMENTOS CLICÁVEIS")
    synth.speak(utterThis)

    let items = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'BUTTON' || i.nodeName == 'A' || (i.nodeName == 'INPUT' && i.getAttribute('type') == 'submit')) {
            items.push(i)
        }
    }

    console.log(items)

    let regex = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
    for (let i of items) {
        let itemTagName = i.outerHTML
        let itemAlt = i.getAttribute('alt')
        let itemHref = i.getAttribute('href')
        let itemClass = i.getAttribute('class')
        let itemId = i.getAttribute('id')
        let itemType = i.getAttribute('type')
        let itemName = i.getAttribute('name')
        let itemAriaLabel = i.getAttribute('aria-label')
        let itemRole = i.getAttribute('role')
        let itemTitle = i.getAttribute('title')
        let itemPlaceholder = i.getAttribute('placeholder')

        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemHref) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            items.pop(i)

        let itemAriaHidden = i.getAttribute('aria-hidden')
        let itemAriaExpanded = i.getAttribute('aria-expanded')

        if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
            items.pop(i)

        let itemTabIndex = i.getAttribute('tabindex')

        if (itemTabIndex != '0') {
            console.log(i + " " + itemTabIndex)
            items.pop(i)
        }
    }
    console.log(items)

    let index = -1;

    window.addEventListener("keydown", function (e) {

        if (funcB == true) {

            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'

                if (index >= 1)
                    (items[index - 1]).style.border = 'none'

                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'
                
                if (index >=0)
                    (items[index + 1]).style.border = 'none'
                item.focus()
            }
        }
    })
}

function navigateImages() {
    console.log('MODO - NAVEGAÇÃO POR IMAGENS')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO POR IMAGENS")
    synth.speak(utterThis)

    let list = []
    let items = []

    let regex = new RegExp('(img+)|(image+)|(imagem+)', 'ig')

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'IMG' || i.nodeName == 'SVG' || i.nodeName == 'FIGURE') {
            list.push(i)
        }
    }

    /*Attrs:
    tagname (we used the outerHTML, which gets all the tag and its content), Id, class, type, name, aria-label, role, title, placeholder*/

    for (let i of list) {
        let itemTagName = i.outerHTML
        let itemAlt = i.getAttribute('alt')
        let itemHref = i.getAttribute('href')
        let itemClass = i.getAttribute('class')
        let itemId = i.getAttribute('id')
        let itemType = i.getAttribute('type')
        let itemName = i.getAttribute('name')
        let itemAriaLabel = i.getAttribute('aria-label')
        let itemRole = i.getAttribute('role')
        let itemTitle = i.getAttribute('title')
        let itemPlaceholder = i.getAttribute('placeholder')

        console.log(itemTagName)
        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemHref) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            items.push(i)

    }
    console.log(items)

    let index = -1;

    window.addEventListener("keydown", function (e) {

        if (funcI == true) {

            
            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'

                if (index >= 1)
                    (items[index - 1]).style.border = 'none'

                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'
                
                if (index >=0)
                    (items[index + 1]).style.border = 'none'
                item.focus()
            }

        }
    })
}

function navigatePlayables() {
    console.log('MODO - NAVEGAÇÃO POR MÍDIAS DE REPRODUÇÃO')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO POR MÍDIAS DE REPRODUÇÃO")
    synth.speak(utterThis)

    let list = []
    let items = []

    let regex = new RegExp('(video+)|(audio+)|(vid+)|(vídeo+)|(track+)', 'ig')

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'VIDEO' || i.nodeName == 'AUDIO' || i.nodeName == 'TRACK') {
            list.push(i)
        }
    }

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
    console.log(items)

    let index = -1;

    window.addEventListener("keydown", function (e) {

        if (funcV == true) {

            
            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'

                if (index >= 1)
                    (items[index - 1]).style.border = 'none'

                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'
                
                if (index >=0)
                    (items[index + 1]).style.border = 'none'
                item.focus()
            }
        }
    })
}

function navigateLogin() {
    console.log('MODO - NAVEGAÇÃO PARA LOGIN')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO PARA LOGIN")
    synth.speak(utterThis)

    let list = []
    let items = []

    let regex = new RegExp('(login+)|(log in+)|(log on+)|(entrar+)|(entre+)|(acessar+)|(acesso+)|(iniciar+)', 'ig')

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'INPUT' && (i.nodeType == 'TEXT' || i.nodeType == 'EMAIL' || i.nodeType == 'PASSWORD'))
            list.push(i)
        if (i.nodeName == 'FORM' || i.nodeName == 'BUTTON' || i.nodeName == 'A')
            list.push(i)
    }
    for (let i of list) {
        let itemTagName = i.outerHTML
        let itemAlt = i.getAttribute('alt')
        let itemHref = i.getAttribute('href')
        let itemClass = i.getAttribute('class')
        let itemId = i.getAttribute('id')
        let itemType = i.getAttribute('type')
        let itemName = i.getAttribute('name')
        let itemAriaLabel = i.getAttribute('aria-label')
        let itemRole = i.getAttribute('role')
        let itemTitle = i.getAttribute('title')
        let itemPlaceholder = i.getAttribute('placeholder')

        console.log(itemTagName)
        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemHref) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            items.push(i)

    }

    let index = -1;

    window.addEventListener("keydown", function (e) {

        if (funcL == true) {

            
            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'

                if (index >= 1)
                    (items[index - 1]).style.border = 'none'

                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'
                
                if (index >=0)
                    (items[index + 1]).style.border = 'none'
                item.focus()
            }
        }
    })
}

function navigateSearch() {

    console.log('MODO - NAVEGAÇÃO PARA PESQUISA')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO PARA PESQUISA")
    synth.speak(utterThis)

    let list = []
    let items = []

    let regex = new RegExp('(search+)|(pesquisa+)', 'ig')

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'INPUT' && (i.nodeType == 'TEXT' || i.nodeType == 'SEARCH'))
            list.push(i)
        if (i.nodeName == 'FORM' || i.nodeName == 'BUTTON')
            list.push(i)
    }
    for (let i of list) {
        let itemTagName = i.outerHTML
        let itemAlt = i.getAttribute('alt')
        let itemHref = i.getAttribute('href')
        let itemClass = i.getAttribute('class')
        let itemId = i.getAttribute('id')
        let itemType = i.getAttribute('type')
        let itemName = i.getAttribute('name')
        let itemAriaLabel = i.getAttribute('aria-label')
        let itemRole = i.getAttribute('role')
        let itemTitle = i.getAttribute('title')
        let itemPlaceholder = i.getAttribute('placeholder')

        console.log(itemTagName)
        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemHref) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            items.push(i)

    }

    let index = -1;

    window.addEventListener("keydown", function (e) {

        if (funcL == true) {

           
            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'

                if (index >= 1)
                    (items[index - 1]).style.border = 'none'

                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                item.style.border = '5px solid red'
                
                if (index >=0)
                    (items[index + 1]).style.border = 'none'
                item.focus()
            }
        }
    })

}

function navigateForms() {

}

function navigateBlocks() {
    //header, main, footer
    //use regex to determine divs os sections with terms like main, principal, or things like that
}

function description() {
    if (funcD == true)
        window.alert('A página possui um menu principal no canto superior direito com as opções Gmail, Imagens, e um menu com mais opções escondidas. A sessão de login fica à direita. O site tem uma sessão de busca na parte central, com dois botões (Pesquisa Google e, Estou com sorte). Na tela principal, encontramos a logo do site no centro. Por último, abaixo da seção de pesquisa, as opções de linguagem. No rodapé, temos 3 opções: Configurações, Privacidade e, Termos. Essas nos levam à páginas externas de cada item.')


    //FIX THIS!!!
    // modal = document.createElement('div')
    // modal.class = 'modal-body'
    // modal.id = 'modal-body'

    // modal.innerText = "A página possui um menu principal no canto superior direito com as opções Gmail, Imagens, e um menu com mais opções escondidas. A sessão de login fica à direita. <br><br>O site tem uma sessão de busca na parte central, com dois botões (Pesquisa Google e, Estou com sorte). <br><br> Na tela principal, encontramos a logo do site no centro. Por último, abaixo da seção de pesquisa, as opções de linguagem. <br><br> No rodapé, temos 3 opções: Configurações, Privacidade e, Termos. Essas nos levam à páginas externas de cada item. <br><br>"
    // modal.style.display = "hidden"
    // modal.style.position = "fixed"
    // modal.style.zindex = "1"
    // modal.style.paddingtop = "5px"
    // modal.style.width = "100%"
    // modal.style.height = "100%"
    // modal.style.overflow = "auto"
}
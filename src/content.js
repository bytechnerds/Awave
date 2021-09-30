//This script has all the navigation mode functions (the keyboard shortcuts function and the spcecifc navigation modes) 
window.addEventListener('load', applyKey)
let synth = window.speechSynthesis;
let functioning = true

function applyKey(_event_) {
    window.addEventListener("keydown", function (e) {
        console.log(`KeyboardEvent: key='${e.key}' | code='${e.code}'`)

        let intKeyCode = e.code;
        let intAltKey = 'AltLeft';
        let intCtrlKey = 'ControlLeft';
        let REMAP_KEY_T = 5019


        if (intCtrlKey && intAltKey) {
            if (intKeyCode === 'KeyD') {
                if (functioning = true)
                    description()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyB') {
                if (functioning = true)
                    navigateButtons()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyI') {
                if (functioning = true)
                    navigateImages()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyV') {
                if (functioning = true)
                    navigatePlayables()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyL') {
                if (functioning = true)
                    navigateLogin()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyS') {
                if (functioning = true)
                    navigateSearch()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyE') {
                if (functioning = true)
                    navigateForms()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'KeyM') {
                if (functioning = true)
                    navigateBlocks()

                // Map the keyCode in another keyCode not used
                e.code = intKeyCode = REMAP_KEY_T;
            }

            if (intKeyCode === 'Space') {
                functioning = false
                console.log('COMANDO CANCELADO')
                utterThis = new SpeechSynthesisUtterance("Comando Cancelado")
                synth.speak(utterThis)
            }
        }


    }, true);
}

function getHTML() {
    const list = []

    for (let i of document.body.querySelectorAll('*')) {
        list.push(i)
    }
}

//CRIAR A FUNÇÃO DE NAVIGATE POR CLICÁVEIS, IMAGENS, MÍDIAS, ENTRADA DE DADOS (login, search)
//CONSEGUIMOS USAR OS REGEX QUE A @ISABELA JÁ TINHA MONTADO PRO OUTRO CÓDIGO?

//TO-DO
//ADICIONAR UM CONDICIONAL PARA SÓ JOGAR O ELEMENTO NO ARRAY SE ELE ESTIVER VISIVEL
//ADICIONAR OS TIPOS INPUT SUBMIT. TENHO QUE ADICIONAR TAMBÉM OS LINKS DE MODO GERAL... SE É UM MÉTODO PARA PEGAR CLICÁVEIS NÃO PODEMOS TER SÓ ALGUNS LINKS.
function navigateButtons() {
    console.log('MODO - NAVEGAÇÃO POR BOTÕES')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO POR BOTÕES")
    synth.speak(utterThis)

    const list = []
    const items = []

    let regex = new RegExp('(button+)|(btn+)|(botao+)|(botão+)', 'ig')

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'BUTTON' || i.nodeName == 'A') {
            list.push(i)
        }
    }

    /*Attrs:
    tagname (we used the outerHTML, which gets all the tag and its content), Id, class, type, name, aria-label, role, title, placeholder*/

    for (let j of list) {
        let itemTagName = j.outerHTML
        let itemAlt = j.getAttribute('alt')
        let itemClass = j.getAttribute('class')
        let itemId = j.getAttribute('id')
        let itemType = j.getAttribute('type')
        let itemName = j.getAttribute('name')
        let itemAriaLabel = j.getAttribute('aria-label')
        let itemRole = j.getAttribute('role')
        let itemTitle = j.getAttribute('title')
        let itemPlaceholder = j.getAttribute('placeholder')

        console.log(itemTagName)
        if (regex.test(itemTagName)|| regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            items.push(j)

    }
    console.log(items)

    let index = -1;

    window.addEventListener("keydown", function (e) {

        if (functioning == true) {

            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                if (index >= 1)
                    (items[index - 1]).style.border = 'none'
                item.style.border = '5px solid red'
                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                if (index <= 2)
                    (items[index + 1]).style.border = 'none'
                item.style.border = '5px solid red'
                item.focus()
            }
        }
    })
}

function navigateImages() {
    console.log('MODO - NAVEGAÇÃO POR IMAGENS')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO POR IMAGENS")
    synth.speak(utterThis)

    const list = []
    const items = []

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

        if (functioning == true) {

            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                if (index >= 1)
                    (items[index - 1]).style.border = 'none'
                item.style.border = '5px solid red'
                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                if (index <= 2)
                    (items[index + 1]).style.border = 'none'
                item.style.border = '5px solid red'
                item.focus()
            }
        }
    })
}

function navigatePlayables() {
    console.log('MODO - NAVEGAÇÃO POR MÍDIAS DE REPRODUÇÃO')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO POR MÍDIAS DE REPRODUÇÃO")
    synth.speak(utterThis)

    const list = []
    const items = []

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

        if (functioning == true) {

            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                if (index >= 1)
                    (items[index - 1]).style.border = 'none'
                item.style.border = '5px solid red'
                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                if (index <= 2)
                    (items[index + 1]).style.border = 'none'
                item.style.border = '5px solid red'
                item.focus()
            }
        }
    })
}

function navigateLogin() {
    console.log('MODO - NAVEGAÇÃO PARA LOGIN')
    var utterThis = new SpeechSynthesisUtterance("MODO NAVEGAÇÃO PARA LOGIN")
    synth.speak(utterThis)
    
    const list = []
    const items = []
    
    let regex = new RegExp('(login+)|(log in+)|(log on+)|(entrar+)|(entre+)|(acessar+)|(acesso+)|(iniciar+)', 'ig')

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'INPUT' && (i.nodeType == 'TEXT' || i.nodeType == 'EMAIL' || i.nodeType == 'PASSWORD'))
            list.push(i)
        if (i.nodeName == 'FORM' || i.nodeName == 'BUTTON' || i.nodeName == 'A')
            list.push(i)
    }
    for (let j of list) {
        let itemTagName = j.outerHTML
        let itemAlt = j.getAttribute('alt')
        let itemHref = j.getAttribute('href')
        let itemClass = j.getAttribute('class')
        let itemId = j.getAttribute('id')
        let itemType = j.getAttribute('type')
        let itemName = j.getAttribute('name')
        let itemAriaLabel = j.getAttribute('aria-label')
        let itemRole = j.getAttribute('role')
        let itemTitle = j.getAttribute('title')
        let itemPlaceholder = j.getAttribute('placeholder')

        if (regex.test(itemTagName) || regex.test(itemHref) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            items.push(j)
    }
    console.log(items)

    let index = -1;

    window.addEventListener("keydown", function (e) {

        if (functioning == true) {

            if (e.key === "ArrowRight") {
                index++
                if (index > items.length)
                    index--

                let item = (items[index])
                item.style.outline = 'none'
                if (index >= 1)
                    (items[index - 1]).style.border = 'none'
                item.style.border = '5px solid red'
                item.focus()
            }

            if (e.key === "ArrowLeft") {
                index--
                if (index < 0)
                    index = 0

                let item = (items[index])
                item.style.outline = 'none'
                if (index <= 2)
                    (items[index + 1]).style.border = 'none'
                item.style.border = '5px solid red'
                item.focus()
            }
        }
    })
}

function navigateSearch() {

}

function navigateForms() {

}

function navigateBlocks() {
    //header, main, footer
    //use regex to determine divs os sections with terms like main, principal, or things like that
}

function description() {
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
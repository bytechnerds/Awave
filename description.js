let param
let width, height, wPixel, hPixel
let w1, w2, w3, w4, w5, h1, h2, h3

function getSize() {
    width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;
    console.log(width, height);
}

function createSections() {
    width = window.innerWidth || document.documentElement.clientWidth ||
        document.body.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight ||
        document.body.clientHeight;
    console.log(width, height);

    wPixel = width * 0.2
    let w3Pixel = width * 0.6
    w1 = [0, wPixel]
    w2 = [wPixel + 1, w3Pixel]
    w3 = [w3Pixel + 1, (wPixel + w3Pixel)]

    hPixel = height * 0.2
    let h3Pixel = height * 0.6
    h1 = [0, hPixel]
    h2 = [hPixel + 1, h3Pixel]
    h3 = [h3Pixel + 1, (hPixel + h3Pixel)]
}

function getElementPosition(elRectangle) {
    return {
        left: elRectangle.left,
        right: elRectangle.right,
        top: elRectangle.top,
        bottom: elRectangle.bottom
    };
}

//adicionar condicional, se o elRectangle.left estiver na esquerda, e o elRectangle.right na direita, ele ocupa a página toda, então devemos apenas verificar a posição vertical e passar a mensagem.
function getElementSection(elRectangle) {
    if (Math.sign((elRectangle.left - w1[1]) < 0) && (elRectangle.right - w1[1] < 100)) {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            return 'Sessão 1 -- Canto Esquerdo Superior'
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            return 'Sessão 2 -- Canto Esquerdo Central'
        else
            return 'Sessão 3 -- Canto Esquerdo Inferior'
    }
    else if (Math.sign((elRectangle.left - w2[1]) < 0) && (elRectangle.right - w2[1] < 100)) {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            return 'Sessão 1 -- Centro Superior'
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            return 'Sessão 2 -- Centro'
        else
            return 'Sessão 3 -- Centro Inferior'
    }
    else {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            return 'Sessão 1 -- Canto Direito Superior'
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            return 'Sessão 2 -- Canto Direito Central'
        else
            return 'Sessão 3 -- Canto Direito Inferior'
    }
}


function getDomain() {
    return domain = window.location.hostname.split('.').slice(-2).join('.')
}

function getLogo(param) {
    let regex = new RegExp('(logo+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll('*')) {
        if (i.nodeName == 'IMG' || i.nodeName == 'SVG' || i.nodeName == 'FIGURE' || i.nodeName == 'I' || i.nodeName == 'A')
            allElements.push(i)
    }
    for (let j of allElements) {
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

        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            finalList.push(j)
    }
    console.log(finalList)

    el = finalList[0]
    const elRectangle = el.getBoundingClientRect();

    let coordenadas = elRectangle
    let tamanhoH = elRectangle.right - elRectangle.left
    let tamanhoV = elRectangle.bottom - elRectangle.top

    createSections()
    let section = getElementSection(elRectangle)
    let position = getElementPosition(elRectangle)

    console.log(coordenadas)
    console.log(tamanhoH)
    console.log(tamanhoV)
    console.log(section)
    console.log(position)
    if (el == null)
        return false

    return true
}

function getSearch(param) {

    let regex = new RegExp('(search+)|(pesquisa+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll('*')) {
        if (i.nodeName == 'INPUT' && (i.nodeType == 'TEXT' || i.nodeType == 'SEARCH'))
            allElements.push(i)
        if (i.nodeName == 'FORM' || i.nodeName == 'BUTTON')
            allElements.push(i)


    }
    for (let j of allElements) {
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

        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            finalList.push(j)
    }
    console.log(finalList)

    el = finalList[0]
    const elRectangle = el.getBoundingClientRect();

    let coordenadas = elRectangle
    let tamanhoH = elRectangle.right - elRectangle.left
    let tamanhoV = elRectangle.bottom - elRectangle.top

    createSections()
    let section = getElementSection(elRectangle)
    let position = getElementPosition(elRectangle)

    console.log(coordenadas)
    console.log(tamanhoH)
    console.log(tamanhoV)
    console.log(section)
    console.log(position)
    if (el == null)
        return false

    return true
}

function getLogin(param) {

    let regex = new RegExp('(login+)|(log in+)|(log on+)|(entrar+)|(entre+)|(acessar+)|(acesso+)|(iniciar+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll('*')) {
        if (i.nodeName == 'INPUT' && (i.nodeType == 'TEXT' || i.nodeType == 'EMAIL' || i.nodeType == 'PASSWORD'))
            allElements.push(i)
        if (i.nodeName == 'FORM' || i.nodeName == 'BUTTON' || i.nodeName == 'A')
            allElements.push(i)
    }
    for (let j of allElements) {
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
            finalList.push(j)
    }
    console.log(finalList)

    el = finalList[0]
    const elRectangle = el.getBoundingClientRect();

    let coordenadas = elRectangle
    let tamanhoH = elRectangle.right - elRectangle.left
    let tamanhoV = elRectangle.bottom - elRectangle.top

    createSections()
    let section = getElementSection(elRectangle)
    let position = getElementPosition(elRectangle)

    console.log(coordenadas)
    console.log(tamanhoH)
    console.log(tamanhoV)
    console.log(section)
    console.log(position)
    if (el == null)
        return false

    return true
}

//FAZER
//procurar nav.a.a ou nav.ul.li ou div.ul.li ou div.a.a ou span.ul.li ou span.a.a
function getMenu(param) {
    let regex = new RegExp('(menu+)|(nav+)|(section+)|(list+)', 'ig')
    let menu = []
    let finalList = []


    for (let i of param.querySelectorAll('*')) {
        if (i.nodeName == 'NAV')
            finalList.push(i)
        else if (i.nodeName == 'DIV' || i.nodeName == 'BUTTON' || i.nodeName == 'A' || i.nodeName == 'SPAN' || (i.nodeName = 'UL'))
            menu.push(i)
    }

    for (let m of menu) {
        let itemTagName = m.outerHTML
        let itemAlt = m.getAttribute('alt')
        let itemClass = m.getAttribute('class')
        let itemId = m.getAttribute('id')
        let itemName = m.getAttribute('name')
        let itemAriaLabel = m.getAttribute('aria-label')
        let itemRole = m.getAttribute('role')
        let itemTitle = m.getAttribute('title')

        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle))
            finalList.push(m)
    }
    console.log(finalList)

    el = finalList[0]
    const elRectangle = el.getBoundingClientRect();

    let coordenadas = elRectangle
    let tamanhoH = elRectangle.right - elRectangle.left
    let tamanhoV = elRectangle.bottom - elRectangle.top

    createSections()
    let section = getElementSection(elRectangle)
    let position = getElementPosition(elRectangle)

    console.log(coordenadas)
    console.log(tamanhoH)
    console.log(tamanhoV)
    console.log(section)
    console.log(position)
    if (el == null)
        return false

    return true
}
//class='social'
//pegar os a e ver se tem um nome (facebook, twitter, linkedin, whatsapp, instagram, youtube)
function getSocial(param) {
    let regex = new RegExp('(social+)|(sociais+)|(media+)|(midia+)|(mídia+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll('*')) {
        if (i.nodeName == 'IMG' || i.nodeName == 'SVG' || i.nodeName == 'FIGURE' || i.nodeName == 'I' || i.nodeName == 'A')
            allElements.push(i)
    }
    for (let j of allElements) {
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

        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            finalList.push(j)

    }
    console.log(finalList)

    el = finalList[0]
    const elRectangle = el.getBoundingClientRect();

    let coordenadas = elRectangle
    let tamanhoH = elRectangle.right - elRectangle.left
    let tamanhoV = elRectangle.bottom - elRectangle.top

    createSections()
    let section = getElementSection(elRectangle)
    let position = getElementPosition(elRectangle)

    console.log(coordenadas)
    console.log(tamanhoH)
    console.log(tamanhoV)
    console.log(section)
    console.log(position)
    if (el == null)
        return false
    return true
}

function getForms(param) {
    let finalList = []

    for (let i of param.querySelectorAll('*')) {
        if (i.nodeName == 'INPUT' || i.nodeName == 'FORM' || (i.nodeName == 'BUTTON' && i.nodeType == 'SUBMIT'))
            finalList.push(i)
    }

    console.log(finalList)

    el = finalList[0]
    const elRectangle = el.getBoundingClientRect();

    let coordenadas = elRectangle
    let tamanhoH = elRectangle.right - elRectangle.left
    let tamanhoV = elRectangle.bottom - elRectangle.top

    createSections()
    let section = getElementSection(elRectangle)
    let position = getElementPosition(elRectangle)

    console.log(coordenadas)
    console.log(tamanhoH)
    console.log(tamanhoV)
    console.log(section)
    console.log(position)
    if (el == null)
        return false

    return true
}

function getHeader() {
    let regex = new RegExp('(header+)|(cabecalho+)|(cabeçalho+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'HEADER') {
            finalList.push(i)
            param = document.querySelector('.' + i.getAttribute('class'))
            let logo = getLogo(param)
            let login = getLogin(param)
            let search = getSearch(param)
            let nav = getMenu(param)
            let info = [logo, nav, login, search, media]
            return info
        }
        else if (i.nodeName == 'DIV')
            allElements.push(i)


    }
    console.log(allElements)

    for (let j of allElements) {
        //let itemTagName = j.outerHTML
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

        if (regex.test(itemHref) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder)) {
            finalList.push(j)

            param = document.querySelector('.' + j.getAttribute('class'))
            let logo = getLogo(param)
            let login = getLogin(param)
            let search = getSearch(param)
            let nav = getMenu(param)
            let info = [logo, nav, login, search, media]
            return info
        }
    }
    console.log(finalList)
}

function getMain() {
    let regex = new RegExp('(main+)|(principal+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'MAIN' || i.nodeName == 'DIV' || i.nodeName == 'SECTION' || i.nodeName == 'ARTICLE')
            allElements.push(i)
    }

    for (let j of allElements) {
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
            finalList.push(j)
    }
    console.log(finalList)
}

function getFooter() {
    let regex = new RegExp('(rodape+)|(footer+)|(rodapé+)', 'ig')
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'FOOTER') {
            finalList.push(i)
            param = document.querySelector('.' + i.getAttribute('class'))
            let social = getSocial(param)
            let menu = getMenu(param)
            let info = [social, menu]
            return info
            //div.ul.li.a -> vem do método de menu
        }
        else if (i.nodeName == 'DIV') {

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

            if (regex.test(itemHref) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder)) {
                finalList.push(i)
                console.log(i)
                console.log(i.getAttribute('class'))
                console.log(i.getAttribute('id'))
                param = document.querySelector('.' + i.getAttribute('class'))
            }
            let social = getSocial(param)
            let menu = getMenu(param)
            let form = getForms(param)
            let info = [social, menu, form]
            return info
        }
    }
    console.log(finalList)
}

//FAZER
function generateDescription(logo) {
    logo.forEach(function () {
        return {
            coordenadas: logo[0],
            tamanhoH: logo[1],
            tamanhoV: logo[2],
            position: logo[3],
            section: logo[4],
        }
    });
    console.log('A página possui uma logo localizada no' + section)

}
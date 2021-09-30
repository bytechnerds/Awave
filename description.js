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
            console.log('Sessão 1 -- Canto Esquerdo Superior')
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            console.log('Sessão 2 -- Canto Esquerdo Central')
        else
            console.log('Sessão 3 -- Canto Esquerdo Inferior')
    } 
    else if (Math.sign((elRectangle.left - w2[1]) < 0) && (elRectangle.right -  w2[1] < 100)) {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            console.log('Sessão 1 -- Centro Superior')
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            console.log('Sessão 2 -- Centro')
        else
            console.log('Sessão 3 -- Centro Inferior')
    }
    else {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            console.log('Sessão 1 -- Canto Direito Superior')
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            console.log('Sessão 2 -- Canto Direito Central')
        else
            console.log('Sessão 3 -- Canto Direito Inferior')
    }
}


//TO-DO: QUANDO OS MÉTODOS DE CHECAGEM DE POSIÇÃO ESTIVEREM PRONTOS, CHAMAR DENTRO DE CADA CHECK, PASSANDO O(S) ELEMENTO(S) COMO PARâMETRO. LEMBRAR DE USAR O PRIMEIRO ITEM DO ARRAY PARA FAZER A CHECAGEM (VALIDAR SE É SEGURO)
function checkLogo() {
    let regex = new RegExp('(logo+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'IMG' || i.nodeName == 'SVG' || i.nodeName == 'FIGURE' || i.nodeName == 'I')
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
    const elRectangle = el.getBoundingClientelRectangle();

   
    
    return elRectangle    
    //console.log(finalList[0].nextSibling+"   "+finalList[0].parentElement)
}

function checkDomain() {
    return domain = window.location.hostname.split('.').slice(-2).join('.')
}

function checkSearch() {

    let regex = new RegExp('(search+)|(pesquisa+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
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
    const elRectangle = el.getBoundingClientelRectangle();

    getSize()
    createSections()
    getElementPosition(elRectangle)
    getElementSection(elRectangle)
}

function checkLogin() {

    let regex = new RegExp('(login+)|(log in+)|(log on+)|(entrar+)|(entre+)|(acessar+)|(acesso+)|(iniciar+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
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
}

//FAZER
function checkMenu() {

}

//FAZER
function checkBlocks() {
    let regex = new RegExp('(main+)|(principal+)|(footer+)|(rodapé+)|(rodape+)|(header+)|(cabecalho+)|(cabeçalho+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'HEADER' || i.nodeName == 'MAIN' || i.nodeName == 'FOOTER' || i.nodeName == 'DIV' || i.nodeName == 'SECTION' || i.nodeName == 'ARTICLE' || i.nodeName == 'NAV')
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

//FAZER
function generateDescription(elRectangle) {
    createSections()
    getElementSection(elRectangle)

    let logo = checkLogo().getElementPosition(elRectangle)
    console.log('o site possui uma logo localizada no'+logo) 
}

generateDescription()
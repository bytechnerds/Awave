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
            return 'Canto Esquerdo Superior'
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            return 'Canto Esquerdo Central'
        else
            return 'Canto Esquerdo Inferior'
    }
    else if (Math.sign((elRectangle.left - w2[1]) < 0) && (elRectangle.right - w2[1] < 100)) {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            return 'Centro Superior'
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            return 'Centro'
        else
            return 'Centro Inferior'
    }
    else {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            return 'Canto Direito Superior'
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            return 'Canto Direito Central'
        else
            return 'Canto Direito Inferior'
    }
}

function getDomain() {
    return domain = window.location.hostname.split('.').slice(-2).join('.')
    //return domain = document.title
}

function getLogo(param) {
    let regex = new RegExp('(logo+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll('img, svg, figure, i, a')) {
        allElements.push(i)
    }

    console.log(allElements)
    console.log(allElements.length)

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
    console.log(finalList[0])

    el = finalList[0]
    try {
        let resultLogo = [true, el]
        return resultLogo
    } catch (error) {
        return false
    }
}

function getSearch(param) {
    let regex = new RegExp('(search+)|(pesquisa+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll("input[type='text'], input[type='search'] , form, button")) {
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

    el = finalList[0]
    try {
        let resultSearch = [true, el]
        return resultSearch
    } catch (error) {
        return false
    }
}

function getLogin(param) {
    let regex = new RegExp('(login+)|(log in+)|(log on+)|(entrar+)|(entre+)|(acessar+)|(acesso+)|(iniciar+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], form, button, a')) {
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

    el = finalList[0]
    try {
        let resultLogin = [true, el]
        return resultLogin
    } catch (error) {
        return false
    }
}

function getMenu(param) {
    let regex = new RegExp('(menu+)|(nav+)|(section+)|(list+)', 'ig')
    let allElements = []
    let finalList = []


    for (let i of param.querySelectorAll('nav, div, button, a, span, ul')) {
        allElements.push(i)
    }

    for (let m of allElements) {
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

    el = finalList[0]
    try {
        let resultMenu = [true, el]
        return resultMenu
    } catch (error) {
        return false
    }
}

function getSocial(param) {
    let regex = new RegExp('(social+)|(sociais+)|(media+)|(midia+)|(mídia+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll('img, svg, figure, i, a')) {
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

        if (regex.test(itemTagName) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder)) {

            finalList.push(j)
            let itemAriaHidden = j.getAttribute('aria-hidden')
            let itemAriaExpanded = j.getAttribute('aria-expanded')

            if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                finalList.pop(j)

            let itemTabIndex = j.getAttribute('tabindex')

            if (itemTabIndex === '-1') {
                finalList.pop(j)
            }
        }

    }

    el = finalList[0]
    try {
        let resultSocial = [true, el]
        return resultSocial
    } catch (error) {
        return false
    }
}

function getForms(param) {
    let finalList = []

    for (let i of param.querySelectorAll('input, form, button[type="submit"]')) {
        finalList.push(i)

        let itemAriaHidden = i.getAttribute('aria-hidden')
        let itemAriaExpanded = i.getAttribute('aria-expanded')

        if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
            finalList.pop(i)

        let itemTabIndex = i.getAttribute('tabindex')

        if (itemTabIndex === '-1') {
            finalList.pop(i)
        }
    }

    el = finalList[0]
    try {
        let resultForms = [true, el]
        return resultForms
    } catch (error) {
        return false
    }
}

function getHeader() {
    let regex = new RegExp('(header+)|(cabecalho+)|(cabeçalho+)', 'ig')
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'HEADER') {
            param = i
            console.log(param)
            let logo = getLogo(param)
            let login = getLogin(param)
            let search = getSearch(param)
            let nav = getMenu(param)
            let info = [logo, nav, login, search]

            finalList.push(i)
            return info
        }
        else if (i.nodeName == 'DIV') {
            //let itemTagName = j.outerHTML
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
                let itemAriaHidden = i.getAttribute('aria-hidden')
                let itemAriaExpanded = i.getAttribute('aria-expanded')

                if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                    finalList.pop(i)

                let itemTabIndex = i.getAttribute('tabindex')

                if (itemTabIndex === '-1') {
                    finalList.pop(i)
                }

                param = i
                let logo = getLogo(param)
                let login = getLogin(param)
                let search = getSearch(param)
                let nav = getMenu(param)
                let info = [logo, nav, login, search]
                return info
            }
        }
    }
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
            param = i
            let social = getSocial(param)
            let menu = getMenu(param)
            let form = getForms(param)
            let info = [social, menu, form]

            finalList.push(i)
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

                let itemAriaHidden = i.getAttribute('aria-hidden')
                let itemAriaExpanded = i.getAttribute('aria-expanded')

                if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                    finalList.pop(i)

                let itemTabIndex = i.getAttribute('tabindex')

                if (itemTabIndex === '-1') {
                    finalList.pop(i)
                }
                param = i
            }

            let social = getSocial(param)
            let menu = getMenu(param)
            let form = getForms(param)
            let info = [social, menu, form]
            return info
        }
    }
}

//ESSA LÓGICA DE CHECAGEM DE ELEMENTOS EM CADA BLOCO ESTÁ FUNCIONANDO, PODEMOS ACESSAR OS ARRAYS E CHECAR PARA CADA ELEMENTO.
//PRECISAMOS ADICIONAR UM MÉTODO QUE CHEQUE A EXISTÊNCIA DOS PRINCIPAIS BLOCOS
function generateDescription() {
    let domain = getDomain()
    let header = getHeader()
    let footer = getFooter()

    let descHeader = []
    let descFooter = []

    console.log('Header   -->\n'
        + '\nLogo -->' + header[0]
        + '\nNav -->' + header[1]
        + '\nLogin -->' + header[2]
        + '\nSearch -->' + header[3])


    function checkHeader() {
        //checkLogo
        if (header[0][0] == true) {
            descHeader.push('possui uma logo localizada no')

            let el = header[0][1]
            console.log(el)
            const elRectangle = el.getBoundingClientRect()

            let position = getElementPosition(elRectangle)
            let section = getElementSection(elRectangle)
            console.log('\n\nNOVA CHECAGEM -- LOGO')

            console.log(position)
            console.log(section)
            descHeader.push(section)
        }
        //checkNav
        if (header[1][0] == true) {
            descHeader.push('possui uma seção de menu localizada no ')
            let el = header[1][1]
            console.log(el)
            const elRectangle = el.getBoundingClientRect()

            let position = getElementPosition(elRectangle)
            let section = getElementSection(elRectangle)
            console.log('\n\nNOVA CHECAGEM -- NAV')

            console.log(position)
            console.log(section)
            descHeader.push(section)
        }
        //checkLogin
        if (header[2][0] == true) {
            descHeader.push('possui opção de login localizada no ')
            let el = header[2][1]
            console.log(el)
            const elRectangle = el.getBoundingClientRect()

            let position = getElementPosition(elRectangle)
            let section = getElementSection(elRectangle)
            console.log('\n\nNOVA CHECAGEM -- LOGIN')

            console.log(position)
            console.log(section)
            descHeader.push(section)
        }
        //checkSearch
        if (header[3][0] == true) {
            descHeader.push('possui uma seção de procura localizada no ')
            let el = header[3][1]
            console.log(el)
            const elRectangle = el.getBoundingClientRect()

            let position = getElementPosition(elRectangle)
            let section = getElementSection(elRectangle)
            console.log('\n\nNOVA CHECAGEM -- PESQUISA')

            console.log(position)
            console.log(section)
            descHeader.push(section)
        }
    }

    console.log('Footer   -->\n'
        + '\nSocial -->' + footer[0]
        + '\nMenu -->' + footer[1]
        + '\nForms -->' + footer[2])

    function checkFooter() {
        //checkSocial
        if (footer[0][0] == true) {
            descFooter.push('possui uma seção com links para redes sociais')
            let el = footer[0][1]
            console.log(el)
            const elRectangle = el.getBoundingClientRect();

            let section = getElementSection(elRectangle)
            let position = getElementPosition(elRectangle)

            console.log('\n\nNOVA CHECAGEM -- SOCIAL')
            console.log(position)
            console.log(section)
            descFooter.push(section)
        }
        //checkMenu
        if (footer[1][0] == true) {
            descFooter.push('possui uma seção de menu')
            let el = footer[1][1]
            console.log(el)
            const elRectangle = el.getBoundingClientRect();

            let section = getElementSection(elRectangle)
            let position = getElementPosition(elRectangle)

            console.log('\n\nNOVA CHECAGEM -- MENU')
            console.log(position)
            console.log(section)
            descFooter.push(section)
        }
        //checkForms
        if (footer[2][0] == true) {
        }
    }

    checkHeader()
    checkFooter()
    let description = ('A página ' + domain + '\n\n' + 'O cabeçalho da página, ' + descHeader[0] + ' ' + descHeader[1] + ' ' + descHeader[2] + ' ' + descHeader[3] + ' ' + descHeader[4] + ' ' + descHeader[5] + ' ' + descHeader[6] + ' ' + descHeader[7] + '\n\n' + 'O rodapé da página,' + ' ' + descFooter[0] + ' ' + descFooter[1] + ' ' + descFooter[2] + ' ' + descFooter[3])
    console.log(description)
}

window.onload = function () {
    setTimeout(function() { createSections(); }, 5000);
    setTimeout(function() { generateDescription(); }, 5000);
}
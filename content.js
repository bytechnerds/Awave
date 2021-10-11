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
    } else if (Math.sign((elRectangle.left - w2[1]) < 0) && (elRectangle.right - w2[1] < 100)) {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            return 'Centro Superior'
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            return 'Centro'
        else
            return 'Centro Inferior'
    } else {
        if (Math.sign((elRectangle.bottom - w1[1]) < 1))
            return 'Canto Direito Superior'
        else if (Math.sign((elRectangle.bottom - w2[1]) < 1))
            return 'Canto Direito Central'
        else
            return 'Canto Direito Inferior'
    }
}

function getDomain() {
    return domain = window.location.hostname.split('.').slice(-3).join('.')
    //return domain = document.title
}

function getLogo() {
    let regex = new RegExp('(logo+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.querySelectorAll('a, img, svg, figure, i')) {
        allElements.push(i)
    }

    for (let j of allElements) {
        let itemAlt = j.getAttribute('alt')
        let itemClass = j.getAttribute('class')
        let itemId = j.getAttribute('id')
        let itemType = j.getAttribute('type')
        let itemName = j.getAttribute('name')
        let itemAriaLabel = j.getAttribute('aria-label')
        let itemRole = j.getAttribute('role')
        let itemTitle = j.getAttribute('title')
        let itemPlaceholder = j.getAttribute('placeholder')

        if (regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            finalList.push(j)

        let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
        for (let i of finalList) {

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

            if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle) || regex2.test(itemPlaceholder))
                finalList.pop(i)

            let itemAriaHidden = i.getAttribute('aria-hidden')
            let itemAriaExpanded = i.getAttribute('aria-expanded')

            if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                finalList.pop(i)

            let itemTabIndex = i.getAttribute('tabindex')

            if (itemTabIndex == '-1') {
                finalList.pop(i)
            }
        }
    }
    el = finalList[0]

    if (el != null && el != undefined) {
        let resultLogo = [true, el]
        return resultLogo
    } else {
        return false
    }
}

function getSearch() {
    let regex = new RegExp('(search+)|(pesquisa+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.querySelectorAll("input[type='text'], input[type='search'] , form, button")) {
        allElements.push(i)
    }

    for (let j of allElements) {
        let itemAlt = j.getAttribute('alt')
        let itemClass = j.getAttribute('class')
        let itemId = j.getAttribute('id')
        let itemType = j.getAttribute('type')
        let itemName = j.getAttribute('name')
        let itemAriaLabel = j.getAttribute('aria-label')
        let itemRole = j.getAttribute('role')
        let itemTitle = j.getAttribute('title')
        let itemPlaceholder = j.getAttribute('placeholder')

        if (regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            finalList.push(j)
        let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
        for (let i of finalList) {

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

            if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle) || regex2.test(itemPlaceholder))
                finalList.pop(i)

            let itemAriaHidden = i.getAttribute('aria-hidden')
            let itemAriaExpanded = i.getAttribute('aria-expanded')

            if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                finalList.pop(i)

            let itemTabIndex = i.getAttribute('tabindex')

            if (itemTabIndex == '-1') {
                finalList.pop(i)
            }
        }
    }

    el = finalList[0]
    if (el != null && el != undefined) {
        let resultSearch = [true, el]
        return resultSearch
    } else {
        return false
    }
}

function getLogin() {
    let regex = new RegExp('(login+)|(log-in+)|(log in+)|(log on+)|(entrar+)|(entre+)|(acessar+)|(acesso+)|(iniciar+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], form, button, a')) {
        allElements.push(i)

    }
    for (let j of allElements) {
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

        if (regex.test(itemHref) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder))
            finalList.push(j)
        let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
        for (let i of finalList) {

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

            if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle) || regex2.test(itemPlaceholder))
                finalList.pop(i)

            let itemAriaHidden = i.getAttribute('aria-hidden')
            let itemAriaExpanded = i.getAttribute('aria-expanded')

            if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                finalList.pop(i)

            let itemTabIndex = i.getAttribute('tabindex')

            if (itemTabIndex == '-1') {
                finalList.pop(i)
            }
        }
    }

    el = finalList[0]
    if (el != null && el != undefined) {
        let resultLogin = [true, el]
        return resultLogin
    } else {
        return false
    }
}

function getMenu() {
    let regex = new RegExp('(menu+)|(nav+)|(section+)|(list+)', 'ig')
    let allElements = []
    let finalList = []


    for (let i of document.querySelectorAll('nav, div, button, a, span, ul')) {
        allElements.push(i)
    }

    for (let m of allElements) {
        let itemAlt = m.getAttribute('alt')
        let itemClass = m.getAttribute('class')
        let itemId = m.getAttribute('id')
        let itemName = m.getAttribute('name')
        let itemAriaLabel = m.getAttribute('aria-label')
        let itemRole = m.getAttribute('role')
        let itemTitle = m.getAttribute('title')

        if (regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle))
            finalList.push(m)

        let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
        for (let i of finalList) {

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

            if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle) || regex2.test(itemPlaceholder))
                finalList.pop(i)

            let itemAriaHidden = i.getAttribute('aria-hidden')
            let itemAriaExpanded = i.getAttribute('aria-expanded')

            if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                finalList.pop(i)

            let itemTabIndex = i.getAttribute('tabindex')

            if (itemTabIndex == '-1') {
                finalList.pop(i)
            }
        }
    }

    el = finalList[0]
    if (el != null && el != undefined) {
        let resultMenu = [true, el]
        return resultMenu
    } else {
        return false
    }
}

function getSocial() {
    let regex = new RegExp('(social+)|(sociais+)|(media+)|(midia+)|(mídia+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.querySelectorAll('img, svg, figure, i, a')) {
        allElements.push(i)
    }
    for (let j of allElements) {
        let itemAlt = j.getAttribute('alt')
        let itemClass = j.getAttribute('class')
        let itemId = j.getAttribute('id')
        let itemType = j.getAttribute('type')
        let itemName = j.getAttribute('name')
        let itemAriaLabel = j.getAttribute('aria-label')
        let itemRole = j.getAttribute('role')
        let itemTitle = j.getAttribute('title')
        let itemPlaceholder = j.getAttribute('placeholder')

        if (regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder)) {

            finalList.push(j)
            let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
            for (let i of finalList) {

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

                if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle) || regex2.test(itemPlaceholder))
                    finalList.pop(i)

                let itemAriaHidden = i.getAttribute('aria-hidden')
                let itemAriaExpanded = i.getAttribute('aria-expanded')

                if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                    finalList.pop(i)

                let itemTabIndex = i.getAttribute('tabindex')

                if (itemTabIndex == '-1') {
                    finalList.pop(i)
                }
            }
        }

    }

    el = finalList[0]

    if (el != null && el != undefined) {
        let resultSocial = [true, el]
        return resultSocial
    } else {
        return false
    }
}

function getSocial() {
    let regex = new RegExp('(social+)|(sociais+)|(media+)|(midia+)|(mídia+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.querySelectorAll('img, svg, figure, i, a')) {
        allElements.push(i)
    }
    for (let j of allElements) {
        let itemAlt = j.getAttribute('alt')
        let itemClass = j.getAttribute('class')
        let itemId = j.getAttribute('id')
        let itemType = j.getAttribute('type')
        let itemName = j.getAttribute('name')
        let itemAriaLabel = j.getAttribute('aria-label')
        let itemRole = j.getAttribute('role')
        let itemTitle = j.getAttribute('title')
        let itemPlaceholder = j.getAttribute('placeholder')

        if (regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder)) {

            finalList.push(j)
            let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
            for (let i of finalList) {

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

                if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle) || regex2.test(itemPlaceholder))
                    finalList.pop(i)

                let itemAriaHidden = i.getAttribute('aria-hidden')
                let itemAriaExpanded = i.getAttribute('aria-expanded')

                if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                    finalList.pop(i)

                let itemTabIndex = i.getAttribute('tabindex')

                if (itemTabIndex == '-1') {
                    finalList.pop(i)
                }
            }
        }

    }

    el = finalList[0]

    if (el != null && el != undefined) {
        let resultSocial = [true, el]
        return resultSocial
    } else {
        return false
    }
}

function getForms() {
    let finalList = []

    for (let i of document.body.querySelectorAll('input, form, button[type="submit"]')) {
        finalList.push(i)
        let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
        for (let i of finalList) {

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

            if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle) || regex2.test(itemPlaceholder))
                finalList.pop(i)

            let itemAriaHidden = i.getAttribute('aria-hidden')
            let itemAriaExpanded = i.getAttribute('aria-expanded')

            if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                finalList.pop(i)

            let itemTabIndex = i.getAttribute('tabindex')

            if (itemTabIndex == '-1') {
                finalList.pop(i)
            }
        }
    }

    el = finalList[0]

    if (el != null && el != undefined) {
        let resultForms = [true, el]
        return resultForms
    } else {
        return false
    }
}

function getHeader() {
    let regex = new RegExp('(header+)|(cabecalho+)|(cabeçalho+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.querySelectorAll('*')) {
        if (i.nodeName == 'HEADER') {
            finalList.push(i)
            headerEl = finalList[0]
            console.log(finalList)
            if (headerEl != null && headerEl != undefined) {
                let resultHeader = [true, headerEl]
                return resultHeader
            } else {
                if (i.nodeName == 'DIV')
                    allElements.push(i)

                for (j of allElements) {
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

                    if (regex.test(itemTagName) || regex.test(itemHref) || regex.test(itemAlt) || regex.test(itemClass) || regex.test(itemId) || regex.test(itemType) || regex.test(itemName) || regex.test(itemAriaLabel) || regex.test(itemRole) || regex.test(itemTitle) || regex.test(itemPlaceholder)) {
                        finalList.push(j)
                        let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
                        for (let i of finalList) {

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

                            if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle) || regex2.test(itemPlaceholder))
                                finalList.pop(i)

                            let itemAriaHidden = i.getAttribute('aria-hidden')
                            let itemAriaExpanded = i.getAttribute('aria-expanded')

                            if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                                finalList.pop(i)

                            let itemTabIndex = i.getAttribute('tabindex')

                            if (itemTabIndex == '-1') {
                                finalList.pop(i)
                            }

                        }
                    }
                }
                console.log(finalList)
                headerEl = finalList[0]

                if (headerEl != null && headerEl != undefined) {
                    let resultHeader = [true, headerEl]
                    return resultHeader
                } else {
                    return false
                }
            }
        }
    }
}


function getMain() {
    let regex = new RegExp('(rodape+)|(footer+)|(rodapé+)|(header+)|(cabecalho+)|(cabeçalho+)', 'ig')
    let regex2 = new RegExp('(hid+)|(hide+)|(hidden+)', 'ig')
    let regex3 = new RegExp('(root+)|(main+)|(principal+)|(wrapper+)', 'ig')
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        let itemAlt = i.getAttribute('alt')
        let itemHref = i.getAttribute('href')
        let itemClass = i.getAttribute('class')
        let itemId = i.getAttribute('id')
        let itemType = i.getAttribute('type')
        let itemName = i.getAttribute('name')
        let itemAriaLabel = i.getAttribute('aria-label')
        let itemRole = i.getAttribute('role')
        let itemTitle = i.getAttribute('title')
        if ((regex3.test(itemHref)) || (regex3.test(itemAlt)) || regex3.test(itemClass) || regex3.test(itemId) || regex3.test(itemType) || regex3.test(itemName) || regex3.test(itemAriaLabel) || regex3.test(itemRole) || regex3.test(itemTitle)) {
            finalList.push(i)
        } else if (!(i.nodeName === 'FOOTER') && (!(i.nodeName === 'HEADER')) && (!(i.nodeName === 'STYLE')) && (!(i.nodeName === 'SCRIPT'))) {
            if (i.nodeName == 'DIV') {
                if (!(regex.test(itemHref)) || !(regex.test(itemAlt)) || !(regex.test(itemClass)) || !(regex.test(itemId)) || !(regex.test(itemType)) || !(regex.test(itemName)) || !(regex.test(itemAriaLabel)) || !(regex.test(itemRole)) || !(regex.test(itemTitle))) {
                    finalList.push(i)
                    for (let i of finalList) {
                        if (regex2.test(itemAlt) || regex2.test(itemHref) || regex2.test(itemClass) || regex2.test(itemId) || regex2.test(itemType) || regex2.test(itemName) || regex2.test(itemAriaLabel) || regex2.test(itemRole) || regex2.test(itemTitle))
                            finalList.pop(i)

                        let itemAriaHidden = i.getAttribute('aria-hidden')
                        let itemAriaExpanded = i.getAttribute('aria-expanded')

                        if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                            finalList.pop(i)

                        let itemTabIndex = i.getAttribute('tabindex')

                        if (itemTabIndex == '-1') {
                            finalList.pop(i)
                        }
                    }
                }
            }
        }
    }
    mainEl = finalList[0]
    if (mainEl != null && mainEl != undefined) {
        let resultLogo = [true, mainEl]
        return resultLogo
    } else {
        return false
    }
}


function getFooter() {
    let regex = new RegExp('(rodape+)|(footer+)|(rodapé+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'FOOTER') {
            finalList.push(i)
            footerEl = finalList[0]
            if (footerEl != null && footerEl != undefined) {
                let resultFooter = [true, footerEl]
                return resultFooter
            } else {
                if (i.nodeName == 'DIV') {
                    //div com a classe footer
                    // if (!(i.parentElement == 'HEADER'))
                    allElements.push(i)
                }

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
                    finalList.push(i)
                }
                if (footerEl != null && footerEl != undefined) {
                    let resultFooter = [true, footerEl]
                    return resultFooter
                } else {
                    return false
                }
            }
        }

    }
}


function generateDescription() {
    createSections()
    let desc = []

    // let domain = getDomain()
    // desc.push(domain)

    let header = getHeader()
    if (header[0] == true) {
        console.log(header)

        const headerRect = header[1].getBoundingClientRect()
        getElementPosition(headerRect)

        desc.push('possui um cabeçalho ')
    }

    let logo = getLogo()
    if (logo[0] == true) {
        console.log(logo)

        const logoRect = logo[1].getBoundingClientRect()
        getElementPosition(logoRect)


        desc.push('com uma logo localizada no ' + getElementSection(logoRect))
    }

    let login = getLogin()
    if (logo[0] == true) {
        console.log(login)

        const loginRect = login[1].getBoundingClientRect()
        getElementPosition(loginRect)

        desc.push('O botão de login que fica no ' + getElementSection(loginRect))
    }

    let search = getSearch()
    if (search[0] == true) {
        console.log(search)

        const searchRect = search[1].getBoundingClientRect()
        getElementPosition(searchRect)

        desc.push('com uma barra de pesquisa localizada no ' + getElementSection(searchRect))
    }

    let menu = getMenu()
    if (menu[0] == true) {
        console.log(menu)

        const menuRect = menu[1].getBoundingClientRect()
        getElementPosition(menuRect)


        desc.push('Além disso, possui um menu no ' + getElementSection(menuRect))
    }

    let main = getMain()
    if (main[0] == true) {
        console.log(main)

        const mainRect = main[1].getBoundingClientRect()
        getElementPosition(mainRect)

        desc.push('Também possui uma seção de conteúdo principal ')
    }

    // let forms = getForms()
    // if (forms[0] == true) {
    //     console.log(forms)

    //     const formsRect = forms[1].getBoundingClientRect()
    //     getElementPosition(formsRect)

    //     desc.push('' + getElementSection(formsRect))
    // }

    let footer = getFooter()
    if (footer[0] == true) {
        console.log(footer)

        const footerRect = footer[1].getBoundingClientRect()
        getElementPosition(footerRect)

        desc.push('E por fim, há um rodapé')
    }

    let social = getSocial()
    if (social[0] == true) {
        console.log(social)

        const socialRect = social[1].getBoundingClientRect()
        getElementPosition(socialRect)


        desc.push('onde você encontra também links para redes sociais no ' + getElementSection(socialRect) + ' da página')
    }

    let description = 'A página '
    let result = ''

    desc.join(". ")
    result = description.concat(desc)

    console.log(result)

    //NÃO CONSEGUIMOS FAZER O NVDA LER O CONTEUDO DA DIV CRIADA AUTOMATICAMENTE, ENTÃO VAMOS CHAMAR UM ALERT PARA FAZER COM QUE ESSE TEXTO SEJA LIDO AUTOMATICAMENTE
    // let bg
    // let modal
    // //tentar adicionar div, dentro de div, para fazer um fundo com transparencia
    // bg = document.createElement('div')
    // bg.style.display = "none"
    // bg.style.position = "fixed"
    // bg.style.backgroundColor = "rgba(0,0,0,0.6)"
    // bg.style.width = "100%"
    // bg.style.height = "100%"
    // bg.style.zIndex = "500"
    // bg.style.overflow = "auto"


    // modal = document.createElement('div')
    // modal.setAttribute('id','descriptionBox')
    // modal.setAttribute('class','descriptionBox')
    // modal.style.display = "none"
    // modal.style.backgroundColor = "#202020"
    // modal.style.fontFamily = "Poppins"
    // modal.style.fontSize = "1.2em"
    // modal.style.fontWeight = "400"
    // modal.style.color = "#ffffff"
    // modal.style.zIndex = "500"
    // modal.style.padding = "20px"
    // modal.style.width = "35%"
    // modal.style.height = "35%"
    // modal.style.borderRadius = "5%"
    // modal.style.overflow = "auto"

    // bg.append(modal)
    // document.body.append(bg)

    document.onkeyup = function (e) {
        console.log(`KeyboardEvent: key='${e.key}' | code='${e.code}'`)

        if (e.ctrlKey && e.altKey && e.code == 'KeyD') {

            console.log(result)
            window.alert(result)

            // bg.style.display = "block"
            // modal.style.display = "block"
            // modal.innerText = description

            // window.onkeyup = function (e) {
            //     if (e.ctrlKey && e.code == 'Space') {
            //         bg.style.display = "none"
            //         modal.style.display = "none"
            //     }
            // }
        }
    }
}

window.onload = function () {
    setTimeout(function () { generateDescription(); }, 1000);
}
let param

function getHeader() {
    let regex = new RegExp('(header+)|(cabecalho+)|(cabeçalho+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.body.querySelectorAll('*')) {
        if (i.nodeName == 'HEADER') {
            param = i
            console.log(param)
            let logo = getLogo(param)
            let info = [logo]

            return info
        }
        else if (i.nodeName == 'DIV')
            allElements.push(i)
    }

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
            let itemAriaHidden = j.getAttribute('aria-hidden')
            let itemAriaExpanded = j.getAttribute('aria-expanded')

            if (itemAriaHidden == 'true' || itemAriaExpanded == 'false')
                finalList.pop(j)

            let itemTabIndex = j.getAttribute('tabindex')

            if (itemTabIndex === '-1') {
                finalList.pop(j)
            }

            param = document.querySelector('.' + j.getAttribute('class'))
            let logo = getLogo(param)
            let login = getLogin(param)
            let search = getSearch(param)
            let nav = getMenu(param)
            let info = [logo, nav, login, search, media]
            return info
        }
    }
}

function getLogo(param) {
    let regex = new RegExp('(logo+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of param.querySelectorAll('img, svg, figure, i, a')){
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
}
getHeader()













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

    el = finalList[0]
    try {
        let resultLogo = [true, el]
        return resultLogo
    } catch (error) {
        return false
    }
}
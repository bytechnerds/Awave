function getFooter() {
    let regex = new RegExp('(rodape+)|(footer+)|(rodapé+)', 'ig')
    let finalList = []
    let footerEl

    for (let i of document.querySelectorAll('*')) {
        if (i.nodeName === 'FOOTER') {
            finalList.push(i)
            footerEl = i
            let resultFooter = [true, footerEl]
            return resultFooter
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
                footerEl = finalList[0]
                const elRectangle = footerEl.getBoundingClientRect()
                let resultFooter = [true, footerEl, elRectangle]
                return resultFooter
            }
        }
    }
}


function getLogo() {
    let regex = new RegExp('(logo+)', 'ig')
    let allElements = []
    let finalList = []

    for (let i of document.querySelectorAll('img, svg, figure, i, a')) {
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

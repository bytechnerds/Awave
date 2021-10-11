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
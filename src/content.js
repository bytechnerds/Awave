console.log('Chrome extension go!!')

chrome.runtime.onMessage.addListener(messageReceived)

function messageReceived(message, sender, sendResponse){
    console.log(message.txt)

    if (message.txt === 'hello'){
        window.alert(
            "A página possui um menu principal no canto superior direito com as opções Gmail, Imagens, e um menu com mais opções escondidas. A sessão de login fica à direita. O site tem uma sessão de busca na parte central, com dois botões (Pesquisa Google e, Estou com sorte). Na tela principal, encontramos a logo do site no centro. Por último, abaixo da seção de pesquisa, as opções de linguagem. No rodapé, temos 3 opções: Configurações, Privacidade e, Termos. Essas nos levam à páginas externas de cada item."
        )
        //FIX THIS!!!
        // modal = document.createElement('div')
        // modal.class='modal-body'
        // modal.id = 'modal-body'
        
        // modal.innerText = "A página possui um menu principal no canto superior direito com as opções Gmail, Imagens, e um menu com mais opções escondidas. A sessão de login fica à direita. <br><br>O site tem uma sessão de busca na parte central, com dois botões (Pesquisa Google e, Estou com sorte). <br><br> Na tela principal, encontramos a logo do site no centro. Por último, abaixo da seção de pesquisa, as opções de linguagem. <br><br> No rodapé, temos 3 opções: Configurações, Privacidade e, Termos. Essas nos levam à páginas externas de cada item. <br><br>"
        // modal.style.display = "block"
        // modal.style.position = "fixed"
        // modal.style.zindex = "1"
        // modal.style.paddingtop = "5px"
        // modal.style.width = "100%"
        // modal.style.height= "100%"
        // modal.style.overflow = "auto"

        // body = document.getElementByTagName('body')
        // body.append(modal)
    }
}
from os import close
from bs4 import BeautifulSoup
from urllib.request import urlopen
import re
import json

html = urlopen(input('Informe o site: '))
soup = BeautifulSoup(html.read(), 'html.parser')

#def getData()

#def getHTml()

def getClickables():
    button = soup.find_all('button')
    button_id = soup.find_all(attrs={'id': re.compile('btn|button', re.IGNORECASE)})
    button_class = soup.find_all(attrs={'class': re.compile('btn|button', re.IGNORECASE)})
    links = soup.find_all('a')
    links_href = soup.find_all(attrs={'href'})
    submit = soup.find_all(attrs={'type':'submit'})
    inputButton = soup.find_all(attrs={'type':'button'})

    cList = [button, button_id, button_class, links, links_href, submit, inputButton]
    lista = []
    for c in cList:
        lista.extend(c)
    
    print(len(lista))
    
    f = open('clickablesList.json', 'w')
    
    f.write("""
        {
            "page_title":"",
            "page_url":"",
            "elements":[
                {
                    "clickables": [
        """)
    
    for l in lista:
        jsonStr = json.dumps(str(l))
        f.write(jsonStr+',')
        print(jsonStr)
    
    f.write("""
                    ]
                }
            ]
        }
    """)

    f.close()

def getImages():
    # images as backgrounds
    images = soup.find_all('img')
    images_id = soup.find_all(attrs={'id': re.compile('img|image', re.IGNORECASE)})
    svg = soup.find_all('svg')
    figures = soup.find_all('figure')

    iList = [images, images_id, svg, figures]
    print(iList)

def getPlayables():
    videos = soup.find_all('video')
    audios = soup.find_all('audio')

    pList=[videos, audios]
    print(pList)

def getLogin():
    login = []

    #BOTÃO DE LOGIN 
    login_href = soup.find_all(attrs={'href': re.compile(r'login', re.IGNORECASE)})
    # aria-label="Conta" (imagemzinha do Youtube),
    login_label = soup.find_all(attrs={'aria-label': re.compile(r'Conta', re.IGNORECASE)})
    # social login = entrar com Google, Facebook, Apple, Linkedin, Github, <a id="login" ou class>
    social_login1 = soup.find_all(attrs={'class': re.compile(r'Login', re.IGNORECASE)})
    social_login2 = soup.find_all(attrs={'id': re.compile(r'login', re.IGNORECASE)})

    #CAMPOS (FIELDS DO LOGIN)
    # input, div, button, nav...
    # name = "user", name = "email", name = "password", name = "senha", name ="usuario"
    username_email = soup.find_all('input', attrs={'type':'email'})
    username_name = soup.find_all(attrs={'name': re.compile(r'user|usuario|email', re.IGNORECASE)})
    username_class = soup.find_all(attrs={'class': re.compile(r'login|user|usuario|email', re.IGNORECASE)})
    username_aria = soup.find_all(attrs={'aria-label': re.compile(r'email', re.IGNORECASE)})

    password_type = soup.find_all('input', attrs={'type':'password'})
    password_name = soup.find_all(attrs={'name': re.compile(r'password|senha', re.IGNORECASE)})

    #TESTAR SE NÃO ESTÁ VAZIO
    def append_to_login(aux):
        if aux: 
            login.append(aux)

    append_to_login(login_href)
    append_to_login(login_label)
    append_to_login(social_login1)
    append_to_login(social_login2)
    append_to_login(username_email)
    append_to_login(username_name)
    append_to_login(username_class)
    append_to_login(username_aria)
    append_to_login(password_name)
    append_to_login(password_type)

    print('Login:', login)

def getSearch():
    #regex para achar searchbar sem input type. Aceita: button, div, input com 
    # class, id, title="Pesquisar" aria-label="Pesquisar"
    # search = [] 

    search = []
    by_class = soup.find_all(attrs={'class': re.compile(r'search|pesquisa', re.IGNORECASE)})
    by_id = soup.find_all(attrs={'id': re.compile(r'search|pesquisa', re.IGNORECASE)})
    by_type = soup.find_all(attrs={'type': re.compile(r'search|pesquisa', re.IGNORECASE)})
    by_aria = soup.find_all(attrs={'aria-label': re.compile(r'search|pesquisa', re.IGNORECASE)})
    by_title = soup.find_all(attrs={'title': re.compile(r'search|pesquisa', re.IGNORECASE)})
    by_role = soup.find_all(attrs={'role': re.compile(r'search|pesquisa', re.IGNORECASE)})
    by_place = soup.find_all(attrs={'placeholder': re.compile(r'search|pesquisa', re.IGNORECASE)})

    #TESTAR SE NÃO ESTÁ VAZIO
    def append_to_search(aux):
        if aux: 
            search.append(aux)

    append_to_search(by_class)
    append_to_search(by_id)
    append_to_search(by_type)
    append_to_search(by_aria)
    append_to_search(by_title)
    append_to_search(by_role)
    append_to_search(by_place)
        
    print('Search bar:', search)

#getForms()

def getBlocks():
    header = soup.find_all('header')
    header_id = soup.find_all(attrs={'id': re.compile('header', re.IGNORECASE)})
    header_class = soup.find_all(attrs={'class': re.compile('header', re.IGNORECASE)})
    
    main = soup.find_all('main')
    main_id = soup.find_all(attrs={'id': re.compile('main', re.IGNORECASE)})
    main_class = soup.find_all(attrs={'class': re.compile('main', re.IGNORECASE)})
    main_role = soup.find_all(attrs={'role': re.compile('main', re.IGNORECASE)})

    footer = soup.find_all('footer')
    footer_id = soup.find_all(attrs={'id': re.compile('footer', re.IGNORECASE)})
    footer_class = soup.find_all(attrs={'class': re.compile('footer', re.IGNORECASE)})

    bList = [header,header_id, header_class, main, main_id, main_class, main_role, footer, footer_id, footer_class]
    print(bList)
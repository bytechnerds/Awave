#Importar o Requests, ChromeDriver e Beautiful Soup
from bs4 import BeautifulSoup
from urllib.request import urlopen

html = urlopen(input('Informe o site: '))
soup = BeautifulSoup(html.read(), 'html.parser')

header = soup.find('header')

username = soup.find('input', attrs={'type':'username'})
password = soup.find('input', attrs={'type':'password'})

login = [username, password]

search = soup.find("input", attrs={"type":"search"})

main = soup.find_all('main')
footer = soup.find('footer')

tagsList = [header, login, search, main, footer]

print('Header: ', header.get('class'))

print('Username: ', username)

print('Password: ', password)

print('Search bar:', search)

for m in main:
    print('Main:', m.get('class'))

print('Footer: ',footer.get('class'))
#Depois adaptar pra pegar a URL que o usuário acessar no navegador (tipo eventListener. Acho que dá pra usar requests)

#url_do_site = driver.current_url
#print(url_do_site)

#"Baixar o conteúdo todo da página" no formato BeautifulSoup object (nested data structure)

#Dividir por blocos de hierarquia

#Navegar de um bloco por outro 

# Criar uma lista de elementos que podem estar dentro de uma página e tentar achar eles com o Web Scrapping. Aqueles que forem achados vão ajudar a definir o layout da página.
# <header>
# Login / <input>
# Logo / <a> <img> <svg>
# Procura / <input>
# Menu <ul> <li> </ul>
# <main>
# <footer> / div class="footer"
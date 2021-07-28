import keyboard
from chromedriver import driver
from selenium.webdriver.common.keys import Keys


#We need a specific method for forms?
def findClickables():
    #Comando de teste! Pode ser apagado depois de funcionando!
    driver.chromeDriver.get('http://google.com')

    buttons = driver.chromeDriver.find_elements_by_tag_name('button')
    links = driver.chromeDriver.find_elements_by_tag_name('a')
    submit = driver.chromeDriver.find_elements_by_tag_name('input[type=submit]')
    inputButton = driver.chromeDriver.find_elements_by_tag_name('input[type=button]')

    cList = [buttons, links, submit, inputButton]
    
    print(cList)

    # Test this! Iterate over the list with the specific elements from the page, and when the tab key is presses, the driver sends a key with a NULL value to that item, so it focus specifically on that.
    
    # for c in cList:
    #     keyboard.read_key('tab')
    #     c.chromeDriver.send_keys(Keys.NULL)

def findImages():
    #Comando de teste! Pode ser apagado depois de funcionando!
    driver.chromeDriver.get('http://google.com')
    
    images = driver.chromeDriver.find_elements_by_tag_name('img')
    svg = driver.chromeDriver.find_elements_by_tag_name('svg')
    figure = driver.chromeDriver.find_elements_by_tag_name('figure')

    iList = [images, svg, figure]

    print(iList)

def findPlayables():
    #Comando de teste! Pode ser apagado depois de funcionando!
    driver.chromeDriver.get('https://www.twitch.tv/skylias')
    
    videos = driver.chromeDriver.find_elements_by_tag_name('video')
    audios = driver.chromeDriver.find_elements_by_tag_name('audio')
    
    pList = [videos, audios]

    print(pList)

def findEntrys():
    #Comando de teste! Pode ser apagado depois de funcionando!
    driver.chromeDriver.get('http://google.com')

    text = driver.chromeDriver.find_elements_by_tag_name('input[type=text]')
    number = driver.chromeDriver.find_elements_by_tag_name('input[type=number]')
    email = driver.chromeDriver.find_elements_by_tag_name('input[type=email]')
    tel = driver.chromeDriver.find_elements_by_tag_name('input[type=tel]')
    password = driver.chromeDriver.find_elements_by_tag_name('input[type=password]')
    search = driver.chromeDriver.find_elements_by_tag_name('input[type=search]')
    url = driver.chromeDriver.find_elements_by_tag_name('input[type=url]')
    
    eList = [text, number, email, tel, password, search, url]
    
    print(eList)


def findBlocks():

# We need the scrapping to select the main blocks of the page, choosing on the body tag direct childs and their childs, an so on. When we have a list with all the main divs, section or whatever they are, we change the focus between them.

    print(" ")

# Maybe use the switch_to method of selenium, for the navigation
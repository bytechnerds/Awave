import keyboard
from chromedriver import driver

# TRABALHAR COM CLICKABLES
def findClickables():
    driver.chromeDriver.get('http://google.com')

    buttons = driver.chromeDriver.find_elements_by_tag_name('button')
    links = driver.chromeDriver.find_elements_by_tag_name('a')
    inputs = driver.chromeDriver.find_elements_by_tag_name('input')
    
    for i in inputs: 
        if (i.__getattribute__('submit')): 
            submits = inputs

    cList = [buttons, links, submits]

    print(cList)

# # Hotkeys List
# keyboard.add_hotkey("ctrl+alt+b", findButtons(), args=('triggered', 'hotkey'), timeout=3)
# keyboard.add_hotkey("ctrl+alt+i", findImages(), args=('triggered', 'hotkey'), timeout=3)
# keyboard.add_hotkey("ctrl+alt+v", findVideos(), args=('triggered', 'hotkey'), timeout=3)
# keyboard.add_hotkey("ctrl+alt+e", findEntry(), args=('triggered', 'hotkey'), timeout=3)
# keyboard.add_hotkey("ctrl+alt+n", findBlocks(), args=('triggered', 'hotkey'), timeout=3)

# USAR O CHROMEDRIVER PARA NAVEGAR PELA PÁGINA E ENCONTRAR TODOS OS ELEMENTOS DO MESMO TIPO DE ACORDO COM O ATALHO DESEJADO (EX. CTRL + ALT + B - PEGA TODOS OS BUTTONS)
# JOGAR TODOS OS ELEMENTOS EM UM NOVO ARRAY, E USAR UM MAP PRA PERCORRER ESSE ARRAY TODA VEZ QUE O USUÁRIO PRESSIONAR O TAB.

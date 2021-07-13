from selenium import webdriver

class driver():
    chromeDriver = webdriver.Chrome(executable_path='c:/chromedriver/chromedriver')
    
    def initDriver(): 
        chromeDriver = webdriver.Chrome(executable_path='c:/chromedriver/chromedriver')
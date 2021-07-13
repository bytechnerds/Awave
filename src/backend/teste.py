from chromedriver import driver

# CÓDIGO TESTE PARA ENTENDER O USO DO CHROME DRIVER DO MODO COMO FOI INSTANCIADO!
# PODE SER EXCLUÍDO SEM PROBLEMAS!

get = driver.chromeDriver.get('https://github.com/bytechnerds')

url = driver.chromeDriver.current_url

print(url)
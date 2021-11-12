# Exercício 2 Faça uma requisição ao recurso usuários da API do Github ( https://api.github.com/users ), exibindo o username e url de todos os usuários retornados.


import requests


response = requests.get("https://api.github.com/users")
users = response.json()
print(users)
for user in users:
    print(f"user['login'] user['url']")

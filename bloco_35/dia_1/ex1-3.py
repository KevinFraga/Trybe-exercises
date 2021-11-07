# Exercício 1 : O primeiro server que iremos utilizar é o nosso velho amigo HTTP, na camada de aplicação. Você pode tanto criar um quanto utilizar um dos projetos ou exercícios dos módulos anteriores. A ideia é utilizarmos os conhecimentos do conteúdo e a ferramenta cURL para realizarmos uma chamada HTTP para ele. A ideia aqui é que o projeto tenha rotas GET e POST, para que seja possível enviar requisições para os endpoints e receber respostas, assim como já nos acostumamos a receber via browser ou utilizando programas como o Postman.
#   Caso tenha dificuldades maiores, você pode utilizar o Postman para converter uma requisição em cURL, é só fazer a requisição nele como você já sabe e depois clicar no botão code (que fica embaixo do save) e escolher cURL.
#     Faça uma chamada GET, utilizando o cURL.
#     Faça uma chamada POST, utilizando o cURL, passando um JSON no body da requisição.
#     Faça uma chamada qualquer, utilizando o cURL, passando um header na requisição.


#  curl -X GET localhost:3000

#  curl -X POST \
#     -H 'Content-Type: application/json' \
#     -d '{ "foo": "bar" }' \
#     localhost:3000

#  curl --request POST \
#     --header 'Content-Type: application/json' \
#     --header 'Authorization: ApiKey EXAMPLE-TOKEN' \
#     --data '{ "foo": "bar" }' \
#     localhost:3000


# Exercício 2 : Ainda utilizando o cURL, vamos explorar mais alguns conceitos do HTTP. Relembre que falamos que o HTTP organiza e dá significado aos dados encapsulados nessa camada. Por exemplo: ao vermos um 200 tanto nós quanto um client HTTP sabemos que aquela request foi realizada com sucesso. Vamos explorar isso com o cURL.
#   Faça uma chamada GET, utilizando o cURL, para "google.com".
#   Perceba que foi retornado um 301 . Isso quer dizer que existem diversos redirecionamentos que nos encaminham para o lugar certo. No caso, o caminho certo para a página do google é www.google.com . Ao acessarmos pelo navegador, não percebemos isso porquê ele faz o redirecionamento para a página certa para nós ao encontrar o 301 , porém, se você inspecionar a network você irá identificar esse redirecionamento. Faça uma nova chamada a "google.com", porém agora utilizando o parâmetro -L ou --location , que serve para "seguir redirecionamentos".


#  curl google.com

#  curl -L google.com


# Exercício 3 : Agora utilizando o wget, pegue o conteúdo da página do site da Trybe, depois abra o arquivo HTML baixado em seu navegador. Faça o mesmo processo com outras páginas web.


#  wget betrybe.com

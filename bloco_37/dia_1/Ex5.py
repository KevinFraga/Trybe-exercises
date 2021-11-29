# Exercício 5 : Faça um script que exibe o seu respectivo process id utilizando o módulo os do Python e então fique em execução por um determinado tempo. Agora utilizando os comandos de monitoramento visto no conteúdo, exiba os processos em execução e então identifique o seu processo.


from time import sleep
from os import getpid


print(getpid())
sleep(20)

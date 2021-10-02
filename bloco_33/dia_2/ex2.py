# Exercício 2: Jogo da palavra embaralhada. Desenvolva um jogo em que a pessoa usuária tenha que adivinhar uma palavra que será mostrada com as letras embaralhadas. O programa terá uma lista de palavras e escolherá uma aleatoriamente. O jogador terá três tentativas para adivinhar a palavra. Ao final a palavra deve ser mostrada na tela, informando se a pessoa ganhou ou perdeu o jogo.
#     🦜 Para embaralhar uma palavra faça: scrambled_word = "".join(random.sample(word, len(word)))
#     🦜 O sorteio de uma palavra aleatória pode ser feito utilizando o método choice: random.choice(["word1", "word2", "word3"]) -> "word2" .

import random

words = ['cachorro', 'gato', 'papagaio', 'ovelha', 'vaca']
word = random.choice(words)

scrambled_word = "".join(random.sample(word, len(word)))

tries = 0
correct = 0

print(scrambled_word)

while tries < 3 and not correct:
    player_input = input('Qual é a palavra?')
    if player_input == word:
        correct = 1
    else:
        print('Errou, tente novamente!')
        tries += 1

if correct:
    print('Parabéns, você acertou!')
else:
    print('Não foi dessa vez, a palavra era', word)

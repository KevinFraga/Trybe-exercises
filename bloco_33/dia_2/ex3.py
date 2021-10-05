# Exercício 3: Modifique o exercício anterior para que as palavras sejam lidas de um arquivo. Considere que o arquivo terá cada animal em uma linha.

import random

with open("animals.txt") as animals:
    words = [
        line[:-1] for line in animals
    ]

word = random.choice(words)

scrambled_word = "".join(random.sample(word, len(word)))

tries, correct = 0, 0

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

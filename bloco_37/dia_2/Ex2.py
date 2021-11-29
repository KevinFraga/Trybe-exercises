# Exercício 2 Em um jogo de baralho, as cartas estão representadas por um array numérico. Para iniciar o jogo devemos embaralhar as cartas. Faremos isto dividindo uma porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:
#   Exemplo 1:
#       cartas = [2, 6, 4, 5]
#       cartas por parte = 2
#       resultado = [2, 4, 6, 5]
#   Exemplo 2:
#       cartas = [1, 4, 4, 7, 6, 6]
#       cartas por parte = 3
#       resultado = [1, 7, 4, 6, 4, 6]


def shuffle(numbers, n):
    answer = []
    new_array_index = 0
    for index in range(n):
        answer.insert(new_array_index, numbers[index])
        new_array_index += 1
        answer.insert(new_array_index, numbers[index + n])
        new_array_index += 1
    return answer

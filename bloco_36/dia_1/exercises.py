# Exercício 1 Dado um array de números de tamanho n , escreva um algoritmo que retorna true se há no array um número duplicado e false caso contrário. Analise a solução abaixo e diga qual é a ordem de complexidade desse algoritmo para o melhor caso, pior caso e caso médio.

#     def contains_duplicate(numbers):
#         numbers.sort()
#         previous_number = 'not a number';
#         for number in numbers:
#             if(previous_number == number): return True
#             previous_number = number

#         return False


# Em todos os casos a função ordena o array com o método sort(), cuja complexidade é O(n log n)
# Após essa etapa ele percorre o array novamente, complexidade de O(n)
# Logo a complexidade total é de O(n log n + n), que pode ser simplificado para O(n log n)



# Exercício 2 Suponha que se está escrevendo uma função para um jogo de batalha naval. Dado um array bidimensional com n linhas e m colunas, e um par de coordenadas x para linhas e y para colunas, o algoritmo verifica se há um navio na coordenada alvo. Por exemplo:

#     entrada = [ 0 0 0 0 1
#                 0 0 0 0 1
#                 1 1 1 1 1
#                 0 0 0 1 0 ]

#     resultado para (0, 4) = True
#     resultado para (1, 1) = False
#     Qual seria a ordem de complexidade da solução para este problema? E a complexidade de espaço?


# Complexidade => O(1) - mesmo o array sendo bidimensional é feita somente uma varredura
# Espaço => O(1) - o espaço alocado será sempre o mesmo, pois o tipo de entrada é fixo



# Exercício 3 O código abaixo está em JavaScript . Calcule sua ordem de complexidade para um array de tamanho n .

#     const numbers = [0,1,2,3,4,5,6,7,8,9]
#     numbers.map(n => n*n)


# Complexidade O(n)



# Exercício 4 O código abaixo está em JavaScript . Calcule sua ordem de complexidade para um array de tamanho n .

#     const numbers = [0,1,2,3,4,5,6,7,8,9]
#     numbers.map(n => n*n)
#            .filter(n => n%2 === 0)
#            .reduce((acc, n) => acc + n)


# Cada HOF vai percorrer o array uma vez, logo a complexidade é O(3n), que pode ser simplificado para O(n)



# Exercício 5 Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada um desses números deve ser a média de dez números gerados aleatóriamente. Qual é a ordem de complexidade de tempo e de espaço deste programa?


"""Mesmo que, para o exemplo dado, o valor de `n` seja muito menor que o valor da constante `100`, para valores de `n` grandes o valor da constante se torna desprezível. Esse problema, então, é `O(n)`. Pelo mesmo motivo, a complexidade de espaço é constante, ou seja, `O(1)`"""

import random

def randomAverages(n):
    list_of_averages = []

    for _ in range(100):
        average = 0
        for _ in range(n):
            average += random.randrange(1, n)
        average = average/n
        list_of_averages.append(average)

    return list_of_averages


# Exercício 6 Dado um array de doces candies e um valor inteiro extra_candies, onde o candies[i] representa o número de doces que a enésima criança possui. Para cada criança, verifique se há uma maneira de distribuir doces extras entre as crianças de forma que ela possa ter o maior número de doces entre elas. Observe que várias crianças podem ter o maior número de doces. Analise o código abaixo para o melhor, pior caso e caso médio. Faça a analise de complexidade de espaço também.

#     def kids_with_candies(candies, extra_candies):
#         # parece que a solução percorre o array somente uma vez,
#         # porém isto é feito duas vezes, uma no `max` e outra para
#         # preencher a resposta
#         max_candies = max(candies)
#         return [candy + extra_candies >= max_candies for candy in candies]


#     saída: [True, True, True, False, True]
#     print(kids_with_candies([2, 3, 5, 1, 3], 3))


# Complexidade => O(2n), simplificado para O(n)
# Espaço => O(n)

# Exercício 1: Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).


def count_even(n):
    answer = 0
    helper = 1

    while helper <= n:
        if helper % 2 == 0:
            answer += 1
        helper += 1
    
    return answer


# Exercício 2: Transforme o algoritmo criado acima em recursivo.


def count_even_recursive(n):
    if n == 1:
        return 0
    
    is_even = n % 2 == 0

    return is_even + count_even_recursive(n - 1)


# Exercício 3: Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.


def find_biggest_number_recursive(numbers, index=0, value=0):
    if index == len(numbers):
        return value
    biggest = numbers[index] if numbers[index] > value else value
    return find_biggest_number_recursive(numbers=numbers, index=index+1, value=biggest)


# Exercício 4: Escreva um algoritmo recursivo para encontrar o máximo divisor comum ( mdc ) de dois inteiros.


def mdc(a, b):
    if b == 0:
        return a
    return mdc(b, a % b)


# Exercício 5: Escreva um algoritmo recursivo que identifica se um número é primo.


def temdivisor(n, i, j):
    if i > j:
        return False
    elif n % i == 0:
        return True
    else:
        return temdivisor(n,i + 1,j)


def primo(n):
    return n > 1 and not(temdivisor(n, 2, n - 1))

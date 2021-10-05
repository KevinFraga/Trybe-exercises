# Exercício 1: Escreva um programa que retorne uma lista com os valores numéricos de 1 a N, mas com as seguintes exceções :
#     Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
#     Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
#     Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número';
#     Ex: 3 -> [1, 2, "Fizz"] .

def fizz_buzz(number):
    list = []
    helper = 1
    while helper <= number:
        if helper % 3 == 0 and helper % 5 == 0:
            list.append('FizzBuzz')
        elif helper % 5 == 0:
            list.append('Buzz')
        elif helper % 3 == 0:
            list.append('Fizz')
        else:
            list.append(helper)
        helper += 1
    return list

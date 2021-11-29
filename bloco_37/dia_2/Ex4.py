# Exercício 4 Dado dois arrays de números inteiros que representam instantes de entrada e saídas em uma biblioteca e um número que represente um instante a ser buscado. Retorne quantas pessoas estudantes estão na biblioteca naquele instante. Considere que todo estudante que entrou, saiu da biblioteca.
#     entradas = [1, 2, 3]
#     saídas = [3, 2, 7]
#     instante_buscado = 4
#     resultado: 1
#     O estudante 1 entrou no instante 1 e saiu no 3, já o segundo entrou
#     e saiu no 2 e o último foi único a estar presente no instante 4.


def students_in_instant(arrivals, departures, time_instant):
    answer = 0
    size = len(arrivals)
    for index in range(size):
        if arrivals[index] < time_instant < departures[index]:
            answer += 1
    return answer


# ou de uma maneira mais pythonica
def students_in_instant(arrivals, departures, time_instant):
    return sum(
        arrival < time_instant < departure
        for arrival, departure in zip(arrivals, departures)
    )

# Exercício 5 Converta o algoritmo recursivo de busca binária em iterativo.


def binary_search(array, value):

    low_index = 0
    high_index = len(array) - 1

    while high_index >= low_index:

        middle_index = (high_index + low_index) // 2
        if array[middle_index] == value:
            return middle_index
        elif array[middle_index] > value:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1

    raise ValueError(f"{value} is not in list")


array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
target = 10

print(binary_search(array, target))

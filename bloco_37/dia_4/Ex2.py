# Exercício 2 - Substring
#   Dada uma string , ache o tamanho da maior substring que não tenha caracteres repetidos. Complexidade de tempo limite aceitável: O(n^2) .
#     str = "serdevemuitolegalmasehprecisoestudarbastante"


def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest

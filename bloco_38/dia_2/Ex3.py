# Exercício 3: Desafio do Palíndromo - Uma palavra é um palíndromo se a sequência de letras que a forma é a mesma, quer seja lida da esquerda para a direita ou vice-versa.
# Crie um algoritimo que, ao receber uma sequência de caracteres, indique se ela é ou não um palíndromo. Para este exercício iremos considerar todas os caracteres como minúsculos e desconsiderar espaços, pontuação e caracteres especiais.


from Ex1 import Deque


def isPalindromo(terms):
    deque = Deque()

    for character in terms:
        if character.isalpha():
            deque.push_back(character.lower())

    while len(deque) > 1:
        front_item = deque.pop_front()
        back_item = deque.pop_back()

        if front_item != back_item:
            return False
    return True

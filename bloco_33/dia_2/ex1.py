# Exercício 1: Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.

name = input("Qual seu nome?")

while len(name):
    print(name)
    name = name[:-1]

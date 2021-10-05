# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"] , o retorno deve ser "Fernanda" .

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00. Crie uma função que retorne dois valores em uma tupla contendo a quantidade de latas de tinta a serem compradas e o preço total a partir do tamanho de uma parede(em m²).

# Exercício 6: Crie uma função que receba os três lado de um triângulo e informe qual o tipo de triângulo formado ou "não é triangulo" , caso não seja possível formar um triângulo.
# Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que o terceiro;
# Triângulo Equilátero: três lados iguais;
# Triângulo Isósceles: quaisquer dois lados iguais;
# Triângulo Escaleno: três lados diferentes.

def biggest_num(a, b):
    if a > b:
        return a
    else:
        return b


def arithmetic_average(list):
    ans = 0
    for num in list:
        ans += num
    return ans / len(list)


def star_square(n):
    helper = 0
    while (helper < n):
        print(n * "*")
        helper += 1


def longest_name(names):
    ans = names[0]
    for name in names:
        if len(name) > len(ans):
            ans = name
    return ans


def paint_price(area):
    liters_paint = area / 3
    cans_paint = liters_paint // 18
    if liters_paint % 18:
        cans_paint += 1
    return cans_paint, cans_paint * 80


def triangle(a, b, c):
    valid = (
        a + b > c and
        b + c > a and
        a + c > b
    )
    if not valid:
        return "não é triangulo"
    elif a == b == c:
        return "Triângulo Equilátero"
    elif a == b or b == c or a == c:
        return "Triângulo Isósceles"
    else:
        return "Triângulo Escaleno"


print(biggest_num(7, 4))
print(arithmetic_average([4, 4, 4, 4]))
star_square(5)
print(longest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
print(paint_price(120))
print(triangle(3, 4, 5))

# Exercício 1: Em um contexto de orientação a objetos, como podemos definir o que são mensagens e qual a sua importância?

# Mensagens são a forma padronizada de comunicação entre as entidades


# Exercício 2: Para exercitar nossa capacidade de abstração, vamos modelar algumas partes de um software de geometria. Como poderíamos modelar um objeto retângulo?
# 🐦 Para ajudar, segue o exemplo do quadrado. Vamos utilizar a seguinte notação para descrever nossas abstrações:

# Nome da abstração
# Quadrado

# atributos/estados
# - lado (tamanho)

# comportamentos
# - calcular area (lado * lado)
# - calcular perímetro (4 * lado)

class Quadrado:
    def __init__(self, side):
        self.side = side

    def calculate_area(self):
        self.area = self.side * self.side

    def calculate_perimeter(self):
        self.perimeter = self.side * 4


# Exercício 3: E como poderíamos definir um círculo? Qual seu nome, atributos e comportamentos?

class Circulo:
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        self.area = self.radius * self.radius * 3.14

    def calculate_perimeter(self):
        self.perimeter = self.radius * 2 * 3.14


# Exercício 4: Vamos mudar um pouco nosso contexto para um sistema de vendas de uma cafeteria. Como podemos abstrair um pedido composto por vários itens? Qual seu nome, atributos e comportamentos?

class Order:
    def __init__(self, client, selection, payment_method):
        self.client = client
        self.selection = selection
        self.payment_method = payment_method

    def calculate_bill(self):
        sum = 0
        for item in self.selection:
            sum += item.price
        self.bill = sum


# Exercício 5: Notou que os pilares da orientação a objetos começam a manifestar a medida que fizemos nossos exercícios de modelagem? Que tal agora então modelarmos uma televisão?
# 🐦 Pense em como encapsular comportamentos como o estado (ligado/desligado), ou a taxa de variação do volume, que muda de TV para TV etc.

class TV:
    def __init__(self, on_off, volume, channel):
        self.on_off = on_off
        self.volume = volume
        self.channel = channel

    def turn_on_off(self):
        self.on_off = not self.on_off

    def change_volume(self, amount):
        self.volume += amount

    def change_channel(self, new_channel):
        self.channel = new_channel

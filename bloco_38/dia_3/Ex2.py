# Exercício 2: Estenda a classe Stack , que escrevemos durante as explicações do conteúdo, para que ela suporte um limite de itens dentro da pilha. Se definirmos que a pilha deve ter o tamanho dois, ela não poderá ter três itens.


from Ex1 import Stack


class StackOverflow(Exception):
    pass


class LimitStack(Stack):
    def __init__(self, limit):
        super().__init__()
        self.limit = limit

    def push(self, value):
        if self.size() + 1 > self.limit:
            raise StackOverflow()
        super().push(value)

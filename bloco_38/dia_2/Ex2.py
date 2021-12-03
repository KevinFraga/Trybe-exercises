# Exercício 2: Limitando capacidade da Deque - Uma das características da Deque é a capacidade de balanceamento, enviando conflitos ao inserir ou remover itens em suas extremidades. Nossa classe Deque já possui essa característica 🚀, no entanto, para termos melhor controle sobre a quantidade de itens que podemos ter em nossa fila de dois fins, você deve limitar a capacidade da mesma, assim, a estrutura deverá respeitar as seguintes afirmações:
#     Realizar inserção em uma deque cheia causa overflow;
#     Realizar remoção em uma deque vazia causa underflow;
#     Utilize o construtor da classe para definir a capacidade da estrutura, exemplo Deque(10) . Retorne exceptions , ao contemplar os pontos acima, exemplo: raise Exception("Overflow") 


class Deque:
    FIRST_ELEMENT = 0

    def __init__(self, capacity=0):
        self._data = []
        self._capacity = capacity

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(str(x) for x in self._data) + ")"

    def is_empty(self):
        return not len(self)

    def is_full(self):
        return len(self) == self._capacity

    def push_front(self, value):
        if self.is_full():
            raise Exception("Overflow")
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        if self.is_full():
            raise Exception("Overflow")
        self._data.append(value)

    def pop_front(self):
        if self.is_empty():
            raise Exception("Underflow")
        return self._data.pop(self.FIRST_ELEMENT)

    def pop_back(self):
        if self.is_empty():
            raise Exception("Underflow")
        return self._data.pop()

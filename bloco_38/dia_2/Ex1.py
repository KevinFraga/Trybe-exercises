# Exercício 1: Aprimorando a classe Deque - Nossa classe Deque já atende as principais operações que esse TAD nos oferece 🚀 mas que tal melhorarmos? Para isso você deve adicionar os seguintes métodos:
#     a. clear(self) - Este método deve ser responsável por limpar a estrutura, eliminando todos os elementos contidos dentro da deque.
#     b. exists(self, value) - Este método deve ser usado para indicar se o valor do argumento existe em nossa estrutura. Retorne True se existir e False caso contrário.
#         Nota: Fique a vontade para escolher por qual extremidade será iniciada a consulta.
#     c. peek(self, position, order) - Este método deve ser usado para retornar o valor do conteúdo da posição indicada. A peculiaridade desse método é a ordem que essa consulta deve ser feita. Caso o campo order não seja informado, a consulta deve ser realizada através da extremidade da esquerda front , no entanto, caso o campo possua o valor desc , a consulta deve ser através da extremidade da direita back .


class Deque:
    FIRST_ELEMENT = 0

    def __init__(self):
        self._data = list()

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(map(lambda x: str(x), self._data)) + ")"

    def push_front(self, value):
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        self._data.append(value)

    def pop_front(self):
        if self._data:
            return self._data.pop(self.FIRST_ELEMENT)
        return None

    def pop_back(self):
        if self._data:
            return self._data.pop()
        return None

    def peek_front(self):
        if self._data:
            return self._data[self.FIRST_ELEMENT]
        return None

    def peek_back(self):
        if self._data:
            return self._data[len(self) - 1]
        return None

    def clear(self):
        while self._data:
            self.pop_back()
    
    def exists(self, value):
        return value in self._data

    def peek(self, position, order=None):
        if position < 0 or position > len(self) - 1:
            return None
        if not order:
            return self._data[position]
        return self._data[::-1][position]

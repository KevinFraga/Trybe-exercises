# Exercício 1: Aprimorando a classe Lista : nossa classe Lista atende as principais operações que essa TAD nos oferece, mas que tal melhorarmos? Para isso, você deve adicionar os seguintes métodos:
#   a. A operação clear nos permite remover todos os Nodes da lista;
#   b. A operação __get_node_at nos permite acessar o Node em qualquer posição da lista.
#     Após criada as operações anteriores, refatore os seguintes métodos para que utilizem a __get_node_at ante iterações:
#       insert_at ;
#       insert_last ;
#       remove_last ;
#       remove_at ;
#       get_element_at .

# Exercício 2: Nova busca : até o momento nossa estrutura consulta elementos através da posição. Nesta atividade será necessário criar uma função chamada def index_of(self, value) , onde ela será responsável por consultar na lista a existência do valor informado e retornar a posição da primeira ocorrência. Caso o valor não exista, considere retornar -1 . Esta função deve respeitar a complexidade O(n) .

# Exercício 3: remover duplicatas de uma LinkedList , atividade extraída e adaptada do LeetCode . Nesta atividade será necessário implementar um algoritmo que receba uma LinkedList como argumento e retorne uma nova lista sem elementos duplicados. Esta função deve respeitar a complexidade O(n) .
#     Exemplo:
#       # input: 1 -> 1 -> 2
#       # saída: 1 -> 2
#       # input: 1 -> 1 -> 2 -> 3 -> 3
#       # saída: 1 -> 2 -> 3

class Node:
    def __init__(self, value):
        self.value = value  # 🎲 Dado a ser armazenado
        self.next = None  # 👉 Forma de apontar para outro nó

    def __str__(self):
        return f"Node(value={self.value}, next={self.next})"


class LinkedList:

    def __init__(self):
        self.head_value = None
        self.__length = 0

    def __str__(self):
        return f"LinkedList(len={self.__length}, value={self.head_value})"

    def __len__(self):
        return self.__length

    def insert_first(self, value):
        first_value = Node(value)
        first_value.next = self.head_value
        self.head_value = first_value
        self.__length += 1

    def insert_last(self, value):
        if self.is_empty():
            return self.insert_first(value)

        new_last_value = Node(value)
        actual_last_value = self.__get_node_at(len(self) - 1)
        actual_last_value.next = new_last_value
        self.__length += 1

    def insert_at(self, value, position):
        if position < 1:
            return self.insert_first(value)
        if position >= len(self):
            return self.insert_last(value)
        current_value = self.__get_node_at(position - 1)
        next_value = Node(value)
        next_value.next = current_value.next
        current_value.next = next_value
        self.__length += 1

    def remove_first(self):
        value_to_be_removed = self.head_value
        if value_to_be_removed:
            self.head_value = self.head_value.next
            value_to_be_removed.next = None
            self.__length -= 1
        return value_to_be_removed

    def remove_last(self):
        if len(self) <= 1:
            return self.remove_first()

        previous_to_be_removed = self.__get_node_at(len(self) - 2)
        value_to_be_removed = previous_to_be_removed.next

        previous_to_be_removed.next = None
        self.__length -= 1
        return value_to_be_removed

    def remove_at(self, position):
        if position < 1:
            return self.remove_first()
        if position >= len(self):
            return self.remove_last()

        previous_to_be_removed = self.__get_node_at(position - 1)

        value_to_be_removed = previous_to_be_removed.next
        previous_to_be_removed.next = value_to_be_removed.next
        value_to_be_removed.next = None
        self.__length -= 1

        return value_to_be_removed

    def get_element_at(self, position):
        value_returned = None
        value_to_be_returned = self.__get_node_at(position)
        if value_to_be_returned:
            value_returned = Node(value_to_be_returned.value)
        return value_returned

    def is_empty(self):
        return not self.__length

    def clear(self):
      while not self.is_empty():
          self.remove_first()

    def __get_node_at(self, position):
      value_to_be_returned = self.head_value
      if value_to_be_returned:
          while position > 0 and value_to_be_returned.next:
              value_to_be_returned = value_to_be_returned.next
              position -= 1
      return value_to_be_returned

    def index_of(self, value):
        position = 1
        current_value = self.head_value
        while current_value:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1

    def delete_duplicates(self):
        list_with_unique_elements = self()

        while self:
            current_node = self.remove_first()
            if list_with_unique_elements.index_of(current_node.value) == -1:
                list_with_unique_elements.insert_last(current_node.value)

        return list_with_unique_elements

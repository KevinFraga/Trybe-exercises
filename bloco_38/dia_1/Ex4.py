# Exercício 4 : Remover duplicatas de uma DoublyLinkedList , atividade extraída e adaptada do LeetCode. Nesta atividade será necessário implementar um algoritmo que receba uma DoublyLinkedList como argumento e retorne uma nova lista, sem elementos que possuem mais de uma ocorrência.
#     # input: 1 <-> 1 <-> 2
#     # saída: 2
#     # input: 1 <-> 1 <-> 2 <-> 3 <-> 3
#     # saída: 2
#     # input: 1 <-> 2 <-> 3 <-> 3
#     # saída: 1 <-> 2


class DoublyLinkedList:
    # ...
    def index_of(self, value):
        position = 1
        current_value = self.head.next
        while current_value != self.tail:
            if current_value.value == value:
                return position
            current_value = current_value.next
            position += 1
        return -1


def delete_duplicates(linkedList):
    list_with_unique_elements = DoublyLinkedList()

    while linkedList:
        current_node = linkedList.remove_first()
        if linkedList.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements

# Exercício 4: Dada a função que faz a resolução de expressões pós fixas, adicione as operações de subtração e divisão. Considere os exemplos abaixo para testar a sua alteração na função.


from Ex1 import Stack


def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(' ')

    for token in tokens_list:
        if token == '+':
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '-':
            n2 = stack.pop()
            n1 = stack.pop()
            result = n1 - n2
            stack.push(result)
        elif token == '*':
            result = stack.pop() * stack.pop()
            stack.push(result)
        elif token == '/':
            n2 = stack.pop()
            n1 = stack.pop()
            result = n1 / n2
            stack.push(result)
        else:
            stack.push(int(token))

    return stack.pop()

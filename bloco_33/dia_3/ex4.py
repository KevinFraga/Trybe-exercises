# Exercício 4 Baseado no exercício anterior, escreva uma função que, dado uma lista de emails, deve retornar somente os emails válidos. Caso uma exceção ocorra, apenas a escreva na tela.
#     Exemplo: ["nome@dominio.com", "errad#@dominio.com", "outro@dominio.com"] -> ["nome@dominio.com", "outro@dominio.com"]

from ex3 import validate_email


def filter_valid_emails(list):
    valid = []
    for email in list:
        try:
            validate_email(email)
        except ValueError as err:
            print(err)
        else:
            valid.append(email)
    return valid

from ex1 import fizz_buzz


def test_fizzbuz_returns_list():
    'Retorna uma lista de números naturais até o parâmetro'
    assert fizz_buzz(2) == [1, 2]


def test_fizzbuz_3_fizz():
    'Para um número divisível por 3 retorna Fizz'
    assert fizz_buzz(3)[-1] is 'Fizz'


def test_fizzbuz_5_buzz():
    'Para um número divisível por 3 retorna Fizz'
    assert fizz_buzz(5)[-1] is 'Buzz'


def test_fizzbuz_15_fizzbuzz():
    'Para um número divisível por 3 e por 5 retorna FizzBuzz'
    assert fizz_buzz(15)[-1] is 'FizzBuzz'

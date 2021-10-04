import pytest
from ex2 import expression_to_number


def test_expression_ABC_222():
    assert expression_to_number('ABC') == '222'


def test_expression_DEF_333():
    assert expression_to_number('DEF') == '333'


def test_expression_GHI_444():
    assert expression_to_number('GHI') == '444'


def test_expression_JKL_555():
    assert expression_to_number('JKL') == '555'


def test_expression_MNO_666():
    assert expression_to_number('MNO') == '666'


def test_expression_PQRS_7777():
    assert expression_to_number('PQRS') == '7777'


def test_expression_TUV_888():
    assert expression_to_number('TUV') == '888'


def test_expression_WXYZ_9999():
    assert expression_to_number('WXYZ') == '9999'


def test_expression_01_01():
    assert expression_to_number('-01') == '-01'


def test_expression_empty_error():
    with pytest.raises(ValueError):
        expression_to_number('')

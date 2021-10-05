import pytest
from ex3 import validate_email


def test_validate_valid_email():
    assert validate_email('teste@teste.com') == None


def test_validate_unvalid_character():
    with pytest.raises(ValueError):
        validate_email('tes#te@/.com')


def test_validate_more_then_3_extensions():
    with pytest.raises(ValueError):
        validate_email('tes@te.com.org.gig.br')


def test_starts_not_letter():
    with pytest.raises(ValueError):
        validate_email('@t^^t@.com')

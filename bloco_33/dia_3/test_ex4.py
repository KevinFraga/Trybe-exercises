from ex4 import filter_valid_emails


def test_empty():
    assert filter_valid_emails([]) == []


def test_valid():
    valid_emails = ['test@tes.com', 'teste@teste.com']
    assert filter_valid_emails(valid_emails) == valid_emails


def test_invalid():
    invalid = ['t#t@g.com']
    assert filter_valid_emails(invalid) == []


def test_valid_invalid():
    emails = ['test@tes.com', 'teste@teste.com', 't#t@g.com']
    valid_emails = ['test@tes.com', 'teste@teste.com']
    assert filter_valid_emails(emails) == valid_emails

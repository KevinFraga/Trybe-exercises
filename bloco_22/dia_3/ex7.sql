-- Escreva uma query SQL para alterar na tabela localtions o nome da coluna street_address para address , mantendo o mesmo tipo e tamanho de dados.

ALTER TABLE hr.locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40);

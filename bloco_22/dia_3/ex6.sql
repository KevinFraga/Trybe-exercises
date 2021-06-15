/* Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o
 na coluna postal_code .
 Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como
 já foi feito em lições anteriores.
 Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo. */
 
 CREATE INDEX ind ON sakila.address(postal_code);
 
 DROP INDEX ind ON sakila.address;
 
 -- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
-- com index 0.35
-- sem index 61.80

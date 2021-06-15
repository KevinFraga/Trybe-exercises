/* Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), 
adicionando-o na coluna name . Após ter adicionado o índice,
 mensure o custo da query utilizando o execution plan , como já foi feito em lições anteriores.
 Após ter criado e mensurado o custo da query, exclua o índice e mensure novamente esse custo. */
 
 CREATE FULLTEXT INDEX ftindex ON sakila.category(name);
 
 -- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');
-- 0.35

DROP INDEX ftindex ON sakila.category;

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';
-- 1.85

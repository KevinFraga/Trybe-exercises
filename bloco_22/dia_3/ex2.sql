/* Crie uma view chamada film_info utilizando as tabelas actor , 
film_actor e film do banco de dados sakila . Sua view deve exibir o actor_id , 
o nome completo do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. 
Os resultados devem ser ordenados pelos nomes de atores e atrizes. Use a imagem a seguir como referência. */

USE sakila;

CREATE VIEW film_info AS
  SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
  FROM film_actor fa
    INNER JOIN actor a ON fa.actor_id = a.actor_id
    INNER JOIN film f ON fa.film_id = f.film_id
  ORDER BY actor, f.title;
  
  SELECT * FROM film_info;

/* Crie uma view chamada movies_languages , usando as tabelas film e language do banco de dados sakila .
 Sua view deve exibir o título do filme , o id do idioma e o idioma do filme , como na imagem a seguir. */
 
 USE sakila;
 
 CREATE VIEW movies_languages AS
   SELECT f.title, l.language_id, l.name
   FROM film f INNER JOIN language l ON f.language_id = l.language_id
   ORDER BY f.title;
   
   SELECT * FROM movies_languages;
 
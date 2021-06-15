/* Crie uma view chamada address_info que faça uso das tabelas address e city do banco de dados sakila .
 Sua view deve exibir o address_id , o address , o district , o city_id e a city .
 Os resultados devem ser ordenados pelo nome das cidades. Use a imagem abaixo como referência. */
 
 USE sakila;
 
 CREATE VIEW address_info AS
   SELECT a.address_id, a.address, a.district, c.city_id, c.city
   FROM address a INNER JOIN city c ON a.city_id = c.city_id
   ORDER BY c.city;
   
   SELECT * FROM address_info;
 
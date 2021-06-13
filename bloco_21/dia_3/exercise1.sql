-- Exercício 1: Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , informando o movie_id do filme que acaba de ser inserido na tabela movies , a executed_action como 'INSERT' e a log_date como a data atual.
USE BeeMovies;
DELIMITER $$

CREATE TRIGGER set_realease_year
	BEFORE INSERT ON movies FOR EACH ROW
BEGIN
	SET NEW.release_year = YEAR(NOW());
END $$

CREATE TRIGGER new_movie_log
	AFTER INSERT ON movies FOR EACH ROW
BEGIN
	INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES (NEW.movie_id, 'INSERT', DATE(NOW()));
END $$

DELIMITER ;

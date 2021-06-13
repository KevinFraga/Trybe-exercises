-- Exercício 1: Utilizando o INNER JOIN , encontre as vendas nacionais ( domestic_sales ) e internacionais ( internationa_sales ) de cada filme.
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id;
-- Exercício 2: Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais ( internationa_sales ) do que vendas nacionais ( domestic_sales ).
SELECT 
    m.title, b.domestic_sales, b.international_sales
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
    b.international_sales > b.domestic_sales;
-- Exercício 3: Utilizando o INNER JOIN , faça uma busca que retorne os filmes e sua avaliação ( rating ) em ordem decrescente.
SELECT 
    m.title, b.rating
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
ORDER BY b.rating DESC;
-- Exercício 4: Utilizando o LEFT JOIN , faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    t.name, t.location, m.title
FROM
    Pixar.Theater AS t
        LEFT JOIN
    Pixar.Movies AS m ON t.id = m.theater_id
ORDER BY t.name ASC;
-- Exercício 5: Utilizando o RIGHT JOIN , faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    m.title,
    m.director,
    m.year,
    m.length_minutes,
    t.name,
    t.location
FROM
    Pixar.Theater AS t
        RIGHT JOIN
    Pixar.Movies AS m ON t.id = m.theater_id
ORDER BY t.name ASC;
-- Exercício 6: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem os títulos dos filmes que possuem avaliação maior que 7.5.
SELECT 
    (SELECT 
            title
        FROM
            Pixar.Movies
        WHERE
            id = Pixar.BoxOffice.movie_id) AS title,
    rating
FROM
    Pixar.BoxOffice
WHERE
    rating > 7.5;

SELECT 
    m.title, b.rating
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
    b.rating > 7.5;
-- Exercício 7: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem as avaliações dos filmes lançados depois de 2009.
SELECT 
    title,
    (SELECT 
            rating
        FROM
            Pixar.BoxOffice
        WHERE
            movie_id = Pixar.Movies.id) AS rating,
    year
FROM
    Pixar.Movies
WHERE
    year > 2009;

SELECT 
    m.title, b.rating, m.year
FROM
    Pixar.Movies AS m
        INNER JOIN
    Pixar.BoxOffice AS b ON m.id = b.movie_id
WHERE
    m.year > 2009;
-- Exercício 8: Utilizando o EXISTS , selecione o nome e localização dos cinemas que possuem filmes em cartaz.
SELECT 
    name, location
FROM
    Pixar.Theater AS t
WHERE
    EXISTS( SELECT 
            id
        FROM
            Pixar.Movies
        WHERE
            t.id = theater_id);
-- Exercício 9: Utilizando o EXISTS , selecione o nome e localização dos cinemas que não possuem filmes em cartaz.
SELECT 
    name, location
FROM
    Pixar.Theater AS t
WHERE
    NOT EXISTS( SELECT 
            id
        FROM
            Pixar.Movies
        WHERE
            t.id = theater_id);


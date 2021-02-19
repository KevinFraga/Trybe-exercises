const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name));
};

/*
O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. 
Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.
*/

describe('Testing github api for repo names', () => {
  const api = 'https://api.github.com/orgs/tryber/repos';
  test('Checking for sd-01-week4-5-project-todo-list', () => {
    return getRepos(api).then((answer) =>
      expect(answer).toContain('sd-01-week4-5-project-todo-list')
    );
  });
  test('Checking for sd-01-week4-5-project-meme-generator', () => {
    return getRepos(api).then((answer) =>
      expect(answer).toContain('sd-01-week4-5-project-meme-generator')
    );
  });
});

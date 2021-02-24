import logo from './logo.svg';
import './App.css';

/*
Crie um novo projeto utilizando npx create-react-app nome-app e acesse a pasta nome-app
Crie uma lista de tarefas simples seguindo os passos abaixo:
insira a função a seguir acima do seu App :
agora, chame a função dentro do seu componente App (não se esqueça da sintaxe JSX!). Insira o valor que você quiser, salve a página e inicie-a rodando o comando npm start .
por fim, crie uma array de compromissos e use a função map para que cada item do array apareça, como um item de lista, no seu componente App .
*/

const tasks = ['aprender react', 'fazer os exercícios atrasados', 'gabaritar o projeto'];

const task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div className="App">
      <ul>
        {tasks.map(chore => task(chore))}
      </ul>
    </div>
  );
}

export default App;

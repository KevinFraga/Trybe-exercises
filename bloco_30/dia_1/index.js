/**
 * Esse módulo, basicamente, controla um catálogo de plantas para um instituto de ciências.
 * Esse código precisa ser adaptado para o padrão SOLID para transformá-lo em uma API, e é isso que você irá fazer.
 *   Foque em dois princípios: Single Responsibility e Dependency Inversion , esses são os mais importantes.
 * 
 * Crie um arquivo separado para as funções, um plants.js (elas virarão nossos controllers).
 * Remova as interações com localStorage e manipule apenas a variável defaultPlants .
 * 
 * Precisamos ter os endpoints:
 *    GET /plants : retorna todas as plantas;
 *    GET /plant/:id : retorna uma planta com o id;
 *    DELETE /plant/:id : deleta uma planta com o id;
 *    POST /plant/:id : sobrescreve a planta com id;
 *    POST /plant : cria uma planta nova;
 *    GET /sunny/:id : retorna uma planta que precisa de sol com o id.
 * 
 */

const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./plants');

const app = express();

app.use(bodyParser.json());

app.get('/plants', controllers.getPlants);

app.get('/plant/:id', controllers.getPlantById);

app.delete('/plant/:id', controllers.deletePlant);

app.post('/plant/:id', controllers.editPlant);

app.post('/plant', controllers.addPlant);

app.get('/sunny/:id', controllers.getSunny);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Rodando na porta ${PORT}`);
});
/*
const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const waterFrequency = needsSun ? size *  0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) *  1.33 + (origin === 'Brazil' ? 8 : 7)
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency,
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  localStorage.setItem("plants", plants);
};

const getPlants = () => {
  const plants = JSON.parse(localStorage.getItem("plants"));
  return plants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== id);
  localStorage.setItem("plants", JSON.stringify(newPlants));
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem("plants", JSON.stringify(filteredPlants));
  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  createdPlants++;
  localStorage.setItem("createdPlants", String(createdPlants));
  localStorage.setItem("plants", JSON.stringify(defaultPlants));
  return defaultPlants;
};
*/
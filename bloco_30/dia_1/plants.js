let defaultPlants = [
  {
    id: 1,
    breed: 'Bromelia',
    needsSun: false,
    origin: 'Argentina',
    size: 102,
    specialCare: {
      waterFrequency: 3,
    },
  },
  {
    id: 2,
    breed: 'Orquidea',
    size: 99,
    needsSun: false,
    origin: 'Brazil',
  },
];

const calculateWaterFrequency = (needsSun, size, origin) => {
  return needsSun
    ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
};

const makeNewPlant = ({ breed, needsSun, size, origin, specialCare }) => {
  const waterFrequency = calculateWaterFrequency(
    /^true$/.test(needsSun),
    parseInt(size),
    origin
  );
  const plant = {
    breed,
    needsSun: /^true$/.test(needsSun),
    size: parseInt(size),
    origin,
    specialCare: {
      waterFrequency: parseFloat(waterFrequency.toFixed(2)),
      ...specialCare,
    },
  };
  return plant;
};

const findPlantById = (plantId) => {
  return defaultPlants.find(({ id }) => id === parseInt(plantId));
};

const getPlants = (_req, res) => {
  res.status(200).send(defaultPlants);
};

const getPlantById = (req, res) => {
  const plant = findPlantById(req.params.id);
  if (!plant) return res.status(404).json({ message: 'not found' });
  res.status(200).json(plant);
};

const deletePlant = (req, res) => {
  const plant = findPlantById(req.params.id);
  if (!plant) return res.status(404).json({ message: 'not found' });
  defaultPlants = defaultPlants.filter(
    ({ id }) => id !== parseInt(req.params.id)
  );
  res.status(200).json(plant);
};

const editPlant = (req, res) => {
  const plant = findPlantById(req.params.id);
  if (!plant) return res.status(404).json({ message: 'not found' });
  const newPlant = makeNewPlant(req.body);
  newPlant.id = parseInt(req.params.id);
  defaultPlants = defaultPlants.map((plant) => {
    if (plant.id === parseInt(req.params.id)) return newPlant;
    return plant;
  });
  res.status(200).json(newPlant);
};

const addPlant = (req, res) => {
  const newPlant = makeNewPlant(req.body);
  newPlant.id = defaultPlants.length + 1;
  defaultPlants.push(newPlant);
  res.status(200).json(newPlant);
};

const getSunny = (req, res) => {
  const plant = findPlantById(req.params.id);
  if (!plant || plant.needsSun === false) return res.status(404).json({ message: 'not found' });
  res.status(200).json(plant);
};

module.exports = {
  getPlants,
  getPlantById,
  deletePlant,
  editPlant,
  addPlant,
  getSunny,
};

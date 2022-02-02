function animalCount(deep) {
  if (deep <= 10) {
    totalAnimal = deep * 10;
  } else if (deep <= 20) {
    const secondZoneDeep = deep - 10;
    const totalAnimal = secondZoneDeep * 50 + 100;
    return totalAnimal;
  } else {
    const thirdZoneDeep = deep - 20;
    const totalAnimal = thirdZoneDeep * 100 + 600;
    return totalAnimal;
  }
}

let result = animalCount(13);
console.log(result);

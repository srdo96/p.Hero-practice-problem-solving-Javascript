function animalCount(deep) {
  let totalAnimal = 0;
  if (deep <= 10) {
    totalAnimal = deep * 10;
  } else if (deep > 10 && deep <= 20) {
    const secondZoneDeep = deep - 10;
    totalAnimal = secondZoneDeep * 50 + 100;
  } else {
    const thirdZoneDeep = deep - 20;
    totalAnimal = thirdZoneDeep * 100 + 600;
  }
  return totalAnimal;
}

let result = animalCount(15);
console.log(result);

export default function getAnimals(animals){
  return animals.map(animal => {
    return {
      petName: animal.Animal_Name,
      animal: animal.animal_type,
      breed: animal.Animal_Breed,
      gender: animal.Animal_Gender,
      color: animal.Animal_Color,
      address: animal.Address
    };
  });
}

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const listRef = document.querySelector('#ingredients');

ingredients.forEach(item => {
      const listItemRef = document.createElement('li');
      listItemRef.textContent = item;
      return listRef.append(listItemRef)
})
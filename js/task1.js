const categoriesRefs = document.querySelectorAll('#categories');
const itemListRefs = document.querySelectorAll('.item')
const titleRefs = document.querySelector('h2')

console.log(`В списке ${itemListRefs.length} категории.`);


itemListRefs.forEach(item =>
      console.log(`
      Категория : ${titleRefs.textContent} 
      Количество элементов : ${item.querySelectorAll('li').length} 
`))
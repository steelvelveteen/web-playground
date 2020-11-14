var article = document.querySelector('#electric-cars');

console.log(article.dataset.columns);
console.log(article.dataset.indexNumber);
console.log(article.dataset.parent);
article.dataset.columns = 15;
console.log(article.dataset.columns);


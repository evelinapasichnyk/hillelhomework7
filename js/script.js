//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

const array = [1, 2, 3, 4, 5, 6, 7];


function removeElement (array, item) {
   for (let i of array) {
      if( i !== item)
            console.log(i)
   }
   return array;
}

removeElement(array, 5);




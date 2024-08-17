const array = [1, 2, 3];
const newArray = array.map((element, index, arr) => {
  console.log(element); // current element
  console.log(index); // current index
  console.log(arr); // original array
  return element * 2;
});

const names = ["JP Morgan", "Evening CEO"];
//
// ['JM','EC']
const initial = names.map((names) => {
  const [firstName, lastName] = names.split(" ");
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
});
console.log(initial);

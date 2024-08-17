const dateStrings = ["2024-08-17", "2024-12-31", "2024-04-24"];
formattedDate = dateStrings.map((dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
});
console.log(formattedDate);

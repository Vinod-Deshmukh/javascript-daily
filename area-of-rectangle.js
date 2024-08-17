const rectangle = [
  { height: 5, width: 5 },
  { height: 2, width: 3 },
  { height: 7, width: 9 },
];

const areaOfRectangle = rectangle.map((area) => area.height * area.width);
console.log(areaOfRectangle);

const data = [
  { type: "Foo", year: 1995 },
  { type: "Bar", year: 1993 },
  { type: "Foobar", year: 2020 },
];

const newArr = data.sort((a, b) =>
  a.year > b.year ? 1 : b.year > a.year ? -1 : 0
);

console.log(newArr);

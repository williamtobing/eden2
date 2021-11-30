const data = [
  { type: "Foo", year: 1995 },
  { type: "Bar", year: 1993 },
  { type: "Foobar", year: 2020 },
];

const sortASC = (arr) => {
  return arr.sort((a, b) => (a.year > b.year ? 1 : b.year > a.year ? -1 : 0));
};

const newArr = sortASC(data);

console.log(newArr);

const obj = {
  name: "111",
  person: {
    name: "222",
    age: 18,
  },
};

const changeValue = (obj1) => {
  obj1.name = 222;

  console.log(obj);

  console.log(obj1 === obj);
};

changeValue(obj);

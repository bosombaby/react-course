// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  const data = await res.json();
  console.log(data);
}
getData();
console.log(222);

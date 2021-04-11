const todo = document.getElementById("todo");
const user = document.querySelector(".user");
const id = document.querySelector(".id");
const title = document.querySelector(".title");
const completed = document.querySelector(".completed");
const btn = document.querySelector(".btn");

const refreshPage = btn.addEventListener("click", () => {
  document.location.reload();
});

const getUserRandom = () => {
  const todosRandom = (max) => {
    return Math.floor(Math.random() * max + 1);
  };

  todoRandom = todosRandom(200);
  console.log(todoRandom);
  fetch(`https://jsonplaceholder.typicode.com/todos/${todoRandom}`)
    .then((res) => res.json())
    .then((data) => {
      user.innerHTML = data.userId;
      id.innerHTML = data.id;
      title.innerHTML = data.title;
      completed.innerHTML = data.completed;
    });
};

getUserRandom();

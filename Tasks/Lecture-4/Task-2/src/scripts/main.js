export const getData = async(url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error)
  }

};

const getCompletedTasks = async () => {
  const userList = await getData('https://jsonplaceholder.typicode.com/users');
  const todoList = await getData('https://jsonplaceholder.typicode.com/todos');

  return userList.map((user) => {
    const userCompletedTodo = todoList.filter(
      (todo) => todo.userId === user.id && todo.completed
    );

    user.todo = userCompletedTodo;

    return user;  
  });
};
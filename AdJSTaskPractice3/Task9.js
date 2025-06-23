const tasks=[
    {taskName:'Task1',dueDate:'2023-06-01'},
    {taskName:'Task2',dueDate:'2024-05-01'},
    {taskName:'Task3',dueDate:'2024-01-01'}
];
let result=tasks.find(tasks =>tasks.taskName=== 'Task1');
console.log(result)
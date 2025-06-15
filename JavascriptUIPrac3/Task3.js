
const jsonString = '{"name": "Abinaya", "email": "abinayamp.2003@gmail.com", "skills": ["HTML", "CSS", "JavaScript"]}';
const parsedObject = JSON.parse(jsonString);
console.log("Name:", parsedObject.name);
console.log("Email:", parsedObject.email);
console.log("Skills:", parsedObject.skills);
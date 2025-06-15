const person = {
  firstName: "Abinaya",
  lastName: "M.P.",
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
console.log(person.getFullName());
const books=[
    {title:'1984',author:'George Orwell'},
    {title:'To Kill a Mockingbird',author:'Harper Lee'},
    {title:'The Great Gatsby',author:'F. Scott Fitzgerald'}
];
let result=books.find(books =>books.title ==='1984');
console.log(result)
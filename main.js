const users = [
  {
    first_name: 'Mike',
    last_name: 'Sheridan',
    age: 30
  },
  {
    first_name: 'Tim',
    last_name: 'Lee',
    age: 45
  },
  {
    first_name: 'John',
    last_name: 'Carte',
    age: 25
  }
];
// Using Map method
// Output:["Sheridan", "Lee", "Carte"]

let result=users.map(function(e){
	return  " "+e.last_name;
	
})
document.write(result)










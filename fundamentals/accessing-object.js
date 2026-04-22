const user = {
  name: "Ade",
  age: 25,
  city: "Lagos",
  email: "ade@example.com",
  isAdmin: true,
  address: {
    street: "12, Bode Thomas Street",
    city: "Lagossss",
  },
  skills: ["JavaScript", "React", "Node.js"],

  //methods
  greet(){
    return `Hi, I am ${this.name}, and I am ${this.age} years`
  },
};

// object{
// key: value
// }

// const { name, age, city, email, isAdmin, address, skills } = user;

// const { street, city: addressCity } = address;

// console.log(name);
// console.log(age);
// console.log(city);

// console.log(addressCity)

// console.log(user.name)
// console.log(user.skills[0])
// console.log(user.address.street)
// console.log(user['email'])

// const copy = {...user}

// console.log(copy)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// const result = Object.entries(skills).forEach((skill) => console.log(`${skill[1]}s`))

// console.log(result)


// recurso ultilizado para objetos menos verbosos em javascript.
const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};

console.log(newUser(54, 'isabella', 'isabella@email.com')); 
// { id: 54, name: 'isabella', email: 'isabella@email.com' }

// essa forma de criação é menos verbosa é faz a mesma coisa.
const newUser2 = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};

console.log(newUser2(54, 'isabella', 'isabella@email.com')); 
// { id: 54, name: 'isabella', email: 'isabella@email.com' }

// altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});


console.log(getPosition(-19.8157, -43.9542));

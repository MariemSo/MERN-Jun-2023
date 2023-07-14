const express = require("express");
const app = express();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// req is short for request
// res is short for response
app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});

// ===========User APi=========
app.get("/api/users/new", (req, res) => {
  res.json( newFakeUser );
});

app.post("/api/users/new", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
      // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json( { status: "ok" } );
  });
  
// ===========Company API=========
  app.get("/api/companies/new", (req, res) => {
    res.json( newFakecompany );
  });
  
  app.post("/api/companies/new", (req, res) => {
      // req.body will contain the form data from Postman or from React
      console.log(req.body);
      // we can push it into the users array for now...
        // later on this will be inserted into a database
      users.push(req.body);
      // we always need to respond with something
      res.json( { status: "ok" } );
    });
    
// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require("@faker-js/faker");

// we can create a function to return a random / fake "Product"
const createProduct = () => {
  const newFake = {
    name: faker.commerce.productName(),
    price: "$" + faker.commerce.price(),
    department: faker.commerce.department(),
  };
  return newFake;
};
const newFakeProduct = createProduct();
console.log(newFakeProduct);

// we can create a function to return a random / fake "User"
const createUser = () => {
  const userFake = {
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number("+216 ## ### ###"),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    _id: faker.datatype.uuid(),
  };
  return userFake;
};
const newFakeUser = createUser();
console.log(newFakeUser);

// we can create a function to return a random / fake "User"
const createCompany = () => {
  const companyFake = {
    // name: faker.commerce.name(),
    _id: faker.string.uuid(),
    adress: {
      street: faker.location.street(),
      city: faker.location.city(),
      state: faker.location.state(),
      zipCode: faker.location.zipCode(),
      country: faker.location.country(),
    },
  };
  return companyFake;
};

const newFakecompany = createCompany();
console.log(newFakecompany);

/*
 * The output of the above console log will look like this
 * {
 *   name: 'Anime Figure',
 *   price: '$568.00
 *   department: 'Tools'
 * }
 */

const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);

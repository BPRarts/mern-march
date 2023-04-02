const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');



app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

console.log(faker.name.firstName());



const createUser = () => {
    return{
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        _id: faker.datatype.uuid(),
   }}

const createCompany = () =>{
    return{
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
          street: faker.address.streetAddress(),
          city: faker.address.cityName(),
          state: faker.address.state(),
          zipcode: faker.address.zipCode(),
          country: faker.address.country(),
    }}};




app.get('/user', (req,res) => {
       const newUser = createUser();
       res.json(newUser)
})


app.get('/company', (req,res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});



app.listen( port, () => console.log(`Listening on port: ${port}`) );



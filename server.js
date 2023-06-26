"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.use(express_1.default.json());
// Datos de los alumnos//
var StudentBD = [
    {
        id: "1",
        Name: "Desmon Child",
        age: "26",
        Cédula: "185634256",
        email: "desmondchildfake@gmail.com",
        address: "40 street # 18 20",
        phonenumber: "3154628978",
        civil: "Single",
        bloodtype: "O+",
    },
    {
        id: "2",
        Name: "Maria Costelo",
        age: "22",
        Cédula: "112546348",
        email: "dmariacost@gmail.com",
        address: "39 street # 15 40",
        phonenumber: "33205687496",
        civil: "Single",
        bloodtype: "A+",
    },
    {
        id: "3",
        Name: "Carl Marx",
        age: "25",
        Cédula: "110438596",
        email: "Marxrecs@gmail.com",
        address: "60 street # 20 20",
        phonenumber: "3124567895",
        civil: "Single",
        bloodtype: "A-",
    },
    {
        id: "4",
        Name: "Lina Arango",
        age: "27",
        Cédula: "225115456",
        email: "lindalina@gmail.com",
        address: "29 street # 15 40",
        phonenumber: "3145687896",
        civil: "Single",
        bloodtype: "O-",
    },
    {
        id: "5",
        Name: "Patrick Jean",
        age: "19",
        Cédula: "109012545",
        email: "Patrickart7@gmail.com",
        address: "21 street # 55 41",
        phonenumber: "3124521010",
        civil: "Single",
        bloodtype: "AB+",
    },
];
app.get('/Students', function (request, response) {
    response.send('Hellow World');
    response.json("level", "Basic,level", "Medium,level:Masterlevel:");
});
app.post('/Students', function (request, response) {
    StudentBD.push();
    response.send({ message: 'Enrollment successful' });
});
app.put('/Students/courses/:id', function (request, response) {
    response.send("Math,Science,Physical,Chemistry,Artistic");
    // Lógica para actualizar los detalles de un curso específico//
    // response.json({ message: 'Course updated successfully' });
});
app.delete('/Students', function (request, response) {
    response.send("deleted student");
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});

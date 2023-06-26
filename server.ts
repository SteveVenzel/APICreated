import express from 'express';
const app = express();
app.use(express.json());

// Datos de los alumnos//

interface Student {
    id: string;
    Name: string;
    age: string;
    Cédula: string;
    email: string;
    address: string
    phonenumber: string;
    civil: string;
    bloodtype: string;
}

var StudentBD: Student [] = [
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
    response.json(StudentBD);
});

app.get('/Students/:id', function (request, response) {
    const id = request.params.id;
    const result = StudentBD.filter(item => item.id === id)
    response.json(result);
});

app.post('/Students', function (request, response) {
    const body = request.body;
    StudentBD.push(body);
    response.send({ message: 'Enrollment successful' });
});
app.put('/Students/:id', function (request, response) {
    const id = request.params.id;
    const body = request.body;
    const studentIndex = StudentBD.findIndex(item => item.id === id);
    StudentBD[studentIndex] = body;
    response.send("Student added to class");
    // Lógica para actualizar los detalles de un curso específico//
    // response.json({ message: 'Course updated successfully' });
});
app.delete('/Students/:id', function (request, response) {
    const id = request.params.id;
    const result = StudentBD.filter(item => item.id != id);
    StudentBD = result;
    response.send("student deleted");
});


// Ejecutar el servidor//
app.listen(3000, function () {
console.log('Server is running on port 3000');
});
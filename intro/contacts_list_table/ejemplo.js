window.onload = (event) => {
};

const data = 
[
    {
        name: 'Keylor Soto Delgado',
        number: '84916815',
        address: ['keylorsotod@gmail.com', 'Betania-Mercedes', 'KeylexSD@github.com'],
        hobbies: [ 'Video Juegos, Salir con amigos']
    },
    {
        name: 'David Vargas Barrantes',
        number: '12345678',
        address: ['david@david.com', 'En una piña debajo del mar'],
        hobbies: [ 'Atrapar medusas']
    },
    {
        name: 'Milen Rodriguez Man',
        number: '88993344',
        address: ['mimimi@gmail.com', 'San Pedro, San José, Costa Rica'],
        hobbies: [ 'Lectura', 'crochet', 'cine', 'baile', 'pretilear', 'Expropien el transporte público']
    },
    {
        name: 'Elian Orteaga',
        number: '84677657',
        address: ['elian.ortega@ucr.ac.cr', 'Los Yoses'],
        hobbies: [ 'Yoga', 'Expropien el transporte público']
    },
    {
        name: 'Dylan Gabriel Tenorio Rojas',
        number: '85805171',
        address: ['dylantr2001@gmail.com', 'San Sebastián'],
        hobbies: [ 'Sufrir en UCR']
    },
    {
        name: 'Eithel Vega Robles',
        number: '60042272',
        address: ['eitheljose12@gmail.com', 'Alajuela'],
        hobbies: [ 'Jugar bola', 'Play', 'Me gustaría subir una montaña y comer pizza ahí ;)']
    },
    {
        name: 'Cristian Ortega Hurtado',
        number: '86305604',
        address: ['cristian.ortegahurtado@ucr.ac.cr', 'Barrio Chino'],
        hobbies: [ 'Gimnasio', 'Cocinar', 'Salir a comer', 'Tomar chill', 'Salidas en general (mientras menos pase en la casa mejor xd)', 'Jugar LOL en vacaciones']
    },
    {
        name: 'Jimena Gdur Vargas',
        number: '84284848',
        address: ['xime.gdur01@hotmail.com', 'La Unión Cartago'],
        hobbies: [ 'lectura']
    },
    {
        name: 'Erick Andres Chaves Robles',
        number: '88960574',
        address: ['andevcr@gmail.com', 'Coronado, SJ, CR'],
        hobbies: [ 'Escuchar música', 'Leer', 'mtg']
    },
    {
        name: 'Henry Gabriel Ledezma Vindas',
        number: '72000864',
        address: ['henrylzma.ucr@gmail.com', 'Rohrmoser'],
        hobbies: [ 'Fulbo', 'Cosplay', 'Jugar Zelda']
    },
    {
        name: 'Gianfranco Soto Palma',
        number: '72460061',
        address: ['gianf1612@gmail.com', 'Sabana'],
        hobbies: [ '>Video juegos', 'Hablar de video juegos con Eithel']
    },
]

function showList()
{
    const contacts = document.getElementById('Estudiantes');
    contacts.innerHTML = '';
  
    if(contacts) {
        data.forEach(element => {
            const li = document.createElement('li');
            const name = document.createElement('p');
            const number = document.createElement('p');
            const address = document.createElement('ul');
            const hobbies = document.createElement('ul');
         
            if (element.name) {
              name.innerHTML = element.name;
              li.append(name);
            }
         
            if (element.number) {
              number.innerHTML = element.number;
              li.append(number);
            }

            if(element.address.length > 0) {
                element.address.forEach(singleAddress => {
                    const liAddress = document.createElement('li');
                    liAddress.innerHTML = singleAddress;
                    address.append(liAddress);
                });
                li.append(address);
            }
         
            if (element.hobbies.length > 0) {
              element.hobbies.forEach(hobby => {
                const liHobby = document.createElement('li');
                liHobby.innerHTML = hobby;
                hobbies.append(liHobby);
              });
              li.append(hobbies);
            }
         
            contacts.append(li);
           });
    }else{
        console.log('Cannot find the element Estudiantes');
    }
};

function showTable()
{
    let contacts = document.getElementById('Estudiantes');
    contacts.innerHTML = '';

    if(contacts){
        //table Head
        const tableHead = document.createElement('tr');
        const nameHead = document.createElement('th');
        const numberHead = document.createElement('th');
        const addressHead = document.createElement('th');
        const hobbiesHead = document.createElement('th');

        nameHead.innerHTML = 'Nombre';
        nameHead.style.fontFamily = 'sans-serif';
        nameHead.style.fontSize = '2em';

        numberHead.innerHTML = 'Numero';
        numberHead.style.fontFamily = 'sans-serif';
        numberHead.style.fontSize = '2em';

        addressHead.innerHTML = 'Direcciones';
        addressHead.style.fontFamily = 'sans-serif';
        addressHead.style.fontSize = '2em';

        hobbiesHead.innerHTML = 'Hobbies';
        hobbiesHead.style.fontFamily = 'sans-serif';
        hobbiesHead.style.fontSize = '2em';

        tableHead.append(nameHead);
        tableHead.append(numberHead);
        tableHead.append(addressHead);
        tableHead.append(hobbiesHead);

        contacts.append(tableHead);

        //Table body
        data.forEach(element => {
            const tableRow = document.createElement('tr');
            const name = document.createElement('td');
            const number = document.createElement('td');
            const address = document.createElement('td');
            const hobbies = document.createElement('td');

            if (element.name)
            {
                name.innerHTML = element.name;
                name.style.fontFamily = 'sans-serif';
                tableRow.append(name);
            }

            if (element.number)
            {
                number.innerHTML = element.number;
                number.style.fontFamily = 'sans-serif';
                tableRow.append(number);
            }

            if (element.address.length > 0)
            {
                element.address.forEach(singleAddress => { 
                    let addressData = document.createElement('p');
                    addressData.innerHTML = singleAddress;
                    address.append(addressData);
                });
                tableRow.append(address);
            }

            if (element.hobbies)
            {
                element.hobbies.forEach(singleHobby => { 
                    let hobbyData = document.createElement('p');
                    hobbyData.innerHTML = singleHobby;
                    hobbies.append(hobbyData);
                });
                tableRow.append(hobbies);
            }

            contacts.append(tableRow);
        });
    }
    else
    {
        console.log('Cannot find the element Estudiantes');
    }
};
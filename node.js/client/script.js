
const urlAPI ='http://localhost:3000/api/users/'
let id = 1
let obj = {name:'francesca', lastname: 'verdi', email: 'fra@gmail.com', city: 'berlino'}
fetch (urlAPI).then(response => response.json()).then(json =>console.log(json))
fetch (urlAPI+id).then(response => response.json()).then(json =>console.log(json))
fetch(urlAPI, { 
    method: 'POST', 
    body: JSON.stringify(obj), 
    headers: {'Content-type': 'application/json'}
}).then(response => response.json())

fetch(urlAPI+id, {method: 'GET'}).then(response => response.json()).then(user => {
    user.name = 'Pippo';
    
    fetch(urlAPI+id, {
        method: 'PUT',
        body: JSON.stringify(user), 
        headers: {'Content-type': 'application/json'}
    })
})

//delete user

fetch(urlAPI+id,{ MEHTOD:'DELETE'}.then(response => response.json()).then(json => console.log(json))
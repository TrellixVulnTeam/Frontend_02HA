// import fetch from 'node-fetch'

let _data = {
    title: "teste de envio",
    body: "47 mariscos flamejantes noruegueses",
    userId: 5
}

fetch ('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: json.stringify( _data),
    headers: {
        'Content-Type' : 'application/json; charset=UTF-8'
    }
})

.then ( response => response.json())
.then ( json => console.log(json))
.catch( error => console.error(error))
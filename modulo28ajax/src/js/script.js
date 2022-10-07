
const url = 'https://api.github.com/users'
const main = document.getElementById('main')

function getUser(user) { 

    fetch (`${url}/${user}`)
    .then((response) => response.json())
    .then((data) => {
        main.innerHTML = `${data.name} possui ${data.public_repos} repositorios no GitHub como ${data.login}`
    })
    .catch((error) => console.error('Erro: ',error.massage || error))
}

const userInput = document.getElementById('username')
userInput.addEventListener('focusout', function (event){
    getUser(event.target.value)
})
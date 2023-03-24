document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoriosElement = document.querySelector('#repositorio');
    const seguidoresElement = document.querySelector('#seguidores');
    const seguindoElement = document.querySelector('#seguindo');
    const linkElements = document.querySelector('#link');

    fetch('https://api.github.com/users/GianniGaspari')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            seguidoresElement.innerText = json.followers;
            seguindoElement.innerText = json.following;
            repositorios.innerText = json.public_repos;
            linkElements.href = json.html_url;
        })
})
let search=document.querySelector('.searchbar');

document.querySelector('#search').addEventListener('click', () => {
    search.classList.toggle('active');
    favorites.classList.toggle('hidden');
    login.classList.remove('visible');
});

}


let favorite = document.querySelector('.favorites');
let search = document.querySelector('.search'); // Assuming this element exists
let login = document.querySelector('.login'); // Assuming this element exists

document.querySelector('#favorites').onclick = () => {
    favorite.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
    // Adding a console log to confirm the action
    console.log('Favorites toggled');
}



let loginButton = document.querySelector('.login-button');

document.querySelector('#login-btn').addEventListener('click', () => {
    loginButton.classList.toggle('visible');
    searchSection.classList.add('inactive');
    favoritesList.classList.remove('highlighted');
});

}


window.addEventListener('scroll', () => {
    search.classList.remove('active');
    favorite.classList.remove('active');
    login.classList.remove('active');
});

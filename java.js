let search=document.querySelector('.searchbar');

document.querySelector('#search').onclick = () => {
    search.classList.toggle('active');
    favorites.classList.remove('active');
    login.classList.remove('active');
}


let favorite=document.querySelector('.favorites');

document.querySelector('#favorite').onclick = () => {
    favorite.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
}


let login=document.querySelector('.login');

document.querySelector('#login').onclick = () => {
    login.classList.toggle('active');
    search.classList.remove('active');
    favorite.classList.remove('active');
}


window.onscroll = () => {
    search.classList.remove('active');
    favorite.classList.remove('active');
    login.classList.remove('active');
};

let search=document.querySelector('.searchbar');

document.querySelector('#search').addEventListener('click', () => {
    search.classList.toggle('active');
    favorites.classList.toggle('hidden');
    login.classList.remove('visible');
});

}


let favorite=document.querySelector('.favorites');

document.querySelector('#favorites').onclick = () => {
    favorites.classList.toggle('active');
    search.classList.remove('active');
    login.classList.remove('active');
}


let login=document.querySelector('.login');

document.querySelector('#login').addEventListener('click', () => {
    login.classList.toggle('show');
    search.classList.remove('active');
    favorites.classList.add('inactive');
});

}


window.addEventListener('scroll', () => {
    search.classList.remove('active');
    favorite.classList.remove('active');
    login.classList.remove('active');
});

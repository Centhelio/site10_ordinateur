const modaleBoutons = document.querySelectorAll('.btn');
const modale = document.querySelector('.modale');

for (let i = 0; i < modaleBoutons.length; i++) {

    modaleBoutons[i].addEventListener('click', openModale);

}

function openModale(e) {
    const bouton = e.currentTraget;

    e.preventDefault();

    modale.classList.add("visible");
    modale.addEventListener('click', closeModale);
}

function closeModale(event) {
    modale.classList.remove("visible");
}

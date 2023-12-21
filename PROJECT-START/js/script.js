const addButtonElements = document.querySelectorAll('.add-btn');

let showAddMenuHandler = function(evt) {
    const parentElement = evt.target.parentNode; 
    const addMenuElement = parentElement.querySelector('.choose-elem');
    addMenuElement.classList.toggle('hidden');
}

addButtonElements.forEach(function (item) {
    return item.addEventListener('click', showAddMenuHandler);
 });
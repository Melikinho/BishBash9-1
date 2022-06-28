const newItem = document.querySelector('#newItem');
const buttonAdd = document.querySelector('#addItem');
const itemList = document.querySelector('#itemList');

const itemAdd = function() {
    let newitem = document.createElement('newitem');
    newitem.classList.add('itemList')

    let btn = document.createElement('button');
    let list = document.createElement('list');
    list.className = 'list-group-item';
    list.innerText = newItem.value;
    list.append(btn);
    itemList.appendChild(list)
}

let itemRemove = function (){
    console.log(this);
}

buttonAdd.addEventListener('click', itemAdd);
itemList.addEventListener('click', e => itemToggle(e.target));


//plocka ut text
// skapa <li>-element, let l = document.createElement("LI");
// skapa textnod
// l.appendChild(textnod)
// skapa knapp för delete
// l.appendChild(deleteKnapp)

// list.appendChild(l);
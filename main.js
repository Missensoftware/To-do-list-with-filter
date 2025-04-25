
let nodeList = document.getElementsByTagName('LI');

for (let i = 0; i < nodeList.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");

    span.className = 'close';
    span.appendChild(txt);
    nodeList[i].appendChild(span);
}

// click close button to hide the current list item
let close = document.getElementsByClassName('close');
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

// add checked line-through
let list = document.querySelector('ul');
list.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
}, false);

//add new text to the list
function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('myinput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert('you warite some list')
    } else {
        document.getElementById('ul-list').appendChild(li);
    }

    document.getElementById('myinput').value = "";

    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");

    span.className = 'close';
    span.appendChild(txt);
    li.appendChild(span);


    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    
    }
}


// add filter to the list
let filter = document.getElementById('myinput');
filter.addEventListener('keyup', function() {
    let filterValue = filter.value.toUpperCase();
    let li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        let txtValue = li[i].textContent || li[i].innerText;
        if (txtValue.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
});
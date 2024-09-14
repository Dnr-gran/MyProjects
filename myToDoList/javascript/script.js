const textBox = document.getElementById('text-box');
const listElements = document.getElementById('list-elements');
const addBtn =  document.getElementById('add-btn');
const saveBtn = document.getElementById('save-btn');
const loadBtn = document.getElementById('load-btn');

addBtn.onclick = function addElement(){
    if(textBox.value === ''){
        window.alert('The text box cannot be emply');
    }
    else{
        let span = document.createElement('span');
        let btn = document.createElement('button');
        let p = document.createElement('p');
        let delBtn = document.createElement('button');

        listElements.appendChild(span);
        span.appendChild(btn);
        span.appendChild(p);
        span.appendChild(delBtn);
        delBtn.style.display = 'none';

        span.setAttribute('class', 'element-container');
        btn.setAttribute('id', 'element-btn');
        delBtn.setAttribute('class', 'del-btn');
        p.textContent = textBox.value;
        delBtn.textContent = 'X';

        textBox.value = '';

        btn.addEventListener('focusin', function(){
            delBtn.style.display = 'block';
        });

        btn.addEventListener('focusout', function(){
            setTimeout(() => {
                delBtn.style.display = 'none';
            }, 100);
        });
    
        delBtn.onclick = function(){
            span.remove();
        }
    }
}

textBox.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        e.preventDefault
        addBtn.click();
    }
});

saveBtn.onclick = function saveList(){
    localStorage.setItem('data', listElements.innerHTML);
}

loadBtn.onclick = function showList(){
    listElements.innerHTML = localStorage.getItem('data');
}
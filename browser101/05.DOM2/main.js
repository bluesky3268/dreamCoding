'use strict';

const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_btn');
const clearAll = document.querySelector('.clear_all');


addBtn.addEventListener('click', () => {
    onAdd();
});

input.addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        onAdd();
    }
});

clearAll.addEventListener('click', () => {
    onClearAll();
})

function onAdd() {
    const txt = input.value;
    if (txt === '') {
        input.focus();
        return;
    }
    const item = createItem(txt);

    // 목록에 입력 값 추가
    items.appendChild(item);

    // 추가된 아이템을 스크롤 이동
    item.scrollIntoView({block: "center"});

    // input 초기화
    input.value = "";
    input.focus();
}

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item_name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item_btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'; // 동적으로 변경할 필요가 없기 때문에 하드코딩으로 직접 입력해 줌
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    })

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item_divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
}

function onClearAll() {
    items.innerHTML = '';
}

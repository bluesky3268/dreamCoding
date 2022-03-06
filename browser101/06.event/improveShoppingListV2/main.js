'use strict';

const items = document.querySelector('.items');
const form = document.querySelector('.new-form');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_btn');
const clearAll = document.querySelector('.clear_all');

form.addEventListener('submit', event => {
    // submit은 작업을 수행하면 페이지를 다시 로딩함
    // 그래서 event.preventDefault()로 자동으로 로딩되는 것을 막아줘야 함
    event.preventDefault();
    onAdd();
});

items.addEventListener('click', event => {
    const id = event.target.dataset.id
    if (id) {
        const toBeDeleted = document.querySelector(`.item_row[data-id="${id}"]`);
        toBeDeleted.remove();
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
    let itemId = createUUID().substring(0, 8);
    const itemRow = document.createElement('li');

    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', itemId);

    itemRow.innerHTML = `
    <div class="item" data-id=${itemId}>
        <span class="item_name">${text}</span>
        <button class="item_btn">
            <i class="fas fa-trash-alt" data-id=${itemId}></i>
        </button>
    </div>
    <div class="item_divider"><div>
    `
    console.log(itemId);
    return itemRow;
}

function onClearAll() {
    items.innerHTML = '';
}

function createUUID() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
'use strict';

const items = document.querySelector('.items');
const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_btn');
const clearAll = document.querySelector('.clear_all');


addBtn.addEventListener('click', () => {
    onAdd();
});

// keypress => deprecate => keydown(키 눌렀을 때) / keyup(키를 뗐을 때) 을 사용하자
// kerydown - isComposing() : 글자가 만들어지고 있는 도중에 발생한 이벤트는 무시
// * mousedown / mouseup

// input.addEventListener('keypress', event => {
input.addEventListener('keydown', event => {
    if (event.isComposing) {
        return;
    }
    if (event.key === 'Enter') {
        onAdd();
    }
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
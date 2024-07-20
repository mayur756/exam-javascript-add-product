document.addEventListener('DOMContentLoaded', function () {
    let parentList = document.getElementById('parent-list');
    let prodInput = document.getElementById('productInput');
    let addButton = document.getElementById('add_btn');

    addButton.addEventListener('click', function () {
        const productName = prodInput.value;
        if (productName === '') {
            alert('Please enter a product name.');
            return;
        }

        addProduct(productName);
        prodInput.value = '';
    });

function addProduct(name) {

    let listItem = document.createElement('li');
    listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between');


    let productName = document.createElement('h3');
    productName.classList.add('flex-grow-1');
    productName.textContent = name;
    listItem.appendChild(productName);
    let editButton = document.createElement('button');
    editButton.classList.add('btn', 'btn-warning', 'mx-2', 'edit-btn');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function () {
            editProduct(listItem, productName);
    });
    listItem.appendChild(editButton);
    let delButton = document.createElement('button');
    delButton.classList.add('btn', 'btn-danger', 'delete-btn');
    delButton.textContent = 'Delete';
    delButton.addEventListener('click', function () {
            deleteProduct(listItem);
    });
    listItem.appendChild(delButton);

    parentList.appendChild(listItem);
}

    function editProduct(listItem, productNameElement) {
        let newName = prompt('Enter new name for the product:', productNameElement.textContent);
        if (newName !== null && newName !== '') {
            productNameElement.textContent = newName.trim();
        }
    }

    function deleteProduct(listItem) {
        if (confirm('Are you sure you want to delete this product?')) {
            listItem.remove();
        }
    }
});




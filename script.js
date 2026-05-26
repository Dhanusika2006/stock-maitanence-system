let products = [];

function addProduct(){

    let id = document.getElementById("productId").value;
    let name = document.getElementById("productName").value;
    let quantity = document.getElementById("quantity").value;
    let price = document.getElementById("price").value;

    if(id === "" || name === "" || quantity === "" || price === ""){
        alert("Please fill all fields");
        return;
    }

    let product = {
        id,
        name,
        quantity,
        price
    };

    products.push(product);

    displayProducts();

    clearFields();
}

function displayProducts(){

    let table = document.getElementById("productTable");

    table.innerHTML = "";

    products.forEach((product,index)=>{

        let status = product.quantity < 5
            ? "<span class='low-stock'>Low Stock</span>"
            : "Available";

        table.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
                <td>₹${product.price}</td>
                <td>${status}</td>
                <td>
                    <button class="update-btn" onclick="editProduct(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteProduct(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

function deleteProduct(index){

    products.splice(index,1);

    displayProducts();
}

function editProduct(index){

    let product = products[index];

    document.getElementById("productId").value = product.id;
    document.getElementById("productName").value = product.name;
    document.getElementById("quantity").value = product.quantity;
    document.getElementById("price").value = product.price;

    products.splice(index,1);

    displayProducts();
}

function clearFields(){

    document.getElementById("productId").value = "";
    document.getElementById("productName").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("price").value = "";
}

function searchProduct(){

    let search = document.getElementById("search").value.toLowerCase();

    let rows = document.querySelectorAll("#productTable tr");

    rows.forEach(row => {

        let productName = row.cells[1].textContent.toLowerCase();

        if(productName.includes(search)){
            row.style.display = "";
        }
        else{
            row.style.display = "none";
        }
    });
}
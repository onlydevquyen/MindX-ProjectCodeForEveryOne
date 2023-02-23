// localStorage.clear();
const changeButtonMenu = (x) => {
    x.classList.toggle("change");
}


var x = document.querySelector("#header-container");
const but = document.querySelectorAll("#header-menu > div > button")
let onScroll = () => {
    window.addEventListener("scroll", callBackFunc);
    function callBackFunc() {
        var y = window.pageYOffset;
        if (y > 10) {
            x.classList.add("scroll");
            document.getElementById('header-container').style.backgroundColor = "white";
            but.forEach(element => {
                element.style.color = 'black';
            });
            document.getElementById('about-us').style.color = "black";
            document.querySelector("#header-container > h1 > a").style.color = "black";
        } else {
            x.classList.remove("scroll");
            document.getElementById('header-container').style.backgroundColor = "rgba(52, 58, 58, 0.384)";
            but.forEach(element => {
                element.style.color = '';
            });
            document.querySelector("#header-container > h1 > a").style.color = "white";
            document.getElementById('about-us').style.color = "white";
        }
    }
}

window.onload = () => { onScroll(); }


let dataSearch = document.getElementById('search-product');
let dataSearchStorage = localStorage.getItem('search-keyword') ? JSON.parse(localStorage.getItem('search-keyword')) : [];
function getDataSearchProduct() {
    if (dataSearch.value != "") {
        if (dataSearchStorage.length < 5) {
            dataSearchStorage.unshift({
                title: dataSearch.value,
                type: "keyword"
            });
        } else {
            dataSearchStorage.pop();
            dataSearchStorage.unshift({
                title: dataSearch.value,
                type: "keyword"
            });
        }
        localStorage.setItem('search-keyword', JSON.stringify(dataSearchStorage));
    }
}

var emailSubmit = document.getElementById('e-mail-submit');
let checkMail = () => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(emailSubmit.value)) {
        emailSubmit.focus;
        return false;
    }
    else
        return true;
}

let getEmailSubmit = () => {
    if (checkMail()) {
        let emaiSubmitStorage = localStorage.getItem('email-input') ? JSON.parse(localStorage.getItem('email-input')) : [];
        emaiSubmitStorage.push({
            title: emailSubmit.value,
            type: "information user"
        });

        localStorage.setItem('email-input', JSON.stringify(emaiSubmitStorage));
        console.log(emaiSubmitStorage);
        const notify = document.createElement("p");
        notify.innerHTML = "Email submitted successfully, thanks!";
        notify.style.color = "green";
        document.getElementById("register").appendChild(notify);
        setTimeout(() => {
            document.getElementById('register').removeChild(notify);
            emailSubmit.value = "";
        }, "1000");
    } else {
        const notify = document.createElement("p");
        notify.innerHTML = "Invalid email e.g. Example@gmail.com";
        notify.style.color = "red";
        document.getElementById("register").appendChild(notify);
        setTimeout(() => {
            document.getElementById('register').removeChild(notify);
            emailSubmit.value = "";
        }, "1000");
    }
}

// function exData() {
//     let list = '';
//     let index = 0;
//     dataSearchStorage.forEach((child) => {
//         list += `<li id = "${index}" onclick='getInnerHTMLExData(this.id)'>${child.title}</li>`;
//         index++;
//     });
//     document.getElementById('shop-dropdown-ex').innerHTML = list;
//     document.getElementById('header-dropdown-ex').innerHTML = list;
// }

// function getInnerHTMLExData(nodeId)
// {
//     var value;
//     value = document.getElementById(nodeId).innerHTML;
//     document.getElementById('search-product-shop').value = value;
// }


const product = [
    { id: 1, image: '"img-product/Rosy Vase.jpg"', title: "Rosy Vase", price: "120.000$", classify: "Decor" },
    { id: 2, image: '"img-product/Strange Single Sofa.jpg"', title: "Strange Single Sofa", price: "500.000$", classify: "Living-room" },
    { id: 3, image: '"img-product/Retro Wall Clock.jpg"', title: "Retro Wall Clock", price: "180.000$", classify: "Wall, Decor" },
    { id: 4, image: '"img-product/Retro Paiting By Me.jpg"', title: "Retro Paiting By Me", price: "1.000.000$", classify: "Decor" },
    { id: 5, image: '"img-product/Holder Curtain Tiebacks.jpg"', title: "Holder Curtain Tiebacks", price: "99.000$", classify: "Decor" },
    { id: 6, image: '"img-product/Light Door Handle.jpg"', title: "Light Door Handle", price: "120.000$", classify: "Decor" },
    { id: 7, image: '"img-product/Flower Garden Cup.jpg"', title: "Flower Garden Cup", price: "80.000$", classify: "Kitchen" },
    { id: 8, image: '"img-product/Luxury Dishes.jpg"', title: "Luxury Dishes", price: "120.000$", classify: "Kitchen" },
    { id: 9, image: '"img-product/Drifwood Wall Clock.jpg"', title: "Drifwood Wall Clock", price: "320.000$", classify: "Wall, Decor" },
    { id: 10, image: '"img-product/Vintage Fan Wall Lamp.jpg"', title: "Vintage Fan Wall Lamp", price: "100.000$", classify: "Decor, Wall" },
    { id: 11, image: '"img-product/You are Mirror.jpg"', title: "You're Mirror", price: "120.000$", classify: "Decor, Wall" },
    { id: 12, image: '"img-product/Morden Planter Kiki.jpg"', title: "Morden Planter Kiki", price: "150.000$", classify: "Bancony" },
    { id: 13, image: '"img-product/Combo Flowers Spoon.jpg"', title: "Combo Flowers Spoon", price: "90.000$", classify: "Kitchen" },
    { id: 14, image: '"img-product/Shower Curtain.jpg"', title: "Shower Curtain", price: "60.000$", classify: "Bathroom" },
    { id: 15, image: '"img-product/Seashell Pillow.jpg"', title: "Seashell Pillow", price: "20.000$", classify: "Bedroom" },
    { id: 16, image: '"img-product/Circle Rug DOVE.jpg"', title: "Circle Rug DOVE", price: "50.000$", classify: "Bedroom, Bathroom" },
    { id: 17, image: '"img-product/Bloom Chair.jpg"', title: "Bloom Chair", price: "150.000$", classify: "Living-room" },
    { id: 18, image: '"img-product/Bookshelf Checker.jpg"', title: "Bookshelf Checker", price: "80.000$", classify: "Living-room, Bedroom" },
    { id: 19, image: '"img-product/Coffee Table Design.jpg"', title: "Coffee Table Design", price: "50.000$", classify: "Bancony" },
    { id: 20, image: '"img-product/Cosmico Clothes Hanger.jpg"', title: "Cosmico Clothes Hanger", price: "65.000$", classify: "Bedroom, Bathroom" },
    { id: 21, image: '"img-product/Iconic Etcetera Chair.jpg"', title: "Iconic Etcetera Chair", price: "70.000$", classify: "Living-room, Bancony" },
    { id: 22, image: '"img-product/Modern Light.jpg"', title: "Modern Light", price: "110.000$", classify: "Wall, Decor" },
    { id: 23, image: '"img-product/Snail lamp.jpg"', title: "Snail Light", price: "50.000$", classify: "Living-room, Decor" },
    { id: 24, image: '"img-product/Water Tower Chair.jpg"', title: "Water Tower Chair", price: "250.000$", classify: "Living-room, Bancony" },
    { id: 25, image: '"img-product/Float Wall Lamp.jpg"', title: "Float Wall Lamp", price: "150.000$", classify: "Wall,Decor" },
    { id: 26, image: '"img-product/Scandinavian kitchen.jpg"', title: "Scandinavian Kitchen", price: "50.000$", classify: "Kitchen" },
    { id: 27, image: '"img-product/Remark Floating Shelves.jpg"', title: "Remark Floating Shelves", price: "50.000$", classify: "Decor, Bancony" },
    { id: 28, image: '"img-product/Coffee Chill Table.jpg"', title: "Coffee Chill Table", price: "120.000$", classify: "Bancony" },
    { id: 29, image: '"img-product/Papering Chair.jpg"', title: "Papering Chair", price: "350.000$", classify: "Living-room, Bancony" },
    { id: 30, image: '"img-product/Tapio Avena Vase.jpg"', title: "Tapio Avena Vase", price: "50.000$", classify: "Decor, Other" },
    { id: 31, image: '"img-product/Leaf Candle Holder.jpg"', title: "Leaf Candle Holder", price: "20.00$", classify: "Decor, Living-room" },
    { id: 32, image: '"img-product/Spiral Felt Star.jpg"', title: "Spiral Felt Star", price: "50.00$", classify: "Decor, Other" },
    { id: 33, image: '"img-product/Gray Dream Catcher.jpg"', title: "Gray Dream Catcher", price: "80.00$", classify: "Decor, Other" },
    { id: 34, image: '"img-product/Pink Flower Toilet.jpg"', title: "Pink Flower Toilet", price: "350.000$", classify: "Bathroom" },
    { id: 35, image: '"img-product/Outdoor Egg Chair.jpg"', title: "Outdoor Egg Chair", price: "250.000$", classify: "Bancony" },
    { id: 36, image: '"img-product/Multi-function Cabinet.jpg"', title: "Multi-function Cabinet", price: "100.000$", classify: "Bathroom, Bedroom" },
    { id: 37, image: '"img-product/Orissa Shower Curtain.jpg"', title: "Orissa Shower Curtain", price: "60.00$", classify: "Bathroom" },
    { id: 38, image: '"img-product/Multi-use shelf.jpg"', title: "Multi-use Shelf", price: "99.00$", classify: "Bathroom, Other" },
    { id: 39, image: '"img-product/Susie Storage Cart.jpg"', title: "Susie Storage Cart", price: "150.000$", classify: "Bathroom" },
    { id: 40, image: '"img-product/Pastel Caninet.jpg"', title: "Pastel Caninet", price: "199.000$", classify: "Bathroom, Bedroom" },
    { id: 41, image: '"img-product/Wood Design Decor.jpg"', title: "Wood Design Decor", price: "99.000$", classify: "Wall, Decor" },
    { id: 42, image: '"img-product/Swing Decoration.jpg"', title: "Swing Decoration", price: "150.000$", classify: "Bancony, Decor" },
    { id: 43, image: '"img-product/Strawberry Hanging Planter.jpg"', title: "Strawberry Hanging Planter", price: "15.00$", classify: "Bancony, Decor" },
    { id: 44, image: '"img-product/Combo Spade Dish.jpg"', title: "Combo Spade Dish", price: "59.00$", classify: "Kitchen" },
    { id: 45, image: '"img-product/Pillow Sofa Decor.jpg"', title: "Pillow Sofa Decor", price: "50.000$", classify: "Living-room" },
    { id: 46, image: '"img-product/Doily Table Runner.jpg"', title: "Doily Table Runner ", price: "50.00$", classify: "Kitchen, Decor, Other" },
    { id: 47, image: '"img-product/Flowers Pillow.jpg"', title: "Flowers Pillow", price: "30.00$", classify: "Living-room, Bedroom" },
    { id: 48, image: '"img-product/Crochet Pearl Valance.jpg"', title: "Crochet Pearl Valance", price: "20.00$", classify: "Other, Decor" },
    { id: 49, image: '"img-product/Unique Loryal Curtain.jpg"', title: "Unique Loryal Curtain", price: "50.000$", classify: "Other, Decor" },
    { id: 50, image: '"img-product/Reflections Decor.jpg"', title: "Reflections Decor", price: "500.00$", classify: "Other, Decor" },
    { id: 51, image: '"img-product/Lavender In Sunset.jpg"', title: "Lavender In Sunset", price: "250.000$", classify: "Wall, Decor" },
    { id: 52, image: '"img-product/Rocking Chair.jpg"', title: "Rocking Chair", price: "50.000$", classify: "Living-room, Bancony" },
    { id: 53, image: '"img-product/Outdoor Modular Setting.jpg"', title: "Outdoor Modular Setting", price: "500.000$", classify: "Other, Bancony" },
    { id: 54, image: '"img-product/Beige Hanging Shelf.jpg"', title: "Beige Hanging Shelf", price: "50.00$", classify: "Other, Bathroom" },
    { id: 55, image: '"img-product/Mushroom Spice Jar.jpg"', title: "Mushroom Spice Jar", price: "5.00$", classify: "Kitchen" },
    { id: 56, image: '"img-product/Marble Wine Rack.jpg"', title: "Marble Wine Rack", price: "15.00$", classify: "Kitchen" },
    { id: 57, image: '"img-product/Quartz Bottle Opener.jpg"', title: "Quartz Bottle Opener", price: "5.00$", classify: "Other, Kitchen" },
    { id: 58, image: '"img-product/Gesprenkelter Haken.jpg"', title: "Gesprenkelter Haken", price: "2.00$", classify: "Other, Wall" },
    { id: 59, image: '"img-product/Bear Honney Blossom.jpg"', title: "Bear Honney Blossom", price: "60.00$", classify: "Other, Kitchen" },
    { id: 60, image: '"img-product/Bold Chair.jpg"', title: "Bold Chair", price: "150.00$", classify: "Bancony, Living-room" },
    { id: 61, image: '"img-product/Combo Framed Branches.jpg"', title: "Combo Framed Branches", price: "300.00$", classify: "Wall, Living-room, Decor" },
    { id: 62, image: '"img-product/Osvaldo Table Clock.jpg"', title: "Osvaldo Table Clock", price: "50.00$", classify: "Other, Decor" },
    { id: 63, image: '"img-product/Square Planter.jpg"', title: "Square Planter", price: "50.00$", classify: "Bancony" },
]

//paging items


let perPage = 16;
let currentPage = 1;
let start = 0;
let end = perPage;

let totalPage = Math.ceil(product.length / perPage);
const btnNext = document.querySelector(".btn-next");
const btnPrevious = document.querySelector(".btn-previous");

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

function renderProduct() {
    let html = "";
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += `<div id="${item.id}" class="col" onclick="getDataProduct(this.id)">
                        <div class="detail-item"><a href = "http://127.0.0.1:5500/DetailProduct.html"><img src = ${item.image}></a>
                            <div class="description"><h6>${item.title}</h6>
                                <p><del>${(parseInt(item.price) + (parseInt(item.price) * 0.2))}.00$</del> ${item.price} </p>
                            </div>
                        </div>
                    </div>`
        }
    });
    document.getElementById('product').innerHTML = html;
}
renderProduct();
renderListPage(totalPage);
function renderListPage(totalPage) {
    let html = '';
    html += `<li class="page-item"><a class="page-link" href="#">${1}</a></li>`;
    for (let i = 2; i <= totalPage; i++) {
        html += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`
    }
    document.getElementById('number-page').innerHTML = html;
    document.getElementById('number-page').style.display = 'flex';
}

function changePage() {
    let currentPage = document.querySelectorAll('.number-page li');
    for (let i = 0; i < currentPage.length; i++) {
        currentPage[i].addEventListener('click', () => {
            const value = i + 1;
            currentPage = value;
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}
changePage();


btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage >= totalPage) {
        currentPage = totalPage;
    }
    getCurrentPage(currentPage);
    renderProduct();

});

btnPrevious.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    getCurrentPage(currentPage);
    renderProduct();
});

function renderByClasstify(classtifyClick) {
    let sum = 0;
    let html = "";
    const content = product.map((item) => {
        if (item.classify.includes(classtifyClick)) {
            html += `<div class="col" onclick="getDataProduct(this.id)">
                        <div class="detail-item"><a href = "http://127.0.0.1:5500/DetailProduct.html"><img src = ${item.image}></a>
                            <div class="description"><h6>${item.title}</h6>
                                <p><del>${(parseInt(item.price) + (parseInt(item.price) * 0.2))}.00$</del> ${item.price} </p>
                            </div>
                        </div>
                    </div>`;
            sum++;
        }
    });
    document.getElementById('product').innerHTML = html;
    btnNext.addEventListener('click', () => {
        currentPage++;
        if (currentPage >= totalPage) {
            currentPage = totalPage;
        }
        getCurrentPage(currentPage);
        renderByClasstify();

    });

    btnPrevious.addEventListener('click', () => {
        currentPage--;
        if (currentPage <= 1) {
            currentPage = 1;
        }
        getCurrentPage(currentPage);
        renderByClasstify();
    });
    renderListPage(sum / 16);
}


let dataSearchShop = document.getElementById('search-product-shop');
function renderSearchProductShop() {
    let sum = 0;
    if (dataSearchShop.value != "") {
        if (dataSearchStorage.length > 5) {
            dataSearchStorage.pop();
        }
        dataSearchStorage.unshift({
            title: dataSearchShop.value,
            type: "keyword"
        });
        localStorage.setItem('search-keyword', JSON.stringify(dataSearchStorage));
        let html = "";
        const content = product.map((item) => {
            if (item.title.includes(dataSearchShop.value)) {
                html += `<div class="col" onclick="getDataProduct(this.id)">
                        <div class="detail-item"><a href = "http://127.0.0.1:5500/DetailProduct.html"><img src = ${item.image}></a>
                            <div class="description"><h6>${item.title}</h6>
                                <p><del>${(parseInt(item.price) + (parseInt(item.price) * 0.2))}.00$</del> ${item.price} </p>
                            </div>
                        </div>
                    </div>`;
                sum++;
            }
        });
        if (html == "")
            html += "No products found"
        document.getElementById('product').innerHTML = html;
    }
    btnNext.addEventListener('click', () => {
        currentPage++;
        if (currentPage >= totalPage) {
            currentPage = totalPage;
        }
        getCurrentPage(currentPage);
        renderSearchProductShop();

    });

    btnPrevious.addEventListener('click', () => {
        currentPage--;
        if (currentPage <= 1) {
            currentPage = 1;
        }
        getCurrentPage(currentPage);
        renderSearchProductShop();
    });
    renderListPage(sum / 16);

}

function catchEnter(key) {
    var keycode = (key.keyCode ? key.keyCode : key.which);
    if (keycode == '13') {
        getDataSearchProduct();
        renderSearchProductShop();
    }
}
addEventListener('keypress', catchEnter);

function getDataProduct(id){
    console.lod(id)
    document.getElementById('main-img').src = product[id].image;
    document.getElementById('main-title').innerHTML = product[id].title;
    document.getElementById('main-price').innerHTML = `<del>${(parseInt(product[id].price) + (parseInt(product[id].price) * 0.2))}.00$</del> ${product[id].price}`;
}



function goToShop() {
    window.location = "http://127.0.0.1:5500/Shop.html";
}

function goToAboutUs() {
    window.location = "http://127.0.0.1:5500/AboutUS.html";
}

function goToHome() {
    window.location = "http://127.0.0.1:5500/index.html";
}








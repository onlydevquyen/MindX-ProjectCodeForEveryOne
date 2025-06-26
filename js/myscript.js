import product from './data-products.js'

window.changeButtonMenu = (x) => {
  x.classList.toggle("change");
};

window.goToShop = () => {
  window.location.href = "/shop.html";
};

window.goToAboutUs = () => {
  window.location.href = "/aboutus.html";
};

window.goToHome = () => {
  window.location.href = "/index.html";
};


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

function exData() {
    let list = '';
    let index = 0;
    dataSearchStorage.forEach((child) => {
        list += `<li id = "${index}" onclick='getInnerHTMLExData(this.id)'>${child.title}</li>`;
        index++;
    });
    document.getElementById('shop-dropdown-ex').innerHTML = list;
    document.getElementById('header-dropdown-ex').innerHTML = list;
}

function getInnerHTMLExData(nodeId)
{
    var value;
    value = document.getElementById(nodeId).innerHTML;
    document.getElementById('search-product-shop').value = value;
}

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
                        <div class="detail-item"><a href = "/detail_product.html?id=${item.id}"><img src = ${item.image}></a>
                            <div class="description"><h6>${item.title}</h6>
                                <p><del>${(parseInt(item.price) + (parseInt(item.price) * 0.2))}.00$</del> ${item.price} </p>
                            </div>
                        </div>
                    </div>`
        }
    });
    document.getElementById('product').innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
  const product = document.getElementById("product");
  if (product) {
    renderProduct();
    renderListPage(totalPage);
    changePage();
  }
  if (btnNext) {
    btnNext.addEventListener("click", () => {
      currentPage++;
      if (currentPage >= totalPage) {
        currentPage = totalPage;
      }
      getCurrentPage(currentPage);
      renderProduct();
    });
  }
  if (btnPrevious) {
    btnPrevious.addEventListener("click", () => {
      currentPage--;
      if (currentPage <= 1) {
        currentPage = 1;
      }
      getCurrentPage(currentPage);
      renderProduct();
    });
  }
});

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

window.renderByClasstify = (classtifyClick) => {
    let sum = 0;
    let html = "";
    const content = product.map((item) => {
        if (item.classify.includes(classtifyClick)) {
            html += `<div class="col" onclick="getDataProduct(this.id)">
                        <div class="detail-item"><a href = "/detail_product.html?id=${item.id}"><img src = ${item.image}></a>
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
                        <div class="detail-item"><a href ="/detail_product.html?id=${item.id}"><img src = ${item.image}></a>
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

document.addEventListener("DOMContentLoaded", function () {
  const imgDetail = document.getElementById("main-img");
  if (imgDetail) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = Number(urlParams.get("id")) - 1;
    imgDetail.src = product[productId].image;
    document.getElementById("main-title").innerHTML = product[productId].title;
    document.getElementById("main-price").innerHTML = `<del>${
      parseInt(product[productId].price) + parseInt(product[productId].price) * 0.2
    }.00$</del> ${product[productId].price}`;
  }
});



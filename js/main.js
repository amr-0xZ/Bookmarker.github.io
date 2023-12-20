var siteName = document.getElementById("name");
var siteURL = document.getElementById("url");
var btn = document.getElementById("btn");
var sites = [];

if (localStorage.getItem("sites")) {
    sites = JSON.parse(localStorage.getItem("sites"))
    display(sites);
}

btn.onclick = function () {
    addSite()
    clearForm()
}

function addSite() {
    var site = {
        siteName: siteName.value,
        siteURL: siteURL.value,
    }
    sites.push(site);
    localStorage.setItem("sites", JSON.stringify(sites));
    display(sites);
}

function display(item) {
    var box = '';
    for (var i = 0; i < sites.length; i++) {
        box += `
        <tr>
            <td>${i + 1}</td>
            <td>${item[i].siteName}</td>
            <td><a href="${item[i].siteURL}" target="_blank"><button class="btn btn-info"><i class="fa-solid fa-eye pe-2"></i>Visit</button></a></td>
            <td><button class="btn btn-danger" onclick="deleteItem(${i})"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
        </tr>
        `
    }
    tableRow.innerHTML = box;
}

function deleteItem(index) {
    sites.splice(index, 1)
    localStorage.setItem('sites', JSON.stringify(sites))
    display(sites)
}

function clearForm() {
    siteName.value = '';
    siteURL.value = '';
}
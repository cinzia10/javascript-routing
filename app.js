let pages = [];



function loadPages() {
    fetch('/pages.json')
    .then(response => response.json())
    .then(result => displayPage(result))
}

function displayPage(loadedPages) {

    pages = loadedPages;

    const navMenu = document.getElementById('nav-menu');
    for (const page of pages) {

        const a = document.createElement('a');
        const aNode = document.createTextNode(page.name);
        a.appendChild(aNode);
        a.href = '/#/' + page.id;

        navMenu.appendChild(a)
    }

    const firstPage = pages[0];
    const container = document.getElementById('page-container');

    container.innerHTML = firstPage.html

}

window.addEventListener('hashchange', ()=>changePage(window.location.hash));

function changePage(hash) {
    let id = hash.replace('#/', '');

    if (id === '') {
        id = 'home'
    }

    let selectedPage;

    for (const page of pages) {
        if (page.id === id) {
            selectedPage = page;
            break
        }
    }

    const container = document.getElementById('page-container');
    container.innerHTML = selectedPage.html;
}


loadPages()
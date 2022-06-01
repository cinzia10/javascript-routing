// console.log(window.location.hash);

changePage(window.location.hash);

window.addEventListener('hashchange', ()=>changePage(window.location.hash));

function changePage(hash) {
    switch (hash) {
        case '#/about':
           displayPage('about')
            break;
        case '#/contacts':
            displayPage('contacts')
            break;
        case '#/gallery':
            displayPage('gallery')
            break;
    
        default: displayPage('home')

            break;
    }
}

function displayPage(pageId) {
    const container = document.getElementById('page-container');
    
    const arrayOfChildren = [...container.children];

    for (const child of arrayOfChildren) {
        child.style.display = 'none'
    }

    const selectPage = document.getElementById(pageId);
    selectPage.style.display = 'block'
    
}
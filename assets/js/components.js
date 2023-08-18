async function loadComponent(pathHMTL, domElement) {
    let arq = await fetch(pathHMTL);
    let component = await arq.text();
    
    document.querySelector(domElement).insertAdjacentHTML("beforeend", component);
}

export { loadComponent };
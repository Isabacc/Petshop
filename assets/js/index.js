async function loadComponent(pathHMTL, domElement) {
    let arq = await fetch(pathHMTL);
    let component = await arq.text();
    
    document.querySelector(domElement).insertAdjacentHTML("beforeend", component);
}

loadComponent("assets/components/footer.html", "footer");
loadComponent("assets/components/header.html", "header");



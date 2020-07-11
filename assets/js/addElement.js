function addElement(type, content) {
    let root = document.querySelector('.main-container');
    let element = document.createElement(type);
    return root.appendChild(element).textContent = content;
}

addElement('h1', 'This is a Heading');
addElement('p', 'This is a another paragraph. It is awesome');

async function fetching() {
    let v1 = await fetch('https://dummyjson.com/products')
    let v2 = await v1.json()

    for (i = 0; i < 20; i++) {

        const div = document.createElement('div');
        div.className = 'border p-4 rounded shadow-lg';
        document.querySelector('#parent').appendChild(div);

        let image = document.createElement('img')
        image.src = v2.products[i].images[0]
        image.style.width = '200px'
        div.appendChild(image)

        let heading = document.createElement('h1');
        heading.textContent = v2.products[i].title;
        div.appendChild(heading);

        let price = document.createElement('p');
        price.textContent = "Price: $" + v2.products[i].price;
        div.appendChild(price);

    }

}

fetching()


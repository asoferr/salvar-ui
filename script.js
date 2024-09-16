document.addEventListener('DOMContentLoaded', () => {
    const loadProductsButton = document.getElementById('loadProducts');
    const productList = document.getElementById('product-list');

    loadProductsButton.addEventListener('click', async () => {
        try {
            // Substitua esta URL pela URL real da sua API
            const response = await fetch('https://api.example.com/produtos-limpeza');
            
            if (!response.ok) {
                throw new Error('Falha ao carregar os produtos.');
            }

            const data = await response.json();
            displayProducts(data);
        } catch (error) {
            console.error('Erro:', error);
            productList.innerHTML = '<p>Erro ao carregar produtos. Tente novamente mais tarde.</p>';
        }
    });

    function displayProducts(products) {
        productList.innerHTML = ''; // Limpa a lista de produtos antes de adicionar novos
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product';

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">R$ ${product.price.toFixed(2)}</p>
                    <p class="description">${product.description}</p>
                    <a href="#" class="button">Comprar</a>
                </div>
            `;

            productList.appendChild(productDiv);
        });
    }
});

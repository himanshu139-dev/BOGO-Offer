function selectBox(box) {
    document.querySelectorAll('.box').forEach(b => b.classList.remove('expanded'));
    box.classList.add('expanded');
    const units = box.getAttribute('data-units');
    const totalPrice = document.getElementById('totalPrice');
    const priceMap = {
        1: 10,
        2: 18,
        3: 24
    };
    totalPrice.textContent = `$${priceMap[units].toFixed(2)} USD`;
    box.querySelector('.radio').checked = true;
}
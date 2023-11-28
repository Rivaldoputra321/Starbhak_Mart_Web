$(document).ready(function(){
    var colectionItem = {};
    var colectionItemPrice = {};
    var taxRate = 0.1;
    
    $('.card').on('click', function(){
    var productName = $(this).find('#nama').text();
    var productPriceText = $(this).find("#harga").text();
    var productPrice = parseFloat(productPriceText.replace('Rp.', '').replace('.', '').replace(',', ''));
    var productName = productName.replace(/\s+/g, '_').toLowerCase()
    if (!colectionItem[productName]) {
        colectionItem[productName] = 1;
        colectionItemPrice[productName] = productPrice;

        var newElement =
            `<div class="item-in-cart ${sanitizeClassName(productName)}"> 
                <p class="name-food">${productName}</p> 
                <p class="total-price"><span class="right">${productPrice.toLocaleString('id-ID')}</span></p>
                <div class="item-in-troll-image" data-product="${sanitizeClassName(productName)}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);">
                        <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                        <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                    </svg>
                </div>
                <p class="unit-price">Unit price <span class="right">${productPrice.toLocaleString('id-ID')}</span></p>
                <p class="quantity">Quantity: <span class="right" id="total-quantity">1</span></p>
            </div>`;
        $(newElement).appendTo("#cart");
    } else {
        colectionItem[productName]++;
        var totalPrice = colectionItem[productName] * colectionItemPrice[productName];
        $(`.${sanitizeClassName(productName)} .quantity span`).text(colectionItem[productName]);
        $(`.${sanitizeClassName(productName)} .total-price span`).text("Rp. "+totalPrice.toLocaleString('id-ID'));
    }
      totalAmount();

    });


    $('#cart').on('click', '.item-in-troll-image', function () {
        var productName = $(this).data('product');
        var productName = productName.replace(/\s+/g, '_').toLowerCase()
        if (colectionItem[productName] > 1) {
            colectionItem[productName]--;
            var totalPrice = colectionItem[productName] * colectionItemPrice[productName];
            $(`.${sanitizeClassName(productName)} .quantity span`).text(colectionItem[productName]);
            $(`.${sanitizeClassName(productName)} .total-price span`).text(totalPrice.toLocaleString('id-ID'));
        } else {
            $(`.${sanitizeClassName(productName)}`).remove();
            delete colectionItem[productName];
            delete colectionItemPrice[productName];
        }

        totalAmount();
    });

    // Function to sanitize class names
    function sanitizeClassName(name) {
        return name.replace(/[^a-zA-Z0-9/s]/g, '_');
    }

    function totalAmount(){
    var subtotal = Object.values(colectionItem).reduce((acc, quantity, index) => {
    var itemName = Object.keys(colectionItem)[index];
        return acc + quantity * colectionItemPrice[itemName];
    }, 0);

    var tax = subtotal * taxRate;
    var totalAmount = subtotal + tax;

    $('#total').text("Rp. "+totalAmount.toLocaleString('id-ID'));
    $('#tax').text("Rp. "+tax.toLocaleString('id-ID'));
    
    }
  
        
    
    


});

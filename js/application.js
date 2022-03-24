/****Steps***
 * Create a function to calculate the books
 * -----Create variables to represent the item price, quantity and item cost
 * 
 * Next: Another function when an item is added to cart
 * ------Declare Variables to represent new items and new price
 * NEXT: Another function when an item is removed 
 * NEXT: Write a function to update quantity
*/


$(document).ready(function() {
    updateCost();
    $(document).on('input', '.qty', updateQty);
    $(document).on('click', '.remove', removeItem);
    $(document).on('click', '.add', addItem);
    $('#price').on('keyup', function(event) {
      if (event.key === 'Enter') {
        addItem();
      }
    });
  });



//step 1
var updateCost = function() {
    var costArr = [];
    $('tbody tr').each(function (i, item) {
      var itemPrice = parseFloat($(item).find('.price').text());
      var quantity = parseFloat($(item).find('.qty input').val());
      var itemCost = itemPrice * quantity;
      if(quantity) {
        $(item).children('.cost').html(itemCost.toFixed(2));
        costArr.push(itemCost);
      } else {
        $(item).children('.cost').html('');
      }
    });
    var total = costArr.length > 0 ? costArr.reduce((sum, num) => sum + num) : 0;
    $('#itemTotal').html(total.toFixed(2)); 
  };
  
  // step 2
  var addItem = function() {
    var newItem = $('#item').val();
    var newPrice = parseFloat($('#price').val()).toFixed(2);
    if (!newItem || isNaN(newPrice)) {
      alert('You must enter both item name and unit price to add a new item.');
    } else {
      $('#newList').before("<tr><td class='item'>" + newItem + "</td><td class='price'>" + newPrice + "</td><td class='qty'><input type='number'></input></td><td class='cost'></td><td><button class='btn btn-warning'><i>Remove</i></button></td></tr>");  
    }
    $('tr').find('#item, #price').val('');
  };
  
  // step3
  var removeItem = function() {
    $(this).closest('tr').remove();
    updateCost();
  };
  
  // step 4
  var updateQty = function () {
    clearTimeout(delay);
    var delay = setTimeout(updateCost, 1000);
  };
  
  
  
  
var unpopped = document.forms["popcorn"] ["unpopped"];
var caramel = document.forms["popcorn"] ["caramel"];
var caramelNut = document.forms["popcorn"] ["caramelNut"];
var taffey = document.forms["popcorn"] ["taffey"];
var subtotal = 0.0;
var Tax_Rate = 0.07;
function updateSubtotal() {
  //reset subtotal everytime you update subtotal = 0.0
  subtotal += unpopped.value*3;
  subtotal += caramel.value*3.50;
  subtotal += caramelNut.value*4.50;
  subtotal += taffey.value*5.00;
  var subtotalBox = document.getElementById("subtotal");
  subtotalBox.value = "$" + subtotal;
}
function getGrandTotal()
{
  var grandTotal = document.getElementById("grandtotal");
  var payment = document.querySelector('input[name="paymentMethod"]:checked');
  var fee = (payment && payment.value ==="check" ? 2.50 : 0.00);
  grandTotal.value = "$" + (subtotal + subtotal*Tax Rate + fee);
}
fucntion popcornconfirm() {
  var conformatiion= confirm("Are you sure this order is correct?");
  return false;
}
}

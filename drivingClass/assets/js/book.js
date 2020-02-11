function price(co) {
  var d = document.getElementById("offer").value;
  var p = document.getElementById("price");
  var off = d;

  for (item = 0; item < co.data.length; item++) {
      var compare=co.data[item].fields.coupon.localeCompare(d);
    if (compare==0) 
    {      
      if (co.data[item].fields.offertype == "%") {
          
        off =
          (Number(p.innerHTML) * Number(co.data[item].fields.offervalue)) / 100;
        break;
      } else {
        off = Number(p.innerHTML) - Number(co.data[item].fields.offervalue);
        break;
      }
    }
  }
  p.innerHTML = off;
}

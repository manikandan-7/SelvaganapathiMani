function myFunction() {
    var y = document.getElementById("share").value;
    var x = document.getElementById("total").value;
    var z = x/y;

    for(var i=y;i>=1;i--)
    {
        var x1 = document.getElementById("input"+i).value;
         
        // var name = document.createElement("p");
        // name.setAttribute("id", "name"+i)
        // var node =document.createTextNode(x1);
        // name.appendChild(node);
        // document.body.appendChild(name);

        // var amount = document.createElement("p");
        // amount.setAttribute("id", "amount"+i)
        // var value =document.createTextNode(z);
        // amount.appendChild(value);
        // document.body.appendChild(amount);

        var y1 = document.createElement("TR");
        y1.setAttribute("id", "myTr"+i);
        document.getElementById("table").appendChild(y1);
        
        var z1 = document.createElement("TD");
        var t1 = document.createTextNode(x1);
        z1.appendChild(t1);
        document.getElementById("myTr"+i).appendChild(z1);
        var z2 = document.createElement("TD");
        var t2 = document.createTextNode(z);
        z2.appendChild(t2);
        document.getElementById("myTr"+i).appendChild(z2);
     
     }
    
 }

function count(){
        var y = document.getElementById("share").value;
        for(var i=1; i<=y;i++)
        {
        var nameinput = document.createElement("INPUT");
        nameinput.setAttribute("type", "text");
        nameinput.setAttribute("placeholder", "Enter the name");
        nameinput.setAttribute("id", "input"+i);
        var b = document.getElementById("bill");
        b.insertBefore(nameinput,b.childNodes[4]);
        var br= document.createElement("br");
        b.insertBefore(br,b.childNodes[4]);
        

        }
        var x = document.getElementById("total").value;
        var y = document.getElementById("share").value;
        var z = x/y;
        document.getElementById("demo").innerHTML = z;
}


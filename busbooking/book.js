function search(){
    var from=document.getElementById("bookfrom").value;
    var to=document.getElementById("bookto").value;
    
    var x=[],i,y=[],nobus=0;
    x=JSON.parse(localStorage.getItem('from'));
    y=JSON.parse(localStorage.getItem('to'));
    z=JSON.parse(localStorage.getItem('travel'));
    s=JSON.parse(localStorage.getItem('seats'));

   
    for(i = 0;i<x.length;i++)
    {    
        if(x[i].localeCompare(from)==0 && y[i].localeCompare(to)==0)
        {
            list(z[i],s[i],i);
            nobus=1;
        }
    }
    if(nobus==0)
    {
            document.getElementById("demo1").innerHTML="no bus";
    }

}
function list(n,s,i){
  var y = document.createElement("p");
  y.setAttribute("id", "p");
  y.setAttribute("onclick",`book(${s},${i});this.onclick=null;`);
  y.appendChild(document.createTextNode(n))
  document.getElementById("div1").appendChild(y);  
}
function book(s,i){
    display();
    seats(s,i);
   pickup();
   drop();
   detailsbutton(i);
 
}
function display(){
    document.getElementById("div2").style.display="block";
}
function seats(s,t){
        
    var count=1;
    
    for(var i=0;i<3;i++)
    {
        var row = document.createElement("TR");
        row.setAttribute("id", "myTr"+i);
        document.getElementById("table").appendChild(row);

        for(var j=0;j<Number(s)/3;j++)
        {
            var cell = document.createElement("TD");
            cell.setAttribute("id","cell"+count);
            cell.setAttribute("onclick",`select(${count})`);
            var text = document.createTextNode(count);
            cell.appendChild(text);
            document.getElementById("myTr"+i).appendChild(cell);
             count++;
        }
    }

    bookedseats(t,s);

}
function bookedseats(t,s){
    console.log("ok");

    var allocated=JSON.parse(localStorage.getItem('seatsallocated'));
    var i,j,a,count=0;
    for(i=0;i<3;i++)
    {

        for(j=0;j<Number(s)/3;j++)
        {  
             count++;
            for(a=0;a<allocated[t].length;a++)
            {

                if(allocated[t][a]==count)
                {
                    document.getElementById("cell"+count).style.backgroundColor="gray";
                    document.getElementById("cell"+count).style.cursor="not-allowed"
                    document.getElementById("cell"+count).onclick=null;                    
                    console.log(allocated[t][a]);                   
                    
                }
            }
        }

    }

}
function select(v){
    
    var bookingseats=[],cell,selected;
    cell=document.getElementById("cell"+v);
    bookingseats=JSON.parse(localStorage.getItem('seatscount'));
    if(bookingseats==undefined){
        v=[v];
        localStorage.setItem('seatscount',JSON.stringify(v));
        cell.style.backgroundColor="green";

    }
    else{
        for(var i =0 ;i<bookingseats.length;i++)
        {
        
            if(bookingseats[i]==v)
            {   bookingseats.splice(i,1);
                localStorage.setItem('seatscount',JSON.stringify(bookingseats));
                cell.style.backgroundColor="white";
                selected=1;
                break;
            }
        }
        if(selected==1)
        {
            cell.style.backgroundColor=="black";
        }
        else
        {
        bookingseats.push(v);
        localStorage.setItem('seatscount',JSON.stringify(bookingseats));
        cell.style.backgroundColor="green";
        }
    
    }
}

function pickup(){

   let n=JSON.parse(localStorage.getItem('pick'));
    for(i=0;i<n.length;i++)
    {
    var z = document.createElement("option");
    z.setAttribute("value", n[i]);
    var t = document.createTextNode(n[i]);
    z.appendChild(t);
    document.getElementById("select").appendChild(z);
    }
}
function drop(){
   
   let n=JSON.parse(localStorage.getItem('drop'));
    for(i=0;i<n.length;i++)
    {
    var z = document.createElement("option");
    z.setAttribute("value", n[i]);
    var t = document.createTextNode(n[i]);
    z.appendChild(t);
    document.getElementById("select1").appendChild(z);
    }
}

function detailsbutton(t){
   
    var backButton=document.createElement("button");
    backButton.setAttribute("class","back nextback");
    var buttonvalue=document.createTextNode("Back");
    backButton.appendChild(buttonvalue);
    document.getElementById("namecount").appendChild(backButton);
    
    var nextButton=document.createElement("button");
    nextButton.setAttribute("onclick",`namecount(${t})`);
    nextButton.setAttribute("class","next nextback");
    var buttonvalue=document.createTextNode("Next");
    nextButton.appendChild(buttonvalue);
    document.getElementById("namecount").appendChild(nextButton);
    
}
function namecount(t){

    var b = document.getElementById("div6");
    b.style.display="block";
    var c=document.getElementById("div7");
    var namecount=JSON.parse(localStorage.getItem('seatscount'));
    for(var i=0; i<namecount.length;i++)
    {
    var nameinput = document.createElement("INPUT");
    nameinput.setAttribute("type", "text");
    nameinput.setAttribute("placeholder", "Enter the name");
    nameinput.setAttribute("id", "input"+i);
    nameinput.setAttribute("class", "nextinput");
    var br= document.createElement("br");
    c.appendChild(nameinput);
    c.appendChild(br);
    }

    var backButton=document.createElement("button");
    backButton.setAttribute("class","back nextback");
    var buttonvalue=document.createTextNode("Back");
    backButton.appendChild(buttonvalue);
    document.getElementById("submitbutton").appendChild(backButton);
    
    var nextButton=document.createElement("button");
    nextButton.setAttribute("onclick",`preview(${t})`);
    nextButton.setAttribute("class","next nextback");
    var buttonvalue=document.createTextNode("Next");
    nextButton.appendChild(buttonvalue);
    document.getElementById("submitbutton").appendChild(nextButton);
}
function preview(t){
    var namecount=JSON.parse(localStorage.getItem('seatscount'));
    var from =document.getElementById("bookfrom").value;
    var to =document.getElementById("bookto").value;
    var pick=document.getElementById("select").value;
    var drop=document.getElementById("select1").value;
    document.getElementById("preview").style.display="block";

    for(var i=0;i<namecount.length;i++)
    {   
        var name = document.getElementById("input"+i).value;
        var pName = document.createElement("p");
        pName.setAttribute("class","pre");
        var nametext =document.createTextNode(`name:${name}`);
        pName.appendChild(nametext);
        document.getElementById("preview1").appendChild(pName);
    }

    var pFrom = document.createElement("p");
    pFrom.setAttribute("class","pre");
    var fromtext =document.createTextNode(`from:${from}`);
    pFrom.appendChild(fromtext);
    document.getElementById("preview1").appendChild(pFrom);
    
    var pTo= document.createElement("p");
    pTo.setAttribute("class","pre");
    var totext =document.createTextNode(`to:${to}`);
    pTo.appendChild(totext);
    document.getElementById("preview1").appendChild(pTo);

    var pPick = document.createElement("p");
    pPick.setAttribute("class","pre");
    var picktext =document.createTextNode(`pickup::${pick}`);
    pPick.appendChild(picktext);
    document.getElementById("preview1").appendChild(pPick);

    var pDrop = document.createElement("p");
    pDrop.setAttribute("class","pre");
    var droptext =document.createTextNode(`drop:${drop}`);
    pDrop.appendChild(droptext);
    document.getElementById("preview1").appendChild(pDrop);
    
    var backButton=document.createElement("button");
    backButton.setAttribute("class","back nextback");
    var buttonvalue=document.createTextNode("Back");
    backButton.appendChild(buttonvalue);
    document.getElementById("conform").appendChild(backButton);
    
    var nextButton=document.createElement("button");
    nextButton.setAttribute("onclick",`conform(${t})`);
    nextButton.setAttribute("class","next nextback");
    var buttonvalue=document.createTextNode("CONFORM");
    nextButton.appendChild(buttonvalue);
    document.getElementById("conform").appendChild(nextButton);
}

function conform(t){

    seatsallocated(t);

    alert("successfully registered");
    localStorage.removeItem('seatscount');
    window.location.reload();
    
}
function seatsallocated(t){

    var allocated=JSON.parse(localStorage.getItem('seatsallocated'));
    var travelname=JSON.parse(localStorage.getItem('travel'));
    var selectseats=JSON.parse(localStorage.getItem('seatscount'));
   
    allocated[t]=allocated[t].concat(selectseats);

    localStorage.setItem('seatsallocated',JSON.stringify(allocated));
}

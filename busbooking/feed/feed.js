function feed(){
    var name = document.getElementById("name").value;
    var from = document.getElementById("from").value;
    var to   = document.getElementById("to").value;
    var  seats = document.getElementById("seats").value;

    var x=[],f=[],t=[],s=[],allocated=[],first=[];
     x=JSON.parse(localStorage.getItem('travel'));
     f=JSON.parse(localStorage.getItem('from'));
     t=JSON.parse(localStorage.getItem('to'));
     s=JSON.parse(localStorage.getItem('seats'));
     allocated=JSON.parse(localStorage.getItem('seatsallocated'));
    if(x==undefined){
        name=[name];
        from=[from];
        to=[to];
        seats=[seats];
        allocated=[first];
        localStorage.setItem('travel',JSON.stringify(name));
        localStorage.setItem('from',JSON.stringify(from));
        localStorage.setItem('to',JSON.stringify(to));
        localStorage.setItem('seats',JSON.stringify(seats));
        localStorage.setItem('seatsallocated',JSON.stringify(allocated));

    } 
    else{    
    x.push(name);
    f.push(from);
    t.push(to);
    s.push(seats);
    allocated.push(first);
    localStorage.setItem('travel',JSON.stringify(x));
    localStorage.setItem('from',JSON.stringify(f));
    localStorage.setItem('to',JSON.stringify(t));
    localStorage.setItem('seats',JSON.stringify(s));
    localStorage.setItem('seatsallocated',JSON.stringify(allocated));

    }

    alert("successfully registered");
    window.history.back();
}
    
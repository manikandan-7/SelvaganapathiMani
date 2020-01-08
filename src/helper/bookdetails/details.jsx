export function setDetails(){
    var count=JSON.parse(localStorage.getItem('count'));
    var details=JSON.parse(localStorage.getItem('details'));
    console.log(details);
    var length=details==null?0:Object.keys(details).length;
    var person,Booked={},name,phone,obj={};
    for(person=0;person<count.length;person++){
        name=document.getElementById('name'+person).value;
        phone=document.getElementById('phone'+person).value;
        obj={[person+length]:{"name":`${name}`,"phone":`${phone}`,"seatnumber":`${count[person]}`}};
        Object.assign(Booked,obj);
    }
    localStorage.setItem('tempdetails',JSON.stringify(Booked));
    
}

export function conformDetails(){
    var details=[];
    var temp=JSON.parse(localStorage.getItem('tempdetails'));
    var buselection=JSON.parse(localStorage.getItem('busselection'))
    Object.keys(temp).map(data=>{
            details.push([1,buselection.name,temp[data].seatnumber,temp[data].name,temp[data].phone]);
    })
    fetch('http://localhost:4000/bus/booking',{
        method:"POST",
        body:JSON.stringify({data:details}),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>{
        return res.json();
    }).then(data=>console.log(data));

    localStorage.removeItem('busselection');
    localStorage.removeItem('count');
    localStorage.removeItem('tempdetails');
    localStorage.removeItem('search');
   
}
export function Backtodetails(){
    localStorage.removeItem('tempdetails');
}
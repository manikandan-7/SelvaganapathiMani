export function seatSelected(number){
    var bookingseats=[],seat,selected;
    seat=document.getElementById(number);
    bookingseats=JSON.parse(localStorage.getItem('count'));
    console.log(bookingseats);
    if(bookingseats===null)
    {
        number=[`${number}`];
        localStorage.setItem('count',JSON.stringify(number));
        seat.style.fill="green";
    }
    else{
        for(var no=0;no<bookingseats.length;no++){
            if(bookingseats[no]===number)
            {
                bookingseats.splice(no,1);
                console.log(bookingseats);
                localStorage.setItem('count',JSON.stringify(bookingseats));
                selected=1;
                break;
            }
        }
        if(selected===1){
            seat.style.fill='white';
            seat.style.stroke='black'
        }
        else{
            bookingseats.push(`${number}`);
            console.log(bookingseats,number);
            localStorage.setItem('count',JSON.stringify(bookingseats));
            seat.style.fill="green";
        }
    }
}

export function seatsBooked(seats){
    console.log(seats);
      
    seats.map(data=>{

        var seat=document.getElementById(data.seats_number);
        seat.style.fill="gray";
        seat.style.cursor="not-allowed";
        seat.onclick=null;
        console.log("work");
    })
    
         


}
export function seatsCancel(){
    
}

export function Backtoseats(){
    localStorage.removeItem('count');
}


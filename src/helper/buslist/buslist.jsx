export function BusList(search){
    let  travel=JSON.parse(localStorage.getItem('travel'));
    let  length=Object.keys(travel).length;
    let id,bus={},flag=0,data={};

    for(id=0;id<length;id++)
    {
        if(travel[id].from===search.from && travel[id].to===search.to)
        {
            
            data={[flag]:{name:travel[id].name,start:travel[id].start}}
            Object.assign(bus,data);
            console.log(bus); 
            flag++;
        }
    }
    if(flag===0){
        return '';
    }
    else{
        return bus;
    }
}

export function Backbuslist(){
    localStorage.removeItem("busselection");
}
import FakeAuth from '../../components/authenticate'
export function Uservalidation (email,pass){
    var user={},flag=0;
    fetch('http://localhost:4000/user/signin',{
        method:"POST",
        body:JSON.stringify({email:email,pass:pass}),
        headers:{'Content-Type':'application/json'}
    })
    .then(res=>{
        return res.json();
    }).then(data=>{
        if(data.auth){
        Object.assign(user,data)
        var d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie="token=" +data.token+ ";" + expires + ";path=/";
        FakeAuth.authenticate();
        window.location.replace('/');
        }else{
            alert('incorrect user');
            window.location.replace('/');
        }
       
    });   
   
}

export function Logout(){
    localStorage.removeItem("login");
    localStorage.removeItem('details');
    localStorage.removeItem('bussection');
    localStorage.removeItem('search');
    
}

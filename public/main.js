function saveEmail(){
    let savedEmail={email:email.value};


axios.post('/saveemail',savedEmail)
.then((res)=>{
    console.log(res)
   
    
    

})
}

   

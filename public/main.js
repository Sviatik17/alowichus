function saveEmail(){
    let savedEmail={email:email.value};
    myForm.reset();

axios.post('/saveemail',savedEmail)
.then((res)=>{
    console.log(res)
   
    
    

})
}

   

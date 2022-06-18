configApi();

function submitForm(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    sendPostRequest(value).then(result =>{
        console.log(result)
        console.log(result.successful)
        if(result.successful){
            localStorage.setItem("user",JSON.stringify(result.userProfileDto))
            /*let userProfile = JSON.parse(localStorage.getItem('user')) */
        
         location.href = "/dashboard.html";
        }
        else{
            document.querySelector('.alert').style.display = "block";

        }
    }, error => {
        console.log(error);
    })
    console.log(value);
}
const form = document.getElementById('form');
form.addEventListener('submit',submitForm);


form.addEventListener('submit',function handleSubmit(e){
    e.preventDefault();

    form.reset();

    
});

configApi();

function submitForm(e){
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    sendPostRequest(value).then(result =>{
        console.log(result)
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
    let alertSuccess = document.querySelector('.alert');
    alertSuccess.style.display = "block";
    
});

const form=document.querySelector('#form');
const username=document.querySelector('#name');
const email=document.querySelector('#email');
const password=document.querySelector('#password');
const conpassword=document.querySelector('#conpassword');
const buttonval=document.getElementById('butto');
form.addEventListener('submit',function(e){
   e.preventDefault();
    validateinput();

})
function validateinput(){

    const nameval=username.value.trim();
    const emailval=email.value.trim();
    const passwordval=password.value.trim();
    const conpasswordval=conpassword.value.trim();

    if(nameval=== '')
        {
            seterror(username,"enter the name");
        }
        else{
            setsuccess(username);
        }
    if(passwordval==='')
            {
                seterror(password,"passwor is required");
            }
        else if(passwordval.length<8)
            {
                seterror(password,"password must contain 8 characters");
            }
            else{
                setsuccess(password);
            }
    if(conpasswordval==='')
            {
                seterror(conpassword," confirm passwor is required");
            }
        else if(conpasswordval!==passwordval)
                {
                    seterror(conpassword,"enter the correct password");
                }
           else{
                    setsuccess(conpassword);
                }
   if(emailval==='')
    {
        seterror(email,"email required");
    }
    else{
        setsuccess(email);
    }

}
function seterror(element,message){
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error');
    errorelement.innerText=message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}
function setsuccess(element){
    const inputgroup=element.parentElement;
    const errorelement=inputgroup.querySelector('.error');
    errorelement.innerText='';
    inputgroup.classList.remove('error');
    inputgroup.classList.add('success');
}
/*function validateemail(email)
{
   let s= String(email);
    var pattern = "^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$";
    s.match(pattern);   
}*/
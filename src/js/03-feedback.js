import throttle from "lodash.throttle";
//data-atributos
const form=document.querySelector('.feedback-form');
const inputEmail= document.querySelector('input[name=email]');
const inputMessage= document.querySelector('[name=message]');

console.log("helo");
form.addEventListener('input', (event)=>{
    const data={
        email: inputEmail.value,
        message: inputMessage.value,
    };
    const dataJSON=JSON.stringify(data);
    localStorage.setItem('feedback-form.state',dataJSON);
});

window.addEventListener('load', (event)=>{

    try{
        //const dataParse=JSON.parse(updateData());
        inputEmail.value=updateData().email;
        inputMessage.value=updateData().message;
    } catch(error){}
    
});

form.addEventListener('submit', (event)=>{
    try{
        event.preventDefault();
        console.log(updateData());
        form.reset();
        localStorage.removeItem('feedback-form.state');
    }catch(error){}
    
});

function updateData(){
    const newData= localStorage.getItem('feedback-form.state') || "";
    const dataParse=JSON.parse(newData);
    return dataParse;
};







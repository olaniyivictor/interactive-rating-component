//Taking the first div1 container using DOM
const div1 =document.querySelector(`.div1`);
console.log(div1);

//Taking the second div2 container using DOM
const div2=document.querySelector(`.div11`);
console.log(div2);

//Taking the submit button using DOM
const submitButton =document.querySelector(`.btn-primary`);
console.log(submitButton);
//Adding event listener to the submit button
submitButton.addEventListener('click',function(){
    //We want to see the div2 card then we have to emove the hidden
    div2.classList.remove("hidden");
    //we will make the div1 to be hiddden using stylecontent
    div1.style.display="none";
})

//Taking the Ratebutton using DOM
const rateButton =document.getElementById("rate");
console.log(rateButton);
//Adding event listener to the rating button
rateButton.addEventListener('click',function(){
    //We want to allow the div2 to be hidden
    div2.classList.add('hidden');
    //We want to allow to be seen
    div1.style.display='block';
})

//Taking all the btn button to the Dom
const button=document.querySelectorAll('#btn');
console.log(button);
//Let select the 
const number=document.querySelector('#number');
console.log(number);
button.forEach((buttons) =>{
    buttons.addEventListener('click',function(){
        number.innerHTML=buttons.innerHTML;
    })

})
const buttons = document.querySelectorAll('.button');

buttons.forEach(function (button) {
    
    button.addEventListener('click', function (e) {
        console.log(e.target);
        if(e.target.id=="grey"){
            const bc=document.querySelector(".canva");
            bc.style.backgroundColor='grey';
        }
        if(e.target.id=="white"){
            const bc=document.querySelector(".canva");
            bc.style.backgroundColor='white';
        }
        if(e.target.id=="blue"){
            const bc=document.querySelector(".canva");
            bc.style.backgroundColor='blue';
        }
        if(e.target.id=="yellow"){
            const bc=document.querySelector(".canva");
            bc.style.backgroundColor='yellow';
        }
    });
});


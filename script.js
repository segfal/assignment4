const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2'); 
button1.addEventListener('click', function(){
    container2.textContent = "";
    container1.textContent = "I'm right";
});
button2.addEventListener('click', function(){
    container1.textContent = "";
    container2.textContent = "No, I'm right";
});


/*

- [ ] **BONUS:** Create an HTML page with a form that asks the user to input the value of a sphere's radius. 

Write Javascript that gives them back the volume of the sphere. 
(There are many different ways to execute this. You can give the user information back in another input box on the page, 
as an alert, or any other way you can think of. You can look up how to use the Javascript Math object to simplify your calculations.)
*/


let radius = 0;

const getRadius = () => {
    radius = document.getElementById("radius").value;
    radius = parseInt(radius);
    //radius of circle = 4/3 * pi * r^3
    radius = Math.PI * Math.pow(radius, 1);
    return radius;
}



//add it to the DOM
//add radius to inner html with id radiusValue
const addRadius = () => {
    document.getElementById("radiusValue").innerHTML = getRadius();
}

//add event listener to button
document.getElementById("radiusButton").addEventListener("click", addRadius);






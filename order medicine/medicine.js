let medecines = [];
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMedicine = (ev)=>{
    ev.preventDefault();  //to stop the form submitting
    let medecine = {
        id: Date.now(),
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        message: document.getElementById('message').value
    }

    medecines.push(medecine);  // adding the medicine to medicine array 
    //document.forms[0].reset(); // to clear the form for the next entries
    document.querySelector('form').reset();

    //for display purposes only
    console.log('added' , {medecines} );
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(medecines, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyMedecineList', JSON.stringify(medecines) );
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addMedicine);
});



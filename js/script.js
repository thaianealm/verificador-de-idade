document.getElementById('checkAgeBtn').addEventListener('click', function(){
    checkAge();
})

function showMessage(){
let divMessage = document.getElementById('message');

        divMessage.style.display = 'block';

        setTimeout(() => {
            divMessage.style.display = 'none';
         },6000);
};

function checkAge(){
    
    let aName = prompt('Digite seu nome: ');
    let theYearOfBirth = prompt('Digite o ano do seu nascimento: ');

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - theYearOfBirth;

    if(aName == '' && theYearOfBirth == ''){
        showMessage();

    }else if(aName != null && theYearOfBirth != null && age >= 18){
        return alert(`${aName} tem ${age} anos de idade. ${aName} é maior de idade.`);
    }else if(aName != null && theYearOfBirth != null && age < 18){
        return alert(`${aName} tem ${age} anos de idade. ${aName} é menor de idade`);
    }else {
        showMessage();
    };
};
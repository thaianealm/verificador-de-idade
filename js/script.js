document.getElementById('checkAgeBtn').addEventListener('click', function(){
    checkAge();
})

function checkAge(){
    
    let aName = prompt('Digite seu nome: ');
    let theYearOfBirth = prompt('Digite o ano do seu nascimento: ');

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let age = currentYear - theYearOfBirth;

    if(aName == '' && theYearOfBirth == ''){
        let divMessage = document.getElementById('message');

        divMessage.style.display = 'block';

        setTimeout(() => {
            divMessage.style.display = 'none';
         },6000);

    }else if(age >= 18){
        return alert(`${aName} tem ${age} anos de idade. ${aName} é maior de idade.`);
    }else if(age < 18){
        return alert(`${aName} tem ${age} anos de idade. ${aName} é menor de idade`);
    }
};
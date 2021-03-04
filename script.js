const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const imputs = document.getElementById('input');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

// skapar arrayen /listan
const users = []

// här tänker jag att sjävla valideringen är


// const validate = (id) => {
//     const input = document.querySelector(id + 'error');
    
//     if(input.value.trim() ==='') {
//         error.innerText = 'please enter'
//         input.focus();
//         return false;
//     } 
//     else if(input.value.length < 2) {
//         error.innerText = 'please enter'
//         input.focus();
//         return false;
//     }
//     else {
//         error.innerText = ''
//         return true;
//     }
// }

const validatefirstName = () => {
    const firstName = document.getElementById('firstName');
    const firstNameError = document.getElementById('firstName-error');

    if(firstName.value=== ''|| firstName.value.length<2) {
        firstNameError.textContent = 'du måste ange ett förnamn'
    }
}

const validatelastName = () => {
    const lastName = document.getElementById('lastName');
    const lastNameError = document.getElementById('lastName-error');

    if(lastName.value.trim()=== ''|| lastName.value.length<2) {
        lastNameError.textContent = 'du måste ange ett efternamn'
    }
}

const validateemail = () => {
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');

    if(email.value.length<2) {
        emailError.textContent = 'ange giltig email mer än 2 bokstäver inkulsive @'
    }
    else if (email.value.includes('@')){
        return true;
    }
    else{
        emailError.textContent='måste innehålla @'
    }
}

// regex nedan är från lektion 

//const validateEmail = (input) => {
//     let regEx = /^\w+@[a-zA-Z]+?\.[a-zA-Z-]{2,}$/
  
//     if(input.value.trim() === '') {
//       setError(input, 'Email address cannot be empty')
//       return false;
//     } else if (!regEx.test(input.value)) {
//       setError(input, 'Email address is not valid')
//       return false;
//     } else {
//       setSuccess(input)
//       return true;
//     }
//   }


form.addEventListener('submit', (e) => {
    e.preventDefault();

    validatefirstName();
    validatelastName();
    validateemail();
  
})

class User {
    constructor(firstName, lastName, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.id = Date.now().toString()
        this.listener = false;

    }
}

const createUser = (firstName, lastName, email) => {
    const user = new User(firstName, lastName, email);

    // pushar in user i listan /arrayen
    users.push(user);
    output.insertAdjacentHTML('beforeend', newUser(user))
    console.log(users);

    const u = document.querySelectorAll('#output .user')
    u.forEach(user => {

        // if user.listener är false då görs detta och senare sätter vi den till true
        if(!user.listener) {
            user.addEventListener('click', function() {
                console.log('ta bort');
                this.classList.add('slideout')
                // this.remove()
                // this.addEventListener('animationend', () => this.remove())
                setTimeout(() => {
                    this.remove()
                }, 50)
                // console.log(users);
            })
        }

        user.listener = true;
        // console.log(user)
    })
}

const newUser = (user) => {
    let template = `
    <div class="user animate" id="$(user.id)">
    <div class="text">
      <h4>${user.firstName} ${user.lastName}</h4>
      <small>${user.email}</small>
    </div>
    </div>
    `
    return template
}


form.addEventListener('submit', e => {
    e.preventDefault();

if(firstName.value !=='' && lastName.value !=='' && email.value !=='' ){
             createUser(firstName.value, lastName.value, email.value);

        }

})



// const createUser = (firstName, lastName, email) => {
//     const user = new User(firstName, lastName, email);

//     // för att pusha in användaren i listan
//     users.push(user);
//     output.insertAdjacentHTML('beforeend', newUser(user))
//     console.log(user);

//     // skicka ut den och innan eller efter

//     // const u = document.querySelectorAll()
// })

// }
// // skapar en funktion för en ny user och lägger till nytt ID

// const newUser  = new(user) => {
//     let template = `
//     <div class="user animate" id="${user.id}">
//             <div class="text">
//               <h4>${user.firstName} ${user.lastName}</h4>
//               <small>${user.email}</small>
//             </div>
//           </div>
//     `
//     return template 

// }




// // })






// const email = document.querySelector('#email');
// const imputs = document.querySelector('#input')

// regUser.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if(firstName.value !=='' && lastName.value !=='' && email.value !=='' ){
//         createUser(firstName.value, lastName.value, email.value, id.value);
//     }



//     if

//     let firstName = e.currentTarget[0].value;
//     let lastName = e.currentTarget.lastName.value;
//     let email = e.currentTarget['email'].value;

//     console.log(firstName, lastName, email);

//     let user = {
//         firstName: e.target.firstName.value,
//         lastName: document.querySelector('#lastName').value,
//         email: e.currentTarget.email.value,
       
//     }

//     console.log(user)

// })
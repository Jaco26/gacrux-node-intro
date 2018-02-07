

let people = ['Dev', 'Ally', 'Mary', 'Chris', 'ummm'];

function printPeople(){
    for (person of people) {
        console.log(person);
    } 
}

// what you want to share must be exported
module.exports = {
    displayPeople: printPeople,
    people: people,
};
jac
// dont' have access to anything NOT exported
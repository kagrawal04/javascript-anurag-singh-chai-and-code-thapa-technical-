const user = {
    fName: 'Kaushal',
    lName: 'Agrawal',
    age: 25,
    address: {
        city: 'Varanasi'
    },
    getFullName: function(){
        return user.fName + ' ' + user.lName
    }
}

const a = 'city'

console.log(user.getFullName?.());

// console.log(user.address && user.address.city);
// console.log(user.address?.city);
console.log(user.address?.[a]);
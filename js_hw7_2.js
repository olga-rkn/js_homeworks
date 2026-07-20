var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

// option 1
const pattern = /^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@\byahoo\b|\bgmail\b\.\bcom\b$/;

function email_checker(data) {
    for (element of data) {
        const isMatch = pattern.test(element.email);
        if (isMatch) console.log(element.email);
    }   
}

email_checker(arr);


// option 2

arr.forEach(element => {
    if (pattern.test(element.email)) console.log(element.email);
});

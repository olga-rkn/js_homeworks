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


function email_checker(data) {
    const pattern = /^[a-zA-Z0-9]+\.[a-zA-Z0-9]+@\byahoo\b|\bgmail\b\.\bcom\b$/g;
    for (element of data) {
        const isMatch = pattern.test(element.email);
        if (isMatch) console.log(element.email);
    }   
}

email_checker(arr);

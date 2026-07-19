console.log("регулярний вираз, який знайде послідовність з шести або більше символів, які не містять літери «А» (великої або малої):")

function checkA(words) {
    const pattern = /^[^aA]{5,}$/;
    for (word of words) {
        const isMatch = pattern.test(word);
        if (isMatch) {
            console.log("Matched:", word);
        }
    }
}

checkA(['Wonderful', 'Joyful', 'Happiness', 'Time', 'Task', 'Apple']);

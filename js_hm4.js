function checkProbabilityTheory(count) {
  let odd = 0;
  let even = 0;
  let random_value;
  let persentage_odd;
  let persentage_even;
  let count_of_generated_numbers;

  while(count > 0) {
    count--;
    random_value = Math.round(Math.random() * (1001 - 100) + 100);
    //console.log(random_value);

    if (random_value % 2 === 0) {
      odd++;
    } else {
      even++;
    }
  }

  count_of_generated_numbers = odd + even;
  persentage_odd = Math.round(odd/count_of_generated_numbers * 100);
  persentage_even = Math.round(even/count_of_generated_numbers * 100);

  let result = {
    'count_of_generated_numbers': count_of_generated_numbers,
    'odd_numbers': odd,
    'even_number': even,
    'persentage_odd_to_even': persentage_odd.toString() + '%/' + persentage_even.toString() + '%'
  }
  return result;
}

console.log(checkProbabilityTheory(20));

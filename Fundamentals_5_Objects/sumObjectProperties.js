let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let total = 0;
for (let key in salaries){
    total = total + salaries[key];
}

alert(total);
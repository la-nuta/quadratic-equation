module.exports = function solveEquation(equation) {
    let equationNew = equation.replace(/\s/g, '');
    let array = equationNew.split("*");

    let a = array[0];

    let arrayB = array[1].split('^2');
    let b = arrayB[1];

    let arrayC = array[2].split('');
    arrayC.shift();
    let c = arrayC.join('');

    let res1 = Math.round((-b + Math.sqrt(Math.pow(Number(b), 2) - 4 * a * c)) / (2 * a));
    let res2 = Math.round((-b - Math.sqrt(Math.pow(Number(b), 2) - 4 * a * c)) / (2 * a));

    let results = [];

    results.push(res1);
    results.push(res2);

    results.sort((a, b) => {
        return a - b;
    });
    return results;
}

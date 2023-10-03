document.getElementById('calculate').addEventListener('click', function () {
    var input = document.getElementById('main-input').value;
    var list = input.split(',').map(function(item) {
        return parseInt(item.trim());
    });

    var operator = document.getElementById('operator').value;
    var result;

    switch (operator) {
        case 'sum':
            result = list.reduce(function(acc, val) {
                return acc + val;
            }, 0);
            break;

        case 'average':
            result = list.reduce(function(acc, val) {
                return acc + val;
            }, 0) / list.length;
            break;

        case 'min':
            result = Math.min(...list);
            break;

        case 'max':
            result = Math.max(...list);
            break;

        case 'median':
            list.sort(function(a, b) {
                return a - b;
            });
            var middle = Math.floor(list.length / 2);
            if (list.length % 2 === 0) {
                result = (list[middle - 1] + list[middle]) / 2;
            } else {
                result = list[middle];
            }
            break;

        case 'mode':
            var modeMap = {};
            var maxCount = 0;
            list.forEach(function(num) {
                if (!modeMap[num]) modeMap[num] = 1;
                else modeMap[num]++;
                if (modeMap[num] > maxCount) {
                    maxCount = modeMap[num];
                    result = num;
                }
            });
            break;

        case 'range':
            result = Math.max(...list) - Math.min(...list);
            break;

        case 'product':
            result = list.reduce(function(acc, val) {
                return acc * val;
            }, 1);
            break;

        case 'factorial':
            if (list.length === 1) {
                result = factorial(list[0]);
            } else {
                result = 'Factorial operation requires a single number.';
            }
            break;

        case 'gcd':
            result = gcd(list);
            break;

        default:
            result = 'Invalid operator';
            break;
    }

    document.getElementById('output').innerHTML = result;
});

document.getElementById('clear').addEventListener('click', function () {
    document.getElementById('main-input').value = '';
    document.getElementById('operator').value = 'none';
    document.getElementById('output').innerHTML = '';
});

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    for (var i = num - 1; i >= 1; i--) {
        num *= i;
    }
    return num;
}

function gcd(arr) {
    if (arr.length < 2) return 'GCD operation requires at least two numbers.';
    var x = Math.abs(arr[0]);
    var y = Math.abs(arr[1]);
    while(y) {
        var t = y;
        y = x % y;
        x = t;
    }
    for (var i = 2; i < arr.length; i++) {
        x = gcd([x, arr[i]]);
    }
    return x;
}
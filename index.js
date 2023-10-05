document.getElementById('calculate').addEventListener('click', function () {
    var input = document.getElementById('main-input').value;
    
    // Split the input by commas and trim whitespace
    var list = input.split(',').map(item => item.trim());
  
    // Filter out empty strings and non-numeric values
    list = list.filter(item => item !== '' && !isNaN(item));
  
    // Check if the filtered list is empty
    if (list.length === 0) {
      document.getElementById('output').innerHTML = 'Invalid input. Please enter valid numbers separated by commas.';
      return;
    }
  
    var operator = document.getElementById('operator').value;
  
    switch (operator) {
      case 'sum':
        var sum = list.reduce((acc, val) => acc + parseFloat(val), 0);
        document.getElementById('output').innerHTML = sum;
        break;
  
      case 'average':
        var sum = list.reduce((acc, val) => acc + parseFloat(val), 0);
        var average = sum / list.length;
        document.getElementById('output').innerHTML = average;
        break;
  
      case 'min':
        var min = Math.min(...list.map(parseFloat));
        document.getElementById('output').innerHTML = min;
        break;
  
      case 'max':
        var max = Math.max(...list.map(parseFloat));
        document.getElementById('output').innerHTML = max;
        break;
  
      case 'median':
        list.sort((a, b) => parseFloat(a) - parseFloat(b));
        var median;
        if (list.length % 2 === 0) {
          median = (parseFloat(list[list.length / 2]) + parseFloat(list[list.length / 2 - 1])) / 2;
        } else {
          median = parseFloat(list[Math.floor(list.length / 2)]);
        }
        document.getElementById('output').innerHTML = median;
        break;
  
      case 'mode':
        var modeMap = {};
        var maxCount = 0;
        var modes = [];
  
        list.forEach(function (num) {
          var parsedNum = parseFloat(num);
          modeMap[parsedNum] = (modeMap[parsedNum] || 0) + 1;
  
          if (modeMap[parsedNum] > maxCount) {
            modes = [parsedNum];
            maxCount = modeMap[parsedNum];
          } else if (modeMap[parsedNum] === maxCount) {
            modes.push(parsedNum);
          }
        });
  
        document.getElementById('output').innerHTML = modes.join(', ');
        break;
  
      case 'range':
        var min = Math.min(...list.map(parseFloat));
        var max = Math.max(...list.map(parseFloat));
        document.getElementById('output').innerHTML = max - min;
        break;
  
      default:
        document.getElementById('output').innerHTML = 'Invalid operator';
        break;
    }
  });
  
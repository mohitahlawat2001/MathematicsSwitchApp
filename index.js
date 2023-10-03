document.getElementById('calculate').addEventListener('click', function () {
  var list = document.getElementById('main-input').value;
  list = list.replaceAll(' ', '');
  list = list.split(',');

  list = list.map((item, index) => {
    return parseInt(item);
  })

  var operator = document.getElementById('operator').value;

  switch (operator) {
    case 'sum':
      var sum = list.reduce((acc, val) => acc + val, 0);
      document.getElementById('output').innerHTML = sum;
      break;

    case 'average':
      var sum = list.reduce((acc, val) => acc + val, 0);
      document.getElementById('output').innerHTML = sum / list.length;
      break;

    case 'min':
      var min = Math.min(...list);
      document.getElementById('output').innerHTML = min;
      break;

    case 'max':
      var max = Math.max(...list);
      document.getElementById('output').innerHTML = max;
      break;

    case 'median':
      list.sort((a, b) => a - b);
      var median = 0;
      if (list.length % 2 === 0) {
        median = (list[list.length / 2] + list[(list.length / 2) - 1]) / 2;
      } else {
        median = list[Math.floor(list.length / 2)];
      }
      document.getElementById('output').innerHTML = median;
      break;

    case 'mode':
      var counts = {};
      var mode = null;
      var maxCount = 0;
      for (var i = 0; i < list.length; i++) {
        var num = list[i];
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
          maxCount = counts[num];
          mode = num;
        }
      }
      document.getElementById('output').innerHTML = mode;
      break;

    case 'range':
      var min = Math.min(...list);
      var max = Math.max(...list);
      document.getElementById('output').innerHTML = max - min;
      break;

    default:
      document.getElementById('output').innerHTML = 'Invalid operator';
      break;
  }
});

document.getElementById('calculate').addEventListener('click', function () {
  var listInput = document.getElementById('main-input').value;
  var operator = document.getElementById('operator').value;
  var list = listInput.split(',').map(item => parseInt(item.trim(), 10));

  if (isNaN(list[0])) {
    document.getElementById('output').innerHTML = 'Invalid input';
    return;
  }

  var result;

  switch (operator) {
    case 'sum':
      result = list.reduce((acc, val) => acc + val, 0);
      break;

    case 'average':
      result = list.reduce((acc, val) => acc + val, 0) / list.length;
      break;

    case 'min':
      result = Math.min(...list);
      break;

    case 'max':
      result = Math.max(...list);
      break;

    case 'median':
      list.sort((a, b) => a - b);
      var mid = Math.floor(list.length / 2);
      result = list.length % 2 === 0
        ? (list[mid - 1] + list[mid]) / 2
        : list[mid];
      break;

    case 'mode':
      var counts = {};
      list.forEach(item => {
        counts[item] = (counts[item] || 0) + 1;
      });
      var maxCount = Math.max(...Object.values(counts));
      result = Object.keys(counts).find(key => counts[key] === maxCount);
      break;

    case 'range':
      result = Math.max(...list) - Math.min(...list);
      break;

    default:
      result = 'Invalid operator';
  }

  document.getElementById('output').innerHTML = result;
});

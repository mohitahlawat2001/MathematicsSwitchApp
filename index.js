window.onload = function(){
    document.getElementById('calculate').addEventListener('click', function () {
        var list = document.getElementById('main-input').value;
        list = list.replaceAll(' ', '');
        list = list.split(',');
      
        list = list.map((item, index) => {
          return parseFloat(item);
        })
      
        var operator = document.getElementById('operator').value;
      
        switch (operator) { 
            case 'sum':
                var sum = 0;
                for (var i = 0; i < list.length; i++) {
                  sum += parseFloat(list[i]);
                }
                document.getElementById('output').innerHTML = sum;
                break;
            
            case 'average':
                var sum = 0;
                for (var i = 0; i < list.length; i++) {
                  sum += parseFloat(list[i]);
                }
                document.getElementById('output').innerHTML = sum / list.length;
                break;
            
            case 'min':
                var min = list[0];
                for (var i = 0; i < list.length; i++) {
                  if (list[i] < min) {
                    min = list[i];
                  }
                }
                document.getElementById('output').innerHTML = min;
                break;
            
            case 'max':
                var max = list[0];
                for (var i = 0; i < list.length; i++) {
                  if (list[i] > max) {
                    max = list[i];
                  }
                }
                document.getElementById('output').innerHTML = max;
                break;
            
            case 'multiplication':
                var ans = 1;
                for (var i = 0; i < list.length; i++) {
                
                    ans *= list[i];
                  
                }
                document.getElementById('output').innerHTML = ans;
                break;
            
            case 'lcm':
                function findGCD(a, b) {
                    if (b === 0) {
                        return a;
                    } else {
                        return findGCD(b, a % b);
                    }
                }
                let lcm = list[0];
                for (let i = 1; i < list.length; i++) {
                    const currentNumber = list[i];
                    const gcd = findGCD(lcm, currentNumber);
                    lcm = (lcm * currentNumber) / gcd;
                }
                document.getElementById('output').innerHTML = lcm;
                break;
            
            case 'hcf':
                function findGCD(a, b) {
                    if (b === 0) {
                      return a;
                    } else {
                      return findGCD(b, a % b);
                    }
                }
                let gcd = list[0];
                for (let i = 1; i < list.length; i++) {
                    const currentNumber = list[i];
                    gcd = findGCD(gcd, currentNumber);
                }
                document.getElementById('output').innerHTML = gcd;
                break;
            case 'ascending':
                for (var i = 0; i < list.length; i++) {
                    for (var j = 0; j < list.length; j++) {
                    if (list[i] < list[j]) {
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                    }
                }
                
                document.getElementById('output').innerHTML = list;
                break;
            case 'descending':
                for (var i = 0; i < list.length; i++) {
                    for (var j = 0; j < list.length; j++) {
                    if (list[i] > list[j]) {
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                    }
                }
                document.getElementById('output').innerHTML = list;
                break;        
            case 'median':
                // sort list
                for (var i = 0; i < list.length; i++) {
                    for (var j = 0; j < list.length; j++) {
                    if (list[i] < list[j]) {
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
                    }
                }
                // get median
                var median = 0;
                if (list.length % 2 == 0) {
                    median = (list[list.length / 2] + list[(list.length / 2) - 1]) / 2;
                } else {
                    median = list[Math.floor(list.length / 2)];
                }
                document.getElementById('output').innerHTML = median;
                break;
            
            case 'mode':
            // sort list
                for (var i = 0; i < list.length; i++) {
                    for (var j = 0; j < list.length; j++) {
                        if (list[i] < list[j]) {
                            var temp = list[i];
                            list[i] = list[j];
                            list[j] = temp;
                        }
                    }
                }
            // get mode
                var mode = 0;
                var count = 0;
                var maxCount = 0;
                for (var i = 0; i < list.length; i++) {
                    if (list[i] == list[i + 1]) {
                        count++;
                    } else {
                        count = 0;
                    }
                    if (count > maxCount) {
                        maxCount = count;
                        mode = list[i];
                    }
                }
                document.getElementById('output').innerHTML = mode;
                break;
               
            case 'range':
                var min = list[0];
                var max = list[0];
                for (var i = 0; i < list.length; i++) {
                    if (list[i] < min) {
                    min = list[i];
                    }
                    if (list[i] > max) {
                    max = list[i];
                    }
                }
                document.getElementById('output').innerHTML = max - min;
                break;
            
            default:
                document.getElementById('output').innerHTML = 'Invalid operator';
                break;
            
        }
        
    })
    
    let previn = "";
    document.addEventListener("keydown", (e)=>{
        if(e.code == "Space"){
            document.getElementById('main-input').value += ",";
            previn = document.getElementById('main-input').value;
        }
    })
    document.addEventListener("keyup", (e)=>{
        if(/[^\d, ]/g.test(document.getElementById('main-input').value)){
            document.querySelector("#warning").style.display = "block";
            document.getElementById('main-input').value = document.getElementById('main-input').value.replace(/[^\d, ]/g,'');
        }
        else{
            document.querySelector("#warning").style.display = "none";
        }
    })

}
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    let k = parseInt(lis[i].innerHTML, 10)
    k += n
    lis[i].innerHTML = k.toString()
  }
}

function deepestChild() {
  var current = document.querySelectorAll('div#grand-node')
  var next = []

  while(current) {
    
       if (current[0].children.length > 0) {
           next.push(current[0].children)
        }  else {
             if (next.length === 0) {
               return current[0]
             }
          }
    current = next.shift()
  }
}
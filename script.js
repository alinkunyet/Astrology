function calc()
{
  var dict = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 8,
    g: 3,
    h: 5,
    i: 1,
    j: 1,
    k: 2,
    l: 3,
    m: 4,
    n: 5,
    o: 7,
    p: 8,
    q: 1,
    r: 2,
    s: 3,
    t: 4,
    u: 6,
    v: 6,
    w: 6,
    x: 6,
    y: 1,
    z: 7
  }
  var name = document.getElementById("name").value;
  var number = 0;
  name = name.toLowerCase();
  for(var chr of name)
    {
      if(chr.toUpperCase() != chr.toLowerCase())
      {
        number += dict[chr];
      }
    }
  document.getElementById("number").innerHTML = number;
}
// Public College Functionality
document.getElementById("Public").addEventListener("click", publicTrue);
function publicTrue() {
  document.getElementById("Public").classList.toggle('true');
  showPublic();
}
function showPublic() {
  if (document.getElementById('Public').classList.contains('true')) {
    document.getElementsByClassName('publicU')[0].style.display = "block";
    } else {
      document.getElementsByClassName('publicU')[0].style.display = "none";
    }
}

//Private Colelge Functionality
document.getElementById("Private").addEventListener("click", privateTrue);
function privateTrue() {
  document.getElementById("Private").classList.toggle('true');
  showPrivate();
}
function showPrivate() {
  if (document.getElementById('Private').classList.contains('true')) {
    document.getElementsByClassName('privateU')[0].style.display = "block"
    } else {
      document.getElementsByClassName('privateU')[0].style.display = "none"
    }
}

//less than Twenty Five K  Functionality  
document.getElementById("tf").addEventListener("click", tfTrue);
function tfTrue() {
  document.getElementById("tf").classList.toggle('true');
  showtf();
}
function showtf() {
    if (document.getElementById('tf').classList.contains('true')) {
      document.getElementsByClassName('tfU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('tfU')[0].style.display = "none"
    }
}

//less than Fourty K  Functionality  
document.getElementById("fo").addEventListener("click", foTrue);
function foTrue() {
  document.getElementById("fo").classList.toggle('true');
  showfo();
  showfo1();
}
function showfo() {
    if (document.getElementById('fo').classList.contains('true')) {
      document.getElementsByClassName('foU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('foU')[0].style.display = "none"
    }
}
function showfo1() {
    if (document.getElementById('fo').classList.contains('true')) {
      document.getElementsByClassName('foU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('foU')[1].style.display = "none"
    }
}


//less than Fifty K  Functionality  
document.getElementById("ff").addEventListener("click", ffTrue);
function ffTrue() {
  document.getElementById("ff").classList.toggle('true');
  showff();
}
function showff() {
    if (document.getElementById('ff').classList.contains('true')) {
      document.getElementsByClassName('ffU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('ffU')[0].style.display = "none"
    }
}

//less than Sixty K  Functionality  
document.getElementById("st").addEventListener("click", stTrue);
function stTrue() {
  document.getElementById("st").classList.toggle('true');
  showst();
}
function showst() {
    if (document.getElementById('st').classList.contains('true')) {
      document.getElementsByClassName('stU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('stU')[0].style.display = "none"
    }
}

//West Functionality
document.getElementById("we").addEventListener("click", weTrue);
function weTrue() {
  document.getElementById("we").classList.toggle('true');
  showwe();
}
function showwe() {
    if (document.getElementById('we').classList.contains('true')) {
      document.getElementsByClassName('weU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('weU')[0].style.display = "none"
    }
}

//MidWest Functionality
document.getElementById("mw").addEventListener("click", mwTrue);
function mwTrue() {
  document.getElementById("mw").classList.toggle('true');
  showmw();
}
function showmw() {
    if (document.getElementById('mw').classList.contains('true')) {
      document.getElementsByClassName('mwU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('mwU')[0].style.display = "none"
    }
}

//SouthWest Functionality
document.getElementById("sw").addEventListener("click", swTrue);
function swTrue() {
  document.getElementById("sw").classList.toggle('true');
  showsw();
}
function showsw() {
    if (document.getElementById('sw').classList.contains('true')) {
      document.getElementsByClassName('swU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('swU')[0].style.display = "none"
    }
}

//Southeast Functionality
document.getElementById("se").addEventListener("click", seTrue);
function seTrue() {
  document.getElementById("se").classList.toggle('true');
  showse();
}
function showse() {
    if (document.getElementById('se').classList.contains('true')) {
      document.getElementsByClassName('seU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('seU')[0].style.display = "none"
    }
}

//Northeast Functionality
document.getElementById("ne").addEventListener("click", neTrue);
function neTrue() {
  document.getElementById("ne").classList.toggle('true');
  showne();
}
function showne() {
    if (document.getElementById('ne').classList.contains('true')) {
      document.getElementsByClassName('neU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('neU')[0].style.display = "none"
    }
}

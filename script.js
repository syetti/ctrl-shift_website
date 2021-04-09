// Public College Functionality
document.getElementById("Public").addEventListener("click", publicTrue);
function publicTrue() {
  document.getElementById("Public").classList.toggle('true');
  showPublic();
  showPublic1();
  showPublic2();
  showPublic3();
  showPublic3();
  showPublic4();
  showPublic5();
}
function showPublic() {
  if (document.getElementById('Public').classList.contains('true')) {
    document.getElementsByClassName('publicU')[0].style.display = "block";
    } else {
      document.getElementsByClassName('publicU')[0].style.display = "none";
    }
}
function showPublic1() {
  if (document.getElementById('Public').classList.contains('true')) {
    document.getElementsByClassName('publicU')[1].style.display = "block";
    } else {
      document.getElementsByClassName('publicU')[1].style.display = "none";
    }
}
function showPublic2() {
  if (document.getElementById('Public').classList.contains('true')) {
    document.getElementsByClassName('publicU')[2].style.display = "block";
    } else {
      document.getElementsByClassName('publicU')[2].style.display = "none";
    }
}
function showPublic3() {
  if (document.getElementById('Public').classList.contains('true')) {
    document.getElementsByClassName('publicU')[3].style.display = "block";
    } else {
      document.getElementsByClassName('publicU')[3].style.display = "none";
    }
}
function showPublic4() {
  if (document.getElementById('Public').classList.contains('true')) {
    document.getElementsByClassName('publicU')[4].style.display = "block";
    } else {
      document.getElementsByClassName('publicU')[4].style.display = "none";
    }
}
function showPublic5() {
  if (document.getElementById('Public').classList.contains('true')) {
    document.getElementsByClassName('publicU')[5].style.display = "block";
    } else {
      document.getElementsByClassName('publicU')[5].style.display = "none";
    }
}

//Private Colelge Functionality
document.getElementById("Private").addEventListener("click", privateTrue);
function privateTrue() {
  document.getElementById("Private").classList.toggle('true');
  showPrivate();
  showPrivate1();
  showPrivate2();
  showPrivate3();
  showPrivate4();
  showPrivate5();
}
function showPrivate() {
  if (document.getElementById('Private').classList.contains('true')) {
    document.getElementsByClassName('privateU')[0].style.display = "block"
    } else {
      document.getElementsByClassName('privateU')[0].style.display = "none"
    }
}
function showPrivate1() {
  if (document.getElementById('Private').classList.contains('true')) {
    document.getElementsByClassName('privateU')[1].style.display = "block"
    } else {
      document.getElementsByClassName('privateU')[1].style.display = "none"
    }
}
function showPrivate2() {
  if (document.getElementById('Private').classList.contains('true')) {
    document.getElementsByClassName('privateU')[2].style.display = "block"
    } else {
      document.getElementsByClassName('privateU')[2].style.display = "none"
    }
}
function showPrivate3() {
  if (document.getElementById('Private').classList.contains('true')) {
    document.getElementsByClassName('privateU')[3].style.display = "block"
    } else {
      document.getElementsByClassName('privateU')[3].style.display = "none"
    }
}
function showPrivate4() {
  if (document.getElementById('Private').classList.contains('true')) {
    document.getElementsByClassName('privateU')[4].style.display = "block"
    } else {
      document.getElementsByClassName('privateU')[4].style.display = "none"
    }
}
function showPrivate5() {
  if (document.getElementById('Private').classList.contains('true')) {
    document.getElementsByClassName('privateU')[5].style.display = "block"
    } else {
      document.getElementsByClassName('privateU')[5].style.display = "none"
    }
}
//less than Twenty Five K  Functionality  
document.getElementById("tf").addEventListener("click", tfTrue);
function tfTrue() {
  document.getElementById("tf").classList.toggle('true');
  showtf();
  showtf1();
  showtf2();
  showtf3();
  showtf4();
}
function showtf() {
    if (document.getElementById('tf').classList.contains('true')) {
      document.getElementsByClassName('tfU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('tfU')[0].style.display = "none"
    }
}
function showtf1() {
    if (document.getElementById('tf').classList.contains('true')) {
      document.getElementsByClassName('tfU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('tfU')[1].style.display = "none"
    }
}
function showtf2() {
    if (document.getElementById('tf').classList.contains('true')) {
      document.getElementsByClassName('tfU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('tfU')[2].style.display = "none"
    }
}
function showtf3() {
    if (document.getElementById('tf').classList.contains('true')) {
      document.getElementsByClassName('tfU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('tfU')[3].style.display = "none"
    }
}
function showtf4() {
    if (document.getElementById('tf').classList.contains('true')) {
      document.getElementsByClassName('tfU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('tfU')[4].style.display = "none"
    }
}
//less than Thirty K Functionality
document.getElementById("tt").addEventListener("click", ttTrue);
function ttTrue() {
  document.getElementById("tt").classList.toggle('true');
  showtt();
  showtt1();
  showtt2();
  showtt3();
  showtt4();
  showtt5();
}
function showtt() {
    if (document.getElementById('tt').classList.contains('true')) {
      document.getElementsByClassName('ttU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('ttU')[0].style.display = "none"
    }
}
function showtt1() {
    if (document.getElementById('tt').classList.contains('true')) {
      document.getElementsByClassName('ttU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('ttU')[1].style.display = "none"
    }
}
function showtt2() {
    if (document.getElementById('tt').classList.contains('true')) {
      document.getElementsByClassName('ttU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('ttU')[2].style.display = "none"
    }
}
function showtt3() {
    if (document.getElementById('tt').classList.contains('true')) {
      document.getElementsByClassName('ttU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('ttU')[3].style.display = "none"
    }
}
function showtt4() {
    if (document.getElementById('tt').classList.contains('true')) {
      document.getElementsByClassName('ttU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('ttU')[4].style.display = "none"
    }
}
function showtt5() {
    if (document.getElementById('tt').classList.contains('true')) {
      document.getElementsByClassName('ttU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('ttU')[5].style.display = "none"
    }
}
//less than Fourty K  Functionality  
document.getElementById("fo").addEventListener("click", foTrue);
function foTrue() {
  document.getElementById("fo").classList.toggle('true');
  showfo();
  showfo1();
  showfo2();
  showfo3();
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
function showfo2() {
    if (document.getElementById('fo').classList.contains('true')) {
      document.getElementsByClassName('foU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('foU')[2].style.display = "none"
    }
}
function showfo3() {
    if (document.getElementById('fo').classList.contains('true')) {
      document.getElementsByClassName('foU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('foU')[3].style.display = "none"
    }
}
function showfo4() {
    if (document.getElementById('fo').classList.contains('true')) {
      document.getElementsByClassName('foU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('foU')[4].style.display = "none"
    }
}
function showfo5() {
    if (document.getElementById('fo').classList.contains('true')) {
      document.getElementsByClassName('foU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('foU')[5].style.display = "none"
    }
}
//less than Fifty K  Functionality  
document.getElementById("ff").addEventListener("click", ffTrue);
function ffTrue() {
  document.getElementById("ff").classList.toggle('true');
  showff();
  showff1();
  showff2();
  showff3();
  showff4();
  showff5();
}
function showff() {
    if (document.getElementById('ff').classList.contains('true')) {
      document.getElementsByClassName('ffU' )[0].style.display = "block"
      } else {
        document.getElementsByClassName('ffU')[0].style.display = "none"
    }
}
function showff1() {
    if (document.getElementById('ff').classList.contains('true')) {
      document.getElementsByClassName('ffU' )[1].style.display = "block"
      } else {
        document.getElementsByClassName('ffU')[1].style.display = "none"
    }
}
function showff2() {
    if (document.getElementById('ff').classList.contains('true')) {
      document.getElementsByClassName('ffU' )[2].style.display = "block"
      } else {
        document.getElementsByClassName('ffU')[2].style.display = "none"
    }
}
function showff3() {
    if (document.getElementById('ff').classList.contains('true')) {
      document.getElementsByClassName('ffU' )[3].style.display = "block"
      } else {
        document.getElementsByClassName('ffU')[3].style.display = "none"
    }
}
function showff4() {
    if (document.getElementById('ff').classList.contains('true')) {
      document.getElementsByClassName('ffU' )[4].style.display = "block"
      } else {
        document.getElementsByClassName('ffU')[4].style.display = "none"
    }
}
function showff5() {
    if (document.getElementById('ff').classList.contains('true')) {
      document.getElementsByClassName('ffU' )[5].style.display = "block"
      } else {
        document.getElementsByClassName('ffU')[5].style.display = "none"
    }
}
//less than Sixty K  Functionality  
document.getElementById("st").addEventListener("click", stTrue);
function stTrue() {
  document.getElementById("st").classList.toggle('true');
    showst();
    showst1();
    showst2();
    showst3();
    showst4();
    showst5();
}
function showst() {
    if (document.getElementById('st').classList.contains('true')) {
      document.getElementsByClassName('stU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('stU')[0].style.display = "none"
    }
}
function showst1() {
    if (document.getElementById('st').classList.contains('true')) {
      document.getElementsByClassName('stU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('stU')[1].style.display = "none"
    }
}
function showst2() {
    if (document.getElementById('st').classList.contains('true')) {
      document.getElementsByClassName('stU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('stU')[2].style.display = "none"
    }
}
function showst3() {
    if (document.getElementById('st').classList.contains('true')) {
      document.getElementsByClassName('stU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('stU')[3].style.display = "none"
    }
}
function showst4() {
    if (document.getElementById('st').classList.contains('true')) {
      document.getElementsByClassName('stU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('stU')[4].style.display = "none"
    }
}
function showst5() {
    if (document.getElementById('st').classList.contains('true')) {
      document.getElementsByClassName('stU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('stU')[5].style.display = "none"
    }
}
//West Functionality
document.getElementById("we").addEventListener("click", weTrue);
function weTrue() {
  document.getElementById("we").classList.toggle('true');
  showwe();
  showwe1();
  showwe2();
  showwe3();
  showwe4();
  showwe5();
}
function showwe() {
    if (document.getElementById('we').classList.contains('true')) {
      document.getElementsByClassName('weU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('weU')[0].style.display = "none"
    }
}
function showwe1() {
    if (document.getElementById('we').classList.contains('true')) {
      document.getElementsByClassName('weU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('weU')[1].style.display = "none"
    }
}
function showwe2() {
    if (document.getElementById('we').classList.contains('true')) {
      document.getElementsByClassName('weU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('weU')[2].style.display = "none"
    }
}
function showwe3() {
    if (document.getElementById('we').classList.contains('true')) {
      document.getElementsByClassName('weU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('weU')[3].style.display = "none"
    }
}
function showwe4() {
    if (document.getElementById('we').classList.contains('true')) {
      document.getElementsByClassName('weU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('weU')[4].style.display = "none"
    }
}
function showwe5() {
    if (document.getElementById('we').classList.contains('true')) {
      document.getElementsByClassName('weU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('weU')[5].style.display = "none"
    }
}
//MidWest Functionality
document.getElementById("mw").addEventListener("click", mwTrue);
function mwTrue() {
  document.getElementById("mw").classList.toggle('true');
  showmw();
  showmw1();
  showmw2();
  showmw3();
  showmw4();
  showmw5();
}
function showmw() {
    if (document.getElementById('mw').classList.contains('true')) {
      document.getElementsByClassName('mwU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('mwU')[0].style.display = "none"
    }
}
function showmw1() {
    if (document.getElementById('mw').classList.contains('true')) {
      document.getElementsByClassName('mwU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('mwU')[1].style.display = "none"
    }
}
function showmw2() {
    if (document.getElementById('mw').classList.contains('true')) {
      document.getElementsByClassName('mwU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('mwU')[2].style.display = "none"
    }
}
function showmw3() {
    if (document.getElementById('mw').classList.contains('true')) {
      document.getElementsByClassName('mwU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('mwU')[3].style.display = "none"
    }
}
function showmw4() {
    if (document.getElementById('mw').classList.contains('true')) {
      document.getElementsByClassName('mwU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('mwU')[4].style.display = "none"
    }
}
function showmw5() {
    if (document.getElementById('mw').classList.contains('true')) {
      document.getElementsByClassName('mwU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('mwU')[5].style.display = "none"
    }
}
//SouthWest Functionality
document.getElementById("sw").addEventListener("click", swTrue);
function swTrue() {
  document.getElementById("sw").classList.toggle('true');
  showsw();
  showsw1();
  showsw2();
  showsw3();
  showsw4();
  showsw5();
}
function showsw() {
    if (document.getElementById('sw').classList.contains('true')) {
      document.getElementsByClassName('swU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('swU')[0].style.display = "none"
    }
}
function showsw1() {
    if (document.getElementById('sw').classList.contains('true')) {
      document.getElementsByClassName('swU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('swU')[1].style.display = "none"
    }
}
function showsw2() {
    if (document.getElementById('sw').classList.contains('true')) {
      document.getElementsByClassName('swU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('swU')[2].style.display = "none"
    }
}
function showsw3() {
    if (document.getElementById('sw').classList.contains('true')) {
      document.getElementsByClassName('swU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('swU')[3].style.display = "none"
    }
}
function showsw4() {
    if (document.getElementById('sw').classList.contains('true')) {
      document.getElementsByClassName('swU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('swU')[4].style.display = "none"
    }
}
function showsw4() {
    if (document.getElementById('sw').classList.contains('true')) {
      document.getElementsByClassName('swU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('swU')[4].style.display = "none"
    }
}
function showsw5() {
    if (document.getElementById('sw').classList.contains('true')) {
      document.getElementsByClassName('swU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('swU')[5].style.display = "none"
    }
}
//Southeast Functionality
document.getElementById("se").addEventListener("click", seTrue);
function seTrue() {
  document.getElementById("se").classList.toggle('true');
  showse();
  showse1();
  showse2();
  showse3();
  showse4();
  showse5();
}
function showse() {
    if (document.getElementById('se').classList.contains('true')) {
      document.getElementsByClassName('seU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('seU')[0].style.display = "none"
    }
}
function showse1() {
    if (document.getElementById('se').classList.contains('true')) {
      document.getElementsByClassName('seU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('seU')[1].style.display = "none"
    }
}
function showse2() {
    if (document.getElementById('se').classList.contains('true')) {
      document.getElementsByClassName('seU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('seU')[2].style.display = "none"
    }
}
function showse3() {
    if (document.getElementById('se').classList.contains('true')) {
      document.getElementsByClassName('seU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('seU')[3].style.display = "none"
    }
}
function showse4() {
    if (document.getElementById('se').classList.contains('true')) {
      document.getElementsByClassName('seU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('seU')[4].style.display = "none"
    }
}
function showse5() {
    if (document.getElementById('se').classList.contains('true')) {
      document.getElementsByClassName('seU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('seU')[5].style.display = "none"
    }
}
//Northeast Functionality
document.getElementById("ne").addEventListener("click", neTrue);
function neTrue() {
  document.getElementById("ne").classList.toggle('true');
  showne();
  showne1();
  showne2();
  showne3();
  showne4();
  showne5();
}
function showne() {
    if (document.getElementById('ne').classList.contains('true')) {
      document.getElementsByClassName('neU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('neU')[0].style.display = "none"
    }
}
function showne1() {
    if (document.getElementById('ne').classList.contains('true')) {
      document.getElementsByClassName('neU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('neU')[1].style.display = "none"
    }
}
function showne2() {
    if (document.getElementById('ne').classList.contains('true')) {
      document.getElementsByClassName('neU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('neU')[2].style.display = "none"
    }
}
function showne3() {
    if (document.getElementById('ne').classList.contains('true')) {
      document.getElementsByClassName('neU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('neU')[3].style.display = "none"
    }
}
function showne4() {
    if (document.getElementById('ne').classList.contains('true')) {
      document.getElementsByClassName('neU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('neU')[4].style.display = "none"
    }
}
function showne5() {
    if (document.getElementById('ne').classList.contains('true')) {
      document.getElementsByClassName('neU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('neU')[5].style.display = "none"
    }
}

//Computer Science Major Functionality
document.getElementById("cs").addEventListener("click", csTrue);
function csTrue() {
  document.getElementById("cs").classList.toggle('true');
  showcs();
  showcs1();
  showcs2();
  showcs3();
  showcs4();
  showcs5();
  showcs6();
  showcs7();
  showcs8();
  showcs9();
  showcs10();
}
function showcs() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[0].style.display = "none"
    }
}
function showcs1() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[1].style.display = "none"
    }
}
function showcs2() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[2].style.display = "none"
    }
}
function showcs3() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[3].style.display = "none"
    }
}
function showcs4() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[4].style.display = "none"
    }
}
function showcs5() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[5].style.display = "none"
    }
}
function showcs6() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[6].style.display = "none"
    }
}
function showcs7() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[7].style.display = "none"
    }
}
function showcs8() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[8].style.display = "none"
    }
}
function showcs9() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[9].style.display = "none"
    }
}
function showcs10() {
    if (document.getElementById('cs').classList.contains('true')) {
      document.getElementsByClassName('csU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('csU')[10].style.display = "none"
    }
}
// Engineering Major Functionality
document.getElementById("en").addEventListener("click", enTrue);
function enTrue() {
  document.getElementById("en").classList.toggle('true');
  showen();
  showen1();
  showen2();
  showen3();
  showen4();
  showen5();
}
function showen() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[0].style.display = "none"
    }
}
function showen1() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[1].style.display = "none"
    }
}
function showen2() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[2].style.display = "none"
    }
}
function showen3() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[3].style.display = "none"
    }
}
function showen4() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[4].style.display = "none"
    }
}
function showen5() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[5].style.display = "none"
    }
}
function showen6() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[6].style.display = "none"
    }
}
function showen7() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[7].style.display = "none"
    }
}
function showen8() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[8].style.display = "none"
    }
}
function showen9() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[9].style.display = "none"
    }
}
function showen10() {
    if (document.getElementById('en').classList.contains('true')) {
      document.getElementsByClassName('enU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('enU')[10].style.display = "none"
    }
}
// Business Major Functionality
document.getElementById("bu").addEventListener("click", buTrue);
function buTrue() {
  document.getElementById("bu").classList.toggle('true');
  showbu();
  showbu1();
  showbu2();
  showbu3();
  showbu4();
  showbu5();
  showbu6();
  showbu7();
  showbu8();
  showbu9();
  showbu10();
}
function showbu() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[0].style.display = "none"
    }
}
function showbu1() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[1].style.display = "none"
    }
}
function showbu2() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[2].style.display = "none"
    }
}
function showbu3() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[3].style.display = "none"
    }
}
function showbu4() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[4].style.display = "none"
    }
}
function showbu5() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[5].style.display = "none"
    }
}
function showbu6() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[6].style.display = "none"
    }
}
function showbu7() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[7].style.display = "none"
    }
}
function showbu8() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[8].style.display = "none"
    }
}
function showbu9() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[9].style.display = "none"
    }
}
function showbu10() {
    if (document.getElementById('bu').classList.contains('true')) {
      document.getElementsByClassName('buU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('buU')[10].style.display = "none"
    }
}
//communications Major Functionality
document.getElementById("co").addEventListener("click", coTrue);
function coTrue() {
  document.getElementById("co").classList.toggle('true');
  showco();
  showco1();
  showco2();
  showco3();
  showco4();
  showco5();
  showco6();
  showco7();
  showco8();
  showco9();
  showco10();
}
function showco() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[0].style.display = "none"
    }
}
function showco1() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[1].style.display = "none"
    }
}
function showco2() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[2].style.display = "none"
    }
}
function showco3() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[3].style.display = "none"
    }
}
function showco4() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[4].style.display = "none"
    }
}
function showco5() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[5].style.display = "none"
    }
}
function showco6() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[6].style.display = "none"
    }
}
function showco7() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[7].style.display = "none"
    }
}
function showco8() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[8].style.display = "none"
    }
}
function showco9() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[9].style.display = "none"
    }
}
function showco10() {
    if (document.getElementById('co').classList.contains('true')) {
      document.getElementsByClassName('coU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('coU')[10].style.display = "none"
    }
}
// Educaiton Major Functionality
document.getElementById("ed").addEventListener("click", edTrue);
function edTrue() {
  document.getElementById("ed").classList.toggle('true');
  showed();
  showed1();
  showed2();
  showed3();
  showed4();
  showed5();
  showed6();
  showed7();
  showed8();
  showed9();
  showed10();
}
function showed() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[0].style.display = "none"
    }
}
function showed1() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[1].style.display = "none"
    }
}
function showed2() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[2].style.display = "none"
    }
}
function showed3() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[3].style.display = "none"
    }
}
function showed4() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[4].style.display = "none"
    }
}
function showed5() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[5].style.display = "none"
    }
}
function showed6() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[6].style.display = "none"
    }
}
function showed7() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[7].style.display = "none"
    }
}
function showed8() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[8].style.display = "none"
    }
}
function showed9() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[9].style.display = "none"
    }
}
function showed10() {
    if (document.getElementById('ed').classList.contains('true')) {
      document.getElementsByClassName('edU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('edU')[10].style.display = "none"
    }
}
// English Major Functionality
document.getElementById("eng").addEventListener("click", engTrue);
function engTrue() {
  document.getElementById("eng").classList.toggle('true');
  showeng();
  showeng1();
  showeng2();
  showeng3();
  showeng4();
  showeng5();
  showeng6();
  showeng7();
  showeng8();
  showeng9();
  showeng10();
}
function showeng() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[0].style.display = "none"
    }
}
function showeng1() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[1].style.display = "none"
    }
}
function showeng2() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[2].style.display = "none"
    }
}
function showeng3() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[3].style.display = "none"
    }
}
function showeng4() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[4].style.display = "none"
    }
}
function showeng5() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[5].style.display = "none"
    }
}
function showeng6() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[6].style.display = "none"
    }
}
function showeng7() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[7].style.display = "none"
    }
}
function showeng8() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[8].style.display = "none"
    }
}
function showeng9() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[9].style.display = "none"
    }
}
function showeng10() {
    if (document.getElementById('eng').classList.contains('true')) {
      document.getElementsByClassName('engU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('engU')[10].style.display = "none"
    }
}
//Health Major Functionality
document.getElementById("he").addEventListener("click", heTrue);
function heTrue() {
  document.getElementById("he").classList.toggle('true');
  showhe();
  showhe1();
  showhe2();
  showhe3();
  showhe4();
  showhe5();
  showhe6();
  showhe7();
  showhe8();
  showhe9();
  showhe10();
}
function showhe() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[0].style.display = "none"
    }
}
function showhe1() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[1].style.display = "none"
    }
}
function showhe2() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[2].style.display = "none"
    }
}
function showhe3() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[3].style.display = "none"
    }
}
function showhe4() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[4].style.display = "none"
    }
}
function showhe5() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[5].style.display = "none"
    }
}
function showhe6() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[6].style.display = "none"
    }
}
function showhe7() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[7].style.display = "none"
    }
}
function showhe8() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[8].style.display = "none"
    }
}
function showhe9() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[9].style.display = "none"
    }
}
function showhe10() {
    if (document.getElementById('he').classList.contains('true')) {
      document.getElementsByClassName('heU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('heU')[10].style.display = "none"
    }
}
//Law Major Functionality
document.getElementById("law").addEventListener("click", lawTrue);
function lawTrue() {
  document.getElementById("law").classList.toggle('true');
  showlaw();
  showlaw1();
  showlaw2();
  showlaw3();
  showlaw4();
  showlaw5();
  showlaw6();
  showlaw7();
  showlaw8();
  showlaw9();
  showlaw10();
}
function showlaw() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[0].style.display = "none"
    }
}
function showlaw1() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[1].style.display = "none"
    }
}
function showlaw2() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[2].style.display = "none"
    }
}
function showlaw3() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[3].style.display = "none"
    }
}
function showlaw4() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[4].style.display = "none"
    }
}
function showlaw5() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[5].style.display = "none"
    }
}
function showlaw6() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[6].style.display = "none"
    }
}
function showlaw7() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[7].style.display = "none"
    }
}
function showlaw8() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[8].style.display = "none"
    }
}
function showlaw9() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[9].style.display = "none"
    }
}
function showlaw10() {
    if (document.getElementById('law').classList.contains('true')) {
      document.getElementsByClassName('lawU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('lawU')[10].style.display = "none"
    }
}
//Art Major Functionality
document.getElementById("art").addEventListener("click", artTrue);
function artTrue() {
  document.getElementById("art").classList.toggle('true');
  showart();
  showart1();
  showart2();
  showart3();
  showart4();
  showart5();
  showart6();
  showart7();
  showart8();
  showart9();
  showart10();
}
function showart() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[0].style.display = "none"
    }
}
function showart1() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[1].style.display = "none"
    }
}
function showart2() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[2].style.display = "none"
    }
}
function showart3() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[30].style.display = "none"
    }
}
function showart4() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[4].style.display = "none"
    }
}
function showart5() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[5].style.display = "none"
    }
}
function showart6() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[6].style.display = "none"
    }
}
function showart7() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[7].style.display = "none"
    }
}
function showart8() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[8].style.display = "none"
    }
}
function showart9() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[9].style.display = "none"
    }
}
function showart10() {
    if (document.getElementById('art').classList.contains('true')) {
      document.getElementsByClassName('artU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('artU')[10].style.display = "none"
    }
}
//Science Major Functionality
document.getElementById("sc").addEventListener("click", scTrue);
function scTrue() {
  document.getElementById("sc").classList.toggle('true');
  showsc();
  showsc1();
  showsc2();
  showsc3();
  showsc4();
  showsc5();
  showsc6();
  showsc7();
  showsc8();
  showsc9();
  showsc10();
}
function showsc() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[0].style.display = "none"
    }
}
function showsc1() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[1].style.display = "none"
    }
}
function showsc2() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[2].style.display = "none"
    }
}
function showsc3() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[3].style.display = "none"
    }
}
function showsc4() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[4].style.display = "none"
    }
}
function showsc5() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[5].style.display = "none"
    }
}
function showsc6() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[6].style.display = "none"
    }
}
function showsc7() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[7].style.display = "none"
    }
}
function showsc8() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[8].style.display = "none"
    }
}
function showsc9() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[9].style.display = "none"
    }
}
function showsc10() {
    if (document.getElementById('sc').classList.contains('true')) {
      document.getElementsByClassName('scU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('scU')[10].style.display = "none"
    }
}
// Math Major Functionality
document.getElementById("math").addEventListener("click", mathTrue);
function mathTrue() {
  document.getElementById("math").classList.toggle('true');
  showmath();
  showmath1();
  showmath2();
  showmath3();
  showmath4();
  showmath5();
  showmath6();
  showmath7();
  showmath8();
  showmath9();
  showmath10();
}
function showmath() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[0].style.display = "none"
    }
}
function showmath1() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[1].style.display = "none"
    }
}
function showmath2() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[2].style.display = "none"
    }
}
function showmath3() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[3].style.display = "none"
    }
}
function showmath4() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[4].style.display = "none"
    }
}
function showmath5() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[5].style.display = "none"
    }
}
function showmath6() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[6].style.display = "none"
    }
}
function showmath7() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[7].style.display = "none"
    }
}
function showmath8() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[8].style.display = "none"
    }
}
function showmath9() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[9].style.display = "none"
    }
}
function showmath10() {
    if (document.getElementById('math').classList.contains('true')) {
      document.getElementsByClassName('mathU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('mathU')[10].style.display = "none"
    }
}
//History Major Functionality
document.getElementById("hist").addEventListener("click", histTrue);
function histTrue() {
  document.getElementById("hist").classList.toggle('true');
  showhist();
  showhist1();
  showhist2();
  showhist3();
  showhist4();
  showhist5();
  showhist6();
  showhist7();
  showhist8();
  showhist9();
  showhist10();
}
function showhist() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[0].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[0].style.display = "none"
    }
}
function showhist1() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[1].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[1].style.display = "none"
    }
}
function showhist2() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[2].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[2].style.display = "none"
    }
}
function showhist3() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[3].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[3].style.display = "none"
    }
}
function showhist4() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[4].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[4].style.display = "none"
    }
}
function showhist5() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[5].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[5].style.display = "none"
    }
}
function showhist6() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[6].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[6].style.display = "none"
    }
}
function showhist7() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[7].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[7].style.display = "none"
    }
}
function showhist8() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[8].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[8].style.display = "none"
    }
}
function showhist9() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[9].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[9].style.display = "none"
    }
}
function showhist10() {
    if (document.getElementById('hist').classList.contains('true')) {
      document.getElementsByClassName('histU')[10].style.display = "block"
      } else {
        document.getElementsByClassName('histU')[10].style.display = "none"
    }
}
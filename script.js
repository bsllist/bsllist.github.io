document.body.innerHTML = `
<img src="logo.png" width="${innerWidth - 5}" height="${innerWidth * 0.0851165002}"></img>
<div id="list" levels>${display()}</div><br><br>
<div pusab big>Website by nurdPi, List by Paintball</div>
`
function display() {
  var
    lol = ''
    ;
  for (i in list) {
    item = list[i];
    piss = ""
    if (Math.floor(i / 2) == i / 2) {
      ass = "b"
    }
    else {
      ass = "a"
    }
    if (i == 0) {
      piss += "top"
    }
    if (i == list.length - 1) {
      piss += " bottom"
    }
    
    lol += `
      <div ${piss} ${ass} level><div arial normal>#${parseInt(i)+1}: <a href="http://${item[2]}"><color blue>${item[0]}</color></a> ${item[1]} <br> <div small>ID: ${item[3]}; FPS: ${item[4]}; WR: ${item[5]}</div></div></div>
    `;
  }
  return lol;
}
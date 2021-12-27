  /* set up display */
document.body.innerHTML = 
`
<img src="logo.png" width="${innerWidth - 5}" height="${innerWidth * 0.0851165002}">
</img>

<img src="info.png" style="
  position: fixed;
  top: 0px
  right: 0px
">
</img>

<div id="list" levels>${display()}
</div>

<br>
<br>

<div pusab big>
Website by nurdPi, List by Paintball
</div>
`
  /* display function, turns level data into html */
function display() {
  var
    output = ''
  ;
  for (i in list) {
      /* variables */
    var 
      item = list[i]
      , topbottom = ""
      , bgcol = ""
    ;
    
      /* styling */
    // if i is an even number then the background will be darker
    if (Math.floor(i / 2) == i / 2) {
      bgcol = "b";
    }
    else {
      bgcol = "a";
    }
    
    // if we're on the first level then smooth out the top corners
    if (i == 0) {
      topbottom = "top";
    }
    // if we're on the last level then smooth out the bottom corners
    if (i == list.length - 1) {
      topbottom = "bottom";
    }
    
    /* and then we lay out the information into a set format */
    output += `
      <div ${topbottom} ${bgcol} level>                                                   /* level container                                               */
        <div arial normal>                                                                /* level info                                                    */
          #${parseInt(i)+1}:                                                              /* level placement                                               */
          <a href="http://${item[2]}">                                                    /* level video                                                   */
            <color blue>${item[0]}</color>                                                /* level name (blue color because it's a link)                   */
          </a>                                                                            /* I just wanted to put a comment here for aesthetic reasons lol */
          ${item[1]} <br> <div small>ID: ${item[3]}; FPS: ${item[4]}; WR: ${item[5]}      /* misc level data                                               */
        </div>
      </div>
    </div>
    `;
  }
  return output;
}

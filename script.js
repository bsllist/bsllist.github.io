  /* set up display */
document.body.innerHTML = 
`
<img src="logo.png" width="${innerWidth - (innerWidth * 0.02)}" height="${(innerWidth - (innerWidth * 0.02)) * 0.0851165002}" style="
  margin-left: -30px;
">
</img>

<info onclick="info.setAttribute('show', true)" style="
  position: fixed;
  top: 4%;
  right: 2%;
">
</info>
<div id="list" levels>${display()}
</div>

<br>
<br>

<menu show=false>
  <div arial small>
    This is a website made by  
    <img src="nurd.png" width="20px" height="20px"></img>nurdPi and 
    <img src="wibb.png" width="20px" height="20px"></img>Wibbuffey
    <br>
    <color blue><a href="https://docs.google.com/document/d/1zHOH1r_tKI7MNV08tNRaplz0AhlhNIi3RtWSGYCwDQs/edit">List Document</a></color>
  </div>
  
  <button onclick="info.setAttribute('show', false)"><div big pusab>Ok</div></button>
</menu>
`;
var info = document.querySelector("menu");
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
      <div ${topbottom} ${bgcol} level>                                                   <!--- level container                                               -->
        <div arial normal>                                                                <!--- level info                                                    -->
          #${parseInt(i)+1}:                                                              <!--- level placement                                               -->
          <a href="http://${item[2]}">                                                    <!--- level video                                                   -->
            <color blue>${item[0]}</color>                                                <!--- level name (blue color because it's a link)                   -->
          </a>                                                                            <!--- I just wanted to put a comment here for aesthetic reasons lol -->
          ${item[1]} <br> <div small>ID: ${item[3]}; FPS: ${item[4]}; WR: ${item[5]}      <!--- misc level data                                               -->
        </div>
      </div>
    </div>
    `;
  }
  return output;
}

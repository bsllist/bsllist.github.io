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
<br>
<div pusab big>List Owned by Paintball</div>

<menu show=false>
  <div pusab gold bigger>List Information</div>
  <br>
  <div arial small>
    This is a website made by   
    <img cube src="https://gdpseditor.gdbrowser.com/icon/icon?icon=89&form=cube&col1=18&col2=11" width="20px" height="20px"></img><color gold><a>nurdPi</a></color>and
    <img cube src="https://gdpseditor.gdbrowser.com/icon/icon?icon=1&form=cube&col1=0&col2=3" width="20px" height="20px"></img><color gold><a>Wibbuffy</a></color>
    <br><br>
    The backup list is kept in a <color blue><a href="https://docs.google.com/document/d/1zHOH1r_tKI7MNV08tNRaplz0AhlhNIi3RtWSGYCwDQs/edit">Google Doc</a></color> made by PaintBall.
  </div>
  <br>
  <br>
  <div pusab gold bigger>List Rules</div>
  <br>
  <div arial>
      1: Levels must be considered bullshit and stupid.<br>
      2: Levels must be physically and humanly possible.<br>
      3: Levels must be finished and of shitty quality.<br>
      4: Minimum level length is 30 seconds.<br>
      5: Copies or Modified versions of levels are not allowed (unless the level is changed enough to be barely identical)<br>
      6: Gameplay, deco, and general quality standards do not exist.<br>
      7: World records have a minimum progress percentage based on the level’s placement on the list.
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
          #${parseInt(i)-1}:                                                              <!--- level placement                                               -->
          <a href="youtu.be/${item[2] || "dQw4w9WgXcQ"}">                                 <!--- level video                                                   -->
            <color blue>${item[0]}</color>                                                <!--- level name (blue color because it's a link)                   -->
          </a>                                                                            <!--- I just wanted to put a comment here for aesthetic reasons lol -->
          by ${item[1]} <br> <div small>ID: ${item[3]}; FPS: ${item[4]}; WR: ${item[5]}      <!--- misc level data                                               -->
        </div>
      </div>
    </div>
    `;
  }
  return output;
}

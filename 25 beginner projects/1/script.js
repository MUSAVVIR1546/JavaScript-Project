var index = 0;

function changeColors(){
    var colors = ["red","orange","lightblue","pink","cyan","yellow","black","purple","dustbrown"]
    
    document.getElementsByTagName("body")[0].style.background = colors[index++];

    if(index > colors.length - 1)
    index = 0;
}
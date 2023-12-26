function changeOpacity(input, button) {
    if (input.value.trim())
        button.style.opacity = 1;
    else {
        button.style.opacity = 0.5;
    }
}

function countDownTimer(time, element) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    element.innerHTML = `${minutes}:${seconds}`;
}


const changeSoundButtonState=function(source,music)
{
       
       if(source == "images/sound.png"){
           music.pause();
           return "images/no-sound.png";
        }
        
        else if (source == "images/no-sound.png"){
         music.play();
         return "images/sound.png";
       }
        else 
         return "";

}

const createRandomImage=function(){
    let image=this.document.createElement("img");
    let imageSrcIndex= Math.ceil(5*Math.random()); //from 1 to 5
    console.log(imageSrcIndex);
    image.src=`images/${imageSrcIndex}.png`;
    return image;
}

const fillTheGrid =function(rows,columns,parent){
    
    let grid=[]; //intial matrix
    for(let i=0;i<rows;i++){
        grid[i]=[];  //each element is an array
        for(let j=0;j<columns;j++){
            let childo= new Cell();  //creating new child class each time
            childo.appendToParent(parent);
            grid[i][j]=childo;
        }
}

 return grid;
}

const settingNewPosition =  function(grid , image){
    let columnPosition = Math.round( Math.random()* grid.length);
    
    grid[0][columnPosition].appendImage(image);
    return columnPosition;
}

const lowerBoundry=function(row){
     if(row+1==10)
       row=row;
    else if(row+1 >10)
        row--;
    else
       row++;
    return row;
}

const checkCollisionVertical=function(grid,row,column){
        
    
}
const checkCollisionHorizontally=function(grid,row,column){
    if(grid[row][column]==grid[row][column+1]==grid[row][column+2]==grid[row][column+3]){
        grid[row][column].removeImage();
        grid[row][column+1].removeImage();
        grid[row][column+2].removeImage();
        grid[row][column+3].removeImage();
    }
}


function changeOpacity(input, button) {
    if (input.value.trim())
        button.style.opacity = 1;
    else {
        button.style.opacity = 0.5;
    }
}

function displayTime(time, element) {
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
    imageSrcIndex -= (imageSrcIndex >5) //avoiding 6 case
    // console.log(imageSrcIndex);
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
    let columnPosition = Math.round( Math.random()* grid[0].length);
   // console.log(columnPosition);
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

const checkCollisionVertical = function(grid, row, column) {
    let vecticalCounter = 0;
    let elements=[];
    elements.push(grid[row][column]);  //intial state

    for (let r = row; r < grid.length-1; r++) {
        if (grid[r][column].cellImageNumber() === grid[r + 1][column].cellImageNumber()) {
            elements.push(grid[r+1][column]);
            vecticalCounter++;
        }
        else {
            break; //break if there's no stack of equal elements
        }

        if(vecticalCounter == 3)
        { 
          //removing the elements  
          for(let it =0 ;it< elements.length;it ++)
          {
            elements[it].removeContent();
            elements[it].removeImage();
          }      
          break;
        }
    }
    
}









const checkCollisionHorizontally = function (grid, row, column) {
    let horizontalCounter = 0;
    let elements = [];
    
    elements.push(grid[row][column]);
    // Check to the right (next elements)
    for (let c = column; (c < grid[row].length - 1 && horizontalCounter < 3) ; c++) {
        if (!grid[row][c + 1].isEmpty() && grid[row][c].cellImageNumber() === grid[row][c + 1].cellImageNumber()) {
            elements.push(grid[row][c+1]);
            horizontalCounter++;
        } else {
            break;
        }
    }

    for (let c = column - 1; (c >= 0 && horizontalCounter < 3) ; c--) {
        if (!grid[row][c].isEmpty() && grid[row][c].cellImageNumber() === grid[row][c + 1].cellImageNumber()) {
            elements.unshift(grid[row][c]); // Add to the beginning of the array
            horizontalCounter++;
        } else {
            break; // Break the loop if consecutive elements are not equal
        }
    }

    if (horizontalCounter == 3) {
        // If the current element and three consecutive elements to the right or left are equal
        console.log(elements);
        console.log("Horizontal Success");
        for (let it = 0; it < elements.length; it++) {
            elements[it].removeContent();
            elements[it].removeImage();
        }
    }
}

const fireAlert=function(title,text,icon,id){
    Swal.fire({
        title:title,
        text:text,
        icon:icon,
      //   showCancelButton: true,
        confirmButtonText: 'Go Home',
      //   cancelButtonText: 'No, cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = 'homePage.html'; // Replace with the actual home page URL
          clearInterval(id);
        }
      });
}


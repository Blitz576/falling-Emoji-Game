class Cell{
    //#flag;
    //static flag;
    constructor(){
        this.cell=document.createElement("div");
        this.cell.style.width="50px";
        this.cell.style.height="50px";
        this.flag=0;
        this.image="";
        this.imageSources=["0","images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg"];   //possible images based 1 index
        // this.cell.style.backgroundColor="red";
    }
    appendToParent(parent){
      parent.appendChild(this.cell);
    }
    removeContent(){
      this.cell.removeChild(this.cell.childNodes[0]); //removing the image
    }
    
    removeImage(){
      this.flag=0;
    }
    appendImage(image){
        this.flag=1;
        this.imageIndex = this.imageSources.indexOf(image.attributes.src);
        this.image=image;
        this.cell.appendChild(image);
    }
    
    

    cellImageNumber(){

      if(!this.flag)
         return -1; //the cell has no image
      else{
        // console.log(this.imageIndex);
        return this.imageIndex;
      }  

    }

    isEmpty(){
        if(this.flag)
           return false;
        else 
          return true;
    }
}


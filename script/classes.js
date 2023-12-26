class Cell{
    constructor(){
        this.cell=document.createElement("div");
        this.cell.style.width="50px";
        this.cell.style.height="50px";
        this.flag=0;
        //this.cell.style.backgroundColor="red";
    }
    appendToParent(parent){
      parent.appendChild(this.cell);
    }
    appendImage(image){
        this.flag=1;
        this.cell.appendChild(image);
    }
    isEmpty(){
        if(this.flag)
           return false;
        else 
          return true;
    }
}


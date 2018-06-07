class AnimaionBOX{
    constructor(){
        this.animationDiv = document.querySelector('#animation');
        this.animationDiv.style.width = "100px";
        this.animationDiv.style.height = "100px";
        this.animationDiv.style.position = "absolute";
        this.animationDiv.style.border = "1px solid blue";
        this.animationDiv.style.top = "50px";
        this.Right = true;
        this.Left = false;
        this.Bottom = true;
        this.Top = false;
        this.side = 1;
        this.BodyWidth = () => document.querySelector('body').offsetWidth;
        this.BodyHeight = () => document.querySelector('body').offsetHeight;
    }

    animateInterval() {
        if (this.animationDiv ) {
            let top = this.animationDiv.offsetTop;
            let left = this.animationDiv.offsetLeft;
            setInterval(() => {
                if(this.Bottom === true){
                    if(top <= (this.BodyHeight()-100)){
                        this.animationDiv.style.top =  top;
                        top += 10; 
                        if(this.Right === true){
                           left += 10;
                           this.animationDiv.style.left =  left;
                           if(left >= (this.BodyWidth()-100)){
                             this.Right = false;
                             this.Left = true;
                           }
                        }
                        if(this.Left === true){
                            left -= 10;
                            this.animationDiv.style.left =  left;
                            if(left <= 0){
                              this.Right = true;
                              this.Left = false;
                            }
                         }
                    }else{
                        this.Bottom = false;
                        this.Top = true;
                        top -= 10; 
                    } 
                }

                if(this.Top === true){
                    if(top >= 0){
                        this.animationDiv.style.top =  top;                   
                        top -= 10;
                        if(this.Right === true){
                            left += 10;
                            this.animationDiv.style.left =  left;
                            if(left >= (this.BodyWidth()-100)){
                              this.Right = false;
                              this.Left = true;
                            }
                         }
                         if(this.Left === true){
                             left -= 10;
                             this.animationDiv.style.left =  left;
                             if(left <= 0){
                               this.Right = true;
                               this.Left = false;
                             }
                          }
                    }else{
                        this.Bottom = true;
                        this.Top = false;
                        top += 10; 
                    } 
                }

            }, 1000)
        }
    }

}

let animaionBOX = new AnimaionBOX();
animaionBOX.animateInterval();
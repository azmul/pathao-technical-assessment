let animationDiv = document.querySelector('#animation');
let AnimaionBOX = {
    goBoxUpDown: true,
    goBoxLeftRight: false,
    side: 1,
    getbodyWidth: () => document.querySelector('body').offsetWidth,
    getbodyHeight: () => document.querySelector('body').offsetHeight,
    animateInterval(animationDiv) {
        if (animationDiv) {
            this.startAnimation(animationDiv)
        }
    },
    startAnimation(animationDiv) {
        setInterval(() => {
            if (this.goBoxUpDown) {
                animationDiv.style.top = (this.side === 3) ? 0 : this.getbodyHeight() - 100
                this.goBoxLeftRight = true
                this.goBoxUpDown = false
                this.side += 1
            } else {
                animationDiv.style.left = (this.side === 4) ? 0 : this.getbodyWidth() - 100
                this.goBoxUpDown = true
                this.goBoxLeftRight = false
                this.side += 1
            }

            if (this.side > 4) this.side = 1;
        }, 1000)
    }
}

AnimaionBOX.animateInterval(animationDiv);
clone()
function clone() {
    for (let n=0; n<12; n++) {
        let parent = document.getElementById('vape_group');
        let elem = parent.querySelector('.vape');
        let clone = elem.cloneNode(true);
        clone = parent.appendChild(clone);
    }
}
function button_trash() {
    if (this.style.background != "rgb(25, 25, 25)") {
        this.style.cssText = 'background: rgb(25, 25, 25); color: #ffffff;';

    } 
    else {
        this.style.cssText = 'background: rgb(255, 255, 255); color: #191919;';

    }
}
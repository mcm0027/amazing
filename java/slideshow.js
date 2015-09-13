
var num=1
img1 = new Image ()
img1.src = "./img/arbor1.jpg"
img2 = new Image ()
img2.src = "./img/sidearbor.jpg"
img3 = new Image ()
img3.src = "./img/arbor1bw.jpg"
img4 = new Image ()
img4.src = "./img/Wood-Floor.jpg"



function slideshowUp() {
num=num+1
if (num==5)
{num=1}
document.mypic.src=eval("img"+num+".src")
}

function slideshowBack() {
num=num-1
if (num==0)
{num=4}
document.mypic.src=eval("img"+num+".src")

}


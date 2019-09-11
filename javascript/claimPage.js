//Script finds the image based on pitcure ID and displays it along with a download button in the claimPage
    // Script by: Javier Gonzalez javier.e.glz@gmail.com

function getPicture(){
    //to test, input element 3988, it is the only picture on the server.
    //Otherwise, if you dont, it defaults to a picture of a flower, which is not what we want

    let pictureID = document.getElementById("picID").value;
    let imgPath = "/images/downloadables/IMG_" + pictureID + ".jpg";

    console.log("submit button clicked");
    console.log("imgPath = " + imgPath);
    console.log("default src = " + document.getElementsByClassName("previewImg")[0].src);

    if(pictureID != ""){
        document.getElementsByClassName("previewImg")[0].src = imgPath;
        document.getElementById("homenav").setAttribute('href', imgPath);
        document.getElementById("imglink").setAttribute('href', imgPath);
        console.log("new src = " + document.getElementsByClassName("previewImg")[0].src);
      }

    document.getElementsByClassName("showPic")[0].style.display = "block";
    // let height1 = document.getElementsByClassName("claimLanding")[0].offsetHeight;
    // let height2 = (document.getElementsByClassName("previewImg")[0].offsetHeight +350);
    // document.getElementsByClassName('claimLanding')[0].style.height = (height1 + height2) + 'px';
    }

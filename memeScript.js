// JavaScript source code


document.addEventListener("DOMContentLoaded", function () {



    const savedMemes = JSON.parse(localStorage.getItem("memes")) || [];
    const savedTopText = JSON.parse(localStorage.getItem("memes"))
    const savedBottomText = JSON.parse(localStorage.getItem("memes"))

    function createMemeElement(newItem, meme) {
        let memeContainer = document.getElementById("meme-container");

        memeContainer.appendChild(newItem);
        let newMemeBackgroundImage = document.getElementById("img").value;
        newItem.style.backgroundImage = meme.img;

        let buttonHolderSpan = document.createElement("span");
        buttonHolderSpan.classList.add("removeMe");
        newItem.appendChild(buttonHolderSpan);

        let removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.classList.add("xButton");

        buttonHolderSpan.appendChild(removeButton);

        let topTextLine = document.createElement("p");
        let topTextInput = document.getElementById("top-line").value;
        topTextLine.innerText = meme.topTextLine;



        newItem.appendChild(topTextLine);

        let bottomTextLine = document.createElement("p");
        let bottomTextInput = document.getElementById("bottom-line").value;
        bottomTextLine.innerText = meme.bottomTextLine;

        return bottomTextLine;
    }

    

    for (let i = 0; i < savedMemes.length; i++) {
        /*event.preventDefault();*/

        let newItem = document.createElement("div");
        newItem.classList.add("generatedMemeBackground");
        
        let bottomTextLine = createMemeElement(newItem, savedMemes[i]);
       
        newItem.appendChild(bottomTextLine);



    }

    const xButton = JSON.parse(localStorage.getItem("xButton"));


    let x = window.matchMedia("(max-width: 700px)")
    let y = window.matchMedia("(max-width: 1900px")
    setBackground(x) // Call listener function at run time
    //x.addListener(setBackground) // Attach listener function on state changes
    //y.addListener(setBackground)  //I removed the listener, it kept on constantly calling the function


    function setBackground(x) {
        if (x.matches) { // If media query matches
            document.body.style.backgroundImage = "url('https://marketplace.canva.com/EAFJd1mhO-c/1/0/900w/canva-colorful-watercolor-painting-phone-wallpaper-qq02VzvX2Nc.jpg')";
        
        } else {
            randomize();
            setInterval(randomize, 7000);
            function randomize() {
                let randomInt = Math.floor(Math.random() * 10);
                if (randomInt === 1) {
                    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1662668862763-dc613ee191ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";
                } else if (randomInt === 2) {
                    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/5620839.jpg')";
                } else if (randomInt === 3) {
                    document.body.style.backgroundImage = "url('https://newevolutiondesigns.com/images/freebies/cat-wallpaper-3.jpg')";
                    /*document.body.style.backgroundSize = "cover";*/
                } else if (randomInt === 4) {
                    document.body.style.backgroundImage = "url('https://i.imgur.com/tYcH3vL.jpeg')";
                    /*document.body.style.backgroundSize = "cover";*/
                } else if (randomInt === 5) {
                    document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg')";
                    /*document.body.style.backgroundSize = "cover";*/
                } else if (randomInt === 6) {
                    document.body.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Forests-bridges-natural-scenery-hd-wallpaper-backgrounds-1920x1080.jpg')";
                    /*document.body.style.backgroundSize = "cover";*/
                } else if (randomInt === 7) {
                    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1132043.jpg')";
                    /*document.body.style.backgroundSize = "cover";*/
                } else if (randomInt === 8) {
                    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1132043.jpg')";
                    /*document.body.style.backgroundSize = "cover";*/
                } else if (randomInt === 9) {
                    document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/1132043.jpg')";
                    /*document.body.style.backgroundSize = "cover";*/
                } else if (randomInt === 0) {
                    document.body.style.backgroundImage = "url('https://images4.alphacoders.com/663/663219.jpg')";
                    /*document.body.style.backgroundSize = "cover";*/
                }

            }
        }
    }

    


    



    let formDiv = document.getElementById("form-div");


/*moved this styling to the style sheet to make it easier to resize for different viewports*/
/*document.body.style.backgroundRepeat = "no-repeat";*/
    

   

    let memeForm = document.getElementById("meme-form");
    let button = document.getElementById("btn");

    




    button.addEventListener("click", function (event) {

        event.preventDefault();

        let newItem = document.createElement("div");
        newItem.classList.add("generatedMemeBackground");

        

        let bottomTextLine = createMemeElement(newItem, { img: `url('${document.getElementById("img").value}')`, topTextLine: document.getElementById("top-line").value, bottomTextLine: document.getElementById("bottom-line").value });
        newItem.appendChild(bottomTextLine);



        memeForm.reset();

        savedMemes.push({ img: `url('${document.getElementById("img").value}')`, topTextLine: document.getElementById("top-line").value, bottomTextLine: document.getElementById("bottom-line").value })

        localStorage.setItem("memes", JSON.stringify(savedMemes));
        
    });


    let removeButton = document.querySelectorAll(".xButton");

    document.addEventListener("click", function (event) {

        let removeButton = document.querySelectorAll(".xButton");
        /*console.log(event.target.parentNode.classList);*/
        if (event.target.parentNode.classList.value === "removeMe") {
            let buttonHolder = event.target.parentNode;
            buttonHolder.parentNode.remove();
            /*event.target.parentNode.remove();*/
            /*savedMemes.pop();*/
        }

    });

});

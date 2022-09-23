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



        /*this was an attempt to make the meme dissapear completely from localStorage when you hit the X button. Not functional*/

        //document.addEventListener("click", function (event) {

        //    /*console.log(event.target.innerText);*/
        //    if (event.target.innerText === "X") {
        //        //let buttonHolder = event.target.parentNode;
        //        //buttonHolder.parentNode.remove();
                
        //        savedMemes.pop();
        //    }

        //});


    }

    const xButton = JSON.parse(localStorage.getItem("xButton"));



    //function test() {
    //    let backgroundArr = [
    //        `"url('https://images.unsplash.com/photo-1662668862763-dc613ee191ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')"`,
    //        `"url('https://wallpaperaccess.com/full/5620839.jpg')"`,
    //        `"url('https://newevolutiondesigns.com/images/freebies/cat-wallpaper-3.jpg')"`,
    //        `"url('https://i.imgur.com/tYcH3vL.jpeg')",`
    //        `"url('https://i.pinimg.com/originals/09/6a/35/096a35453660aa9b83ba4ab6d9182d61.jpg')"`,
    //        `"url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Forests-bridges-natural-scenery-hd-wallpaper-backgrounds-1920x1080.jpg')"`,
    //        `"url('https://wallpaperaccess.com/full/1132043.jpg')"`,
    //        `"url('https://images.unsplash.com/photo-1662574429291-5d9c9b2ff6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')"`,
    //        `"url('https://images.wallpapersden.com/image/download/4k-natural-gradient_a2xsZmiUmZqaraWkpJRmbmdlrWZlbWU.jpg')"`,
    //        `"url('https://images4.alphacoders.com/663/663219.jpg')"`
    //    ]
    //    for (let i = 0; i < backgroundArr.length; i++) {

    //        window.setInterval(function (e) {

    //            document.body.style.backgroundImage = backgroundArr[i];
    //        }, 30000);

    //    }
    //}

    //randomizer for background Image

    /*test();*/


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
            document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1662574429291-5d9c9b2ff6c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80')";
            document.body.style.backgroundSize = "cover";
        } else if (randomInt === 9) {
            document.body.style.backgroundImage = "url('https://images.wallpapersden.com/image/download/mountain-valley-hd-photography_bWtpaGqUmZqaraWkpJRoZWVlrWZrbWw.jpg')";
            /*document.body.style.backgroundSize = "cover";*/
        } else if (randomInt === 0) {
            document.body.style.backgroundImage = "url('https://images4.alphacoders.com/663/663219.jpg')";
            document.body.style.backgroundSize = "cover";
        }

    }

    let formDiv = document.getElementById("form-div");
    //document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1662668862763-dc613ee191ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";
    document.body.style.backgroundRepeat = "no-repeat";
    /*formDiv.style.backgroundImage = "url('https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg')";*/

    //pumpkin photo: https://images.unsplash.com/photo-1662221079293-bd96e6c42c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80

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
        //savedMeme.push({ task: newTodo.innerText, isCompleted: false });

        //newTodo.appendChild(removeButton);
        //localStorage.setItem("todos", JSON.stringify(savedTodos));
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

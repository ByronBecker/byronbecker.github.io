
let txt1 = "Hi, I\'m Byron, a software and web developer currently Based in Boulder, Colorado."; 
let txt2 = "I\'m a programmer with interests in developing software and using machine learning in order to solve challenging problems related to human-computer interaction.";
let txt3 = "I enjoy projects that involve collaborating with others and learning new technologies in the process.";
let txt4 = "I\'m currently looking for a position as a software engineer upon graduation in May 2018, you can reach me through the information provided below."

let speed = 5;

let typeWriter = (txt, i, target) => {

    if (i < txt.length) {
        document.getElementById(target).innerHTML += txt.charAt(i)
        i++;
        setTimeout(
            () => {
                typeWriter(txt, i, target)
            }, speed);
    }
}

let holyCallBack = () => {
    setTimeout(
        () => {
            setTimeout(
                () => {
                        setTimeout(
                            () => {
                                setTimeout(
                                    () => {
                                        typeWriter(txt4, 0, "typewriter-text4"); //happens last
                                    }, 1500)
                                typeWriter(txt3, 0, "typewriter-text3"); 
                            }, 1500);
                    typeWriter(txt2, 0, "typewriter-text2");
                }, 1500);
            typeWriter(txt1, 0, "typewriter-text1"); //happens first
            setTimeout(
                () => {
                    document.getElementById("typewriter-text1").innerHTML += "  " + "<img src='/app/images/T9hacksopt.png' >" + "  ";
                }, 80 );
        }, 1000);
}

window.onload = () => {
    holyCallBack();
}
var n = document.querySelectorAll(".letter");

for (var i = 0; i < n.length; i++) {
    document.querySelectorAll(".letter")[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;

        switch (buttonInnerHtml) {
            case "a":
                var lettera = new Audio("sounds/letter-a.mp3");
                lettera.play();                
                break;

            case "b":
                var letterb = new Audio("sounds/letter-b.mp3");
                letterb.play();                
                break;

            case "c":
                var letterc = new Audio("sounds/letter-c.mp3");
                letterc.play();                
                break;
            
            case "d":
                var letterd = new Audio("sounds/letter-d.mp3");
                letterd.play();                
                break;

            case "e":
                var lettere = new Audio("sounds/letter-e.mp3");
                lettere.play();                
                break;
                
            case "f":
                var letterf = new Audio("sounds/letter-f.mp3");
                letterf.play();                
                break;

            case "g":
                var letterg = new Audio("sounds/letter-g.mp3");
                letterg.play();                
                break;

            case "h":
                var letterh = new Audio("sounds/letter-h.mp3");
                letterh.play();                
                break;

            case "i":
                var letteri = new Audio("sounds/letter-i.mp3");
                letteri.play();                
                break;

            case "j":
                var letterj = new Audio("sounds/letter-j.mp3");
                letterj.play();                
                break;

            case "k":
                var letterk = new Audio("sounds/letter-k.mp3");
                letterk.play();                
                break;

            case "l":
                var letterl = new Audio("sounds/letter-l.mp3");
                letterl.play();                
                break;

            case "m":
                var letterm = new Audio("sounds/letter-m.mp3");
                letterm.play();                
                break;

            case "n":
                var lettern = new Audio("sounds/letter-n.mp3");
                lettern.play();                
                break;

            case "o":
                var lettero = new Audio("sounds/letter-o.mp3");
                lettero.play();                
                break;

            case "p":
                var letterp = new Audio("sounds/letter-p.mp3");
                letterp.play();                
                break;

            case "q":
                var letterq = new Audio("sounds/letter-q.mp3");
                letterq.play();                
                break;

            case "r":
                var letterr = new Audio("sounds/letter-r.mp3");
                letterr.play();                
                break;

            case "s":
                var letters = new Audio("sounds/letter-s.mp3");
                letters.play();                
                break;

            case "t":
                var lettert = new Audio("sounds/letter-t.mp3");
                lettert.play();                
                break;

            case "u":
                var letteru = new Audio("sounds/letter-u.mp3");
                letteru.play();                
                break;

            case "v":
                var letterv = new Audio("sounds/letter-v.mp3");
                letterv.play();                
                break;

            case "w":
                var letterw = new Audio("sounds/letter-w.mp3");
                letterw.play();                
                break;

            case "x":
                var letterx = new Audio("sounds/letter-x.mp3");
                letterx.play();                
                break;

            case "y":
                var lettery = new Audio("sounds/letter-y.mp3");
                lettery.play();                
                break;

            case "z":
                var letterz = new Audio("sounds/letter-z.mp3");
                letterz.play();                
                break;
        
            default: console.log(buttonInnerHtml);
                break;
        }
    });
}

//document.querySelector(".letter").addEventListener("click", function () {
    
//    var dog = new Audio("sounds/letter-d.mp3");
//    dog.play();
//});
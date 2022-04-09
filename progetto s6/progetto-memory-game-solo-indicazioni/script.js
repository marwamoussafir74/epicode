const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
    "piangere", "ridere", "amare", "amare1", "spavento", "shock"];


$(document).ready(function () {
    for (let i = 0; i < 16; i++) {
        let random = Math.floor(Math.random() * mieImg.length); 
        let immagineRandom = mieImg.splice(random, 1);
        $('<div class="images" id="emoji ' + i + '"><img id="' + i + '" src="img/' + immagineRandom + '.png" width="130" heigt="130"></div>').appendTo('#memory')
    }
    let immaginiCliccate = []

    $('.images').click(function () {


        let nClick = $('.numclicks span').text() 
        nClick++ 
        $('.numclicks span').text(nClick) 

        if (nClick > 30) { 
            $('#gameover').show().text('Sorry, Game over!'); 
            $('#memory').hide(500); 
        }

        if (immaginiCliccate.length != 2) { 
            let imgId = $(this).children().attr('id') 
            let imgSrc = $(this).children().attr('src') 

            $('#' + imgId).show()

            let oggettoImg = {
                id: imgId,
                src: imgSrc
            }

    
            immaginiCliccate.push(oggettoImg)

            if (immaginiCliccate.length == 2) {

                if (immaginiCliccate[0].src == immaginiCliccate[1].src) { 
                    immaginiCliccate = []
                } else { 
                    setTimeout(function () { 
                        $('#' + immaginiCliccate[0].id).hide() 
                        $('#' + immaginiCliccate[1].id).hide() 
                        immaginiCliccate = [] 
                    }, 400) 

                }
            }
        }
    })
})

$('#start').click(function () { 
    $('#memory').show();  
    $('img').show()
    setTimeout(function () {
        $('img').hide()
    }, 2000);



    $('#restart').show('slow'); 
    $('.numclicks').show(); 
    $(this).hide(); 


});

$('#restart').click(function () { 
    window.location.reload(); 
});
                
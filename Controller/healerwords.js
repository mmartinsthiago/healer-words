$(document).ready(function () {
    showHealerWords();
})
/*
function fetchData() {
    setTimeout(function () {
        showHealerWords();
        fetchData();
    }, 3000);
}*/

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return '0';
    }
    else{
       return results[1] || 0;
    }
}

var lang = decodeURIComponent($.urlParam('lang')).toUpperCase();

function showHealerWords(){
    
    $.ajax({
        type: 'GET',
        url: 'Model/healerwords.xml',
        dataType: 'xml',
        
        
        error: function(e) {
            alert("An error ocurred while processing the XML file");
            console.log("XML reading fail: " + e);
        },
        
        
        success: function (response){
            $('#healerwords').children().remove();
            
            if (lang === '0'){
                lang = 'EN-US';
            }
            
            var message = $(response).find(lang).find('healerwords');
            
            var position = setPosition(message);
            
             $('#healerwords').append(
                    '<p class="message">' + $(message[position]).find('message').text() + '</p> \n\
                    <p class="font">' + $(message[position]).find('font').text() + '</p>'
                    );

            appendShareButtons(message[position]);
            
        }
    });
}

/*
 * setPosition will set the position in the array to append in the html
 */
function setPosition(message){
    length = $(message).length;
    var position = Math.floor(Math.random() * length);
    $('#qnt-healer-words').append(length);
    return position;
}

function appendShareButtons(message){
    var urlWords = $(message).find('message').text().trim();
    var titleMissing = '';
    var titleAdd = ''
    
    if (lang === 'EN-US'){
        titleMissing = 'Thank you for caring, but this is not ready yet!'
        titleAdd = 'Share on ';
    } else {
        titleMissing = "Obrigado por se importar, mas esse não está pronto ainda!"
        titleAdd = 'Compartilhar no ';
    }
    
    urlWords = $(message).find('hashtags').text().trim()+'%0A%0A%22'+urlWords+'%22';
        //'+$(message).find('hashtags').text()+'+%0A%0A%84'+urlTwitt+'%84%0A%0A';
    
    
    $('#social-media-sharing').append(
            '<ul id="media-sharing"> \n\
                    <li class="social-media" title="'+titleAdd+' Facebook"> \n\
                        <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2www.healerwords.com&text=%23healerwords+'+urlWords+'" \n\
                        rel="nofollow" data-nofollow="true" title="'+titleAdd+'Facebook" id="facebook-share-button" class="icon" target="_blank"></a> \n\
                    </li> \n\
                    <li class="social-media" title="'+titleMissing+'"> \n\
                        <a href="#" rel="nofollow" id="instagram-share-buttom" class="icon" target="_blank"></a> \n\
                    </li> \n\
                    <li class="social-media" title="Twitter"> \n\
                        <a href="https://twitter.com/share?url=https%3A%2F%2Fwww.healerwords.com&text=%23healerwords+'+urlWords+'+%0A%0A%40healer_words%0A%0A" \n\
                        rel="nofollow" data-nofollow="true" title="'+titleAdd+'Twitter" id="twitter-share-button" class="icon" target="_blank"></a> \n\
                    </li> \n\
                    <li class="social-media" title="'+titleMissing+'"> \n\
                        <a href="#" rel="nofollow" id="whatsapp-share-button" class="icon" target="blank"></a> \n\
                    </li> \n\
                </ul>'
    )
    
    twitterCards();
    
}

function metaTags(description, content, hashtag){
    $('head').append(
        '<meta property="og:title" content="'+description+'"/>' 
    )
}

function twitterCards(){
    $('head').append(function() {
        $(this).append('<!-- twitter configuration --> \n\
        <meta name="twitter:cards" content="summary_large_image"> \n\
        <meta name="twitter:site" content="@healer_words"> \n\
        <meta name="twitter:creator" content="@healer_words"> \n\
        <meta name="twitter:domain" content="healerwords.com"> \n\
        <meta name="twitter:image:scr" content="https://healerwords.com/Views/Images/icon-socialMedia.png"> \n\
        <meta name="twitter:widgets:csp" content="on"> \n\
        <meta name="twitter:url" content="https://healerwords.com">');
        if (lang === 'EN-US'){
            $(this).append('<meta name="twitter:title" content="This were my Healer Words! What are yours?"> \n\
            <meta name="twitter:description" content="Healer Words is a free tool to help anyone feel better about \n\
              life or oneself, with phrases that one may find some kind of empathy, belonging, comfort, \n\
              motivational, etc.">');
        } else {
            $(this).append('<meta name="twitter:title" content="Essas foram minhas Healer Words! Quais as suas?"> \n\
            <meta name="twitter:description" content="Healer Words é uma ferramenta gratuita para ajudar qualquer um a se sentir melhor sobre \n\
              a vida ou consigo mesmo, com frases que um pode encontrar algum tipo de empatia, pertencimento, conforto, \n\
              motivação, etc.">');
        }
    })
}
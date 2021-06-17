$(document).ready(function() {
    appendShareButtons();
})



/*
 * This function will create the share buttons below the ins#healerwords
 */
function appendShareButtons(){
    $('#social-media-sharing').append(
            '<ul id="media-sharing"> \n\
                    <li id="to-share" title="To share Helaer Words"> \n\
                        To share Healer Words: \n\
                    </li> \n\
                    <li class="social-media" title="Facebook"> \n\
                        <a href="#" rel="nofollow" id="facebook-share-button" class="icon" target="blank"></a> \n\
                    </li> \n\
                    <li class="social-media" title="Instagram"> \n\
                        <a href="#" rel="nofollow" id="instagram-share-buttom" class="icon" target="blank"></a> \n\
                    </li> \n\
                    <li class="social-media" title="Twitter"> \n\
                        <a href="#" rel="nofollow" id="twitter-share-button" class="icon" target="blank"></a> \n\
                    </li> \n\
                    <li class="social-media" title="Whatsapp"> \n\
                        <a href="#" rel="nofollow" id="whatsapp-share-button" class="icon" target="blank"></a> \n\
                    </li> \n\
                </ul>'
            )
}
/* Fade code block below: */

$(document).ready(function(){
  generateTags();
  $("#profile1").fadeIn(4000);
  });

$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

        /* Check the location of each desired element */
        $('.profile').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it in */
            if( bottom_of_window >= bottom_of_object ){

                $(this).animate({'opacity':'1'},4000);

            }

        });

    });

});

/* A-Z loop code block below: */

function convertNumToLetter(num){

	return (num+10).toString(36);

}

function generateTags() {

  let anchorTargetEl = document.getElementById("alphabetlistcontainer");

  if (anchorTargetEl) {
    for (let i = 0; i < 26; i++){

      let letter = convertNumToLetter(i);
      let hrefForNewElement = letter + '.html';

      let newElement = document.createElement('a');
      newElement.href = hrefForNewElement;
      newElement.text = letter.toUpperCase();
      anchorTargetEl.appendChild(newElement);
    }
  }
}

/* Oops! Is someone missing? block below: */

$(document).ready(function(){
    $("#oops").click(function(){
        $("#suggestions").slideToggle("slow");
    });
});

/* Rainbow text below: */

$(document).ready(function(){
  var r = $('.rainbow');
  if (r.length) {
    $('.rainbow').rainbow({
        colors: [
            '#FF0000',
            '#f26522',
            '#fff200',
            '#00a651',
            '#28abe2',
            '#2e3192',
            '#6868ff'
        ],
        animate: true,
        animateInterval: 150,
        pad: false,
        rotateEach: 5,
     });
   }
});

$(document).ready(function(){
    $('#1_block').one("click", function()
    {
    
    $("#1_block").attr("id", "new_filler_id")
    $('#holder').css({
        'opacity': '1',
        'color': 'green;'
    })
    
    $('#endless_title').slideDown(700).delay(700).slideUp(700)
    
    $('#holder').html('Endless is a catalogue of work and backlog of previous projects, as well as a hub for resources I find useful and/or interesting. I wanted a platform to better explain my ideas and reasoning for personal projects, more than just what lives on Github. I wanted to have everything as a stream of ideas that were all in one place. It is updated periodically with any new projects as well as changes to old work I may have revisited.')
    setTimeout(function(){
        $('body').append('<div class="arrows" onclick="toEndless()"></div>');}, 3000) 
    setTimeout(function(){
        $('.arrows').append('<a class="hidden_btn"><img class="blink_me" src="assets/icons8-chev.png"></img></a>');}, 6500)
    setTimeout(function(){
        $('.arrows').append('<a class="hidden_btn"><img class="blink_me" src="assets/icons8-chev.png"></img></a>');}, 7000)
    setTimeout(function(){
        $('.arrows').append('<a class="hidden_btn"><img class="blink_me" src="assets/icons8-chev.png"></img></a>');}, 7500)
    setTimeout(function(){
        $('.arrows').append('<a class="hidden_btn"><img class="blink_me" src="assets/icons8-chev.png"></img></a>');}, 8000)
    setTimeout(function(){
        $('.arrows').append('<a class="hidden_btn"><img class="blink_me" src="assets/icons8-chev.png"></img></a>');}, 8500)
    })
});

function toEndless() {
    console.log("take me away from here")
}


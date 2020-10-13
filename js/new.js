$(document).ready(function(){
    $('#1_block').click(function()
    {   
    $('#holder').css({
        'opacity': '1',
        'color': 'green;'
    })
    $('#hidden_btn').delay(1000)
    $('#endless_title').slideDown(700).delay(700).slideUp(700)
    $("#endless_title").attr("id", "hidden_title")
    $('#holder').html('Endless is a catalogue of work and backlog of previous projects, as well as a hub for resources I find useful and/or interesting. I wanted a platform to better explain my ideas and reasoning for personal projects, more than just what lives on Github. I wanted to have everything as a stream of ideas that were all in one place. It is updated periodically with any new projects as well as changes to old work I may have revisited.')
    })
    
});


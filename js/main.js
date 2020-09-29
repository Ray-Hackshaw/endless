$(function getObjects() {
    console.log("function exec")
    $.getJSON('data.json', function(data) {
        $.each(data.project, function(i) {
            document.getElementById('project').innerHTML = i.project;
            document.getElementById('link').innerHTML = i.link;
            document.getElementById('description').innerHTML = i.description;
            document.getElementById('image-one').innerHTML = i.image-one;
            document.getElementById('image-two').innerHTML = i.image-two;
      });
 
    });
 
 });
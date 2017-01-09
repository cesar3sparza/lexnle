$(document).ready(function(){
var igPhoto = $('li.thumbnail');

function windowReload(){
    window.location.reload();
};

function loadFeed(){
    // var jsonURL = "http://45.55.4.152/api";
	var jsonURL = "js/data.json";
    $.ajaxSetup({ cache: false });
    $('#links li').remove();
    
    $.getJSON(jsonURL, function(info){
        $.each(info, function(k,v){
            $.each(v, function(key,value){
            var output = '';    
            output = '<li class="thumbnail"><a href="';
            output += value.instagram_link;
            output += '" target="_blank"><img src="';
            output += value.urls.standard;
            output += '"></a></li>';
            
            console.log(value.urls.standard);
            $('#links').append(output);
            });
        })
    });
}

setInterval(loadFeed, 60000);
setTimeout(windowReload, 600001);

    $('#logo').click(function(){
            loadFeed();
        });
    
    $(igPhoto).click(function(){
            var url = $(this).attr('href');
            window.open(url, '_blank');
        });

});
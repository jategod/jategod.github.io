$(document).ready(function() {
    var plinks = [
       	       	{
            name: 'vogelz',
            plink: 'http://steamcommunity.com/profiles/76561197990556731'
        },
		{
            name: 'raversar',
            plink: 'http://steamcommunity.com/profiles/76561198122473124'
       },       
	   {
            name: 'sobeit',
            plink: 'http://steamcommunity.com/profiles/76561198262973432'
        },
		{
            name: 'stanzy',
            plink: 'http://steamcommunity.com/profiles/76561198256997215'
		},
        {
            name: 'kris',
            plink: 'http://steamcommunity.com/profiles/76561198006422687'
        },
		];    
	
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '" target="_blank">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 7000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })

	window.SetVolume = function(val)
	{
    var player = document.getElementById('video');
    console.log('Before: ' + player.volume);
    player.volume = val / 100;
    console.log('After: ' + player.volume);
	}
	
	});
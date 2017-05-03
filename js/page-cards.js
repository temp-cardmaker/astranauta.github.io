window.onload = loadcards;

function loadcards(){
    var params = getUrlVars();
    if (params["cardtype"] === "spells"){
        makeSpellCards(JSON.parse(decodeURIComponent(params["ids"])));
        var spelldata;
        $.getScript('data/spells.json', function(){});
        $.getScript('data/spells-bols.json');
        console.log('spelldata=' + spelldata);
    } else {
    }
}

function makeSpellCards(spellIDs){
    console.log(spellIDs.length);
}
// From: http://jquery-howto.blogspot.com/2009/09/get-url-parameters-values-with-jquery.html
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
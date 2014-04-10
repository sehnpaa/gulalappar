$('#lapp1').on('click keydown paste', function () {
    console.log('Save');
    //console.log('Content: ' + $('#lapp1 p').text());
    //console.log('Left: ' + $('#lapp1').offset().left + ':');
    //console.log('Top: ' + $('#lapp1').offset().top + ':');
});

$('#area1').resizable({grid: [20, 20]}).draggable({handle: 'div#handle1', grid: [ 20, 20 ]});

var nextNote = 2;

function getAreaTemplate() {
    var areaTemplate =  '<div id="area' + nextNote + '" class="area" contenteditable>';
    areaTemplate +=         'mer text';
    areaTemplate +=         '<div id="handle' + nextNote + '" class="handle"></div>';
    areaTemplate +=         '<div class="radera" title="RADERA">&#9746</div>';
    areaTemplate +=     '</div>';
    return areaTemplate;
}

$('#btn_nyanteckning').on('click', function () {
    $('body').append(getAreaTemplate());
    $('#area' + nextNote).resizable({grid: [20, 20]}).draggable({handle: 'div#handle' + nextNote, grid: [ 20, 20 ]});
    nextNote += 1;
});

$('body').on('click', '.radera', function () {
    console.log('this:' + $(this).attr('id'));
    console.log($(this).parent().remove());
});

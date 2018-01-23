var jsonplaceholder = 'https://jsonplaceholder.typicode.com/photos'
var albumId = 1
var fullImage = ''
var fullImageId = 0

document.onload = function() {
    console.log('start fetching');
    fetchFullAlbum(albumId);
};

function fetchFullAlbum(albumId) {
    $.ajax({
        url: jsonplaceholder,
        type: 'GET',
        success: function(data) {
            for (i = 0; i < data.length; i++) { 
                localAlbumId = data[i].albumId
                if(localAlbumId == albumId) {
                    console.log('album id: ' + localAlbumId + ' image id: '+ i);
                    addThumbnail(data[i]);
                }
            }
        },
        error: function(error) {
            console.log('Fetch Error :-S', error);
        }
  })  
};

function addThumbnail(image) {
  $('#thumbnails').append('<div class="thumbnail"><span>' + image.title + '</span><img src="' + image.thumbnailUrl + '"/></div>' )
};
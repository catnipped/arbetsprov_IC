const jsonplaceholder = 'https://jsonplaceholder.typicode.com/photos'
let albumId = 1

function nextAlbum() {
    albumId += 1;
    if (albumId > 100) {
        albumId = 1;
    }
    updateAlbumId();
    fetchFullAlbum(albumId);  
};

function previousAlbum() {
    albumId -= 1;
    if (albumId < 1) {
        albumId = 100;
    };
    updateAlbumId();
    fetchFullAlbum(albumId);
};

function updateAlbumId() {
    $('#albumId').text('📒  '+ albumId);
};

function fetchFullAlbum(albumId) {
    $('#thumbnails').empty();
    $.ajax({
        url: jsonplaceholder,
        type: 'GET',
        success: function(data) {
            for (let i = 0; i < data.length; i++) { 
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
  $('#thumbnails').append('<div class="thumbnail" onclick="showFullImage(\'' + image.url + '\', \'' + image.title + '\')"><img src="' + image.thumbnailUrl + '"/><span>' + image.title + '</span></div>' )
};

function showFullImage(imageUrl, imageTitle) {
    hideFullImage();
    console.log(imageUrl + ' ' + imageTitle)
    $('#fullImage').slideDown().append('<img src="' + imageUrl + '"/><br/><span>' + imageTitle + '</span>').css('display', 'block');
}

function hideFullImage() {
    $('#fullImage').slideUp().empty();
}
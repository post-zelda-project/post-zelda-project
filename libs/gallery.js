// Post-Zelda Project Source File.
// - Used to control the gallery of website.
// Author: RedSuns S.H.Chan

var photoIndex = 0;
var current_photo = document.getElementsByClassName("current_photo");
var photos = document.getElementsByClassName("photo_preview");
var clicked_photo;

function gallery_init()
{
	current_photo[0].src = photos[photoIndex].src;
	for (var i = 0; i < photos.length; i++)
	{
		var photo = photos[i];
		photo.addEventListener("click", photo_on_click, true);
	}
}

function photo_on_click(event)
{
	var all_clicked = document.getElementsByClassName("gallery_clicked_photo");
	for (var i = 0; i < all_clicked.length; i++)
	{
		var clicked = all_clicked[i];
		clicked.className = "photo_preview";
	}
	clicked_photo = event.srcElement;
	current_photo[0].src = clicked_photo.src;
	clicked_photo.className += " gallery_clicked_photo";
}

gallery_init();

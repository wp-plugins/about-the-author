jQuery(document).ready(function() {
	// Userphoto in profile
	jQuery('#upload_userphoto_button').click(function() {
		uploadfield = '#userphoto'
		formfield = jQuery(uploadfield).attr('name');
		tbframe_interval = setInterval(function() {jQuery('#TB_iframeContent').contents().find('.savesend .button').val(about_the_author_localizing_upload_js.use_this_image);}, 2000);
		tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');

		return false;
	});

	/**
	 * Give back the Image-URL to the input-field
	 */
	window.send_to_editor = function(html) {
		imgurl = jQuery('img', html).attr('src');
		jQuery(uploadfield).val(imgurl);
		tb_remove();
	};
});
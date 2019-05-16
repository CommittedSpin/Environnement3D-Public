// Textures.js

function creerTextures(objgl, tabImages) {
	var tabObjTextures = new Array();	

	for (var i = 0; i < tabImages.length; i++) {    
		// L'image de la texture
		var objImage = new Image();
		objImage.src = tabImages[i];
             
		// C
        var objTexture = objgl.createTexture();
			             
		// La r
		objgl.bindTexture(objgl.TEXTURE_2D, objTexture);

		objgl.texImage2D(objgl.TEXTURE_2D, 0, objgl.RGBA, objgl.RGBA,
                         objgl.UNSIGNED_BYTE, objImage);

		objgl.texParameteri(objgl.TEXTURE_2D, objgl.TEXTURE_MAG_FILTER, objgl.LINEAR);
		objgl.texParameteri(objgl.TEXTURE_2D, objgl.TEXTURE_MIN_FILTER, objgl.NEAREST_MIPMAP_NEAREST);
			objgl.generateMipmap(objgl.TEXTURE_2D); // Pour 
		objgl.texParameteri(objgl.TEXTURE_2D, objgl.TEXTURE_WRAP_S, objgl.REPEAT);
		objgl.texParameteri(objgl.TEXTURE_2D, objgl.TEXTURE_WRAP_T, objgl.REPEAT);

		
		// Ins
		tabObjTextures.push(objTexture);
	}

	return tabObjTextures;
}

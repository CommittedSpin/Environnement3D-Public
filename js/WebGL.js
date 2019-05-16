  // Librairie WebGl
  
  function initWebGL(objCanvas) {
	  var objgl = null;
      try { 
          // Essayer de récupérer une des versions de WebGL.
          objgl = objCanvas.getContext("experimental-webgl2") || 
				  objCanvas.getContext('webgl') || 
				  objCanvas.getContext('experimental-webgl');
          objgl.enable(objgl.DEPTH_TEST); // Active le test de profondeur
          objgl.depthFunc(objgl.LEQUAL);  // Les objets proches cachent les objets lointains
      } 
      catch(e) {
		alert('Impossible d\'initialiser le WebGL. Il est possible que votre navigateur ne supporte pas cette fonctionnalité.\n', e.message); 
	  } 
	 
	  return objgl;
  }

// Librairie sur la caméra

    // Pour créer une caméra
    // Au point de départ, le transformations sont neutres.
    function creerCamera() {
      var tabCamera = [0, 0, 1, 0, 0, 0, 0, 1, 0];
      return tabCamera;
    }

    // Pour aller chercher les positions XYZ 
    function getPositionsCameraXYZ(tabCamera) {
      return tabCamera.slice(0,3);
    }

  // Pour aller chercher la position en X 
  function getPositionCameraX(tabCamera) {
    return tabCamera[0];
  }

  // Pour aller chercher la position en Y
  function getPositionCameraY(tabCamera) {
    return tabCamera[1];
  }

  // Pour aller chercher la position en Z
  function getPositionCameraZ(tabCamera) {
      return tabCamera[2];
  }

  // Pour aller chercher les position ciblées 
  function getCiblesCameraXYZ(tabCamera) {
      return tabCamera.slice(3, 6);
  }

 // Pour aller chercher la position ciblée en X 
  function getCibleCameraX(tabCamera) {
      return tabCamera[3];
  }

  // Pour aller chercher la position ciblée en X
  function getCibleCameraY(tabCamera) {
    return tabCamera[4];
  }

  // Pour aller chercher la position ciblée en X
  function getCibleCameraZ(tabCamera) {
    return tabCamera[5];
 }

  // Pour aller chercher les orientations XYZ
  function getOrientationsXYZ(tabCamera) {
    return tabCamera.slice(6,9);
 }

 // Pour aller chercher l'orientation en X
 function getOrientationX(tabCamera) {
    return tabCamera[6];
  }

  // Pour aller chercher l'orientation en Y
 function getOrientationY(tabCamera) {
    return tabCamera[7];
  }

  // Pour aller chercher l'orientation en Z
 function getOrientationZ(tabCamera) {
    return tabCamera[8];
}

 // Pour modifier les positions XYZ 
 function setPositionsCameraXYZ(tabXYZ, tabCamera) {
    tabCamera.splice(0, 3, tabXYZ[0], tabXYZ[1], tabXYZ[2]);
  }

  // Pour modifier la position en X 
  function setPositionCameraX(fltX, tabCamera) {
    tabCamera[0] = fltX;
  }

  // Pour modifier la position en Y 
  function setPositionCameraY(fltY, tabCamera) {
      tabCamera[1] = fltY;
  }

  // Pour modifier la position en Z 
  function setPositionCameraZ(fltZ, tabCamera) {
      tabCamera[2] = fltZ;
  }

  // Pour modifier les positions ciblées 
  function setCiblesCameraXYZ(tabXYZ, tabCamera) {
      tabCamera.splice(3, 3, tabXYZ[0], tabXYZ[1], tabXYZ[2]);
  }

  // Pour modifier la position ciblée en X 
  function setCibleCameraX(fltX, tabCamera) {
      tabCamera[3] = fltX;
  }

  // Pour modifier la position ciblée en Y 
  function setCibleCameraY(fltY, tabCamera) {
      tabCamera[4] = fltY;  
    }

  // Pour modifier la position ciblée en Z
  function setCibleCameraZ(fltZ, tabCamera) {
      tabCamera[5] = fltZ;
  }

  // Pour modifier les orientations XYZ
  function setOrientationsXYZ(tabOrientationsXYZ, tabCamera) {
      tabCamera.splice(6, 3, tabOrientationsXYZ[0], tabOrientationsXYZ[1], tabOrientationsXYZ[2]);
  }

  // Pour modifier l'orientation en X
  function setOrientationX(fltOrientationX, tabCamera) {
      tabCamera[6] = fltOrientationX;
  }

  // Pour modifier l'orientation en Y
  function setOrientationY(fltOrientationY, tabCamera) {
      tabCamera[7] = fltOrientationY;
  }

  // Pour modifier l'orientation en Z
  function setOrientationZ(fltOrientationZ, tabCamera) {
      tabCamera[8] = fltOrientationZ;
  }

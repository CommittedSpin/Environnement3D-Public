// Librairie sur les transformations

    // Pour créer des transformations.
    // Au point de départ, le transformations sont neutres.
    function creerTransformations() {
      var tabTransformations = [0, 0, 0, 0, 0, 0, 1, 1, 1];
      return tabTransformations;
    }

    // Pour aller chercher les positions XYZ 
    function getPositionsXYZ(tabTransformations) {
      return tabTransformations.slice(0,3);
    }

  // Pour aller chercher la position en X 
  function getPositionX(tabTransformations) {
    return tabTransformations[0];
  }

  // Pour aller chercher la position en Y
  function getPositionY(tabTransformations) {
    return tabTransformations[1];
  }

  // Pour aller chercher la position en Z
  function getPositionZ(tabTransformations) {
      return tabTransformations[2];
  }

  // Pour aller chercher les angles de rotation 
  // autour de l'axe des X, autour de l'axe des Y
  // et autour de l'axe des Z 
  function getAnglesXYZ(tabTransformations) {
      return tabTransformations.slice(3, 6);
  }

 // Pour aller chercher l'angle de rotation autour de l'axe des X 
  function getAngleX(tabTransformations) {
      return tabTransformations[3];
  }

  // Pour aller chercher l'angle de rotation autour de l'axe des Y
  function getAngleY(tabTransformations) {
    return tabTransformations[4];
  }

  // Pour aller chercher l'angle de rotation autour de l'axe des Z
  function getAngleZ(tabTransformations) {
    return tabTransformations[5];
 }

  // Pour aller chercher les mises à l'échelle XYZ
  function getEchellesXYZ(tabTransformations) {
    return tabTransformations.slice(6,9);
 }

 // Pour aller chercher la mise à l'échelle en X
 function getEchelleX(tabTransformations) {
    return tabTransformations[6];
  }

 // Pour aller chercher la mise à l'échelle en Y
 function getEchelleY(tabTransformations) {
    return tabTransformations[7];
  }

 // Pour aller chercher la mise à l'échelle en Z
 function getEchelleZ(tabTransformations) {
    return tabTransformations[8];
}

 // Pour modifier les positions XYZ 
 function setPositionsXYZ(tabXYZ, tabTransformations) {
    tabTransformations.splice(0, 3, tabXYZ[0], tabXYZ[1], tabXYZ[2]);
  }

  // Pour modifier la position en X 
  function setPositionX(fltX, tabTransformations) {
    tabTransformations[0] = fltX;
  }

  // Pour modifier la position en Y 
  function setPositionY(fltY, tabTransformations) {
      tabTransformations[1] = fltY;
  }

  // Pour modifier la position en Z 
  function setPositionZ(fltZ, tabTransformations) {
      tabTransformations[2] = fltZ;
  }

  // Pour modifier les angles de rotation 
  // autour de l'axe des X, autour de l'axe des Y
  // et autour de l'axe des Z 
  function setAnglesXYZ(tabAnglesXYZ, tabTransformations) {
      tabTransformations.splice(3, 3, tabAnglesXYZ[0], tabAnglesXYZ[1], tabAnglesXYZ[2]);
  }

  // Pour modifier l'angle de rotation autour de l'axe des X 
  function setAngleX(fltAngleX, tabTransformations) {
      tabTransformations[3] = fltAngleX;
  }

  // Pour modifier l'angle de rotation autour de l'axe des Y 
  function setAngleY(fltAngleY, tabTransformations) {
      tabTransformations[4] = fltAngleY;
  }

  // Pour modifier l'angle de rotation autour de l'axe des Z
  function setAngleZ(fltAngleZ, tabTransformations) {
      tabTransformations[5] = fltAngleZ;
  }

  // Pour modifier les mises à l'échelle XYZ
  function setEchellesXYZ(tabEchellesXYZ, tabTransformations) {
      tabTransformations.splice(6, 3, tabEchellesXYZ[0], tabEchellesXYZ[1], tabEchellesXYZ[2]);
  }

  // Pour modifier la mise à l'échelle en X
  function setEchelleX(fltEchelleX, tabTransformations) {
      tabTransformations[6] = fltEchelleX;
  }

  // Pour modifier la mise à l'échelle en Y
  function setEchelleY(fltEchelleY, tabTransformations) {
      tabTransformations[7] = fltEchelleY;
  }

  // Pour modifier la mise à l'échelle en Z
  function setEchelleZ(fltEchelleZ, tabTransformations) {
      tabTransformations[8] = fltEchelleZ;
  }

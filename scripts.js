var txt = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.";
var dinozaur = "triceratops";
var dinozaur = dinozaur.toUpperCase();
var txtRoslinozerny = txt.replace("Velociraptor", dinozaur);
var dlugoscTextu = txtRoslinozerny.length;
var polTekstu = dlugoscTextu/2;
var efektKoncowy = txtRoslinozerny.slice(0, polTekstu);
console.log(efektKoncowy);
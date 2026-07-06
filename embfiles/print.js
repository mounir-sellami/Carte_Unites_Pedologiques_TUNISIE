// Author: Unregistered/Creator: MappetizerCore 13.0.3 by uismedia (http://www.uismedia.de); 30/11/2017 11:54:38
var mv_Query = null;
dojo.require("dijit/TitlePane");
dojo.addOnLoad(function() {
  //Do not delete or change this function
  mv_mobileInit();
  dojo.parser.parse();
  var leg;
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth0Doc","36px","18px","embfiles/legendth0.svg");
  dojo.byId("th0Legend").appendChild(leg);
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth1Doc","114px","247px","embfiles/legendth1.svg");
  dojo.byId("th1Legend").appendChild(leg);
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth2Doc","114px","210px","embfiles/legendth2.svg");
  dojo.byId("th2Legend").appendChild(leg);

  if (dojo.byId("MVoverview") != null) {
    var over = mv_embedSVGNode(dojo.doc,"MVoverviewDoc","150px","318px","embfiles/overview.svg");
    dojo.byId("MVoverview").appendChild(over);
  }

  var map = mv_embedSVGNode(dojo.doc,"MVmapDoc","100%","100%","embfiles/map.svg");
  dojo.byId("MVmap").appendChild(map);

  mv_checkLoaded();
  if (mv_isIE() && mv_localUsage()) {
    _mv_setIELocalStore();
  }
});

function mv_DocSettings() {
  //Do not delete or change this function;
  mv_Doc.Language = "fr-029";
  mv_Doc.userSettings("moccasin","#FFEDCD","red","yellow","#FFEDCD",false,true);
  mv_Doc.Texts["IESupport"] = "";
  mv_Doc.Texts["Flicker"] = "Highlight object";
  mv_Doc.Texts["Close"] = "Fermer la fenêtre";
  mv_Doc.Texts["Hyperlink"] = "D'autres informations";
  mv_Doc.Texts["QueryNoRec"] = "Aucun enregistrement trouve (Maybe due to the Demo Version.)";
  mv_Doc.Texts["ExportExcel"] = "Enregistrer au format Excel";
  mv_Doc.Texts["QueryRec1"] = " sur ";
  mv_Doc.Texts["QueryRec2"] = " sélectionnés:";
  mv_Doc.Texts["QueryRec3"] = "Jeux de donnees";
  mv_Doc.Texts["QueryHead"] = "Résultat de la requête";
  mv_Doc.Texts["QueryHelpTable"] = "Note: Bouger le curseur sur les lignes pour le sélectionner sur la carte.";
  mv_Doc.Texts["QueryStatus1"] = "Le tableau est en chargement, veuillez patientez ...";
  mv_Doc.Texts["QueryStatus2"] = "Le tableau est chargé.";
  mv_Doc.Texts["RecNo"] = "N°";
  mv_Doc.Texts["QueryBack"] = "Générateur de requêtes";
  mv_Doc.Texts["ZoomTo"] = "Zoom to object";
  mv_Doc.Texts["Print"] = "Imprimer";
  mv_Doc.Texts["Identify"] = "Information objet";
  mv_Doc.Texts["EnlargeGraph"] = "Enlarge graph";
  mv_Doc.PrintStatus = true;
}

function mv_MapSettings() {
  //Do not delete or change this function;
  //Gouverorats
  var l = new MV.Layer("th0");

  //Statistiques pédologiques (en % de la superficie du gouvernorat) 
  var l = new MV.Layer("th1",{TxtIds:"txt0"});

  //Carte des unités pédologiques (WRB)
  var l = new MV.Layer("th2");

  mv_Map.userSettings(4480.253,51248.121,19.7147444896078,0.012335481203028,3,true,3393,"");
  mv_Map.Scalebar = true;
}

function mv_initializeLegend() {
  //Do not delete or change this function;
mv_Doc.LayerActivity = ["fa-eye", "fa-eye-slash"];
  mv_addOpcitySlider([{"id":"th0","opacity":"1"},{"id":"th1","opacity":"1"},{"id":"th2","opacity":"0.5"}]);
}

function mv_ScalebarSettings() {
  //Do not delete or change this function;
  mv_Scalebar.userSettings(2,31.285,50000);
}

function mv_initializeSettings() {
  //Do not delete or change this function;
  mv_declareClassChart();

  mv_declareClassIdentifyObject();
  mv_declareClassIdentifyMW();

}

function mv_initializeSettings2() {
 //Do not delete or change this function;
}


function mv_userInit() {
//This function is for your own scripts, it will be called on loading, do not delete it
//  mv_alert("function mv_userInit()");
}

function mv_userMVDocToolbar(objButton) {
//This function is for your own toolbar buttons, do not delete it
//  switch(objButton.id) {
//      case "MVtoolbar.mybutton":
//          objButton.Function = "testFunc('hier',2)";
//          objButton.State = 1;  //this button is a radio button
//          break;
//  }
}


// Author: Unregistered/Creator: MappetizerCore 13.0.3 by uismedia (http://www.uismedia.de); 30/11/2017 11:54:38
var mv_Query = null;
try {
dojo.require("dijit/TitlePane");
dojo.require("dijit/form/TextBox");
dojo.require("dijit/form/Textarea");
dojo.require("dojo.parser");
dojo.require("dijit/layout/BorderContainer");
dojo.require("dijit/layout/ContentPane");
dojo.require("dijit/layout/TabContainer");
dojo.require("dijit/layout/AccordionContainer");
dojo.require("dijit/Menu");
dojo.require("dijit/form/Button");
dojo.require("dijit/form/Select");
dojo.require("dijit/Toolbar");
dojo.require("dojo.data.ItemFileReadStore");
dojo.require("dijit/form/FilteringSelect");
dojo.require("dijit/form/ComboBox");

dojo.require("dojox.charting.Chart2D");
dojo.require("dojox.charting.Theme");
dojo.require("dojox.color.Palette");
dojo.require("dojox.charting.action2d.Tooltip");
dojo.require("dojox.charting.action2d.Highlight");
dojo.require("dojox.charting.action2d.MoveSlice");
dojo.require("dojox.charting.action2d.Magnify");
dojo.require("dojox.gfx");
dojo.require("dijit/form/CheckBox");
} catch (e) {
  if (e.number == -2146827850) {
    aText = "This browser does not allow local usage of html5/ajax solutions. Use a web server instead.";
    try {
      mv_alert(aText);
    } catch (e) {
      alert(aText);
    }
  }
}
// our fancy preloader-hider-function:
var hideLoader = function(){
  dojo.fadeOut({
    node:"MVpreloader",
    duration:1500,
    onEnd: function(){
      dojo.style("MVpreloader", "display", "none");
    }
  }).play();
}

dojo.addOnLoad(function() {
  //Do not delete or change this function
  mv_mobileInit();
  dojo.parser.parse();
  if (!dojo.isFF) {
    var aText;
    if (mv_localUsage()) {
      if (mv_oExists(dojo.isIE) && dojo.isIE < 9) {
          aText = "Microsoft support for your InternetExplorer has ended. If you haven't already, consider installing and using a modern browser to get the best of this application";
      } else if (mv_isIE() || mv_isEdge()) {
          aText = "This browser does not allow local usage of html5/ajax solutions. Use a web server instead.";
      } else if (dojo.isChrome) {
          aText = "Chrome does not allow local usage of html5/ajax solutions. Use a web server instead or start Chrome with the command line switch --allow-file-access-from-files.";
      }
    }
    if (aText) {
      try {
        mv_alert(aText);
      } catch (e) {
        alert(aText);
      }
    }
  }
  var leg;
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth0Doc","36px","18px","embfiles/legendth0.svg");
  dojo.byId("th0Legend").appendChild(leg);
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth1Doc","114px","247px","embfiles/legendth1.svg");
  dojo.byId("th1Legend").appendChild(leg);
  leg = mv_imgSVGNode(dojo.doc,"MVlegendth2Doc","114px","210px","embfiles/legendth2.svg");
  dojo.byId("th2Legend").appendChild(leg);

  mv_mobileHandleWidgets("Vue","MVtoolsContainer");
  if (dojo.byId("MVoverview") != null) {
    var over = mv_embedSVGNode(dojo.doc,"MVoverviewDoc","150px","318px","embfiles/overview.svg");
    dojo.byId("MVoverview").appendChild(over);
    var overFrame = dojo.byId("MVoverviewFrame");
    overFrame.setAttribute("style","width:auto;height:auto;");
  }

  var map = mv_embedSVGNode(dojo.doc,"MVmapDoc","auto","auto","embfiles/map.svg");
  dojo.byId("MVmap").appendChild(map);

  // Add functions to toolbar
  dojo.connect(dojo.byId("MVtoolbar.zoomin"),"onclick",mv_zoomInTool);
  dojo.connect(dojo.byId("MVtoolbar.zoomout"),"onclick",mv_zoomOutTool);
  dojo.connect(dojo.byId("MVtoolbar.fullextent"),"onclick",mv_fullExtent);
  dojo.connect(dojo.byId("MVtoolbar.fullscreen"),"onclick",mv_fullScreen);
  dojo.connect(dojo.byId("MVtoolbar.previousextent"),"onclick",mv_zoomPreviousExtentTool);
  dojo.connect(dojo.byId("MVtoolbar.nextextent"),"onclick",mv_zoomNextExtentTool);
  dojo.connect(dojo.byId("MVtoolbar.query"),"onclick",mv_queryTool);
  dojo.connect(dojo.byId("MVtoolbar.print"),"onclick",mv_print);
  dojo.connect(dojo.byId("MVtoolbar.legend"),"onclick",mv_showLegendInFP);
  dojo.connect(dojo.byId("MVtoolbar.koord"),"onclick",mv_coordinateTool);
  dojo.connect(dojo.byId("MVtoolbar.measure"),"onclick",mv_measureTool);
  dojo.connect(dojo.byId("MVmeasureToolbar.line"),"onclick",mv_measureLineTool);
  dojo.connect(dojo.byId("MVmeasureToolbar.area"),"onclick",mv_measureAreaTool);
  dojo.connect(dojo.byId("MVmeasureToolbar.sum"),"onclick",mv_measureSumTool);
  dojo.connect(dojo.byId("MVmeasureToolbar.clear"),"onclick",mv_measureClearTool);
  dojo.connect(dojo.byId("body"),"onresize",mv_resizeMap);
  mv_watchSplitter(dijit.byId("MVborderContainer"));

  mv_checkLoaded();
  if (mv_isIE() && mv_localUsage()) {
    _mv_setIELocalStore();
  }
});

function mv_DocSettings() {
  //Do not delete or change this function;
  mv_Doc.Language = "fr-029";
  mv_Doc.userSettings("moccasin","#FFEDCD","red","yellow","#FFEDCD",true,true);
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
  mv_declareClassIdentifyTP();

  mv_declareClassQueryBuilder();
  mv_Query = new MV.QueryBuilder();
  mv_Query.Doc = document; 
  mv_Query.txtHelp = "Pour construire une expression, cliquez successivement sur\nle champ qui vous intéresse, sur un opérateur et enfin sur la\nvaleur de référence de votre requête.\nVous pouvez aussi écrire directement votre requête.\nLes noms de champ doivent être entre parenthèses.\n\n[NumericField] = 123.45\n\nDans vos requêtes, les caractères de type texte doivent\ntoujours être entre doubles guillemets.\n\n[TextField] = \"This is a text\"\n\nUtilisez l'opérateur LIKE pour les\nrecherches effectuées à l'aide des caractères génériques (ou jokers).\n\"%\" remplace un nombre quelconque de caractères.\n\n[TextField] like \"This is%\"\n\nVous pouvez combiner les opérateurs AND et OR dans une requête.\n\n[NumericField] >= 123.45 or [TextField] = \"This is a text\"";

  mv_Doc.Toolbars = new MV.List();
  mv_declareClassToolbar();
  mv_createToolbar();
  mv_declareClassMeasure();
  mv_Measure = new MV.Measure();
  mv_Measure.userSettings("Distance","Périmètre","L'aire","Total","m","m²",1,2);
}

function mv_initializeSettings2() {
 //Do not delete or change this function;
  hideLoader();
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


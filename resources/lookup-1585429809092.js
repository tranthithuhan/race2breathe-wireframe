(function(window, undefined) {
  var dictionary = {
    "eeaea045-a3ae-4b1d-8adc-38bf58f58c26": "Sign up",
    "2fc8bbc0-ae15-403f-9530-77b51d372c48": "Mes modèle - Designer",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Sign in",
    "ef73425b-446c-41df-81d3-9852528f8328": "Proposer un modele",
    "a0717305-8e63-490e-b2a0-8696fe59d248": "Mes modèle - vide - Designer",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
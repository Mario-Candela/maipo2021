var size = 0;
var placement = 'point';
function categories_20200204_14(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '3.6':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(38,89,128,0.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(1,60,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_20200204_14 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Área_km2");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_20200204_14(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};

var size = 0;
var placement = 'point';
function categories_CurvasdeNivel_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case '4000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(66,66,66,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '4500':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(66,66,66,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case '5000':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(66,66,66,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_CurvasdeNivel_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Contour");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("Contour") !== null) {
        labelText = String(feature.get("Contour"));
    }
    
var style = categories_CurvasdeNivel_15(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};

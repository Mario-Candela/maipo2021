var size = 0;
var placement = 'point';
function categories_CURSOSDEAGUAMAIPO_0(feature, value, size, resolution, labelText,
                       labelFont, labelFill) {
                switch(value.toString()) {case 'Perenne':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,59,254,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Temporales Efimeros':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(1,52,255,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;
case 'Temporales Intermite':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,139,220,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];
                    break;}};

var style_CURSOSDEAGUAMAIPO_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("TiPO");
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(31, 120, 180, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("nombre") !== null) {
        labelText = String(feature.get("nombre"));
    }
    
var style = categories_CURSOSDEAGUAMAIPO_0(feature, value, size, resolution, labelText,
                          labelFont, labelFill);

    return style;
};

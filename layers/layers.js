var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_CURSOSDEAGUAMAIPO_0 = new ol.format.GeoJSON();
var features_CURSOSDEAGUAMAIPO_0 = format_CURSOSDEAGUAMAIPO_0.readFeatures(json_CURSOSDEAGUAMAIPO_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CURSOSDEAGUAMAIPO_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CURSOSDEAGUAMAIPO_0.addFeatures(features_CURSOSDEAGUAMAIPO_0);var lyr_CURSOSDEAGUAMAIPO_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CURSOSDEAGUAMAIPO_0, 
                style: style_CURSOSDEAGUAMAIPO_0,
    title: 'CURSOS DE AGUA MAIPO<br />\
    <img src="styles/legend/CURSOSDEAGUAMAIPO_0_0.png" /> Perenne<br />\
    <img src="styles/legend/CURSOSDEAGUAMAIPO_0_1.png" /> Temporales Efimeros<br />\
    <img src="styles/legend/CURSOSDEAGUAMAIPO_0_2.png" /> Temporales Intermite<br />'
        });var format_CUERPOSDEAGUA_1 = new ol.format.GeoJSON();
var features_CUERPOSDEAGUA_1 = format_CUERPOSDEAGUA_1.readFeatures(json_CUERPOSDEAGUA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CUERPOSDEAGUA_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CUERPOSDEAGUA_1.addFeatures(features_CUERPOSDEAGUA_1);var lyr_CUERPOSDEAGUA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CUERPOSDEAGUA_1, 
                style: style_CUERPOSDEAGUA_1,
                title: '<img src="styles/legend/CUERPOSDEAGUA_1.png" /> CUERPOS DE AGUA'
            });var format_19760315_2 = new ol.format.GeoJSON();
var features_19760315_2 = format_19760315_2.readFeatures(json_19760315_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19760315_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_19760315_2.addFeatures(features_19760315_2);var lyr_19760315_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_19760315_2, 
                style: style_19760315_2,
    title: '1976-03-15<br />\
    <img src="styles/legend/19760315_2_0.png" /> 9,6<br />'
        });var format_19890419_3 = new ol.format.GeoJSON();
var features_19890419_3 = format_19890419_3.readFeatures(json_19890419_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19890419_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_19890419_3.addFeatures(features_19890419_3);var lyr_19890419_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_19890419_3, 
                style: style_19890419_3,
    title: '1989-04-19<br />\
    <img src="styles/legend/19890419_3_0.png" /> 7,6<br />'
        });var format_19950319_4 = new ol.format.GeoJSON();
var features_19950319_4 = format_19950319_4.readFeatures(json_19950319_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19950319_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_19950319_4.addFeatures(features_19950319_4);var lyr_19950319_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_19950319_4, 
                style: style_19950319_4,
    title: '1995-03-19<br />\
    <img src="styles/legend/19950319_4_0.png" /> 7,0<br />'
        });var format_19990226_5 = new ol.format.GeoJSON();
var features_19990226_5 = format_19990226_5.readFeatures(json_19990226_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_19990226_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_19990226_5.addFeatures(features_19990226_5);var lyr_19990226_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_19990226_5, 
                style: style_19990226_5,
    title: '1999-02-26<br />\
    <img src="styles/legend/19990226_5_0.png" /> 6,5<br />'
        });var format_20010319_6 = new ol.format.GeoJSON();
var features_20010319_6 = format_20010319_6.readFeatures(json_20010319_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20010319_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20010319_6.addFeatures(features_20010319_6);var lyr_20010319_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20010319_6, 
                style: style_20010319_6,
    title: '2001-03-19<br />\
    <img src="styles/legend/20010319_6_0.png" /> 6,3<br />'
        });var format_20040327_7 = new ol.format.GeoJSON();
var features_20040327_7 = format_20040327_7.readFeatures(json_20040327_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20040327_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20040327_7.addFeatures(features_20040327_7);var lyr_20040327_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20040327_7, 
                style: style_20040327_7,
    title: '2004-03-27<br />\
    <img src="styles/legend/20040327_7_0.png" /> 6,1<br />'
        });var format_20070320_8 = new ol.format.GeoJSON();
var features_20070320_8 = format_20070320_8.readFeatures(json_20070320_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20070320_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20070320_8.addFeatures(features_20070320_8);var lyr_20070320_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20070320_8, 
                style: style_20070320_8,
    title: '2007-03-20<br />\
    <img src="styles/legend/20070320_8_0.png" /> 6,1<br />'
        });var format_20100413_9 = new ol.format.GeoJSON();
var features_20100413_9 = format_20100413_9.readFeatures(json_20100413_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20100413_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20100413_9.addFeatures(features_20100413_9);var lyr_20100413_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20100413_9, 
                style: style_20100413_9,
    title: '2010-04-13<br />\
    <img src="styles/legend/20100413_9_0.png" /> 6,0<br />'
        });var format_20110331_10 = new ol.format.GeoJSON();
var features_20110331_10 = format_20110331_10.readFeatures(json_20110331_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20110331_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20110331_10.addFeatures(features_20110331_10);var lyr_20110331_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20110331_10, 
                style: style_20110331_10,
    title: '2011-03-31<br />\
    <img src="styles/legend/20110331_10_0.png" /> 5,6<br />'
        });var format_20130421_11 = new ol.format.GeoJSON();
var features_20130421_11 = format_20130421_11.readFeatures(json_20130421_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20130421_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20130421_11.addFeatures(features_20130421_11);var lyr_20130421_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20130421_11, 
                style: style_20130421_11,
    title: '2013-04-21<br />\
    <img src="styles/legend/20130421_11_0.png" /> 5,2<br />'
        });var format_20180214_12 = new ol.format.GeoJSON();
var features_20180214_12 = format_20180214_12.readFeatures(json_20180214_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20180214_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20180214_12.addFeatures(features_20180214_12);var lyr_20180214_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20180214_12, 
                style: style_20180214_12,
    title: '2018-02-14<br />\
    <img src="styles/legend/20180214_12_0.png" /> 4,6<br />'
        });var format_20190406_13 = new ol.format.GeoJSON();
var features_20190406_13 = format_20190406_13.readFeatures(json_20190406_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20190406_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20190406_13.addFeatures(features_20190406_13);var lyr_20190406_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20190406_13, 
                style: style_20190406_13,
    title: '2019-04-06<br />\
    <img src="styles/legend/20190406_13_0.png" /> 4,3<br />'
        });var format_20200204_14 = new ol.format.GeoJSON();
var features_20200204_14 = format_20200204_14.readFeatures(json_20200204_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_20200204_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_20200204_14.addFeatures(features_20200204_14);var lyr_20200204_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_20200204_14, 
                style: style_20200204_14,
    title: '2020-02-04<br />\
    <img src="styles/legend/20200204_14_0.png" /> 3,6<br />'
        });var format_CurvasdeNivel_15 = new ol.format.GeoJSON();
var features_CurvasdeNivel_15 = format_CurvasdeNivel_15.readFeatures(json_CurvasdeNivel_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNivel_15 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_CurvasdeNivel_15.addFeatures(features_CurvasdeNivel_15);var lyr_CurvasdeNivel_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CurvasdeNivel_15, 
                style: style_CurvasdeNivel_15,
    title: 'Curvas de Nivel<br />\
    <img src="styles/legend/CurvasdeNivel_15_0.png" /> 4000<br />\
    <img src="styles/legend/CurvasdeNivel_15_1.png" /> 4500<br />\
    <img src="styles/legend/CurvasdeNivel_15_2.png" /> 5000<br />'
        });
var group_Fluctuaciones19762020Km2 = new ol.layer.Group({
                                layers: [lyr_19760315_2,lyr_19890419_3,lyr_19950319_4,lyr_19990226_5,lyr_20010319_6,lyr_20040327_7,lyr_20070320_8,lyr_20100413_9,lyr_20110331_10,lyr_20130421_11,lyr_20180214_12,lyr_20190406_13,lyr_20200204_14,],
                                title: "Fluctuaciones 1976-2020 / Km2"});
var group_Hidrografa = new ol.layer.Group({
                                layers: [lyr_CURSOSDEAGUAMAIPO_0,lyr_CUERPOSDEAGUA_1,],
                                title: "Hidrografía"});

lyr_CURSOSDEAGUAMAIPO_0.setVisible(true);lyr_CUERPOSDEAGUA_1.setVisible(true);lyr_19760315_2.setVisible(true);lyr_19890419_3.setVisible(true);lyr_19950319_4.setVisible(true);lyr_19990226_5.setVisible(true);lyr_20010319_6.setVisible(true);lyr_20040327_7.setVisible(true);lyr_20070320_8.setVisible(true);lyr_20100413_9.setVisible(true);lyr_20110331_10.setVisible(true);lyr_20130421_11.setVisible(true);lyr_20180214_12.setVisible(true);lyr_20190406_13.setVisible(true);lyr_20200204_14.setVisible(true);lyr_CurvasdeNivel_15.setVisible(true);
var layersList = [baseLayer,group_Hidrografa,group_Fluctuaciones19762020Km2,lyr_CurvasdeNivel_15];
lyr_CURSOSDEAGUAMAIPO_0.set('fieldAliases', {'id': 'id', 'TiPO': 'TiPO', 'nombre': 'nombre', });
lyr_CUERPOSDEAGUA_1.set('fieldAliases', {'id': 'id', 'nombre': 'nombre', });
lyr_19760315_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_19890419_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_19950319_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_19990226_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20010319_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20040327_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20070320_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20100413_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20110331_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20130421_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20180214_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20190406_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_20200204_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'fecha': 'fecha', 'Área_km2': 'Área_km2', });
lyr_CurvasdeNivel_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Contour': 'Contour', 'Shape_Leng': 'Shape_Leng', });
lyr_CURSOSDEAGUAMAIPO_0.set('fieldImages', {'id': 'TextEdit', 'TiPO': 'TextEdit', 'nombre': 'TextEdit', });
lyr_CUERPOSDEAGUA_1.set('fieldImages', {'id': 'TextEdit', 'nombre': 'TextEdit', });
lyr_19760315_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_19890419_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_19950319_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_19990226_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20010319_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20040327_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20070320_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20100413_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20110331_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20130421_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20180214_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20190406_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_20200204_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'fecha': 'TextEdit', 'Área_km2': 'TextEdit', });
lyr_CurvasdeNivel_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Contour': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_CURSOSDEAGUAMAIPO_0.set('fieldLabels', {});
lyr_CUERPOSDEAGUA_1.set('fieldLabels', {});
lyr_19760315_2.set('fieldLabels', {});
lyr_19890419_3.set('fieldLabels', {});
lyr_19950319_4.set('fieldLabels', {});
lyr_19990226_5.set('fieldLabels', {});
lyr_20010319_6.set('fieldLabels', {});
lyr_20040327_7.set('fieldLabels', {});
lyr_20070320_8.set('fieldLabels', {});
lyr_20100413_9.set('fieldLabels', {});
lyr_20110331_10.set('fieldLabels', {});
lyr_20130421_11.set('fieldLabels', {});
lyr_20180214_12.set('fieldLabels', {});
lyr_20190406_13.set('fieldLabels', {});
lyr_20200204_14.set('fieldLabels', {});
lyr_CurvasdeNivel_15.set('fieldLabels', {'OBJECTID': 'no label', 'Id': 'no label', 'Contour': 'inline label', 'Shape_Leng': 'no label', });
lyr_CurvasdeNivel_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
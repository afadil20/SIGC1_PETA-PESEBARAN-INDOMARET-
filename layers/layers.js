var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_GambarLokasi_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Gambar Lokasi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GambarLokasi_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [0.000000, -4727.000000, 8192.000000, 0.000000]
        })
    });
var format_BatasArea_2 = new ol.format.GeoJSON();
var features_BatasArea_2 = format_BatasArea_2.readFeatures(json_BatasArea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasArea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasArea_2.addFeatures(features_BatasArea_2);
var lyr_BatasArea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasArea_2, 
                style: style_BatasArea_2,
                popuplayertitle: 'Batas Area',
                interactive: true,
                title: 'Batas Area'
            });
var lyr_GambarLokasi_modified_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Gambar Lokasi_modified<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/GambarLokasi_modified_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12536298.064510, -887271.536356, 12540033.754767, -885102.697120]
        })
    });
var format_jalanutama_4 = new ol.format.GeoJSON();
var features_jalanutama_4 = format_jalanutama_4.readFeatures(json_jalanutama_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalanutama_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalanutama_4.addFeatures(features_jalanutama_4);
var lyr_jalanutama_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalanutama_4, 
                style: style_jalanutama_4,
                popuplayertitle: 'jalan utama',
                interactive: true,
                title: '<img src="styles/legend/jalanutama_4.png" /> jalan utama'
            });
var format_JlGang_5 = new ol.format.GeoJSON();
var features_JlGang_5 = format_JlGang_5.readFeatures(json_JlGang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JlGang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JlGang_5.addFeatures(features_JlGang_5);
var lyr_JlGang_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JlGang_5, 
                style: style_JlGang_5,
                popuplayertitle: 'Jl Gang',
                interactive: true,
                title: '<img src="styles/legend/JlGang_5.png" /> Jl Gang'
            });
var format_JalanLaluLintas_6 = new ol.format.GeoJSON();
var features_JalanLaluLintas_6 = format_JalanLaluLintas_6.readFeatures(json_JalanLaluLintas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanLaluLintas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanLaluLintas_6.addFeatures(features_JalanLaluLintas_6);
var lyr_JalanLaluLintas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JalanLaluLintas_6, 
                style: style_JalanLaluLintas_6,
                popuplayertitle: 'Jalan Lalu Lintas',
                interactive: true,
                title: '<img src="styles/legend/JalanLaluLintas_6.png" /> Jalan Lalu Lintas'
            });
var format_Jalanraya_7 = new ol.format.GeoJSON();
var features_Jalanraya_7 = format_Jalanraya_7.readFeatures(json_Jalanraya_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalanraya_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalanraya_7.addFeatures(features_Jalanraya_7);
var lyr_Jalanraya_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalanraya_7, 
                style: style_Jalanraya_7,
                popuplayertitle: 'Jalan raya',
                interactive: true,
                title: '<img src="styles/legend/Jalanraya_7.png" /> Jalan raya'
            });
var format_LokasiIndomaret_8 = new ol.format.GeoJSON();
var features_LokasiIndomaret_8 = format_LokasiIndomaret_8.readFeatures(json_LokasiIndomaret_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiIndomaret_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiIndomaret_8.addFeatures(features_LokasiIndomaret_8);
var lyr_LokasiIndomaret_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiIndomaret_8, 
                style: style_LokasiIndomaret_8,
                popuplayertitle: 'Lokasi Indomaret',
                interactive: true,
                title: 'Lokasi Indomaret'
            });
var format_ADMINISTRASI_LN_25K_9 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_25K_9 = format_ADMINISTRASI_LN_25K_9.readFeatures(json_ADMINISTRASI_LN_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_25K_9.addFeatures(features_ADMINISTRASI_LN_25K_9);
var lyr_ADMINISTRASI_LN_25K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_25K_9, 
                style: style_ADMINISTRASI_LN_25K_9,
                popuplayertitle: 'ADMINISTRASI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_25K_9.png" /> ADMINISTRASI_LN_25K'
            });
var format_Kecamatan_10 = new ol.format.GeoJSON();
var features_Kecamatan_10 = format_Kecamatan_10.readFeatures(json_Kecamatan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kecamatan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kecamatan_10.addFeatures(features_Kecamatan_10);
var lyr_Kecamatan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kecamatan_10, 
                style: style_Kecamatan_10,
                popuplayertitle: 'Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/Kecamatan_10.png" /> Kecamatan'
            });
var format_Pemukiman_11 = new ol.format.GeoJSON();
var features_Pemukiman_11 = format_Pemukiman_11.readFeatures(json_Pemukiman_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_11.addFeatures(features_Pemukiman_11);
var lyr_Pemukiman_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pemukiman_11, 
                style: style_Pemukiman_11,
                popuplayertitle: 'Pemukiman',
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_11.png" /> Pemukiman'
            });
var format_LahanTerbukaHijau_12 = new ol.format.GeoJSON();
var features_LahanTerbukaHijau_12 = format_LahanTerbukaHijau_12.readFeatures(json_LahanTerbukaHijau_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanTerbukaHijau_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanTerbukaHijau_12.addFeatures(features_LahanTerbukaHijau_12);
var lyr_LahanTerbukaHijau_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanTerbukaHijau_12, 
                style: style_LahanTerbukaHijau_12,
                popuplayertitle: 'Lahan Terbuka Hijau',
                interactive: true,
                title: '<img src="styles/legend/LahanTerbukaHijau_12.png" /> Lahan Terbuka Hijau'
            });
var format_FasilitasUmum_13 = new ol.format.GeoJSON();
var features_FasilitasUmum_13 = format_FasilitasUmum_13.readFeatures(json_FasilitasUmum_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FasilitasUmum_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FasilitasUmum_13.addFeatures(features_FasilitasUmum_13);
var lyr_FasilitasUmum_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FasilitasUmum_13, 
                style: style_FasilitasUmum_13,
                popuplayertitle: 'Fasilitas Umum',
                interactive: true,
                title: '<img src="styles/legend/FasilitasUmum_13.png" /> Fasilitas Umum'
            });
var format_poin_14 = new ol.format.GeoJSON();
var features_poin_14 = format_poin_14.readFeatures(json_poin_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poin_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poin_14.addFeatures(features_poin_14);
var lyr_poin_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poin_14, 
                style: style_poin_14,
                popuplayertitle: 'poin',
                interactive: true,
                title: '<img src="styles/legend/poin_14.png" /> poin'
            });
var format_Building_15 = new ol.format.GeoJSON();
var features_Building_15 = format_Building_15.readFeatures(json_Building_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Building_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Building_15.addFeatures(features_Building_15);
var lyr_Building_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Building_15, 
                style: style_Building_15,
                popuplayertitle: 'Building',
                interactive: true,
                title: '<img src="styles/legend/Building_15.png" /> Building'
            });
var format_Geo_AI_16 = new ol.format.GeoJSON();
var features_Geo_AI_16 = format_Geo_AI_16.readFeatures(json_Geo_AI_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Geo_AI_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geo_AI_16.addFeatures(features_Geo_AI_16);
var lyr_Geo_AI_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geo_AI_16, 
                style: style_Geo_AI_16,
                popuplayertitle: 'Geo_AI',
                interactive: true,
                title: '<img src="styles/legend/Geo_AI_16.png" /> Geo_AI'
            });
var format_Background_17 = new ol.format.GeoJSON();
var features_Background_17 = format_Background_17.readFeatures(json_Background_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Background_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Background_17.addFeatures(features_Background_17);
var lyr_Background_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Background_17, 
                style: style_Background_17,
                popuplayertitle: 'Background',
                interactive: true,
                title: '<img src="styles/legend/Background_17.png" /> Background'
            });
var group_model_output = new ol.layer.Group({
                                layers: [lyr_Building_15,lyr_Geo_AI_16,lyr_Background_17,],
                                fold: 'close',
                                title: 'model_output'});

lyr_OpenStreetMap_0.setVisible(true);lyr_GambarLokasi_1.setVisible(true);lyr_BatasArea_2.setVisible(true);lyr_GambarLokasi_modified_3.setVisible(true);lyr_jalanutama_4.setVisible(true);lyr_JlGang_5.setVisible(true);lyr_JalanLaluLintas_6.setVisible(true);lyr_Jalanraya_7.setVisible(true);lyr_LokasiIndomaret_8.setVisible(true);lyr_ADMINISTRASI_LN_25K_9.setVisible(true);lyr_Kecamatan_10.setVisible(true);lyr_Pemukiman_11.setVisible(true);lyr_LahanTerbukaHijau_12.setVisible(true);lyr_FasilitasUmum_13.setVisible(true);lyr_poin_14.setVisible(true);lyr_Building_15.setVisible(true);lyr_Geo_AI_16.setVisible(true);lyr_Background_17.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GambarLokasi_1,lyr_BatasArea_2,lyr_GambarLokasi_modified_3,lyr_jalanutama_4,lyr_JlGang_5,lyr_JalanLaluLintas_6,lyr_Jalanraya_7,lyr_LokasiIndomaret_8,lyr_ADMINISTRASI_LN_25K_9,lyr_Kecamatan_10,lyr_Pemukiman_11,lyr_LahanTerbukaHijau_12,lyr_FasilitasUmum_13,lyr_poin_14,group_model_output];
lyr_BatasArea_2.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_jalanutama_4.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'panjang': 'panjang', 'pjg_km': 'pjg_km', });
lyr_JlGang_5.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', 'pjg_km': 'pjg_km', });
lyr_JalanLaluLintas_6.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', 'pjg_km': 'pjg_km', });
lyr_Jalanraya_7.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang': 'Panjang', 'pjg_km': 'pjg_km', });
lyr_LokasiIndomaret_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_ADMINISTRASI_LN_25K_9.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Kecamatan_10.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'luas': 'luas', 'kodepos': 'kodepos', 'area_ha': 'area_ha', });
lyr_Pemukiman_11.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'area_ha': 'area_ha', });
lyr_LahanTerbukaHijau_12.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'area_ha': 'area_ha', });
lyr_FasilitasUmum_13.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Luas': 'Luas', 'area_ha': 'area_ha', });
lyr_poin_14.set('fieldAliases', {'id': 'id', 'nama': 'nama', 'alamat': 'alamat', });
lyr_Building_15.set('fieldAliases', {});
lyr_Geo_AI_16.set('fieldAliases', {'FID': 'FID', });
lyr_Background_17.set('fieldAliases', {});
lyr_BatasArea_2.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_jalanutama_4.set('fieldImages', {'id': '', 'nama': '', 'panjang': '', 'pjg_km': '', });
lyr_JlGang_5.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', 'pjg_km': '', });
lyr_JalanLaluLintas_6.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', 'pjg_km': '', });
lyr_Jalanraya_7.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang': 'TextEdit', 'pjg_km': '', });
lyr_LokasiIndomaret_8.set('fieldImages', {'id': '', 'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_ADMINISTRASI_LN_25K_9.set('fieldImages', {'KARKTR': 'TextEdit', 'STSBTS': 'TextEdit', 'FCODE': 'TextEdit', 'KELAS': 'TextEdit', 'UUPP': 'TextEdit', 'LOKASI': 'TextEdit', 'REMARK': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ADMIN1': 'TextEdit', 'ADMIN2': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'WAKLD1': 'TextEdit', 'WAKLD2': 'TextEdit', 'WADKC1': 'TextEdit', 'WADKC2': 'TextEdit', 'WAKBK1': 'TextEdit', 'WAKBK2': 'TextEdit', 'WAPRO1': 'TextEdit', 'WAPRO2': 'TextEdit', 'TIPTBT': 'TextEdit', 'PJGBTS': 'TextEdit', 'KLBADM': 'TextEdit', 'TIPLOK': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Kecamatan_10.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'luas': 'TextEdit', 'kodepos': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_Pemukiman_11.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_LahanTerbukaHijau_12.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_FasilitasUmum_13.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Luas': 'TextEdit', 'area_ha': 'TextEdit', });
lyr_poin_14.set('fieldImages', {'id': 'TextEdit', 'nama': 'TextEdit', 'alamat': 'TextEdit', });
lyr_Building_15.set('fieldImages', {});
lyr_Geo_AI_16.set('fieldImages', {'FID': '', });
lyr_Background_17.set('fieldImages', {});
lyr_BatasArea_2.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_jalanutama_4.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'panjang': 'no label', 'pjg_km': 'no label', });
lyr_JlGang_5.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', 'pjg_km': 'no label', });
lyr_JalanLaluLintas_6.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', 'pjg_km': 'no label', });
lyr_Jalanraya_7.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang': 'no label', 'pjg_km': 'no label', });
lyr_LokasiIndomaret_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_ADMINISTRASI_LN_25K_9.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Kecamatan_10.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'luas': 'no label', 'kodepos': 'no label', 'area_ha': 'no label', });
lyr_Pemukiman_11.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'area_ha': 'no label', });
lyr_LahanTerbukaHijau_12.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'area_ha': 'no label', });
lyr_FasilitasUmum_13.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'area_ha': 'no label', });
lyr_poin_14.set('fieldLabels', {'id': 'no label', 'nama': 'no label', 'alamat': 'no label', });
lyr_Building_15.set('fieldLabels', {});
lyr_Geo_AI_16.set('fieldLabels', {'FID': 'no label', });
lyr_Background_17.set('fieldLabels', {});
lyr_Background_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
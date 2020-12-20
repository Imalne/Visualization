var symbolColor = ['#a6c84c', '#ffa022', '#46bee9'];

var BJData = [
    [{name:'北京'}, {name:'上海',value:95}],
    [{name:'北京'}, {name:'广州',value:90}],
    [{name:'北京'}, {name:'大连',value:80}],
    [{name:'北京'}, {name:'南宁',value:70}],
    [{name:'北京'}, {name:'南昌',value:60}],
    [{name:'北京'}, {name:'拉萨',value:50}],
    [{name:'北京'}, {name:'长春',value:40}],
    [{name:'北京'}, {name:'包头',value:30}],
    [{name:'北京'}, {name:'重庆',value:20}],
    [{name:'北京'}, {name:'常州',value:10}]
];

var SHData = [
    [{name:'上海'},{name:'包头',value:95}],
    [{name:'上海'},{name:'昆明',value:90}],
    [{name:'上海'},{name:'广州',value:80}],
    [{name:'上海'},{name:'郑州',value:70}],
    [{name:'上海'},{name:'长春',value:60}],
    [{name:'上海'},{name:'重庆',value:50}],
    [{name:'上海'},{name:'长沙',value:40}],
    [{name:'上海'},{name:'北京',value:30}],
    [{name:'上海'},{name:'丹东',value:20}],
    [{name:'上海'},{name:'大连',value:10}]
];

var GZData = [
    [{name:'广州'},{name:'福州',value:95}],
    [{name:'广州'},{name:'太原',value:90}],
    [{name:'广州'},{name:'长春',value:80}],
    [{name:'广州'},{name:'重庆',value:70}],
    [{name:'广州'},{name:'西安',value:60}],
    [{name:'广州'},{name:'成都',value:50}],
    [{name:'广州'},{name:'常州',value:40}],
    [{name:'广州'},{name:'北京',value:30}],
    [{name:'广州'},{name:'北海',value:20}],
    [{name:'广州'},{name:'海口',value:10}]
];
var planePath ='path://M887.7 885.7c-0.8 0-1.5 0-2.3-0.1-181.4-21.2-406-21.1-706.9 0.1h-1.4c-0.7 0-16.9 0-34.8-4.1-27.9-6.3-45.8-18.9-53.1-37.4-1.7-4.3-1.9-9.1-0.5-13.5 9.4-29.7 41.8-39.8 70.8-43.9 32.4-231.3 20.6-434.3-36.2-620.2-2.1-6.9-0.3-14.4 4.6-19.6 5-5.2 12.3-7.4 19.3-5.6 115.7 28.7 234.7 56.8 307.3 57.2 136.1 0.3 276.2-18.4 428.3-57.2 6.6-1.7 13.5 0.1 18.5 4.7 5 4.6 7.3 11.4 6.2 18-6 35.9-12.9 71.7-19.6 106.3-21.8 113.4-44.4 230.6-38 363.2v1.5c-0.7 26.6 2.3 102.1 24.8 131.8 35.9 47.3 33.1 97.9 32.9 100-0.4 5.5-2.9 10.6-7.1 14.1-3.6 3-8.2 4.7-12.8 4.7z m-754.8-49.8c10.2 6.1 29.5 9.6 43.5 9.8 289.9-20.4 509.9-21.3 689.4-2.5-2.7-14.2-8.8-33.5-22.9-52-15.4-20.3-25.6-53.3-30.3-97.9-3.1-29.1-2.7-53.6-2.6-58.4-6.6-137.1 16.4-256.5 38.7-372 4.7-24.7 9.6-49.9 14.2-75.3-144 34.6-277.9 51.3-408.4 51-69.7-0.3-176-23.9-283.1-50.1 24.8 90.8 39.7 187.1 44.3 286.8 4.8 104.2-1.5 216.1-18.7 332.6-1.4 9.2-8.8 16.2-18.1 17-26.2 2.2-39.4 6.7-46 11zM177 805z';

var pinyin = {
    "安徽":  "anhui",
    "澳门":  "aomen",
    "北京":  "beijing",
    "重庆":  "chongqing",
    "福建":  "fujian",
    "甘肃":  "gansu",
    "广东":  "guangdong",
    "广西":  "guangxi",
    "贵州":  "guizhou",
    "海南":  "hainan",
    "河北":  "hebei",
    "黑龙江":"heilongjiang",
    "河南":  "henan",
    "湖北":  "hubei",
    "湖南":  "hunan",
    "江苏":  "jiangsu",
    "江西":  "jiangxi",
    "吉林":  "jilin",
    "辽宁":  "liaoning",
    "内蒙古":"neimenggu",
    "宁夏":  "ningxia",
    "青海":  "qinghai",
    "山东":  "shandong",
    "上海":  "shanghai",
    "山西":  "shanxi",
    "陕西":  "shanxi1",
    "四川":  "sichuan",
    "台湾":  "taiwan",
    "天津":  "tianjin",
    "香港":  "xianggang",
    "新疆":  "xinjiang",
    "西藏":  "xizang",
    "云南":  "yunnan",
    "浙江":  "zhejiang",
}

var regionDistribution = {
    "安徽":  1,
    "澳门":  1,
    "北京":  2,
    "重庆":  10,
    "福建":  6,
    "甘肃":  1,
    "广东":  7,
    "广西":  7,
    "贵州":  10,
    "海南":  2,
    "河北":  3,
    "黑龙江":1,
    "河南":  8,
    "湖北":  8,
    "湖南":  8,
    "江苏":  2,
    "江西":  7,
    "吉林":  1,
    "辽宁":  1,
    "内蒙古":4,
    "宁夏":  3,
    "青海":  9,
    "山东":  4,
    "上海":  5,
    "山西":  4,
    "陕西":  9,
    "四川":  10,
    "台湾":  4,
    "天津":  3,
    "香港":  4,
    "新疆":  9,
    "西藏":  4,
    "云南":  10,
    "浙江":  6
}

var hanzi = {
    "anhui":"安徽",
    "aomen":"澳门",
    "beijing":"北京",
    "chongqing":"重庆",
    "fujian":"福建",
    "gansu":"甘肃",
    "guangdong":"广东",
    "guangxi":"广西",
    "guizhou":"贵州",
    "hainan":"海南",
    "hebei":"河北",
    "heilongjiang":"黑龙江",
    "henan":"河南",
    "hubei":"湖北",
    "hunan":"湖南",
    "jiangsu":"江苏",
    "jiangxi":"江西",
    "jilin":"吉林",
    "liaoning":"辽宁",
    "neimenggu":"内蒙古",
    "ningxia":"宁夏",
    "qinghai":"青海",
    "shandong":"山东",
    "shanghai":"上海",
    "shanxi":"山西",
    "shanxi1":"陕西",
    "sichuan":"四川",
    "taiwan":"台湾",
    "tianjin":"天津",
    "xianggang":"香港",
    "xinjiang":"新疆",
    "xizang":"西藏",
    "yunnan":"云南",
    "zhejiang":"浙江",
}

var styleJson= [
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": {
            "color": "#021019"
        }
    },
    {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "highway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#147a92"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "arterial",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#0b3d51"
        }
    },
    {
        "featureType": "local",
        "elementType": "geometry",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "land",
        "elementType": "all",
        "stylers": {
            "color": "#08304b"
        }
    },
    {
        "featureType": "railway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "railway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#08304b"
        }
    },
    {
        "featureType": "subway",
        "elementType": "geometry",
        "stylers": {
            "lightness": -70
        }
    },
    {
        "featureType": "building",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#857f7f"
        }
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#000000"
        }
    },
    {
        "featureType": "building",
        "elementType": "geometry",
        "stylers": {
            "color": "#022338"
        }
    },
    {
        "featureType": "green",
        "elementType": "geometry",
        "stylers": {
            "color": "#062032"
        }
    },
    {
        "featureType": "boundary",
        "elementType": "all",
        "stylers": {
            "color": "#1e1c1c"
        }
    },
    {
        "featureType": "manmade",
        "elementType": "geometry",
        "stylers": {
            "color": "#022338"
        }
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "background",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#2da0c6",
            "visibility": "off"
        }
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "poilabel",
        "elementType": "all",
        "stylers": {
            "visibility": "off"
        }
    },
    {
        "featureType": "boundary",
        "elementType": "all",
        "stylers": {
            "color": "#00ffffff",
            "hue": "#00ffff",
            "weight": "1.3",
            "lightness": 33,
            "saturation": 52,
            "visibility": "on"
        }
    }
]
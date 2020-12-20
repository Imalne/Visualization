var color = ['#a6c84c', '#ffa022', '#46bee9', '#fff'];

var selected_levels=["country", "region", "province"]

var selected_level="country";

function selectLevel(level){
    document.getElementById("selected_level").innerText = level;
    selected_level = level
}

function highlightRegion(inputRegionName){
    let level = selected_level;
    console.log(level)
    let regionData= [];

    if (inputRegionName === null){
        for(let key in regionDistribution){
            regionData.push({
                name:key,
                value: 1
            })
        }
    }
    else if( level === selected_levels[0]){
        for(let key in regionDistribution){
            regionData.push({
                name:key,
                value: 0
            })
        }
    }
    else if( level === selected_levels[1]){
        for(let key in regionDistribution){
            regionData.push({
                name:key,
                value: (regionDistribution[key] === regionDistribution[inputRegionName])?0:1
            })
        }
    }
    else {
        for(let key in regionDistribution){
            regionData.push({
                name:key,
                value: (key === inputRegionName)?0:1
            })
        }
    }


    return regionData;

}

function normalRegion(inputRegionName){
    let level = document.getElementById("selected_level").innerText;
    console.log(level)
    let regionData= [];

    if (inputRegionName === null){
        for(let key in regionDistribution){
            regionData.push({
                name:key,
                value: 1
            })
        }
    }
    else if( level === selected_levels[0]){
        for(let key in regionDistribution){
            regionData.push({
                name:key,
                value: 1
            })
        }
    }
    else if( level === selected_levels[1]){
        for(let key in regionDistribution){
            regionData.push({
                name:key,
                value: 1
            })
        }
    }
    else {
        for(let key in regionDistribution){
            regionData.push({
                name:key,
                value: 1
            })
        }
    }


    return regionData;

}


function initGeoMapShow(seriesList){
    let dom = document.getElementById("container");
    let myChart = echarts.init(dom);
    let option = {
        backgroundColor: '#404a59',
        title : {
            text: '',
            subtext: '',
            left: 'center',
            textStyle: {
                color: '#fff'
            }
        },
        tooltip: {
            show:false,
            trigger: 'item',
        },
        visualMap: {
            type: "continuous",
            min: 0,
            max: 2,
            text: ["High", "Low"],
            realtime: false,
            calculable: true,
            color: ["blue", "yellow"],
            show: false
        },
        series: [{
                name: '',
                type: 'map',
                zoom: 1.2, // 缩放比例，可以根据实际情况调整
                mapType: 'china', // 使用中国地图
                label: {
                    show: false,
                    emphasis:{
                      show:true
                    },
                },
                roam: true,
                itemStyle: {
                    areaColor: '#323c48',
                    borderColor: '#ffffff',
                    emphasis:{
                        label: {
                            show:true
                        }
                    },
                },
                emphasis:{
                    label: {
                        show:true
                    }
                },

                data:highlightRegion(null)
        }]
    };

    if (option && typeof option === "object") {
        myChart.setOption(option, true);
        myChart.on("mouseover", function (params){
            console.log(params)
            let regionData = highlightRegion(params["name"]);
            option.series[0].data=regionData;
            myChart.setOption(option, true);
            }
        )
        myChart.on("mouseout", function (params){
                console.log(params)
                let regionData = normalRegion(params["name"]);
                option.series[0].data=regionData;
                myChart.setOption(option, true);
            }
        )

        myChart.on("click", function (params) {
            console.log(params);
            let regionData = normalRegion(params["name"]);
            option.series[0].data=regionData;
            myChart.setOption(option, true);
            showPredict(params.name)
        })
        console.log(option)
    }
}


function showPredict(inputRegionName){
    let level = selected_level;
    if( level === selected_levels[0]){
        showLinePrediction({name:"country"});
    }
    else if( level === selected_levels[1]){
        showLinePrediction({name: "region "+ regionDistribution[inputRegionName]});
    }
    else {
        showLinePrediction({name: inputRegionName});
    }
}

function showLinePrediction(lineData){
    let lineChart = echarts.init(document.getElementById("line_chart"));
    lineChart.clear()
    let option = {
        title: {
            text: lineData["name"]
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
    };
    lineChart.setOption(option,true);

}

var count = 1;

function init(){
    initGeoMapShow([]);
    // showLinePrediction([])
}

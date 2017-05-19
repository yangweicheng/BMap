var map;

//创建百度地图实例
function bMap() {
    map = new BMap.Map("aa");
    InitializeMap();
    scrollZoom()
}

//初始化地图
function InitializeMap() {
    map.centerAndZoom(new BMap.Point(116.4035, 39.915), 8);
    //  map.setCenter(new BMap.Point(116.4035,39.915));    //设置中心点
    //  map.setZoom(8)              //设置地图级别
    // map.setCurrentCity(name);   //设置城市
}

//开启滚轮缩放
function scrollZoom() {
    map.enableScrollWheelZoom(true);
}

//设置地图类型
function setMapType(type) {
    if (type == 1) {
        map.setMapType(BMAP_NORMAL_MAP); //此地图类型展示普通街道视图。
    } else if (type == 2) {
        map.setMapType(BMAP_PERSPECTIVE_MAP); //此地图类型展示透视图像视图。
    } else if (type == 3) {
        map.setMapType(BMAP_SATELLITE_MAP); //此地图类型展示卫星视图。(自 1.2 新增)
    } else if (type == 4) {
        map.setMapType(BMAP_HYBRID_MAP); //此地图类型展示卫星和路网的混合视图。(自 1.2 新增)
    }
}


//放大
function setDa() {
    map.setZoom((map.getZoom()) ++);
}

//缩小
function setDa() {
    map.setZoom((map.getZoom()) --);
}

//定点
function setPoint(lat, lng) {
    var point = new BMap.Point(lat, lng);
    return point;
}

//标注
function setMarker() {

}

//跳到某个点
function pant(point) {
    map.panTo(point);
}
bMap()

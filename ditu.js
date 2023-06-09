 // 百度地图API功能
    // 创建Map实例

    var markerPointLevel1 = [
        {
            buildingNum: "123",
            id: 1,
            lat: "30.207036169515438",
            lng: "120.08899292561351",
            name: "西湖区"
        },
        {
            buildingNum: "79",
            id: 2,
            lat: "30.34473201035828",
            lng: "120.15884493257122",
            name: "拱墅区"
        },
        {
            buildingNum: "51",
            id: 3,
            lat: "30.187587607727094",
            lng: "120.19237042945677",
            name: "滨江区"
        },
        {
            buildingNum: "16",
            id: 6,
            lat: "30.2323576392334",
            lng: "120.18012613888587",
            name: "上城区"
        }
    ];

    var data = {
        center: {
            level: 15,
            longitude: 120.154571,
            dimensionality: 30.270801
        },
        setting: {
            cityName: "杭州",
            enableScrollWheelZoom: true,
            imgSize: {
                x: 20,
                y: 50
            },
            param: {
                //说明窗口
                width: 5,
                height: 3,
                title: "高压塔3"
            }
        }
    }
    var map = new BMap.Map("XSDFXPage", { enableMapClick: true });
    const point = new BMap.Point(
        data.center.longitude,
        data.center.dimensionality
    );
    map.centerAndZoom(point, data.center.level);
    // 添加地图类型控件
    map.addControl(new BMap.MapTypeControl());
    // 设置地图显示的城市 此项是必须设置的
    map.setCurrentCity("杭州");
    // 开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);

    /************************************************
     添加工具条、比例尺控件
     *************************************************/
    map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }));
    map.addControl(new BMap.NavigationControl());
    map.addControl(
        new BMap.NavigationControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            type: BMAP_NAVIGATION_CONTROL_SMALL
        })
    );
    /************************************************/



    /*覆盖物1级层 zoom<11的时候展示
 --------------------------------*/
    function ComplexCustomOverlay1(point, nums, area, districtId){
        this._point = point;
        this._nums = nums;
        this._area = area;
        this._districtId = districtId;
    }
    ComplexCustomOverlay1.prototype = new BMap.Overlay();

    ComplexCustomOverlay1.prototype.initialize = function(map) {
        this._map = map;
        var div = (this._div = document.createElement("div"));
        var point = this._point;
        div.style.position = "absolute";
        div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
        div.style.backgroundColor = "rgba(234,41,60,0.8)";
        div.style.color = "#fff";
        div.style.height = "80px";
        div.style.width = "80px";
        div.style.borderRadius = "100%";
        div.style.boxSizing = "content-box";
        div.style.whiteSpace = "nowrap";
        div.style.MozUserSelect = "none";
        div.style.fontSize = "12px";
        div.style.textAlign = "center";
        div.style.cursor = "pointer";

        //区
        var areaDom = (this._areaDom = document.createElement("div"));
        areaDom.appendChild(document.createTextNode(this._area));
        areaDom.style.height = "40px";
        areaDom.style.lineHeight = "60px";
        areaDom.style.fontSize = "14px";
        div.appendChild(areaDom);

        //楼盘数量
        var numsDom = (this._numsDom = document.createElement("div"));
        numsDom.appendChild(document.createTextNode(this._nums + "个楼盘"));
        numsDom.style.height = "40px";
        numsDom.style.lineHeight = "20px";
        numsDom.style.boxSizing = "content-box";
        numsDom.style.fontSize = "14px";
        div.appendChild(numsDom);

        var that = this;

        div.onmouseover = function() {
            this.style.zIndex = 99999;
            this.style.backgroundColor = "rgba(234,41,60,1)";
        };
        div.onmouseout = function() {
            this.style.zIndex = BMap.Overlay.getZIndex(point.lat);
            this.style.backgroundColor = "rgba(234,41,60,0.8)";
        };
        div.onclick = function() {
            filterObj.districtId = that._districtId;
            map.centerAndZoom(point, 14); //跳到设置点并设置zoom为14级
            $(".l-select.district").find(".result")[0].childNodes[0].textContent =
                that._area; //点击区域,相应左侧区域文字要同步
        };
        map.getPanes().labelPane.appendChild(div);

        return div;
    };

    ComplexCustomOverlay1.prototype.draw = function(){
        var map = this._map;
        var pixel = map.pointToOverlayPixel(this._point);
        this._div.style.left = pixel.x - 40 + "px";
        this._div.style.top  = pixel.y - 40 + "px";
    }

    function ComplexCustomOverlay1(point, nums, area, districtId) {
        this._point = point;
        this._nums = nums;
        this._area = area;
        this._districtId = districtId;
    }

    // 编写自定义函数,创建标注(1级)
    function addMarkerLevel1(point, nums, area, districtId) {
        // var marker = new BMap.Marker(point);
        // map.addOverlay(marker);
        var myCompOverlay = new ComplexCustomOverlay1(
            point,
            nums,
            area,
            districtId
        );
        map.addOverlay(myCompOverlay);
    }

    map.clearOverlays();
    for (let i = 1; i < markerPointLevel1.length; i++) {
        let point = new BMap.Point(
            markerPointLevel1[i].lng,
            markerPointLevel1[i].lat
        );
        addMarkerLevel1(
            point,
            markerPointLevel1[i].buildingNum,
            markerPointLevel1[i].name,
            markerPointLevel1[i].id
        );
    }
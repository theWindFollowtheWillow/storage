import React from "react"

let map = null;

class Map extends React.Component{
    componentDidMount(){
        this.createMap();
        this.setMapEvent();
        this.addMapControl();
        this.addMapOverlay();
    }
    render(){
        return (
            <div className="baidumap" id="allmap" style={{width:"100%",height:"150px",border:"#ccc solid 1px",fontSize:"12px"}}></div>
        )
    }
    createMap(){ 
        map = new BMap.Map("allmap"); 
        var point = new BMap.Point(104.07642,38.6518);
        map.centerAndZoom(point,11);
      }
      setMapEvent(){
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom()
      }
      addClickHandler(target,window){
        target.addEventListener("click",function(){
          target.openInfoWindow(window);
        });
      }
      addMapOverlay(){
        var markers = [
          {content:"我的备注",title:"我的标记",imageOffset: {width:0,height:3},position:{lat:39.94012,lng:116.376853}}
        ];
        for(var index = 0; index < markers.length; index++ ){
          var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
          var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
          })});
          var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
          var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
          };
          var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
          marker.setLabel(label);
          this.addClickHandler(marker,infoWindow);
          map.addOverlay(marker);
        };
      }
      //向地图添加控件
      addMapControl(){
        var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
        map.addControl(scaleControl);
        var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(navControl);
        var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
        map.addControl(overviewControl);
      }
}

export default Map;
import React, { useEffect } from "react";
import styled from "styled-components";
const { kakao } = window;

const Map = () => {
  useEffect(() => {
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(35.167799, 128.988791), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // 마커가 표시될 위치입니다
    var markerPosition = new kakao.maps.LatLng(35.1679, 128.98913);

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    var iwContent =
        '<div style="align-items:center; padding:5px;">백양대로 684, 게임인스 <br>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      iwPosition = new kakao.maps.LatLng(35.167799, 128.988791); //인포윈도우 표시 위치입니다

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
      position: iwPosition,
      content: iwContent,
    });

    // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
    infowindow.open(map, marker);
  }, []);

  return (
    <>
      <Txt>
        <div className="inner">주소</div>
        <div className="inner">부산광역시 사상구 백양대로 684</div>
      </Txt>
      <Wrap>
        <div
          id="map"
          style={{
            width: "1000px",
            height: "460px",
          }}
        ></div>
      </Wrap>
      <FootFlex>
      <FootTxt><b>지하철</b>&nbsp;&nbsp;&nbsp;부산 2호선 사상역</FootTxt>
      <FootTxt><b>버스</b>&nbsp;&nbsp;&nbsp;지선 128-1, 133, 169-1, 62, 129-1 신라대 입구 하차</FootTxt>
      </FootFlex>
    </>
  );
};

const Wrap = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 20px;
`;

const Txt = styled.div`
  font-weight: 700;
  text-align: center;
  margin: 20px 0;
`;

const FootFlex = styled.div`
display: grid;
justify-content: center;
align-items: center;
`

const FootTxt = styled.div`
text-align: left;
margin: 30px;
`

export default Map;

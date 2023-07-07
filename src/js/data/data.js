export default class Data {
  constructor( {about} ){
    this.data = [];
    switch (about){
      case 'carrer' : {
        this.data = [
          { title: "CLES Re SI", 
            img: 's1.jpg',
            date:[ "202202", "202208"], 
            Languege: ["JavaScript"], UIFrameWork: ["Vue2.X", "ag-grid"],
            detail: [ 'Samsung 에스원 파견 Project',"CLES 사이트 리뉴얼 개발 (에스원 사내 업무 사이트)", 
                      "서비스 중단된 tmax의 top에서 vue로 리뉴얼",
                      "기존 소스 미제공, 직접 사이트 파악 후 작업", 
                      "임직원 ID만 접근 가능 Page 및 기능 다량 존재 하여 기존의 고객과 주 1회 회의 방식으론 개발 시간이 부족", 
                      `=> 지속적인 커뮤니케이션 후 팀원 당 한명씩 담당자 분배 후 실시간 응답 형식으로 변경`, 
                      `대부분이 대용량 데이터 조회 페이지였지만, 페이지 마다 다르게 동작하는 CRUD 버튼 요구`,
                      `=> 대용량 데이터 표출 용이, 커스텀 용이한 ag-grid 사용`, 
                      `기존 페이지에 원래 존재하던 오류 개선 요청 및 대용량 데이터 조회 페이지 조회 속도 개선 요청`,]}

              ,{title: "스마트검색-AdminSite 리뉴얼 SI", img: 's1.jpg',
                date: ["202006", "202202"], Languege: ["Vue2.x","TypeScript" ], environment: ["VSCode"],
                detail: ['Samsung 에스원 파견 Project', "Smart검색 Admin-Site 익스플로 서비스 종료로 인해 Vue로 리뉴얼 개발", "curl 개발 소스 분석 및 기존 화면 분석", "리뉴얼 화면 기획 및 기획서 작성", "기능 개발, DB서버 연계 테스트 및 최종 배포 완료"], subProject: { title: "스마트검색-SM&SI", date: ["202006","202202"], Languege: ["C++","Visual Basic" ], environment: ["VisualStudio"],
                detail: ['Samsung 에스원 파견 Project', "인증 확률을 다양한 옵션을 통해 조절하여 검색을 빠르게 처리해 인증 속도를 높여주는 시스템", "시스템 내 마스크 인증 사용 옵션 추가 개발, 다수의 사업장에 직접 배포 및 테스트", "사업장의 요청에 따라 마스크 인증의 옵션 확률을 다르게 처리"]}}
              
                ,{title: "TAD-AdminSite SI", img: 's1.jpg',
                date:[ "202006", "202009"], Languege: ["JavaScript"], UIFrameWork: ["Vue2.X", "vuetify"],
                detail: ['Samsung 에스원 파견 Project',"TAD 관리자 사이트 개발(얼굴 인증 사진 관리용 사이트)"," 사이트 디자인, 기능 개발, DB서버 연계 테스트 및 최종 배포 완료"]}
              
                ,{title: "Active UI SI", img: 'companion.jpg',
                date:[ "202009", "202011"], Languege: ["TypeScript"], UIFrameWork: ["Vue2.X", "devextreame"],
                detail: ['Samsung 에스원 파견 Project',"회사 고유 UI Framework 솔루션 개발","사용자들의 편리한 이용과 활용도를 위해 typescript로 개발", "Grid 에서 사용 가능한 button, TextBox, InputBox 등 컴포넌트들의 옵션과 이벤트 개발", "grid의 데이터를 to excel 혹은 from excel 기능을 기본 옵션으로 추가 개발"]}
              
                ,{title: "모바일 보안 카메라 Admin Site SI", img: 's1.jpg', //img만들기
                date:[ "202009", "202102"], Languege: ["TypeScript"], UIFrameWork: ["Vue2.X", "devextreame"],
                detail: ['Samsung 에스원 파견 Project',"모바일 보안 카메라 관리자 사이트 개발","회사 내 자체 UI 솔루션 기반으로 개발", "개발 도중 요구된 한 페이지의 CRUD 기능이 devextreme과 달라서 추가로 개발해야 하는 상황이 발생", 
                          "미리 컴포넌트에 옵션화 했기 때문에 원활한 대응이 가능했었음", "DB서버 연계 테스트 및 최종 배포 완료"]}
                
                ,{title: "V3얼굴인증-SM&SI", img: 's1.jpg', //img 추가
                date:[ "202108", "202112"], Languege: ["C++"], environment: ["VisualStudio"],
                detail: ['Samsung 에스원 파견 Project', "마스크 사용 인증 옵션과 온도 체크 옵션에 따른 출입 기계와의 상호 통신 부분 개발", "중국 및 여러 사업장에 배포 후 운영되고 있다", ]}
              ]
              break;
            }
    case 'project' : {
      this.data = [
        { title: "KakakoBank Clone Portpolio.ver", date:[ "202305", "202305"], Languege: ["Javascript", "HTML", "CSS"], environment: ["VScode"],
        detail: ['독학하여 만들어보는 Toy Project', "KakakoBank Clone Base", " html, javascript, css ", "자주 사용되는 slider library도 직접 만들어보며 libaray에 의존하지 않는 연습을 해봄", "이직 준비 중인 포토폴리오 느낌으로 내용을 꾸밈", ], 
         url: "https://minji-baek.github.io/kakaoBank-page-clone/" }
       
        ,{ title: "Next-level-page", date:[ "202305", "202305"], Languege: ["Javascript", "HTML", "CSS"], environment: ["VScode"],
        detail: ['독학하여 만들어보는 Toy Project', "터득한 animation, parallax-scrolling, css를 활용하고 또 다른 기법들을 사용한 interactive page", "scrolling 뿐만 아니라 mouse move와 object들 간의 parallax 기법도 활용하여 더욱 활용도 높은 기능의 기반이 될 것" ] ,
        url: "https://minji-baek.github.io/next-level-page/" }
       
        ,{ title: "Flying-Bird", date:[ "202306", "202306"], Languege: ["Javascript", "HTML", "CSS"], environment: ["VScode"],
        detail: ['독학하여 만들어보는 Toy Project', "Canvas를 활용하여 mouse click event 만으로 간단한 2D game 을 만들었다.", "tiled라는 programe 통해 직접 tile asset을 만들어 보고 illustrator로 직접 제목 png를 만듬", "click이 아닌 holding 방식으로 또 다른 게임을 만들어 보고 싶음", ],
        url: "https://minji-baek.github.io/mouse-click-game/" }
       ]
       break;
      }
    }
  }
}
// export const SData = new Data();
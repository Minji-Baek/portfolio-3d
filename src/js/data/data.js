export default class Data {
  constructor( {about} ){
    this.data = [];
    switch (about){
      case 'carrer' : {
        this.data = [
          { title: 'CLES to Vue', 
            img: 's1.jpg',
            date:[ '202202', '202208'], 
            Languege: ['JavaScript'], UIFrameWork: ['Vue2.X', 'ag-grid'],
            company: ['Samsung S1','Companion System'],
            detail: [ 'Samsung 에스원 파견 Project','CLES 사이트 리뉴얼 개발 (에스원 사내 업무 사이트)', '서비스 중단된 tmax의 top에서 vue로 리뉴얼',],
            pitch: [ `대부분이 대용량 데이터 조회 페이지였고 페이지 마다 다르게 동작하는 CRUD 버튼 요구했기에 대용량 데이터 표출 용이하며 커스텀 용이한 ag-grid를 사용`,
            '공통 component 사용하여 사업장 마다 공통된 페이지를 빠르게 작업',],
            role: ['공통 component 개발 및 교육', '고객사와 소통', '기존 Page 분석 및 리뉴얼 기획 참여']}

        ,{  title: 'SmartSearch', img: 's1.jpg', 
            subtitle: 'SmartSearch-AdminSite Renewal',
            company: ['Companion System', 'Samsung S1'],
            date: ['202006', '202202'], Languege: ['Vue2.x','TypeScript' ],
            detail: ['Samsung 에스원 파견 Project', 'Smart검색 Admin-Site 익스플로 서비스 종료로 인해 Vue로 리뉴얼 개발',],
            pitch: ['회사 고유 ui framework인 active ui를 base로 개발한 프로젝트'],
            role: ['기존 개발 소스, 화면 분석', '리뉴얼 화면 기획 및 기획서 작성', '개발, 테스트, 배포 완료'],}

        ,{  title: 'TAD-Admin', img: 's1.jpg',
            company: ['Samsung S1','Companion System'],
            date:[ '202006', '202009'], Languege: ['JavaScript'], UIFrameWork: ['Vue2.X', 'vuetify'],
            detail: ['Samsung 에스원 파견 Project','TAD 관리자 사이트 개발(얼굴 인증 사진 관리용 사이트)',],
            pitch: ['vuetify로 대중적인 디자인 구성','얼굴 인증 사진 data 조회',],
            role: [ '리뉴얼 화면 기획 및 기획서 작성', '개발, 테스트, 배포 완료']}
          
        ,{  title: 'Active UI', img: 'companion.jpg',
            company: ['Samsung S1','Companion System'],
            date:[ '202009', '202011'], Languege: ['TypeScript'], UIFrameWork: ['Vue2.X', 'devextreame'], //1등으로 나옴
            detail: ['Samsung 에스원 파견 Project','회사 고유 UI Framework 솔루션',],
            pitch: ['사용자들의 편리한 이용과 활용도를 위해 typescript로 개발','data 조회에 용이','Grid Data를 to excel or from excel 기능 기본 옵션'],
            role: ['Component 개발', '테스트']}
          
        ,{  title: 'MCC-Admin', img: 's1.jpg', //img만들기
            subtitle: '모바일 보안 카메라 AdminSite',
            company: ['Samsung S1','Companion System'],
            date:[ '202009', '202102'], Languege: ['TypeScript'], UIFrameWork: ['Vue2.X', 'devextreame'],
            detail: ['Samsung 에스원 파견 Project','모바일 보안 카메라 관리자 사이트 개발',],
            pitch: ['회사 내 자체 UI 솔루션 기반으로 개발', ],
            role: ['Site 개발', '테스트', '배포 완료']}
            
        ,{  title: 'SM-c++', img: 's1.jpg', //img 추가
            subtitle: 'SmartSearch & V3 ',
            company: ['Samsung S1','Companion System'],
            date:[ '202006', '202202'], Languege: ['C++'], 
            detail: ['Samsung 에스원 파견 Project',
            'smartsearch - 인증 확률을 다양한 옵션을 통해 조절하여 검색을 빠르게 처리해 인증 속도를 높여주는 시스템', 
            'v3 - 이미지 프로세싱 기술을 사용하여 저장된 사진으로 얼굴 인증을 하는 시스템',],
            pitch: ['시스템 내 마스크 인증 사용 옵션 추가 개발','마스크 인증의 옵션 확률을 다르게'],
            role: ['마스크 사용 인증 옵션과 온도 체크 옵션에 따른 출입 기계와의 상호 통신 부분 개발', '중국 및 여러 사업장에 배포 후 현재 운영 중']}
        ]
              break;
            }
    case 'project' : {
      this.data = [
        { title: 'KakakoBank Clone', date:[ '202305', '202305'], Languege: ['Javascript', 'HTML', 'CSS'],
        img: 'cloneKakao.png',
        company: ['Alone'],
        subtitle: 'https://minji-baek.github.io/kakaoBank-page-clone/',
        detail: ['독학하여 만들어보는 Toy Project', 'KakakoBank Clone Base', '이직 준비 중인 포토폴리오 느낌으로 내용을 꾸밈'],
        pitch: [ '자주 사용되는 slider library도 직접 만들어보며 libaray에 의존하지 않는 연습을 해봄','자주 사용되는 design cloning' ],
        role: ['Site 개발', '테스트', '배포 완료']}

      ,{ title: 'Next-level-page', date:[ '202305', '202305'], Languege: ['Javascript', 'HTML', 'CSS'], 
        company: ['Alone'], img: 'activePage.png',
        subtitle: 'https://minji-baek.github.io/next-level-page/',
        detail: ['독학하여 만들어보는 Toy Project', '터득한 animation, parallax-scrolling, css를 활용하고 또 다른 기법들을 사용한 interactive page'],
        pitch: ['자주 사용되는 design cloning' , 'scrolling 뿐만 아니라 mouse move와 object들 간의 parallax 기법도 활용하여 더욱 활용도 높은 기능의 기반이 될 것' ],
        role: ['Site 개발', '테스트', '배포 완료']}

      ,{ title: 'Flying-Bird', date:[ '202306', '202306'], Languege: ['Javascript', 'HTML', 'CSS'], 
        company: ['Alone'], img: '2Dgame.png',
        subtitle: 'https://minji-baek.github.io/mouse-click-game/',
        detail: ['독학하여 만들어보는 Toy Project', 'Canvas를 활용하여 mouse click event 만으로 만든 간단한 2D game'],
        pitch: ['tiled라는 programe 통해 직접 tile asset을 만들어 보고 illustrator로 직접 제목 png를 만듬' ],
        role: ['Site 개발', '테스트', '배포 완료']}

      ,{ title: 'Canvas-Portfolio', date:[ '202306', '202306'], Languege: ['React', 'HTML', 'CSS', 'Jsx'], 
        company: ['Alone'], img: 'cloneKakao.png',
        subtitle: 'https://minji-baek.github.io/canvas-practice-projects/',
        detail: ['독학하여 만들어보는 Toy Project', 'Canvas, React, Matter.js를 활용하여 2D Portpolio 를 개발'],
        pitch: ['상단의 erasing 형식의 사진 show', '하단의 CountDown, firework, confetti 등 2d effect', '중단의 matter.js 물리엔진 구현' ],
        role: ['Site 개발', '테스트', '배포 완료']}
        ]
        break;
      }
    }
  }
}
// export const SData = new Data();
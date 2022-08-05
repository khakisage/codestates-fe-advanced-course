# codestates-fe-advanced-course

> ### **배포 링크** https://jsonbulletinboard.netlify.app/
***
#### **기능 구현 영상**
> ![bulletin_board](https://user-images.githubusercontent.com/91720916/183012565-42bde13f-ed37-4cad-8045-79f6207f9203.gif)
***
#### **프로젝트 실행 방법** 
1. 배포 링크로 접속
2. 메인화면에서 게시글 확인 가능
3. 하단부의 숫자나 양쪽 괄호 표시 키를 눌러 페이지 이동 가능
4. 게시글 제목 우측의 'more' 버튼 클릭 시 상세 내용 확인 가능
***
#### **사용 스택**
React, Javascript, CSS, HTML, styled-components, netlify
***
#### **구현 기능** 
게시물 리스트, 게시물 상세 페이지(모달), 페이지네이션
***
#### **구현에서 어려웠던 점** 
게시물 상세 페이지 구현이 어려웠습니다.<br>
모든 게시글을 눌렀을 때, 가장 마지막 게시글이 상세페이지에 표시되었습니다.<br>
콘솔창에서 확인한 결과, map 함수로 게시글을 반복적으로 표시했으나 그 안에서 상세페이지가 표시되는 모달 컴포넌트도 게시글의 전체 갯수만큼 실행되었습니다.<br>
결과적으로 상세페이지에 대한 컴포넌트에서 api가 전체 게시글의 갯수만큼 실행되면서 최종적으로 가장 마지막 게시글의 id가 입력되어 모든 게시글에서 가장 마지막 게시글의 상세 페이지가 불러와지고 있었습니다.<br>
결론적으로 해결을 못하였고, 구현 방법을 바꾸었습니다.<br>
기존에 상세페이지가 표시되는것을 Boolean 값으로 상태를 주어서 표시하려 했었다면, 바꾼 방법은 id값을 상태값으로 담아주고, 이 상태값이 게시글을 클릭해서 가져온 id값과 일치됐을 때, 상세 페이지를 표시해주는 방법으로 변경하여 해결하였습니다.
***
#### **추가 구현 사항 및 구현 방법**
**pagination 구현**
pagination의 알고리즘은 다음과 같습니다.
1. 게시물을 페이지 별로 나누려면 한 페이지에 표시될 게시물의 최대 개수를 알아야 한다.
2. 게시글의 갯수 / 한 페이지 당 최대 표시 가능 게시글 갯수 를 한 후, 반올림 하여 총 페이지 갯수를 구한다.
3. 전체 게시글을 배열로 생각했을 때, 페이지 별 첫번째 게시글의 index값을 알아야 한다.
4. (페이지 번호 - 1) * 페이지 당 표시할 게시물 갯수 = 페이지 별 첫번째 게시글의 index 값.
위 알고리즘을 바탕으로 구현하였습니다.
***
#### 이외 추가적으로 한 것 또는 하고 싶은 말.
위 내용 이외에 크게 한 것은 없고, 모바일화면에서도 확인이 가능하도록, css에서 최대한 반응형으로 크기를 설정하였습니다.
프로젝트를 하면서, 오랜만에 sprint를 진행하는 것 같아서 재밌었고, 이론적인 공부를 하다가 이렇게 코드를 작성하다보니 그동안 해이해졌던 마음이 다시 조금씩 열정적으로 바뀌는 것 같습니다. 제 사이트를 구경해주셔서 감사합니다~ 모두들 좋은 하루 되세요~!

22.12.18 수업내용

### snippets : configure user snippets 작성방법

스니펫 제너레이터 http://snippet-generator.app  
참고 블로그 : https://blog.naver.com/wltnrkspdlqjgody/222523223198

- prefix : 자동완성을 위한 키워드
- body : 자동완성이 되는 코드. 줄바꿈은 끝에 콤마(,)를 붙여준다
- $1 : 자동완성이 되었을 때의 커서 위치
- description : 내용에 대한 설명, 키워드 입력시 설명도 표시됨
- ${TM_FILENAME_BASE} : 파일이름 넣기

### Context API

참고 블로그 : https://olaf-go.medium.com/context-api-vs-redux-e8a53df99b용

### 커스텀 훅 만들기

기본적인 입력 폼에 데이터를 넣는 함수는 많은 곳에서 같은 로직으로 사용될 수 있다.  
입력폼을 사용하는 모든 컴포넌트에서 해당 로직이 중복되는것을 방지하기 위해 커스텀 훅을 만들어서 사용한다  
커스텀 훅의 이름은 use로 시작하는것이 컨벤션이다.

참고 블로그 : https://kyounghwan01.github.io/blog/React/custome-hook/

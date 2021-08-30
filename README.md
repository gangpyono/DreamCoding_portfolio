# DreamCoding_portfolio

## 20210818

html 골격만 전체적으로 강의내용을 안보고 작성해보았다. css를 적용하는과정에서 헷갈리지않기위해 클래스명을 짓는데 시간을 많이 쓴것같다.

## 20210819

디자인적인 요소를 생각하다보니 정작 css를 작성하기보다 dribble,canva등의 사이트를 더 많이 돌아다닌것같았다.. 보여지는것보다 기능을 구현하는데 집중하여 css를 작성해나가보자.

## 20210820

navbar에서 menu부분중 마우스를 각 메뉴에 올릴떄 테두리를 추가하고싶었는데 border로 적용시 마우스를 올릴떄마다 border크기가 추가되어 메뉴의 사이즈가 변경되었다. 테두리를 추가하면서 요소의 크기에 영향을주지않는방법을 찾다가 outline라는속성을 찾아 적용시켰다.
각 section의 컨텐츠들을 중앙정렬을 시키고싶었는데 최근엔 플렉스박스를 이용하여 중앙정렬을 시킨다하여 작성하였으나 아무런 변화가없었다. 그래서 내부컨테이너를 추가하여 이 컨테이너의 너비를 50%로 설정하고 플렉스박스의 속성으로 중앙정렬을시키니 정상적으로 정렬되었다.

## 20210824

About에서 CSS를작성하던중 가상선택자와 선택자를 조합할 생각을 못해 내부 아이콘만 scale를 적용하려했으나 계속해서 전체 테두리도 함꼐커져 시간이좀 걸렸다.

## 20210826

project에서 버튼에 마우스를 올릴시 프로젝트의 개수를 나타내는 애니매이션을 적용하려고했는데, 갯수를나타내는 텍스트가 마우스를 올리지않아도 자리를 차지하는 문제가발생했다. 구글링중 position : absolute를 활용하여 해결할 수있었다.

## 20210830

navbar의 메뉴중 원하는 메뉴를 클릭할시 해당 섹션으로 이동하는 기능을 구현하는과정에서 document.querySelector의 인자로 문자열을 받아올 수있었다. 평소엔 단순히 html의 클래스명을 받아와 자바스크립트에서 조작을 할 수있는 용도로 선언하는 줄알았는데 해당 인자가 DOMString을 인자로 받는다고한다. 이는 UTF-16문자열로써 일반적으로 우리가 사용하는 문자열과 동일하기떄문에 인자로 문자열을 전달해도 정상적으로 작동한다.</br>

work섹션에서 버튼을 클릭할떄 해당하는 프로젝트만 보여지게하는 과정에서 querySelectorAll로 프로젝트를 전부 받아와 노드리스트를 만들고 그 노드리스트를 돌면서 버튼과 데이터속성을 일치하는 프로젝트만 필터링하는 기능을 구현하고자 map배열함수를 이용하려 하였으나 NodeList는 배열이 아니여서 사용을 할수없고
forEach()함수를 이용하여 각 배열의 요소를 참조하여 원하는 동작을 실행시킬 수 있었다.</br>

또한 버튼을 클릭했을떄 필터링이 되지않는 현상이 발생하는데, 이는 버튼을클릭했을떄 버튼이 클릭되지않고 버튼 옆 프로젝트개수를 나타내는 span태그를 클릭해서 그렇다. 이는 자바스크립트에서 target변수를 설정할떄 클릭이벤트 발생시 target의 nodeName이 'BUTTON'인지를 확인하여 'BUTTON'이아닌 'span'일시 parentNode를 target변수에 저장하여 'BUTTON'이 저장될수있게 설정해준다.</br>

# guguCon frontend repository

- 한 기능 작업할 때마다 이슈 작성해주세요!

## 한 페이지를 생성할 때 체크할 것

1. src/views에 `페이지.js` 추가
2. src/styles에 각 페이지에 해당하는 `페이지.scss` 파일 추가
    > 다른 페이지 스타일과 충돌을 막기 위해 항상 페이지클래스 선택할 요소로 선택해 꾸며주세요.
    > ex) `.loginView{ h1{background-color: black} }`
3. 페이지 코드를 작성할 때 컴포넌트로 뺄 수 있는 건 최대한 빼면서 코드를 100줄 이내로 작성하는 것을 추천합니다.

## git convention

- `[tag] #이슈 - 커밋메세지`
|tag|설명|
|---|---|
|Feat|새 기능 구현|
|Fix|버그 수정|
|Test|테스트 코드|
|Style|기능에 영향을 주지 않는 수정|

## folder structure

```
public
ㄴimages : 웹페이지 내에서 사용하는 이미지를 저장하는 폴더.

src
ㄴassets : 웹페이지 내에서 import하는 에셋을 저장하는 폴더.
ㄴcomponents : 웹페이지에서 전체적으로 자주 사용하는 컴포넌트를 모아두는 폴더
ㄴviews : 굵직한 하나 하나의 페이지.
ㄴstyles : scss 파일을 모아두는 폴더
  각 페이지별.scss
  common.scss
```


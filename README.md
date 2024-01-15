# guguCon frontend repository

강원대 멋사 x 한림대 멋사에서 개최하고 23/11/18~19에 진행된 감자톤의 출품작입니다. 해커톤의 주제인 '쓰레기 무단투기를 해결하는 서비스'를 기반으로 주변 쓰레기 정보를 수집하고 플로깅 루트를 추천하는 서비스인 '나부터'를 고안하였습니다.

> Contributors
> <br/>[dandamdandam](https://github.com/dandamdandam) [GamJaDo](https://github.com/GamJaDo) [Jeje](https://github.com/jjh4450) [possiblly](https://github.com/possiblly)

## 목차
- [화면설계서](https://github.com/realKamja/GuguCon_front?tab=readme-ov-file#화면_설계서)
- [요구사항](https://github.com/realKamja/GuguCon_front?tab=readme-ov-file#요구사항)
  - 서비스 기능 개요
  - 각 개요에 대한 디테일
- [folder structure](https://github.com/realKamja/GuguCon_front?tab=readme-ov-file#folder_structure)
- [tech stack](https://github.com/realKamja/GuguCon_front?tab=readme-ov-file#tech_stack)

## 화면 설계서
![totalView](https://github.com/realKamja/GuguCon_front/assets/102032954/ea40f0e0-699e-4f9d-85c3-e8cd14e3e0a6)

## 요구사항

### 서비스 기능 개요
- ①, ②에서 데이터 가공을 하고, ③, ④에서 이용한다.
1. 사용자의 신고를 받아 쓰레기 위치를 저장해 데이터베이스를 형성
2. 신고가 많이 발생한 위치를 쓰레기 다발구역으로 지정
3. ②를 기반으로 플로깅 루트 추천
4. ③에서 추천한 루트를 모집글 형식으로 올려 친환경 커뮤니티 형성.

### 각 개요에 대한 디테일
- 실제 구현한 것은 **볼드체**로 표시했다.
- ①-1. 사용자의 신고를 받는 방식
   - **현재 위치를 직접 받아온다**
   - 직접 주소를 입력하게 한다
- ①-2. 허위신고 대처 방법
- ②-1. 쓰레기 다발구역 지정 - 군집화 방법론
- ③-1. 루트 추천 구현 방법
   - naver direction 15 api 이용 (단점: 자동차 용이다)
   - **naver 길찾기 url로 리다이렉션 (단점: 경유지 지정은 못한다)**
- ③-2. 루트를 짜기 위해 받아야 할 기본정보
   - 경유지의 개수
   - 현재 사용자 위치

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

## tech stack
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
<img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/naver_Map_Api-03C75A?style=for-the-badge&logo=naver&logoColor=white">

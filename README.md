## 1. 과제 설치 및 실행 방법

### `npm install`

### `npm start`

<br/>

## 2. 프로젝트 구조

```
└── src
     ├── App.tsx
     ├── index.tsx
     ├── index.css
     ├── components
     │     ├── Modal
     │     │     ├── Modal.tsx
     │     │     └── Modal.style.ts
     │     ├── TimeSlot
     │     │     ├── TimeSlot.tsx
     │     │     └── TimeSlot.style.ts
     │     ├── Timetable
     │     │     ├── Timetable.tsx
     │     │     └── Timetable.style.ts
     ├── hooks
     │     ├── useTimetable.ts
     ├── pages
     │     ├── TimetablePage
     │     │     ├── TimetablePage.tsx
     │     │     └── TimetablePage.style.ts
     └── styles
           ├── GlobalStyle.ts
           └── theme.ts
```

<br/>

## 3. 필수 요구사항 외 고도화된 부분

### 미디어 쿼리를 통한 화면 반응형 설계

화면 크기가 작아질 경우, 테이블 배치를 하단으로 자동으로 내리는 반응형 디자인을 적용하였습니다.
모바일 크기까지 화면이 축소되면 테이블이 세로로 배치되도록 구현하여 사용자가 모바일에서도 편리하게 사용할 수 있도록 하였습니다.
<br/>

### 토스트 알림 기능

각 시간대에 5개 이상의 항목이 추가될 경우, 사용자에게 토스트 알림을 표시하였습니다.
<br/>

### 자동 정렬 기능

각 시간대에서 교시의 시간이 변경될 경우, 시작 시간을 기준으로 자동 정렬이 되도록 구현하였습니다.
교시가 삭제되거나 이후 시간대로 넘어오는 경우에도 정렬 기능이 유지되도록 처리하였습니다.
<br/>

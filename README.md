# 장바구니 애플리케이션 with React, Redux

주요 기능

- [ ] TODO 애플리케이션
  - TODO create
  - TODO edit (상태, 텍스트)
  - TODO delete
  
- [x] redux 적용
  - [x] 디렉터리 구조 설계
  - [x] Fetch API 제작
  - [x] fruit slice

- [x] `json-server` mock server
  - [x] GET /fruits
  - [x] POST /fruits
  - [x] PUT /fruits/{id}
  - [x] DELETE /fruits/{id}
  
```bash
./src
├── App.jsx # 1, 2 event handler, dispatch 관련 코드는 전부 여기에 있다.
├── App.module.css
├── Layout.jsx
├── Layout.module.css
├── assets
│   └── react.svg
├── components
│   ├── ItemHeader.jsx
│   ├── ItemHeader.module.css
│   ├── ItemInput.jsx
│   ├── ItemInput.module.css
│   ├── SumFooter.jsx
│   └── SumFooter.module.css
├── features
│   ├── api.mjs
│   └── fruit
│       ├── api # 서버와 통신하는 코드를 따로 분류 했다.
│       │   ├── createOneFruit.mjs
│       │   ├── deleteOneFruit.mjs
│       │   ├── getAllFruits.mjs
│       │   ├── getOneFruit.mjs
│       │   └── updateOneFruit.mjs
│       └── fruit.reducer.js # slice된 state, 동기 reducer, 비동기 reducer
├── index.css
├── main.jsx
└── store.mjs
```
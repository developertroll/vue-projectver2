# vue-projectver2

## 계획안

```
1. 기존 프로젝트를 기반으로 좀 더 최적화된 프로젝트를 만들어보기
2. 목표가 존재하는 상황에서 3달 걸렸던 기존 프로젝트에서 얼마나 더 빠르게 완성될수 있는가 보기
3. 기존 프로젝트에서 미흡했던 부분들을 보완하기
```

### 20231205 일지

```
1. composables을 만들때 처음부터 index를 부여하고 상태를 통해서 관리하게 해서 데이터 관리를 편하게 하기
2. 기존 프로젝트에서 컴포넌트에서 처리하던 함수들 중에서 반복되는 함수가 많았는데, 이걸 composable에 포함시키게 해서 코드를 간결하게 하기
3. 기존 프로젝트에서 결재 라인이 따로 존재했고, 이 결재라인이 가지는 형태가 달라서 관리가 힘들었는데, 형태를 통일화하고 타입과 인덱스를 참조하게 하여 간결화하기
4. 기존 결재는 결재라인이 가장 높은 계급을 가진 사람에게 가게 하는 1개만 존재했는데, 다르게 만들 방법 찾기.

작업중 생각난 방안으로 <slot></slot> 시스템을 이용하면 비슷한 컴포넌트를 일일이 제작하는 대신 하나의 컴포넌트로 여러개를 만들 수 있을 것 같음.
현재 기본 layout 및 기본적으로 사용할 컴포저블들을 제작하였고, 연쇄결재라인 틀은 완서되어 있지만 이걸 만드는 방법에 대해 고민해봐야함.
이거 완성하고 CreatePlan을 쪼개서 각각의 step들을 각각의 컴포넌트로 만들고, CreatePlan이 해당 데이터를 받아가며 모든 단계가 끝나면 적절한 완료 창과 함께 다시 mainPage로 돌아가게 하면 됨. 현재로써는 결재라인에 들어가지 못한 프로젝트도 결재대기중 status를 가진채 존재하게 만드려고 함. 그렇게 할 경우 지난번 프로젝트 때 처럼 ApprovalList에서 일일이 다시 불러와서 재처리 해줄 필요가 없어짐.
```

### 개선사항

```
1. (20231205) App.vue에서 메뉴를 선택할때 처리하는 방식을 개선하여 mainPage로 가는 클릭을 1개의 경로로 통일, emit 문제가 발생하지 않도록 하기 위함.
2. (20231205) 결재 라인 생성을 위한 연쇄결재라인이 가능하도록 composable에 chained 체크 기능을 넣고, 결재 승인이 될때 chained가 true인 경우 후속 결재라인을 자동으로 바꿈.
3. (20231205) 자주 쓰는 css들을 class이름으로 처리해서 main.css에 들어가게 하여 class 이름을 사용함으로써 반복 css 적용시키는 것을 적용함.
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

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
2-1.(20231208) 해당 개선사항은 취소됨. 더 나은 방법으로 처리하도록 결정.
3. (20231205) 자주 쓰는 css들을 class이름으로 처리해서 main.css에 들어가게 하여 class 이름을 사용함으로써 반복 css 적용시키는 것을 적용함.
4. (20231206) tree 관련해서 코드 최적화 진행, 이제 node를 관리하고 선택 체크하기 더 쉬워짐
5. (20231207) ApprovalLine에서 유사 transfer를 제작. table과 tree를 transfer할 수 있는 상태가 되었음.
6. (20231208) allocateWork가 고정값으로 변경되어 input을 덜 해도 되게 바뀜.
7. (20231208) generalForm을 통해서 prop으로 column만 넘기면 알아서 생성되는 컴포넌트 만듬.
8. (20231211) finishedPage를 만들어서 무언가 만들어지거나 수정되었을때 이 페이지를 통해서 원래 페이지로 이동할 수 있게 하였음.
9. (20231211) showProject 코드가 최적화되어 더 간결하고 관리하기 쉬워짐.
10. (20231211) dialogSlot을 통해서 이제 dialog 관련 페이지를 일일이 만들 필요가 없어짐.
11. (20231213) 업무 페이지에서 project를 최소화하여 볼 수 있게 해둠.
12. (20231215) 결재, 프로젝트 메뉴가 상세메뉴로 많이 갈라지지 않고 tab기능으로 처리해 더 간결하게 만듬.
```

### 20231206 일지

```
tree 작업 완료. ApprovalLine에서 중간 단계와 그 단계에서 순서를 결정하는 것을 만들어두었고, 현재로써는 마지막 단계에서 어떻게 처리할지 생각해볼 필요가 있음. 현재로써 생각은 Approval에 chain 처리가 있으니 ApprovalLine을 저장하는 곳을 따로 만들고 즉석에서 만들거나 기존 결재라인을 불러올지 선택할 수 있게 하면 될거같음. 3번쨰인 일 지정은 현재 생각에는 기존 코드에서는 일일이 지정해야 했지만 일의 특징을 해당 직원의 직책에 따라 자동으로 결정되게 할 예정.
```

### 20231207 일지

```
결재라인 layout 및 상호작용 완성. 자주쓰는 결재라인 생성을 다른 페이지로 따로 뺄지 고민중임(현재 레이아웃이 너무 못생김). border를 제공하는 방법을 찾던 해서 현재로써 생각은 큰 제목 아래에 border를 가지는 각각의 파트처럼 보이게 하거나 아니면 ver1에서 자주쓰던 popup 방식을 쓰는걸 고려해야 함. 결재라인을 제대로 불러와지는것도 확인했고 현재 chained로 처리되어있는 결재와 결재라인을 갈아엎어서 현재 생각으로 Approval은 결재의 형식과 처리되는 과정을 만들고 ApprovalLine은 이러한 과정과 완료 여부를 따지도록 만드는게 어떨까 싶음. 만약 ApprovalLine이 현재 결재가 어떻게 진행되는지의 여부도 따지게 된다면 전체 결재는 ApprovalLine을 통해서 보게 되고 두 composable은 서로를 호출하는 형식이 될것같은데 이걸 어떻게 처리할지 고민해봐야함.
```

### 20231208 일지

```
고민 끝에 ApprovalLine을 통해서 연쇄결재를 처리하는것보다 Approval을 여러개 만들고 일종의 비공개 상태를 유지시키는게 더 낫다는 결론을 내리고 관련 코드를 제거함. CreatePlan 부분 내부에 Step1도 generalForm이라는 컴포넌트로 분리해서 컬럼의 제목이 될 prop만 넘겨주면 알아서 생성하도록 만들었음. 차후 form을 사용할 때 이 코드를 재사용할 수 있게 되었음. 그리고 allocateWork에 input 부분들을 제거하고 생각해볼때 개발자에게 마케팅 일을 시키는 등 부서 바깥으로 벗어난 작업을 하지 않을 것이기 때문에 이렇게 해도 된다고 판단했음. CreatePlan이 저장될 때 이렇게 들어온 form1, form2, form3을 1개의 값으로 합쳐서 결재라인이 만들어지도록 하면 됨.
```

### 20231211 일지

```
CreatePlan 페이지 완성. 이제 프로젝트와 결재라인 만들어지는 코드를 작성하면 됨. 결재 생성이 현재 조금 어거지로 작성되있어서 좀 더 최적화 할 예정.
밥먹고 와서 결재 생성 최적화 완료. 이제 결재라인을 읽고 자동으로 모든 필요한 결재가 만들어지게 되었음. 겸사겸사 CreatePlan 페이지에서 뒤로 돌아갔을때 기존 데이터가 남아있도록 처리. 코드 상으로는 처리가 됬으니 이제 결재 메커니즘과 페이지를 만들면 됨.
```

### 20231212 일지

```
결재라인 관련 코드 작성 및 페이지 작성 완료. 업무가 저장되도록 코드는 작성 끝냈고 이제 이 업무가 보여지는 환경인 WorkTable(작업완), CreateProgress(업무보고, 작업중) 작업해야함. CreateProgress는 제출할 시 finishPage로 이동하도록 해서 결재라인이 만들어지게 할 거임. ApprovalTable이 현재 반응형이 아니어서 차후 수정해야함. 반응형으로 만드려면 computed에 해당 테이블 값을 올리면 될듯
```

### 20231213 일지

```
반응형 문제는 결재가 처리될때 로컬스토리지에 저장은 되는데 List의 값이 바뀌진 않아서 발생한 문제였음. 결재 관련 코드가 끝나고 해당 리스트가 저장된 값을 다시 불러오게 바꾸자 반응형이 되었음. CreatePlan을 수정도 가능하게 코드를 수정하였는데 1번째 페이지에 computed값이 제대로 들어가지 않던 이유를 찾던 끝에 발견함. 이유는 computed는 mounted 전에 이미 끝났기 때문에 발생한 것으로 created로 값을 넣어주니 정상작동하는거 확인함. 혼란을 피하기 위해 수정은 반려된 프로젝트에서만 수정 가능. 삭제 역시 마찬가지며 다른 코드가 꼬이지 않도록 현재는 status가 삭제로 변경되는 걸로 해결.approvalTable과 같은 방법으로 PlanTable도 반응성 추가. 업무 페이지 만들기 시작했고 현재는 expanded Table을 통해서 처리하고 있음. 업무 보고 버튼이 있는 자리를 dialog처리해서 CreateProgress를 만들 수 있게 하면 됨. 그리고 해당 페이지가 결재로 연결되게 하면 됨.
업무 페이지 역시 탭 처리를 해서 전체 업무/제출한 보고 현황/완료(프로젝트가 완료되지 않음)를 볼 수 있게 할 예정.
```

### 20231214 일지

```
업무보고 결재 생성되는것 확인. 이제 상세 관련해서 업무보고서를 볼 수 있도록 다른 페이지를 링크하도록 하고 승인 반려 처리 하면 됨. 현재 Work는 {...Work} 식으로 분리되어 처리되어 있기 때문에 직접적인 수정이 안됨. 업무는 결재라인이 약간 다르게 돌아가야 해서 상세에서 description이 잘 뜨도록 수정했고 승인은 되있고 반려가 실행될때 업무가 다시 진행으로 돌아가게 코드처리하면 됨. 업무 끝나면 진행중인 프로젝트들에서는 업무 상태가 뜨도록 처리할 예정. 그리고 모든 업무가 완료 상태가 될 경우 완료된 프로젝트로 넘어가게 할 예정. 해당 넘어가는 과정은 결재가 필요없기 때문에 마지막 업무가 끝나면 자동으로 넘어갈거임.
```

### 20231215 일지

```
알람 시스템 완성. 헤더를 메뉴화해서 타이틀(메인메뉴로 가는 버튼) 왼쪽, 오른쪽에 접속자와 알람 버튼이 뜨게 할 예정.
알람 이후에 메세지 기능은 알람과 거의 동일하게 만들며 quilljs를 활용해서 메세지를 일종의 이메일처럼 활용할 수 있게 하기.
+ 만약 시간적 여유가 된다면 이런 메일 형식의 메시지와 일반 문자메시지 식 메시지를 구분해서 만들기.
```

### 20231218 일지

```
메세지 보내기 및 보기 작성 완료. 보기 파트는 개선이 필요함(css적인 면이 하나도 안되어있음). 그리고 메시지 답장 기능 추가 필요.
보기 파트는 개선했으나 답장 기능 및 코드의 가시성과 유지보수 편의성을 위해서 quill과 관련된 코드 다 엎어서 다른 더 편리한 에디터를 찾아 사용할 예정.
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

```

```

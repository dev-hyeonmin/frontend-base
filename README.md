## NextJS

https://nextjs.org/docs

## npm workspace

1. Add workspace: npm init -w ./packages/<WORKSPACE_NAME>
2. Install package on workspace: npm install <PACKAGE_NAME> -w <WORKSPACE_NAME>
3. Intsall package on root: npm install --workspaces=false <PACKAGE_NAME>
   https://docs.npmjs.com/cli/v9/using-npm/workspaces?v=true

## Reduct

:: UI -> Actions -> Reducer -> Store -> State
:: ducks pattern (기능 중심)

1. 항상 reducer()란 이름의 함수를 export default 해야 합니다.
2. 항상 모듈의 action 생성자들을 함수 형태로 export 해야 합니다.
3. action type은 reducer/ACTION_TYPE 형태로 작성합니다. (ex / const ADD_TODO = "todo/ADD_TODO")

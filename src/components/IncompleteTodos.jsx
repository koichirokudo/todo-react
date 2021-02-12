import React from "react";
// css in js
const style = {
  backgroundColor: "#c6ffe2",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8px"
};

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div style={style}>
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          // map等でループする際には、仮想DOMは変更前と変更後で差分のみ抽出して反映する
          // 何個目の要素なのかを正確に比較するために目印を着けてあげる key={todo}
          // 関数に引数を渡すときは、そのまま書くのはNG（何度も実行されてしまうから）
          // なので、 () => このアロー関数で新しく関数を生成してあげるとよい
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

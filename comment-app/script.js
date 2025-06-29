const input = document.getElementById("input-text");
const sendBtn = document.getElementById("send-btn");
const area = document.getElementById("comments-area");

sendBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") return;

  const comment = document.createElement("div");
  comment.className = "comment";
  comment.textContent = text;

  // 0〜1のランダム値をCSS変数で渡す（Y座標に使う）
  comment.style.setProperty("--rand", Math.random());

  area.appendChild(comment);

  // 一定時間後に自動削除
  setTimeout(() => {
    comment.remove();
  }, 5000);

  input.value = "";
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendBtn.click();
  }
});

function loginForm() {
  // パスワードを取得
  var password = document.getElementById("password").value;

  // パスワードのチェック
  if (password === "240310") {
    alert("ログインに成功しました！");
    window.location.href = "main.html"; // ログイン成功時のリダイレクト
    return false;
  } else {
    alert("パスワードが間違っています。もう一度お試しください。");
    return true; // ログイン失敗
  }
}
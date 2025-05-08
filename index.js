
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [pw, setPw] = useState("");
  const [ok, setOk] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (pw === "umapro") setOk(true);
    else alert("パスワードが違います");
  };
  return ok ? (
    <div style={{ backgroundColor: "#27408B", minHeight: "100vh", color: "white", padding: 20 }}>
      <h1>マニュアル一覧</h1>
      <ul>
        <li><Link href="/manuals/crew">① クルーマニュアル</Link></li>
        <li><Link href="/manuals/kitchen">② キッチン調理マニュアル</Link></li>
        <li><Link href="/manuals/clean">③ クレンリネスマニュアル</Link></li>
        <li><Link href="/manuals/guide">④ 料理説明マニュアル</Link></li>
      </ul>
    </div>
  ) : (
    <form onSubmit={handleSubmit} style={{ backgroundColor: "#27408B", minHeight: "100vh", color: "white", padding: 20 }}>
      <h1>パスワードを入力してください</h1>
      <input type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
      <button type="submit">送信</button>
    </form>
  );
}

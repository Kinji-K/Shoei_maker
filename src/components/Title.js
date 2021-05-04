import Card from "react-bootstrap/Card"

const Title = () => {
  return(
    <div>
      <h1>書影メーカー</h1>
      <Card className="card">
        <Card.Body>
          <h2>本アプリの説明</h2>
          <p>ISBNコードをもとに書籍の基本情報と書影を表示するウェブアプリです。<br/>入力欄にISBNコードを入力して「書影作成」ボタンを押してください。<br/>ISBNコードはハイフンはありでもなしでも動くはずです。</p>
          <p>書籍情報や書影は<a href="https://openbd.jp/">openBDプロジェクト</a>のAPIを利用しています<br/>利用規約はAPIの提供元にしたがい、本の販促・紹介目的に限ります。</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Title;
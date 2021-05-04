import Card from "react-bootstrap/Card"

const Title = () => {
  return(
    <div>
      <Card className="card">
        <h1>書影メーカー</h1>
      </Card>
      <Card className="card">
        <Card.Body>
          <h2>本アプリの説明</h2>
          <p>ISBNコードをもとに書籍の基本情報と書影を表示するウェブアプリです。入力欄にISBNコードを入力して「書影作成」ボタンを押してください。ISBNコードはハイフンはありでもなしでも動くはずです。</p>
          <p>書籍情報や書影は<a href="https://openbd.jp/">openBDプロジェクト</a>のAPIを利用しています。利用規約はAPIの提供元にしたがい、本の販促・紹介目的に限ります。</p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Title;
# What is this?

Browser Extension. You can jump to headings by mouse.

# TODO

* **UIを現代的にする** - 結局は「馬鹿にされない」ため、「普通だと思われる」ため、「話をしにくそうな人だと思われない」ためであるが、ゆえに優先度が高い。
* いま表示されている部分がどの見出しの部分であるのか、目立たせる
* どこかの時点でJavaScriptやめる - TypeScriptかF#(Fableを使う)に変更したい
* Twitter等に対応する

  * 最初はコンフィグできなくていい
  * 将来は「ドメインAではこれとこれを見出しとして扱う」という設定を持たせたい

* Firefoxでも一応使いたいので対応する - 優先度は低い。JavaScriptやめた後にする

  * サイドバー(Firefoxにしか存在しない)を使うか `browserAction` のままにするかどうかは未定

* Microsoft Storeに出す - Firefox対応より前にやる。JavaScriptやめる前でも後でもいい。
* Chrome Web Storeに出す? - 今まで無意味な面倒で疲弊したし、3月(正確には1月)からプライバシー関連の表明が必要でさらに面倒になったので気が乗らない。

* テスト - やりたいが辛い。

  * `browser.runtime.executeScript()` 駆動にしてしまったのでNodejs(とavajsとか)でCLIからテストできない。
  * 多分Puppeteerとかでローカルサーバのページにアクセスさせて実施する。PCの性能的にやりたくない、というか多分やってられない。

* **アイコンまともにする** - ふざけたままになっている
* typeとJSON SchemaがFirefoxのままになっている問題

  * type - `webextension-polyfill` を使っているので単純に `@type/chrome` にすればいいわけではない
  * JSON Schema - Firefox対応は後なので@typesのもの(2つあるうちどちらか)に変えてもいいが、自作Schemaなので使いたがっている。

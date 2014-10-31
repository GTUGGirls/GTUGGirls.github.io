# GTUG Girls サイト

このサイトでは Polymer (https://www.polymer-project.org/) を使っています。

素の html ファイルは以下の2つです。

* index_raw.html
* meetups_raw.html

これらを編集したら、vulcanize (https://github.com/polymer/vulcanize) をかけてください。

```
$ vulcanize -o index.html index_raw.html
$ vulcanize -o meetups.html meetups_raw.html
```


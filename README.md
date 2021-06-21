# GTUG Girls サイト

このサイトでは Polymer (https://www.polymer-project.org/) を使っています。

素の html ファイルは以下の2つです。

* index_raw.html
* meetups_raw.html

これらを編集したら、polymer-bundler (https://github.com/Polymer/tools/tree/master/packages/bundler) をかけてください。

```
$ polymer-bundler --strip-comments index_raw.html --rewrite-urls-in-templates > index.html
$ polymer-bundler --strip-comments meetups_raw.html --rewrite-urls-in-templates > meetups.html
```


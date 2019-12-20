## vscode-paste-image-to-upyun

* 自己编译
```bash
npm install -g vsce #安装后
sudo vsce package # 打包

goto vocode

install by vsix file

:)
```

或者在插件应用商店搜索paste-image-to-upyun安装

### 参数设置


```js
{
    // 有效的又拍云 AccessKey 签名授权
    "pasteImageToUpYun.access_key": "*****************************************",

    // 有效的又拍云 SecretKey 签名授权
    "pasteImageToUpYun.secret_key": "*****************************************",

    // 又拍云图片上传空间
    "pasteImageToUpYun.bucket": "blog",

    // 又拍云图片上传路径.
    // 示例：
    //     /blog -> /blog/20160725.jpg
    "pasteImageToUpYun.remotePath": "/blog",

    // 又拍云图床域名
    "pasteImageToUpYun.domain": "http://xxxxx.xxxx.com",

    // 本地储存位置
    "pasteImageToUpYun.localPath":"./img"
}
```

一直使用vscode来开发、写笔记文章、但是用了几款vscode的图床插件都不是很符合我的需求。今天本来想看看书写点笔记、但是发现截图了去处理图片太过于麻烦、于是有了这个插件、仅仅是想体验一下vscode插件的开发流程、也可以方便自己的写体验。

于是将这位老哥的 `https://github.com/favers/vscode-qiniu-upload-image` 改了一下（就是换了一个云服务商）。
如果用的开心给个star也不错！

工具地址 `https://github.com/uk0/vscode-upyun-upload-image`

thx

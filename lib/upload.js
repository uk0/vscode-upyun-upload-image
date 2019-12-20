const upyun = require('./upyun-sdk');
const path = require('path')
const url = require('url')
const vscode = require('vscode');

module.exports = (config, file, mdFile) => {
    let domain = config.domain;
    let localFile = file
    if (/^".+"$/.test(localFile)) {
        localFile = file.substring(1, file.length - 1)
    }
    return new Promise((resolve, reject) => {
        const instance = upyun(config.bucket, config.access_key, config.secret_key);
        instance.upload(config.remotePath, localFile,config.img_secret).then(function (data) {
            // 上传成功， 处理返回值
            //vscode.window.showInformationMessage(JSON.stringify(data));

            resolve({
                name: path.basename(data.filename, data.filename),
                url: url.resolve(domain, `${config.remotePath}${data.filename}!${config.img_secret}`)
            })
        }).catch(function (error) {
            // 上传失败， 处理返回代码
            reject(error)
        })
    })
}



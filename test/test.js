const upyun = require('../lib/upyun-sdk');
const instance = upyun('xxxx', 'xxx', 'xxxx');


instance.upload('/blog/', '/Users/zhangjianxin/home/development/code/github/uk0.github.io/_posts/img/2019-12-20-10-24-21.png', "100").then(function (data) {
    console.log(data);
});

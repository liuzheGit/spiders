# spiders
用node.js做的爬虫尝试

由于公司要整理网站的图片资料,所以让我们两个前端去页面自己下载,每个页面10个图,还一半重复的(仅名字前缀不一样),让我体力劳动了几个小时,
一直重复工作,像个机器一样,之前学过node.js但是没有用起来,想想觉得用node.js做个爬虫来做,岂不更好,以后再有这种事就可以不做体力劳动了.

## 描述
 - test 测试
 - oySpiders 公司爬取完成品

## oySpiders操作
0. 进入 `oySpiders`

1. 先执行`node downloadImg.js`下载到images目录;

2. 在执行`node copyImg.js`复制images下每个目录下的图片,并改为需要的名字;

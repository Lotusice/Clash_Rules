# 介绍
自己经常用的分流网站都没有添加bing、openAI的规则，为了方便自己使用bing和chatGPT，新增了上述2者的分流规则。
# 使用方法
1. 以我常用的“ACL4SSR在线订阅转换”为例
2. 点击“进阶模式”
3. 导入订阅链接（机场、自建的）
4. 远程配置把这个仓库里面的“.ini”结尾的文件地址填上去
5. 转换导入clash即可

# ini 配置说明：

[custom] 

enable_rule_generator=true

overwrite_original_rules=true

0. 上面3行代码别忘了，参考上面，或者参考我的完整文件
1. ;是省略号
2.  ruleset定义规则，ruleset=规则名字,规则地址
3. custom_proxy_group定义分流策略组和节点策略组，custom_proxy_group=策略组名字`选择方式`[]其他策略组1`[]其他策略组2
4. 策略组可以引用其他策略组，使用`分割，[]表示引用其他策略组
5. 选择方式指手动select，延迟检测url-tes后面跟延迟检测网址
6. .*是正则语法，代表匹配全部节点
7. 定义节点策略组时候，可以使用正则：custom_proxy_group=🇰🇷 韩国`url-test`(KR|Korea|KOR|首尔|韩|韓)`http://www.gstatic.com/generate_204`300,,50
8. 上面url-test后面跟的就是正则匹配，匹配节点名字带其中任何一个关键字的节点。
9. 🚀🎥这种emoji符号可用可不用，只要ruleset和custom-proxy-group用的名字一直就行，如果导入clash提示proxy not found，大概率二者名字不一致。
10. 🇸🇬 🇨🇳 这种是国旗emoji，需要的话可以自己网上找

# clash规则说明：

此界面用于增加和删减配置文件中的规则，目前 Clash 支持的规则类型如下：

- DOMAIN-SUFFIX：域名后缀匹配
- DOMAIN：域名匹配
- DOMAIN-KEYWORD：域名关键字匹配
- IP-CIDR：IP 段匹配
- SRC-IP-CIDR：源 IP 段匹配
- GEOIP：GEOIP 数据库（国家代码）匹配
- DST-PORT：目标端口匹配
- SRC-PORT：源端口匹配
- PROCESS-NAME：源进程名匹配
- RULE-SET：Rule Provider 规则匹配
- MATCH：全匹配

来源：
https://github.com/Fndroid/clash_for_windows_pkg/issues/2729

https://github.com/Wzieee/custom-network-rules

参考：
https://docs.cfw.lbyczf.com/contents/ui/profiles/rules.html

### 说明

#### 配置一
ClashMeta_RULE-SET.yaml
这是一个用于clash meta 核心的配置文件，其于[官方文档](https://wiki.metacubex.one/example/conf/#__tabbed_1_2)修改自用


#### 配置二
config.yaml
发现一个更好的大佬写的扩充配置
Fork from：https://gist.github.com/liuran001/5ca84f7def53c70b554d3f765ff86a33


sub_store.js是一个用在Sub Store的一个替换订阅的脚本，将上面的内容替换成下面的内容：
```
$content = $content.replace(`
# 订阅名，记得修改成自己的
# 添删订阅在这里和下方订阅链接依葫芦画瓢就行
use: &use
  # 如果不希望自动切换请将下面两行注释对调
  # type: select
  type: url-test
  use:
    - 订阅一
    - 订阅二
    # - 本地配置

# 订阅链接
# 对于订阅来说，path 为选填项，但建议启用
# 本地配置可以只填 path
proxy-providers:
  订阅一:
    <<: *p
    # path: ./proxy_provider/订阅一.yaml
    url: "https://example.com/airport?type=clashmeta&protocol=shadowsocks&rule=default"
    # 如需要为该订阅组节点添加前缀，取消下面两行注释
    # override:
      # additional-prefix: "[订阅一]"

  订阅二:
    <<: *p
    # path: ./proxy_provider/订阅二.yaml
    url: "https://example.com/api/v1/client/subscribe?token=ilovechina"
    # 如需要为该订阅组节点添加前缀，取消下面两行注释
    # override:
      # additional-prefix: "[订阅二]"

  # 本地配置:
    # <<: *p
    # path: ./proxy_provider/本地配置.yaml
    # 如需要为该订阅组节点添加前缀，取消下面两行注释
    # override:
      # additional-prefix: "[本地配置]"
`, `
# 订阅名，记得修改成自己的
# 添删订阅在这里和下方订阅链接依葫芦画瓢就行
use: &use
  # 如果不希望自动切换请将下面两行注释对调
  # type: select
  type: url-test
  use:
    - 订阅一
    # - 订阅二
    # - 本地配置

# 订阅链接
# 对于订阅来说，path 为选填项，但建议启用
# 本地配置可以只填 path
proxy-providers:
  订阅一:
    <<: *p
    # path: ./proxy_provider/订阅一.yaml
    url: "自己的订阅链接"

`)
```

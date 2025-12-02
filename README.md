```
git clone https://github.com/i18nsite/redis_test.git
```

如下图

![](https://i-01.eu.org/1764647931.avif)

运行 ./test_kvrocks.sh 通过一主2从的哨兵，用 resp3 连接，但是协议还是 resp2

运行 ./test_redsi.sh 一样的代码，就是直接是 resp3
(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{489:function(e,a,s){"use strict";s.r(a);var r=s(20),t=Object(r.a)({},(function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"jmh-benchmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmh-benchmark"}},[e._v("#")]),e._v(" JMH-Benchmark")]),e._v(" "),s("h2",{attrs:{id:"运行环境说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行环境说明"}},[e._v("#")]),e._v(" 运行环境说明")]),e._v(" "),s("ul",[s("li",[e._v("基准测试运行环境：笔记本开发机 ( MacBook Pro (M1) )")]),e._v(" "),s("li",[e._v("所有基准测试都在开发笔记本上执行。")]),e._v(" "),s("li",[s("strong",[e._v("Redis")]),e._v("、"),s("strong",[e._v("MySql")]),e._v(" 部署环境也在该笔记本开发机上。")])]),e._v(" "),s("h2",{attrs:{id:"segmentchainid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#segmentchainid"}},[e._v("#")]),e._v(" SegmentChainId")]),e._v(" "),s("h3",{attrs:{id:"吞吐量-ops-s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#吞吐量-ops-s"}},[e._v("#")]),e._v(" 吞吐量 (ops/s)")]),e._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:e.$withBase("/assets/perf/Throughput-Of-SegmentChainId.png"),alt:"Throughput-Of-SegmentChainId"}})]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("gradle cosid-redis:jmh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\njava -jar cosid-redis/build/libs/cosid-redis-1.8.6-jmh.jar -bm thrpt -wi "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -rf json -f "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" RedisChainIdBenchmark\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Benchmark                       (step)   Mode  Cnt          Score          Error  Units\nRedisChainIdBenchmark.generate       1  thrpt    5  106188349.580 ± 26035022.285  ops/s\nRedisChainIdBenchmark.generate     100  thrpt    5  112276460.950 ±  4091990.852  ops/s\nRedisChainIdBenchmark.generate    1000  thrpt    5  110181522.770 ± 15531341.449  ops/s\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("gradle cosid-jdbc:jmh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\njava -jar cosid-jdbc/build/libs/cosid-jdbc-1.8.6-jmh.jar -bm thrpt -wi "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -rf json -f "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" MySqlChainIdBenchmark\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Benchmark                       (step)   Mode  Cnt          Score         Error  Units\nMySqlChainIdBenchmark.generate       1  thrpt    5  110020245.619 ± 4514432.472  ops/s\nMySqlChainIdBenchmark.generate     100  thrpt    5  111589201.024 ± 1565714.192  ops/s\nMySqlChainIdBenchmark.generate    1000  thrpt    5  115287146.614 ± 4471990.880  ops/s\n")])])]),s("h3",{attrs:{id:"每次操作耗时的百分位数-us-op"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每次操作耗时的百分位数-us-op"}},[e._v("#")]),e._v(" 每次操作耗时的百分位数(us/op)")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E7%99%BE%E5%88%86%E4%BD%8D%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[e._v("百分位数"),s("OutboundLink")],1),e._v(" ，统计学术语，若将一组数据从小到大排序，并计算相应的累计百分点，则某百分点所对应数据的值，就称为这百分点的百分位数，以Pk表示第k百分位数。百分位数是用来比较个体在群体中的相对地位量数。")])]),e._v(" "),s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:e.$withBase("/assets/perf/Percentile-Sample-Of-SegmentChainId.png"),alt:"Percentile-Sample-Of-SegmentChainId"}})]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("java -jar cosid-redis/build/libs/cosid-redis-1.8.6-jmh.jar -bm sample -wi "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -rf json -f "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -tu us step_1000\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Benchmark                                            Mode      Cnt   Score    Error  Units\nRedisChainIdBenchmark.step_1000                    sample  1336271   0.024 ±  0.001  us/op\nRedisChainIdBenchmark.step_1000:step_1000·p0.00    sample              ≈ 0           us/op\nRedisChainIdBenchmark.step_1000:step_1000·p0.50    sample            0.041           us/op\nRedisChainIdBenchmark.step_1000:step_1000·p0.90    sample            0.042           us/op\nRedisChainIdBenchmark.step_1000:step_1000·p0.95    sample            0.042           us/op\nRedisChainIdBenchmark.step_1000:step_1000·p0.99    sample            0.042           us/op\nRedisChainIdBenchmark.step_1000:step_1000·p0.999   sample            0.042           us/op\nRedisChainIdBenchmark.step_1000:step_1000·p0.9999  sample            0.208           us/op\nRedisChainIdBenchmark.step_1000:step_1000·p1.00    sample           37.440           us/op\n")])])]),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("java -jar cosid-jdbc/build/libs/cosid-jdbc-1.8.6-jmh.jar -bm sample -wi "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -rf json -f "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -tu us step_1000\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Benchmark                                            Mode      Cnt    Score   Error  Units\nMySqlChainIdBenchmark.step_1000                    sample  1286774    0.024 ± 0.001  us/op\nMySqlChainIdBenchmark.step_1000:step_1000·p0.00    sample               ≈ 0          us/op\nMySqlChainIdBenchmark.step_1000:step_1000·p0.50    sample             0.041          us/op\nMySqlChainIdBenchmark.step_1000:step_1000·p0.90    sample             0.042          us/op\nMySqlChainIdBenchmark.step_1000:step_1000·p0.95    sample             0.042          us/op\nMySqlChainIdBenchmark.step_1000:step_1000·p0.99    sample             0.042          us/op\nMySqlChainIdBenchmark.step_1000:step_1000·p0.999   sample             0.083          us/op\nMySqlChainIdBenchmark.step_1000:step_1000·p0.9999  sample             0.208          us/op\nMySqlChainIdBenchmark.step_1000:step_1000·p1.00    sample           342.528          us/op\n")])])]),s("h2",{attrs:{id:"snowflakeid"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#snowflakeid"}},[e._v("#")]),e._v(" SnowflakeId")]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("gradle cosid-core:jmh\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# or")]),e._v("\njava -jar cosid-core/build/libs/cosid-core-1.8.6-jmh.jar -bm thrpt -wi "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" -rf json -f "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Benchmark                                                    Mode  Cnt        Score   Error  Units\nSnowflakeIdBenchmark.millisecondSnowflakeId_friendlyId      thrpt       4020311.665          ops/s\nSnowflakeIdBenchmark.millisecondSnowflakeId_generate        thrpt       4095403.859          ops/s\nSnowflakeIdBenchmark.safeJsMillisecondSnowflakeId_generate  thrpt        511654.048          ops/s\nSnowflakeIdBenchmark.safeJsSecondSnowflakeId_generate       thrpt        539818.563          ops/s\nSnowflakeIdBenchmark.secondSnowflakeId_generate             thrpt       4206843.941          ops/s\n")])])]),s("h2",{attrs:{id:"cosidintervalshardingalgorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cosidintervalshardingalgorithm"}},[e._v("#")]),e._v(" CosIdIntervalShardingAlgorithm")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[e._v("PreciseShardingValue")])]),e._v(" "),s("th",[s("strong",[e._v("RangeShardingValue")])])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("img",{attrs:{src:e.$withBase("/assets/perf/sharding/Throughput-Of-IntervalShardingAlgorithm-PreciseShardingValue.png")}})]),e._v(" "),s("td",[s("img",{attrs:{src:e.$withBase("/assets/perf/sharding/Throughput-Of-IntervalShardingAlgorithm-RangeShardingValue.png")}})])])])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("gradle cosid-shardingsphere:jmh\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# JMH version: 1.29\n# VM version: JDK 11.0.13, OpenJDK 64-Bit Server VM, 11.0.13+8-LTS\n# VM options: -Dfile.encoding=UTF-8 -Djava.io.tmpdir=/work/CosId/cosid-shardingsphere/build/tmp/jmh -Duser.country=CN -Duser.language=zh -Duser.variant\n# Blackhole mode: full + dont-inline hint\n# Warmup: 1 iterations, 10 s each\n# Measurement: 1 iterations, 10 s each\n# Timeout: 10 min per iteration\n# Threads: 1 thread, will synchronize iterations\n# Benchmark mode: Throughput, ops/time\nBenchmark                                                         (days)   Mode  Cnt         Score   Error  Units\nIntervalShardingAlgorithmBenchmark.cosid_precise_local_date_time      10  thrpt       53279788.772          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_precise_local_date_time     100  thrpt       38114729.365          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_precise_local_date_time    1000  thrpt       32714318.129          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_precise_local_date_time   10000  thrpt       22317905.643          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_precise_timestamp            10  thrpt       20028091.211          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_precise_timestamp           100  thrpt       19272744.794          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_precise_timestamp          1000  thrpt       17814417.856          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_precise_timestamp         10000  thrpt       12384788.025          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_range_local_date_time        10  thrpt       18716732.080          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_range_local_date_time       100  thrpt        8436553.492          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_range_local_date_time      1000  thrpt        1655952.254          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_range_local_date_time     10000  thrpt         185348.831          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_range_timestamp              10  thrpt        9410931.643          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_range_timestamp             100  thrpt        5792861.181          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_range_timestamp            1000  thrpt        1585344.761          ops/s\nIntervalShardingAlgorithmBenchmark.cosid_range_timestamp           10000  thrpt         196663.812          ops/s\nIntervalShardingAlgorithmBenchmark.office_precise_timestamp           10  thrpt          72189.800          ops/s\nIntervalShardingAlgorithmBenchmark.office_precise_timestamp          100  thrpt          11245.324          ops/s\nIntervalShardingAlgorithmBenchmark.office_precise_timestamp         1000  thrpt           1339.128          ops/s\nIntervalShardingAlgorithmBenchmark.office_precise_timestamp        10000  thrpt            113.396          ops/s\nIntervalShardingAlgorithmBenchmark.office_range_timestamp             10  thrpt          64679.422          ops/s\nIntervalShardingAlgorithmBenchmark.office_range_timestamp            100  thrpt           4267.860          ops/s\nIntervalShardingAlgorithmBenchmark.office_range_timestamp           1000  thrpt            227.817          ops/s\nIntervalShardingAlgorithmBenchmark.office_range_timestamp          10000  thrpt              7.579          ops/s\n")])])]),s("h2",{attrs:{id:"cosidmodshardingalgorithm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cosidmodshardingalgorithm"}},[e._v("#")]),e._v(" CosIdModShardingAlgorithm")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[e._v("PreciseShardingValue")])]),e._v(" "),s("th",[s("strong",[e._v("RangeShardingValue")])])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("img",{attrs:{src:e.$withBase("/assets/perf/sharding/Throughput-Of-ModShardingAlgorithm-PreciseShardingValue.png")}})]),e._v(" "),s("td",[s("img",{attrs:{src:e.$withBase("/assets/perf/sharding/Throughput-Of-ModShardingAlgorithm-RangeShardingValue.png")}})])])])]),e._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("gradle cosid-shardingsphere:jmh\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# JMH version: 1.29\n# VM version: JDK 11.0.13, OpenJDK 64-Bit Server VM, 11.0.13+8-LTS\n# VM options: -Dfile.encoding=UTF-8 -Djava.io.tmpdir=/work/CosId/cosid-shardingsphere/build/tmp/jmh -Duser.country=CN -Duser.language=zh -Duser.variant\n# Blackhole mode: full + dont-inline hint\n# Warmup: 1 iterations, 10 s each\n# Measurement: 1 iterations, 10 s each\n# Timeout: 10 min per iteration\n# Threads: 1 thread, will synchronize iterations\n# Benchmark mode: Throughput, ops/time\nBenchmark                                     (divisor)   Mode  Cnt          Score   Error  Units\nModShardingAlgorithmBenchmark.cosid_precise          10  thrpt       121431137.111          ops/s\nModShardingAlgorithmBenchmark.cosid_precise         100  thrpt       119947284.141          ops/s\nModShardingAlgorithmBenchmark.cosid_precise        1000  thrpt       113095657.321          ops/s\nModShardingAlgorithmBenchmark.cosid_precise       10000  thrpt       108435323.537          ops/s\nModShardingAlgorithmBenchmark.cosid_precise      100000  thrpt        84657505.579          ops/s\nModShardingAlgorithmBenchmark.cosid_range            10  thrpt        37397323.508          ops/s\nModShardingAlgorithmBenchmark.cosid_range           100  thrpt        16905691.783          ops/s\nModShardingAlgorithmBenchmark.cosid_range          1000  thrpt         2969820.981          ops/s\nModShardingAlgorithmBenchmark.cosid_range         10000  thrpt          312881.488          ops/s\nModShardingAlgorithmBenchmark.cosid_range        100000  thrpt           31581.396          ops/s\nModShardingAlgorithmBenchmark.office_precise         10  thrpt         9135460.160          ops/s\nModShardingAlgorithmBenchmark.office_precise        100  thrpt         1356582.418          ops/s\nModShardingAlgorithmBenchmark.office_precise       1000  thrpt          104500.125          ops/s\nModShardingAlgorithmBenchmark.office_precise      10000  thrpt            8619.933          ops/s\nModShardingAlgorithmBenchmark.office_precise     100000  thrpt             629.353          ops/s\nModShardingAlgorithmBenchmark.office_range           10  thrpt         5535645.737          ops/s\nModShardingAlgorithmBenchmark.office_range          100  thrpt           83271.925          ops/s\nModShardingAlgorithmBenchmark.office_range         1000  thrpt             911.534          ops/s\nModShardingAlgorithmBenchmark.office_range        10000  thrpt               9.133          ops/s\nModShardingAlgorithmBenchmark.office_range       100000  thrpt               0.208          ops/s\n")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);
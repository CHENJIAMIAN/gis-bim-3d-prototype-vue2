3D Tile规范

[![开放地理空间联盟](https://pic4.58cdn.com.cn/nowater/webim/big/n_v21aa2e8f13c7a420ab4a73526fee9aeff.png)](https://pic4.58cdn.com.cn/nowater/webim/big/n_v21aa2e8f13c7a420ab4a73526fee9aeff.png)

帕特里克科齐编辑肖恩·里利编辑

提交日期：2022-08-18批准日期：待定发布日期：待定此 OGC® 文档的外部标识符：待定此 OGC® 文档的内部标识符：22-025r2此 OGC® 文档的 URL：

版本： 1.1.0\
附加格式： [PDF](https://portal.ogc.org/files/Specification.pdf)

OGC 社区标准

工作项目草案

# 草稿通知

本文件不是 OGC 标准。分发本文档以供审阅和评论。本文档如有更改，恕不另行通知，并且不得称为 OGC 标准。

邀请本文件的收件人连同他们的评论一起提交他们知道的任何相关专利权的通知，并提供支持文件。

| 文件号码：  | 22-025r2 |
| :----- | :------- |
| 文件类型：  | OGC 社区标准 |
| 文档子类型： |          |
| 文档阶段：  | 工作项目草案   |
| 文档语言：  | 英语       |

# 版权声明

版权所有 © 2022 Open Geospatial Consortium\
要获得其他使用权，请访问 <http://www.ogc.org/legal/>

# 笔记

请注意本文档的某些元素可能是专利权的主题。开放地理空间联盟不负责识别任何或所有此类专利权。

本文件的收件人被要求连同他们的评论一起提交他们可能知道的任何相关专利权利要求或其他知识产权的通知，这些权利可能会被本文件中规定的标准的任何实施所侵犯，并提供支持文档。

# 许可协议

Open Geospatial Consortium（“许可方”）特此免费授予任何获得本知识产权和任何相关文件副本的人，并在遵守下列条款的前提下，在不使用知识产权的情况下处理知识产权限制（下文规定的除外），包括但不限于实施、使用、复制、修改、合并、发布、分发和/或再许可知识产权副本的权利，以及允许向其提供知识产权的人这样做，前提是知识产权的所有版权声明都完整保留，并且知识产权提供给的每个人都同意本协议的条款。

如果您修改知识产权，则除上述版权声明外，修改后的知识产权的所有副本还必须包括知识产权包含未经许可人批准或采用的修改的通知。

本许可仅为版权许可，不转让任何可能在世界任何地方生效的专利项下的任何权利。知识产权按“原样”提供，不附有任何明示或暗示的保证，包括但不限于对适销性、特定用途的适用性和不侵犯第三方权利的保证。本通知中包含的版权持有人或持有人不保证知识产权中包含的功能将满足您的要求，或者知识产权的运行不会中断或没有错误。对知识产权的任何使用均应完全由用户自行承担风险。

本许可在终止前有效。您可以随时通过销毁知识产权连同任何形式的所有副本来终止它。如果您未能遵守本协议的任何条款或条件，许可也将终止。除以下句子中另有规定外，本许可的此类终止不得要求终止任何第三方最终用户对知识产权的再许可，该再许可在此类终止通知发出之日有效。此外，如果知识产权或知识产权的运作侵犯第三方的任何专利、版权、商标或其他权利，或许可方认为可能侵犯第三方的任何专利、版权、商标或其他权利，您同意许可方单独审慎，可以终止本许可而不对您、您的被许可人或任何其他方承担任何补偿或责任。您同意以任何形式终止销毁或导致销毁知识产权以及任何形式的所有副本，无论是由您还是由任何第三方持有。

除本通知中包含的内容外，许可人或全部或部分知识产权的任何其他版权持有人的名称不得用于广告或以其他方式促进该知识产权的销售、使用或其他交易，除非事先事先许可人或此类版权持有人的书面授权。许可方现在是并将始终是可以授权您或任何第三方使用证明标志、商标或其他特殊名称以表明符合任何许可方标准或规范的唯一实体。本协议受马萨诸塞州联邦法律管辖。特此明确排除《联合国国际货物销售合同公约》对本协议的适用。如果本协议的任何条款被视为不可执行、无效或无效，则应修改此类条款以使其有效和可执行，并且经如此修改后的整个协议应保持完全有效。许可方的任何决定、作为或不作为均不得解释为放弃其可用的任何权利或补救措施。

不得违反美国出口法律法规下载或以其他方式出口或再出口任何知识产权或基础信息或技术。此外，您有责任遵守您所在司法管辖区内可能影响您进口、出口或使用知识产权的权利的任何当地法律，并且您声明您已遵守适用法律要求的任何法规或注册程序，以使此许可证可执行。

# 内容

*   [一、摘要](https://portal.ogc.org/files/102132#toc0)
*   [二。关键字](https://portal.ogc.org/files/102132#toc1)
*   [三、前言](https://portal.ogc.org/files/102132#toc2)
*   [四、安全考虑](https://portal.ogc.org/files/102132#toc3)
*   [五、报送单位](https://portal.ogc.org/files/102132#toc4)
*   [六。提交者](https://portal.ogc.org/files/102132#toc5)
*   [七。未来的工作](https://portal.ogc.org/files/102132#toc6)
*   [一、适用范围](https://portal.ogc.org/files/102132#toc7)
*   [2.一致性](https://portal.ogc.org/files/102132#toc8)
*   [三、规范性引用文件](https://portal.ogc.org/files/102132#toc9)
*   [4. 术语和定义](https://portal.ogc.org/files/102132#toc10)
*   [5.约定](https://portal.ogc.org/files/102132#toc11)
*   [6. 3D TILES 格式规范](https://portal.ogc.org/files/102132#toc12)
*   [6.1. 介绍](https://portal.ogc.org/files/102132#toc13)
*   [6.2. 文件扩展名和媒体类型](https://portal.ogc.org/files/102132#toc14)
*   [6.3. JSON编码](https://portal.ogc.org/files/102132#toc15)
*   [6.4. URIs](https://portal.ogc.org/files/102132#toc16)
*   [6.5. 单位](https://portal.ogc.org/files/102132#toc17)
*   [6.6. 坐标参考系统 (CRS)](https://portal.ogc.org/files/102132#toc18)
*   [6.7. 概念](https://portal.ogc.org/files/102132#toc19)
*   [6.8. 磁贴格式规范](https://portal.ogc.org/files/102132#toc20)
*   [6.9. 声明式样式规范](https://portal.ogc.org/files/102132#toc21)
*   [7. Tile格式](https://portal.ogc.org/files/102132#toc22)
*   [7.1. 传统磁贴格式](https://portal.ogc.org/files/102132#toc23)
*   [7.2. glTF](https://portal.ogc.org/files/102132#toc24)
*   [7.3. 批处理表](https://portal.ogc.org/files/102132#toc25)
*   [7.4. 特征表](https://portal.ogc.org/files/102132#toc26)
*   [7.5. 批量 3D 模型](https://portal.ogc.org/files/102132#toc27)
*   [7.6. 实例化 3D 模型](https://portal.ogc.org/files/102132#toc28)
*   [7.7. 点云](https://portal.ogc.org/files/102132#toc29)
*   [7.8. 合成的](https://portal.ogc.org/files/102132#toc30)
*   [8.隐式平铺](https://portal.ogc.org/files/102132#toc31)
*   [8.1. 概述](https://portal.ogc.org/files/102132#toc32)
*   [8.2. 隐根瓦片](https://portal.ogc.org/files/102132#toc33)
*   [8.3. 细分方案](https://portal.ogc.org/files/102132#toc34)
*   [8.4. 平铺坐标](https://portal.ogc.org/files/102132#toc35)
*   [8.5. 模板 URI](https://portal.ogc.org/files/102132#toc36)
*   [8.6. 子树](https://portal.ogc.org/files/102132#toc37)
*   [8.7. 子树 JSON 格式](https://portal.ogc.org/files/102132#toc38)
*   [8.8. 子树二进制格式](https://portal.ogc.org/files/102132#toc39)
*   [9. 3D 元数据规范](https://portal.ogc.org/files/102132#toc40)
*   [9.1. 概述](https://portal.ogc.org/files/102132#toc41)
*   [9.2. 概念](https://portal.ogc.org/files/102132#toc42)
*   [9.3. 图式](https://portal.ogc.org/files/102132#toc43)
*   [9.4. 存储格式](https://portal.ogc.org/files/102132#toc44)
*   [10.造型](https://portal.ogc.org/files/102132#toc45)
*   [10.1. 概述](https://portal.ogc.org/files/102132#toc46)
*   [10.2. 概念](https://portal.ogc.org/files/102132#toc47)
*   [10.3. 表达式](https://portal.ogc.org/files/102132#toc48)
*   [10.4. 点云](https://portal.ogc.org/files/102132#toc49)
*   [10.5。文件扩展名和媒体类型](https://portal.ogc.org/files/102132#toc50)
*   [附件 A（规范性）属性参考](https://portal.ogc.org/files/102132#toc51)
*   [A.1. 资产](https://portal.ogc.org/files/102132#toc52)
*   [A2。可用性](https://portal.ogc.org/files/102132#toc53)
*   [A.3. 批处理的 3D 模型特征表](https://portal.ogc.org/files/102132#toc54)
*   [A.4. 批处理表](https://portal.ogc.org/files/102132#toc55)
*   [A.5. 边界体积](https://portal.ogc.org/files/102132#toc56)
*   [A.6. 缓冲](https://portal.ogc.org/files/102132#toc57)
*   [A.7. 缓冲区视图](https://portal.ogc.org/files/102132#toc58)
*   [A.8. 班级](https://portal.ogc.org/files/102132#toc59)
*   [A.9. 类属性](https://portal.ogc.org/files/102132#toc60)
*   [A.10. 内容](https://portal.ogc.org/files/102132#toc61)
*   [A.11. 定义](https://portal.ogc.org/files/102132#toc62)
*   [A.12. 枚举](https://portal.ogc.org/files/102132#toc63)
*   [A.13. 枚举值](https://portal.ogc.org/files/102132#toc64)
*   [A.14. 扩大](https://portal.ogc.org/files/102132#toc65)
*   [A.15. 附加功能](https://portal.ogc.org/files/102132#toc66)
*   [A.16. 特征表](https://portal.ogc.org/files/102132#toc67)
*   [A.17. 组元数据](https://portal.ogc.org/files/102132#toc68)
*   [A.18. 实例化 3D 模型特征表](https://portal.ogc.org/files/102132#toc69)
*   [A.19. 元数据实体](https://portal.ogc.org/files/102132#toc70)
*   [A.20. 点云特征表](https://portal.ogc.org/files/102132#toc71)
*   [A.21. 特性](https://portal.ogc.org/files/102132#toc72)
*   [A.22. 属性表](https://portal.ogc.org/files/102132#toc73)
*   [A.23. 属性表属性](https://portal.ogc.org/files/102132#toc74)
*   [A.24. 根属性](https://portal.ogc.org/files/102132#toc75)
*   [A.25. 图式](https://portal.ogc.org/files/102132#toc76)
*   [A.26. 统计数据](https://portal.ogc.org/files/102132#toc77)
*   [A.27. 班级统计](https://portal.ogc.org/files/102132#toc78)
*   [A.28. 财产统计](https://portal.ogc.org/files/102132#toc79)
*   [A.29. 风格](https://portal.ogc.org/files/102132#toc80)
*   [A.30. 布尔表达式](https://portal.ogc.org/files/102132#toc81)
*   [A.31. 色彩表达](https://portal.ogc.org/files/102132#toc82)
*   [A.32. 状况](https://portal.ogc.org/files/102132#toc83)
*   [A.33. 健康）状况](https://portal.ogc.org/files/102132#toc84)
*   [A.34. 表达](https://portal.ogc.org/files/102132#toc85)
*   [A.35。元](https://portal.ogc.org/files/102132#toc86)
*   [A.36. 子树](https://portal.ogc.org/files/102132#toc87)
*   [A.37. 子树](https://portal.ogc.org/files/102132#toc88)
*   [A.38. 模板 URI](https://portal.ogc.org/files/102132#toc89)
*   [A.39. 瓦](https://portal.ogc.org/files/102132#toc90)
*   [A.40. 隐式平铺](https://portal.ogc.org/files/102132#toc91)
*   [A.41. 瓦片集](https://portal.ogc.org/files/102132#toc92)
*   [附件 B（资料性）JSON SCHEMA 参考](https://portal.ogc.org/files/102132#toc93)
*   [B.1. 资产的 JSON 模式](https://portal.ogc.org/files/102132#toc94)
*   [B.2. 可用性的 JSON 模式](https://portal.ogc.org/files/102132#toc95)
*   [B.3. 批量 3D 模型特征表的 JSON 模式](https://portal.ogc.org/files/102132#toc96)
*   [B.4. 批处理表的 JSON 模式](https://portal.ogc.org/files/102132#toc97)
*   [B.5. 边界体积的 JSON 模式](https://portal.ogc.org/files/102132#toc98)
*   [B.6. 缓冲区的 JSON 模式](https://portal.ogc.org/files/102132#toc99)
*   [B.7. 缓冲区视图的 JSON 模式](https://portal.ogc.org/files/102132#toc100)
*   [B.8. 类的 JSON 模式](https://portal.ogc.org/files/102132#toc101)
*   [B.9. 类属性的 JSON 模式](https://portal.ogc.org/files/102132#toc102)
*   [B.10. 内容的 JSON 模式](https://portal.ogc.org/files/102132#toc103)
*   [B.11. 用于定义的 JSON 模式](https://portal.ogc.org/files/102132#toc104)
*   [B.12. 枚举的 JSON 模式](https://portal.ogc.org/files/102132#toc105)
*   [B.13. 枚举值的 JSON 架构](https://portal.ogc.org/files/102132#toc106)
*   [B.14. 扩展的 JSON 架构](https://portal.ogc.org/files/102132#toc107)
*   [B.15. 额外的 JSON 模式](https://portal.ogc.org/files/102132#toc108)
*   [B.16. 特征表的 JSON 模式](https://portal.ogc.org/files/102132#toc109)
*   [B.17. 组元数据的 JSON 模式](https://portal.ogc.org/files/102132#toc110)
*   [B.18. 实例化 3D 模型特征表的 JSON 架构](https://portal.ogc.org/files/102132#toc111)
*   [B.19. 元数据实体的 JSON 模式](https://portal.ogc.org/files/102132#toc112)
*   [B.20. 点云特征表的 JSON 模式](https://portal.ogc.org/files/102132#toc113)
*   [B.21. 属性的 JSON 架构](https://portal.ogc.org/files/102132#toc114)
*   [B.22. 属性表的 JSON 模式](https://portal.ogc.org/files/102132#toc115)
*   [B.23. 属性表属性的 JSON 模式](https://portal.ogc.org/files/102132#toc116)
*   [B.24. 根属性的 JSON 架构](https://portal.ogc.org/files/102132#toc117)
*   [B.25. 模式的 JSON 模式](https://portal.ogc.org/files/102132#toc118)
*   [B.26. 用于统计的 JSON 模式](https://portal.ogc.org/files/102132#toc119)
*   [B.27. 用于类统计的 JSON 模式](https://portal.ogc.org/files/102132#toc120)
*   [B.28. 属性统计的 JSON 模式](https://portal.ogc.org/files/102132#toc121)
*   [B.29. 样式的 JSON 模式](https://portal.ogc.org/files/102132#toc122)
*   [B.30. 布尔表达式的 JSON 模式](https://portal.ogc.org/files/102132#toc123)
*   [B.31. 用于颜色表达的 JSON 模式](https://portal.ogc.org/files/102132#toc124)
*   [B.32. 条件的 JSON 模式](https://portal.ogc.org/files/102132#toc125)
*   [B.33. 条件的 JSON 模式](https://portal.ogc.org/files/102132#toc126)
*   [B.34. 表达式的 JSON 模式](https://portal.ogc.org/files/102132#toc127)
*   [B.35。元数据的 JSON 模式](https://portal.ogc.org/files/102132#toc128)
*   [B.36. 子树的 JSON 模式](https://portal.ogc.org/files/102132#toc129)
*   [B.37. 子树的 JSON 模式](https://portal.ogc.org/files/102132#toc130)
*   [B.38. 模板 URI 的 JSON 架构](https://portal.ogc.org/files/102132#toc131)
*   [B.39. Tile 的 JSON 架构](https://portal.ogc.org/files/102132#toc132)
*   [B.40。用于隐式平铺的 JSON 模式](https://portal.ogc.org/files/102132#toc133)
*   [B.41. Tileset 的 JSON 模式](https://portal.ogc.org/files/102132#toc134)
*   [附件 C（资料性）从旧版图块格式迁移](https://portal.ogc.org/files/102132#toc135)
*   [C.1. 批处理 3D 模型 (b3dm)](https://portal.ogc.org/files/102132#toc136)
*   [C.2. 实例化 3D 模型 (i3dm)](https://portal.ogc.org/files/102132#toc137)
*   [C.3. 点云 (pnts)](https://portal.ogc.org/files/102132#toc138)
*   [C.4. 复合 (cmpt)](https://portal.ogc.org/files/102132#toc139)
*   [附件 D（资料性）可用性索引](https://portal.ogc.org/files/102132#toc140)
*   [D.1. 从瓦片坐标转换为莫顿指数](https://portal.ogc.org/files/102132#toc141)
*   [D.2. 可用性比特流长度](https://portal.ogc.org/files/102132#toc142)
*   [D.3. 访问可用性位](https://portal.ogc.org/files/102132#toc143)
*   [D.4. 全局和局部图块坐标](https://portal.ogc.org/files/102132#toc144)
*   [D.5. 查找父子磁贴](https://portal.ogc.org/files/102132#toc145)
*   [附件 E（资料性）3D 元数据参考实现](https://portal.ogc.org/files/102132#toc146)
*   [E.1. 属性表实现](https://portal.ogc.org/files/102132#toc147)
*   [E.2. 模式实施](https://portal.ogc.org/files/102132#toc148)
*   [附录 F（资料性）3D 元数据语义参考](https://portal.ogc.org/files/102132#toc149)
*   [F.1. 概述](https://portal.ogc.org/files/102132#toc150)
*   [F.2. 一般的](https://portal.ogc.org/files/102132#toc151)
*   [F.3. 3D Tile](https://portal.ogc.org/files/102132#toc152)
*   [附件 G（资料性）贡献者](https://portal.ogc.org/files/102132#toc153)
*   [附录 H（资料性附录） 修订历史](https://portal.ogc.org/files/102132#toc154)

\
顶部

# 一、摘要

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/af6bb654-b023-4564-a4a0-f2865850ef6e)

本文档描述了 3D Tiles 的规范，这是一种用于流式传输大量异构 3D 地理空间数据集的开放标准。

# 二、关键字

以下是搜索引擎和文档目录使用的关键字。

地形、地理空间、gis、点云、空间数据、矢量数据、摄影测量、gltf、3d 模型、3d tiles、元数据、隐式平铺

# 三、前言

3D Tiles 将图形研究、电影行业和游戏行业的技术引入 3D 地理空间，定义了空间数据结构和一组专为 3D 设计并针对流式传输和渲染进行了优化的图块格式。

# 四、安全考虑

本文档未考虑任何安全因素。

# 五、报送单位

以下组织向开放地理空间联盟 (OGC) 提交了本文档：

*   铯GS公司

# 六、提交者

| 姓名     | 联系    | OGC会员 |
| :----- | :---- | :---- |
| 帕特里克科齐 | 铯GS公司 | 是的    |
| 肖恩·里利  | 铯GS公司 | 是的    |

# 七、未来的工作

3D Tiles 社区预计需要对该社区标准进行修订，以规定适合新用例的内容。这些用例可能来自（或两者）外部用户和开发人员社区，或者来自 OGC 审查和评论。此外，未来的修订将由任何提交的记录社区用例和要求的变更请求驱动。

# 一、适用范围

3D Tiles 专为流式传输和渲染大量 3D 地理空间内容而设计，例如摄影测量、3D 建筑、BIM/CAD、实例化特征和点云。它定义了一个分层数据结构和一组提供可渲染内容的图块格式。3D Tiles 没有为内容的可视化定义明确的规则；客户端可以可视化 3D Tiles 数据，但它认为合适。

# 2.一致性

本文档的附件 A 描述了实现 3D Tiles 所需的对象和属性。一致性与这些元素相关，并通过关联的 3D Tiles [JSON Schema](https://portal.ogc.org/files/102132#json-schema)部分表达。

所有图表、示例、注释和背景信息均提供信息。

# 三、规范性引用文件

在文中引用下列文件时，其部分或全部内容构成本文件的要求。对于注明日期的参考文献，仅引用的版本适用。对于未注明日期的引用，适用引用文件的最新版本（包括任何修订）。

EPSG：4978，2020 年。https: [//epsg.org/crs\_4978/WGS-84.html](https://epsg.org/crs_4978/WGS-84.html)

EPSG：4979，2020 年。https: [//epsg.org/crs\_4979/WGS-84.html](https://epsg.org/crs_4979/WGS-84.html)

L. Masinter：IETF RFC 2397，*“数据”URL 方案*。(1998)。<https://www.rfc-editor.org/info/rfc2397>。

F. Yergeau：IETF RFC 3629，*UTF-8，ISO 10646 的一种转换格式*。(2003)。<https://www.rfc-editor.org/info/rfc3629>。

T. Berners-Lee、R. Fielding、L. Masinter：IETF RFC 3986，*统一资源标识符 (URI)：通用语法*。(2005)。<https://www.rfc-editor.org/info/rfc3986>。

T. Bray（编辑）：IETF RFC 8259，*JavaScript 对象表示法 (JSON) 数据交换格式*。(2017)。<https://www.rfc-editor.org/info/rfc8259>。

Khronos 集团：glTF 2.0，2021 年[。https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html)

Roger Lot：OGC 18-010r7，*地理信息 - 坐标参考系统的众所周知的文本表示*。开放地理空间联盟 (2019)。<https://docs.ogc.org/is/18-010r7/18-010r7.html>。

W3C css-color-3，*CSS 颜色模块级别 3*。<https://www.w3.org/TR/css-color-3/>。

# 4. 术语和定义

[本文档使用OGC 政策指令 49](https://portal.ogc.org/public_ogc/directives/directives.php)中定义的术语，该指令基于 ISO/IEC 指令，第 2 部分，国际标准的结构和起草规则。特别是，“应”（不是“必须”）一词是动词形式，用于表示必须严格遵守以符合本文件的要求，OGC 文件不使用 ISO/IEC 指令第 2 部分中的等效短语.

本文档还使用 OGC 模块化规范标准 ( [OGC 08-131r3](https://portal.opengeospatial.org/files/?artifact_id=34762) ) 中定义的术语，也称为“ModSpec”。ModSpec 中提供了标准、规范、要求和一致性测试等术语的定义。

就本文件而言，适用以下附加术语和定义。

## 4.1. **可用性**

指定隐式瓦片集的单个子树中存在哪些瓦片/内容/子树的数据

## 4.2. **比特流**

存储为位序列而不是字节的布尔数组。

## 4.3. **边界体积**

完全包含一组几何对象的并集的封闭体积。参见[维基百科：边界体积](https://en.wikipedia.org/wiki/Bounding_volume)

## 4.4. **子树**

从隐式瓦片集的子树的最底部行中的可用瓦片可到达的子树

## 4.5. **实体**

在 3D Tiles 元数据的上下文中，实体是元数据类的实例，填充有符合元数据类定义的属性值

## 4.6. **特征**

在 3D Tile中，Tile的单个组件，例如批处理 3D 模型中的 3D 模型或点云中包含位置、外观和元数据属性的点。

## 4.7. **几何误差**

瓦片的源几何图形的简化表示的差异（以米为单位）用于计算如果瓦片的内容被渲染而其子元素未被渲染时引入的屏幕空间错误。

## 4.8. **glTF**

用于 3D 资产的 API 中立运行时资产交付格式。

## 4.9. **分层详细程度 (HLOD)**

根据对象重要性或瓦片到观察点或相机位置的距离等指标降低 3D 表示的复杂性。通常，更高级别的细节提供更高的视觉保真度。参见[维基百科：详细程度](https://en.wikipedia.org/wiki/Level_of_detail)

## 4.10. **隐式平铺**

使用递归细分的 tileset 的描述。

## 4.11. **隐根瓦片**

包含implicitTiling属性的图块，因此表示隐式图块集的根。

## 4.12. **元数据**

在 3D Tiles 的上下文中，该术语指的是 3D 内容与实体和属性的任何关联，这样实体就代表了整体结构中有意义的单元。

## 4.13. **元数据类**

包含 3D Tiles 元数据的实体的结构描述，由多个元数据属性组成

## 4.14. **元数据属性**

元数据类的一个元素，它为元数据实体的相应元素定义名称和类型。

## 4.15. **八叉树**

一种 3D 细分方案，将每个包围体沿 x、y 和 z 轴的中点划分为 8 个较小的包围体。

## 4.16. **四叉树**

一种 2D 细分方案，它沿 x 轴和 y 轴的中点将每个包围体分成 4 个较小的包围体。

## 4.17. **图式**

一组定义元数据结构和类型的元数据类和枚举

## 4.18. **屏幕空间错误 (SSE)**

如果渲染了图块的内容而未呈现其子项，则图块对其源几何体的简化表示的差异（以像素为单位）。

## 4.19. **空间连贯性**

子图块所有内容的并集完全在父图块的边界体积内

## 4.20. **风格**

一组要评估的表达式，用于修改图块集中每个要素的显示方式

## 4.21. **子树**

包含可用性信息的隐式瓦片集树的固定大小部分。

## 4.22. **子树文件**

一个二进制文件，存储有关隐式 tileset 的特定子树的信息

## 4.23. **细分方案**

将父图块划分为占据相同区域的较小子图块的递归模式。这是通过使用隐式图块集统一划分父图块的边界体积来完成的。

## 4.24. **模板 URI**

包含瓦片坐标的 URI 模式，用于直接寻址隐式瓦片集中的瓦片。

## 4.25. **瓦**

在 3D Tiles 中，tileset 的一个子集包含对可呈现内容和元数据的引用，例如内容的边界体积，客户端使用它来确定是否呈现内容。

## 4.26. **平铺内容**

包含渲染图块所需信息的二进制 blob，该图块是特定图块格式（批处理 3D 模型、实例化 3D 模型、点云、复合或 glTF）的实例。

## 4.27. **Tile格式**

图块内容数据的结构或布局（批处理 3D 模型、实例化 3D 模型、点云、复合或 glTF）。

## 4.28. **瓦片集**

在 3D Tiles 中，3D Tiles tile 实例的集合被组织成空间数据结构和附加元数据，这样这些 tiles 的聚合代表了不同细节级别的一些 3D 内容。

# 5.约定

本文档中未指定约定。

# 6. 3D TILES 格式规范

## 6.1. 介绍

在 3D Tiles 中，一个*tileset*是一组以空间数据结构组织的*图块，树*。一个 tileset 由至少一个 tileset JSON 文件描述，其中包含 tileset 元数据和一棵 tile 对象树，每个对象都可以引用可渲染的内容。

[glTF 2.0](https://github.com/KhronosGroup/glTF)是 3D Tile的主要Tile格式。glTF 是一种开放规范，旨在高效传输和加载 3D 内容。glTF 资产包括单个图块的几何和纹理信息，并且可以扩展为包括元数据、模型实例化和压缩。glTF 可用于各种 3D 内容，包括：

*   异构 3D 模型。例如带纹理的地形和表面、3D 建筑外部和内部、大型模型
*   3D 模型实例。例如树木、风车、螺栓
*   海量点云

有关详细信息，请参阅[glTF Tile 格式。](https://portal.ogc.org/files/102132#tileformats-gltf-gltf)

Tiles 还可以引用下面列出的旧版 3D Tiles 1.0 格式。这些格式在 3D Tiles 1.1 中已弃用，可能会在 3D Tiles 的未来版本中删除。

表 1 — 传统图块格式和常见用途

| 传统格式                                                                                                      | 用途              |
| :-------------------------------------------- | :-------------- |
| [批量 3D 模型 ( b3dm )](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-batched-3d-model)      | 异构 3D 模型        |
| [实例化 3D 模型 ( i3dm )](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-instanced-3d-model) | 3D模型实例          |
| [点云 ( pnts )](https://portal.ogc.org/files/102132#tileformats-pointcloud-point-cloud)                     | 海量积分            |
| [复合 ( cmpt )](https://portal.ogc.org/files/102132#tileformats-composite-composite)                        | 将不同格式的图块连接成一个图块 |

磁贴的*内容*是磁贴格式的单个实例。一个 tile 可能有多个内容。

内容引用一组*特征*，例如表示建筑物或树木的 3D 模型，或点云中的点。每个特征都具有位置和外观属性以及其他特定于应用程序的属性。客户端可以选择在运行时选择特征并检索它们的属性以进行可视化或分析。

切片以树的形式组织，该树结合了层次细节级别 (HLOD) 的概念，以优化空间数据的呈现。每个图块都有一个*包围体*，一个定义完全包围其内容的空间范围的对象。树具有[空间连贯性](https://portal.ogc.org/files/102132#core-bounding-volume-spatial-coherence)；子图块的内容完全在父图块的包围体内。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/9a23c398-ca9b-43dd-8ca4-6afabd00854d)

图 1 — 瓦片树

瓦片集可以使用类似于栅格和矢量瓦片方案（如 Web 地图瓦片服务 (WMTS) 或 XYZ 方案）的 2D 空间瓦片方案，这些瓦片在多个细节级别（或缩放级别）提供预定义瓦片。然而，由于 tileset 的内容通常是不均匀的，或者可能不容易仅在二维中组织，树可以是任何具有空间一致性[的空间数据结构](https://portal.ogc.org/files/102132#core-spatial-data-structures)，包括 kd 树、四叉树、八叉树和网格。[隐式平铺](https://portal.ogc.org/files/102132#core-implicit-tiling)定义了四叉树和八叉树的简明表示。

特定于应用程序的*元数据*可以在 tileset 中以多个粒度提供。元数据可能与高级实体（如瓦片集、瓦片、内容或特征）相关联，或者与单个顶点和纹素相关联。元数据符合[3D 元数据规范 描述](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)的定义明确的类型系统，可以使用特定于应用程序或领域的语义进行扩展。

可选择将[3D Tiles Style](https://portal.ogc.org/files/102132#styling-styling)或*style*应用于 tileset。样式定义了要评估的表达式，这些表达式修改了每个特征的显示方式。

## 6.2. 文件扩展名和媒体类型

3D Tiles 使用以下文件扩展名和媒体类型。

*   Tileset 文件应使用.json扩展名和[application/json](https://www.iana.org/assignments/media-types/application/json)媒体类型。
*   磁贴内容文件应使用特定于其[磁贴格式规范](https://portal.ogc.org/files/102132#core-tile-format-specifications)的文件扩展名和媒体类型。
*   元数据架构文件应使用.json扩展名和[application/json](https://www.iana.org/assignments/media-types/application/json)媒体类型。
*   Tileset 样式文件应使用.json扩展名和[application/json](https://www.iana.org/assignments/media-types/application/json)媒体类型。
*   JSON 子树文件应使用.json扩展名和[application/json](https://www.iana.org/assignments/media-types/application/json)媒体类型。
*   二进制子树文件应使用.subtree扩展名和[application/octet-stream](https://www.iana.org/assignments/media-types/application/octet-stream)媒体类型。
*   表示二进制缓冲区的文件应使用.bin扩展名和[application/octet-stream](https://www.iana.org/assignments/media-types/application/octet-stream)媒体类型。

显式文件扩展名是可选的。有效的实现可能会忽略它并通过其标头中的魔术字段来识别内容的格式。

## 6.3. JSON编码

3D Tiles 对 JSON 格式和编码有以下限制。

1.  JSON 应使用不带 BOM 的 UTF-8 编码。
2.  本规范中定义的所有字符串（属性名称、枚举）仅使用 ASCII 字符集，并且应以纯文本形式编写，不进行 JSON 转义。
3.  *在 JSON 中显示为属性值的*非 ASCII 字符可能会被转义。
4.  JSON 对象中的名称（键）应该是唯一的，即不允许重复的键。
5.  某些属性在架构中定义为整数。此类值可以存储为小数部分为零的小数，或使用指数表示法存储，如[RFC 8259 第 6 节](https://www.rfc-editor.org/rfc/rfc8259.html#section-6)中所定义。

## 6.4. URIs

3D Tiles 使用 URI 来引用图块内容。这些 URI 可能指向[相对外部引用 (RFC3986)](https://tools.ietf.org/html/rfc3986#section-4.2)或者是在 JSON 中嵌入资源的数据 URI。嵌入式资源使用[“数据”URL 方案 (RFC2397)](https://tools.ietf.org/html/rfc2397)。

当 URI 是相对的时，它的基础总是相对于引用的 tileset JSON 文件。

客户端实现需要支持相关的外部引用和嵌入式资源。可选地，客户端实现可以支持其他方案（例如http\://）。所有 URI 都应有效且可解析。

## 6.5. 单位

所有直线距离的单位都是米。

所有角度都以弧度为单位。

## 6.6. 坐标参考系统 (CRS)

3D Tiles 使用右手笛卡尔坐标系；也就是说，*x*和*y*的叉积产生*z*。3D Tiles 将*z*轴定义为局部笛卡尔坐标系。tileset 的全球坐标系通常位于[WGS 84](https://epsg.org/ellipsoid_7030/WGS-84.html)地球中心、地球固定 (ECEF) 参考系 ( [EPSG 4978](https://epsg.org/crs_4978/WGS-84.html) ) 中，但它不一定是，例如，发电厂可以在其当地完全定义用于没有地理空间上下文的建模工具的坐标系。

tileset 的 CRS 可以明确定义为[tileset metadata](https://portal.ogc.org/files/102132#core-metadata)的一部分。[tileset 的元数据可以包含具有TILESET\_CRS\_GEOCENTRIC语义的](https://portal.ogc.org/files/102132#metadata-semantics-tileset-semantics)属性，它是表示 EPSG 大地测量参数数据集标识符的字符串。

可以应用额外的[瓦片变换](https://portal.ogc.org/files/102132#core-tile-transforms)以将瓦片的局部坐标系变换到父瓦片的坐标系。

区域包围体使用地理坐标系（纬度、经度、高度）指定边界，特别是[EPSG ](https://portal.ogc.org/files/102132#core-region)[4979](https://epsg.org/crs_4979/WGS-84.html)。假定参考椭圆体与 tileset 的参考椭圆体相同。

## 6.7. 概念

### 6.7.1. Tile

图块包含用于确定是否呈现图块的元数据、对可呈现内容的引用以及任何子图块的数组。

#### [6.7.1.1](http://6.7.1.1/).平铺内容

瓦片可以与可呈现的内容相关联。一个图块可以有一个[tile.content](http://tile.content/)对象，也可以有多个内容对象，存储在一个[tile.contents](http://tile.contents/)数组中。后者允许灵活的 tileset 结构：例如，单个 tile 可能包含相同几何数据的多个表示。

每个内容对象的 content.uri引用[Tile 格式规范](https://portal.ogc.org/files/102132#core-tile-format-specifications)中定义的一种 tile 格式的 tile 内容，或另一个 tileset JSON 以创建 tilesets 的 tileset（请参阅[External tilesets](https://portal.ogc.org/files/102132#core-external-tilesets)）。

content.group属性将内容分配给一个组。可以将不同块的内容或单个块的内容分配给组以便对内容进行分类。[此外，每个组都可以与元数据](https://portal.ogc.org/files/102132#core-metadata)相关联。

每个内容都可以与边界体积相关联。虽然tile.boundingVolume是一个包含图块*所有内容的边界体积，但每个单独的*content.boundingVolume是一个紧密配合的边界体积，仅包含各自的内容。有关图块和内容边界体积的作用的更多详细信息，请参见[边界体积](https://portal.ogc.org/files/102132#core-bounding-volumes)部分。

#### [6.7.1.2](http://6.7.1.2/).几何误差

*瓦片被构造成包含层次细节级别*(HLOD) 的树，因此在运行时，客户端实现将需要确定瓦片是否足够详细以进行渲染，以及瓦片的内容是否应由更高分辨率的子瓦片连续细化。实现将考虑最大允许*屏幕空间误差*(SSE)，该误差以像素为单位。

Tile的几何误差定义了该Tile的选择指标。它的值是一个非负数，用于指定图块对其源几何体的简化表示的误差（以米为单位）。通常，根瓦片的几何误差最大，每个后续级别的子瓦片的几何误差都小于其父瓦片，叶瓦片的几何误差为或接近于 0。

在客户端实现中，几何误差与其他屏幕空间指标（例如，从图块到相机的距离、屏幕尺寸和分辨率）一起使用，以计算在呈现该图块而其子项未呈现时引入的 SSE。如果引入的 SSE 超过允许的最大值，则细化图块并考虑渲染其子项。

几何误差是根据点密度、网格或纹理抽取等指标或该图块集特定的其他因素制定的。通常，较高的几何误差意味着将更积极地细化图块，并且将更快地加载和渲染子图块。

#### [6.7.1.3](http://6.7.1.3/).求精

精炼决定了较低的分辨率父层在选择较高的分辨率儿童渲染时呈现的过程。允许的细化类型是替换 ( ”REPLACE” ) 和添加 ( ”ADD” )。如果图块具有替换细化，则子图块会代替父图块进行渲染，即不再渲染父图块。如果图块具有附加细化，则除了父图块之外还会渲染子图块。

一个 tileset 可以只使用替换优化，只使用加法优化，或者加法和替换优化的任意组合。

瓦片集的根瓦片需要细化类型；它对于所有其他图块都是可选的。省略时，图块会继承其父项的细化类型。

##### [6.7.1.3](http://6.7.1.3/) .1.替代品

如果一个图块使用替换细化，那么在细化时它会渲染它的孩子来代替它自己。

表 2——一个瓦片和一个使用替换细化的细化瓦片

| 父Tile                                                                                                                  | 精制                                  |
| :------------------------------------ | :-------------------- |
| ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/f7fba57a-7ebe-4d96-9223-fc5780235441) | ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/d80320c7-a4cc-4894-8e2c-91a61ddeef69) |

##### [6.7.1.3](http://6.7.1.3/) .2.添加剂

如果一个图块使用加法细化，那么在细化时它会同时渲染它自己和它的孩子。

表 3 — 一个图块和一个使用加法细化的图块

| 父Tile                                    | 精制                                                                                                         |
| :-------------------------------- | :---------------------------------------- |
| ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/35fb6bd8-c7b1-4388-b72f-873fbc48aa61) | ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/78a74070-04f6-4efd-b301-a085634a7ff8) |

#### [6.7.1.4](http://6.7.1.4/).边界体积

边界体积定义了包含图块或图块内容的空间范围。为了支持各种数据集的紧密拟合体积，例如规则划分的地形、未与纬度或经度线对齐的城市或任意点云，包围体类型包括定向包围盒、包围球和地理区域由最小和最大纬度、经度和高度定义。

表 4 — 瓦片的不同边界体积类型

| 边界框                                     | 包围球   | 边界区域                                                                                                                      |
| :-------------------------------------------------------- | :---- | :------------------------------------------------ |
| ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/92464f72-635a-4226-b1e5-97806bd64592) | ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/9e72ead2-e009-4e6a-9f2c-3b45d5e335f4) | ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/ed302a08-163b-4b66-8c19-653d3d5f62b0) |

##### [6.7.1.4](http://6.7.1.4/) .1.地区

boundingVolume.region属性是一个包含六个数字的数组，用于定义具有纬度、经度和高度坐标的边界地理区域，顺序为\[west, south, east, north, minimum height, maximum height]。[纬度和经度在EPSG 4979](https://epsg.org/crs_4979/WGS-84.html)中定义的 WGS 84 基准中，以弧度为单位。[高度以高于（或低于） WGS 84 椭球体的](https://epsg.org/ellipsoid_7030/WGS-84.html)米为单位。

注意纬度和经度值以*弧度*  给出，与 EPSG 4979 定义不同，它们以*度*为单位给出。使用弧度的选择是由于通常以弧度进行的内部计算——例如，将制图坐标转换为笛卡尔坐标时。

![边界区域](https://github.com/CHENJIAMIAN/Blog/assets/20126997/8eaba887-ea79-462c-a46d-a2fbec63bdef)

图 2 — 边界区域

```
“boundingVolume” ：{ “区域” ：[ - 1.3197004795898053 ，0.6988582109 ，- 1.3196595204101946 ，0.6988897891 ，0 ，20 ] } 
   
    
    
    
    
    
    
  

```

##### [6.7.1.4](http://6.7.1.4/) .2.盒子

boundingVolume.box属性是一个包含 12 个数字的数组，用于在右手 3 轴 (x, y, z) 笛卡尔坐标系中定义定向边界框，其中 z轴向*上*。前三个元素定义框中心的 x、y 和 z 值。接下来的三个元素（索引为 3、4 和 5）定义了*x*轴方向和半长。接下来的三个元素（索引 6、7 和 8）定义了*y*轴方向和半长。最后三个元素（索引 9、10 和 11）定义了*z*轴方向和半长。

注意  3D Tiles 中用于定向边界框的表示是通用且紧凑的：除了中心位置外，数组还包含 3×3 矩阵的元素。该矩阵的列是变换后单位向量的图像，因此唯一且紧凑地定义了边界框的缩放和方向。

![边界框](https://github.com/CHENJIAMIAN/Blog/assets/20126997/6a4c62af-74e9-44d7-bbca-f644660fbaf5)

图 3 — 边界框

```
“ boundingVolume ” ：{ “框” ：[ 0，0，10，100，0，0，0，100，0，0，0，10 ] } _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ 
   
          
        
        
          
  

```

##### [6.7.1.4](http://6.7.1.4/) .3.领域

boundingVolume.sphere属性是一个包含四个数字的数组，用于定义边界球体。前三个元素定义右手 3 轴 (x, y, z) 笛卡尔坐标系中球体中心的 x、y 和 z 值，其中 z 轴向*上*。最后一个元素（索引为 3）定义了以米为单位的半径。

![包围球](https://github.com/CHENJIAMIAN/Blog/assets/20126997/33fc8a0c-29cc-4e9d-8c30-1eb1279bfd2a)

图 4 — 包围球

```
“ boundingVolume ” ：{ “球体” ：[ 0，0，10，141.4214 ] } _ _ 
   
    
    
    
    
  

```

##### [6.7.1.4](http://6.7.1.4/) .4.内容边界体积

可以通过tile.boundingVolume属性为每个图块指定边界体积。此外，可以为每个[图块内容](https://portal.ogc.org/files/102132#core-tile-content)单独指定边界体积。content.boundingVolume可能是更紧密的边界体积。这可以实现紧密的视锥体剔除，排除渲染任何不在潜在视野范围内的内容。未定义时，瓦片的边界体积仍用于剔除（请参阅[网格](https://portal.ogc.org/files/102132#core-grids)）。

下面的屏幕截图显示了金丝雀码头根瓦片的边界体积。以红色显示的 tile.boundingVolume包围了 tileset 的整个区域；content.boundingVolume以蓝色显示，仅包含根图块中的四个特征（模型）。

[![image.png](https://pic7.58cdn.com.cn/nowater/webim/big/n_v2eba790818ba54c96ab1b11e3b035a5d2.png)](https://pic7.58cdn.com.cn/nowater/webim/big/n_v2eba790818ba54c96ab1b11e3b035a5d2.png)

图 5 — 瓦片集根瓦片的边界体积。[从Cyber​​City3D](http://www.cybercity3d.com/)构建数据。[来自必应地图的](https://www.microsoft.com/maps/)图像数据

##### [6.7.1.4](http://6.7.1.4/) .5.扩展

通过扩展支持其他包围体类型。

*   [3DTILES\_bounding\_volume\_S2](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2)

#### [6.7.1.5](http://6.7.1.5/).查看器请求量

tile 的viewerRequestVolume可用于组合异构数据集，并可与[外部 tilesets](https://portal.ogc.org/files/102132#core-external-tilesets)组合。

以下示例在建筑物内有一个点云。点云图块的boundingVolume是一个半径为1.25的球体。对于viewerRequestVolume，它还有一个半径为15的更大球体。由于geometricError为零，因此当查看器位于由viewerRequestVolume定义的大球体内部时，点云图块的内容始终呈现（并最初请求） 。

```
{ "children" : [{ "transform" : [ 4.843178171884396 , 1.2424271388626869 , 0 , 0 , - 0.7993325488216595 , 3.1159251367235608 , 3.8278032889280675 , 0 , 0.9511533376784163 , - 3.7077466670407433 , 3.2168186118075526 , 0 , 1215001.7612985559 , - 4736269.697480114 , 4081650.708604793 , 1 ], "boundingVolume “ ：{
   
     
                            
          
         
           
    
     
      “盒子” ：[ 0，0，6.701，3.738，0，0，0，3.72，0，0，0，13.402 ] } ，“ geometricError ” ：32 ，“内容” ：{ “ uri ” ：“ building.glb _ _ _ _ _ _ _ _ _ _ _ _ " } }, { "变换" : [ 0.968635634376879 , 0.24848542777253732 , 0 , 0 , - 
                 
             
              
                 
      
    
     
     
       
    
   
     
                             
      0.15986650990768783 , 0.6231850279035362 , 0.7655606573007809 , 0 , 0.19023066741520941 , - 0.74154933329385225 , 0.6433637 229384295 , 0 , 1215002.0371330238 , - 4736270.772726648 , 4081651.6414821907 , 1 ] , " viewerRequestVolume " : { " sphere " : [ 0 , 0 , 0 , 15 ] } , " bounding体积” ：{ “球体” ：     
          
            
    
     
          
    
     
       [ 0 , 0 , 0 , 1.25 ] }, "geometricError" : 0 , "content" : { "uri" : "points.glb" } }] }   
    
     
     
       
    
  

```

有关请求量的更多信息，请参阅[样本 tileset](https://github.com/CesiumGS/3d-tiles-samples/tree/main/1.0/TilesetWithRequestVolume)。

#### [6.7.1.6](http://6.7.1.6/).转换

##### [6.7.1.6](http://6.7.1.6/) .1.平铺变换

为了支持本地坐标系——例如，城市瓦片集中的建筑瓦片集可以在其自己的坐标系中定义，而建筑物内部的点云瓦片集也可以在其自己的坐标系中定义——每个瓦片都有一个可选的转换属性。

transform属性是一个 4×4 仿射变换矩阵，以列优先顺序存储，从图块的局部坐标系转换到父图块的坐标系——或者在根图块的情况下是图块集的坐标系。

注意 以  列优先顺序存储变换矩阵遵循图形编程 API（如 OpenGL）中常见的约定，这意味着变换数组中的元素直接对应于这些系统中的 4×4 矩阵的条目。

变换属性适用于

*   [图块内容](http://tile.content/)

    *   每个特征的位置。
    *   每个特征的法线应该由左上角的 3×3 矩阵的逆转置变换来解释使用[比例时正确的矢量变换](http://www.realtimerendering.com/resources/RTNews/html/rtnews1a.html#art4)。
    *   content.boundingVolume，除非定义了content.boundingVolume.region，它在 EPSG:4979 坐标中明确表示。
*   tile.boundingVolume，除非定义了tile.boundingVolume.region，它在 EPSG:4979 坐标中明确表示。
*   tile.viewerRequestVolume，除非定义了tile.viewerRequestVolume.region，它在 EPSG:4979 坐标中明确表示。

transform属性通过矩阵中的最大缩放因子缩放geometricError 。

当未定义transform时，它默认为单位矩阵：

```
[ 1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 ]
     
     
     
     

```

从每个 tile 的局部坐标系到 tileset 的全局坐标系的转换是通过对 tileset 的自上而下的遍历以及通过将子变换与其父变换后乘以像计算机图形中的传统场景图或节点层次结构来计算的。

##### [6.7.1.6](http://6.7.1.6/) .2.glTF 变换

glTF 定义了自己的节点层次结构并使用*y*向上坐标系。任何特定于图块格式的转换和tile.transform属性都会在解析这些转换后应用。

###### [6.7.1.6](http://6.7.1.6/) .2.1.glTF 节点层次结构

首先，根据[glTF 规范](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#transformations)应用 glTF 节点层次结构转换。

###### [6.7.1.6](http://6.7.1.6/) .2.2.  *y* - 到*z* - 向上

接下来，为了与3D Tiles 的*z -up 坐标系保持一致，glTF 应在运行时从y* -up转换为*z* -up。这是通过将模型绕*x*轴旋转 π/2 弧度来完成的。等效地，应用以下矩阵变换（此处显示为行优先）：

```
[ 1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , - 1.0 , 0.0 , 0.0 , 1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 ]
      
     
      
      

```

更广泛地说，转换的顺序是：

1.  [glTF 节点层次结构转换](https://portal.ogc.org/files/102132#core-gltf-node-hierarchy)
2.  [glTF ](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[y](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[ -up 到](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[z](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[ -up 变换](https://portal.ogc.org/files/102132#core-y-up-to-z-up)
3.  [平铺变换](https://portal.ogc.org/files/102132#core-tile-transforms)

注意  当处理本质上为*z*向上的源数据时，例如 WGS 84 坐标中的数据或本地*z*向上坐标系中的数据，常见的工作流程是：

*   网格数据（包括位置和法线）不会被修改——它们保持*z*向上。
*   根节点矩阵指定列主要*z*到*y*向上变换。这会将源数据转换为glTF 所需的*y向上坐标系。*
*   在运行时，glTF使用上面的矩阵从*y*向上转换回\*z向上。\*实际上，转换抵消了。

示例 glTF 根节点：

```
“节点” ：[ { “矩阵” ：[ 1，0，0，0，0，0 ，- 1，0，0，1，0，0，0，0，0，1 ] ，“网格” ：0 _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ，“名称” ：“根节点” } ] 
 
    
    
    
 

```

##### [6.7.1.6](http://6.7.1.6/) .3.例子

对于图块集的计算变换（上面代码中的transformToRoot ）的示例，请考虑：

[![image.png](https://pic6.58cdn.com.cn/nowater/webim/big/n_v204f010131901458aacd14fc5c987a5e4.png)](https://pic6.58cdn.com.cn/nowater/webim/big/n_v204f010131901458aacd14fc5c987a5e4.png)

图 6 — 包含 glTF 内容的图块示例图块集的结构

每个图块的计算变换是：

*   至：\[T0]
*   T1：\[T0]\[T1]
*   T2：\[T0]\[T2]
*   T3：\[T0]\[T1]\[T3]
*   T4：\[T0]\[T1]\[T4]

考虑到[glTF ](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[y -](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[向上到](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[z](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[ -向上变换](https://portal.ogc.org/files/102132#core-y-up-to-z-up)和[glTF 变换的](https://portal.ogc.org/files/102132#core-gltf-transforms)完整计算变换是

*   至：\[T0]
*   T1：\[T0]\[T1]
*   T2 : \[T0]\[T2]\[glTF y-up to z-up]\[glTF transform]
*   T3 : \[T0]\[T1]\[T3]\[glTF y-up to z-up]\[glTF transform]
*   T4 : \[T0]\[T1]\[T4]\[glTF y-up to z-up]\[glTF transform]

##### [6.7.1.6](http://6.7.1.6/) .4.实施例

*本节内容丰富*

下面的 JavaScript 代码展示了如何使用 Cesium 的[Matrix4](https://github.com/CesiumGS/cesium/blob/main/Source/Core/Matrix4.js)和[Matrix3](https://github.com/CesiumGS/cesium/blob/main/Source/Core/Matrix3.js)类型来计算它。

```
函数computeTransforms （tileset ）{ const root = tileset 。根; const transformToRoot = defined ( root.transform ) ? _ _ 矩阵4 。fromArray ( root.transform ) : Matrix4 。_ _ 身份；  computeTransform (根, transformToRoot ); }函数计算转换（平铺， 
  
      




transformToRoot ) { // 将 4x4 transformToRoot 应用于此图块的位置和边界体积let normalTransform = Matrix4 . getRotation ( transformToRoot , new Matrix4 ());   正常变换= Matrix3 。inverseTranspose ( normalTransform , normalTransform ); // 将 3x3 normalTransform 应用于此图块的法线const children = tile . 儿童；如果(定义(孩子 
  

     
 
  

  
   )) { const长度=孩子们。长度；for ( let i = 0 ; i < length ; ++ i ) { const child = children [ i ]; 让childToRoot = defined ( child.transform ) ？_ _ 矩阵4 。fromArray ( child.transform ) : Matrix4 。_ _ 
    
        
      
          克隆（Matrix4 。身份）；
      childToRoot = Matrix4 。multiplyTransformation ( transformToRoot , childToRoot , childToRoot );       computeTransform (孩子, childToRoot ); } } } 

    
  

```

#### [6.7.1.7](http://6.7.1.7/).Tile JSON

图块 JSON 对象包含以下属性。

[![image.png](https://pic8.58cdn.com.cn/nowater/webim/big/n_v22aa1c01173944c5d9630fc8673d63620.png)](https://pic8.58cdn.com.cn/nowater/webim/big/n_v22aa1c01173944c5d9630fc8673d63620.png)

图 7 — 图块 JSON 对象的元素

以下示例显示了一个非叶子图块。

```
{ “ boundingVolume ”: { “ region ”: [ - 1.2419052957251926 , 0.7395016240301894 , - 1.2415404171917719 , 0.7396563300150859 , 0 , 20.4 ] }, “ geometricError ” ：43.88464075650763 ，“精炼” ：“添加”，“内容”：{ “ boundingVolume ”：{ “地区”：[ -
   
     
      
      
      
      
      
      
    
  
   
    
   
     
       
        1.2418882438584018 , 0.7395016240301894 , - 1.2415422846940714 , 0.7396461198389616 , 0 , 19.4 ] }, “ uri ”: “ 2 / 0 / 0.glb ” } , “孩子们”: [...] }
        
        
        
        
        
      
    
     
  
   

```

boundingVolume定义包围图块的体积，并用于确定在运行时渲染哪些图块。上面的示例使用了区域体积，但也可以使用其他[边界体积](https://portal.ogc.org/files/102132#core-bounding-volumes)，例如box或sphere 。

geometricError属性是一个非负数，它定义了错误，以米为单位，如果渲染此图块而其子项未呈现则引入。在运行时，几何误差用于计算*屏幕空间误差*(SSE)，该误差以像素为单位。SSE 确定图块对于当前视图是否足够详细，或者是否应考虑其子项，请参阅[几何错误](https://portal.ogc.org/files/102132#core-geometric-error)。

可选的viewerRequestVolume属性（上面未显示）定义了一个体积，使用与boundingVolume相同的模式，在请求图块内容之前以及根据geometricError优化图块之前，查看器应位于该体积内。请参阅[查看器请求量](https://portal.ogc.org/files/102132#core-viewer-request-volume)部分。

refine属性是一个字符串，对于替换优化是“REPLACE”，对于加法优化是“ADD” ，请参阅[Refinement](https://portal.ogc.org/files/102132#core-refinement)。瓦片集的根瓦片需要它；它对于所有其他图块都是可选的。一个 tileset 可以使用添加和替换细化的任意组合。当省略refine属性时，它是从父图块继承的。

content属性是描述[磁贴内容](https://portal.ogc.org/files/102132#core-tile-content)的对象。content.uri不需要文件扩展名。内容的[tile 格式可以通过其标头中的](https://portal.ogc.org/files/102132#core-tile-format-specifications)魔术字段来标识，或者如果内容是 JSON，则作为外部 tileset。

content.boundingVolume属性定义了一个可选的[边界体积](https://portal.ogc.org/files/102132#core-bounding-volumes)，类似于顶级tile.boundingVolume属性。但与顶级boundingVolume属性不同的是，content.boundingVolume是一个紧密配合的边界体积，仅包含图块的内容。

也可以为一个图块定义多个内容：contents属性（上面未显示）是一个包含一个或多个内容的数组。内容和内容是互斥的。当 tile 具有单一内容时，它应该使用内容来向后兼容仅支持 3D Tiles 1.0 的引擎。多个内容允许对图块内容进行不同的表示——例如，一个作为三角形网格，一个作为点云：

[![image.png](https://pic8.58cdn.com.cn/nowater/webim/big/n_v24ba16e3d2df843ef93b7d22158ac3ab5.png)](https://pic8.58cdn.com.cn/nowater/webim/big/n_v24ba16e3d2df843ef93b7d22158ac3ab5.png)

图 8 — 定义多个内容的磁贴示例

也可以使用content.group属性将内容分组：

```
{ “ root ”: { “ refine ”: “ ADD ”, “ geometricError ”: 0.0 , “ boundingVolume ”: { “ region ”: [- 1.707 , 0.543 , - 1.706 , 0.544 , 203.895 , 253.113 ] }, “ contents ”: [ { “ uri ”：“建筑物。glb ”，“组
   
     
     
     
            
    
     
      
         
        ”: 0 }, { “ uri ”: “树。glb ”，“组”：1 }，{ “ uri ”：“汽车。glb ”, “组”: 2 } ] } } 
      
      
         
         
      
      
         
         
      
    
  

```

这些组可以与组元数据相关联： content.group属性的值是在 tileset 的顶级数组中定义的组数组的索引。该数组的每个元素都是元数据实体，如[元数据](https://portal.ogc.org/files/102132#core-metadata)部分中所定义。这允许应用程序根据内容所属的组执行样式或过滤：

[![image.png](https://pic5.58cdn.com.cn/nowater/webim/big/n_v2a8930135771444eb8c74af128eeb8fde.png)](https://pic5.58cdn.com.cn/nowater/webim/big/n_v2a8930135771444eb8c74af128eeb8fde.png)

图 9 — 基于内容组的呈现选项图示

可选的transform属性（上面未显示）定义了一个 4×4 仿射变换矩阵，该矩阵变换 tile 的content、boundingVolume和viewerRequestVolume ，如[Tile 变换](https://portal.ogc.org/files/102132#core-tile-transforms)部分所述。

可选的implicitTiling属性（上面未显示）定义了磁贴的细分方式以及内容资源的位置。请参阅[隐式平铺](https://portal.ogc.org/files/102132#core-implicit-tiling)。

children属性是一组定义子图块的对象。每个子图块的内容都完全包含在其父图块的boundingVolume中，并且通常小于其父图块的geometricError的geometricError。对于叶瓦片，此数组的长度为零，并且可能未定义子级。请参阅下面的[Tileset JSON](https://portal.ogc.org/files/102132#core-tileset-json)部分。

[完整的 JSON 模式可以在tile.schema.json](https://portal.ogc.org/files/102132#reference-schema-tile)中找到 。

### 6.7.2. 瓦片集 JSON

3D Tiles 使用一个主要的 tileset JSON 文件作为入口点来定义一个 tileset。入口和外部 tileset JSON 文件都不需要遵循特定的命名约定。

这是用于金丝雀码头的 tileset JSON 的子集：

```
{ “资产” ：{ “版本” ：“1.1” ，“tilesetVersion” ：“e575c6f1-a45b-420a-b172-6449fa6e0a59” ，}，“属性” ：{ “高度” ：{ “最小” ：1 ，“最大“ ：241.6 } }，“geometricError” ：494.50961650991815 ，“根” ：{ “boundingVolume” ：{ “区域” ：[ - 0。0005682966577418737 , 0.8987233516605286 ,
    
     
     
  
   
     
       
       
    
  
   
   
     
       
        
        
        0.00011646582098558159 , 0.8990603398325034 , 0 , 241.6 ] }, "geometricError" : 268.37878244706053 , "refine" : "ADD" , "content" : { "uri" : "0/0/0.glb " , "boundingVolume" : { "区域“ ：[ - 0.0004001690908972599，0.8988700116775743，0.00010096729722787196，0.8989625664878067，0，241 。_ _ _ _ _ _ _ _ _6 ] } },
        
        
        
      
    
     
     
     
       
       
         
          
          
          
          
          
          
        
      
    
    “孩子们” ：[...] } } 
  

```

tileset JSON 有四个顶级属性：asset、properties、geometricError和root。

asset是一个对象，包含关于整个 tileset 的元数据。asset.version属性是一个字符串，它定义了 3D Tiles 版本，它指定了 tileset 的 JSON 模式和基本的 tile 格式集。tilesetVersion属性是一个可选字符串，它定义了特定于应用程序的 tileset 版本，例如，用于更新现有 tileset 的时间。

注意  tilesetVersion可以在请求内容时用作查询参数，以避免使用缓存中的过时内容。

properties是一个对象，包含 tileset 中每个特征属性的对象。这个 tileset JSON 片段是针对 3D 建筑的，所以每个 tile 都有建筑模型，每个建筑模型都有一个Height属性（参见[批处理表](https://portal.ogc.org/files/102132#tileformats-batchtable-batch-table)）。properties中每个对象的名称与每个特征属性的名称相匹配，它的值定义了它的最小和最大数值，这对于例如为样式创建颜色渐变很有用。

geometricError是一个非负数，它定义了错误，以米为单位，确定是否渲染了 tileset。在运行时，几何误差用于计算*屏幕空间误差*(SSE)，该误差以像素为单位。如果 SSE 未超过所需的最小值，则不应渲染图块集，并且不应考虑渲染其图块，请参阅[几何错误](https://portal.ogc.org/files/102132#core-geometric-error)。

root是一个对象，它使用[上一节](https://portal.ogc.org/files/102132#core-tiles)中描述的图块 JSON 定义根图块。root.geometricError与 tileset 的顶级geometricError不同。tileset 的geometricError在运行时用于确定 tileset 的根 tile 渲染的 SSE；root.geometricError在运行时用于确定渲染根图块子项的 SSE。

#### [6.7.2.1](http://6.7.2.1/).外部瓦片集

要创建树中树，tile 的content.uri可以指向外部 tileset（另一个 tileset JSON 文件的 uri）。例如，这可以将每个城市存储在一个 tileset 中，然后拥有一个全局 tilesets 的 tilesets。

[![image.png](https://pic5.58cdn.com.cn/nowater/webim/big/n_v24cfb3f63b08f4f8bb5d70801c4eafc8f.png)](https://pic5.58cdn.com.cn/nowater/webim/big/n_v24cfb3f63b08f4f8bb5d70801c4eafc8f.png)

图 10 — 引用其他图块集的图块集

当瓦片指向外部瓦片集时，瓦片：

*   不能有任何孩子；[tile.children](http://tile.children/)应省略
*   不能用于创建循环，例如，通过指向包含该图块的同一个图块集文件或通过指向另一个图块集文件然后指向包含该图块的初始文件。
*   将由 tile 的transform和 root tile 的transform进行转换。例如，在以下引用外部图块集的图块集中，T3的计算变换为\[T0]\[T1]\[T2]\[T3]。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/73e4e53c-2106-405d-b099-e5ac30d7d8a2)

图 11 — 一个 tileset 引用另一个 tileset 的转换链

如果外部 tileset 定义了asset.tilesetVersion，这将覆盖父 tileset 的值。如果外部瓦片集未定义asset.tilesetVersion，则该值继承自父瓦片集（如果已定义）。

#### [6.7.2.2](http://6.7.2.2/).边界体积空间相干性

如上所述，树具有空间连贯性；每个图块都有一个完全包围其内容的边界体积，子图块的内容完全在父图块的边界体积内。这并不意味着孩子的边界体积完全在其父边界体积内。例如：

[![image.png](https://pic1.58cdn.com.cn/nowater/webim/big/n_v23ba1ca7236c2473393c3b1940924a4f0.png)](https://pic1.58cdn.com.cn/nowater/webim/big/n_v23ba1ca7236c2473393c3b1940924a4f0.png)

图 12 — 地形图块的边界球体。

[![image.png](https://pic8.58cdn.com.cn/nowater/webim/big/n_v2dd6e648606ab49ceaa447844c108dd1c.png)](https://pic8.58cdn.com.cn/nowater/webim/big/n_v2dd6e648606ab49ceaa447844c108dd1c.png)

图 13 — 四个子图块的边界球体。子级的内容完全在父级的包围体内，但子级的包围体不在，因为它们没有紧密贴合。

#### [6.7.2.3](http://6.7.2.3/).空间数据结构

3D Tiles 结合了分层细节层次 (HLOD) 的概念，以优化空间数据的渲染。一个 tileset 由一棵树组成，由根定义，递归地，它的子瓦片可以由不同类型的空间数据结构组织。

运行时引擎是通用的，将渲染由 tileset 定义的任何树。可以使用切片格式和细化方法的任意组合，从而能够灵活地支持异构数据集，请参阅[细化](https://portal.ogc.org/files/102132#core-refinement)。

瓦片集可以使用类似于栅格和矢量瓦片方案（如 Web 地图瓦片服务 (WMTS) 或 XYZ 方案）的 2D 空间瓦片方案，这些瓦片在多个细节级别（或缩放级别）提供预定义瓦片。然而，由于 tileset 的内容通常是不均匀的，或者可能不容易仅在二维中组织，因此其他空间数据结构可能更优化。

下面简要描述了 3D Tiles 如何表示各种空间数据结构。

##### [6.7.2.3](http://6.7.2.3/) .1.四叉树

当每个瓦片有四个均匀细分的孩子（例如，使用中心纬度和经度）时，将创建一个四叉树，类似于典型的 2D 地理空间瓦片方案。可以省略空的子图块。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/9a580287-858e-4df1-801d-74ad3d3e949a)

图 14 — 经典四叉树细分

3D Tiles 启用四叉树变体，例如不均匀细分和紧边界体积（与边界相反，例如，父图块的全部 25%，这对于稀疏数据集来说是一种浪费）。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/30faf661-559d-4196-ac11-339ec814cfe2)

图 15 — 每个孩子周围都有紧密边界体积的四叉树

例如，这是 Canary Wharf 的根磁贴及其子磁贴。请注意左下角，边界体积不包括左侧没有建筑物出现的水域：

[![image.png](https://pic3.58cdn.com.cn/nowater/webim/big/n_v2054a1dd35f314835b9c88a0e8936f41e.png)](https://pic3.58cdn.com.cn/nowater/webim/big/n_v2054a1dd35f314835b9c88a0e8936f41e.png)

[图 16 — 从Cyber​​City3D](http://www.cybercity3d.com/)构建数据。[来自必应地图的](https://www.microsoft.com/maps/)图像数据

3D Tiles 还支持其他四叉树变体，例如[松散四叉树](http://www.tulrich.com/geekstuff/partitioning.html)，其中子图块重叠但空间连贯性仍然保留，即父图块完全包围其所有子图块。此方法可用于避免跨图块拆分要素（例如 3D 模型）。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/9b4972d4-c8c4-4e0a-b07d-e06819407936)

图 17 — 具有不均匀和重叠块的四叉树

下面，绿色建筑物在左孩子中，紫色建筑物在右孩子中。请注意，Tile重叠，因此中间的两座绿色和一座紫色建筑没有分开。

[![image.png](https://pic3.58cdn.com.cn/nowater/webim/big/n_v250349c8baa6a46cebca4c9fb3c5557ab.png)](https://pic3.58cdn.com.cn/nowater/webim/big/n_v250349c8baa6a46cebca4c9fb3c5557ab.png)

[图 18 — 从Cyber​​City3D](http://www.cybercity3d.com/)构建数据。[来自必应地图的](https://www.microsoft.com/maps/)图像数据

##### [6.7.2.3](http://6.7.2.3/) .2.Kd树

当每个图块有两个子图块时，会创建一个 kd 树，两个子图块由平行于*x*、*y*或*z*轴（或纬度、经度、高度）的*分割平面*隔开。分裂轴通常随着树的级别增加而循环旋转，并且可以使用中值分裂、表面积启发式或其他方法来选择分裂平面。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/29a5b95e-1cb1-49dc-b37f-5f7a86b61321)

图 19 — kd 树示例。注意非均匀细分

请注意，kd 树不像典型的 2D 地理空间切片方案那样具有均匀的细分，因此可以为稀疏和非均匀分布的数据集创建更平衡的树。

3D Tiles 支持 kd 树的变体，例如[多路 kd 树](http://www.crs4.it/vic/cgi-bin/bib-page.cgi?id=%27Goswami:2013\:EMF%27)，其中在树的每个叶子处，沿轴有多个拆分。不是每个瓦片有两个孩子，而是有n 个孩子。

##### [6.7.2.3](http://6.7.2.3/) .3.八叉树

八叉树通过使用三个正交的分裂平面将一个图块细分为八个孩子来扩展四叉树。与四叉树一样，3D Tiles 允许对八叉树进行变体，例如非均匀细分、紧边界体积和重叠子项。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/500af7db-79cd-4cb4-8ea8-8770ede121e0)

图 20——传统的八叉树细分

![]

图 21 — 使用加法细化对点云进行非均匀八叉树细分。哥伦比亚大学机器人实验室 Peter Allen 教授绘制的[法国查佩斯圣玛丽教堂](http://robotics.cs.columbia.edu/\~atroccol/ijcv/chappes.html)的点云。由 Alejandro Troccoli 和 Matei Ciocarlie 扫描。

##### [6.7.2.3](http://6.7.2.3/) .4.网格

3D Tiles 通过支持任意数量的子图块来实现统一、非统一和重叠的网格。例如，这是剑桥非均匀重叠网格的自上而下视图：

[![image.png](https://pic4.58cdn.com.cn/nowater/webim/big/n_v240a90e549602446084b8d7e9c32c7614.png)](https://pic4.58cdn.com.cn/nowater/webim/big/n_v240a90e549602446084b8d7e9c32c7614.png)

图 22 — 从[Cyber​​City3D](http://www.cybercity3d.com/)构建数据。[来自必应地图的](https://www.microsoft.com/maps/)图像数据

3D Tile利用空Tile：那些具有边界体积但没有内容的Tile。由于不需要定义图块的内容属性，因此可以使用空的非叶图块来加速具有分层剔除的非均匀网格。这实质上创建了一个没有层次细节层次 (HLOD) 的四叉树或八叉树。

#### [6.7.2.4](http://6.7.2.4/).隐式平铺

包围体层次结构可以*明确*定义 ——如前所示——这可以实现多种空间数据结构。*可以隐式*定义某些常见的数据结构，例如四叉树和八叉树，而无需为每个图块提供边界体积。这种常规模式允许根据瓦片坐标随机访问瓦片，从而实现加速空间查询、新遍历算法和瓦片内容的高效更新，以及其他用例。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/dbb744f8-b4d7-4702-9e47-22bd9f5f6f9b)

图 23 — 带有图块坐标的四叉树

为了支持稀疏数据集，可用性数据决定了存在哪些切片。为了支持海量数据集，可用性被划分为固定大小的子树。子树可以存储可用图块和内容的元数据。

可以将implicitTiling对象添加到 tileset JSON 中的任何 tile。该对象定义了磁贴的细分方式以及内容资源的定位方式。它可以添加到多个图块以创建更复杂的细分方案。

以下示例显示了在根图块上定义的四叉树，其中模板 URI 指向内容和子树文件。

```
{ “root” ：{ “boundingVolume” ：{ “region” ：[- 1.318 , 0.697 , - 1.319 , 0.698 , 0 , 20 ] }, “refine” : “REPLACE” , “geometricError” : 5000 , “content” : { “uri” ：“content/{level}/{x}/{y}.glb” }，“implicitTiling” ：{ “subdivisionScheme” ：“QUADTREE”，“可用级别” ：
   
     
            
    
     
     
     
       
    
     
       
       21 ，“subtreeLevels” ：7 ，“subtrees” ：{ “uri” ：“subtrees/{level}/{x}/{y}.json” } } } }
       
       
         
      
    
  

```

有关隐式平铺对象结构和子树文件格式的更多详细信息，请参阅[隐式平铺。](https://portal.ogc.org/files/102132#implicittiling-implicit-tiling)

### 6.7.3. 元数据

特定于应用程序的*元数据*可以在 tileset 中以多个粒度提供。元数据可能与高级实体（如瓦片集、瓦片、内容或特征）相关联，或者与单个顶点和纹素相关联。元数据符合[3D 元数据规范 描述](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)的定义明确的类型系统，可以使用特定于应用程序或领域的语义进行扩展。

元数据为格式启用了额外的用例和功能：

*   \*\*检查：\*\*在用户界面 (UI) 中显示 tileset 的应用程序可能允许用户单击或悬停在特定的图块或图块内容上，从而在 UI 中显示有关所选实体的信息元数据。
*   \*\*集合：\*\*图块内容组可用于定义集合（类似于地图层），这样每个集合都可以显示、隐藏或视觉样式化，效果在许多图块中同步。
*   \*\*结构化数据：\*\*元数据支持嵌入式和外部引用模式，这样 tileset 作者可以为公共领域（例如 AEC 或科学数据集）或完全定制的、特定于应用程序的数据（例如特定视频游戏）定义新的数据模型。
*   \*\*优化：\*\*每内容元数据可能包含具有性能相关语义的属性，使引擎能够显着优化遍历和流式算法。

元数据可以与不同粒度级别的 tileset 元素相关联：

*   **Tileset——** 作为一个整体的 tileset 可能与全局元数据相关联。常见示例可能包括收集年份、作者详细信息或 tileset 内容的其他一般上下文。
*   **瓦片** ——瓦片可以单独与更具体的元数据相关联。这可能是上次更新图块时的时间戳或图块的最大高度，或优化遍历算法的空间提示。
*   **组** ——磁贴内容可以组织成组。每个组定义表示一个元数据实体，可以通过将此列表中的索引指定为内容的组属性来分配给图块内容。这对于将内容集合作为图层进行处理非常有用，例如管理可见性或视觉样式。
*   **内容** ——磁贴内容可以单独与更具体的元数据相关联，例如属性字符串列表。
*   **具有要素元数据的要素**glTF 2.0 资产可以作为图块内容包含在内。EXT\_structural\_metadata扩展允许将元数据[与](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata)顶点或纹素相关联。

下图显示了这些实体之间的关系，以及可能与这些实体相关联的元数据示例：

![元数据粒度](https://github.com/CHENJIAMIAN/Blog/assets/20126997/0dbff1fd-0697-4dab-b163-b5d63292d586)

图 24 — 应用元数据的不同粒度级别的图示

尽管它们是独立定义的，但 3D Tiles 和 glTF EXT\_structural\_metadata扩展中的元数据结构都符合[3D 元数据规范](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)并建立在[3D 元数据规范的参考实现](https://portal.ogc.org/files/102132#metadata-referenceimplementation-3d-metadata-reference-implementation)之上。此处使用的概念和术语参考 3D 元数据规范，应将其视为定义和要求的规范参考。本文档在适当的地方提供了术语的内联定义。

#### [6.7.3.1](http://6.7.3.1/).元数据架构

元数据模式定义元数据的结构。它包含元数据类的定义，元数据类是元数据实例的模板，并定义每个元数据实例具有的属性集。[根据元数据模式参考实现，元数据](https://portal.ogc.org/files/102132#metadata-referenceimplementation-schema-schema-implementation)模式以 JSON 表示形式存储在 tileset 中。此参考实现包括元数据模式的 JSON 模式定义。

模式可以嵌入到具有schema属性的 tilesets 中，或者由schemaUri属性在外部引用。多个 tilesets 和 glTF 内容可以引用相同的模式以避免重复。[在外部 tileset](https://portal.ogc.org/files/102132#core-external-tilesets)模式中定义的任何类也应在顶级 tileset 模式中定义。

注 1具有建筑类的  模式具有三个属性，“高度”、“所有者”和“建筑类型”。“buildingType”属性引用buildingType枚举作为其数据类型，也在模式中定义。后面的示例显示实体如何声明它们的类并为其属性提供值。

```
{ “架构” ：{ “类” ：{ “建筑” ：{ “属性” ：{ “高度” ：{ “类型” ：“SCALAR” ，“componentType” ：“FLOAT32” }，“所有者” ：{ “类型" : "STRING" , "array" : true , "description" : "所有者姓名。}，“建筑类型” ：{ “
   
     
       
         
           
             
             
          
           
             
             
             
          
           
             
             “建筑类型” } } } }，“枚举” ：{ “建筑类型” ：{ “值” ：[ { “值” ：0 ，“名称” ：“住宅” }，{ “值” ：1 ，“名称” ："商业" }, { "价值" : 2 , "名称" : "其他" } ] } } } }
          
        
      
    
     
       
         
             
             
             
        
      
    
  

```

注 2  由 URI 引用的外部模式。

```
{ “schemaUri” ：“ https://example.com/metadata/buildings/1.0/schema.json” }
   

```

#### [6.7.3.2](http://6.7.3.2/).分配元数据

虽然模式中的类定义了属性的数据类型和含义，但在将元数据分配（即类被“实例化”）作为 3D Tiles 层次结构中的特定元数据实体之前，属性不会采用特定值。

出现在 tileset 中的元数据实体的通用结构在 [metadataEntity.schema.json](https://portal.ogc.org/files/102132#reference-schema-metadataentity)中定义。每个元数据实体都包含它作为实例的类的名称，以及与该类的属性相对应的属性值字典。分配的每个属性值应由具有相同属性 ID 的类属性定义，其值与类属性的数据类型相匹配。一个实体可以只为其类的属性的一个子集提供值，但标记为required: true的类属性不应被省略。

注：前面介绍的建筑类别  的元数据实体。通过将此类实体存储为它们各自的元数据属性，可以将此类实体分配给图块集、图块或图块内容。

      “元数据” ：{ “类” ：“建筑” ，“属性” ：{ “高度” ：16.8 ，“所有者” ：[ “无名氏” ，“无名氏” ]，“建筑类型” ：“住宅” } } 
         
         
           
              
           
        
      

大多数属性值在实体中编码为 JSON。一个值得注意的例外是分配给隐式图块和内容的元数据，以更紧凑的二进制形式存储。请参阅[隐式平铺](https://portal.ogc.org/files/102132#implicittiling-implicit-tiling)。

#### [6.7.3.3](http://6.7.3.3/).元数据统计

统计信息提供了关于属性值分布的聚合信息，汇总了 tileset 中元数据类的所有实例。例如，统计信息可能包括数字属性的最小值/最大值，或特定枚举值的出现次数。

这些汇总统计允许应用程序分析或显示元数据，例如使用[声明式样式语言](https://portal.ogc.org/files/102132#styling-styling)，而无需首先处理完整的数据集来识别颜色渐变和直方图的边界。统计数据是按类提供的，因此应用程序可以提供基于整个图块集的样式或上下文，而只需要下载和处理其图块的一个子集。

![元数据粒度](https://github.com/CHENJIAMIAN/Blog/assets/20126997/a4d3282c-b11d-4002-882f-4aecac4c1889)

图 25 — 说明如何使用元数据统计来呈现分析

统计数据存储在tileset 的顶级统计对象中。这个统计对象的结构在 [statistics.schema.json](https://portal.ogc.org/files/102132#reference-schema-statistics)中定义。为每个元数据类定义统计信息，包括以下元素：

*   count是 tileset 中出现的类的实体数
*   properties包含有关在 tileset 中出现的类的属性的汇总统计信息

属性可能包括以下内置统计信息：

表 5——元数据统计

| 姓名   | 描述        | 类型                                |
| :--- | :-------- | :-------------------------------- |
| 分钟   | 最小属性值     | 标量、向量、矩阵                          |
| 最大限度 | 最大属性值     | …                                 |
| 意思是  | 属性值的算术平均值 | …                                 |
| 中位数  | 财产价值的中位数  | …                                 |
| 标准差  | 属性值的标准差   | …                                 |
| 方差   | 属性值的方差    | …                                 |
| 和    | 属性值的总和    | …                                 |
| 事件   | 值出现的频率    | 对象，其中键是属性值（对于枚举，枚举名称），值是该属性值的出现次数 |

Tileset 作者可以定义他们自己的附加统计信息，例如下面示例中的\_mode 。特定于应用程序的统计信息应使用下划线前缀 ( \_\* ) 和 lowerCamelCase 以保持一致性并避免与未来的内置统计信息发生冲突。

注：   “建筑”类别的定义，具有三个属性。摘要统计信息为数字“高度”属性提供了最小值、最大值和（特定于应用程序的）“\_mode”。枚举“buildingType”属性由不同枚举值出现的次数进行总结。

```
{ “架构” ：{ “类” ：{ “建筑” ：{ “属性” ：{ “高度” ：{ “类型” ：“SCALAR” ，“componentType” ：“FLOAT32” }，“所有者” ：{ “类型" : "STRING" , "array" : true }, "buildingType" : { "type" : "ENUM" , "enumType"：“建筑类型” } } } }，“枚举”
   
     
       
         
           
             
             
          
           
             
             
          
           
             
             
          
        
      
    
    ：{ “buildingType” ：{ “valueType” ：“UINT16” ，“values” ：[ { “name” ：“Residential” ，“value” ：0 }，{ “name” ：“Commercial” ，“value” ：1 }, { "name" : "Hospital" , "value" : 2 }, { "name" : "Other" , "value": 3 } ] } } }, 
       
         
         
             
             
             
             
        
      
    
  
  “统计” ：{ “类” ：{ “建筑” ：{ “计数” ：100000 ，“属性” ：{ “高度” ：{ “最小” ：3.9 ，“最大” ：341.7 ，“_mode” ：5.0 }，“建筑类型” ：{ “出现” ：{ “住宅” ：50000 ，“商业” ：40950 ，“医院” ：50 } } } 
     
       
         
         
           
             
             
             
          
           
             
               
               
               
            
          
        
      } } } }
    
  

```

### 6.7.4. 指定扩展和特定于应用程序的附加功能

3D Tiles 定义扩展以允许基本规范具有新功能的可扩展性。

#### [6.7.4.1](http://6.7.4.1/).扩展

扩展允许使用新功能扩展基本规范。可选的扩展字典属性可以添加到任何 3D Tiles JSON 对象，其中包含扩展名和扩展特定对象。以下示例显示了一个瓦片对象，该对象具有一个假设的供应商扩展名，该扩展名指定了一个单独的碰撞体积。

```
{
  “transform”: [
     4.843178171884396,   1.2424271388626869, 0,                  0,
    -0.7993325488216595,  3.1159251367235608, 3.8278032889280675, 0,
     0.9511533376784163, -3.7077466670407433, 3.2168186118075526, 0,
     1215001.7612985559, -4736269.697480114,  4081650.708604793,  1
  ],
  “boundingVolume”: {
    “box”: [ 0 , 0 , 6.701 , 3.738 , 0 , 0 , 0 , 3.72 , 0 , 0 , 0 , 13.402 ] }, “ geometricError ”: 32 , “ content ”: { “ uri ”: “建筑. glb ” }, “ extensions ”: { “ VENDOR_collision_volume ”: { “ box 
               
           
            
               
    
  
   
   
     
  
   
     
      ” : [ 0 , 0 , 6.8 , 3.8 , 0 , 0 , 0 , 3.8 , 0 , 0 , 0 , 13.5 ] } } } 
                 
               
               
                 
      
    
  

```

tileset 或任何后代外部 tilesets 中使用的所有扩展都应列在顶级extensionsUsed数组属性中的条目 tileset JSON 中，例如，

```
{ “ extensionsUsed ”: [ “ VENDOR_collision_volume ” ] }
   
    
  

```

加载和渲染 tileset 或任何后代外部 tilesets 所需的所有扩展也应列在顶级extensionsRequired数组属性中的条目 tileset JSON 中，这样extensionsRequired是extensionsUsed的子集。extensionsRequired中的所有值也应存在于extensionsUsed中。

#### [6.7.4.2](http://6.7.4.2/).附加功能

extras属性允许将特定于应用程序的元数据添加到任何 3D Tiles JSON 对象。以下示例显示了一个具有附加应用程序特定名称属性的图块对象。

```
{ "transform" : [ 4.843178171884396 , 1.2424271388626869 , 0 , 0 , - 0.7993325488216595 , 3.1159251367235608 , 3.8278032889280675 , 0 , 0.9511533376784163 , - 3.7077466670407433 , 3.2168186118075526 , 0 , 1215001.7612985559 , - 4736269.697480114 , 4081650.708604793 , 1 ], "boundingVolume" : { "box" : [ 0
   
                           
        
        
          
  
   
     
      , 0 , 6.701 , 3.738 , 0 , 0 , 0 , 3.72 , 0 , 0 , 0 , 13.402 ] }, "geometricError" : 32 , "content" : { "uri" : "building.glb" }, "extras" : { "名称" : "帝国大厦" } }         
           
            
               
    
  
   
   
     
  
   
     
  

```

[完整的 JSON 模式可以在tileset.schema.json](https://portal.ogc.org/files/102132#reference-schema-tileset)中找到 。

## 6.8. 磁贴格式规范

每个 tile 的content.uri属性是一个文件的 uri，该文件包含用于呈现 tile 的 3D 内容的信息。内容是下面列出的格式之一的实例。

[glTF 2.0](https://github.com/KhronosGroup/glTF)是 3D Tile的主要Tile格式。glTF 是一种开放规范，旨在高效传输和加载 3D 内容。glTF 资产包括单个图块的几何和纹理信息，并且可以扩展为包括元数据、模型实例化和压缩。glTF 可用于各种 3D 内容，包括：

*   异构 3D 模型。例如带纹理的地形和表面、3D 建筑外部和内部、大型模型
*   3D 模型实例。例如树木、风车、螺栓
*   海量点云

有关详细信息，请参阅[glTF Tile 格式。](https://portal.ogc.org/files/102132#tileformats-gltf-gltf)

Tiles 还可以引用下面列出的旧版 3D Tiles 1.0 格式。这些格式在 3D Tiles 1.1 中已弃用，可能会在 3D Tiles 的未来版本中删除。

表 6 — 传统图块格式和常见用途

| 传统格式                                                                                                      | 用途              |
| :-------------------------------------------- | :-------------- |
| [批量 3D 模型 ( b3dm )](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-batched-3d-model)      | 异构 3D 模型        |
| [实例化 3D 模型 ( i3dm )](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-instanced-3d-model) | 3D模型实例          |
| [点云 ( pnts )](https://portal.ogc.org/files/102132#tileformats-pointcloud-point-cloud)                     | 海量积分            |
| [复合 ( cmpt )](https://portal.ogc.org/files/102132#tileformats-composite-composite)                        | 将不同格式的图块连接成一个图块 |

## 6.9. 声明式样式规范

3D Tiles 包括使用 JSON 定义的简明声明式样式和用一小部分 JavaScript 编写的表达式，以增强样式。

样式使用基于特征属性的表达式定义特征的显示方式，例如显示和颜色（RGB 和半透明）。

以下示例将高度高于 90 的要素着色为红色，将其他要素着色为白色。

```
{ "color" : "(${Height} > 90) ? color('red') : color('white')" }
    

```

有关完整的详细信息，请参阅[声明式样式](https://portal.ogc.org/files/102132#styling-styling)规范。

# 7. Tile格式

[3D Tiles tileset 中的tile 内容](https://portal.ogc.org/files/102132#core-tile-content)表示tile 的可渲染内容。它与磁贴 JSON 的content.uri一起引用。

3D Tiles 1.1 中的主要图块格式是[glTF Tile Format](https://portal.ogc.org/files/102132#tileformats-gltf-gltf)。它建立在[glTF 2.0](https://github.com/KhronosGroup/glTF)之上，允许在 3D Tiles 中对许多不同的用例和不同形式的可渲染内容进行建模。

## 7.1. 传统磁贴格式

以下图块格式已成为 3D Tiles 1.0 的一部分，并已被[glTF Tile Format](https://portal.ogc.org/files/102132#tileformats-gltf-gltf)取代。

表 7 — 传统图块格式和常见用途

| 传统格式                                                                                                      | 用途              |
| :-------------------------------------------- | :-------------- |
| [批量 3D 模型 ( b3dm )](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-batched-3d-model)      | 异构 3D 模型        |
| [实例化 3D 模型 ( i3dm )](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-instanced-3d-model) | 3D模型实例          |
| [点云 ( pnts )](https://portal.ogc.org/files/102132#tileformats-pointcloud-point-cloud)                     | 海量积分            |
| [复合 ( cmpt )](https://portal.ogc.org/files/102132#tileformats-composite-composite)                        | 将不同格式的图块连接成一个图块 |

有关如何基于 glTF 磁贴格式对这些用例进行建模的更多信息，请参阅[迁移指南。](https://portal.ogc.org/files/102132#tileformats-gltf-migration-from-legacy-tile-formats)

## 7.2. glTF

### 7.2.1. 概述

[glTF 2.0](https://github.com/KhronosGroup/glTF)是 3D Tile的主要Tile格式。glTF 是一种开放规范，旨在高效传输和加载 3D 内容。glTF 资产包括单个图块的几何和纹理信息，并且可以扩展为包括元数据、模型实例化和压缩。glTF 可用于各种 3D 内容，包括：

*   异构 3D 模型。例如带纹理的地形和表面、3D 建筑外部和内部、大型模型
*   海量点云
*   3D 模型实例。例如树木、风车、螺栓

### 7.2.2. 用例

#### [7.2.2.1](http://7.2.2.1/).3D模型

glTF 为各种网格和材料配置提供了灵活性，非常适合摄影测量和程式化 3D 模型。

表 8——基于 glTF 的不同类型模型

| 摄影测量                                                                                                          | 3D建筑                                                  |
| :---------------------------------------- | :-------- |
| ![image](https://github.com/CHENJIAMIAN/Blog/assets/20126997/074277a4-ed13-4189-b2f4-0ff992a92dc4) *O3DE 中来自 Aerometrex 的旧金山摄影测量模型* | ![image](https://github.com/CHENJIAMIAN/Blog/assets/20126997/914d709c-76be-49dd-9533-2aa3dbfb9573) *CesiumJS 中来自 swisstopo 的 3D 建筑* |

#### [7.2.2.2](http://7.2.2.2/).点云

glTF 支持具有0 ( POINTS ) 基元模式的点云。点可以具有在primitive.attributes字段中指定的位置、颜色、法线和自定义属性。

![点云](https://github.com/CHENJIAMIAN/Blog/assets/20126997/e12d3b1f-307f-4689-9efe-3d604c0296f9)

图 26——来自蒙特利尔市的 400 亿点云，带有 ASPRS 分类代码 ( [CC-BY 4.0](https://donnees.montreal.ca/license-en) )

使用[EXT\_mesh\_features](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_mesh_features/README.md)时，可以为扩展点分配特征 ID，并且这些特征可以具有关联的元数据。

![点云特征](https://github.com/CHENJIAMIAN/Blog/assets/20126997/cce80d18-5865-4b89-bdab-586a87b8359b)

图 27 — 具有两个属性表的点云，一个存储点组的元数据，另一个存储单个点的元数据

#### [7.2.2.3](http://7.2.2.3/).实例化

[glTF 可以利用带有EXT\_mesh\_gpu\_instancing](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)扩展的GPU 实例化。实例可以被赋予独特的平移、旋转、缩放和其他每个实例的属性。

![实例化](https://github.com/CHENJIAMIAN/Blog/assets/20126997/cb64d48d-32d6-4b5d-a5ae-d0c021da8765)

图 28——来自 OpenTreeMap 的费城实例树模型

使用[EXT\_instance\_features](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_instance_features/README.md)扩展实例时，可以为其分配功能 ID，并且这些功能可以具有关联的元数据。

![模型实例特征](https://github.com/CHENJIAMIAN/Blog/assets/20126997/bf400361-af79-4d66-b2e5-f5258d7aec96)

图 29 — 实例化树模型，其中树被分配给具有每个实例特征 ID 属性的组。一个特征表存储每个组的元数据，另一个存储每个树的元数据

### 7.2.3. 特征识别

[EXT\_mesh\_features](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_mesh_features/README.md)提供了一种将标识符分配给 glTF 2.0 资产中的几何图形和几何图形子组件的方法。特征 ID 可以取消分配给顶点或纹素。[EXT\_instance\_features](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_instance_features/README.md)允许将功能 ID 分配给各个实例。

![逐纹素特征](https://github.com/CHENJIAMIAN/Blog/assets/20126997/01d5e162-d7d2-404a-9c68-2f8845507fac)

图 30 — 来自 Aerometrex 的旧金山渡轮大楼的街道平面摄影测量。左图：显示特征分类的每个纹素颜色，例如屋顶、天窗、窗户、窗框和空调装置。右：分类用于确定渲染材料属性，例如，使窗户半透明

### 7.2.4. 元数据

[EXT\_structural\_metadata](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata/README.md)[以每个顶点、每个纹素和每个特征的粒度存储元数据，并使用3D 元数据规范](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)中定义的类型系统。此元数据可用于可视化和分析。

![元数据](https://github.com/CHENJIAMIAN/Blog/assets/20126997/04c442af-f227-4ffd-b84d-241a2a81a13a)

图 31——与 glTF 模型相关的元数据示例

### 7.2.5. 压缩

glTF 有几个用于几何和纹理压缩的扩展。这些扩展可以帮助减少文件大小和 GPU 内存使用。

#### [7.2.5.1](http://7.2.5.1/).几何压缩

*   [KHR\_mesh\_quantization](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_mesh_quantization/README.md)
*   [EXT\_meshopt\_compression](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Vendor/EXT_meshopt_compression/README.md)
*   [KHR\_draco\_mesh\_compression](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md)

#### [7.2.5.2](http://7.2.5.2/).纹理压缩

*   [KHR\_texture\_basisu](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md)

### 7.2.6. 文件扩展名和媒体类型

请参阅[glTF 文件扩展名和媒体类型](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#file-extensions-and-media-types)。

显式文件扩展名是可选的。有效的实现可能会忽略它并通过其他方式识别内容的格式，例如二进制 glTF 标头中的魔术字段或JSON glTF 中资产字段的存在。

## 7.3. 批处理表

警告

批处理表在 3D Tiles 1.1 中已弃用。请参阅[glTF 迁移指南](https://portal.ogc.org/files/102132#tileformats-gltf-migration-from-legacy-tile-formats)。

### 7.3.1. 概述

批处理*表*是 tile 二进制主体的一个组成部分，包含 tile 中每个功能的应用程序特定属性。在运行时查询这些属性以获取声明式样式和任何特定于应用程序的用例，例如填充 UI 或发出 REST API 请求。一些示例批处理表属性是建筑物高度、地理坐标和数据库主键。

批处理表由以下磁贴格式使用：

*   [批处理 3D 模型](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-batched-3d-model)(b3dm)
*   [实例化 3D 模型](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-instanced-3d-model)(i3dm)
*   [点云](https://portal.ogc.org/files/102132#tileformats-pointcloud-point-cloud)(pnts)

### 7.3.2. 布局

批处理表由两部分组成：一个 JSON 标头和一个可选的小端二进制正文。JSON 描述了属性，其值可以直接在 JSON 中定义为数组，也可以引用二进制主体中的部分。将长数值数组存储在二进制体中效率更高。下图显示了批处理表布局：

![批处理表布局](https://github.com/CHENJIAMIAN/Blog/assets/20126997/31d90961-32aa-4439-ab6f-dcf08b2dff2f)

图 32 — 批处理表的数据布局

当图块格式包含批处理表时，批处理表紧跟在图块的特征表之后。标头还将包含batchTableJSONByteLength和batchTableBinaryByteLength uint32字段，可用于提取批处理表的各个部分。

#### [7.3.2.1](http://7.3.2.1/).填充

JSON 标头应在包含的 tile 二进制文件中的 8 字节边界处结束。JSON 标头应填充尾随空格字符 ( 0x20 ) 以满足此要求。

二进制主体应在包含的 tile 二进制文件中的 8 字节边界上开始和结束。二进制主体应填充任何值的附加字节以满足此要求。

二进制属性应从一个字节偏移量开始，该字节偏移量是属性的componentType字节大小的倍数。例如，组件类型为FLOAT的属性每个元素有 4 个字节，因此应从4的倍数的偏移量开始。前面的二进制属性应使用任何值的附加字节来填充以满足此要求。

#### [7.3.2.2](http://7.3.2.2/).JSON 标头

批处理表值可以通过两种不同的方式在 JSON 标头中表示：

1.  一组值，例如，“name”：\['name1', 'name2', 'name3']或“height”：\[10.0, 20.0, 15.0]。

    *   数组元素可以是任何有效的 JSON 数据类型，包括对象和数组。元素可能为null。
    *   每个数组的长度等于batchLength，这是在每个瓦片格式中指定的。这是图块中的要素数。例如，batchLength可能是 b3dm tile 中的模型数、i3dm tile 中的实例数或 pnts tile 中的点数（或对象数）。
2.  对二进制主体中数据的引用，由具有byteOffset、componentType和类型属性的对象表示，例如，“height”：{“byteOffset”：24，“componentType”：“FLOAT”，“type”：“SCALAR” }。

    *   byteOffset指定相对于二进制主体开头的从零开始的偏移量。byteOffset的值应该是属性的componentType 字节大小的倍数，例如，组件类型为FLOAT的属性的byteOffset值应该是4的倍数。
    *   componentType是属性中组件的数据类型。允许的值为“BYTE”、“UNSIGNED\_BYTE”、“SHORT”、“UNSIGNED\_SHORT”、“INT”、“UNSIGNED\_INT”、“FLOAT”和“DOUBLE”。
    *   type指定属性是标量还是向量。允许的值为“SCALAR”、“VEC2”、“VEC3”和“VEC4”。

批处理表 JSON 是包含 JSON 的UTF-8字符串。

注意  在 JavaScript 中，批处理表 JSON 可以使用TextDecoder JavaScript API 从ArrayBuffer中提取，并使用JSON.parse转换为 JavaScript 对象。

batchId用于访问每个数组中的元素并提取相应的属性。例如，以下批处理表具有两个特征的批处理属性：

```
{ “ id ” ：[“唯一id ”，“另一个唯一id ”]，“ displayName ” ：[“建筑物名称”，“另一个建筑物名称”]，“ yearBuilt ” ：[ 1999，2015 ] ，“ address ” ：[ {”街道” ：“主街”，“房屋编号” ：“ 1 ”}，{”
       
       
       
             street ” ：“ Main Street ”，“ houseNumber ” ：“ 2 ”}] }      

```

batchId = 0的特性的属性是

```
id [ 0 ] = '唯一id '; displayName [ 0 ] = '建筑物名称'; 建造年份[ 0 ] = 1999 ; 地址[ 0 ] = {街道：'主街'，houseNumber ：' 1 '}；  
  
  
     
```

batchId = 1的属性是

```
id [ 1 ] = '另一个唯一的id '; displayName [ 1 ] = '另一个建筑物名称'; 建造年份[ 1 ] = 2015 年；地址[ 1 ] = {街道：'主街'，房屋编号：' 2 '}；  
  
  
     
```

#### [7.3.2.3](http://7.3.2.3/).二元体
当 JSON 标头包含对二进制部分的引用时，提供的byteOffset用于对数据进行索引，如下图所示：

![批处理表二进制索引](data\:image/png;base64,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 "批处理表二进制索引")

图 33 — 显示如何根据 JSON 标头中的信息访问二进制主体的示例

可以使用特征数量batchLength检索值；所需的批次 ID，batchId；以及JSON 标头中定义的componentType和类型。

下表可用于计算属性的字节大小。

表 9——组件类型的大小

| 组件类型              | 字节大小 |
| :---------------- | :--- |
| “字节”              | 1个   |
| “UNSIGNED\_BYTE”  | 1个   |
| “短的”              | 2个   |
| “UNSIGNED\_SHORT” | 2个   |
| “情报”              | 4个   |
| “UNSIGNED\_INT”   | 4个   |
| “漂浮”              | 4个   |
| “双倍的”             | 8个   |

表 10——元素的组件数

| 类型     | 组件数量 |
| :----- | :--- |
| “标量”   | 1个   |
| “VEC2” | 2个   |
| “VEC3” | 3个   |
| “VEC4” | 4个   |

### 7.3.3. 扩展

以下扩展可应用于批处理表。

*   [3DTILES\_batch\_table\_hierarchy](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_batch_table_hierarchy/README.md)

### 7.3.4. 实施例

*本节内容丰富*

以下示例分别访问“高度”和“地理”值，给定以下批处理表 JSON，batchLength为 10：

```
{ “高度” ：{ “ byteOffset ” ：0 ，“ componentType ” ：“ FLOAT ”，“ type ” ：“ SCALAR ” }，“ geographic ” ：{ “ byteOffset ” ：40 ，“ componentType ” ：“ DOUBLE ”，“ type ” ” ：“ VEC3 ” } }
      
          
          
          
    
      
          
          
          
    

```

要获取“高度”值：

```
变种高度= batchTableJSON 。身高；
var byteOffset =高度。字节偏移量；
变种组件类型=高度。组件类型；
变量类型=高度。类型；

var heightArrayByteLength = batchLength * sizeInBytes ( componentType ) * numberOfComponents (类型); // 10 * 4 * 1变量高度数组=  
 new Float32Array ( batchTableBinary . buffer , byteOffset , heightArrayByteLength ); var heightOfFeature = heightArray [ batchId ]; 

```

要获取“地理”值：

    变种地理= batchTableJSON 。地理；
    var byteOffset =地理。字节偏移量；
    变种componentType =地理。组件类型；
    变种类型=地理。类型；
    var componentSizeInBytes = sizeInBytes ( componentType ) 
    var numberOfComponents = numberOfComponents (类型); 

    变种地理数组字节长度= batchLength * componentSizeInBytes * numberOfComponents // 10 * 8 * 3 
    var geographicArray = new Float64Array ( batchTableBinary . buffer , byteOffset , geographicArrayByteLength ); var geographicOfFeature =位置数组。子数组( batchId * numberOfComponents , batchId * numberOfComponents + numberOfComponents );  
     // 使用子数组创建数组视图，而不是新数组。

读取批处理表的代码可以在3D Tiles 的 CesiumJS 实现中的[Cesium3DTileBatchTable.js](https://github.com/CesiumGS/cesium/blob/main/Source/Scene/Cesium3DTileBatchTable.js)中找到。

## 7.4. 特征表

警告

特征表在 3D Tiles 1.1 中被弃用。请参阅[glTF 迁移指南](https://portal.ogc.org/files/102132#tileformats-gltf-migration-from-legacy-tile-formats)。

### 7.4.1. 概述

要素*表*是图块二进制主体的一个组成部分，描述了在图块中呈现每个要素所需的位置和外观属性。另一方面，批处理表包含不一定用于渲染的每个功能特定于应用程序的属性[。](https://portal.ogc.org/files/102132#tileformats-batchtable-batch-table)

特征表用于瓦片格式，例如[批处理 3D 模型](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-batched-3d-model)(b3dm)，其中每个模型是一个特征，[点云](https://portal.ogc.org/files/102132#tileformats-pointcloud-point-cloud)(pnts)，其中每个点是一个特征。

每个特征的属性是使用每个图块格式规范中定义的特定于图块格式的语义来定义的。例如，对于*Instanced 3D Model*，SCALE\_NON\_UNIFORM定义应用于每个 3D 模型实例的非均匀比例。

### 7.4.2. 布局

特征表由两部分组成：JSON 标头和可选的小端二进制正文。JSON 属性名称是特定于图块格式的语义，它们的值可以直接在 JSON 中定义，也可以引用二进制主体中的部分。将长数值数组存储在二进制体中效率更高。下图显示了特征表布局：

![功能表布局](data\:image/png;base64,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 "功能表布局")

图 34 — 特征表的数据布局

当图块格式包含特征表时，特征表紧跟在图块的标题之后。标头还将包含featureTableJSONByteLength和featureTableBinaryByteLength uint32字段，可用于提取特征表的各个部分。

#### [7.4.2.1](http://7.4.2.1/).填充

JSON 标头应在包含的 tile 二进制文件中的 8 字节边界处结束。JSON 标头应填充尾随空格字符 ( 0x20 ) 以满足此要求。

二进制主体应在包含的 tile 二进制文件中的 8 字节边界上开始和结束。二进制主体应填充任何值的附加字节以满足此要求。

二进制属性应从一个字节偏移量开始，该字节偏移量是属性隐式组件类型的字节大小的倍数。例如，具有隐式组件类型FLOAT 的属性每个元素有 4 个字节，因此应从4的倍数的偏移量开始。前面的二进制属性应使用任何值的附加字节来填充以满足此要求。

#### [7.4.2.2](http://7.4.2.2/).JSON 标头

要素表值可以通过两种不同的方式在 JSON 标头中表示：

1.  单个值或对象，例如"INSTANCES\_LENGTH" : 4。

    *   这用于全局语义，如"INSTANCES\_LENGTH"，它定义了实例化 3D 模型图块中模型实例的数量。
2.  对二进制主体中数据的引用，由具有byteOffset属性的对象表示，例如“SCALE”：{“byteOffset”：24}。

    *   byteOffset指定相对于二进制主体开头的从零开始的偏移量。byteOffset的值应是属性隐式组件类型的字节大小的倍数，例如，“POSITION”属性具有组件类型FLOAT （4 字节），因此byteOffset的值应是4的倍数。
    *   语义定义了允许的数据类型，例如，当Instanced 3D Model 中的“POSITION”指的是二进制体时，组件类型为FLOAT，组件数量为3。
    *   一些语义允许覆盖隐式组件类型。这些情况在每个图块格式中指定，例如，“BATCH\_ID”：{“byteOffset”：24，“componentType”：“UNSIGNED\_BYTE”}。JSON 标头中唯一有效的属性是由 tile 格式定义的语义以及可选的额外和扩展属性。特定于应用程序的数据应存储在批处理表中。

#### [7.4.2.3](http://7.4.2.3/).二元体

当 JSON 标头包含对二进制文件的引用时，提供的byteOffset用于索引数据。下图显示了对特征表二进制主体的索引：

![特征表二进制索引](data\:image/png;base64,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 "特征表二进制索引")

图 35 — 显示如何根据 JSON 标头中的信息访问二进制主体的示例

可以使用特征数量featuresLength检索值；所需的功能 ID，featureId；以及特征语义的数据类型（组件类型和组件数量）。

### 7.4.3. 实施例

*本节内容丰富*

以下示例使用POSITION语义访问 position 属性，该语义具有float32\[3]数据类型：

    var byteOffset = featureTableJSON 。位置。字节偏移量；

    var positionArray = new Float32Array ( featureTableBinary.buffer , byteOffset , featuresLength * 3 ) ; _ // 每个 POSITION 特征都包含三个组件。变种位置= positionArray 。子数组( featureId * 3 , featureId * 3 + 3 );    
         // 使用子数组创建数组视图，而不是新数组。

读取特征表的代码可以在3D Tiles 的 CesiumJS 实现中的[Cesium3DTileFeatureTable.js](https://github.com/CesiumGS/cesium/blob/main/Source/Scene/Cesium3DTileFeatureTable.js)中找到。

## 7.5. 批量 3D 模型

警告

批处理 3D 模型在 3D Tiles 1.1 中已弃用。请参阅[b3dm迁移指南](https://portal.ogc.org/files/102132#tileformats-gltf-batched-3d-model-b3dm)。

### 7.5.1. 概述

*批处理 3D 模型*允许对异构 3D 模型（例如城市中的不同建筑物）进行离线批处理，以便高效地流式传输到 Web 客户端以进行渲染和交互。效率来自于在单个请求中传输多个模型并以最少数量的必要 WebGL 绘制调用渲染它们。使用核心 3D Tiles 规范语言，每个模型都是一个*特征*。

每个模型的属性，例如 ID，使各个模型能够在运行时被识别和更新，例如，显示/隐藏、突出显示颜色等。属性可以用于例如查询 Web 服务以访问元数据，例如传递建筑物的 ID 以获取其地址。或者可能会动态引用属性以更改模型的外观，例如，根据属性值更改突出显示颜色。

批处理 3D 模型图块是小端字节序的二进制 blob。

### 7.5.2. 布局

磁贴由两部分组成：标题紧接着是正文。下图显示了批处理 3D 模型布局（破折号表示可选字段）：

![](data\:image/png;base64,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)

图 36 — 批处理 3D 模型的数据布局

#### [7.5.2.1](http://7.5.2.1/).填充

块的byteLength应与 8 字节边界对齐。包含的[Feature Table](https://portal.ogc.org/files/102132#tileformats-featuretable-padding)和[Batch Table](https://portal.ogc.org/files/102132#tileformats-batchtable-padding)应符合其各自的填充要求。

二进制[glTF](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-binary-gltf)应在 8 字节边界上开始和结束，以便满足 glTF 的字节对齐保证。这可以通过填充特征表或批处理表（如果存在）来完成。

### 7.5.3. 标头

28 字节的标头包含以下字段：

表 11 — 批量 3D 模型的标题字段

| 字段名称                         | 数据类型          | 描述                                                        |
| :--------------------------- | :------------ | :-------------------------------------------------------- |
| 魔法                           | 4 字节 ANSI 字符串 | “b3dm”。这可用于将内容标识为批处理 3D 模型图块。                             |
| 版本                           | uint32        | 批处理 3D 模型格式的版本。目前是1。                                      |
| 字节长度                         | uint32        | 整个图块的长度，包括标头，以字节为单位。                                      |
| featureTableJSONByteLength   | uint32        | 特征表 JSON 部分的长度（以字节为单位）。                                   |
| featureTableBinaryByteLength | uint32        | 特征表二进制部分的长度（以字节为单位）。                                      |
| batchTableJSONByteLength     | uint32        | 批处理表 JSON 部分的长度（以字节为单位）。零表示没有批处理表。                        |
| batchTableBinaryByteLength   | uint32        | 批处理表二进制部分的长度（以字节为单位）。如果batchTableJSONByteLength为零，则这也将为零。 |

主体部分紧跟在标题部分之后，由三个字段组成：Feature Table、Batch Table和Binary glTF。

### 7.5.4. 特征表

包含b3dm语义的值。

[功能表规范](https://portal.ogc.org/files/102132#tileformats-featuretable-feature-table)中提供了更多信息。

[完整的 JSON 模式可以在b3dm.featureTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-b3dm-featuretable)中找到 。

#### [7.5.4.1](http://7.5.4.1/).语义学

##### [7.5.4.1](http://7.5.4.1/) .1.特征语义

当前没有每个特征的语义。

##### [7.5.4.1](http://7.5.4.1/) .2.全局语义

这些语义定义了所有特征的全局属性。

表 12 - 批量 3D 模型的全局语义

| 语义的           | 数据类型        | 描述                                                                                                                        | 必需的 |
| :------------ | :---------- | :------------------------------------------------------------------------------------------------------------------------ | :-- |
| BATCH\_LENGTH | uint32      | 批次中可区分模型（也称为特征）的数量。如果二进制 glTF 没有batchId属性，则此字段*应*为0。                                                                      | 是的。 |
| RTC\_中心       | float32\[3] | 当相对于中心定义位置时，定义中心位置的 3 分量数字数组（请参阅[坐标系](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-coordinate-system)）。 | 不。  |

### 7.5.5.批处理表

批处理*表*包含每个模型特定于应用程序的属性，可由batchId索引，可用于[声明式样式](https://portal.ogc.org/files/102132#styling-styling)和特定于应用程序的用例，例如填充 UI 或发出 REST API 请求。在二进制 glTF 部分中，每个顶点都有一个整数范围\[0, number of models in the batch - 1] 中的数字batchId属性。batchId表示顶点所属的模型。这允许模型一起批处理并且仍然可以识别。

有关详细信息，请参阅[批处理表参考。](https://portal.ogc.org/files/102132#tileformats-batchtable-batch-table)

### 7.5.6. 二进制 glTF

批处理 3D 模型嵌入了包含模型几何和纹理信息的[glTF 2.0 。](https://github.com/KhronosGroup/glTF/tree/main/specification/2.0)

二进制[glTF](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#binary-gltf-layout)紧跟在特征表和批处理表之后。它可能嵌入其所有几何、纹理和动画，或者它可能引用外部来源以获取部分或全部这些数据。

如上所述，每个顶点都有一个batchId属性，指示它所属的模型。例如，具有三个模型的批次的顶点可能如下所示：

    batchId ：[ 0，0，0 ，… ，1，1，1 ，… ，2，2，2 ，… ]位置：[ xyz ，xyz ，xyz ，… ，xyz ，xyz ，xyz ，… ，xyz ，xyz ，_ _ _ _ _ _ _ xyz , …]正常: [ xyz , xyz , xyz ,                               
        
        …, xyz , xyz , xyz , …, xyz , xyz , xyz , …]  

顶点不需要按batchId排序，所以下面的也可以：

    batchId ：[ 0，1，2 ，... ，2，1，0 ，... ，1，2，0 ，... ]位置：[ xyz ，xyz ，xyz ，... ，xyz ，xyz ，xyz ，... ，xyz ，xyz ，_ _ _ _ _ _ _ xyz , …]正常: [ xyz , xyz , xyz ,                               
        
        …, xyz , xyz , xyz , …, xyz , xyz , xyz , …]  

请注意，一个顶点不能属于多个模型；在这种情况下，需要复制顶点，以便可以分配batchId 。

batchId参数通过提供\_BATCHID属性语义以及batchId[访问器的索引在 glTF](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#accessors)[网格原语](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#meshes)中指定。例如，

```
“原语”：[ { “属性”：{ “ _BATCHID ”：0 } } ] 
    
         
             
        
    

```

```
{ “ accessors ”：[ { “ bufferView ”：1 ，“ byteOffset ”：0 ，“ componentType ”：5126 ，“ count ”：4860 ，“ max ”：[ 2 ]，“ min ”：[ 0 ]，“ type ” : “标量” } ] }
     
        
             
             
             
             
             
             
             
        
    

```

accessor.type的值应为“SCALAR”。所有其他属性应符合 glTF 模式，但没有额外要求。

当存在批处理表或BATCH\_LENGTH属性大于0时，需要\_BATCHID属性；否则，它不是。

#### [7.5.6.1](http://7.5.6.1/).坐标系

默认情况下，嵌入式 glTF 使用右手坐标系，其中*y*轴向上。为了与3D Tiles 的\*z -up 坐标系保持一致，glTF 应在运行时进行转换。\*有关详细信息，请参阅[glTF 转换。](https://portal.ogc.org/files/102132#core-gltf-transforms)

可以相对于中心定义顶点位置以进行高精度渲染，请参阅[Precisions, Precisions](http://help.agi.com/AGIComponents/html/BlogPrecisionsPrecisions.htm)。如果已定义，RTC\_CENTER指定在应用坐标系变换和 glTF 节点层次结构变换后所有顶点位置相对的中心位置。具体来说，当RTC\_CENTER定义在 Batched 3D Model 的特征表中时，[tile transform](https://portal.ogc.org/files/102132#core-tile-transforms)的计算如下：

1.  [glTF 节点层次结构转换](https://portal.ogc.org/files/102132#core-gltf-node-hierarchy)
2.  [glTF ](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[y](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[ -up 到](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[z](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[ -up 变换](https://portal.ogc.org/files/102132#core-y-up-to-z-up)
3.  RTC\_CENTER的变换，用于平移模型顶点
4.  [平铺变换](https://portal.ogc.org/files/102132#core-tile-transforms)

### 7.5.7. 文件扩展名和媒体类型

批处理的 3D 模型图块使用.b3dm扩展名和application/octet-stream媒体类型。

显式文件扩展名是可选的。有效的实现可能会忽略它并通过其标头中的魔术字段来识别内容的格式。

### 7.5.8. 实施例

*本节内容丰富*

读取标题的代码可以在 3D Tiles 的 CesiumJS 实现中的[Batched3DModelTileContent.js](https://github.com/CesiumGS/cesium/blob/main/Source/Scene/Batched3DModel3DTileContent.js)中找到 。

## 7.6. 实例化 3D 模型

警告

实例化 3D 模型在 3D Tiles 1.1 中已弃用。请参阅[i3dm迁移指南](https://portal.ogc.org/files/102132#tileformats-gltf-instanced-3d-model-i3dm)。

### 7.6.1. 概述

*Instanced 3D Model*是一种用于高效流式传输和渲染大量模型（称为*instances*，略有变化）的图块格式。在最简单的情况下，例如，相同的树模型可能位于或*实例化*在多个地方。每个实例都引用相同的模型并具有每个实例的属性，例如位置。使用核心 3D Tiles 规范语言，每个实例都是一个*特征*。

除树木外，实例化 3D 模型还可用于消防栓、下水道盖、灯和交通信号灯等外部特征，以及螺栓、阀门和电源插座等内部 CAD 特征。

实例化 3D 模型图块是小端字节序的二进制 blob。

注 1  复合图块可用于通过组合两个实例化 3D 模型图块来创建具有不同类型实例化模型的图块，例如树木和交通灯[。](https://portal.ogc.org/files/102132#tileformats-composite-composite)

注 2  实例化 3D 模型可以很好地映射到[ANGLE\_instanced\_arrays](https://www.khronos.org/registry/webgl/extensions/ANGLE_instanced_arrays/)扩展，以便使用 WebGL 进行高效渲染。

### 7.6.2. 布局

一个 tile 由一个标题部分组成，紧接着是一个二进制主体。下图显示了实例化 3D 模型布局（破折号表示可选字段）：

![页眉布局](data\:image/png;base64,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 "页眉布局")

图 37 — 实例化 3D 模型的数据布局

#### [7.6.2.1](http://7.6.2.1/).填充

块的byteLength应与 8 字节边界对齐。包含的[Feature Table](https://portal.ogc.org/files/102132#tileformats-featuretable-padding)和[Batch Table](https://portal.ogc.org/files/102132#tileformats-batchtable-padding)应符合其各自的填充要求。

二进制[glTF](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-gltf)（如果存在）应在 8 字节边界上开始和结束，以便满足 glTF 的字节对齐保证。这可以通过填充特征表或批处理表（如果存在）来完成。

否则，如果 glTF 字段是 UTF-8 字符串，则应使用尾随空格字符 ( 0x20 ) 填充以满足图块的对齐要求，在运行时应在请求 glTF 资产之前将其删除。

### 7.6.3. 标头

32 字节的标头包含以下字段：

表 13 — 实例化 3D 模型的标题字段

| 字段名称                         | 数据类型          | 描述                                                                                                                                    |
| :--------------------------- | :------------ | :------------------------------------------------------------------------------------------------------------------------------------ |
| 魔法                           | 4 字节 ANSI 字符串 | “i3dm”。这可用于将内容标识为实例化 3D 模型图块。                                                                                                         |
| 版本                           | uint32        | 实例化 3D 模型格式的版本。目前是1。                                                                                                                  |
| 字节长度                         | uint32        | 整个图块的长度，包括标头，以字节为单位。                                                                                                                  |
| featureTableJSONByteLength   | uint32        | 特征表 JSON 部分的长度（以字节为单位）。                                                                                                               |
| featureTableBinaryByteLength | uint32        | 特征表二进制部分的长度（以字节为单位）。                                                                                                                  |
| batchTableJSONByteLength     | uint32        | 批处理表 JSON 部分的长度（以字节为单位）。零表示没有批处理表。                                                                                                    |
| batchTableBinaryByteLength   | uint32        | 批处理表二进制部分的长度（以字节为单位）。如果batchTableJSONByteLength为零，则这也将为零。                                                                             |
| gltf格式                       | uint32        | 指示主体的 glTF 字段的格式。 0表示它是一个 URI，1表示它是嵌入的二进制 glTF。请参阅下面的[glTF](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-gltf)部分。 |

主体部分紧跟在标题部分之后，由三个字段组成：Feature Table、Batch Table和glTF。

### 7.6.4. 特征表

特征表包含用于创建实例模型的i3dm语义的值。[功能表规范](https://portal.ogc.org/files/102132#tileformats-featuretable-feature-table)中提供了更多信息。

[完整的 JSON 模式可以在i3dm.featureTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-i3dm-featuretable)中找到 。

#### [7.6.4.1](http://7.6.4.1/).语义学

##### [7.6.4.1](http://7.6.4.1/) .1.实例语义

这些语义映射到用于创建实例的特征值数组。这些数组的长度对于所有语义都应该是相同的，并且等于实例的数量。每个实例语义的值应是对特征表二进制体的引用；它们不能嵌入到要素表 JSON 标头中。

如果一个语义依赖于另一个语义，则应定义该语义。如果为实例定义了SCALE和SCALE\_NON\_UNIFORM ，则将应用这两种缩放操作。如果为实例定义了POSITION和POSITION\_QUANTIZED ，则将使用精度更高的POSITION 。如果为实例定义了NORMAL\_UP、NORMAL\_RIGHT、NORMAL\_UP\_OCT32P和NORMAL\_RIGHT\_OCT32P ，则将使用精度更高的NORMAL\_UP和NORMAL\_RIGHT 。

表 14——实例化 3D 模型实例的语义

| 语义的                   | 数据类型                    | 描述                                      | 必需的                            |
| :-------------------- | :---------------------- | :-------------------------------------- | :----------------------------- |
| 位置                    | float32\[3]             | 包含实例位置的x、y和z笛卡尔坐标的 3 分量数字数组。            | 是的，除非定义了POSITION\_QUANTIZED 。  |
| POSITION\_QUANTIZED   | uint16\[3]              | 包含x、y和z的 3 分量数字数组，在实例位置的量化笛卡尔坐标中。       | 是的，除非定义了POSITION 。             |
| NORMAL\_UP            | float32\[3]             | 定义实例方向的向上方向的单位向量。                       | 否，除非定义了NORMAL\_RIGHT 。         |
| 正常\_右                 | float32\[3]             | 定义实例方向的正确方向的单位向量。应与up正交。                | 否，除非定义了NORMAL\_UP 。            |
| NORMAL\_UP\_OCT32P    | uint16\[2]              | 具有 32 位精度的八进制编码单位向量，定义实例方向的向上方向。        | 否，除非定义了NORMAL\_RIGHT\_OCT32P 。 |
| NORMAL\_RIGHT\_OCT32P | uint16\[2]              | 具有 32 位精度的八进制编码单位向量，定义实例方向的正确方向。应与up正交。 | 否，除非定义了NORMAL\_UP\_OCT32P 。    |
| 规模                    | 浮点32                    | 定义要应用于实例所有轴的比例的数字。                      | 不。                             |
| SCALE\_NON\_UNIFORM   | float32\[3]             | 定义应用于实例的x、y和z轴的比例的 3 分量数字数组。            | 不。                             |
| 批号                    | uint8、uint16（默认）或uint32 | 可用于从批处理表中检索元数据的实例的batchId 。             | 不。                             |

##### [7.6.4.1](http://7.6.4.1/) .2.全局语义

这些语义定义了所有实例的全局属性。

表 15——实例化 3D 模型的全局语义

| 语义的                       | 数据类型        | 描述                                             | 必需的                          |
| :------------------------ | :---------- | :--------------------------------------------- | :--------------------------- |
| INSTANCES\_LENGTH         | uint32      | 要生成的实例数。实例语义的每个数组值的长度应等于此值。                    | 是的。                          |
| RTC\_中心                   | float32\[3] | 当实例位置相对于中心定义时，定义中心位置的 3 分量数字数组。                | 不。                           |
| QUANTIZED\_VOLUME\_OFFSET | float32\[3] | 定义量化体积偏移量的 3 分量数字数组。                           | 不，除非定义了POSITION\_QUANTIZED 。 |
| QUANTIZED\_VOLUME\_SCALE  | float32\[3] | 定义量化体积尺度的 3 分量数字数组。                            | 不，除非定义了POSITION\_QUANTIZED 。 |
| EAST\_NORTH\_UP           | 布尔值         | 当未定义真实和每个实例的方向时，每个实例将默认为WGS84椭球上的东/北/上参考框架的方向。 | 不。                           |

[使用这些语义的示例可以在示例部分](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-examples)找到。

#### [7.6.4.2](http://7.6.4.2/).实例定位

实例的方向由上右向量创建的正交基定义。方向将由[tile transform](https://portal.ogc.org/files/102132#core-tile-transforms)进行转换。

标准基础中的x向量映射到变换基础中的右向量，y向量映射到上向量。z向量将映射到前向向量，但它被省略了，因为它始终是right和up的叉积。

![箱标准基础](data\:image/png;base64,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 "箱标准基础")

图 38——标准基础中的一个盒子

![盒子旋转基础](data\:image/png;base64,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 "盒子旋转基础")

图 39 — 转换为旋转基础的框

##### [7.6.4.2](http://7.6.4.2/) .1.Oct 编码法向量

如果未为实例定义NORMAL\_UP和NORMAL\_RIGHT ，则其方向可能存储为NORMAL\_UP\_OCT32P和NORMAL\_RIGHT\_OCT32P中的八进制编码法线。这些使用\*[A Survey of Efficient Representations of Independent Unit Vectors](http://jcgt.org/published/0003/02/01/)\*中描述的八进制编码定义向上和向右。Oct 编码值存储在无符号、非标准化范围 ( \[0, 65535] ) 中，然后在运行时映射到带符号的标准化范围 ( \[-1.0, 1.0] )。

注意可以在 CesiumJS 的[AttributeCompression](https://github.com/CesiumGS/cesium/blob/main/Source/Core/AttributeCompression.js)模块  中找到对这些单位向量进行编码和解码的实现 。

##### [7.6.4.2](http://7.6.4.2/) .2.默认方向

如果NORMAL\_UP和NORMAL\_RIGHT或NORMAL\_UP\_OCT32P和NORMAL\_RIGHT\_OCT32P不存在，则实例将没有自定义方向。如果EAST\_NORTH\_UP为true，则假定该实例位于WGS84椭球体上，并且其方向将默认为其制图位置的东/北/上参考系。这适用于实例化模型，例如方向始终从其在椭球体表面上的位置朝上的树木。

#### [7.6.4.3](http://7.6.4.3/).实例位置

POSITION定义应用任何平铺变换之前实例的位置。

##### [7.6.4.3](http://7.6.4.3/) .1.RTC\_中心

可以相对于中心定义位置以进行高精度渲染，请参阅[Precisions, Precisions](http://help.agi.com/AGIComponents/html/BlogPrecisionsPrecisions.htm)。如果已定义，RTC\_CENTER指定中心位置并且所有实例位置都被视为相对于此值。有关此属性对变换的影响，请参阅[坐标系。](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-coordinate-system)

##### [7.6.4.3](http://7.6.4.3/) .2.量化职位

如果没有为实例定义POSITION，则其位置可能存储在POSITION\_QUANTIZED中，它定义了实例相对于量化体积的位置。如果POSITION或POSITION\_QUANTIZED均未定义，则不会创建实例。

一个量化体由offset和scale定义，将量化后的位置映射到局部空间，如下图所示：

![量化体积](data\:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhEAAAHUCAYAAACEU3qIAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N13eFRl3v/x96QRIARCkd6kCEoJSSAJhBpQARtgd+3KLlaaqM8+v6ftrmtDwF7RXSuWVbFSRKUESJEmbAAh9BJIQkgvk/n9cc+YIQQyk5mTc+7M93VduZg5M3PO15jMfHJXEEIIIfTQH2huwHlHAu+53R8DLALmGHCtRiXE7AKEEEJTXYHrgG7AHuAtoNjUihq3qcAnQAKQVo/XB6H+f8UBVcBHwCbnY3udx1zuBJ4GDpznfMnAOKAZ8D2wrB41NaRrgC+ct5sA9wARwFO+nDTIx6KEECJQXY76Q2wZMBh429xyPPICsBP4N/A5EGVuOR6LBaYDa304RwQwCUgBtgBfA72cjx0Gypy3WwI9gIHAO0Drc5zvBuBX4EdggfPcZgtG1d4TsLkdvxWY6Xb/SeAHYL4H52zhr+KEEMIo15pdgI86AwfNLsIDk4BQ1AfMW8Bj5pbjke7AOqAdsBwY6qfzfgJMc7v/hvPfYGCx8/YcYIgH5/oz8Bc/1VVfIUAWsAL4CfU9i3B73PXfZwM2Av8L/J1z90iEo8LbCc7T4CAtEUI0brHAN8DPwB9NrqU28cCrqL+QdTYR2GB2ER74FqgAwlB/Ye8wt5w6tQD+CdyB+jDzl5bAMCDdef9WoBXwB8CO+n/5d+exzXWcKxjVKrXej/XVhx1IBCagxnScAK6o5XnBwFbgv1EtMAnnOF8SqvVHWiKECFChqL76IagPjE1AjKkVna0P6q/jo2YX4oMkYDfQxexCPHQtcBLVVG/1cXHDgGOoD/t0IB/VFTPch3M2QXVBPOzFa/7iVsOUGo+9jDW7spZR3cUSgwqQrsDwJjAW1RrVvo7z5CANDkIEpJGcOdhrLqoJ02rC0TdEjEb9pdrH7EK8FAw8D/yn2YV4ydfujOaoD1NvZ100R40fiUKFEFAfrAtRXR/BPtRkhFtRXRaukNgX1Sp5sfN+U1TrSWfn/ZGoVofpqLEg7s4bIqyeQoUQ9dcROO52/xhwkUm1NEbXAbNQf+0dMbkWb9lRHzITzS6kAbUBlqJaDt738rVFzi+XYNTsjkzUz4DDHwX6yVXAbFRIqHQe21XjOSWoGSUurpAEKtR7TEKEEOZoippy9aHzfi9Uv28m3r/BnUtVjftBVL+pCN8NQ40tWOp27B7q7kM3S1vgWeAr5/0/o8fASndTgdJ6vrY7qhVhlvMLYBUwrx7naoqaAdGT6iB2CPU7baZ7UK0QyUCuF6/7njNDhRDCItqimgoH1Tj+ANX9qGGo/mlP/wLo5OHzElDTuFz+A2s2X+vcnaGTENS0xGecXyPNLUf42UDUoNl/AK85vx7y4XwjUVNBS1BrSYzztUAhhHeGopoRF6M+zL/kzLnbrilXsc7H/g7813nO1xmYgWqG9kQQqmXjCmAAakBaPw9f21CmAytR36cVBFbzuhD+FAmMr/HlyfTUc+lW41w9fS1QCOGdZlQPuLKh5nD3dnvcFSLigPuct9+ieuBWTTcDr+N5iADVTfIaqtvkMi9eJ4QQQgiLaIoa5OgavDQF1ToRiwoNH6Cm3i2u9dXV+uJdiBBCCMPY6n6KEMJHQajNffahxiVA9bK0p1Fz9puhZk78iurXvAu1Qh/O1x523u4LvItapEkI4X8hrVrdNjks7AJtFlmy23OLcnIWfwOUN/S1ZXaGEMYKQq3GWMSZgxqzajyvmOrNgECFC9fvpwczKto3h+M2oBBo0qbNXZNCQlo2rWfNDa68/MjpvLwl30dF3ToxLKytNm/elZWninJy3v6udevrxoWGdjnXHguWU1FRWJab+8Z3ERHXxzdv3rmj2fV4qqLCXpmb+/wy1KJTRglq0eKypFatru9r4DX86vTpf+3JyVn8nRnXlhAhhHHCUSOl96Cm03kzl/xTz5/aqRkkPAb/WuA8EBwRcdXYyMiJ3b24nqny8t7bkZe3ZEWLFhOSWra8wWqDP88pP/+rrJyct5eFh49KaNNmui+D2BpUYeHq47m5b6yMjIyNa9NmZpLZ9XiqtHRzYW7u8z8af6UgbDadPh7NW+tKp++SELq5A7W0rA1Y4jz2KfBxPc93L2r+dw/UYMlF0GMvJMyEHjWmkIZgs4XV8zJmqF4QT6+61Zt3UJBedQcFhf4eaHWqW63kLqxEQoQQxvkAtUyvuzwfzvclZ6z70CoXEmfCgHgo8OG0QghRPxIihDDOaeeXv2Q7v4DeTSB2FgxIlPHRQgizyM5cQugnDKIfkAAhhDCbhAgh9BIG0x6AwaOst3GgECLQSHeGEPoIgetmwKDREiCEEFYgLRFC6CEEpt0PA8dJgBBCWIWECCGsLwSmzoDB46TxUAhhJRIihLC2YLjmLogeLwFCCGE1EiKEsK5guOouiJksAUIIYUXyziSENQXD1XdC7BXyayqEsCppiRDCeoJh8h8gRgKEEMLS5B1KCGuxwVU3QcwUCJWVpIQQliYtEUJYhw0uvwWir4UwCRBCCMuTlgghrMEGE2+GoddCuAQIIYQWJEQIYT4bXH4txE+TFgghhE4kRAhhLhtMnAZDb4IwWYpSCKEVGRMhhHlsMGkqxN0M4RIghKi/ICAZ6FrLYxcCUbUc7w60NbKoQCAhQghz2GDClRB7EzSVACFE/QUBB4CVwH5gjttji4E9wGHgKrfjC4B9zuM3N0iVjZSECCFMkTwZEm6DpqFmVyKE5qYCnZ23bcBjztvdgTudt5u6HY8CHnbeDgP+3AA1NloSIoRocOMnQ8IdEiCE8IvfatzPdf57Cih2O37Y+W8RkF/LcVEPEiKEaFATJsGwO6C5BAgh/GMzMB8oQHVRXO08ng9cB6wFPgFmOo+Xo1ovfga+AP7YgLU2OjI7QwglHLgb+ArVvxoKzAbaAU8D2b5fYkIyDL0dIsJ8P5cQws1c51dN3zq/avrR+SV8JCFCBJpIYCQqHKQB253HuwLDgFXO+/ej3mRSz3OuMOe5ugK7gXXnfurYZIibDhHhPtQuhBCWIt0ZItC8AkwGOgGfAzc4j+8Gtro9bxhwKfAPIOkc53ocNXCrI6q14m+1P23cOEiYDi0kQAghGhVpiRCB5lagynl7F3AjsKSW55WgQkFb1KjutbU85y9u5/oE+J6zRnqPGgVD75UAIYRojCREiEBT5XZ7ANUju2OBsagWiv8DPgQWOR+rLWSc71xOSUkw/E8Q2cy3koUQwpokRIhANR64CRjhvJ8BXOH2+EogBbADZcBA4AHnY7tQo8FdegPPAVOqDyUnQswMiGxuQO1CCGEJEiJEIBqNCgGTgJPneZ77HPOjqC4LgDy3472AT4G7gC3q0JgEiHkAoiL8VK8QQliShAgRaG5ErVY3ETjixetOolon3MUDr6ICxC/Vh7uOlQAhhAgEEiJEoHkGKASWuh0bjlqAxlv/iVpC93W3Y3fUuzIhhNCMhAgRaGrb5a++rvTyuBBCNCqyToQQQggh6kVChBBCCCHqRUKEEEIIIepFQoQQQggh6kVChBBCCBE42gOXu92PBZ4AJtTnZDI7QwghhGh8OgAXotbD2ec8Fona3+coaq+fjqhNBB/izGX8a2oJXAzkAzvcH5CWCCGEEKJxuRlYAdyLWhPnr87jp6neEwggGWgGPAncfo5zDUItpncfahfkL3HLDtISIYQQQjQu36A2EXSgWh+OAv/F2a0NwcA/gJ+B9523a/oN6AdUADbU3kF9gUyQECGEEEI0Nvlut9sAuagA0Qy15P8AoA9qKf8ngHaooFEb9z2EQoEI3PYPkhAhhBBCuKmqKrGVlx8zuwyPORyltnM81BR4F9UKAWp5/2+dXzmosPEI0A34zPmcR6jurliI2sUYVCvEK8AS4LjrAhIihGiEqqqKbZWV+rwJQpkNoKqqTLO6i511V2hVd2VlQRBAVZVdq7rt9lPn+rD062Xy8t55v6BgeVgDXMsvKitPlqO6G9yFoz7wvwHedj0V2FvjednOL5c8qkOEw/mvDXjKec7p7i+WECFEo5CzHyh13qk8ffqdfxQVfR5qZkXeKC09XgZUFhR8sqS4eJU2b952++lyoDI/f+nnpaVp35tdj6cqK8sqgbLc3G++KS/ftsbsejxVWVleBRQZfBl7cfHqTQZfw2htgE9QIeI1L1/7Zo37Yc5znAZupca4ioZIdUJYSSQqPOcad4lbH4f+Ccadv6YDhyDjSUg72HDXFEJY2CLURoDpbscWAOvrca67gGdR4ydcPkcN3JSWCBFQIoG1wFeoudKNwKFDsPFp2CQBQgjh8hfOnMoJbuMYvPQJ8FONY6dcNyREiEARiprC9KvZhfjPoSOw9lnYut/sSoRwYwMuRfWff4PqhxcN66Tzyx8KnF+1ksWmRKBYBHyMaomoSxiW7+o7chw2Pwtbsxrogk0a6DpCf4tQqyF+AXxgci1WEQ9MQ02xbFQkRIhA8ChwDDXVqS5hMOJW1CIsFnU0G9KegZQ9DXCxKFQ/ainqgyG8Aa4p9Haj2+1pqFAeyGYAG4BPUYs6NaoeAAkRIhBMBwaiWiLuBqZQY5qSUwhcNwMujmnI4ryTnQ0p82Hj7ga64B8B1yDRyzjzA0KI2qS53d6MWpsgkN3kdjsOtfpjo9GoEpEQ5zCW6p/1P6A2pvlXjeeEwLT7YeA4OGzRQYrZ2bBmPmRkNuBFS+u4L0RNfwBmoVqtFphcixVkACOdt09QvRlWoyAhQgSCA263T6L6990HHYXA1BkweJx1fyWycyF1UQMHCIDXgRHAKNSslk8a+PpCP3lUr5Ao4HHUktJdgVeBQnPL8S+rvmMKYZRPOLOPNhiuuQuix1v31+FEHqQshFQzZpYUA9eZcF2htyTUaofrzC7EAkqBp80uwigyJkIEmhPAYeftYLjqLoiZ7EOAuBI4AhwEJvmhvhpy8mDNIkjd4v9zC2GIF4E1qJlQ0p2hDADGYekB2/UjIUIEKmeAiLvCxxaIN4COQBfnbT/KPQ0bX4B0M5fgbQOsQjXBLkbeM8T52VArHLrca1YhFnI/sBX4ATXttVGRNwQRiIJh8h8g1pcWCFBvmAb9ZZFTACnPw9oMY87vsYdRA1ObA3cCk80tR1icA9judn+rWYVYyL1UrztzBeoPjkZDQoQINDa46iYYOgVCfV1QygH8CTVI8wRwn8/VAXCqADa8CClpdT/XcDW/R/KeIeoyFbVl9MvA9SbXYgXuoeo4Z+6YqT2rjiQTwgg2uPwWiL4WwuobIFoAt6Ga9z8APnN++UleIaS+BOs2+O+cPnkeGI1ace8j4GtzyxEaOIjfAnWj8ABqdkY7YD6NbN0MCREiUDgDxLBrIdyXFohvUSPPQc39vsf30lzyiyH1Vfi5PjvtGeUEanqnEN64AchHrXIa6PKAuWYXYRQJESIQ2ODyayFhqg8tEAARVAcIgMt9rMtNQTGkvQI/r/HfOYUwxTbUbARQa4tcZWItVjEWaEsjXGdF+jdFY2eDidNg2E0Q5usgyEIgxe3+Sh/P51RUAimvw6rV/jmfX/VF9eFWoqbtCXE+ragOEGDItGftfIKa4fQxZ46PaBQkRIjGzAaTpkLczRDur1kUk1BL+k7HL9PXCstg/WL4+UfngU7ANUBn38/tF++h+nKDUa0wfzS3HGFxpzlz6+/TZhViIVe73b4YNSW80ZAQIRorG0y4EmJvgqa+BIgPgCrUYKjbUf28C1FrQlT4VmJhOaS+BauWOw/0BnYAnzv/7evb+f2i5tbFrUypQuiiCjUe4hCwB5hobjmW4B6k7KhxRo2GhAjRSCVPhoTboGmoDyfpjtqBzwaEAi/4pTQAissh9U1Yuczt4DVAS+ftSNRUObPdT/Vo8v2o0eVCnM+/UPtE9AY2mlyLFUxGBaqjwK2c2VKjPRlYKRqh8ZMh/g4fAwScHbIdPp7Pqbgc1r0NPy6r8cDmGvfNXKnS5WfUhmVtOXPTMiGEZzaiAlWjJC0RopGZMAmG3QHNfQ0QAFnAElR4qESNhfBRcSWkvQc/flfLgyuBG4F/ALcANUOGmSRACCHOIi0RohGZkAxDb4eIsLqf67EbnV9+UFIJqe/C8qWcu1VjifNLCCEsT0KEaCTGJsPQ6RARbnYltSuxw/r3YeWXnL9bpC1qitwm1CDOemjfE45nAbRsOTk2PDx+hD6NjlUUFq7+saKizB4VNWG8TnWXlGRsLC/fdaxlyxuvgWA/dX0Zr6ho67bCwo+3t2//Pzfq9JFQXr7jt7y8D741uw4NBaGW6/8MtQy3T/T5iRHinMaNg3grB4gqSF8CKz/n/AGiH2odiijUduVxwDHvrjVhEjTrDV8+DxAa2rtj27YPJwcHR9ar8oZWWXmSsrJ928LCKivatJmeHBLS3uySPOJwFHLkyJ8PlpaeLoyKum1cWFgPs0vykIOjR//jdGEhO1u1un5ckyb9fd1PpsFkZ/9vlYGnD2nT5t6bQkK6aTMbqbLyaEFOzssfAmV1PPVvwEPAeiRECDFqFAy9F1pYNECUVUH6R/Ddx9Q9MPNmVIAAtU7EFNRGRh5ydefsW1efSoUQv7M1bz52QKtWN/UzuxBPnTr1xd6cnJc/quNpd6Gmbfttbx5d2gqFqEVSEgz/E7SsuZaBRZRVQdrHHgYIgJ017v/b82tZvTtHCGGyMaglyOf486TSEiE0lZwIMTMgsrnZldSu3AGpn8J3rtkdnvgAtTrkGOAL4CfPXmb17hwhhMm6AP+FChF+XadCWiKEGW4BfkStyvgpamEaL4xJgJgHICrC/6X5Q1kwZHwB332IWsHPUw7UapjXAO949hKrd+cIISwgErVa5ufACiAa1VUa6+uJJUQIM5SgttAeAGwBnvL8pSPiIO4+6wYIgIxV8NU/8S5AuHRGrZLpwX+f1btzhBAWsQOY4Pa1GZgBZPh6YunOEGb4l9vtQjyegTBqCAx9CFq3rPu5Ztqznvqtbnk16nsTBJQCPTjn6Gmrd+cIISxsF1DsjxNJiBBmuQQ1T/kUkFz304dHQ+wsaGPxAAHUf3ns/6a6dTAc+DNqKlYNVu/OEUJY3Ax/nUi6M4RZtgMxqL+865jGOHwAJD4E7XQIEL7YV+P+1rOfokN3jhAiUEiIEGYqRs1CGHbupwwfAENnQ5s2DVWUiW5Dzd8+BbwHvHnmw6OGQIIG3TlCiEAh3RnCDE+iNps6AfwHUNtmVACh0P8eaB8IAQLU+JDE2h8aHg1xMzXpzhFCBAgJEcIMW1EzEJoD66i1OyOhP2SVQRN/7MapueEDIP4haKvNErxCiMAgIUKY4QPn1zlE94FLZkPhcw1WkWW5unPaBUprjBBCIxIihMWM6gmD5kLUBWZXYr6E/hA3K4C6c4QQmpGBlcJChvWEgY9Cpw5mV2K+2H4QPwc6tDW7EiGEOBcJEcIiYrtB3Fzo3NHsSswX0xsSZ0H7dmZXIoQQ5yPdGcICBnWB+EegSxezKzHfqJ4wcK60xgghdCAhQphsSCeIfxS6dDO7EvO5unOkNUYIoQfpzhAm6t8R4h6DbhIgGNBVunOEELqRlghhkp7tIekR6Nnd7ErMN6gLJM2T7hwhhG4kRAgT9LoAxj0KPXuZXYn5hnSChHnSnSOE0JF0Z4gG1q8NjJ0nAQKqu3O6SmuMEL6JB/KASuB7t+MXAMuAo8Bf3Y63ApY6jy8AbA1TZuMjIUI0oIFRkDgPLuxjdiXmk+4cIfzon6hgEAxcBlzpPP44cCnQAfgzkOA8PtP5nA7O25c2ZLGNiXRniAbSLQqGPgq9+pldifn6toXR0p0jhP80qXG/hfPf8BrHm9ZxXHhJWiJEA7iwJYybB73669FqWF4KOIw5d782kPS4BAgh/OpBoMJ5+1eq9+Z5GsgEqoB3gZ+cxxcBW1C/5/8Cvm6oQhsbaYkQBusdCYmPQZ+L9QgQ2dmw9U3A7v9zd3N25/Tu7f9zCxHQvgLCUF0ap9yOZwH9US0PpW7HjwLRtRwXXpKWCGGgdhGQMBf6aRQg1syHjEz/n7tblGqN6S3dOUIY59Q5jp8rKEiA8JG0RAiDtIuAiXPhosGaBIhcSF1kTIC4sCWMmqdPa4wQQnhGQoQwQKdmMH4OXDREjw/NE3mQshBSf/X/uXtHQuKjEiCEEI2RhAjhZz3C1Q6UF8Xo8aGZkwdrFkH6Fv+fu31zGDEP+l6ix/dCCCG8I2MihB/1CIeE2TBgmB4fmrmnYeMLkL7JmPN36QDdBurxvRBCCO9JS4Twk95NYOhMGBCvx4dmTgGsfx5SMsyuRAghdCUtEcIPejeBuJkwIFGPAHGqADa8CClpZlcihBA6k5YI4aswiH4ALhmuR4DIK4TUl2DdBrMrEUII3UlLRGBrCnQDQuv5+jCY9gAMHqWWrLe6/GJIewV+Xm92JUII0RhIiAhcf0Et+/oWsBMY6eXrQ+C6GRA9Wo8AcapEBYif1ppdiRBCNBYSIgLXYuAiYAIwF7XDnadCYNr9MHCcHgGioBg2vgarVptdiRBCNCYyJiJwZbndDgaKPXxdCFx1Dwwep8ePT2EZpC6Gn380uxIhhGhsdPgUEMZqh+rauMeD5wbDNXdBzEQ9fnQKymHjm7BqhdmVCCFEYyTdGYEtClgK/BWoa6xAMFx1F8RM1iNAFJdD2puwarnZlQghRGMlISJwdQOWAU8B79Xx3GC4+k6Iu0KfALHubVi5zOxKhBCiMdPhE0EY42PgNJDg/AL4G1Bw9lMnT4UYXQJEJaS9Bz9+Z3YlQghhQR2BJsABoMrXk+nwqSCMMROIqHGsvMb9IOjYFSI7QKgGK0mVVELqu7B8KeBA/ffd47z9JlBkZnVCCGGyzag/FEuBTsClwGFfTighInDVtWJjEFx+MwT5nFQbRokdNr4Ly79EhQaAT4HLnLcnAFeYUprJysv3ERTU1OwyPFJVVd0QVlFxGLv9tInVeK6qqvT325WVR3A4KkysxhvVv96VlSfQ6yPBbnYBOroSOOi8/RpwNfCyLyfU6SdGNBwbTLwOhk2DLR+bXUzdSqogfUmNAGEDxrg9aWyDl2WKogo4kem6d/LkonUnT76+2cyKvFdSAJCX98n9ZlfinZIioOK338brVncpULxnz+UPmF2Jd0pqtpz6ld2eH1xWttvIS/hZvidjHA8CrVBrBA0AFvh6VQkRoiYbXH4txN8AYRoMvC2rgvSP4LuPqQ4QOG9/B1zjvP9Ng5fW4Eqc40HW/x4aIiKSOzZrNiTGzKq8VVqaurG8vMoeGZkw3OxavFFUtHmLw7EzJyLihjFm1+KN0tK9O0+f/teeCy64f4zZtXijpGTPvoKCz7MNOn3l4cOzFzVtGq5BN65SUlLqADxpApsM3A/8Gzjk63UlRAh3Npg4DYbeBGEaLEVZ5myBOCtAuNwI3Ixqs/2wQUtrcCV2WP8+FB2BpCnw/WsA4eEDLmzX7j+uCwpqYXaBHrHbczhy5D8ON21aWdG69azrQkMvMLskj1RVFWO3/7+iggJ7VevWf7ouNLS72SV5yM6xY//zOXC4Vas7rm3S5CJtPjRPnPjbioKCz41axj4oKura6LCw9nr84gDNmuUU5eS8fZy6+3ned379FZgN/J8v15UQIVxsMGkqxN4M4RoEiHIHpH0C354rQACUAW83YFEmcXXnlByAEQ/BkfQzHw/GZtPlV736Ry8oSJ+6g4LcG+30qdv9+22zBWlUt+GCWrSYkNSy5Q39zC7EU/n5S/fm5Lx9vmntwZwZMEpQXRs+kZ8YAWCDCVdC7E3QVJMA8cvn8O1HnH+KUjNUS0QJsASorMfFIoDCeryugZRVQdoSyN8FiTOhdUs4YnZRQjQCIdhsYWYX4YU6P877otYEWoaa4jkVNTvD2KuKQJA8GRJug6b13RK8AZU7IP1L+Ppd6p7j/DXVAyrHAPd6d62kJAiKhNXfeltlwyirgrSPIX+nChBtff6rQgjRaP0buAWIRv1B9Tcg19eTSogIeOMnQ/wdegSICgf8shS+/id1B4imnDkjw8vpncmJEDMD/v2pd69rKK7unJztkCABQgjhiUznl99oMPpeGGfUpTDsdmiuQYCoBLZ8B0v/gWcTxEuAjW73V3l+rTEJEPMARNVcjMsiyh2Q8QWc2KICRPs2ZlckhAhM0hIRsMYmQ+LdENHE7ErqVglkLIMv38S7FWYuR3VhFANvefaSEXEQd5+1A0T6l3AiFYbPlgAhhDCThIiANDYZEqZDRLjZldSt0gabl8GXr+H9EnWngGc8f3pSLMQ/pAYnWlGFAzK+ggMpMGo2tG9ndkVCiMAmISLgjB6rAkQLDQIEwJYU2PgR9VvjthXwP8Bx4O/nf+rwaBj2ELSxaICoBDK+hwNrYNQc6NTB7IqEEEJCREAZPVKfAOEAKqqcAaI+UzMB9gGuUDARGFX704YPgMSHoI1FBye6unMOrYSkuRIghBBWIQMrA8bIEZA4A1o2M7uSutmB39bAzr3UP0AMoDpAAMTX/rThA2DobGhj0bEFdlR3zqFlkDAHOnc0uyIhhHCREBEQkhMh4T6IbG52JXVzAL+uhY+ex7N14M9lV43XHzj7KQn9IW6WdQcn2oHNK2DHtzBsFnTpZHZFQgjhTkJEozciDmIsPNvAnQPYsg6WPA/4ukNfOar7YiNqI67EMx9O7Afxc6BDWx+vYxA78MsPkLkUxsyBrl3NrkgIIWqSMRGN2og41dcfFWl2JXVzANvSIPV51J4X/rABSDj7cExviJ1lwOyGrkASsAafdsezA1vXwpYvIHkudOvmn/KEEMK/JEQ0WolDIP5B605XdOcAtqfBhmdhX6mx14rtBYmPGDA48SIgDWiB2msjjnqN53B156R8CJNmQ09dtoMUQgQg6c5olIZH67OXggPYng4/PWd8gBjWExKMCBCgNrNxbRscAVzj/Slc3TlrXQGil//KE0II/5MQYS3DAR8HPw4fAEMf0idA7MiAn+bDkWJjZX5cHQAAIABJREFUrxXbDeLmGji7Ia3G/QzvXu7qztnyHkyaJQFCCKEDCRHW0Bl4GPgGuKD+pxlxiZquaNXZBu4cQOZWWP6c8QFiUBeIfwS6dDHwIiuBa4E3gGnO+x5ydedsexOSHoaevQ2pUAgh/ExChHUcAfLq//LEfhCrUYDYtRW+fwpOFBp7rSGdYPij0MXfgxPDgddR2+s+AdiAz4DpwL88P42rO2fNYoifCRf283OdQghhGAkR1nAY+AS110M9RPeBobOsO13RnQPY+Susedb4ANG/I8Q9ZtDshumozb36AY/j9VbjUN2dk/IGJD8IvfqrLCKEEHqQ2Rnai+kNw+dCBw2WQnYAv2XCpmdhb76x1+rZHpIeMXB2Q80Wn9bevdzVnbP2DRj1MPS5WAKEEEI30hKhtVE9IVGjvRT2ZkL6k7DNh24bT/S6AMY/avDgxFdRq2ICrEe1JHnI1Z2z7EUYOQP6SYAQQmhJWiK0NawnDHxUn70Udu+C9U9DpsEBol8bGGlUgJiM2sjreVSAuARoBxz1/BSu7pwfX4HLZ8BFgyVACCF0JS0R1pAErEDNzPgHMOf8Tx/QFWI12ozpt92w7inIzDH2OgOjYMQ8g2Y3zAG+Bu5HDabsh1pMyssA8VsmbHwJxk6Hi4ZIgBBC6ExaIqxhLTDBs6cO6gJJ86CLJnsp7MmC9Kdh10ljr9MtCoY+auDshrvdbgcBfwRmeXeKvZmQugBi7pYAIYRoDKQlQitDOqm/tP0+XdEg+7Ng1d9ha7ax17mwJYybZ/DshpqLSX3n3ct374K1i2DgXTBgmAQIIURjIC0R2rikAwx7DLpqspfCvn3w89OQddzY6/SOhMTHGmB2w52o/og44DVguWcvc6C6c1IWQMxtMCBeAoQQorGQEKGHCLjgEuimSYA4cAi2PAM7jxh7nXYRkDC3gWY3VAF3eP+yrP2wbSFE3wYDEiVACCEaE+nOsLxeF8Do28yuwnMHDkHGk7DRh62wPdEuAibOhf4Wnt2QUwQ/PwV9b5AAIYRojCREWFq/NjD6UeipyToQBw/Dhmcg7aCx1+nUTAUIqw9O3JcL8dfD4FEQbHYxQgjhdxIiLKtbFCTOg96abMZ06AhkPAOb9xl7nR7hMHqW9QMEQGxX6D9GAoQQorGSEGFJ3aLUbIPemmzGdOQ4bH4WUrOMvU6PcEiYrdfsBl3qFEII78nASsu5sCWMmqfPXgpHsyHtGdi4x9jr9AiHxFkyu0EIIaxDQoSl9I6ExEf1CRDZ2ZAyHzJ2G3yhYOgzDgYk6PF9EUKIwCAholon1DS+Y+Zc/vfpipfo8UGZnQ1r5kNGpsEXCoMhl4OtSo/vixBCBA4JEcq7QBfU9yMLaOAplZ2awfi5+mzGlJ0LqYsaJkBMux/Cm8GJLQZfSwghhJdkYCUkAN2AccAo1MZKgxru8p2awZh5esw2ADiRBykLIeVXgy8UAtfNgOgxEFRl8LWEEELUg4QIGIbaAMvh/FoLxDfMpXuEw8hZcIkmASInD9YsglSjWwVCVAvEwHEyPVIIIaxLujOgLVDgdr/Aecxgv8820GS6Yu5pyHgR0jcZfKEQuOoeGDxOfjyFEMLa5F0a8oEWbvebYvjgyt5NYOhMfWYb5FbA/uchJd3gCwXDlDthyET50RRCCOuT7gzYzpljIAY5jxmkdxOImwkXa7SXQsonkFJzK2x/C4ar7oIhV0iAEEIIPUiIgBVAB+AF4FWgCbDGoGuFweD74ZLhevT15xVCzk4oyDH4QsFw9Z0QJwFCCCE0Iu/YYEfNzBiJWidiDWqApb+FwrX3weDRegSI/GJIfRXW/GLwhYLhilsgRgKEEEJoRt61lVJUi4RRQmDq/TBorB4BoqAY0l6Bn41qkXGxwVU3QcxUCNWlb0c7dvsJ7PZis8vwiMNx6vfbFRU5VFUZkeeNUPL7Lbv9FOXlJq1Z5zV79S2t6hb1cDkwFYgENgAvApW+nlRChPFCYMp9ED1Wj293UQmkvA4/rzb4Qja4/BaIvhbCJED4TbkDTh123Ssq+mlTefnxJ8ysyFt2+4b9Nltw1fHjf9Gq7oqKrMPl5ZlFx48/pVXd5eV7s4GC7OwFT0CwRr+LWblGnr2qqjioslKnUFVS1/+7aOAz1MSBvwOhwDO+XlWHTzWdhcDVd8OQZD2+1YVlsGEx/PyjwReywcTrYdg0aKLRm5bVVThg05fw7UrXEYejSVh4eMtIM6vyVkFB+xAodTRrplfdNlvwyeDgpmW6fb9LS8NPA0EhIa1bhujwNuVUVNSq1MDT23NzP/gwP/+HJgZew6+Cgk6Xc/6WhSfdbn8ITPDHdTX6kTFUK2A00B24ANXGdxzYiVp8qqwe53RNV5ykx7e5sBxS34JVyw2+kA0uvxbib4AwGdjrNxUOSP8K9qfAmGvgp38AREQkXtK69Zx7g4MjzC7QI3Z7LuXlTyy02SorWree+0BwcBuzS/KI3V7MiRNPv1NS0mRXx44PPhAW1snskjxUhcPx7OcnTqxe3rbtvfeHhl6oTagPCnp+RVHRMqMWvrMFB7dsFhYWEW7Q+f2uvLw0GM+m/AUBNwJL/HFdHT7djDQJmI1a7jr0HM8pBL5BNf94+gOr2XTF4nJIfRNWLjP4QjaYOA2G3gRhGgwOKauCklN1P89slcAvy+HkzzByLuTtcH80OLglwcF6/HHscFT30QcFtSA4OMrEajwXFFT99hEc3Fybut3HkNtszTSq23BBLVteeXXLltf0NbsQTxUUfJ9VUPB5OlBRx1OfAU6j9ozymQ6fcEboBbwDJHnw3AjgBuA64H3gAdT/gHMJhmvugCGT9fj2FlZC2rsNEyAmTYXYmyFcgwBR7oC0T+CHDWZXcn6VwOZlcHA5JM6Fzh1rhgghhPeCgsKr9ApVTesahWwDngXaAbfip1mIgdicfCmQimcBwl0Q6hu/EThXOg1S0xWHXKnHbIOSSsj4J6z4yuAL2WDClRB7EzTVJEBkfAE5v0K8tz8nDcgO/LICdnwL8TNVgBBCiFq9D3QE/he16WRPf5xUhz+V/SkJWIpaUKq++gE/onb/POh23AaTboE4TaYrllTCxndh+VKMWRfDTfJkSLgNmp6ry8hCyh2Q/iWcSIWE2bDnG7Mrqp0d2LQSMr+GcXOgS1ezKxJCWFpTVMv6q877dtS0T58EUojoDnyBbwHCpZPzXIlAOb9PV4ybpsd0xRI7pL0Py7/E8AAxfjLE36FHgKhwwC9L4UAKjJkN7dvBHrOLqoUd2LYG/r0Uxs6BLt3MrkgIYXlTjDhpIHVnPA34c6h3DGp8hA0uuw7ip0G4DgGiCtKXwPefY3iAGHUpDLsdmmsQICqBjO9h/1oYNRs6dDC7oto5gO1rYN1HMHImdO1udkVCiMAVKC0RcaiBkf72nzD6BCRO0WO6YlkVpH0M33+M4QFiQjIMvRsiNJhnXQlkLINDKyFpLnSycIDYuhbWfgSTZkOPC82uSAgR2DT44POLWzFmy8woCHtIn+mKaR/D9x9heIAYmwxx00GHOdZ21OyGQ8sgYY51Byc6gC0psOkDmDQLevYyuyIhhAiUEHGNcaf+rbNx5/aXcgekfwHfLsHwADF6LCRMhxaaBIgM5+yGYbOgi0VXCHIAO1Jhy7uQNBt69ja7IiGEgMAIEVGo6SwGybH4Kj6u6YrfvIvapdRAo0fqFSB++QF2L4Wxs6GrRWc3OIDt6bD6bRj+MPSSACGEsIxACBEG/3VZbOEPTNdeCl/9E8MDRFISJM6Als2MvY4/uGY3ZH4JIx6x7uBEB7AjA9a8BckPQu9+xvTKCSFE/QRCiGhq7OntQVBlwXd2114KXzZAgEhOVAEisrmx1/EHB/Dr2urZDT0sOj3SAWRuhXWvqwDR52IJEEIIqwmEEGHwXq7hZRBk8DgDb1UCm5bBV++g/uw20Ig4iLkPojTY4ckBbFkHaz+09uwGB7BrKyx7EZLukwAhhLCqQAkR9dmF00ORJcaduz5c0xW/eJ0GCRCJD0GUxceFgPpg3pYGm9+39uwGB7DzV/jmZbjsPug/WAKEEMKqAiFEVAIrjTt9j2zjzu0tO7BlOXzZAAEicQjEPwitWxp7HX9wANvTYNNiSJpl3dkNDmDXdlj9Akz6I/SLlgAhhLCyQAgRAP8y7tTRR4w7tzfswOYV8NnrqOBkoOHRkDgT2rYy9jr+4JrdsGYxjHgIevUxu6Jz25sJG16E4X+Ci4ZIgBBCWF2ghIj3MGQThB7HoHuB/8/rLTuw+Qf47DXq3kveR8MHwNCH9AkQ7rMbevW37gfz7l2wdhFE3wmXSIAQQmghUEJEOfBn/54yqAom7/DvOevDAexYDZ+9iuEBghYwZA609+ceJAZxzW5Y+waMtfjshj27IGUBxNwOg4ZZt04hhDhToIQIgCXAS/47XfI26Fzov/PVh2svhQ9fQAUlAw3oBbSAFlHGXscf3Gc3jJwBF1k4QOzdC2mLIPZWGJBg3TqFEOJsgRQiAGYCn/t+moRMGLvf9/P4wrWXwpLnMTxARPeBgQ+ixSecTrMb9mfBd/Oh3w3Qf7h16xRCiNoFWoioBKYBj1G/BZiKYGwKXLXLv2V5yzVdMXURhk5fBYjtpXa27NDa2Ov4gwP4LRM2vmT92Q37s2D5Aki4HgaOAg32cBNCiBoCLUSA+qR5CogGPvHwNVXO5w6H2ANGFeYZ13TFtfNhX6mx1xrWExIese7W2DXtzYSURRA73dqzG/bvhxXPQewUiB4tAUIIoasQswsw0TbgemAQcCVwKdAd6ICa7nAINaPjG+Ar4ABg8qJKVUBmBvz0HBwxeJGrYT0hbp51t8auafcuFSCsPrvhwCHY+BxET4VBYyVACCF0FsghwmWr8+tvzvv3AmuATNMqOqd//wI/PQtHio29zqAuEDvHultj1/Tbbli3EGJvhwEWnt1w6BCsfQ76XAXRY+XXTwihO3kXO9v9QDxwj9mFnOngPtixAY43QIBIehS6WHRr7Jr2ZEH6Qoj7A1xi4dkNh47Azwug93gYkiy/ekKIxkDeyc4UBFwMtDO7kGoOoKgAfjNgsayahnSChHnQxaI7W9a0Pwu+fxZGWHx2w5HjkL4A+o6FIZPk104I0VgE4sDK8xns/PcCLBEkXNMVM143/lo928PQR6Brd+Ov5Q/79ukxu+HoCVj/HHQYDUOukAAhhGhMJESc6TLU96QKmGxuKa7pipuehb35xl6r1wUw/lHrbo1d0/79sHK+9Wc3HCtT//86xEPsZAkQQojGRkLEma5BfSKFATebW8reTEh/ErblGXudvm1h3KPW3Rq7pgOHYP0CPWY3HD4GHYfBsCkQatW+FiGEqDcJEdXCgSFu90c6j5lgzy5Y97TxAaJfG0h63LpbY9fkmt3Q60o9ZjcM7AaDp0qAEEI0VhIiqo0A3NdeKAPGNnwZv+2GNU9BZo6x1+kWBYnzoJcmASI7F1Y/B700mt0QZoMgCRBCiEZLQkS1y4DmbvcjUYtRNaCsLEh/GnadNPY63aJg3Dzo3c+6MxrcVQGb06HPOIiV2Q1CCGEREiKqXc2Zn0421BiJBvqU3Z8FK56ErdnGXqd3pAoQVt4a293R47D7MxgzSmY3CCGEtUiIUFoDPWo5HgzEGH/5ffvgp6dh3zFjr9MuAhLm6hMgsrNh9SIobA9h4RIghBDCWiREKGMB12ZW5UCF83YTYKqxlz5wCLY8AzuPGHuddhFw2Txrb43tLjtbrfDYNRYGjDa7GiGEEGeTEKFcAbQAioF/A5uAItRUzxuMu+zBw5DxJGw8ZNw1ADo1g4lzNQoQubDxeegYCzFToYnd7IqEEEKcTUKEcjlQidp462XUhlz/DxUqegIG7CNx+DCsfxrSDvr/3O46NYMx86y9Nba7E3mwbhG0GQRx0yBch6KFECIgSYhQYyE6ACnAVajujBBgATAH9cl7tX8veeQIpD0Dm/f597w19QiHkbOsvTW2u5w8WP08tO4rAUIIIaxPQgSMB35CtUa4xkOEOh97FbgLmOS/yx09DhnzITXLf+esTY9wSJwFgyy8Nba73NOw4UW44EJIvBHCrLwUpRBCCGS4O6jBk5OpHlhZyZnfl3eAU0BT3y91LBvWz4f033w/1/n0bgJDZ8IAC2+N7S6nAFJegKjuEHuzBAghhNCDhAh4BbWakYt7S4TLF85/ax73QnY2rJsPGTvrfw5P9G4CcTPh4kQ9AsSpAlj/EkR0gNiboKkECCGE0IR0Z5wZIODslgg/OJEDaQshI9O/5z1LGAy+Hy4Zbu2NqVzyCmHjSxDRBhJug6Y+hDQhhBAemIof/8KUloiz1dYS4YPsXEh9DlK2+++ctQqFa++DwRbeGttdfjGkvgqhrWHoHRIgjGO3FxOkyRYeVVXFbrdLcDgKTKzGc3Z79bY7DkepNnVXVTl+v+1wlGlTt6iXi1FLFjyO2lzScf6ne0ZCxNn82BJxIg9SFkLqr/453zmFwNT7rb81tktBMaS9AmEtVIBoLgHCb+xAYb7rXnn5pp0nTz75lokFea20dNNemy3IcfLkQq3qLi/ftjM0dN+pnJxXtaq7pGTnPqA4N/etxXq8fygVFb8dNvgKNoej0NhL+FVFXX8pVAK/ojaX9BsJEWerxC8tETl5sGYRpG/x/VznFQJT7tNja2yAohJIeR1oAgm3Q0SY2RU1Hg7g17Ww9HPXEbv94OmSkjCDZwL5V0hIQbHNVlJVUrJdq7ohK7+oKL8U9Kq7qmpfHlBZWrprr8NRpUeTFWC3nzSy2aQqP//7FUVFGesNvIZfORx5xZzdPe9ul/PrVX9eV4dPnYZWgc/fl9zTkPEipG/yS0XnFgJX363P1tiFZbBhMQQFQeI9EBFudkWNhwPYsg7WfQgjJsK6JQBNm141tE2bGffabH6YXNQA7PZ8TpxYuNBmq6xo23bOI8HBrcwuySMORxknT774TkXFtl2dOj311+DgtmaX5KEqcnJe+7yk5MnlHTr8919DQrpoEyJOnXp7xbFjm1806PSOkpJdB+GYPk0znLajmiIblA6fPA3Nx+6MvAJY+yJsSHc7OAq1oNVSqqeS+ioYptwJQzTZGruwHFLfAioh4Y96BIhKoNhf/78M5AC2pcGW92DibCg+AOt+fzQkpCPBwZHmleeFysqTv98ODW1PSEh7E6vxnHuzd3Bwa8LCuplYjTequ8WDg6M0qttwwe3aTb+nRYtL+5hdiKeKi9fsO3Dgtkdp4CChw6dPQ/NhYOWpAkh5ETZsdDv4GPB35+21qEDh64CWYLjqLn22xi4uh9Q3obwEEmdACw0ChB3YvBJW/Wh2JefnALanwZa3IGkmXNgHfj1gdlVC6C44uIU9LKyH2WV4rLh48/m6MgwjUzzPVs+WCNdsg3UbajzgvoFXEuCHqH/lrRA7WZ8Ase5tKC2C4X+Cls3MrqhudmDbGtj+NcTGmV3NuTmAHRmwZjEkPgwX9jO7IiGEZU0DVqDe4JYBf/DHSXX4FGpo9WiJyC+G9a/A6rW1PJgKRDtvHwSO+lBbMLRqAe0uglAN+i5LKiHtPSAfEu+DyOZmV1Q3B7B9DaR/DMlz4ahFWyIcQGYGrHsdkh+GXv31WFxMCGGSz5xffiUh4mxetkS4piuuXn2OJ8wE9gLtgZdQ+3PURxBMvAUK99Tz9Q2spBI2vgtl2TDsAYiKMLuiujmArWthzRKYPAt6dvct8xnFAezeAqvfgFEPQ5+LJUAIIcwg3Rln86IlwjVdcdW5AgRACfAUMBuobwCwweU3Q8xUCNbg06LEDmnvQ+FhGDpDnwCxJQVS3ncGiF5mV1Q7B7DzV/j6FRg5A/pJgBBCmEZCxNk8bIkoLIP1i+FnT5q7Y4Fx1O/7bYPLroP4adBEg0+LkipIXwIFB2D4g9C6pdkV1e332Q3vwoQ51g8QP74Ek/4I/QdLgBBCmElCxNk8aIkoLoe0N2HVcg/O9ziQDvwAfORlLTaYOE1tjd1Eg/9XZVWQ/hGc2gXxGgWI7emwaTEMfxh69za7oto5gN8y1V4jY++Fi4ZIgBBCmE2DD6YGV0dLRFGlmm2wwpMAAXC32+3rAE9Xz7HBpKkwVJOtscuqIO1jOLVDtUC01WCVoN9nN7wFiQ9CbwvPbtibCakLIOZOuChGAoQQwgokRJytjpaIze/Bj996cT73fTP2Aac9eI0NLp8CsbdAuAYBotwBqZ9CznYYNgvatDG7oro5gMytsPYNSH7Q2oMT9+yCtYtg0J0wYJh16xRCBBqZnXG287VEFMH6ZV6e727UgMpI4FnOv7a506WTVQtEU00CRMYXcHIzJM6G9poEiF1bYfXLMMrqASIL0hZBzG0wIMG6dQohApGEiLOdbwOu+iwnmgPM8fzp4yfrszV2hQM2fQnZqTB8NrTXYMMA1+DEb1+Gy2dAv0us+8GclQVpz8LFt8CAROvWKYQIVNKdcTY/bMB1lsmo8RB1mDAJ4u/UY2vsCgekfwVZKTD0YWjfzuyK6uYKEKtfsP7shv1Z8MNz0PcGuGS4desUQgQyaYk4m6u7IQiPuh7qtAIY77z9C2q6Zy1GXapaIHQIEJXApmVwYA2MmgOdOphdUd0cwO6danZD0p+sPbth/35YvgBipsHgUaBBr5YQIiBJS0TtfNzJ8wzj3G7HALXsHTE2GZLuhogmfrqmgSqBjGVwYAUkzdYjQICa3ZD2HETfCf0tHCAOHIKNz0HcNRA9RgKEEMLKJETUzoedPM9S5Ha7HCg+8+Fx4yBhuh5bYwNs/wGyvoOEWdC5o9nVeMZ9dsMgC89uOHgY1s2HXlfBwHESIIQQVichonb+bImYhNo74wAw9cyHksdC/HQ9tsYGoBSyvlItEF26mF2MZ/bu1WN2w+HDsPo56HkpDE6WnkYhhA7knap2/myJWAvUsozy6JEw9F5o0dRP1zGQHdiXDpTD6LnQpavZFXlmfxakzrf+7IYjxyFtIfQdC0Mmyq+lEEIX0hJRO3+2RNRi3HCIn6HP1tg7VkPaZ0AERGnSArE/Sw1O7HO9tWc3HD0OG+ZDh9Ew5AoJEEIInUiIqJ0/WyJqGJMAsfdDK00CxNa1sHoJxD6ANj8v+/fDiucgdgpEj7bu2IJj2bB6EXQeCXESIIQQ2pF3rdoZ1BIxIg7i7tNoa+x1sP59mDQXIjRYSAqqZzdET4VBY60bILKz4eeF0DUWYiRACCG0pMlflg3OgJaIEXGQ+JA+O1tuS4Mt71l7a+ya3Gc3RI+17gfziRzY+Dx0HwJxUyHUqn0tQghxXhIiaufnlojh0ZptjZ0GW96y9tbYNblmN1w4wdqzG7JzYcMCaDkYoq+FMAkQQghtSYio3fn2z/DS8Gi1poIuW2NvT4c1iyH+IWtvje3ONbuhzziInWTdAJGTB+sWQWR/iJ8G4RIghPCfzsBW4ATwV7fjzYD5wDLgRrfjYcATwHLgrgaqsdGx6rut2fy0f8bwATD0IX0CxI4MSHkDkh+29s6W7lyzGzqNhpjJ1v2Rzj0NG16Etr0h/kYIkwAvhH99DQx03v4z8CWQBjwKzHYeTwY2A5nAA8DjzuPjgW3O5wsvyBtZ7fzQnZHQH4ZqtDX27i2w9g0YqVGA0GV2Q+5pWPcCRPZQW7yHWXW0pxA6q7kE/2Dnvz3djgUD3Ws5bqtxX3hIQkTtfBxYmdgP4ufoEyB2/gpfvwIjZ0A/TQKELrMbcgsh5WWI6gpxN0O4BAghjLHQ7XYe8J7z9itAgfP2RuAn5+03nM8D1QrxrcH1NUpWfec1mw8tETG9YegsvbbG/vEltTX2RRbeGtuda3ZD5xhrz27IrYRfXoIWbSH2JmgqAUII4zwFfAVEA5+i9ioCWI9qZeiBGjNR4Ty+FbgQ6I0KEWUNWGujISGidvVsiYjtBYmPQAcNdrZ0AL9lqq2xx95r7a2x3WXnwkbn7Ia4adae3ZB1CHoNgKG3Q1MNtngXQns7nF815Ti/ajoFpBtaUSMn3Rm1q0dLxLCekPCIXltjpy6AmDvhohg9AsQJzWY3XNgZ4u6E5hIghBCNkoSI2nnZEpHQA+Lm6bk19gALb43tLr8INiyCNn0g8UZoosHPblQohEqAEEI0Whq8EZvCi5aIQV1gyFzo0snQivzmt92wdoH1t8Z257DBxvXQqhcMu0lmNwghhDVIiKidhy0Rg7rA8EehqyZbY2dlQfpCGHKrtbfGdpdTAPtXQlKczG4QQghrkRBROw9aIgZ3hhHzoFu3BqnIZ/uz4Jv50PcGa2+N7e5UAax/CQ6XQLNWMrtBCCGsRWZn1M6Dlog+ydC1+/mfYxX79sGKBZB4LQweZd2dLd3lF8PG16BpG4gZC6e3ml2REEJoohkwEugGdAKqgMNAFrCO6umvPpMQUTuDtgI3w4FDahZG3DUwaIweAeJUCWx4BcIiIf4OOJABp80uSgghrG4E8DBqGe+m53jOadTCWk8CW3y9oHRn1M6PG3CZ6eBhSHkWel0NA8fpESAKiiH9ZSAcht0u0yOFEOL8yst3hx87NusaYCVwJecOEACRqI3IfkGt6unT7tISImrnpw24zHT4MKyZDz0ug8Hj9PjPKSyD1MXgCIWkuyGiidkVCSGElRUUfN169+6EUeXl+3p4+dIg4BYgFehf3+tLiKid5t0ZR47A+uegdzLETdTjP6WgHDa8CVVVkDAdIsLNrkgIIaysqOjHlvv3X5dgt+f68n7ZF1hF9cZkXpEQUTsfN+Ay09HjsGEhdBlr7a2x3RWXQ9qbYKuAhHuhhQQIIYQ4j/LyA0327bs+vqqq1B9v8h1Q+46crxukVhIiaqdpS8SxbFi70PpbY7srLod1b0NFMcRNhxZe/xALIUSgOXr04X52+0l//sE1EJjl7YskRNROw5YI19bYneOsvTW2u+JKSHsPyIf4GdCymdkVCSGE1RUXp0Y3lzZkAAAgAElEQVTk5y81Yo2ix4A23rxAQkTtNGuJOJEDqYug+xBrb43trqQSUt+F0myIuw9aNTe7IiGE0EFu7htdoMqI9/kWwNTzPN4MeB5YAywCWmj0QdmgKgFNPtR+3xo7GqKvtfbW2C4ldtj4LhQehhEPQVSE2RU1Hg6gtMx1r6Qk8+Dx4098bWJBXisu3ns0PLzKnp29QKu67fZ9+4KDD+afPPmqVnWXle3ZBZTl5r7zlcNh0+YPy4qKvXvMrsEsBQUrjdzscQrwxjkeewLIAyYBfwb+U0JE7TTpznBtjd32Yhg2DZroECCqIH2JChDDH4SoSLMrajwcwM5f4acPXUeKipZtKSpa5vOCMg2tvBxg9W6z66iPkpKnzvUGbGknTjz9ltk1WEhVYeGKX8rKtlsuqDgcpSEVFfuuNPASg8/z2BQgFigAXgRWSYionQbdGTl5sPp5aNcH4m+AMA3+giipgvSP4NQuSJwJrX1a5ES4cwC/ZcKmZyFXlvcUwjf23Ny3l5hdxDl0B14y8PztUZ9/lTWO24B2wEnn/WNAJ4t/UJrG4itWnqyAPS/BBRfCUE22xi6rgl+WVAeItq3MrqhuDqCiyuwqPLM3E9KfhG15QNCllz5xVURE5/ZmV+WpU6f2l61a9V9fjB//v/GRkT16mF2Pp4qKjtvXrfu/pTExD/dr27ZvvRfsaWilpfmsX7/wu0suub7dBRf0jzO7Hk+VlRUHbd/+5o/79mVkml2LiYzuag9GTfUsqOUxh9ttG2CXEFE7i69YufEdiB0CsZpsjV3ugLRPIGcHJGgUIHZkwOaVZldSt927YP3TkJkH2CZNeubGIUP+eH14eAsNurcgP3///2fvzMOiLNc//iEV95RcjysqJiqLLMMAIoqolUsntXNS66TmjituddpO6yk33MO90upk/solK5eURNZhRjZxAUVwIRYFDQJFcH5/PDOKBsyojDNPzee6vMCXZ973EWfe9/vc3/u576Lo6FWrAwLe7u3pOW18w4YtLFjA36GoKLs0Kip0k6vrtG5eXtOmNWnSVordRSUl125pNOv+16XLc808PcfPatbsSQk+j3DzZon22LHNuzMyNKmmuoazs59dp04vPl+7dgOLjewWFeU0OHBgoSkvUUjVAiIPaAnkIhp7XbLgB6VZsVA747ciKMkBF1fweFGO1tilWji2E3KSwS8YWt3X9iHzoAXSEiF8E7R0hByNuWdUNWfSIHIRpF4BbAYN+u9IN7eJz8siIK5evVCiVq9fV6dOg0ZK5fSxsgiI4uIrpSrV2k9r1Sq9plBMnymLgLhx49ottXrd9itX0k/6+QUHyyIgyspKSEjYum/v3plbER0paxwHB+XjvXq9urBr1yE9bGws++MTFvafsps3S0z1jDpfzc++QWwDXQEsAP7PYtWWmbHAxMqrxRC3DmKzoL2XPAJCvRty4sBvtjwC4vRx2BsK/adABwtu9372HKgXQ+plwCYg4J1hCsWUUfXqNZXgvQGFhdklMTFr1t+6ZWPr5TV1UsOGLaXolVJScqXs2LF1X9y4UZjn4REUZGfXUYrdRaWlxVqN5rOdeXnnknx9Z8xp3txRgs8jlJeXkpDw1f49e6ZuBMpNcY0WLXo28vJ6fb4MAgKgXTvvXBOe/qdqfvYmIkqxFsgB3reKiMqxsEjEtWLRGrtWU1A6m3s2xnFTC8f2wPkoUM6GVi3MPSPD6AVE2FoYPAWe7AU2WoMvMwuZ5+DwR5CUCxAQ8PZgpTLo5Xr1nrAw8Vs5RUXZpdHRoZ+CtkypDJrYuHFbKUqdCytg0/YrV/LPe3kFzWjatKMUycE3b5Zo4+O37P71V1W0t/fk2S1bOjc395yMoby8lMTErYd2755oMgHRpk2bBoGB7813dBziKoOAALCz65JkwtPvrOZnpcB/EJ1C3wduWkVE5VhQJKKwGOJCgXqg+BfUtyBxUxVlQOJPkBkB/nOhdWtzz8gw+t0NsWshYDJ0cxN5Q5ZIRgb8shjO5QD4+782SE4r4Po1pXL6VJmsgGPHNm6/fDn9ZO/ek2bKZAUkJn7+U0ZGRLi3d/C8Nm3cJfg8glZbRkrKtxE7d05ah7gn1zj29vb1/P2Xz+nR4+9uNjZSBPDIzDyaefVqxhTgpAlOfwSIup8XWEVE5VhIJOL3EojaALV0rbEbShDuLQM0+yHjEPjNhTZS3LDE7gbVcnAfb9kC4vxFSFwCp7MA+vR5PdDbe/YEqxVgWvRWQE7OmSRf35nSWQGpqd/v6907OLhtW09TFimqMbTaMo4f/yZqx44xqxCr3xrHwcGhrqfnB8E9eoxQyiIgLlyIuZScvH5xevrP54F/1/Dpy4F59/siq4ioHAuIRBTdgOgt8NhjojGVDK2xy4GE/XBxP3jPg7ZS3LDgbCpErATnV8DJy7IFhOZjiL0I4Os7z19YAa0leG/IawUIASGsAF/fabNbtnSSxgqIj996KDl5915f39fmt2unbG/uORmDVqvl1Kk9cSrVGyuBGwZf8GDYurq+Md3J6QVvGxsLWC8aQVaWJism5pMlsbFfXtQd2o0oPV1TzAfuO4ncKiIqx8yRiKJSUG2G8pvgPVmO1tjlgOYgnPgRvIKhXRtzz8g4zqRBxHJwfxmclZYrIC5cgpglEHcBoE+fOb19fGZarQATU1paQlLS1p/OnxdWQOvWrlJE1vRWgEaz5duAgOA59vZ9TNGsqcbRarWcOLHz2C+/zAzJyMi4bqLL1H7uuc1BTk6j+9aqJYeAyM5OyI2KWr88KWnbuXt+NA/YUQOXWKH7c99YRUTlmDESUVwK0brW2DIJiGOH4NRe6DcP2kux4oFz50C9QggIJ5+HFBDBiEpuGsCxRqZ3m4tZoFkCCRkAvXsHeyoUs6Y2bdpRiv4uMlsByclf7pPVCoiL+3Bb//7vzLa3D+hi7jkZg4hA7D3+888hIVlZWcUmukztYcPWTnB1HR1Qu7YUDiB5eSm5MTErlyUmbqysPkY58AJi2+WDbH29AczhAVqA67GKiMoxUySiqAzU26DsGvhI0hq7HEg+Cqd2g/886CDFikfsbvhhGTz5AvR4WAHRHliKaKHrDiyqiRkKfs2BhKWgOgfg67ugl0IxdaadXScpeo5UtAJ695bLCkhI+OLnpKQ9P8hpBaz43N9/6WwHh4HdzD0nY9BqtaSl/ZASE/Pu4suXIysrdFQT1Bo6dNX4Xr3GDa5du76JLlGz5OWdLIiNXbtao/msugqdWsQ9xxv48T5O/zOg4CEtETliOY8eM0QiSvQC4jJ4T4fHJVhlaoHjERD5NQyZB/aSCIiMDDi4HHz+Aa7+osrrQ1GbuwV5DWVp/ZoLqiUQexbA03Oqk0IxQZoKgxWtAD+/+QtatZLHCjh+/P+OqtWbvhs06L/zZbMCwsIWbhgwIGSmg8NTUtQ8ADh79mBqQsKiJenpmmsmukStZ55Z9qK7+4QhdepIsDYD8vPTCqKiQleq1aHGbud8EuiL2IJpAwwC7BG9MG4h6jqkAfsQ+RSna2KeVhFROY84ElFSJl9rbC2QGAmR/4PBc8G+s7lnZBznL4pdGJ7PgUvfGnrenwPeAV4HLiIKsjwkubkQtQw0aQAeHjMcfXymBDdv3k0KK6CsrISkpK37U1MP7vP3X7hAJisgKenrqLi4DV8OGPDu/E6d+knxvhYr+R+TDx9evK5//6UzunUb5iKPgDh0Jjp6zaLU1IgCE13C5umnl412d580ok6dBlL8UgoK0gujo9eGqtWr440Y3h3YjIhEXAM+QIiGd3U/r6X7u0lq3ljtjMp5hA24Ssoh7ku5WmNrgeQ4SPgSBgdDJyk8V5GcGLUUuvwdnPs/pIBoC8wGntL9/V2gAdAFSHi4eebkQ9wKEE2GPDzGdvHxmRgskxWQmPjVweTkH/b6+c2bJ5sVoFav+rxv3zdmd+48wMHcczIGvRUQEfHa6n795k/q0WOYNEWTMjIizv3yy/olqanfXzY8+oGwefrpxc97ek4aKUsp+GvXLhTHx28KjYlZGWtgaEPgY0CNEBBlwL/4Y25EOSYSEGAVEVXxiBpwldwC9Xb4PQO8Z8jRGlsLpMRB/BZRB6KTFDdauHQJji4Dh6Hg2v8h/3sfB1SIbOZ9wGTd8RqoqJebD3HLIDIFwMtrYieFYoaEVsDmnf36zQ3u0MHXgsuG30Gr1XLy5Hea6Oj/bOzT5+3ZDg6DusvyID579mDqsWPvrfL2fusVJ6fhCllqHly8GHVRrd64JCNjR7bu0CRgHdDpnqEewFhEG+qKuADjEI2gKsPmqac+GuHhMWl03bqNpXjWXb16oUSlWhsaFvZRZDXDbBC/j/OIhUwD3bEzwA+mn+XdWO2MynkEdsaNWxD3DVxLBe9gaC6BgAA4lQgJmyFwNnSRREBczIKYEHAIhF4DauC/thd337iGAhse9qSQVwBRK0B1HMDF5cV2bm4T51mtANOiW8knHTq0ZP3AgR8EydI/ASA9/VDa4cPvLff0nPVSt24jvGUREOfPx2Sp1WsXJyZ+dUl3aBMwQff9K4jP12VgBPB/iIfkJcAJuAoMQAj4WsAV3fFsKhAY+P4QT8/Jo2XpJVNUlH1Drd60OTx8UXg1wzyAT4GOiMWMnkJgOiaMOFSFFOrMDJg4sfK2gDgO3jOhhSQCgptwbD0EzIIu3S23pkJFfs0B1QpoFwDuQ2pIGyYjWuHqOfzwp7xSAEdXgioRoHv3l/6mVM5YaLUCTMsdK+Dfa/r1mz+pW7ehvWQREBkZEecOHFi2Qqmc8k9X11F9ZKl5kJOTkJOS8unS+PivMiscHlrh+zrA87rvR3DnRtMW8NV9P5w7fmQzIKDiNQIC3hmsUEwZJ1MvGZUqdPORI+8drGJIa2Aboiy1E3cLCC3inhRm2llWjlVEVI4JIxGlWlDvgispoihTCwkS5bRAThpQAoEzoWsPSQRELkSsgDb+4Dm0Bv9LCwAfRDLlCzxgkZY75P8GmjWgjgfo0mVQSx+fCQs7dPC2WgEm5uzZQ6nHji2Tzgo4fz4yMyzs3RAvr3+M6NnznwGyCIjs7ITcmJjVy6KiNpy950cVdyBoAf3DNKbC8d8rjKt4vJQKlRYDAt4O9PYOkqmXTJlKtWlbWNh7+yv5sS3wKmInxT8QeRD3frh+B2aZdpZVI8c779FjokhEqRY0uyBXDT5z5WmNnZoEh9YDDaG1JBGI3FwIXwHtFOBRExEIDeAG/Ab4Ace5k/38EFwphOhVEKUGcHQc3kypnPqajFbAgAEfTpfNCvjll9dC3N3nvNS9u0xWQHRWTMzyFU5OI59ycRkVKEvRpMuXT+QnJGxdoVZvqWxr4VBgC6JQ2weAXmSsBYoQ+Q9fInY/gViVlyPqHOwAUgH8/V/rr1BMntygQQsJivRBScnVco1mw7awsLe+r+THTyNqODyJ+LfqEyb1Xx/THY/gAcpV1xRWEVE5JohE3NRC/G44Hwf9gqGVBJn2+tbYP34Ciknw02fmnpFx5ORD3Ero6Abuw6HOwz7VghBFpACaAF8g8iIekquFELMGouIAOnTws/PymrKgS5eBUux20VsBBw68sbpfv7cmy9RKOSMj4tz+/YtXKpUzRru6juojS/+EX39NyElMXLe8Y8e+ga6uLw+VpWjSlStpBdHRq1aoVOtTqhhSCrxUyXEt8FkVr/lK9wcAP795fl5eMybJ1FZerd64/cCB13fzx1yGWohdXt66vxchFrfvA/9E2BuPA9d5iGqTNYHVzqicGo5E3NSC+ns4FwV9ZkGre7OMLRAtkJoC4ath8GToJkXlO7G7QRUCTd2g1/NgWxNPtXuXejVwzqvFoFoHkTEADg7Kx/v2fXWhTFZAevqh08eOLVvVv/8bE+S0AkaPcHGRq39CbOzKkObNPZTu7hOG2NrKUjQp/Te1estqlWp9oqmu0bv3Qm8vrxnT5OklU3Tr2LEt2w8cWPgNlSdDliMSRQt0f24iylMPQ9iotxCL3b1AddUsTY5VRFRODUYiyoD4/XD5CPQJlqs1dswa8J0K3dzlsDDyCiByJTRzAc+RUK+mJr0SOKn7vpg7WzofkGvFEBMKv0QAtGjRs5GX1+vzZbMCwsJeW+7oOP5fcloB/3ja1fWF/jJZAfHxn65s2dLJw81t/EhZiiZdvZpZGBW1dm1ExMcmC7f7+c3y8PaeGmRnZy9BkT5RCj4+fuOuffvmViUgKmM6MBVRl+YKIlJxg5pvB37fyCHBHz01FIkoQ7TGPn8QfObL0xo7LRWiVoLbOOjpJoeAuFIA4augRVchIGokAqHnFtAD8Xkpe7hTFRZDXCiEhwO0adOmgb//e/NlswIiI1csd3efMdrZeYyfLFZAVpYmKypq+bJOnfoGurq+NEQWKyAv71RBdPSKlc2ade3u6Tl5pK2tLEWTLhVrNKHrYmNDYgyPfjAUigW9PD0nzG7atJMUO9xu3izRxsdv2f3DD3O/wPiGWWMR9SD6IUpX3wAaAxsR1XLNijUSUTk1EIkoBxIPQMpPog6ELALiTBpELQf3sZbdGrsi+b+Bei207Axeo8HWVMvihxQQv5dA1AY4HA5gb29fz99/+ZwePf7uJstKPjNTWAE9eox8XjYrQKVas7JjRz8f2awAjebTNU2adOzi7j5htK1tYyneKIWFWSUqVWjoL78sijDVNRSKST2VypdnNWvWTQoBUVZWQkLC1n17987civGF6UYg7IungCzdsVKghBopr//wWEVE5ZQhwkUP+AQtB+J/hpQfIHAutGtXg3MzIWcrtsb2lkNAXCmEyNXQsAN4joF6FnqTLboB0VvgiH4vt62Hx7sze/QYoZRFQFy4EHMpJmbpyp49hz8jkxWQmyusgBYtnD1lswKio1etqVOnQWuFYuqY+vWfkOKNUlSUXapWb9wSHv5hdUWTHgoPjxmOSuWM4FatnCTY4abvCvvV/j17pm7EeAGh353xDHdHHG4Cy7i7Vo3ZsIqIqinngaIR5UByOJzcAwFzoZ0UHQBFa+x9S8GxJlpjPyKuFkL0WmjUGjxGQ30LvckWlYJqMxw+oDtgO3z4pzNkswIiI0NC7O3795etlXJMzIqVjz/errtCMWmEPP0ThBVQv75dM2/voHENGjST4o1SXHylVKXasOnw4XcOGB79YHh4jO3i6Tk2uFUrFwkS1PW9ZLYe2r174v0IiEBEZcpn+WPiZC6wtAan+FBI8cY0E/r+GTeNf4kWSDkK6h0QOB/aS1Es6E5rbO9/gnNNtMZ+BOh3N9RvBt4vQ30LLSxTVApJm+GQvpBM7eee2xwkmxUQG7tyld4KkKeVcvpvGs3GNU2adOzi4TFJIisgu1ilCg2tVatuXYViijRFk0pKrpSp1aHbwsL+YzIB0avXOHuFYvqCtm09pUhQ12rLSEn5NmLnzknrMP5Z4gNsRezEqKyL5/maml9NYI1EVM195kVogaQICN8OgXOgkyQCIjMTfl4GHsOhV021xjYx+t0NtZuA9zgLFhC34NhWOLRPd6D2sGFrJ7i6jg6QxQrIyzuRFx0dEtKyZS+pdgXk56cXRUevWlO/ftNWSuU0mfonlMbGhm6xsdHWUigmT27cuLUkNQ+ulsfFrfvi4MG3vsdE/RtcXEa08/KaIlUvmeTkHdE7doxZhchjMIZeiOJZoxHdOS0eOZZC5uE+dmhogcQoiP4ShsyXpzX2+YsQvRzchoNLgBwCQr+7oW4jUIyDhhYqIABOZ8FpvZdZa+jQVeNlswKio1esadnS2UmhmDRCnl0BF4rj4zeE1q9v18zTc9p4Wfon6K2A69evlfj5BQfJUjTpxg1RNOngwTd3YSIB0anTs60Uipnz27f3lsIe1mq1nDixSx0ZOX8VYjeFMTgDPyIakJksn6SmsUYiqsbISIQWSI6DxG0wcJ48AuLiRYgIgS7DaqA19iNCv7uhvC4oxkIjW3PPyAD6m8djgwevHCPXroC0gsjItaueeKKzVFbA1auXSlSqtaE2NnXrytQ/QW8FlJb+fq137znTmjbt2NDcczKG0tJCbVzcxh0HDizcgYkERJcug1r26zfnVXv7fve2CLdIhIDYGR8ePntZVlZWsZEv64ooHDUF0Z1UGizlyWGLaCxSgijjaQkYEYnQAilxkLgZfOeAgxSdC0Vr7CPLwWEAuAVaztugOq6XQtRGeOwx8JkIjaRYpQE0atSqeUlJwZWjRxdtNPdcjKW4OOecRrP+Up8+r7eIilq+2dzzMZbCwoIstXp1mo/PXGVMzJqt5p6PsRQXF1yJjV2d6O09VRkf/+lXhl9hGZSX/14YHr4sAuNrHtwXHTr42fn5zZ3XuXOAFIszrVZLaure4wcOLA7JzzdaQLRHCIdXgcp6aFg0lvL0GI2oj/4qsNi8U7mNgUjErcfghAYiN4vW2A6Oj2xmD0VWDqiXQ5cA8BhsOW8BQ4RHQX8vUE6RSUAAFBXl5IaFvfOjuefxIBw9+t/KOgtaPNHRIYfMPYcHISZm3S/mnoMFYdO4cYsOly4lHM7JSThs7skYQ1lZOenp38Xk52t+M/IlrYADwEfA16abmemQ5QliDgxEIlJToWgfBMyWqzV2dAi07VvDrbFNSFEpZGugz5OgnAyNpRIQVqxYeWC0KSk7E1NSdpqs54aZaQEcRlSe3GTmuTww1pyIqjEQiSg6AX1nySMg9K2xWytrqDX2I6CoDI5tg7jTUL8NNJYjI9F0dAeUyPGGs/JocQY8zD0JC6cp0BewM/dEEN2Af0Js5Qwx81weCtlExOOP8FoGIhG9hsKTPeW4n+fmQngIdHAHr5pojf0IKCkD9Ta4cQX8XjD3bCyAmUAKEAN8bua5WLEs3gSSEFsCV5l5LpZKe0QTvV8QxZvMuQW/ISKJci+wyIzzqBH0IqIvYmtJESJB5hJwEJjGHx+k7YBPgExE9a1fgZ+BCYB+pdgZ+A44A/yuO+evQAQi/+F+cNGd63fgGiLjfR/gfh/n2Kz791RVfvofup9XfFgZiETUfkwSAZEPsaugtSe4jZRHQMRugxs54BkEdlLsDDAxs7jzhvsXYlVlxQqIFtF6plIjzQP/dLwA6AtUtQRGmWke9RHiQYPoiSE9jwHDEb6MD/AtIrQSA3ghxELF2uSuwDGEuMhDhGJiAAXC03HVjWunO+8thMDYDCQiwm1fAUFGzm8AEA0MBP4HvA18iehmdhRwM/I8Z3TnqqqF8xu6c0ZWOFZDnTzNib41dhPXGm6NbUJKyiHuSyi6BIppYCdFe99HwMkK32cBheaaiBWLo+J7I537qrL7l+He0tH3/v1RYIsoJJUOBJvh+iahNrBQ970ncLbCz5oi/qH6Slu1gO1Ac2AM4qGu5wmEqtK/eU8g9r2eued6roiQ22sIgVIdjRGC4zfAGxH50PMpcAQRChpk4DwgRMx/gInA+9z9Ieutm9f/ARcrHK+BTp7mRN8au/mT4D2ihltjm4iSW6DeDr9ngM8ceEKK7nyPiEmIz5gd8F+Mr8Fv5c/PGMT9rR7i/mblj+xFLH6fQeyG2P2Ir18L2AbkIz7LJqmpYQ4eAzohbkiX7/nZVcQbM1/392eAbghr4X/3jM1HhFs1ur9f5o8CAiAZOI3wpwxl2Y9GZK++zd0CAkQUIgYRPTAm2S4XoQD/hoiQVGS67uvqe46XIW0komJrbJ9RJmyNXYPcuAVx38DVVFDMhmZ/dQExBCHGoxGlcHMQN8FRCP/byl+XfyLuo+GIe/IFxALpJd1xK2KxuwuxMNYvlNcBfwfWPuK5PIbIY6qDqEZpkpoa5qI2IoQ/ApGvsEH392T+GBLz1X01thxnS+BlRL5FV4Qt0rzCz22pvrBU7wrXrazQiB3iP+VviPCQIdYiPmRBwDe6Y62AkQir5d5/l74Bl2RcKYSo1WDXATzGSCQgdkBBiija1fyv7vfXQUTh9InE6xG7MqxYaYJ4INUDnkQkUj5l1hlZJm8iBAOIiPVBKm9mZWpsEM+eFoiOnGVmmINJqQ3MQLwxA7mT2Xsd2I+IAuhXPXoBcMGI8wYi8iuaABlAAuJBn49IwDSmfGnLCueqyuNLx/jsxhhEPkdfoCci030SQsysqWS8hHaGLK2xK1KqBfUuuHIcvOdAi2aGX/Onpw5QsT72o9yVZMWyqav7o8f63qice38v5opsLkKIvaEY30NDKh5D7JoYgNiDPh1ROTIPoeKiuLMVpkT31dAqsQ5CKTdCZMR2QlgI84APEUlhxqC/3lBEJKKqP2crfXXl6MNY0xACYTJC2HxZyVjJEisLiiB2LTSy8NbYFSnVgmYX5KpBORtaWQWEoBiRN1SG2DH1b/NOx4oFkYvIe7iFsJzfMu90LJbF3LHBv8E8Da3eB/oAz3Hnefano2KdiFOIZMfxgD2wBbGf9Tndz/Vem4uBc3YG2iLyFr4xMLY69NmzvtWOuj/+hxAN/0IkI7VHJF1W9h8sUSTiWjGo1kGdJ0RnSxkExE0txO+G83HgGwytmxt+zZ+avoidTEsRn8tlCMHeDOHtWvnrMhg4xJ2kyf8g3hstEe8ZK8Le+RxRquBJxPOjM8L2foFHn4cQDAxD5Db9qXdSPYb4h97LLYQFAXcepN8jVucTEXkI9+KIeCjrm448wR+thk5UXavhXr5BZLC+hshdqIyAe/4eqHvdZ1WML0Hs7HgcIZjKqXqXiCSRCH1rbNvG4DXOsltj67mpBfX3cC4K+syCVi3MPSMz0wmxzToQEbHbrjv+O3d2R1n5a+KG2FnQH+Hzr9MdL8S6lbMiKkQO3jOIHLfHuBOtedRMR3TjfIo7GxP+tNQG9iCiBtsQuytuIgo5vY546H6nG3sBESJ6A5GEuRyRL9EMYTm8hFhNxQDHERGLzyq8vi/iF2tsL+QExI6JWYj8haWInIbriC2ZLyBKvVb0ujojCkddq+a8oQiV2BCxwr9oXCwAACAASURBVMuoYpwEkQh9a2zqgvc4CVpjI36t8fvh8hHwXwBtWht8yZ+fv3N3VNDPXBOxYnH8g7sXYwPMNRELp1uF7+sBTphnF9NYYDZi52COGa7/yKmNeJAORng3FclERCnOVTj2FmJ19G/u3hKpRZQT1ddZGIMQJy/r/qB73UcIwWFspnkwonrma7rXVqSQB7NLziKEji+VJ1TqsfBIRNENiNlSoTV2XcOvMTdlQMJ+OH8QfOZbBcRtvkWIZH0irJQdKK2YhK8Q9z+9kNhrxrlYMsnc6R1SjFjIPmpGImq59Mf43D/pqY1IenwCUaGyLSKR6xwiKnFvQRst4mG+GvEQbo1IwjzO3bs2khFKMBBhcVwEwhCFo7YglGJRhfHfIaIh94Z+biGiH6t18+uACO+e013j3lyGrxE34Or8r5aISEsKIoRcFRYcifhNCxc2AWXgLUlr7HIg8QCk/ASB86FtZZbYX5ULiKqvbyM+dx+YdzpWLIjjgD8wH7FQW2HW2Vgu3ohqyy0Qv6tHnQPxLLASESk6Z2Dsnwr9QzIf0Y/CWIoQVb+q43dENOJeKlNohVSffFKCqFBpCEPnAVEnoh5CmFRXNcyCIxFxO6BjY/CZJkdr7HIg/mc48QMEzoN2xubFmJn0dLgU8YguFs8fC6FZsQLCPn5U70NZKUNY3+ZgAGLn39OYp5y2WbHQlbbJqItoUHMV+MLAWAuMRJSUwo1r0KkJeE+Fx43NLzEj5UByOJzcA/3mQ7sO5p6RcWSeg0Mfw7k8c8/EihUrFosPYlfI3zGPhWJ2LOwhaXJeRuz0CEFESqrDwspeF5fBsS8gOhXGvQOPNzT3jAyjBVKOgnqHsDA6SCIgMjLgyGI4lwPQvfuIvzk7j/hXnTqNJSjeBeXlZTanT/9wOicn8YhSOePlBg2ekCBfBuAWZ86EXUxN3banT5+P/9W4cevG5p6RsZw/H3X56NFF3wwZsvb5pk3btTT8Csvg11/jCw8ffmcb1SejW6mcXoieS6MRPaH+kvzVRMQhRKOxyvp63IsFlb0uKQPVNii5DO5OdyfyWypaICkCjm6HIcHQqaPBl1gEmZlwZBGczgJwdBzezNt7xoLOnQMqK71ucWi1Wk6f3pOclaU+Ghj4/ixHx2GuNjYS9F4D0tMPpf32W/xngYGrg1xcXvC2sbGQj58BLlyIuVRQcPqbYcPWjnJ3Hz+4dm1j2vmYn7y8E3mnTv2wFBMKiICAtwPbtPHwMtX5a5rff88jJmb9nuzsuBQDQ50RNSlewTyFrCwGOT6lNYcxPTb0WIidUVIO0V9C8SVQzILE9eaekWG0QGKUmPeQ+dBJigcwnL8Ix5boBUSHDn52SuWUhTIJiNTUvccPHnxz9YAB7wfJJCAyMiLORUb+d7mz8yujnZzkERBZWZqsyMiQkE6d+vfv1WucRALiZEFMzKrVGs0Gk3n4vr7z/D08Jk9s0qStBLYrlJRcu6XRrPtfdnbcCQNDuyJ2yUzh/nIJ/5TI8Uk1DxaQWKlvjV1yHnxnweMS1MnXAslxkLgNBs6TR0BcvAixiyH+AoCDg/JxH583FnbpMsjR3DMzlrNnD5+Kjw9ZHRDw5kRHx2FusgiIzMyjmWFh74X06vXiP5ycRvetVUuO21J2dkJuRMSalR07+vm4u08YUqeOFM9K8vPTfzt2bPNqlWp9oqmu0a/fQm8Pj6CpsgiIGzeu3Tp2bOP2/ftf20H1CfcdEMLhVUQBxr88MsTFzYWZIxE3boH6a9EaWzkTnpCgNbYWSImDxM3gOxscHMw9I+O4mAURSyE+E6BFi56NvLxen9+161M9ZHkQp6cfTFOp3l3Rs+fE8T17jvSysZEifYMLF2IuqdUhIT17Dn/G2Xl0QO3acqRv5OWl5EZHh4S0bevs6eY2fmSdOg2keKPk558pio5etSYiYpnGVNfo3TvY09196vSmTTtKkLcFpaXFWo3ms5379i3QV0muiraIsgAfIcoJWMEqIqrDjCLixi2I+waungDfmXK0xtYCJzRwdAsoZ4GDJCv4rBxIWApJ5wDatGnTYODAD+bLZwV8vLx79wljevSQzwpo167/wF69ZMolOFkQE7N6TcuWzk6enpNG1qvXWIo3yrVrF4oTErZ8EhOzMtZU1/D1XdBLoZg6086ukwRRU72A2LL7p5/mfEH1tSVaIDpbhwCbHsnkJEGOu415MJOdUaoVdSCupIB3MDSToLOlFjiVBBEbIXAWdO1hfId2c/JrDsQtgdizAPb29vWUyo+DZbUCnJ1H+ctkBcTFfbKiQwdvX2EFyCEg8vPTCiIj165q3tzewcNj0ui6dRtLsRC7evVCSVzc2tDw8EWRprqGp+dUJ4ViwqxmzZ6UYNEDpaUlJCVt/enHH2dupXoB0QRhYWyj6l5Lf1mk+ACYCTNEIvStsfMS5WmNrQXSEiH8E/CfKY+AyM2FqBCITQNwcHCo6+W1KFhGK8DFZdSzzs4vSmcFNG/eU+HuPmmELFZAQUF6YXT02tCmTVu38fScPLpevaZSvFGKirJvqNWbNoeHLzLZLgIPjxmOPj7Tg5s37ybBPQvKy0tJTv5y3+7d0zbxx8rMFWmISKL8Hlj0SCYnGVYRUTWPOBJxUycgclXytMbWAqePw95Q6DMNHHvKIyCOLgONPjPd1sXlzRk9eoyQygqIilqxrEOHgQOdnccMlEdAyGsFxMdvCq1f366ZQjFlXL16T1hQDZmqKS6+UqpShW4+cuS9g6a6hofH2C4+PhODW7Z0kuCeJQREQsIXP+/aNcmQgKiPEBAaRE8MK5VgFRFV8wgjEfrW2JnRoJgtR2tsvYAIXw2Dp0B3V0kERD6oVlYQELVHjPg0yMVltHRWQMeOPv169Ro3xNZWLivAzk4+K0ClWhsKdep5eweNbdiwhSwCoiwmJnRbWNh7+011DS+viZ0UihkLWrVylaKZnlZbxvHj/3d0164J66m+lbotsANRFiD4kUxOUqT4EJuJRxSJKAM0++D8UfCfK0dnSy2Qdhpi14LfVOjmJoeAyCuAqBUQpS9PW/u55zZPc3YeHVCrlgRd1NFbAWt1VsArw+SzAtpKaQXY2NSqpVBMntygQQsJetVAScnVco1mw7awsLdMtg3RxeXFdm5uE+e1bespRTM9rbaMpKSvo/7v/15cjWjkWBW1EPkP+cAkqt+x8ZfHKiKq5hFEIsoAzX64+DP4SSIgANJPQVwI9BoP3SUREFcK4OhKUOn3xtd69tm1452dRw+QxQq4fPlEflzculUtWnRy9vScNNLWVhYrILMoNnbtmvr1mzRXKCZKYwUUFWWXqlShm8vLfy9RKIImN27cVhIBce2WWr1x+4EDr+9GdFpejXgYVqQ+8ALQ957jtsDzwMDqrtG9+0t/UyqDFrZrp2xfQ9M2KVqtllOn9sSp1W+tBG5UM/QxRC+MOohqlI+6G6h0yBG/NQ8m7p1RDiTsh3M/gZ9ErbHT0yF5hRAQTl5yCIj83yB2NajjdQdqDRmyepyr67ihclkBq1c98USHbp6e00bJZAXExW1cb2vbqKFSOV0qK0Cl2rSttPT6NaVyxkx5iiYV3Tp2bNM3Bw4s/AaRFJiO6FoMEACMQTwoDyGaRwG8xp2kwe+BQbrvPwJev/caXboMaunrO3FBhw6+UpSy12q1nDz5nebIkVkhWVlZ16sZaoPYfdEC0dq77JFMUHKkuBGZCRP2zigHEg7CiR+ht0StsSmD5CXQayw4ecshIK4UQtQqiNAX17F56qnlY9zdxw6ztZXiuXDbCmjcuHV7hWLKKLmsgHWboby2QjF5csOGLaUI+ZSUXC3TaDZsKy3NyVIoJgXZ2dk3MvecjKG0tFgbH79x175987cjQvBPc0dAADyj+9qBOwICYJTuqx13BASISMVdODoOb+bnN+81e/u+UlSi1Wq1pKX9kPTzz2tCsrKyig0MX4Qoaf0c1UcrrFTAKiKqxkR2Rjlw7BCc2gP95kF7KcKBcC0bKAbXl8HJRw4BcbUQYtZAVJzugM3gwUtGe3pOkNIKUCqDXpbJCoiKCt1cXn6jxMtrxiSZrACNZv32/PzLmQrFjFnNmjlIUCkWbt4s0cbHb9n9ww9zKxZNiuTucPxp3dcs4EKF4/riU1crjAFQVbxGhw5+dl5eUxZ06TJQJgGREhn5ztK8vF+KDAz/AOiDaOldYvrZ/Xmw2hlVY4LESi1wIhwSd8nVGjvzHIStBRqAvSQCoqAIVGshMkZ3wGbQoP+OdHOb+Lws2wqvXr1QolavXyerFXDrloxWwJbtV66knfD2njO3WbNuUgiIsrISEhI+379378yt3L1l8VfEqvpd4Dzwku54KdAfmAbkAqt0x7WIXIiZwG/ASv2JRC+ZVxc6OAzqLkshtrNnD6UmJKxbkp6uMdSlNBgYirB7DIkNK/dgFRFVU8ORCH1r7IjtMHiuXK2xDyyHTsPg3E5zz8Y4rhVDXCgcidYdsAkIeGeYTFZAYWF2SUzMmvWPPVbbVqmUyQq4UqZShW4rLc3J8vaeO6tpU7msgJyc00m9e8+a26qVkzRFkxISvtq/Z8+0DVRe8+B7Km8UdQaYV8nxC8DCigfu9JIZIlEvmUNpsbEff3zq1KECA0NnILpx9gUMjbVSCVY7o2pqMBKhBRIjIeJ/OgEhRThQtMaODQG34SKJUgYKdQLilwj9kYCAtwfLZgVER4d+amNTflOpDJoolxWwafu1awWZCsXMmU2bdpJiJa+3Ai5dUkd5eU2c3aqViwR1WoSASEzcemj37okbqb5o0gNjb29fLyDgnTmOjkOk6iUTFrZ+6alTh64YGDoWmIWIyuSYfmZ/TqwiompqKBJxuzX2FzA4WB4BceESRIRAp2ehV4DYOm3pFBZD1AY4fLu8r7//a4NkswLi4jZsrVXr+jUvr5nT5LQCxs+UpX+CsAK27jtz5lCYUjlnTrt2nlJss9Zqy0hJ+TZi585J66i+aNIDY29vX8/HZ1Gwk9NwhSyl4M+fj8yMiFiyOCNjR7aBoSMRVSgHIXJErDwgVhFRNTUQidC3xk7eBH6zoZNErbHDQ6DLAHALlMP1KroBqi1wJEx/pE+f1wO9vWdMkMkK0Gg2bLt+PT/bw2NqkJ1dR+msAG/vWXNkswLS0vb85O//6rx27RRS7JLSastITt4RvWPHmFVUXzTpYbB1c3t/RvfuI7zlERDRWWr1J8tOn95jSBQ8i8j3eAbIMPnE/uRYRUTVPGQkQgukqHWtsedAZ4laY6uXw5MB4DFYEgFRCjGb4NDt/gC+vvP8ZbQC8vMvZ3p5Bc2Q0Qrw9p4snRWgVn+xx9d3QXD79t5SJDlrtVpOnNiljoycvwrTbUO0HT780xmurqP6yNRLJjY2dHF8/FeZBoYOANYCTwGnDIy1YgRWEVE1DxGJ0AInNBC1EQJnQpfucuxo+DUHokOgdV9wGyqHgCguBdUmOHxAf6Rfv4Xe3t4zp8hjBVy7pVav2375cvrJ3r0nSWcFZGREhHt7B89r08ZdKisgLm7Lt4MGvT3X3r5fJ3PPyRiEgNgZHx4+e5kRNQ8elNrPPffpNBeX0X1l6yWTlLTtnIGhvohqlMOBFNPP7K+BVURUzQNGIvStsSM2Qp/ZcrXGDl8J7fzAY4g8AiLyU/j5doOh3r2DPT08gqSyAjSaz3bm5Z1L8vWdMad5c0fprABf3zlzZOqfcPz4N1G//PLhtsDA/8zq3DlAihwlrVZLaure4wcOLDamaNKDUuvZZ9e/4ur6Qn9ZSsHn5p7IT0jYukKt3nLawNBeiIZaowC16Wf218EqIqrmAcpea4HU5AqtsSUSEEeWQ3sPcB8KdSSYdHEZxH0BYT/pjygUC3opFFNnNm3aUQorQAiILbt//VUV7es7bXbLls7StFKOj996KDl5915f39fmy2QFpKTs1MTGhmx95pklc7p0GSSFxSiKJv2UEhX17uL8/NjfTHSZWkOHrnrF1fWlIbVry1EKPi/vVEFs7KoVkZHLDUUVnIEfgQnAUdPP7K+FVURUzX2Wvda3xj78iXytsWNXwd88wHOEHAKipAxU22D/HnQd9jw9pzr5+r4ySyYrIClp60/nzwsroHVreVopp6R8G6HRbPk2ICB4jr19H2kExIkTO+N/+eXf6/z83g5ycHhamqJJ5879nBYXF7LMiKJJD4rN4MErx7i7TxgiSyn4/Pz0344d+3y1SrU+0cDQrsBeYDKwz/Qz++shQ8zaXNyHnaEFzpwSrbEDJsnVGjs2BJq4gudIsJVg0iXlELsNDuxGJyA8PGY4+vhMCZbNCkhN/X6fv//bC2SzAuLi/rstMHBZsL29PFbAqVN7j4eFLftk4MCQoCefHOYii4BITz98TqMJXWxEzYMHxebpp5e96OY2fqQsbeXz89OLoqNXrYmJWakxMLQDQji8ihASVkyANRJRNfeRWJl+CqJWgsck6OYuh4C4UgDhq+Dx7qAcCfUkmHTJLVBvv1tAjO3i4zMxuGVLJ2msgISEL37WWwGytVJWqVZ87u8vmxXww4no6NdX9e07e/KTTw5xk0VAZGaGZ4SFrfs4KWlnrokuYfP004ufVygmjZClFPy1a5eK4+M3hMbErIw1MLQtcBjRifRr08/sr4tVRFSNkZGItFSIWAlu46CnJAIi/zfRmKplZ/AZBXUleB/c0oL6a/jpG3QCwsXlX50UihkLWrWSywpQqzd9J6EVcOzQoYUbevd+c7psVoBavXiVQvHWK05OI6UpmnTxYtTF5OQNS4womvSg2AwY8MEID49Jo21tG0vxSykszC5WqUJDf/llUYSBoS2AA8AyYJPpZ/bXxmpnVI0RkYgzaRC1HNxfBielHALiSiFErQa7juA5BmyluIFAbAwU5nNbQLzYzsdn+jyZrICkpK+j4uI2fDFgwLvzZbMCDh36eP2AAUumd+smlxUQGfnxcienSWN69JCpaFJMllq9dnF8/FcXTXWNAQPeHaxUThstSy+ZoqLs0tjY0C3h4R+GGxjaBGFhbAVCTT8zK1YRUTUGIhEXsqHgEHhI1ho7ei00aQceL0I9CW4g17WQdwYKb3vC3bqNauPuPuG11q17tS8rM1W9nZrkFqdPf69Wq1d97uf3ZnDHjv4Ocswb0tMPpkRHv74qIODfkx0cnu5VXm6qAok1y6VLsRkHDixd6uHxwqiePYf7a7XllJWZpL1EjZKbezw3JeXTpUYUTXpgAgLeGezpOW28LL1kiouvlKpUGzYdOfLeQQNDGyJyH/YAi0w/MytgFRHVYSASERsBz0+DHhIJiNi10KgZKMZAfQkERKkW4nfBvm8rHLQpL7/WND19/zfp6furfKUlYWNzS5uW9qWmfn3nNhcuRP1w4ULUD+aek7GcPx+bVFra9PHs7KQj2dlJR8w9H2O5cOH86dLSkzZXr7rEHTnyQZy552MsJSWZ5+Livr5gqvP37btwoIfH+LF16z5eRwYhe/361fJjxzZuCwv7j6EPe32EgNAgWp9beURYRUTVGIhEDB0Grv5yNKa6VgyqdVDnCVCMg/oSrEBuakGzC77fCtwCcHQc3szF5Z8zGzZsJkUhqVu3IC3tp/SkpK/+7+mnF81u3LiNFLtHAM6eDcsOD//os+ee2zjOzq6jFD0lAC5cUF2Njv5oY0DAR8+2aDG+m7nnYyzZ2cnFsbEhG/LzL5nMwgDqX79eWKhSfbLWhNeoUYqLLxeq1ZsTDAyzRRSSSgeCTT8rKxWxioiqMRCJqFdXDgFxtQRiQsG2CSjHQ0NJBIT6e/h+GzoB0aGDn52X15QFDg6DpEjq0+0KSPn114PfDh68ZrJMnRAzMiLOnT2b8PXzz299yclpdIAs5Y9zchJyfvstdUP//ouG9eo1fqg8NQ/SClJSvl9uSgHRr9+rfg4Ozzyr1T5m+R8eoLj4ik1CwrY9J09+F29gaC3gCyAfmIQuZ8rKo0OOu4N50CIeYLUAyzdTK6WwGNShQD3wGiuHgCgDNPvg+8/Q/d5btOjZqE+fBXNlERAAZ88eTD127L1V3t7/eaV7d3kExMWLURejopYv9/IaMaJnz39KIyByc1Nyo6NXhjRv7qbs1WusNAKioCC9MC5uy2qVarWhokkPTO/eC73d3adOs7OzlyKCV1paqI2L27D95MnvDFWXfAzRC6M28Aq6BYeVR4scdwjzobc0JBQR+tbY2jrgNwEaSVAMvwzQ7Ic9G6kgIAYN+nCBXLsCDqUdPvzeck/PWS916/acVLsCYmJClnXtOnCQi8uLgbL0T7h8+US+RrNhZatWPd3d3CaMtLVtJMUb5erVzMLIyLVrYmNDDBVNemCUylkeCsWEIHkERLFWo9m8a9+++dupPqpgA3yC2M75LOLmYcUMWEVE9egtDcvPQLqLwlKI3QTaW+A9GRpJ0A67HEjYD7vX6/6Cvb19PS+vd+Z06za0lywCIiMj4tyBA8tW+PhM+aeT06g+sqzkc3ISchITQ5fb2wf0d3V9eags/RPy89MKoqLWrrSza+fo5jbxeZmKJqnV69fHxobEmOoavr5TnRSKoOnNmj0pRS+ZmzdLtHFxG7/fty/4to1ZDYsRJa2HIN39+c+FHHc48/GAnTzNSXEpxG0Cm5ugnAKNZREQB+G72xEIe3v7ej4+i4JlsgLOn4/MDAtbHCKbFZCdnZAbE7MypFUrD6VMuQQFBemFKtWmNU2atOvs6TlljCw1DwoLs0s0mvXrjhz5yGTNoBSKST3d3YPmNm/eTYpkXtFW/vP9+/bN+QzDkd8PAT9gIHDd1HOzUj1y3OXMxwN08jQn+tbYt4rBOwgaS7CcLAeOHYKd6xGRHwBbN7f3Z3TvLlOBoOismJjlK5ycBj8lmxUQH//pypYtnTzc3MaPtLWVo3+C3gpo0KBRK0/PiWPq139CijdKUVF2aUzM2i3h4R+YbLusu/sEB6VyxuxWrZylEBCiK+y2g3v2TNuEYQERjIg+BABFJp+cFYNIUO7YrNxnJ09zUlwG6m1QWgjKadBEguWkFjgRDjvXcUdA1B45cut0V9dRfWxs5PjVCytgnaRWwIqVjRq1dnR3nzhSNiugbl3bx5XK6WMbNmwhhdAvLr5SGh296tPw8A8OmOoaCsWYzgrF1AWtWrm0MtU1ahJdM7rDe/ZMqbiIqIoZwBTgKaDA5JOzYhRy3KXNhyR2hr419o088J0BTRuae0aG0QJJEbB9NaAvg1h7+PAtQU5O/+wnoxXg5jZ+aJ06Emg3RCtlYQV07CKsgCZSrOQLC7NLVKrQUK3WxtbHZ9aEhg1bShHyKSm5Unbs2LovwsM/+slU13ByGtXe3X3WvHbtPKXpJXP8+I7IXbvGh2JYQIwFZgH9gBxTz82K8VgjEdVzH508zYW+NXbRJfAKAjsJsrC1QGIkbF/FHQFR69ln17/i4jJKWitAllbKV69mFkZFrV1bp06D1grFVOmsgLKy6yiVQRMbN24tQb4PlJRcLVepQr/cv//NPZiojoGr6z/a+vrOerVdO6UUhcGEgPguTq1+s+I9oCpGAu8Ag4AsU8/Nyv0hx3LPfFh4JELfGrvoEvjOBLvHzT0jw2iB5DhQreJOVnWtoUNXveLq+tIQWayAvLxTBdHRK1Y2b+7g6Ok5eaStrTxWgEYTuq5hw0Z2SmXQ2AYNmlnw+/sO+v4JWm3R7z4+c6Y3adJWipDPjRvXbqnVG7f//PNbOzGRgOjU6dlWCsWM+e3b+0jTVv7kyd2aiIjgkKysLEOJkX8HVgIDgAyTT87KfSPFDcSMWHAkouSWaI19NRV85sATEmzj0gIpcRCzFDL0Nw+bwYNXjnF3nzBEJitAo/l0TZMmHbu4uU0cI08r5awSlSo0tFatunU9PaeNa9Cgha2552QMeivgxo38fG/v2bOaNu0ogV2nL5q0cceBAwt3YCIB4eg4vJmPz8xXO3b072yK89c0Wq2W06f3JB8+/N6ynJysYgPDBwBrEDkQp0w/OysPgtXOqB4LjUSUPAaab+4IiOZNzT0jw2iBFDX8ElJRQDz99LIXZbMCoqNXrZHRClCrN24pK7uOQjFFOivgt9/yz3t5Bc20s+skQbRNXzTps1379y/4GhNVUuzQwc9OqZyysHNnedrKp6buPf7TTx8tzslJ+t3AcF9ENcrhQIrpZ2eQ9sCrCEFjpQJWEVE9FhqJOLYPCo6D10x5BMQJDfyyDG6vPmyefnrx8wrFpBEy7QrQaELX1a9v18zbO2icbFbAzZtXf/fxmTm1ceM2UoR89FZAQcGFNC+vyTNlKZpUWlpCQsJnP/344yxjiiY9EA4Oysf79n1jYZcugxxNcf6aRqvVcubM/tOJieuX5ufH/mZguBuiodYoQG362RlFJ+Bj4DlzT8TSkOImaEYsLBJRpoWb16HZVVDMhVYS7APXAqeS4EAI5N0WEAMGfDDC3X3CaBmtAIViijTbCmW3AvLyzib37j1jvkxFk5KStu7//vvpxtQ8eCBatOjZyMvr9flduz7VQ5ZKrufO/ZymUi1ddOrUIUNbM52BH4DxgMmKcVmpOayRiOqxoEhEqRbid0FkIjiMlkdApCbDD0sg73ZhmAED3h2sVE4bLZsVYGOjraVQTJkkmxVQUJB9SUYrICcnPq537+lSFU1KTPzq4O7dU29XXq1p2rRp02DgwA/mOzoOc5VFQGRkhJ/TaEIXnzp16IqBoV2BvcBkYL/pZ2alJrCgVbZFYiGRiJtaiN8N5+PAqTvUlkD8aYHTxyFiCeTfDl8GBLwz2NNz2vh69Z6wEHFWPXoroLi4oNjPLzioceM2UmwfqWgF+PnNDZbNCsjOVkV4ewfPb9XKWYqaB+XlpSQnfx2xa9fEDRiuefBA2Nvb11MqPw52dBzmJouAyMwMz4iIWLb49Ok9uQaGdgD2AQsRQqIyWgJ9ATtErYgzVJ0vqLX2iAAAIABJREFUUQ+RV2EPXEMkZt47tgngArQDGgN5QCYQz/0nwj6BSARtBxQCUdXMrTLa6OZ8FdHW/F6aAM2AYiD7PudmUizgAWnRWEDZ65taUO+F85HgOw9ObjPvfIxBC5w5BfFLIf2a/mhAwNuBslkBanXoths38vN797ZaAaZG9E/Yuv/MmUP7/P0XLmzb1vNv5p6TMYiaB99EffvtWGNqHjwQDg4Odd3dPwzu2XOElyyl4C9ciLmUnLxhyenTewzVdmgLHAb+C2yvYswiRMnre+8dacBghKDQ80/EttB7BegJRNEqNeKhfRHRDfRekoARwFkD89YzF3gPuPf+8D9Ei3Jj+nv0Br4BLiByQipGbRoAEYAj8DQWJiIkWNGaFTOXvS4Djh2AS7+A31z4mxSrMkg/BeqPIfm2/9m37+sBCsXkyTJZAXFx6764di0nS0YrIDs7WS2fFbDtYErKD3v79FkwX56iSeWcOLEnTq1+ayWm6yZp6+Ly5owePUZ4y1IKPitLk6VSrV8cG/vlRQNDWwAHgGXA5irGTEZEKMIRq/2uiN4Zy4C/6c6h5x/A14hnWzDgDwQCy4HOwJMVxsYBbyNqUXgBwxAPfhfgK2P+nQgBsQwhTPwRwsUN+D9gNEIYGcMOYAViF8jn3C1uVgNOwGvAISPP98iQ4x1pPsxoZ5QhWmNf3A/e86Ht38QxSyctFaIXw6nbAkKpnO3n6Tl5UuPGbaUQEHorID///BlZrQAfn9nSWQFq9Wc7n3rqo3nt23t3MPecjEEUTdqlCQ+fZUzRpAel9ogRnwa5uIz2l6UUvOgl8/nShITPMgwMbYKwMD4HQqsZ9w/d1wkIuwFE5OEXRIRCvwOmLiICcQPoz912wmHEw1i/MykLUFZyrR+AnghR0YbqK2Q2B94HEhDVNPVRqByEgHACpgJvImwIQyzUXXcIMA9YCvwLEc34H0KsWBzWSET1mCmxshw4dhBO/AhewdCuzaOfw4NwJg0iF8Gp26G43r0XevfuPWeaTFaAWr3pm5yctOM+PjOCZbQCFIoZwbJZAWr1pi8GDfporr19X2lqHqSl/ZD0889rQrKyDBZNelBqP/fc5mnOzqMDatWSoi4YeXkpudHRoSFRUasNWQENEbkPu4HFBsbq8xMGV3ZJ7oT++yIiE3upPB/hXBXHmyFaiz+HeGDrr9eikrEVGYoQJev5o41Vhoga1EeICWO4ibBichERjHHAJ0AiMNHIczxy5JC25sMMkQh9a+xTe6HfPGgvRSlbOHsO1Ish9bL+iFI5y0OhmBBkZ2cvQT+PO1bAr78mafr0mT9PRitgwIDXF8hnBaz6vG/f9+fY2/s7mHtOxiCKJv14/McfP1iSnx9rqnbUtZ59du14Z+fRA2TqJaNWb1ip0WwwVF2yPuJBr0bkEhhiHcLG+ASxQg/XvXY/d+ct9NB9PWnklEchCkj1quLnhrJX9eJgCZXbFvok7Pu5j1wCxiD+bZ8ikiyHY1wkwyxYRUT1POJIRDmQfBRO7Qb/+dBBirAuZJ6DQx9Dxu0MbF/fqU4KRdB0WayAmzdLtHFxG7/PzVVHeHvPXmC1AkyL3gqIjX1nY58+H81xcBjUXZYdB+nph04nJoYaUzTpQak1ZMjqca6u44ba2kqxGYj8/LSC6Oh1K1Sq1ccNDLVF5AukI/IJjOE7hF0wF9HFc7zuD8CXuu9vInY3gNjhYIhZCOsjDyFkjiGSNK8gchNGGXEO/X/ON0BqNeOq+1llhAOnEaIokTsWjkViFRHV8wgjEVog5ShEfg1D5oG9FA8DyMiAI4sh43bGsFI5pYe7e9BcmayA+PitBzIzw3/291+4UK5WyretgPmyWQGHD7+3LjDwwxlduw6RpmhSevqhtJiYj40pmvSg2Dz11PIx7u5jh9naSlFYlIKC9EKVatMalWp1ooGhtYAvgMvAJO5vG+XPuj91EAWp+iESJ18EIhE5FXpbw5hI3JuI3AlvhKCpiLHJZ/rrhSPyOmqKxQgBkYZIIH0DkXthkVhzIqrnEUUitEBSBBz9GgbPBXspmunA+YuQuARO304+cnef4KBQyLUrID5exl0BZRw//p1aWAFvzJbNCti//99rAgL+E+ToOESiokkR5zSaz40pmvSg2AwevGS0p+cEibrCZhbFxq5dExm52FB56seArQghMYEHLwd+ExE1CAGCdMc8dF9jdV+f0V2nKhoi8h0u8EcBcT9E6b7+o9pRd1MbUefCjsrtklHAHMRuDSWic+k7iEiMRWIVEdXzCCIRWiA5CuK/gsHB0EmK1SRcuASajyH29hYuhWJMZ4ViqnRWwLFjn+0MCJg3Ry4rYLcmLu79DX36vD1bNisgPn7p6v7935rQo8ff3WSpeZCZGZkZEbFkcVLSNkNFkx4Um0GD/jvSzW3i87L0krl69UJJXNz6dZGRITEGhtog8hmaIfz++91m9hXgU8lx/XZNfbg/CRGVcESs3iv+Husi8in+DvyO2EHRkTt5FCCeh9MQCZPGcBBRe2II8BZ/FC6dEbsqKi6o+iLyHPIRQqIiPYGNCGEzCShA7PIoR9g2Fnl/soqI6jFxJEILnFBB/DZRB6KTFKtJuHRJbOOMu6A/4uLyYjt391nzJLUCpNsVcPjwe+t8fD6cLpsVEBb22nJHx/H/6tFjhFIWAXHhQswljeaTZUYUTXpQbAIC3hmmUEwZVa9eUyl+KYWF2SUxMWvWHznykTH9LRYjajs8x4PV0lBypwLkJkQuw37dec8CayuMHYfYlvkuIhfhf4gdIL8itkzqd4ktQdzbNbpz7UFEJlZifBJjOSIKkYXIq8jQXWsroELYEaMwnKAJ8Dgi98NW9xp9kb4YhPXSHJF7YXHbdKw5EdVjwkiEvjX20U9h4CzoIouAyIHTSyAhQ3/Eze2VNgrFpFdltAL69Xs/WDYr4MCBf6/p3/9d6ayAyMgVyz09Z4x2dh7jJ1PRpJiYT5YkJX1lsuS2gIC3ByuVQS/LUgq+qCi7NCZm7ZbIyMVhRgz/ELF9ciDGVW6sjJcQyZOBwMuI7ZTnEAmQ/+XuMtFnEMWeFiIiCn9HPJDjEdUw9+jGLUcsEoMRVkEBoujVfxFbSQMR5av1FCByMu7deXICcEVYEM/qXmeDiCZsRTz4K84vX3ceuLs8+ljgPELoxN1zjSWIqEYX4HmML4T1SJDjDmQ+Pka8eRb98UfPvwzuIx/stPrW2OGbIHAmdO1h3H9FGXB4CXQeAg49DA6vUfKuwfLXQFEP4m77iJ06PdsqMHDeax07+kuRxyGsgO80MTHvrPfzWzSna9dnpFnJnz378+m4uA9DnJ2nvdKjx0hpVvKZmZGZhw+/s9TFZfQIV9cXA2TZspidnZAbG7t6qVq95bSpruHv/9ogX9/giQ0btpTil1JcfKU0JmbFp2FhH/xoxPA3EA+9/oj7qKVSGzkq+VkkciwHzIcJIhH61tiRGyBwtvECwtwU/wbkQ9zt1cSTTw5r7ub20r9btOjRqbj4cjWvtRzOn49KOnz4vXW9e8+b3batZ4+SElPlyNUs2dnxaWFh/17u4jJ+rL29v7KkxJLvyXfIyzt9Sa1eGtK166BhXbs+FVBaWkhpaaHhF5qZa9fOX46NXb9MozGdgOjT5/VAb++gCbIICH1b+bCwD34yYvgMRFi+H5YtIMAqIB4KGZ5e5uSde75W4EEiEVogNQl+WgODpkN31/v7LzBXJCI3F44uA03FUF6tZs3atW7RopsUlSgBbGwe016+nPBrcbFNw/btnaWoXwFi3tnZ+bllZal12rb1esLc8zEWG5vHtIWFRVcuXoy+5egY2NLc8zEWG5vHtDdvXr965szRPFNdw8dnZt9evcZPbdq0vRT7OG/evF6emPj5toMH39yF4a2Z44B/IwTEryaemhUzY41EVE8ZIqu3BtC3xv7xE3gmCBzvU0CYi7wrELeiooCwt+/XtHfv2fOeeKKLJOW4b5GaejAjOXl5aEDAypmtWjlJkQMBcO5ceE5Y2NJVgwa9MbZdO6WruedjLBcuxF2NjV2zqlev8c8NH76+t7nnYyy5uSd+j4//8pMzZw6aTEAA9c6ejbpYUHDiPya8Ro1y44b2xrlzh89jWEA8D/wHUd/AKiD+AlhFRPXcBGqgZLMWSE2B8NUweCp06yWHgMjNB1UIRN2uN9+iRc9Gvr7Bc7t1G/b/7Z15XJTV/sffhKJZpuRWrqjkCojAsLmSpKbpLbst2qK5a2ru3brVLaubK+YWaqamdX+t1yXLJRVFkW0GEJdQEsEFxQVETRTR+f1xhsswDsyI8whHz/v1mhf4zJnnOYwz5/me7/L5esmSS5CW9nvqsWPrl3XsOHOYh8cL0nRCPH485uSJE1uXPvnklL95eb3SrVIlOdQLz549cObYsR3L2rV7tZOPz6C+spQs5uSkXcrIiF56+PAvtmSby0xQ0AT/1q3/9mrlyi5SVMZdu3bJKSHhm00pKas3YNuA+Bsi2bEbolJBcR8gx2pafjgoJyItBWIWQvBIaNleDgPibA7s+Rzi/idjW79+/Wpdu34yuVWrPpJVBUyf6+ExZECbNi9JY0BkZhoyo6LCwpo2ffIpb+83esljQPyRExOzYGHdup4efn7Dnq9SRQ4DIjf3+JXExGXhMTHzYm2PLhs63RTvgIChb9aq1aKmVtdwJKKXzPJ1ycmrf8W2AREKLAR6ICSbFfcJcqyo5YcDdCJSD8OeeeD9BrSVxIA4nwO75oH+fzK2bm5uVQMCpk9o1apPe1kMiIyMXRkREdPCvL1fecHT82VpWimfPp10Jj7+i88bNw4M9vEZ0rtyZTkMiOzs1JyoqEXza9d2c/f1Hda/SpXqUuy2hWjSovDIyBlRWl3Dz2+kR3Dw4HHyGBB5JCev2vjbb2NXYVtdMhgh+9wX610yFfcwcqyq5ccdeiKOHIY9c8FnIHj4y2FAZF8Ew0LQJxYecXd3r+Lj8+mEtm37+ctSVnj8eMxJvT4szMvrhb6envKUFYpWymFhdet663x8hvWrXLmaDB8acnLSLkVHLwqvWfOx+n5+w/vLIpp0+fLpa3r9sq8iI2dEanUNX98xrYKCRkyoXbuVNFLw+/Z9u2ndulHLEIJKpeEP/IxoYW3QfHKKCocyIkrnDjwRaWkQPw98X4O2gXIYEDmXYPdCiDHXwXfx8npvTJs2/aQLBTRv/tRTnp6vPSWPASFrKED0T3jwQddaOt2IQTKJJsXFhX+1c+e037W6hq/vwOaBgUMn1K3rUVuraziSGzfySUr6ZuvatcPsMSA8ESqLAwB7lCsV9yBSuBvLkTJ6IjKOwsY50OolaB0shwFx4RLsWQgx5jHhSv36rRjt5dVfulBAo0ZBHby9B/WWqZVyVNSi+a6u8oUC4uK+XOLi8vBDAQGjBj30UB0pDIgrV84XxMUtWx0RMW2zVtfw9h7kptONmfLYY+0kkoL/adfatUOWUFxN0RpPABuAkYA9ypWKexQpFqpypAyeiPR02DIXAl8Ez86lN5OrKFy4AnGLIcq8kU6lZ59dNtLTs3+Is3OFk2u3iggFLAqrXbutTqcb+px8oYAGEoYCFn8FNyrpdMOHyyOadOGGwbB0dUTE+79odQ0vr34NAwJGTm7QwO9xra7hSIzGApKTv9vz00+vLEDISpdGY0S/iakIQ0JxH6OMiNK5TU9ERgZsnQO+z4F3FzkMiNwrEBMOO3abHXTu23fRG56eA6QJBZw7dzA7Pn7x/Dp1mnr6+Q2TrpWyCAUMlS4UcOPGtTx//zHDqldvULW852QPeXm5N/X6L7/fsuXdddiuOCgTrVu/+rhON/7thg0DGmlxfkdjNBpJSVkfr9e/Pw/bDbIaANsRPTG+13xyigqPHD7q8uM2PBHHTkBsGHj3A68QOQyIS1cgPhwizZPKnHv3XjCoXbtBz8gVClgw/9FHG7f08xv1skyhgPh4eUMB+flXcwMCxoytUaOBFKqL165dvpmQsPz7LVum/oBGBkTz5t3rBgUNmerm1qlCtm22pLCXzM6d48IyMzNtNciqg2hSNQf4SvvZKWRAGRGlY6cn4sQJ2B0GT/QF7xA53ta/8mDPUthpbkA49ew5p7+Pz8A+Li5S3BfIyUm7FBMT/kWNGo0byNRKuSgUcLOSTjdKolDA+YK4uPDV+flZmYGBE8fVrOnmADE27cnPv2JMTPxy7aZNEzUzIFq1eq5WYOCot5s27SpNM7rU1F+Tt25dGHb2bKat9tc1gU2IUs5w7WenkAUpdmzliB1GxIlM2DkXmodC+25yGBCXr0H0cthpnhDl1L37Zy/KGAqoWrV6HdlCAXv2yBkKMBiWfZ+bm5Oh040ZV7NmUyn6j1y/nmdMTFy+7tdfJ36Dbc2DMtG4cUdXf/8RU5o1C5VCUt1kQByIivpw9tmzOy7bGP4IIgdiHTBT+9kpZEIZEaVjI5yRmQX6udAiBHx7SWJA5EPcV7B9i9lBp+7d//28TjfyJblCAUsWi1DAmwNlCwXcvHk1199/zCjZQgHnz6ceDAx8Y2ytWi2lMCAKCvJISlq1acOGsauwXbJYJtzdAx7p0uXtqe7u3VvLIsR25Mi2w0lJi2elpRlybQx9EFgP7AGmaT8zhWzIcNcrT0rxRJy6AMdmw2NdoP0zcryVV/IhegVEmJe1OYWEfNhHplDApUun82JiFi5xdn6gslxVAXKHArKyDiV36DBuYr16HtKIJiUl/Wfz+vUjv0QjA6JOnbYPBwS8M+mJJ3q3kcWASEvblhobO316Sso2Wy26XYCfECqUE7SfmUJGpNh1liOleCKitkGdIPDtLYcBcbkA9Ksh4jfzoyEhH/QKCBj9ukyhgOjo8BVOTjeuyxsKGDtWtlDAyZP6Pf7+Q9+qV8+rTnnPyR5u3Mhn795vt61bN1QzA8LNza1qSMiH41u2fMZbFgMiPX330YiIJbNTUradtzHUGfgGOAeM1X5mCllRRkTplOKJePpJ8H8OKkuweuSZDIhNxeriu3Z9L1TGUICzs+yhADn6JxSGAtLTd0cGBk6Y1LChn0SiST9GrVkzeDG2RZPKhJubW9WgoBkTPDye08kiBX/sWFTG7t2zZqan/3jaxtAHgFUIQ2IIGuWRKO4NlBFROqV4Ih5ylceAiF0NW4rVxXfq9G43f/+Rw2QMBfj6jhzt6ipfKCAwcNx42UIBqanrNwYHjx8vk2jSvn0/Rv/006vzsC2aVFZc2rf/eEzr1v0C5TEgojP1+i/mHDq0PtPGUCdE9UUthJx1geaTU0iNMiJKx0GtwMuLvBsQ/62lAdGx46SOAQGjh6pQgLaYhwICA4dLFgpYtU2v/2Z9cPCUCY0aBUqjeXDw4Fp9VNTk+dgWTSorLs89t2JMu3Yvd5Kpl0xsbPjMxMT/ZNgxfBbQHHgW7d5DxT2EMiJKxwGtwMuLvJug/x42rcHMgOjadWqgv/9YiUIBuTcTEpb9cO5c2h8dOgyTNhRQv76PNKGAAwd+3h0fv/zn7t0/mOjm1rVpec/JHoQBsSYxMvKtOZmZNjUPykqlZ59dMcrLq38X2XrJJCevPmrH8H8j2no/C9gSnlIoAGVE2EJST8S1mxD/A2wsJqzTocMEP1/f0aNdXZtIEwowGFauycpK3RscPGa8TK2UZQ0F7N//w54dOz5d3a3bv8Y1axbSvLznZA9Go5HDhzfs37JlZpiGBoRz375LBrdr99KTskjBnzlzMDspadXnev3yQ3YM/yfwNNAbsKUboVD8D2VElI6EnohCA2LTd5gZEDrdFG+dbuTYmjWbSBUKOHUqLjowcPhbdet6StNKOTFRzlDAgQNrDLGxYauefnrW+ObNu7cq7znZg9Fo5M8/Nx/au3fJ7Ozs2IsaXcb5mWfmD27X7tXelSrJIQV/9mxKTmzs/M+jouYesGP4WOAlIBSwVfapUBRDwl32XUUyT0S+EfRr4bfvMTMg/PxGegQHDx4nYyigY8fJU2QLBRgMy3/u2fPTSZKFAhJ27HhncWho2Fh3957SiCYdPbo1NS5u9gw7NA/KilOvXvMG+PgM6V25shQRQLKz0y4mJHy9IC5uyV47hg8CxgBdAVtlnwrFLUh0gywXCpDGE5FvBMNa+HU1ZiVZvr5jWgUFjZggYyigc+cPpsgWCoiP//fqbt3mTHBzkycUkJKyYX9ExJzwp54KG92iRR8vWQyItLTtRw2G8Jl2aB6UFaeePee80r79G8/L0lY+OzvtcnT0/IUxMfMMdgz/O/AvIAQ4pe3MFPcqyogonetI8R5dN0LiOvjFwoAY2DwwcOiEunU9pAoF7Nu3fkNIyD+myNZKOS7u8687d5YrFJCa+uvB6Oh353fp8v7wFi16t5fFgMjIiEyPiFg8PT19zRmNLuHUs+fMv+t0w/rJ00vm5JXExKXhMTHzYu0Y/jfgc6AbkK7pxBT3NCononQkCGdcN0LiL7CuWG8Ab+9BbjrdmCmPPdZOulBASMiE8TK1Uj54cE3Ctm1Tl3bo8N6bsoUC9PqZ83W69wd7eDwvjWjSiRN7Tuzbt3SWHaJJZcUpNPSTfr6+w/q7uFSX4k25dOn0lbi48PAdO2bstmP4U8BCoAdgT9KlQlEiFfwGWe5U8MTKAiBxM6xdiZkB4eXVr2FAwMjJKhSgLYWhgG3bpi/p0WO2dKGAqKjpcz08hg1o00Ye0SShefDlrKSkb09odY3Q0I96BQSM6i9LL5nLl09fi40NXx4Z+WmkHcODgZVAX0RPDIXijlCeiNKpwJ6IAiBpM6xdipkB0br1q4/rdOPfVqEAbSlspRwd/e78kJCpQ1u06CNVKGDLltmzvbwGveDl1b+zLJoHWVlJWXv3Lp2dlLQyXatrhIR82MvPb9QbsvSSuXLlfH5cXPhXO3dO+92O4QHAz8DLgD05EwqFTeRYPcqPCuqJuP4A7N0C/y1mQDRv3r1ucPDgKbKFAiIipi6VrSrgyJHfDyckTDOFAuTpn3DixJ4Tev3cuX5+/fq1bftiiCwGxNmzB85ER4eHGQxLj2h1jZCQD7oFBo4eWK2aHL1k8vLOF+j14asjIqZttj0aL4QBMQDYpe3MFPcTcqwg5ccNhLfGCbOSyfJnbxwkr8NM175Vq+dqBQaOelvGUEBo6Kw3W7aUKRSwLXX79mlzdbqxr8gUCjh2LCYzJiZsTtOmPZ7y9n6lmyyiSefOHczW65fOMxiWpmh1jS5d3g3R6YYPr1atjiRS8Bdu6PVLV//++/u/2B7NE8AGYAQQoe3MFPcbyoiwTWFIQ5NugLfHTcB4A5LXYuaBcHVtVqNFix6TXF3d6mdnp2ql2OdQzpxJObJ161sLfH3HDqtbt22LnJw/pZh3Tk565tat0+e2aPH0i/Xr+/nl5h6VYt4XL57KNhiWfO7q2rJro0bBT168eEKKeeflXbicmLhiQWxs+H6trtGx46SOfn7DpWorr9d/+f2WLe8W64lTAo2BzcAU4FfNJ6e475Bj61e+/AXUASwW3b+/Dj7P371p3AAO7ILv5lO8O6EL4IpcBmEB4n2tRoUMF5XITeAiYt4u5TyX28GImHdVQA73QxG5aCjD7O09SNe+/YBRNWu6SSFFaTRiTElZ/8umTZOLKdKWQANgJ/AZ8JXmk1Pclygjwja5QCPEImzG3TQijEDybvi+WHfCOnXaPhwa+vGUxx7zaHF35nHnHDmy41hMzGdhXbp8+nrDhn4+5T0fezlxIj4rKmrJHF/fAX3c3Z/sVN7zsZesrP0XEhJWz3Vz6+jfsuUzvR94QI6v/PnzaVcOHPh+kcGwIkHDy1QHHtHw/FpwFcjGtgFRB9gBLAAWazwnxX2MTLvX8qKckyuNwN498EMxA8LNza2qv/+H41u37ustS0w+PX33UYNhzYLOnT/q37btCx1lSerLykrKysjY/IWv74s9vL1f6+HiIov8cWpOaurGJY0b67x8fYf0q1q1hhQflNzck1cyMnau1NKA0OnGe+t0r4ypUqXGQ1pdw5Hk519h377vN0VGfvYNtg2ImogQxtcoA0KhMXKs4uVLOZZ5GoF98RA3DwsDIihoxoTWreWpCjh2LCojIuKjMH//AVJVBZw+nXQmJmZeWL16vgHt27/xjEz9E+Lili2sUaNJcz+/EQNkMSAuXTqdZzAsWbxz52eaVRDodMPaBgQMHlevnqcUUvAFBXkkJn5daEDcsDH8EWALsAaYqfnkFPc9SifCNuXkiTACB+Jh9xxIv2r2hEv79h+Pad1apqqA6MyYmLmfe3g838PL62WpqgISE1fMq1vXw1em/gkXLmRc2rNn0aLKlas9ptONHPDgg49K8UG5fPl0fkzMouURER/v1Ooa3t6DnggIGPOWLAaE6CXz7Zb160ctw7YBUQ1YD0QBH2s+OYUC5Ymwh3LwRBiBgwbYEQaZeWZPVHr++VVvenq+3MnJSY7/ulOnkrL27l08t0mTLt3atXv9GZlaKUdHfz6vdm33Vn5+w5+XqX+CwRC++KGHHnYNCBg9sFq1WlJ8UK5cOZ8fHT1/RWTkZ1u0uoav70vN/fzenFyvnlc9ra7hSEzN6LavWzdsKbarw1yAn4D9wATNJ6dQmFCeCNvcZSPCCKQYIGI2ZJpXhFR67rnloz08XuwqUyggNnZeWO3avgE+PkN6y5NLkHbRYFixsEaNJs3btx86QJ7+CZl5cXHh4U5OVar4+Y0aVK1aHSkqSPLyzhckJCz+JjLys41aXcPD4+VGfn6TJjZs6CdNL5n9+3+MWrv2jXBsGxDOwDfAWWCc5pNTKMxQRoRt7mI4wwik7oVNYRYGhHPfvksGq1CA9ly4kHEpOnr+QhlDAXr9l8sLCq6i040YWr36Y5JoHly4ERcX/u3mze+tRyNBNy+vfg2Dg8e93bChrqEW53c0RmMB+/b9GK3Xv2dZzm2NB4BVCENiCGZdfBWHhOe8AAAZoUlEQVSKu4EcW9ry5S55IozAof2wYTZkm9fFOz/zzPzB7dq92lu2UECtWk+0ljEU8OCDrrUCAkYPkikUEBe3dFlBwYW/goLGv1m9en0pXD7XrgnRpK1b31+DRgZE06Z96/n7vzWpUaMgaXrJ/PHHOkNU1OT5mZmZV20MdwLCgVqI1t4FpQ9XKByPFItkOXMXPBGFBsTumZBtrkfh1KvXvAE+PkN6y1QVUBgK8PEZIl0rZWfnKlV0uhEDH3pInv4JCQmLv7l2LTs7MPCtcTVrNpGkZPGSMT7+yx+3bJn6IxoZEK1aPVcrKGjs202adG6mxfkdjdFo5NCh9fu2b582Jysr0x5F0VlAc+AZzKq3FIq7iTIibKOxJ8II/JkCibMhLdfsCaeePee8ImMooGpVV+lCAbGx4cudnIzOOt3w4bKFAi5ezDoZHDx2nKtrUymEk/LzrxgNhpVrN2+e8h0aud8bN+7oGhAwYmqzZvL0kjl8eMP+jRs/m5mdnfyXHS/5N6Ktd3eEAJVCUS6onAjbaOyJSEsB/XTYl2N20Klnz5l/1+mG9ataVb5QQGCgfKGAq1dz82Tqn1AYCsjJOZ4aFDRmdK1aLWqU95zsIT8/j6SklRt/+23cajQyINzdAx7p2vWfU2VqK//nn5sP7d27ZHZ2duxF26/gPeBpoDcaSoIrFPYgxUJfzmjoiThyGKJmQkoxAyI09JN+KhSgPYWtlK9dy87u0EG+UMDZs0f2degwZnLt2i2l0DwoKMgjOXnV5l9+edMezYMyUadO24f9/d+d7O7eo40sXWGPHt2aGhc3e0ZKyrYc26MZC7wIhAD2jFcoNEV5ImyjkSfiz1TYNQNSzpsfDQ39qFdAwKj+KhSgLXl5F27Exy/+Jjc3K9Pff/RY2UIBp0/v03fo8KZUokl79/7n93XrRn6JRgZE/fq+1Z566pPJrVr1aSeLAZGeHnnUYAifmZKy7bzt0QwCxgA9AHvGKxSao4wI22jgiTh6FPQz4fA586MhIR/28vMb9UbVqo9KsZOXPRSQnX3sT5lCAdev5xkTEr785fTpuN1BQWMn1qvnKYXmwY0b+ezb993utWuH2iOaVCbc3Nyqduw4dWKrVn3ay2JAZGREpu/ePWdmcvKaM3YM/zvwL4QBcUrbmSkU9qOMCNs42BORcRR2z4DkYgtHSMgH3WQMBeTnXzjfocNbI2QKBej1y37IykrdHxQ0ZoJMoYDExFVb0tIit+p0YyY0aOD3eHnPyR6EaNIPe37+eaC55sEDwFbgAqJRlPk6NAnRvnoaQvugkFGIrpQzsWjD7u7uXsXff8YED49+0vSSOX485uS+fUtnHTq0PtOO4c8CnwM9gXRNJ6ZQ3CYqJ8I2DvREpKfDzplwqNhOokuXd0NkCwXo9UtX5+ZmZcpYFXDqVLKhU6fJk+QKBaz+/cCBXzeEhr47pWHDAElEk25w8OD6eL3+/WIN5IAwoJvp9+7AdGAq4iY523S8M3AUWAEEAV+YjncBMhE3VQAXL6/3xrRp0y9QFin4zExDZlzckplJSd+esGP4U4h23t2BQ9rOTKG4fZQnwjYFOMQTcewE7J0Fh4rtPAIC3uooUyggL0+EAi5dSj8iWyggPl6EAgIDx06SLRSg169cExIyaXyjRoGNy3tO9iBEk9YaIiPHhqWnp1uWILpb/LuF6WcTi+NNbByv1K/fqtFeXv07yyIFn5WVlJWUtHxOUtLKdDuGdwBWIjwRB7Wcl0JRVpQRYZvr3LEn4vhJMEyH2GI7jw4dpgZ26DB+lEyhgISEZT/k5KTu9/WVLxSQkSFCAXL1T/hhj16/7Jvu3T+b6ObWRRrNg9TUX5O3bl0YlplpVTTpfYrUFQsQJYsAPwKHTb9nIm6gABuAZNPvZ4EvgUrPPvvVKE/PF0OcnaVoEcLZswfOREeHh0VHf/GnHcMDEA21XgIM2s5MoSg7cpjv5csdhjNOnoTomZB03PxoQMA4X51uyGhXV7eH73B+dwURCvhKylBAYuLq39PStm3o1GmKRKGAAvbv/69er5//dZcuH493c+tsuXuvkAjRpN/2//bbJ7Oys2NL0jBIBOohQhrbgGzT8WzAC2gF/AkUii5dBvyANkAacKVv30WDPT37h8rUS0avXzrPYFiaYsdwL+BnYACwW9uZKRR3hjIibHMHiZUnMkE/C5LSzY8GB4/00OlGvylfKGB3VGDgPybLFApISvomIiFh5ZqePadPlisUsM4QH//x0k6dZox3d+/eWpaKg7S0bYf27g23RzQpG+F5sOQasNfK8eum4869ey8Y1K7doGdcXOToJZOdnZqzZ8+iefHxX+y3Y3gLhOdlBBCh7cwUijtHCyOiOtAeaIDYQURRtNN42PRcQ8QuI4qKX+9c6Imohgj/2KkQdyoLEudA3FHzowEBI9r4+IyeKFMoICnp680ZGZFbO3eeOlW2UEBi4srvu3f/bLJM/RNSU39N3r592uJu3T4d88QTT0sjmpSWti01Jma6vaJJZcGpR4+5A3x8BvaRpa18Tk7apbi4ZQvj479IsmN4Y2ATMBn4VduZKRSOwdFGxNPA/wHmO+z+wHcI1+WPgKvZc4OArx08h0KcEQlYeZStrlqHSGjqh5jnYtPxK0A6RByHytXB89ytLz19BqLngL5Y7NPHZ4i7TieXQFBi4urfjxzZ/qusoYCuXT+eIFsoYMuWdxY++eRHo1u16i2RaNLuowbD1/aKJpUFp169ZvVv336IRF1hMy7Hxi5aGBUVprdjeENgO/Ap8IO2M1MoHIcjv4yPABmIm/cHiESousA+RKlWBvAgQjAlCdG+NoWihClH8xjCeNgGhN7G63SI5jZ2vqb2BQj9A7zOin+fOQO75oChWOxTpxvQzMdnwtuy7ORFKOA/2+Pjv/756ac/miTTTv6PP/5riIn5cEnHjjPGy7STP3Jk66H4+E/DPD1HDW7T5vkAWTQPMjKiMnbtmjndTs2DsuDUvfu/n9fpRg2oWrWmFG/KhQvH8/T68EU7d362y47hdRAaGAso2qwoFFLgSE+EP1ATUfP9ucVznYDawFxgjgOv6WjeQszvNhaqczXhuyBIzoDQHaCfZ2lAeHm90tDHZ+wkWQwIsZP/MSoxcfkP3bt/NEUmA8LUSlnKUEBs7LS5bduOeKNNm37SGBDHj8ecNBi+mKOlARES8mEfnW7Ey7IYEJcunc6LiVm4JCpqpj0GRE2E4NZKlAGhkBB7jAgnRFb04wiFuSSKyrPMaWr6aS37uLTnCqkMuAGPAscoPQRRCWiHCI3kIBKurM3JXpyAZcDgsp/iYBM47A4Fh82Ptm8/uL5ON+xtyUIB8Xr9vFVdu348Qa5Wyr/t//339xaEhn48Wq7+CbuPRkV9PtfTc3B/D4+XpBJNion5YlZy8n8ytLpGSMgHvQICRr8uixT85cun86Ojw1dERc20JynyEWAL8F9glrYzUyi0wZZORHdE3fZ+4HcgHnFzH2Ix7ntgqen3lYDR9PgOWEVR3sMSs+fWmI5VAxYBF03XikHUiGciwgqWjDHNQW+akx5hdPzdbMyLFBkh3cyuaSzhnB9wRwZEIQUdEH8jAE2b9q3n6ztwioRVAV926jTtLVlaKQMcObI9JTFx9oInn3x/iFz9E6IyIiI+CmvT5rkXPDz6d5FFNOn06aQz8fFffJ6cvPqo7dFlo3Pnf3QPCHhTGil40Utm0Ypdu6ZttmN4NWA9Irn8E21nplBoR2nuwSeB3xC7/jkI2VkDoob5dYToS7xprAsimbIZwrL+CfHliERItT6MUKnbhkiujAJ2ITwI/wEGIrKSP0UYJAcQteK+iBBIIdMQ4ZJ9wLsI4yMOIZE7CKG5X5iXcQMRYslA3NijTI+diBr0QjogjBxH3XW8gcOtWj13qlOnt95p2rSrNDv5Q4fW79u27cNFnTt/MqZly16estyI09J+T42NnTbXw2P4G23bviDNTv748ZiT8fGzZru79+7Zvv1r3StVkkK0lLNnD56Njg6bYzCs0EyGuVOnd7sFBb057OGHH6/wb8rNmwVO6enbq27cOD4mIeHrXETotirCc2u08hIXhPfhECKEqlBIS0l3CSfgD6A5QrfePLv4MUQyZDVESVJh+eZYYD4wGgi3ON9wxI18AsXzJR5CfNEOIm6+5l+4SkBvYJ3p3x4Io2MHwkNi3k64LSLMspOihEh7EiudEGIuwSU8X1YyX375x+/btv27NAbE4cMb9m/Z8u780NCPR7Vq9TdpdvLp6buP7tr1r1menq+95On5qjQ7+cxMQ2Zk5Iw5TZt2CmnffsgzspQsnj37R05MzLy5cXFLrGk5OITg4Emdg4MnjKpRo0GFflP27fuuTmLiqkbHju2ue+3aJWuymeeAjQhv7FbTMWeEh/YvhPfz5l2ZrEKhESWtuO2BloiEH8vypNOIpjhTgb4USdOWhYdNc3gUoS9hLlBTQJEBAcL78QDwEcUNCBCeiwNAR4q8EPbQGccbEAD1z58/0hU4bmtgeWM0Gvnzz82HEhPDFoSEvDdUrlDAroyIiGlh3t6vSBcK2LVr3vzGjQODfXyG9K5cuULfK/9HdvafFxMSvlqgpQHRtevUQB+f0SMqsgFx9OiOGhs3Tmh76lRSbRtDawOvmR4RiA6lUxDr2FCUAaG4Byhp1fU0/SwpEfIPi3FlJQvhCeiIyIdYh8iJiEMYBeb4mH5OQ6jXWdIQqIIIq2Rbed4az9/mfO0mKWllzWbNOu/R6vyOIjf3ZHZMzIdfNGjQ89mHH368/smTcRXe8AG4fPn8XwkJ4V88+qh7F1fX5k+cPp0gxbyvXr2Un5z83bJKlZxa1KvnEZCVtdeeTo7lzvXrV28eOvTLqqiouZr1cejQYYKfr+/o0TVrNqmwUvDR0fMabNnytndBwbXbrRQJQYR/DyLKyO8kEVyhqDCUZEQUfomtCCkBIh8CRHbxnfI3RGbyy4iwx3DT8T9MvxdqxxcKWF0A8q2cZ7vpp71eCChqR+xwzp5NqbdkSfBErMdEKxI3AWN6+oGvoqIqcvXtLdw0Pb7T6xd/V96TuQ2MiM9oalLSqt/KezK3gRENb3zNmnVsUa+e58uXL2devHw505ZkdrkQHb3AIzn5/3zv4BTOiI3XYG4N+SoUUlKSEVH4Ja5bwvOFegcXHDCHbES1xxiEt8EfESbpishebo4o48w1jZ+IaMJjL6X55rWsmqiGCNFUdFnvQmR1rVrzSsmArPPWhLS03WlpabvfKe95lEIPRD8LRzAfsYbZU8WhUFRoSirxLIx56kp43s9inCPIQ1RPzEW4/tYidCAKLf8E08+n7TzfNdPPktr8VaPI46IVj2t8foXiXqEAYVg5+tEGkRx+8w7OUQlRneaopJtKwFeIxHKFQmpKMiKSTY9Abr1pN0eUZOYiPAV3QitgFNa/nIVzK/R2rEC4gT+kyLAw5zHgPbN/5wCXEO5Da1/Wq2i/G8y1PUShUGjIfmAYwuO5BhE2rXmb55gINHLwvBoA4x18ToXirlOaZT0SkWfwM0JHYS9CB2IQogZ6FMWrKcrCQwgL/x+IL/gh05xCECGN7QhtChA5ElMQmhWxiCTMRES4wgth7JyhuHDLNkQTrZ0IHYqaCI2JJYidyWkcvzgUYkSIWJmHCa5jvQvoFYo8J+bkcmuYoQBhHFmShzCMLLnIrXkiN7D+f3fVdB5LLqESwRRycgOxZv2MyL/qjlDH3YdoFrgekdRdEk44LoxhySiE+F1Fz5tSKEqkNCMiGiE4NR9hUBRyFPHh/9li/FXE7t/azfCa6TnLm9wRYAYwgOKiK7nAPIRnwfwLNhdRMfJPxILQz+z8u7i13HQ0ImTRFeG9uIEQqSokAe2MiJMUiXFVxnropBoi3FLN9CikJrfmclRC5FhY8iDCqLOkBrd6mpyxngxb1XQeSx6hZEGym1j3tFxDGEWWXOZWz48R63k1+Yg6ekv+wnpSrbXW07drsFkTBioPg03heG4gKrHWIJKpKyPyr9ogqr0uI1pv/xeRp2D+GfNHuzWiASJkHKfR+RUKzbFXEOBxoD5isb6dpMbboR6is+d5ROmnLR4yzekvhKhUada8i+n8Zym++A/kznQuSuNfiAXqXqYkA+Z2jt/P5yjNSAPrhkZJxsftHL8fzmHN4KyMMBY6cqvRfBNhTFQF9lDkpXiJWxsKOpLxiA2TQiElcqgKaUcNhFH0qIPPm4/Y5Rxx8HkV9y7WDIoHKCptNqfQe2VJdW71LjphPQfABeu5Qg8jbraWuFo5VpKH7SHT+S25HQ9boZfOktvxsBVibmg4mcba6htkNI09hxCN0opZCOE+hUIhKeMp3qDLEY+wu/oXKBQKazyIMH4KH48iPI9XsP69vWl6rgCRJxEObChhrKMeX2n1xysUiruDCyL/w1GLQirWd20KhaL8cEJ0Gr5M8e/rZYSnolDO/wWKe3/+jePWBmsPa12FFQqFZNRGdPa80wUhF9EMTKFQVBweAL5BJFheR+RL/IWo2BpK6aJzb6KtEfGmw/5KhUJRrjREZEmXdTHIoEiES6EAUaY8HaGtoigfnBFdNAsQnX4/QFRc2Nv7wgNtjQi16VAo7iEeRJS0XsP+ReAGsBrHJ2cq5Gc+4jPyZHlP5D6mM8KYs5a8aS8paGNAlKZPoVDcFzRExBCtla/dLXQ4vpFWM4QI1klKXgDOIXY4Xg6+tuLeQRkR9wZj0MaIGHM3/wiFoqJRBdAj3IPliRuQCfTS4NxOQHuEUM04RCXHS0AA9rtDFfcvyoi4N6iEkM92pAHxB9ZLaRUKqbiThjKjESVRn9gaqDHpCLXLcKAF1tUIy4oRIa2d6MBzKu4eTog8lTaIcNMxRFy8JP0ON4T7u7ZpbKLFWGfTudogOtw6I4TREhEu79tFhxA+qoEQTPsNOH4br29J6U3kLqFc5o6gAHgdiMQxTbPyEFLcqpOr4r7lAYSrv7vZMS/ge4pLxPZB7Mas7dqfBT62OOYNfMmtgjQDgB8sHp9ajElCfNEVChAhqUSs7wI3WYx9EFiOyG+xHLuLImGiiSWcz4j47FuG9UryRNQGtlg5xzWKy7/bYmcp8zEiescoHMfziBv/nXggrpvOo1Dc1wQgdk6WxsHXiHbelRCL+BmgQwnnaIpQdmxq8XprErOeiNyLF4BXENLYlpLSU4Cf7P4LFPc6cYgd5LuI6ogGCKP3W0QlTSFOwC8UGRd9EN1leyKM1ZsUeewGIfJgXkV0uPVA9HDRm17/T4s5WDMiXBA9VfKB94EmCHXGTgiX+U1EAzp76ErR96Lw8SJChdWI8BYqHEtnhKZEWQyIc0Do3Z+yQlHxGIJoVGNJNUS3zzDEQjnKxnl+QZTAgdid/QU8YeM1i4CN3CpbG0rZXMqKe49aiJtxdAnPNzH7vTdigY/EusesE7YlkpubzhFlcdyaETHUdOwdK+dpa3ruvzauVxrvmM6x8g7OoSidRogNjzXPlbXHDdP4huUxWYWiIjIVoe5mjRaIXZZll09r9ER4K6qYzvmrjfGDEDFqa+WUrRGWvkJRA2FEXECEyEpjBWKhvx0Xs4vpvM8iDOp3EDcKSyPWmhGxyTS2pJLgU4h8jLLQA+F90WO9K6vCsbRBKE4mY914SDY936a8JqhQVFRGU/JuaSJC+vkcIlGtNB4wjR2IcME+XcpYP0QYo10JzwchkiwVCoBlFF/Mv0R4AepajNtjGuNhxzldEaW/uVi/aRyyGG/NiMgo4bXmD2utw23RFPH9OEtxT4vi7vAgwiOlA9xRRpxCUSrPIMIWlnRBxAsbIUIaeoonm73IrR3rJiIWv8MUdxtPAvqbfq+DWHwHlDKnVxGJZgoFiM/SUERiZD7FkxfNw2wG0/HSpI9BhDoKFU23I5J4/Siq0riKfUbEGUR2/vBSHoPt/isF1RBJpAU4XjNFoVAoHE51xKLpbnasPsIV28f078IEsqVmYw4AMyzO5YpYVM2z0msiFsRCF/MCxOKvN3tYhj5+RiSqKRSWVEUkQn6C+NzmU1RFtBlxoy8pAbiQbqZxW7m1egjsNyIKkydLa119u3xjus5kB55ToVAoNGUF4uZeyGPcqgNfC/BF7NTqI8qbLF2tngj3rXnnvGcRnofCrPgmpvOYPzzNxrsjXMzm5aUKhTUKcyAKQ2f/Mv17to3XDTSNK6nror1GxBLTseH2T5lqCGPbmnTzWxSVmFozbhQKhaJC4gbkIHIR7OE1rCdbLgcWWhxbyK1hj5JwRuwOp9saqLhv8EWUYjazOO6CCEncpKgKqCFwxfSwLK1shRCAqoTwVBiBBIoLDjVElILamxPRFuEJuYgoyTTHGXgZkb9hzmKKvCDmdDGdax+OEUFSKBSKu8pziJLLKnaM7catngoXRPOqlhbHX8X+hlZ9ELs7FzvHK+59/BA33QKE0fA18B9E1YMRmGsx/iVEuOwm4oa8FmEs3DSNr4TIsdhu+vdZYAdFWhSppp/2GBEgDOrCJm9/IkqdNyGSka2JRJVkRBQ2hjqLqFqyfMTe+tYoFAqF47jT/g8piJ3aDTvGHkUsdubcANYgEivNSUbkSdjDYWCDnXNQ3B+cQSRMOiMy5r0R4YBDCEEoSyPiALAOkVHfBOGByEXc3McgpKiNCOOiOiJ85o4oIV2IKD1uhvjcmqthPo7wFPxmmlMhyQivnBNCBKs1ImTxB8Ig/tR0/ULqI8Il8RRPHvZAfK/SEflIlo9jpr9BoVAoNOH/AbJXTTF95YUiAAAAAElFTkSuQmCC "量化体积")

图 40 — 用于POSITION\_QUANTIZED语义的量化说明

offset存储在全局语义QUANTIZED\_VOLUME\_OFFSET中，scale存储在全局语义QUANTIZED\_VOLUME\_SCALE中。如果未定义这些全局语义，则无法使用POSITION\_QUANTIZED 。

可以使用以下公式将量化位置映射到局部空间：

POSITION = POSITION\_QUANTIZED \* QUANTIZED\_VOLUME\_SCALE / 65535.0 + QUANTIZED\_VOLUME\_OFFSET

应在应用任何其他转换之前解压缩压缩的属性。

#### [7.6.4.4](http://7.6.4.4/).实例缩放

可以使用SCALE和SCALE\_NON\_UNIFORM语义将缩放应用于实例。 SCALE沿所有轴应用统一比例，而SCALE\_NON\_UNIFORM独立地对x、y和z轴应用缩放。

#### [7.6.4.5](http://7.6.4.5/).例子

这些示例展示了如何为特征表生成 JSON 和二进制缓冲区。

##### [7.6.4.5](http://7.6.4.5/) .1.仅限职位

在这个最小的示例中，我们将四个实例放置在具有默认方向的单位长度正方形的角上：

```
var featureTableJSON = {     INSTANCES_LENGTH : 4 ,     POSITION : {         byteOffset : 0 } }; var featureTableBinary = new Buffer ( new Float32Array ([ 0.0 , 0.0 , 0.0 , 1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 , 1.0 , 0.0 , 1.0 ])。缓冲区); 
 
 
 
    


   
      
      
      
      

```

##### [7.6.4.5](http://7.6.4.5/) .2.量化位置和八进制编码法线

在此示例中，四个实例将以\[0.0, 1.0, 0.0]方向向上和\[ 1.0, 0.0, 0.0]方向以八进制编码格式放置，并且它们将放置在量化体积的角上在x和z方向上的范围从-250.0到250.0个单位：

    var featureTableJSON = {     INSTANCES_LENGTH ：4 ，    QUANTIZED_VOLUME_OFFSET ：[     - 250.0，0.0 ，- 250.0 ]         ，    QUANTIZED_VOLUME_SCALE ：[ 500.0，0.0，500.0 ] ，POSITION_QUANTIZED ：{ byteOffset ：0 }     ，    NORMAL_UP_OCT32P ：{ byteOffset ：24 } ，NORMAL_RIGHT_OCT32P         ：{ _ 
     
       
       
     
     
        
     
     
        
     
            字节偏移量：40 } }；var positionQuantizedBinary = new Buffer ( new Uint16Array ([ 0 , 0 , 0 , 65535 , 0 , 0 , 0 , 0 , 65535 , 65535 , 0 , 65535 ]).缓冲区); var normalUpOct32PBinary = new Buffer ( new Uint16Array ([ 32768 , 
        


       
          
          
          
          


       
         65535 , 32768 , 65535 , 32768 , 65535 , 32768 , 65535 ])。缓冲区）；var normalRightOct32PBinary = new Buffer ( new Uint16Array ([ 65535 , 32768 , 65535 , 32768 , 65535 , 32768 , 65535 , 32768 ]). buffer ); var featureTableBinary =缓冲区。连接（[
         
         
         


       
         
         
         
         


     positionQuantizedBinary , normalUpOct32PBinary , normalRightOct32PBinary ]);

### 7.6.5. 批处理表

包含按batchId组织的元数据，可用于声明式样式。有关详细信息，请参阅[批处理表参考。](https://portal.ogc.org/files/102132#tileformats-batchtable-batch-table)

### 7.6.6. glTF

实例化 3D 模型嵌入了包含模型几何和纹理信息的[glTF 2.0 。](https://github.com/KhronosGroup/glTF/tree/main/specification/2.0)

要实例化的 glTF 资产存储在 Feature Table 和 Batch Table 之后。它可能嵌入其所有几何、纹理和动画，或者它可能引用外部来源以获取部分或全部这些数据。

header.gltfFormat决定glTF字段的格式

*   当header.gltfFormat的值为0时，glTF 字段为 UTF-8 字符串，其中包含 glTF 或二进制 glTF 模型内容的 URI 。
*   当header.gltfFormat的值为1时，glTF 字段是包含[二进制 glTF 的](https://www.khronos.org/registry/glTF/specs/2.0/glTF-2.0.html#binary-gltf-layout)二进制 blob 。

当 glTF 字段包含 URI 时，则此 URI 可能指向[相对外部引用 (RFC3986)](https://tools.ietf.org/html/rfc3986#section-4.2)。当 URI 是相对的时，它的基础总是相对于引用的.i3dm文件。客户端实现需要支持相对外部引用。可选地，客户端实现可以支持其他方案（例如http\://）。所有 URI 都应有效且可解析。

#### [7.6.6.1](http://7.6.6.1/).坐标系

默认情况下，glTF 使用右手坐标系，其中*y*轴向上。为了与3D Tiles 的*z* -up 坐标系保持一致，glTF 应在运行时进行转换。有关详细信息，请参阅[glTF 转换。](https://portal.ogc.org/files/102132#core-gltf-transforms)

当在实例化 3D 模型的特征表中定义[RTC\_CENTER](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-rtc_center)[时，瓦片变换](https://portal.ogc.org/files/102132#core-tile-transforms)的计算如下：

1.  [glTF 节点层次结构转换](https://portal.ogc.org/files/102132#core-gltf-node-hierarchy)
2.  [glTF ](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[y](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[ -up 到](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[z](https://portal.ogc.org/files/102132#core-y-up-to-z-up)*[ -up 变换](https://portal.ogc.org/files/102132#core-y-up-to-z-up)
3.  每个实例的位置和比例，如实例化 3D 模型的特征表中所定义。
4.  RTC\_CENTER的变换，用于平移模型顶点
5.  [平铺变换](https://portal.ogc.org/files/102132#core-tile-transforms)

### 7.6.7. 文件扩展名和媒体类型

实例化 3D 模型图块使用.i3dm扩展名和application/octet-stream媒体类型。

显式文件扩展名是可选的。有效的实现可能会忽略它并通过其标头中的魔术字段来识别内容的格式。

## 7.7. 点云

警告

点云在 3D Tiles 1.1 中被弃用。请参阅[pnts迁移指南](https://portal.ogc.org/files/102132#tileformats-gltf-point-cloud-pnts)。

### 7.7.1. 概述

点*云*图块格式支持高效流式传输大量点云以实现 3D 可视化。每个点都由一个位置和用于定义其外观的可选属性（例如颜色和法线）以及用于定义特定于应用程序的元数据的可选属性定义。

使用 3D Tiles 术语，每个点都是一个*特征*。

点云图块是小端字节序的二进制 blob。

### 7.7.2. 布局

磁贴由标题部分组成，紧随其后的是正文部分。下图显示了点云布局（破折号表示可选字段）：

![](data\:image/png;base64,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)

图 41 — 点云的数据布局

#### [7.7.2.1](http://7.7.2.1/).填充

块的byteLength应与 8 字节边界对齐。包含的[Feature Table](https://portal.ogc.org/files/102132#tileformats-featuretable-padding)和[Batch Table](https://portal.ogc.org/files/102132#tileformats-batchtable-padding)应符合其各自的填充要求。

### 7.7.3. 标头

28 字节的标头包含以下字段：

表 16 — 点云的标题字段

| 字段名称                         | 数据类型          | 描述                                                        |
| :--------------------------- | :------------ | :-------------------------------------------------------- |
| 魔法                           | 4 字节 ANSI 字符串 | “点”。这可用于将内容标识为点云图块。                                       |
| 版本                           | uint32        | 点云格式的版本。目前是1。                                             |
| 字节长度                         | uint32        | 整个图块的长度，包括标头，以字节为单位。                                      |
| featureTableJSONByteLength   | uint32        | 特征表 JSON 部分的长度（以字节为单位）。                                   |
| featureTableBinaryByteLength | uint32        | 特征表二进制部分的长度（以字节为单位）。                                      |
| batchTableJSONByteLength     | uint32        | 批处理表 JSON 部分的长度（以字节为单位）。零表示没有批处理表。                        |
| batchTableBinaryByteLength   | uint32        | 批处理表二进制部分的长度（以字节为单位）。如果batchTableJSONByteLength为零，则这也将为零。 |

主体部分紧跟在标题部分之后，由Feature Table和Batch Table组成。

### 7.7.4. 特征表

包含定义渲染点的位置和方式的每图块和每点值。[功能表规范](https://portal.ogc.org/files/102132#tileformats-featuretable-feature-table)中提供了更多信息。

[完整的 JSON 模式可以在pnts.featureTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-pnts-featuretable)中找到 。

#### [7.7.4.1](http://7.7.4.1/).语义学

##### [7.7.4.1](http://7.7.4.1/) .1.点语义

这些语义映射到定义每个点的特征值数组。这些数组的长度对于所有语义都应该相同，并且等于点的数量。每个点语义的值应是对特征表二进制体的引用；它们不能嵌入到要素表 JSON 标头中。

如果一个语义依赖于另一个语义，则应定义该语义。如果为一个点同时定义了POSITION和POSITION\_QUANTIZED ，则将使用精度更高的POSITION 。如果为一个点定义了NORMAL和NORMAL\_OCT16P ，则将使用精度更高的NORMAL 。

表 17——点云实例的语义

| 语义的                 | 数据类型                    | 描述                                                       | 必需的                           |
| :------------------ | :---------------------- | :------------------------------------------------------- | :---------------------------- |
| 位置                  | float32\[3]             | 包含点位置的x、y和z笛卡尔坐标的 3 分量数字数组。                              | 是的，除非定义了POSITION\_QUANTIZED 。 |
| POSITION\_QUANTIZED | uint16\[3]              | 包含x、y和z的 3 分量数字数组，采用量化的笛卡尔坐标表示点的位置。                      | 是的，除非定义了POSITION 。            |
| RGBA                | uint8\[4]               | 包含点的RGBA颜色的 4 分量值数组。                                     | 不。                            |
| 红绿蓝                 | uint8\[3]               | 包含点的RGB颜色的 3 分量值数组。                                      | 不。                            |
| RGB565              | uint16                  | 一种有损压缩颜色格式，将RGB颜色打包为 16 位，为红色提供 5 位，为绿色提供 6 位，为蓝色提供 5 位。 | 不。                            |
| 普通的                 | float32\[3]             | 定义点法线的单位向量。                                              | 不。                            |
| 正常\_OCT16P          | uint8\[2]               | 一个八进制编码的单位向量，具有 16 位精度，用于定义点的法线。                         | 不。                            |
| 批号                  | uint8、uint16（默认）或uint32 | 可用于从批处理表中检索元数据的点的batchId 。                               | 不。                            |

##### [7.7.4.1](http://7.7.4.1/) .2.全局语义

这些语义定义了所有点的全局属性。

表 18——点云的全局语义

| 语义的                       | 数据类型        | 描述                             | 必需的                          |
| :------------------------ | :---------- | :----------------------------- | :--------------------------- |
| POINTS\_LENGTH            | uint32      | 要渲染的点数。点语义的每个数组值的长度应该等于这个。     | 是的。                          |
| RTC\_中心                   | float32\[3] | 当点位置相对于中心定义时，定义中心位置的 3 分量数字数组。 | 不。                           |
| QUANTIZED\_VOLUME\_OFFSET | float32\[3] | 定义量化体积偏移量的 3 分量数字数组。           | 不，除非定义了POSITION\_QUANTIZED 。 |
| QUANTIZED\_VOLUME\_SCALE  | float32\[3] | 定义量化体积尺度的 3 分量数字数组。            | 不，除非定义了POSITION\_QUANTIZED 。 |
| 常数\_RGBA                  | uint8\[4]   | 一个 4 分量值数组，为图块中的所有点定义常量RGBA颜色。 | 不。                           |
| BATCH\_LENGTH             | uint32      | 唯一BATCH\_ID值的数量。               | 否，除非定义了BATCH\_ID 。           |

[使用这些语义的例子可以在下面的例子部分](https://portal.ogc.org/files/102132#tileformats-pointcloud-examples)找到。

#### [7.7.4.2](http://7.7.4.2/).点位

POSITION定义在应用任何 tileset 变换之前点的位置。

##### [7.7.4.2](http://7.7.4.2/) .1.坐标参考系统 (CRS)

3D Tiles局部坐标系使用右手3轴（x，y，z）笛卡尔坐标系；也就是说，*x*和*y*的叉积产生*z*。3D Tiles 将*z*轴定义为局部笛卡尔坐标系（另请参阅[坐标参考系](https://portal.ogc.org/files/102132#core-coordinate-reference-system-crs)）。

##### [7.7.4.2](http://7.7.4.2/) .2.RTC\_中心

可以相对于中心定义位置以进行高精度渲染，请参阅[Precisions, Precisions](http://help.agi.com/AGIComponents/html/BlogPrecisionsPrecisions.htm)。如果已定义，RTC\_CENTER指定中心位置，所有点位置都被视为相对于此值。

##### [7.7.4.2](http://7.7.4.2/) .3.量化职位

如果未定义POSITION ，位置可能存储在POSITION\_QUANTIZED中，它定义了相对于量化体积的点位置。如果既未定义POSITION也未定义POSITION\_QUANTIZED，则不需要渲染图块。

量化体积由偏移和比例定义，以将量化位置映射到局部空间中的位置。下图显示了基于offset和scale的量化体积：

![量化体积](data\:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAhEAAAHUCAYAAACEU3qIAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAACAASURBVHic7N13eFRl3v/x96QRIARCkd6kCEoJSSAJhBpQARtgd+3KLlaaqM8+v6ftrmtDwF7RXSuWVbFSRKUESJEmbAAh9BJIQkgvk/n9cc+YIQQyk5mTc+7M93VduZg5M3PO15jMfHJXEEIIIfTQH2huwHlHAu+53R8DLALmGHCtRiXE7AKEEEJTXYHrgG7AHuAtoNjUihq3qcAnQAKQVo/XB6H+f8UBVcBHwCbnY3udx1zuBJ4GDpznfMnAOKAZ8D2wrB41NaRrgC+ct5sA9wARwFO+nDTIx6KEECJQXY76Q2wZMBh429xyPPICsBP4N/A5EGVuOR6LBaYDa304RwQwCUgBtgBfA72cjx0Gypy3WwI9gIHAO0Drc5zvBuBX4EdggfPcZgtG1d4TsLkdvxWY6Xb/SeAHYL4H52zhr+KEEMIo15pdgI86AwfNLsIDk4BQ1AfMW8Bj5pbjke7AOqAdsBwY6qfzfgJMc7v/hvPfYGCx8/YcYIgH5/oz8Bc/1VVfIUAWsAL4CfU9i3B73PXfZwM2Av8L/J1z90iEo8LbCc7T4CAtEUI0brHAN8DPwB9NrqU28cCrqL+QdTYR2GB2ER74FqgAwlB/Ye8wt5w6tQD+CdyB+jDzl5bAMCDdef9WoBXwB8CO+n/5d+exzXWcKxjVKrXej/XVhx1IBCagxnScAK6o5XnBwFbgv1EtMAnnOF8SqvVHWiKECFChqL76IagPjE1AjKkVna0P6q/jo2YX4oMkYDfQxexCPHQtcBLVVG/1cXHDgGOoD/t0IB/VFTPch3M2QXVBPOzFa/7iVsOUGo+9jDW7spZR3cUSgwqQrsDwJjAW1RrVvo7z5CANDkIEpJGcOdhrLqoJ02rC0TdEjEb9pdrH7EK8FAw8D/yn2YV4ydfujOaoD1NvZ100R40fiUKFEFAfrAtRXR/BPtRkhFtRXRaukNgX1Sp5sfN+U1TrSWfn/ZGoVofpqLEg7s4bIqyeQoUQ9dcROO52/xhwkUm1NEbXAbNQf+0dMbkWb9lRHzITzS6kAbUBlqJaDt738rVFzi+XYNTsjkzUz4DDHwX6yVXAbFRIqHQe21XjOSWoGSUurpAEKtR7TEKEEOZoippy9aHzfi9Uv28m3r/BnUtVjftBVL+pCN8NQ40tWOp27B7q7kM3S1vgWeAr5/0/o8fASndTgdJ6vrY7qhVhlvMLYBUwrx7naoqaAdGT6iB2CPU7baZ7UK0QyUCuF6/7njNDhRDCItqimgoH1Tj+ANX9qGGo/mlP/wLo5OHzElDTuFz+A2s2X+vcnaGTENS0xGecXyPNLUf42UDUoNl/AK85vx7y4XwjUVNBS1BrSYzztUAhhHeGopoRF6M+zL/kzLnbrilXsc7H/g7813nO1xmYgWqG9kQQqmXjCmAAakBaPw9f21CmAytR36cVBFbzuhD+FAmMr/HlyfTUc+lW41w9fS1QCOGdZlQPuLKh5nD3dnvcFSLigPuct9+ieuBWTTcDr+N5iADVTfIaqtvkMi9eJ4QQQgiLaIoa5OgavDQF1ToRiwoNH6Cm3i2u9dXV+uJdiBBCCMPY6n6KEMJHQajNffahxiVA9bK0p1Fz9puhZk78iurXvAu1Qh/O1x523u4LvItapEkI4X8hrVrdNjks7AJtFlmy23OLcnIWfwOUN/S1ZXaGEMYKQq3GWMSZgxqzajyvmOrNgECFC9fvpwczKto3h+M2oBBo0qbNXZNCQlo2rWfNDa68/MjpvLwl30dF3ToxLKytNm/elZWninJy3v6udevrxoWGdjnXHguWU1FRWJab+8Z3ERHXxzdv3rmj2fV4qqLCXpmb+/wy1KJTRglq0eKypFatru9r4DX86vTpf+3JyVn8nRnXlhAhhHHCUSOl96Cm03kzl/xTz5/aqRkkPAb/WuA8EBwRcdXYyMiJ3b24nqny8t7bkZe3ZEWLFhOSWra8wWqDP88pP/+rrJyct5eFh49KaNNmui+D2BpUYeHq47m5b6yMjIyNa9NmZpLZ9XiqtHRzYW7u8z8af6UgbDadPh7NW+tKp++SELq5A7W0rA1Y4jz2KfBxPc93L2r+dw/UYMlF0GMvJMyEHjWmkIZgs4XV8zJmqF4QT6+61Zt3UJBedQcFhf4eaHWqW63kLqxEQoQQxvkAtUyvuzwfzvclZ6z70CoXEmfCgHgo8OG0QghRPxIihDDOaeeXv2Q7v4DeTSB2FgxIlPHRQgizyM5cQugnDKIfkAAhhDCbhAgh9BIG0x6AwaOst3GgECLQSHeGEPoIgetmwKDREiCEEFYgLRFC6CEEpt0PA8dJgBBCWIWECCGsLwSmzoDB46TxUAhhJRIihLC2YLjmLogeLwFCCGE1EiKEsK5guOouiJksAUIIYUXyziSENQXD1XdC7BXyayqEsCppiRDCeoJh8h8gRgKEEMLS5B1KCGuxwVU3QcwUCJWVpIQQliYtEUJYhw0uvwWir4UwCRBCCMuTlgghrMEGE2+GoddCuAQIIYQWJEQIYT4bXH4txE+TFgghhE4kRAhhLhtMnAZDb4IwWYpSCKEVGRMhhHlsMGkqxN0M4RIghKi/ICAZ6FrLYxcCUbUc7w60NbKoQCAhQghz2GDClRB7EzSVACFE/QUBB4CVwH5gjttji4E9wGHgKrfjC4B9zuM3N0iVjZSECCFMkTwZEm6DpqFmVyKE5qYCnZ23bcBjztvdgTudt5u6HY8CHnbeDgP+3AA1NloSIoRocOMnQ8IdEiCE8IvfatzPdf57Cih2O37Y+W8RkF/LcVEPEiKEaFATJsGwO6C5BAgh/GMzMB8oQHVRXO08ng9cB6wFPgFmOo+Xo1ovfga+AP7YgLU2OjI7QwglHLgb+ArVvxoKzAbaAU8D2b5fYkIyDL0dIsJ8P5cQws1c51dN3zq/avrR+SV8JCFCBJpIYCQqHKQB253HuwLDgFXO+/ej3mRSz3OuMOe5ugK7gXXnfurYZIibDhHhPtQuhBCWIt0ZItC8AkwGOgGfAzc4j+8Gtro9bxhwKfAPIOkc53ocNXCrI6q14m+1P23cOEiYDi0kQAghGhVpiRCB5lagynl7F3AjsKSW55WgQkFb1KjutbU85y9u5/oE+J6zRnqPGgVD75UAIYRojCREiEBT5XZ7ANUju2OBsagWiv8DPgQWOR+rLWSc71xOSUkw/E8Q2cy3koUQwpokRIhANR64CRjhvJ8BXOH2+EogBbADZcBA4AHnY7tQo8FdegPPAVOqDyUnQswMiGxuQO1CCGEJEiJEIBqNCgGTgJPneZ77HPOjqC4LgDy3472AT4G7gC3q0JgEiHkAoiL8VK8QQliShAgRaG5ErVY3ETjixetOolon3MUDr6ICxC/Vh7uOlQAhhAgEEiJEoHkGKASWuh0bjlqAxlv/iVpC93W3Y3fUuzIhhNCMhAgRaGrb5a++rvTyuBBCNCqyToQQQggh6kVChBBCCCHqRUKEEEIIIepFQoQQQggh6kVChBBCCBE42gOXu92PBZ4AJtTnZDI7QwghhGh8OgAXotbD2ec8Fona3+coaq+fjqhNBB/izGX8a2oJXAzkAzvcH5CWCCGEEKJxuRlYAdyLWhPnr87jp6neEwggGWgGPAncfo5zDUItpncfahfkL3HLDtISIYQQQjQu36A2EXSgWh+OAv/F2a0NwcA/gJ+B9523a/oN6AdUADbU3kF9gUyQECGEEEI0Nvlut9sAuagA0Qy15P8AoA9qKf8ngHaooFEb9z2EQoEI3PYPkhAhhBBCuKmqKrGVlx8zuwyPORyltnM81BR4F9UKAWp5/2+dXzmosPEI0A34zPmcR6jurliI2sUYVCvEK8AS4LjrAhIihGiEqqqKbZWV+rwJQpkNoKqqTLO6i511V2hVd2VlQRBAVZVdq7rt9lPn+rD062Xy8t55v6BgeVgDXMsvKitPlqO6G9yFoz7wvwHedj0V2FvjednOL5c8qkOEw/mvDXjKec7p7i+WECFEo5CzHyh13qk8ffqdfxQVfR5qZkXeKC09XgZUFhR8sqS4eJU2b952++lyoDI/f+nnpaVp35tdj6cqK8sqgbLc3G++KS/ftsbsejxVWVleBRQZfBl7cfHqTQZfw2htgE9QIeI1L1/7Zo37Yc5znAZupca4ioZIdUJYSSQqPOcad4lbH4f+Ccadv6YDhyDjSUg72HDXFEJY2CLURoDpbscWAOvrca67gGdR4ydcPkcN3JSWCBFQIoG1wFeoudKNwKFDsPFp2CQBQgjh8hfOnMoJbuMYvPQJ8FONY6dcNyREiEARiprC9KvZhfjPoSOw9lnYut/sSoRwYwMuRfWff4PqhxcN66Tzyx8KnF+1ksWmRKBYBHyMaomoSxiW7+o7chw2Pwtbsxrogk0a6DpCf4tQqyF+AXxgci1WEQ9MQ02xbFQkRIhA8ChwDDXVqS5hMOJW1CIsFnU0G9KegZQ9DXCxKFQ/ainqgyG8Aa4p9Haj2+1pqFAeyGYAG4BPUYs6NaoeAAkRIhBMBwaiWiLuBqZQY5qSUwhcNwMujmnI4ryTnQ0p82Hj7ga64B8B1yDRyzjzA0KI2qS53d6MWpsgkN3kdjsOtfpjo9GoEpEQ5zCW6p/1P6A2pvlXjeeEwLT7YeA4OGzRQYrZ2bBmPmRkNuBFS+u4L0RNfwBmoVqtFphcixVkACOdt09QvRlWoyAhQgSCA263T6L6990HHYXA1BkweJx1fyWycyF1UQMHCIDXgRHAKNSslk8a+PpCP3lUr5Ao4HHUktJdgVeBQnPL8S+rvmMKYZRPOLOPNhiuuQuix1v31+FEHqQshFQzZpYUA9eZcF2htyTUaofrzC7EAkqBp80uwigyJkIEmhPAYeftYLjqLoiZ7EOAuBI4AhwEJvmhvhpy8mDNIkjd4v9zC2GIF4E1qJlQ0p2hDADGYekB2/UjIUIEKmeAiLvCxxaIN4COQBfnbT/KPQ0bX4B0M5fgbQOsQjXBLkbeM8T52VArHLrca1YhFnI/sBX4ATXttVGRNwQRiIJh8h8g1pcWCFBvmAb9ZZFTACnPw9oMY87vsYdRA1ObA3cCk80tR1icA9judn+rWYVYyL1UrztzBeoPjkZDQoQINDa46iYYOgVCfV1QygH8CTVI8wRwn8/VAXCqADa8CClpdT/XcDW/R/KeIeoyFbVl9MvA9SbXYgXuoeo4Z+6YqT2rjiQTwgg2uPwWiL4WwuobIFoAt6Ga9z8APnN++UleIaS+BOs2+O+cPnkeGI1ace8j4GtzyxEaOIjfAnWj8ABqdkY7YD6NbN0MCREiUDgDxLBrIdyXFohvUSPPQc39vsf30lzyiyH1Vfi5PjvtGeUEanqnEN64AchHrXIa6PKAuWYXYRQJESIQ2ODyayFhqg8tEAARVAcIgMt9rMtNQTGkvQI/r/HfOYUwxTbUbARQa4tcZWItVjEWaEsjXGdF+jdFY2eDidNg2E0Q5usgyEIgxe3+Sh/P51RUAimvw6rV/jmfX/VF9eFWoqbtCXE+ragOEGDItGftfIKa4fQxZ46PaBQkRIjGzAaTpkLczRDur1kUk1BL+k7HL9PXCstg/WL4+UfngU7ANUBn38/tF++h+nKDUa0wfzS3HGFxpzlz6+/TZhViIVe73b4YNSW80ZAQIRorG0y4EmJvgqa+BIgPgCrUYKjbUf28C1FrQlT4VmJhOaS+BauWOw/0BnYAnzv/7evb+f2i5tbFrUypQuiiCjUe4hCwB5hobjmW4B6k7KhxRo2GhAjRSCVPhoTboGmoDyfpjtqBzwaEAi/4pTQAissh9U1Yuczt4DVAS+ftSNRUObPdT/Vo8v2o0eVCnM+/UPtE9AY2mlyLFUxGBaqjwK2c2VKjPRlYKRqh8ZMh/g4fAwScHbIdPp7Pqbgc1r0NPy6r8cDmGvfNXKnS5WfUhmVtOXPTMiGEZzaiAlWjJC0RopGZMAmG3QHNfQ0QAFnAElR4qESNhfBRcSWkvQc/flfLgyuBG4F/ALcANUOGmSRACCHOIi0RohGZkAxDb4eIsLqf67EbnV9+UFIJqe/C8qWcu1VjifNLCCEsT0KEaCTGJsPQ6RARbnYltSuxw/r3YeWXnL9bpC1qitwm1CDOemjfE45nAbRsOTk2PDx+hD6NjlUUFq7+saKizB4VNWG8TnWXlGRsLC/fdaxlyxuvgWA/dX0Zr6ho67bCwo+3t2//Pzfq9JFQXr7jt7y8D741uw4NBaGW6/8MtQy3T/T5iRHinMaNg3grB4gqSF8CKz/n/AGiH2odiijUduVxwDHvrjVhEjTrDV8+DxAa2rtj27YPJwcHR9ar8oZWWXmSsrJ928LCKivatJmeHBLS3uySPOJwFHLkyJ8PlpaeLoyKum1cWFgPs0vykIOjR//jdGEhO1u1un5ckyb9fd1PpsFkZ/9vlYGnD2nT5t6bQkK6aTMbqbLyaEFOzssfAmV1PPVvwEPAeiRECDFqFAy9F1pYNECUVUH6R/Ddx9Q9MPNmVIAAtU7EFNRGRh5ydefsW1efSoUQv7M1bz52QKtWN/UzuxBPnTr1xd6cnJc/quNpd6Gmbfttbx5d2gqFqEVSEgz/E7SsuZaBRZRVQdrHHgYIgJ017v/b82tZvTtHCGGyMaglyOf486TSEiE0lZwIMTMgsrnZldSu3AGpn8J3rtkdnvgAtTrkGOAL4CfPXmb17hwhhMm6AP+FChF+XadCWiKEGW4BfkStyvgpamEaL4xJgJgHICrC/6X5Q1kwZHwB332IWsHPUw7UapjXAO949hKrd+cIISwgErVa5ufACiAa1VUa6+uJJUQIM5SgttAeAGwBnvL8pSPiIO4+6wYIgIxV8NU/8S5AuHRGrZLpwX+f1btzhBAWsQOY4Pa1GZgBZPh6YunOEGb4l9vtQjyegTBqCAx9CFq3rPu5Ztqznvqtbnk16nsTBJQCPTjn6Gmrd+cIISxsF1DsjxNJiBBmuQQ1T/kUkFz304dHQ+wsaGPxAAHUf3ns/6a6dTAc+DNqKlYNVu/OEUJY3Ax/nUi6M4RZtgMxqL+865jGOHwAJD4E7XQIEL7YV+P+1rOfokN3jhAiUEiIEGYqRs1CGHbupwwfAENnQ5s2DVWUiW5Dzd8+BbwHvHnmw6OGQIIG3TlCiEAh3RnCDE+iNps6AfwHUNtmVACh0P8eaB8IAQLU+JDE2h8aHg1xMzXpzhFCBAgJEcIMW1EzEJoD66i1OyOhP2SVQRN/7MapueEDIP4haKvNErxCiMAgIUKY4QPn1zlE94FLZkPhcw1WkWW5unPaBUprjBBCIxIihMWM6gmD5kLUBWZXYr6E/hA3K4C6c4QQmpGBlcJChvWEgY9Cpw5mV2K+2H4QPwc6tDW7EiGEOBcJEcIiYrtB3Fzo3NHsSswX0xsSZ0H7dmZXIoQQ5yPdGcICBnWB+EegSxezKzHfqJ4wcK60xgghdCAhQphsSCeIfxS6dDO7EvO5unOkNUYIoQfpzhAm6t8R4h6DbhIgGNBVunOEELqRlghhkp7tIekR6Nnd7ErMN6gLJM2T7hwhhG4kRAgT9LoAxj0KPXuZXYn5hnSChHnSnSOE0JF0Z4gG1q8NjJ0nAQKqu3O6SmuMEL6JB/KASuB7t+MXAMuAo8Bf3Y63ApY6jy8AbA1TZuMjIUI0oIFRkDgPLuxjdiXmk+4cIfzon6hgEAxcBlzpPP44cCnQAfgzkOA8PtP5nA7O25c2ZLGNiXRniAbSLQqGPgq9+pldifn6toXR0p0jhP80qXG/hfPf8BrHm9ZxXHhJWiJEA7iwJYybB73669FqWF4KOIw5d782kPS4BAgh/OpBoMJ5+1eq9+Z5GsgEqoB3gZ+cxxcBW1C/5/8Cvm6oQhsbaYkQBusdCYmPQZ+L9QgQ2dmw9U3A7v9zd3N25/Tu7f9zCxHQvgLCUF0ap9yOZwH9US0PpW7HjwLRtRwXXpKWCGGgdhGQMBf6aRQg1syHjEz/n7tblGqN6S3dOUIY59Q5jp8rKEiA8JG0RAiDtIuAiXPhosGaBIhcSF1kTIC4sCWMmqdPa4wQQnhGQoQwQKdmMH4OXDREjw/NE3mQshBSf/X/uXtHQuKjEiCEEI2RhAjhZz3C1Q6UF8Xo8aGZkwdrFkH6Fv+fu31zGDEP+l6ix/dCCCG8I2MihB/1CIeE2TBgmB4fmrmnYeMLkL7JmPN36QDdBurxvRBCCO9JS4Twk95NYOhMGBCvx4dmTgGsfx5SMsyuRAghdCUtEcIPejeBuJkwIFGPAHGqADa8CClpZlcihBA6k5YI4aswiH4ALhmuR4DIK4TUl2DdBrMrEUII3UlLRGBrCnQDQuv5+jCY9gAMHqWWrLe6/GJIewV+Xm92JUII0RhIiAhcf0Et+/oWsBMY6eXrQ+C6GRA9Wo8AcapEBYif1ppdiRBCNBYSIgLXYuAiYAIwF7XDnadCYNr9MHCcHgGioBg2vgarVptdiRBCNCYyJiJwZbndDgaKPXxdCFx1Dwwep8ePT2EZpC6Gn380uxIhhGhsdPgUEMZqh+rauMeD5wbDNXdBzEQ9fnQKymHjm7BqhdmVCCFEYyTdGYEtClgK/BWoa6xAMFx1F8RM1iNAFJdD2puwarnZlQghRGMlISJwdQOWAU8B79Xx3GC4+k6Iu0KfALHubVi5zOxKhBCiMdPhE0EY42PgNJDg/AL4G1Bw9lMnT4UYXQJEJaS9Bz9+Z3YlQghhQR2BJsABoMrXk+nwqSCMMROIqHGsvMb9IOjYFSI7QKgGK0mVVELqu7B8KeBA/ffd47z9JlBkZnVCCGGyzag/FEuBTsClwGFfTighInDVtWJjEFx+MwT5nFQbRokdNr4Ly79EhQaAT4HLnLcnAFeYUprJysv3ERTU1OwyPFJVVd0QVlFxGLv9tInVeK6qqvT325WVR3A4KkysxhvVv96VlSfQ6yPBbnYBOroSOOi8/RpwNfCyLyfU6SdGNBwbTLwOhk2DLR+bXUzdSqogfUmNAGEDxrg9aWyDl2WKogo4kem6d/LkonUnT76+2cyKvFdSAJCX98n9ZlfinZIioOK338brVncpULxnz+UPmF2Jd0pqtpz6ld2eH1xWttvIS/hZvidjHA8CrVBrBA0AFvh6VQkRoiYbXH4txN8AYRoMvC2rgvSP4LuPqQ4QOG9/B1zjvP9Ng5fW4Eqc40HW/x4aIiKSOzZrNiTGzKq8VVqaurG8vMoeGZkw3OxavFFUtHmLw7EzJyLihjFm1+KN0tK9O0+f/teeCy64f4zZtXijpGTPvoKCz7MNOn3l4cOzFzVtGq5BN65SUlLqADxpApsM3A/8Gzjk63UlRAh3Npg4DYbeBGEaLEVZ5myBOCtAuNwI3Ixqs/2wQUtrcCV2WP8+FB2BpCnw/WsA4eEDLmzX7j+uCwpqYXaBHrHbczhy5D8ON21aWdG69azrQkMvMLskj1RVFWO3/7+iggJ7VevWf7ouNLS72SV5yM6xY//zOXC4Vas7rm3S5CJtPjRPnPjbioKCz41axj4oKura6LCw9nr84gDNmuUU5eS8fZy6+3ned379FZgN/J8v15UQIVxsMGkqxN4M4RoEiHIHpH0C354rQACUAW83YFEmcXXnlByAEQ/BkfQzHw/GZtPlV736Ry8oSJ+6g4LcG+30qdv9+22zBWlUt+GCWrSYkNSy5Q39zC7EU/n5S/fm5Lx9vmntwZwZMEpQXRs+kZ8YAWCDCVdC7E3QVJMA8cvn8O1HnH+KUjNUS0QJsASorMfFIoDCeryugZRVQdoSyN8FiTOhdUs4YnZRQjQCIdhsYWYX4YU6P877otYEWoaa4jkVNTvD2KuKQJA8GRJug6b13RK8AZU7IP1L+Ppd6p7j/DXVAyrHAPd6d62kJAiKhNXfeltlwyirgrSPIX+nChBtff6rQgjRaP0buAWIRv1B9Tcg19eTSogIeOMnQ/wdegSICgf8shS+/id1B4imnDkjw8vpncmJEDMD/v2pd69rKK7unJztkCABQgjhiUznl99oMPpeGGfUpTDsdmiuQYCoBLZ8B0v/gWcTxEuAjW73V3l+rTEJEPMARNVcjMsiyh2Q8QWc2KICRPs2ZlckhAhM0hIRsMYmQ+LdENHE7ErqVglkLIMv38S7FWYuR3VhFANvefaSEXEQd5+1A0T6l3AiFYbPlgAhhDCThIiANDYZEqZDRLjZldSt0gabl8GXr+H9EnWngGc8f3pSLMQ/pAYnWlGFAzK+ggMpMGo2tG9ndkVCiMAmISLgjB6rAkQLDQIEwJYU2PgR9VvjthXwP8Bx4O/nf+rwaBj2ELSxaICoBDK+hwNrYNQc6NTB7IqEEEJCREAZPVKfAOEAKqqcAaI+UzMB9gGuUDARGFX704YPgMSHoI1FBye6unMOrYSkuRIghBBWIQMrA8bIEZA4A1o2M7uSutmB39bAzr3UP0AMoDpAAMTX/rThA2DobGhj0bEFdlR3zqFlkDAHOnc0uyIhhHCREBEQkhMh4T6IbG52JXVzAL+uhY+ex7N14M9lV43XHzj7KQn9IW6WdQcn2oHNK2DHtzBsFnTpZHZFQgjhTkJEozciDmIsPNvAnQPYsg6WPA/4ukNfOar7YiNqI67EMx9O7Afxc6BDWx+vYxA78MsPkLkUxsyBrl3NrkgIIWqSMRGN2og41dcfFWl2JXVzANvSIPV51J4X/rABSDj7cExviJ1lwOyGrkASsAafdsezA1vXwpYvIHkudOvmn/KEEMK/JEQ0WolDIP5B605XdOcAtqfBhmdhX6mx14rtBYmPGDA48SIgDWiB2msjjnqN53B156R8CJNmQ09dtoMUQgQg6c5olIZH67OXggPYng4/PWd8gBjWExKMCBCgNrNxbRscAVzj/Slc3TlrXQGil//KE0II/5MQYS3DAR8HPw4fAEMf0idA7MiAn+bDkWJjZX5cHQAAIABJREFUrxXbDeLmGji7Ia3G/QzvXu7qztnyHkyaJQFCCKEDCRHW0Bl4GPgGuKD+pxlxiZquaNXZBu4cQOZWWP6c8QFiUBeIfwS6dDHwIiuBa4E3gGnO+x5ydedsexOSHoaevQ2pUAgh/ExChHUcAfLq//LEfhCrUYDYtRW+fwpOFBp7rSGdYPij0MXfgxPDgddR2+s+AdiAz4DpwL88P42rO2fNYoifCRf283OdQghhGAkR1nAY+AS110M9RPeBobOsO13RnQPY+Susedb4ANG/I8Q9ZtDshumozb36AY/j9VbjUN2dk/IGJD8IvfqrLCKEEHqQ2Rnai+kNw+dCBw2WQnYAv2XCpmdhb76x1+rZHpIeMXB2Q80Wn9bevdzVnbP2DRj1MPS5WAKEEEI30hKhtVE9IVGjvRT2ZkL6k7DNh24bT/S6AMY/avDgxFdRq2ICrEe1JHnI1Z2z7EUYOQP6SYAQQmhJWiK0NawnDHxUn70Udu+C9U9DpsEBol8bGGlUgJiM2sjreVSAuARoBxz1/BSu7pwfX4HLZ8BFgyVACCF0JS0R1pAErEDNzPgHMOf8Tx/QFWI12ozpt92w7inIzDH2OgOjYMQ8g2Y3zAG+Bu5HDabsh1pMyssA8VsmbHwJxk6Hi4ZIgBBC6ExaIqxhLTDBs6cO6gJJ86CLJnsp7MmC9Kdh10ljr9MtCoY+auDshrvdbgcBfwRmeXeKvZmQugBi7pYAIYRoDKQlQitDOqm/tP0+XdEg+7Ng1d9ha7ax17mwJYybZ/DshpqLSX3n3ct374K1i2DgXTBgmAQIIURjIC0R2rikAwx7DLpqspfCvn3w89OQddzY6/SOhMTHGmB2w52o/og44DVguWcvc6C6c1IWQMxtMCBeAoQQorGQEKGHCLjgEuimSYA4cAi2PAM7jxh7nXYRkDC3gWY3VAF3eP+yrP2wbSFE3wYDEiVACCEaE+nOsLxeF8Do28yuwnMHDkHGk7DRh62wPdEuAibOhf4Wnt2QUwQ/PwV9b5AAIYRojCREWFq/NjD6UeipyToQBw/Dhmcg7aCx1+nUTAUIqw9O3JcL8dfD4FEQbHYxQgjhdxIiLKtbFCTOg96abMZ06AhkPAOb9xl7nR7hMHqW9QMEQGxX6D9GAoQQorGSEGFJ3aLUbIPemmzGdOQ4bH4WUrOMvU6PcEiYrdfsBl3qFEII78nASsu5sCWMmqfPXgpHsyHtGdi4x9jr9AiHxFkyu0EIIaxDQoSl9I6ExEf1CRDZ2ZAyHzJ2G3yhYOgzDgYk6PF9EUKIwCAholon1DS+Y+Zc/vfpipfo8UGZnQ1r5kNGpsEXCoMhl4OtSo/vixBCBA4JEcq7QBfU9yMLaOAplZ2awfi5+mzGlJ0LqYsaJkBMux/Cm8GJLQZfSwghhJdkYCUkAN2AccAo1MZKgxru8p2awZh5esw2ADiRBykLIeVXgy8UAtfNgOgxEFRl8LWEEELUg4QIGIbaAMvh/FoLxDfMpXuEw8hZcIkmASInD9YsglSjWwVCVAvEwHEyPVIIIaxLujOgLVDgdr/Aecxgv8820GS6Yu5pyHgR0jcZfKEQuOoeGDxOfjyFEMLa5F0a8oEWbvebYvjgyt5NYOhMfWYb5FbA/uchJd3gCwXDlDthyET50RRCCOuT7gzYzpljIAY5jxmkdxOImwkXa7SXQsonkFJzK2x/C4ar7oIhV0iAEEIIPUiIgBVAB+AF4FWgCbDGoGuFweD74ZLhevT15xVCzk4oyDH4QsFw9Z0QJwFCCCE0Iu/YYEfNzBiJWidiDWqApb+FwrX3weDRegSI/GJIfRXW/GLwhYLhilsgRgKEEEJoRt61lVJUi4RRQmDq/TBorB4BoqAY0l6Bn41qkXGxwVU3QcxUCNWlb0c7dvsJ7PZis8vwiMNx6vfbFRU5VFUZkeeNUPL7Lbv9FOXlJq1Z5zV79S2t6hb1cDkwFYgENgAvApW+nlRChPFCYMp9ED1Wj293UQmkvA4/rzb4Qja4/BaIvhbCJED4TbkDTh123Ssq+mlTefnxJ8ysyFt2+4b9Nltw1fHjf9Gq7oqKrMPl5ZlFx48/pVXd5eV7s4GC7OwFT0CwRr+LWblGnr2qqjioslKnUFVS1/+7aOAz1MSBvwOhwDO+XlWHTzWdhcDVd8OQZD2+1YVlsGEx/PyjwReywcTrYdg0aKLRm5bVVThg05fw7UrXEYejSVh4eMtIM6vyVkFB+xAodTRrplfdNlvwyeDgpmW6fb9LS8NPA0EhIa1bhujwNuVUVNSq1MDT23NzP/gwP/+HJgZew6+Cgk6Xc/6WhSfdbn8ITPDHdTX6kTFUK2A00B24ANXGdxzYiVp8qqwe53RNV5ykx7e5sBxS34JVyw2+kA0uvxbib4AwGdjrNxUOSP8K9qfAmGvgp38AREQkXtK69Zx7g4MjzC7QI3Z7LuXlTyy02SorWree+0BwcBuzS/KI3V7MiRNPv1NS0mRXx44PPhAW1snskjxUhcPx7OcnTqxe3rbtvfeHhl6oTagPCnp+RVHRMqMWvrMFB7dsFhYWEW7Q+f2uvLw0GM+m/AUBNwJL/HFdHT7djDQJmI1a7jr0HM8pBL5BNf94+gOr2XTF4nJIfRNWLjP4QjaYOA2G3gRhGgwOKauCklN1P89slcAvy+HkzzByLuTtcH80OLglwcF6/HHscFT30QcFtSA4OMrEajwXFFT99hEc3Fybut3HkNtszTSq23BBLVteeXXLltf0NbsQTxUUfJ9VUPB5OlBRx1OfAU6j9ozymQ6fcEboBbwDJHnw3AjgBuA64H3gAdT/gHMJhmvugCGT9fj2FlZC2rsNEyAmTYXYmyFcgwBR7oC0T+CHDWZXcn6VwOZlcHA5JM6Fzh1rhgghhPeCgsKr9ApVTesahWwDngXaAbfip1mIgdicfCmQimcBwl0Q6hu/EThXOg1S0xWHXKnHbIOSSsj4J6z4yuAL2WDClRB7EzTVJEBkfAE5v0K8tz8nDcgO/LICdnwL8TNVgBBCiFq9D3QE/he16WRPf5xUhz+V/SkJWIpaUKq++gE/onb/POh23AaTboE4TaYrllTCxndh+VKMWRfDTfJkSLgNmp6ry8hCyh2Q/iWcSIWE2bDnG7Mrqp0d2LQSMr+GcXOgS1ezKxJCWFpTVMv6q877dtS0T58EUojoDnyBbwHCpZPzXIlAOb9PV4ybpsd0xRI7pL0Py7/E8AAxfjLE36FHgKhwwC9L4UAKjJkN7dvBHrOLqoUd2LYG/r0Uxs6BLt3MrkgIYXlTjDhpIHVnPA34c6h3DGp8hA0uuw7ip0G4DgGiCtKXwPefY3iAGHUpDLsdmmsQICqBjO9h/1oYNRs6dDC7oto5gO1rYN1HMHImdO1udkVCiMAVKC0RcaiBkf72nzD6BCRO0WO6YlkVpH0M33+M4QFiQjIMvRsiNJhnXQlkLINDKyFpLnSycIDYuhbWfgSTZkOPC82uSAgR2DT44POLWzFmy8woCHtIn+mKaR/D9x9heIAYmwxx00GHOdZ21OyGQ8sgYY51Byc6gC0psOkDmDQLevYyuyIhhAiUEHGNcaf+rbNx5/aXcgekfwHfLsHwADF6LCRMhxaaBIgM5+yGYbOgi0VXCHIAO1Jhy7uQNBt69ja7IiGEgMAIEVGo6SwGybH4Kj6u6YrfvIvapdRAo0fqFSB++QF2L4Wxs6GrRWc3OIDt6bD6bRj+MPSSACGEsIxACBEG/3VZbOEPTNdeCl/9E8MDRFISJM6Als2MvY4/uGY3ZH4JIx6x7uBEB7AjA9a8BckPQu9+xvTKCSFE/QRCiGhq7OntQVBlwXd2114KXzZAgEhOVAEisrmx1/EHB/Dr2urZDT0sOj3SAWRuhXWvqwDR52IJEEIIqwmEEGHwXq7hZRBk8DgDb1UCm5bBV++g/uw20Ig4iLkPojTY4ckBbFkHaz+09uwGB7BrKyx7EZLukwAhhLCqQAkR9dmF00ORJcaduz5c0xW/eJ0GCRCJD0GUxceFgPpg3pYGm9+39uwGB7DzV/jmZbjsPug/WAKEEMKqAiFEVAIrjTt9j2zjzu0tO7BlOXzZAAEicQjEPwitWxp7HX9wANvTYNNiSJpl3dkNDmDXdlj9Akz6I/SLlgAhhLCyQAgRAP8y7tTRR4w7tzfswOYV8NnrqOBkoOHRkDgT2rYy9jr+4JrdsGYxjHgIevUxu6Jz25sJG16E4X+Ci4ZIgBBCWF2ghIj3MGQThB7HoHuB/8/rLTuw+Qf47DXq3kveR8MHwNCH9AkQ7rMbevW37gfz7l2wdhFE3wmXSIAQQmghUEJEOfBn/54yqAom7/DvOevDAexYDZ+9iuEBghYwZA609+ceJAZxzW5Y+waMtfjshj27IGUBxNwOg4ZZt04hhDhToIQIgCXAS/47XfI26Fzov/PVh2svhQ9fQAUlAw3oBbSAFlHGXscf3Gc3jJwBF1k4QOzdC2mLIPZWGJBg3TqFEOJsgRQiAGYCn/t+moRMGLvf9/P4wrWXwpLnMTxARPeBgQ+ixSecTrMb9mfBd/Oh3w3Qf7h16xRCiNoFWoioBKYBj1G/BZiKYGwKXLXLv2V5yzVdMXURhk5fBYjtpXa27NDa2Ov4gwP4LRM2vmT92Q37s2D5Aki4HgaOAg32cBNCiBoCLUSA+qR5CogGPvHwNVXO5w6H2ANGFeYZ13TFtfNhX6mx1xrWExIese7W2DXtzYSURRA73dqzG/bvhxXPQewUiB4tAUIIoasQswsw0TbgemAQcCVwKdAd6ICa7nAINaPjG+Ar4ABg8qJKVUBmBvz0HBwxeJGrYT0hbp51t8auafcuFSCsPrvhwCHY+BxET4VBYyVACCF0FsghwmWr8+tvzvv3AmuATNMqOqd//wI/PQtHio29zqAuEDvHultj1/Tbbli3EGJvhwEWnt1w6BCsfQ76XAXRY+XXTwihO3kXO9v9QDxwj9mFnOngPtixAY43QIBIehS6WHRr7Jr2ZEH6Qoj7A1xi4dkNh47Azwug93gYkiy/ekKIxkDeyc4UBFwMtDO7kGoOoKgAfjNgsayahnSChHnQxaI7W9a0Pwu+fxZGWHx2w5HjkL4A+o6FIZPk104I0VgE4sDK8xns/PcCLBEkXNMVM143/lo928PQR6Brd+Ov5Q/79ukxu+HoCVj/HHQYDUOukAAhhGhMJESc6TLU96QKmGxuKa7pipuehb35xl6r1wUw/lHrbo1d0/79sHK+9Wc3HCtT//86xEPsZAkQQojGRkLEma5BfSKFATebW8reTEh/ErblGXudvm1h3KPW3Rq7pgOHYP0CPWY3HD4GHYfBsCkQatW+FiGEqDcJEdXCgSFu90c6j5lgzy5Y97TxAaJfG0h63LpbY9fkmt3Q60o9ZjcM7AaDp0qAEEI0VhIiqo0A3NdeKAPGNnwZv+2GNU9BZo6x1+kWBYnzoJcmASI7F1Y/B700mt0QZoMgCRBCiEZLQkS1y4DmbvcjUYtRNaCsLEh/GnadNPY63aJg3Dzo3c+6MxrcVQGb06HPOIiV2Q1CCGEREiKqXc2Zn0421BiJBvqU3Z8FK56ErdnGXqd3pAoQVt4a293R47D7MxgzSmY3CCGEtUiIUFoDPWo5HgzEGH/5ffvgp6dh3zFjr9MuAhLm6hMgsrNh9SIobA9h4RIghBDCWiREKGMB12ZW5UCF83YTYKqxlz5wCLY8AzuPGHuddhFw2Txrb43tLjtbrfDYNRYGjDa7GiGEEGeTEKFcAbQAioF/A5uAItRUzxuMu+zBw5DxJGw8ZNw1ADo1g4lzNQoQubDxeegYCzFToYnd7IqEEEKcTUKEcjlQidp462XUhlz/DxUqegIG7CNx+DCsfxrSDvr/3O46NYMx86y9Nba7E3mwbhG0GQRx0yBch6KFECIgSYhQYyE6ACnAVajujBBgATAH9cl7tX8veeQIpD0Dm/f597w19QiHkbOsvTW2u5w8WP08tO4rAUIIIaxPQgSMB35CtUa4xkOEOh97FbgLmOS/yx09DhnzITXLf+esTY9wSJwFgyy8Nba73NOw4UW44EJIvBHCrLwUpRBCCGS4O6jBk5OpHlhZyZnfl3eAU0BT3y91LBvWz4f033w/1/n0bgJDZ8IAC2+N7S6nAFJegKjuEHuzBAghhNCDhAh4BbWakYt7S4TLF85/ax73QnY2rJsPGTvrfw5P9G4CcTPh4kQ9AsSpAlj/EkR0gNiboKkECCGE0IR0Z5wZIODslgg/OJEDaQshI9O/5z1LGAy+Hy4Zbu2NqVzyCmHjSxDRBhJug6Y+hDQhhBAemIof/8KUloiz1dYS4YPsXEh9DlK2+++ctQqFa++DwRbeGttdfjGkvgqhrWHoHRIgjGO3FxOkyRYeVVXFbrdLcDgKTKzGc3Z79bY7DkepNnVXVTl+v+1wlGlTt6iXi1FLFjyO2lzScf6ne0ZCxNn82BJxIg9SFkLqr/453zmFwNT7rb81tktBMaS9AmEtVIBoLgHCb+xAYb7rXnn5pp0nTz75lokFea20dNNemy3IcfLkQq3qLi/ftjM0dN+pnJxXtaq7pGTnPqA4N/etxXq8fygVFb8dNvgKNoej0NhL+FVFXX8pVAK/ojaX9BsJEWerxC8tETl5sGYRpG/x/VznFQJT7tNja2yAohJIeR1oAgm3Q0SY2RU1Hg7g17Ww9HPXEbv94OmSkjCDZwL5V0hIQbHNVlJVUrJdq7ohK7+oKL8U9Kq7qmpfHlBZWrprr8NRpUeTFWC3nzSy2aQqP//7FUVFGesNvIZfORx5xZzdPe9ul/PrVX9eV4dPnYZWgc/fl9zTkPEipG/yS0XnFgJX363P1tiFZbBhMQQFQeI9EBFudkWNhwPYsg7WfQgjJsK6JQBNm141tE2bGffabH6YXNQA7PZ8TpxYuNBmq6xo23bOI8HBrcwuySMORxknT774TkXFtl2dOj311+DgtmaX5KEqcnJe+7yk5MnlHTr8919DQrpoEyJOnXp7xbFjm1806PSOkpJdB+GYPk0znLajmiIblA6fPA3Nx+6MvAJY+yJsSHc7OAq1oNVSqqeS+ioYptwJQzTZGruwHFLfAioh4Y96BIhKoNhf/78M5AC2pcGW92DibCg+AOt+fzQkpCPBwZHmleeFysqTv98ODW1PSEh7E6vxnHuzd3Bwa8LCuplYjTequ8WDg6M0qttwwe3aTb+nRYtL+5hdiKeKi9fsO3Dgtkdp4CChw6dPQ/NhYOWpAkh5ETZsdDv4GPB35+21qEDh64CWYLjqLn22xi4uh9Q3obwEEmdACw0ChB3YvBJW/Wh2JefnALanwZa3IGkmXNgHfj1gdlVC6C44uIU9LKyH2WV4rLh48/m6MgwjUzzPVs+WCNdsg3UbajzgvoFXEuCHqH/lrRA7WZ8Ase5tKC2C4X+Cls3MrqhudmDbGtj+NcTGmV3NuTmAHRmwZjEkPgwX9jO7IiGEZU0DVqDe4JYBf/DHSXX4FGpo9WiJyC+G9a/A6rW1PJgKRDtvHwSO+lBbMLRqAe0uglAN+i5LKiHtPSAfEu+DyOZmV1Q3B7B9DaR/DMlz4ahFWyIcQGYGrHsdkh+GXv31WFxMCGGSz5xffiUh4mxetkS4piuuXn2OJ8wE9gLtgZdQ+3PURxBMvAUK99Tz9Q2spBI2vgtl2TDsAYiKMLuiujmArWthzRKYPAt6dvct8xnFAezeAqvfgFEPQ5+LJUAIIcwg3Rln86IlwjVdcdW5AgRACfAUMBuobwCwweU3Q8xUCNbg06LEDmnvQ+FhGDpDnwCxJQVS3ncGiF5mV1Q7B7DzV/j6FRg5A/pJgBBCmEZCxNk8bIkoLIP1i+FnT5q7Y4Fx1O/7bYPLroP4adBEg0+LkipIXwIFB2D4g9C6pdkV1e332Q3vwoQ51g8QP74Ek/4I/QdLgBBCmElCxNk8aIkoLoe0N2HVcg/O9ziQDvwAfORlLTaYOE1tjd1Eg/9XZVWQ/hGc2gXxGgWI7emwaTEMfxh69za7oto5gN8y1V4jY++Fi4ZIgBBCmE2DD6YGV0dLRFGlmm2wwpMAAXC32+3rAE9Xz7HBpKkwVJOtscuqIO1jOLVDtUC01WCVoN9nN7wFiQ9CbwvPbtibCakLIOZOuChGAoQQwgokRJytjpaIze/Bj996cT73fTP2Aac9eI0NLp8CsbdAuAYBotwBqZ9CznYYNgvatDG7oro5gMytsPYNSH7Q2oMT9+yCtYtg0J0wYJh16xRCBBqZnXG287VEFMH6ZV6e727UgMpI4FnOv7a506WTVQtEU00CRMYXcHIzJM6G9poEiF1bYfXLMMrqASIL0hZBzG0wIMG6dQohApGEiLOdbwOu+iwnmgPM8fzp4yfrszV2hQM2fQnZqTB8NrTXYMMA1+DEb1+Gy2dAv0us+8GclQVpz8LFt8CAROvWKYQIVNKdcTY/bMB1lsmo8RB1mDAJ4u/UY2vsCgekfwVZKTD0YWjfzuyK6uYKEKtfsP7shv1Z8MNz0PcGuGS4desUQgQyaYk4m6u7IQiPuh7qtAIY77z9C2q6Zy1GXapaIHQIEJXApmVwYA2MmgOdOphdUd0cwO6danZD0p+sPbth/35YvgBipsHgUaBBr5YQIiBJS0TtfNzJ8wzj3G7HALXsHTE2GZLuhogmfrqmgSqBjGVwYAUkzdYjQICa3ZD2HETfCf0tHCAOHIKNz0HcNRA9RgKEEMLKJETUzoedPM9S5Ha7HCg+8+Fx4yBhuh5bYwNs/wGyvoOEWdC5o9nVeMZ9dsMgC89uOHgY1s2HXlfBwHESIIQQVichonb+bImYhNo74wAw9cyHksdC/HQ9tsYGoBSyvlItEF26mF2MZ/bu1WN2w+HDsPo56HkpDE6WnkYhhA7knap2/myJWAvUsozy6JEw9F5o0dRP1zGQHdiXDpTD6LnQpavZFXlmfxakzrf+7IYjxyFtIfQdC0Mmyq+lEEIX0hJRO3+2RNRi3HCIn6HP1tg7VkPaZ0AERGnSArE/Sw1O7HO9tWc3HD0OG+ZDh9Ew5AoJEEIInUiIqJ0/WyJqGJMAsfdDK00CxNa1sHoJxD6ANj8v+/fDiucgdgpEj7bu2IJj2bB6EXQeCXESIIQQ2pF3rdoZ1BIxIg7i7tNoa+x1sP59mDQXIjRYSAqqZzdET4VBY60bILKz4eeF0DUWYiRACCG0pMlflg3OgJaIEXGQ+JA+O1tuS4Mt71l7a+ya3Gc3RI+17gfziRzY+Dx0HwJxUyHUqn0tQghxXhIiaufnlojh0ZptjZ0GW96y9tbYNblmN1w4wdqzG7JzYcMCaDkYoq+FMAkQQghtSYio3fn2z/DS8Gi1poIuW2NvT4c1iyH+IWtvje3ONbuhzziInWTdAJGTB+sWQWR/iJ8G4RIghPCfzsBW4ATwV7fjzYD5wDLgRrfjYcATwHLgrgaqsdGx6rut2fy0f8bwATD0IX0CxI4MSHkDkh+29s6W7lyzGzqNhpjJ1v2Rzj0NG16Etr0h/kYIkwAvhH99DQx03v4z8CWQBjwKzHYeTwY2A5nAA8DjzuPjgW3O5wsvyBtZ7fzQnZHQH4ZqtDX27i2w9g0YqVGA0GV2Q+5pWPcCRPZQW7yHWXW0pxA6q7kE/2Dnvz3djgUD3Ws5bqtxX3hIQkTtfBxYmdgP4ufoEyB2/gpfvwIjZ0A/TQKELrMbcgsh5WWI6gpxN0O4BAghjLHQ7XYe8J7z9itAgfP2RuAn5+03nM8D1QrxrcH1NUpWfec1mw8tETG9YegsvbbG/vEltTX2RRbeGtuda3ZD5xhrz27IrYRfXoIWbSH2JmgqAUII4zwFfAVEA5+i9ioCWI9qZeiBGjNR4Ty+FbgQ6I0KEWUNWGujISGidvVsiYjtBYmPQAcNdrZ0AL9lqq2xx95r7a2x3WXnwkbn7Ia4adae3ZB1CHoNgKG3Q1MNtngXQns7nF815Ti/ajoFpBtaUSMn3Rm1q0dLxLCekPCIXltjpy6AmDvhohg9AsQJzWY3XNgZ4u6E5hIghBCNkoSI2nnZEpHQA+Lm6bk19gALb43tLr8INiyCNn0g8UZoosHPblQohEqAEEI0Whq8EZvCi5aIQV1gyFzo0snQivzmt92wdoH1t8Z257DBxvXQqhcMu0lmNwghhDVIiKidhy0Rg7rA8EehqyZbY2dlQfpCGHKrtbfGdpdTAPtXQlKczG4QQghrkRBROw9aIgZ3hhHzoFu3BqnIZ/uz4Jv50PcGa2+N7e5UAax/CQ6XQLNWMrtBCCGsRWZn1M6Dlog+ydC1+/mfYxX79sGKBZB4LQweZd2dLd3lF8PG16BpG4gZC6e3ml2REEJoohkwEugGdAKqgMNAFrCO6umvPpMQUTuDtgI3w4FDahZG3DUwaIweAeJUCWx4BcIiIf4OOJABp80uSgghrG4E8DBqGe+m53jOadTCWk8CW3y9oHRn1M6PG3CZ6eBhSHkWel0NA8fpESAKiiH9ZSAcht0u0yOFEOL8yst3hx87NusaYCVwJecOEACRqI3IfkGt6unT7tISImrnpw24zHT4MKyZDz0ug8Hj9PjPKSyD1MXgCIWkuyGiidkVCSGElRUUfN169+6EUeXl+3p4+dIg4BYgFehf3+tLiKid5t0ZR47A+uegdzLETdTjP6WgHDa8CVVVkDAdIsLNrkgIIaysqOjHlvv3X5dgt+f68n7ZF1hF9cZkXpEQUTsfN+Ay09HjsGEhdBlr7a2x3RWXQ9qbYKuAhHuhhQQIIYQ4j/LyA0327bs+vqqq1B9v8h1Q+46crxukVhIiaqdpS8SxbFi70PpbY7srLod1b0NFMcRNhxZe/xALIUSgOXr04X52+0l//sE1EJjl7YskRNROw5YI19bYneOsvTW2u+JKSHsPyIf4GdCymdkVCSGE1RUXp0Y3lzZkAAAgAElEQVTk5y81Yo2ix4A23rxAQkTtNGuJOJEDqYug+xBrb43trqQSUt+F0myIuw9aNTe7IiGE0EFu7htdoMqI9/kWwNTzPN4MeB5YAywCWmj0QdmgKgFNPtR+3xo7GqKvtfbW2C4ldtj4LhQehhEPQVSE2RU1Hg6gtMx1r6Qk8+Dx4098bWJBXisu3ns0PLzKnp29QKu67fZ9+4KDD+afPPmqVnWXle3ZBZTl5r7zlcNh0+YPy4qKvXvMrsEsBQUrjdzscQrwxjkeewLIAyYBfwb+U0JE7TTpznBtjd32Yhg2DZroECCqIH2JChDDH4SoSLMrajwcwM5f4acPXUeKipZtKSpa5vOCMg2tvBxg9W6z66iPkpKnzvUGbGknTjz9ltk1WEhVYeGKX8rKtlsuqDgcpSEVFfuuNPASg8/z2BQgFigAXgRWSYionQbdGTl5sPp5aNcH4m+AMA3+giipgvSP4NQuSJwJrX1a5ES4cwC/ZcKmZyFXlvcUwjf23Ny3l5hdxDl0B14y8PztUZ9/lTWO24B2wEnn/WNAJ4t/UJrG4itWnqyAPS/BBRfCUE22xi6rgl+WVAeItq3MrqhuDqCiyuwqPLM3E9KfhG15QNCllz5xVURE5/ZmV+WpU6f2l61a9V9fjB//v/GRkT16mF2Pp4qKjtvXrfu/pTExD/dr27ZvvRfsaWilpfmsX7/wu0suub7dBRf0jzO7Hk+VlRUHbd/+5o/79mVkml2LiYzuag9GTfUsqOUxh9ttG2CXEFE7i69YufEdiB0CsZpsjV3ugLRPIGcHJGgUIHZkwOaVZldSt927YP3TkJkH2CZNeubGIUP+eH14eAsNurcgP3///2fvzMOiLNc//iEV95RcjysqJiqLLMMAIoqolUsntXNS66TmjituddpO6yk33MO90upk/solK5eURNZhRjZxAUVwIRYFDQJFcH5/PDOKBsyojDNPzee6vMCXZ973EWfe9/vc3/u576Lo6FWrAwLe7u3pOW18w4YtLFjA36GoKLs0Kip0k6vrtG5eXtOmNWnSVordRSUl125pNOv+16XLc808PcfPatbsSQk+j3DzZon22LHNuzMyNKmmuoazs59dp04vPl+7dgOLjewWFeU0OHBgoSkvUUjVAiIPaAnkIhp7XbLgB6VZsVA747ciKMkBF1fweFGO1tilWji2E3KSwS8YWt3X9iHzoAXSEiF8E7R0hByNuWdUNWfSIHIRpF4BbAYN+u9IN7eJz8siIK5evVCiVq9fV6dOg0ZK5fSxsgiI4uIrpSrV2k9r1Sq9plBMnymLgLhx49ottXrd9itX0k/6+QUHyyIgyspKSEjYum/v3plbER0paxwHB+XjvXq9urBr1yE9bGws++MTFvafsps3S0z1jDpfzc++QWwDXQEsAP7PYtWWmbHAxMqrxRC3DmKzoL2XPAJCvRty4sBvtjwC4vRx2BsK/adABwtu9372HKgXQ+plwCYg4J1hCsWUUfXqNZXgvQGFhdklMTFr1t+6ZWPr5TV1UsOGLaXolVJScqXs2LF1X9y4UZjn4REUZGfXUYrdRaWlxVqN5rOdeXnnknx9Z8xp3txRgs8jlJeXkpDw1f49e6ZuBMpNcY0WLXo28vJ6fb4MAgKgXTvvXBOe/qdqfvYmIkqxFsgB3reKiMqxsEjEtWLRGrtWU1A6m3s2xnFTC8f2wPkoUM6GVi3MPSPD6AVE2FoYPAWe7AU2WoMvMwuZ5+DwR5CUCxAQ8PZgpTLo5Xr1nrAw8Vs5RUXZpdHRoZ+CtkypDJrYuHFbKUqdCytg0/YrV/LPe3kFzWjatKMUycE3b5Zo4+O37P71V1W0t/fk2S1bOjc395yMoby8lMTErYd2755oMgHRpk2bBoGB7813dBziKoOAALCz65JkwtPvrOZnpcB/EJ1C3wduWkVE5VhQJKKwGOJCgXqg+BfUtyBxUxVlQOJPkBkB/nOhdWtzz8gw+t0NsWshYDJ0cxN5Q5ZIRgb8shjO5QD4+782SE4r4Po1pXL6VJmsgGPHNm6/fDn9ZO/ek2bKZAUkJn7+U0ZGRLi3d/C8Nm3cJfg8glZbRkrKtxE7d05ah7gn1zj29vb1/P2Xz+nR4+9uNjZSBPDIzDyaefVqxhTgpAlOfwSIup8XWEVE5VhIJOL3EojaALV0rbEbShDuLQM0+yHjEPjNhTZS3LDE7gbVcnAfb9kC4vxFSFwCp7MA+vR5PdDbe/YEqxVgWvRWQE7OmSRf35nSWQGpqd/v6907OLhtW09TFimqMbTaMo4f/yZqx44xqxCr3xrHwcGhrqfnB8E9eoxQyiIgLlyIuZScvH5xevrP54F/1/Dpy4F59/siq4ioHAuIRBTdgOgt8NhjojGVDK2xy4GE/XBxP3jPg7ZS3LDgbCpErATnV8DJy7IFhOZjiL0I4Os7z19YAa0leG/IawUIASGsAF/fabNbtnSSxgqIj996KDl5915f39fmt2unbG/uORmDVqvl1Kk9cSrVGyuBGwZf8GDYurq+Md3J6QVvGxsLWC8aQVaWJism5pMlsbFfXtQd2o0oPV1TzAfuO4ncKiIqx8yRiKJSUG2G8pvgPVmO1tjlgOYgnPgRvIKhXRtzz8g4zqRBxHJwfxmclZYrIC5cgpglEHcBoE+fOb19fGZarQATU1paQlLS1p/OnxdWQOvWrlJE1vRWgEaz5duAgOA59vZ9TNGsqcbRarWcOLHz2C+/zAzJyMi4bqLL1H7uuc1BTk6j+9aqJYeAyM5OyI2KWr88KWnbuXt+NA/YUQOXWKH7c99YRUTlmDESUVwK0brW2DIJiGOH4NRe6DcP2kux4oFz50C9QggIJ5+HFBDBiEpuGsCxRqZ3m4tZoFkCCRkAvXsHeyoUs6Y2bdpRiv4uMlsByclf7pPVCoiL+3Bb//7vzLa3D+hi7jkZg4hA7D3+888hIVlZWcUmukztYcPWTnB1HR1Qu7YUDiB5eSm5MTErlyUmbqysPkY58AJi2+WDbH29AczhAVqA67GKiMoxUySiqAzU26DsGvhI0hq7HEg+Cqd2g/886CDFikfsbvhhGTz5AvR4WAHRHliKaKHrDiyqiRkKfs2BhKWgOgfg67ugl0IxdaadXScpeo5UtAJ695bLCkhI+OLnpKQ9P8hpBaz43N9/6WwHh4HdzD0nY9BqtaSl/ZASE/Pu4suXIysrdFQT1Bo6dNX4Xr3GDa5du76JLlGz5OWdLIiNXbtao/msugqdWsQ9xxv48T5O/zOg4CEtETliOY8eM0QiSvQC4jJ4T4fHJVhlaoHjERD5NQyZB/aSCIiMDDi4HHz+Aa7+osrrQ1GbuwV5DWVp/ZoLqiUQexbA03Oqk0IxQZoKgxWtAD+/+QtatZLHCjh+/P+OqtWbvhs06L/zZbMCwsIWbhgwIGSmg8NTUtQ8ADh79mBqQsKiJenpmmsmukStZ55Z9qK7+4QhdepIsDYD8vPTCqKiQleq1aHGbud8EuiL2IJpAwwC7BG9MG4h6jqkAfsQ+RSna2KeVhFROY84ElFSJl9rbC2QGAmR/4PBc8G+s7lnZBznL4pdGJ7PgUvfGnrenwPeAV4HLiIKsjwkubkQtQw0aQAeHjMcfXymBDdv3k0KK6CsrISkpK37U1MP7vP3X7hAJisgKenrqLi4DV8OGPDu/E6d+knxvhYr+R+TDx9evK5//6UzunUb5iKPgDh0Jjp6zaLU1IgCE13C5umnl412d580ok6dBlL8UgoK0gujo9eGqtWr440Y3h3YjIhEXAM+QIiGd3U/r6X7u0lq3ljtjMp5hA24Ssoh7ku5WmNrgeQ4SPgSBgdDJyk8V5GcGLUUuvwdnPs/pIBoC8wGntL9/V2gAdAFSHi4eebkQ9wKEE2GPDzGdvHxmRgskxWQmPjVweTkH/b6+c2bJ5sVoFav+rxv3zdmd+48wMHcczIGvRUQEfHa6n795k/q0WOYNEWTMjIizv3yy/olqanfXzY8+oGwefrpxc97ek4aKUsp+GvXLhTHx28KjYlZGWtgaEPgY0CNEBBlwL/4Y25EOSYSEGAVEVXxiBpwldwC9Xb4PQO8Z8jRGlsLpMRB/BZRB6KTFDdauHQJji4Dh6Hg2v8h/3sfB1SIbOZ9wGTd8RqoqJebD3HLIDIFwMtrYieFYoaEVsDmnf36zQ3u0MHXgsuG30Gr1XLy5Hea6Oj/bOzT5+3ZDg6DusvyID579mDqsWPvrfL2fusVJ6fhCllqHly8GHVRrd64JCNjR7bu0CRgHdDpnqEewFhEG+qKuADjEI2gKsPmqac+GuHhMWl03bqNpXjWXb16oUSlWhsaFvZRZDXDbBC/j/OIhUwD3bEzwA+mn+XdWO2MynkEdsaNWxD3DVxLBe9gaC6BgAA4lQgJmyFwNnSRREBczIKYEHAIhF4DauC/thd337iGAhse9qSQVwBRK0B1HMDF5cV2bm4T51mtANOiW8knHTq0ZP3AgR8EydI/ASA9/VDa4cPvLff0nPVSt24jvGUREOfPx2Sp1WsXJyZ+dUl3aBMwQff9K4jP12VgBPB/iIfkJcAJuAoMQAj4WsAV3fFsKhAY+P4QT8/Jo2XpJVNUlH1Drd60OTx8UXg1wzyAT4GOiMWMnkJgOiaMOFSFFOrMDJg4sfK2gDgO3jOhhSQCgptwbD0EzIIu3S23pkJFfs0B1QpoFwDuQ2pIGyYjWuHqOfzwp7xSAEdXgioRoHv3l/6mVM5YaLUCTMsdK+Dfa/r1mz+pW7ehvWQREBkZEecOHFi2Qqmc8k9X11F9ZKl5kJOTkJOS8unS+PivMiscHlrh+zrA87rvR3DnRtMW8NV9P5w7fmQzIKDiNQIC3hmsUEwZJ1MvGZUqdPORI+8drGJIa2Aboiy1E3cLCC3inhRm2llWjlVEVI4JIxGlWlDvgispoihTCwkS5bRAThpQAoEzoWsPSQRELkSsgDb+4Dm0Bv9LCwAfRDLlCzxgkZY75P8GmjWgjgfo0mVQSx+fCQs7dPC2WgEm5uzZQ6nHji2Tzgo4fz4yMyzs3RAvr3+M6NnznwGyCIjs7ITcmJjVy6KiNpy950cVdyBoAf3DNKbC8d8rjKt4vJQKlRYDAt4O9PYOkqmXTJlKtWlbWNh7+yv5sS3wKmInxT8QeRD3frh+B2aZdpZVI8c779FjokhEqRY0uyBXDT5z5WmNnZoEh9YDDaG1JBGI3FwIXwHtFOBRExEIDeAG/Ab4Ace5k/38EFwphOhVEKUGcHQc3kypnPqajFbAgAEfTpfNCvjll9dC3N3nvNS9u0xWQHRWTMzyFU5OI59ycRkVKEvRpMuXT+QnJGxdoVZvqWxr4VBgC6JQ2weAXmSsBYoQ+Q9fInY/gViVlyPqHOwAUgH8/V/rr1BMntygQQsJivRBScnVco1mw7awsLe+r+THTyNqODyJ+LfqEyb1Xx/THY/gAcpV1xRWEVE5JohE3NRC/G44Hwf9gqGVBJn2+tbYP34Ciknw02fmnpFx5ORD3Ero6Abuw6HOwz7VghBFpACaAF8g8iIekquFELMGouIAOnTws/PymrKgS5eBUux20VsBBw68sbpfv7cmy9RKOSMj4tz+/YtXKpUzRru6juojS/+EX39NyElMXLe8Y8e+ga6uLw+VpWjSlStpBdHRq1aoVOtTqhhSCrxUyXEt8FkVr/lK9wcAP795fl5eMybJ1FZerd64/cCB13fzx1yGWohdXt66vxchFrfvA/9E2BuPA9d5iGqTNYHVzqicGo5E3NSC+ns4FwV9ZkGre7OMLRAtkJoC4ath8GToJkXlO7G7QRUCTd2g1/NgWxNPtXuXejVwzqvFoFoHkTEADg7Kx/v2fXWhTFZAevqh08eOLVvVv/8bE+S0AkaPcHGRq39CbOzKkObNPZTu7hOG2NrKUjQp/Te1estqlWp9oqmu0bv3Qm8vrxnT5OklU3Tr2LEt2w8cWPgNlSdDliMSRQt0f24iylMPQ9iotxCL3b1AddUsTY5VRFRODUYiyoD4/XD5CPQJlqs1dswa8J0K3dzlsDDyCiByJTRzAc+RUK+mJr0SOKn7vpg7WzofkGvFEBMKv0QAtGjRs5GX1+vzZbMCwsJeW+7oOP5fcloB/3ja1fWF/jJZAfHxn65s2dLJw81t/EhZiiZdvZpZGBW1dm1ExMcmC7f7+c3y8PaeGmRnZy9BkT5RCj4+fuOuffvmViUgKmM6MBVRl+YKIlJxg5pvB37fyCHBHz01FIkoQ7TGPn8QfObL0xo7LRWiVoLbOOjpJoeAuFIA4augRVchIGokAqHnFtAD8Xkpe7hTFRZDXCiEhwO0adOmgb//e/NlswIiI1csd3efMdrZeYyfLFZAVpYmKypq+bJOnfoGurq+NEQWKyAv71RBdPSKlc2ade3u6Tl5pK2tLEWTLhVrNKHrYmNDYgyPfjAUigW9PD0nzG7atJMUO9xu3izRxsdv2f3DD3O/wPiGWWMR9SD6IUpX3wAaAxsR1XLNijUSUTk1EIkoBxIPQMpPog6ELALiTBpELQf3sZbdGrsi+b+Bei207Axeo8HWVMvihxQQv5dA1AY4HA5gb29fz99/+ZwePf7uJstKPjNTWAE9eox8XjYrQKVas7JjRz8f2awAjebTNU2adOzi7j5htK1tYyneKIWFWSUqVWjoL78sijDVNRSKST2VypdnNWvWTQoBUVZWQkLC1n17987civGF6UYg7IungCzdsVKghBopr//wWEVE5ZQhwkUP+AQtB+J/hpQfIHAutGtXg3MzIWcrtsb2lkNAXCmEyNXQsAN4joF6FnqTLboB0VvgiH4vt62Hx7sze/QYoZRFQFy4EHMpJmbpyp49hz8jkxWQmyusgBYtnD1lswKio1etqVOnQWuFYuqY+vWfkOKNUlSUXapWb9wSHv5hdUWTHgoPjxmOSuWM4FatnCTY4abvCvvV/j17pm7EeAGh353xDHdHHG4Cy7i7Vo3ZsIqIqinngaIR5UByOJzcAwFzoZ0UHQBFa+x9S8GxJlpjPyKuFkL0WmjUGjxGQ30LvckWlYJqMxw+oDtgO3z4pzNkswIiI0NC7O3795etlXJMzIqVjz/errtCMWmEPP0ThBVQv75dM2/voHENGjST4o1SXHylVKXasOnw4XcOGB79YHh4jO3i6Tk2uFUrFwkS1PW9ZLYe2r174v0IiEBEZcpn+WPiZC6wtAan+FBI8cY0E/r+GTeNf4kWSDkK6h0QOB/aS1Es6E5rbO9/gnNNtMZ+BOh3N9RvBt4vQ30LLSxTVApJm+GQvpBM7eee2xwkmxUQG7tyld4KkKeVcvpvGs3GNU2adOzi4TFJIisgu1ilCg2tVatuXYViijRFk0pKrpSp1aHbwsL+YzIB0avXOHuFYvqCtm09pUhQ12rLSEn5NmLnzknrMP5Z4gNsRezEqKyL5/maml9NYI1EVM195kVogaQICN8OgXOgkyQCIjMTfl4GHsOhV021xjYx+t0NtZuA9zgLFhC34NhWOLRPd6D2sGFrJ7i6jg6QxQrIyzuRFx0dEtKyZS+pdgXk56cXRUevWlO/ftNWSuU0mfonlMbGhm6xsdHWUigmT27cuLUkNQ+ulsfFrfvi4MG3vsdE/RtcXEa08/KaIlUvmeTkHdE7doxZhchjMIZeiOJZoxHdOS0eOZZC5uE+dmhogcQoiP4ShsyXpzX2+YsQvRzchoNLgBwCQr+7oW4jUIyDhhYqIABOZ8FpvZdZa+jQVeNlswKio1esadnS2UmhmDRCnl0BF4rj4zeE1q9v18zTc9p4Wfon6K2A69evlfj5BQfJUjTpxg1RNOngwTd3YSIB0anTs60Uipnz27f3lsIe1mq1nDixSx0ZOX8VYjeFMTgDPyIakJksn6SmsUYiqsbISIQWSI6DxG0wcJ48AuLiRYgIgS7DaqA19iNCv7uhvC4oxkIjW3PPyAD6m8djgwevHCPXroC0gsjItaueeKKzVFbA1auXSlSqtaE2NnXrytQ/QW8FlJb+fq137znTmjbt2NDcczKG0tJCbVzcxh0HDizcgYkERJcug1r26zfnVXv7fve2CLdIhIDYGR8ePntZVlZWsZEv64ooHDUF0Z1UGizlyWGLaCxSgijjaQkYEYnQAilxkLgZfOeAgxSdC0Vr7CPLwWEAuAVaztugOq6XQtRGeOwx8JkIjaRYpQE0atSqeUlJwZWjRxdtNPdcjKW4OOecRrP+Up8+r7eIilq+2dzzMZbCwoIstXp1mo/PXGVMzJqt5p6PsRQXF1yJjV2d6O09VRkf/+lXhl9hGZSX/14YHr4sAuNrHtwXHTr42fn5zZ3XuXOAFIszrVZLaure4wcOLA7JzzdaQLRHCIdXgcp6aFg0lvL0GI2oj/4qsNi8U7mNgUjErcfghAYiN4vW2A6Oj2xmD0VWDqiXQ5cA8BhsOW8BQ4RHQX8vUE6RSUAAFBXl5IaFvfOjuefxIBw9+t/KOgtaPNHRIYfMPYcHISZm3S/mnoMFYdO4cYsOly4lHM7JSThs7skYQ1lZOenp38Xk52t+M/IlrYADwEfA16abmemQ5QliDgxEIlJToWgfBMyWqzV2dAi07VvDrbFNSFEpZGugz5OgnAyNpRIQVqxYeWC0KSk7E1NSdpqs54aZaQEcRlSe3GTmuTww1pyIqjEQiSg6AX1nySMg9K2xWytrqDX2I6CoDI5tg7jTUL8NNJYjI9F0dAeUyPGGs/JocQY8zD0JC6cp0BewM/dEEN2Af0Js5Qwx81weCtlExOOP8FoGIhG9hsKTPeW4n+fmQngIdHAHr5pojf0IKCkD9Ta4cQX8XjD3bCyAmUAKEAN8bua5WLEs3gSSEFsCV5l5LpZKe0QTvV8QxZvMuQW/ISKJci+wyIzzqBH0IqIvYmtJESJB5hJwEJjGHx+k7YBPgExE9a1fgZ+BCYB+pdgZ+A44A/yuO+evQAQi/+F+cNGd63fgGiLjfR/gfh/n2Kz791RVfvofup9XfFgZiETUfkwSAZEPsaugtSe4jZRHQMRugxs54BkEdlLsDDAxs7jzhvsXYlVlxQqIFtF6plIjzQP/dLwA6AtUtQRGmWke9RHiQYPoiSE9jwHDEb6MD/AtIrQSA3ghxELF2uSuwDGEuMhDhGJiAAXC03HVjWunO+8thMDYDCQiwm1fAUFGzm8AEA0MBP4HvA18iehmdhRwM/I8Z3TnqqqF8xu6c0ZWOFZDnTzNib41dhPXGm6NbUJKyiHuSyi6BIppYCdFe99HwMkK32cBheaaiBWLo+J7I537qrL7l+He0tH3/v1RYIsoJJUOBJvh+iahNrBQ970ncLbCz5oi/qH6Slu1gO1Ac2AM4qGu5wmEqtK/eU8g9r2eued6roiQ22sIgVIdjRGC4zfAGxH50PMpcAQRChpk4DwgRMx/gInA+9z9Ieutm9f/ARcrHK+BTp7mRN8au/mT4D2ihltjm4iSW6DeDr9ngM8ceEKK7nyPiEmIz5gd8F+Mr8Fv5c/PGMT9rR7i/mblj+xFLH6fQeyG2P2Ir18L2AbkIz7LJqmpYQ4eAzohbkiX7/nZVcQbM1/392eAbghr4X/3jM1HhFs1ur9f5o8CAiAZOI3wpwxl2Y9GZK++zd0CAkQUIgYRPTAm2S4XoQD/hoiQVGS67uvqe46XIW0komJrbJ9RJmyNXYPcuAVx38DVVFDMhmZ/dQExBCHGoxGlcHMQN8FRCP/byl+XfyLuo+GIe/IFxALpJd1xK2KxuwuxMNYvlNcBfwfWPuK5PIbIY6qDqEZpkpoa5qI2IoQ/ApGvsEH392T+GBLz1X01thxnS+BlRL5FV4Qt0rzCz22pvrBU7wrXrazQiB3iP+VviPCQIdYiPmRBwDe6Y62AkQir5d5/l74Bl2RcKYSo1WDXATzGSCQgdkBBiija1fyv7vfXQUTh9InE6xG7MqxYaYJ4INUDnkQkUj5l1hlZJm8iBAOIiPVBKm9mZWpsEM+eFoiOnGVmmINJqQ3MQLwxA7mT2Xsd2I+IAuhXPXoBcMGI8wYi8iuaABlAAuJBn49IwDSmfGnLCueqyuNLx/jsxhhEPkdfoCci030SQsysqWS8hHaGLK2xK1KqBfUuuHIcvOdAi2aGX/Onpw5QsT72o9yVZMWyqav7o8f63qice38v5opsLkKIvaEY30NDKh5D7JoYgNiDPh1ROTIPoeKiuLMVpkT31dAqsQ5CKTdCZMR2QlgI84APEUlhxqC/3lBEJKKqP2crfXXl6MNY0xACYTJC2HxZyVjJEisLiiB2LTSy8NbYFSnVgmYX5KpBORtaWQWEoBiRN1SG2DH1b/NOx4oFkYvIe7iFsJzfMu90LJbF3LHBv8E8Da3eB/oAz3Hnefano2KdiFOIZMfxgD2wBbGf9Tndz/Vem4uBc3YG2iLyFr4xMLY69NmzvtWOuj/+hxAN/0IkI7VHJF1W9h8sUSTiWjGo1kGdJ0RnSxkExE0txO+G83HgGwytmxt+zZ+avoidTEsRn8tlCMHeDOHtWvnrMhg4xJ2kyf8g3hstEe8ZK8Le+RxRquBJxPOjM8L2foFHn4cQDAxD5Db9qXdSPYb4h97LLYQFAXcepN8jVucTEXkI9+KIeCjrm448wR+thk5UXavhXr5BZLC+hshdqIyAe/4eqHvdZ1WML0Hs7HgcIZjKqXqXiCSRCH1rbNvG4DXOsltj67mpBfX3cC4K+syCVi3MPSMz0wmxzToQEbHbrjv+O3d2R1n5a+KG2FnQH+Hzr9MdL8S6lbMiKkQO3jOIHLfHuBOtedRMR3TjfIo7GxP+tNQG9iCiBtsQuytuIgo5vY546H6nG3sBESJ6A5GEuRyRL9EMYTm8hFhNxQDHERGLzyq8vi/iF2tsL+QExI6JWYj8haWInIbriC2ZLyBKvVb0ujojCkddq+a8oQiV2BCxwr9oXCwAACAASURBVMuoYpwEkQh9a2zqgvc4CVpjI36t8fvh8hHwXwBtWht8yZ+fv3N3VNDPXBOxYnH8g7sXYwPMNRELp1uF7+sBTphnF9NYYDZi52COGa7/yKmNeJAORng3FclERCnOVTj2FmJ19G/u3hKpRZQT1ddZGIMQJy/r/qB73UcIwWFspnkwonrma7rXVqSQB7NLziKEji+VJ1TqsfBIRNENiNlSoTV2XcOvMTdlQMJ+OH8QfOZbBcRtvkWIZH0irJQdKK2YhK8Q9z+9kNhrxrlYMsnc6R1SjFjIPmpGImq59Mf43D/pqY1IenwCUaGyLSKR6xwiKnFvQRst4mG+GvEQbo1IwjzO3bs2khFKMBBhcVwEwhCFo7YglGJRhfHfIaIh94Z+biGiH6t18+uACO+e013j3lyGrxE34Or8r5aISEsKIoRcFRYcifhNCxc2AWXgLUlr7HIg8QCk/ASB86FtZZbYX5ULiKqvbyM+dx+YdzpWLIjjgD8wH7FQW2HW2Vgu3ohqyy0Qv6tHnQPxLLASESk6Z2Dsnwr9QzIf0Y/CWIoQVb+q43dENOJeKlNohVSffFKCqFBpCEPnAVEnoh5CmFRXNcyCIxFxO6BjY/CZJkdr7HIg/mc48QMEzoN2xubFmJn0dLgU8YguFs8fC6FZsQLCPn5U70NZKUNY3+ZgAGLn39OYp5y2WbHQlbbJqItoUHMV+MLAWAuMRJSUwo1r0KkJeE+Fx43NLzEj5UByOJzcA/3mQ7sO5p6RcWSeg0Mfw7k8c8/EihUrFosPYlfI3zGPhWJ2LOwhaXJeRuz0CEFESqrDwspeF5fBsS8gOhXGvQOPNzT3jAyjBVKOgnqHsDA6SCIgMjLgyGI4lwPQvfuIvzk7j/hXnTqNJSjeBeXlZTanT/9wOicn8YhSOePlBg2ekCBfBuAWZ86EXUxN3banT5+P/9W4cevG5p6RsZw/H3X56NFF3wwZsvb5pk3btTT8Csvg11/jCw8ffmcb1SejW6mcXoieS6MRPaH+kvzVRMQhRKOxyvp63IsFlb0uKQPVNii5DO5OdyfyWypaICkCjm6HIcHQqaPBl1gEmZlwZBGczgJwdBzezNt7xoLOnQMqK71ucWi1Wk6f3pOclaU+Ghj4/ixHx2GuNjYS9F4D0tMPpf32W/xngYGrg1xcXvC2sbGQj58BLlyIuVRQcPqbYcPWjnJ3Hz+4dm1j2vmYn7y8E3mnTv2wFBMKiICAtwPbtPHwMtX5a5rff88jJmb9nuzsuBQDQ50RNSlewTyFrCwGOT6lNYcxPTb0WIidUVIO0V9C8SVQzILE9eaekWG0QGKUmPeQ+dBJigcwnL8Ix5boBUSHDn52SuWUhTIJiNTUvccPHnxz9YAB7wfJJCAyMiLORUb+d7mz8yujnZzkERBZWZqsyMiQkE6d+vfv1WucRALiZEFMzKrVGs0Gk3n4vr7z/D08Jk9s0qStBLYrlJRcu6XRrPtfdnbcCQNDuyJ2yUzh/nIJ/5TI8Uk1DxaQWKlvjV1yHnxnweMS1MnXAslxkLgNBs6TR0BcvAixiyH+AoCDg/JxH583FnbpMsjR3DMzlrNnD5+Kjw9ZHRDw5kRHx2FusgiIzMyjmWFh74X06vXiP5ycRvetVUuO21J2dkJuRMSalR07+vm4u08YUqeOFM9K8vPTfzt2bPNqlWp9oqmu0a/fQm8Pj6CpsgiIGzeu3Tp2bOP2/ftf20H1CfcdEMLhVUQBxr88MsTFzYWZIxE3boH6a9EaWzkTnpCgNbYWSImDxM3gOxscHMw9I+O4mAURSyE+E6BFi56NvLxen9+161M9ZHkQp6cfTFOp3l3Rs+fE8T17jvSysZEifYMLF2IuqdUhIT17Dn/G2Xl0QO3acqRv5OWl5EZHh4S0bevs6eY2fmSdOg2keKPk558pio5etSYiYpnGVNfo3TvY09196vSmTTtKkLcFpaXFWo3ms5379i3QV0muiraIsgAfIcoJWMEqIqrDjCLixi2I+waungDfmXK0xtYCJzRwdAsoZ4GDJCv4rBxIWApJ5wDatGnTYODAD+bLZwV8vLx79wljevSQzwpo167/wF69ZMolOFkQE7N6TcuWzk6enpNG1qvXWIo3yrVrF4oTErZ8EhOzMtZU1/D1XdBLoZg6086ukwRRU72A2LL7p5/mfEH1tSVaIDpbhwCbHsnkJEGOu415MJOdUaoVdSCupIB3MDSToLOlFjiVBBEbIXAWdO1hfId2c/JrDsQtgdizAPb29vWUyo+DZbUCnJ1H+ctkBcTFfbKiQwdvX2EFyCEg8vPTCiIj165q3tzewcNj0ui6dRtLsRC7evVCSVzc2tDw8EWRprqGp+dUJ4ViwqxmzZ6UYNEDpaUlJCVt/enHH2dupXoB0QRhYWyj6l5Lf1mk+ACYCTNEIvStsfMS5WmNrQXSEiH8E/CfKY+AyM2FqBCITQNwcHCo6+W1KFhGK8DFZdSzzs4vSmcFNG/eU+HuPmmELFZAQUF6YXT02tCmTVu38fScPLpevaZSvFGKirJvqNWbNoeHLzLZLgIPjxmOPj7Tg5s37ybBPQvKy0tJTv5y3+7d0zbxx8rMFWmISKL8Hlj0SCYnGVYRUTWPOBJxUycgclXytMbWAqePw95Q6DMNHHvKIyCOLgONPjPd1sXlzRk9eoyQygqIilqxrEOHgQOdnccMlEdAyGsFxMdvCq1f366ZQjFlXL16T1hQDZmqKS6+UqpShW4+cuS9g6a6hofH2C4+PhODW7Z0kuCeJQREQsIXP+/aNcmQgKiPEBAaRE8MK5VgFRFV8wgjEfrW2JnRoJgtR2tsvYAIXw2Dp0B3V0kERD6oVlYQELVHjPg0yMVltHRWQMeOPv169Ro3xNZWLivAzk4+K0ClWhsKdep5eweNbdiwhSwCoiwmJnRbWNh7+011DS+viZ0UihkLWrVylaKZnlZbxvHj/3d0164J66m+lbotsANRFiD4kUxOUqT4EJuJRxSJKAM0++D8UfCfK0dnSy2Qdhpi14LfVOjmJoeAyCuAqBUQpS9PW/u55zZPc3YeHVCrlgRd1NFbAWt1VsArw+SzAtpKaQXY2NSqpVBMntygQQsJetVAScnVco1mw7awsLdMtg3RxeXFdm5uE+e1bespRTM9rbaMpKSvo/7v/15cjWjkWBW1EPkP+cAkqt+x8ZfHKiKq5hFEIsoAzX64+DP4SSIgANJPQVwI9BoP3SUREFcK4OhKUOn3xtd69tm1452dRw+QxQq4fPlEflzculUtWnRy9vScNNLWVhYrILMoNnbtmvr1mzRXKCZKYwUUFWWXqlShm8vLfy9RKIImN27cVhIBce2WWr1x+4EDr+9GdFpejXgYVqQ+8ALQ957jtsDzwMDqrtG9+0t/UyqDFrZrp2xfQ9M2KVqtllOn9sSp1W+tBG5UM/QxRC+MOohqlI+6G6h0yBG/NQ8m7p1RDiTsh3M/gZ9ErbHT0yF5hRAQTl5yCIj83yB2NajjdQdqDRmyepyr67ihclkBq1c98USHbp6e00bJZAXExW1cb2vbqKFSOV0qK0Cl2rSttPT6NaVyxkx5iiYV3Tp2bNM3Bw4s/AaRFJiO6FoMEACMQTwoDyGaRwG8xp2kwe+BQbrvPwJev/caXboMaunrO3FBhw6+UpSy12q1nDz5nebIkVkhWVlZ16sZaoPYfdEC0dq77JFMUHKkuBGZCRP2zigHEg7CiR+ht0StsSmD5CXQayw4ecshIK4UQtQqiNAX17F56qnlY9zdxw6ztZXiuXDbCmjcuHV7hWLKKLmsgHWboby2QjF5csOGLaUI+ZSUXC3TaDZsKy3NyVIoJgXZ2dk3MvecjKG0tFgbH79x175987cjQvBPc0dAADyj+9qBOwICYJTuqx13BASISMVdODoOb+bnN+81e/u+UlSi1Wq1pKX9kPTzz2tCsrKyig0MX4Qoaf0c1UcrrFTAKiKqxkR2Rjlw7BCc2gP95kF7KcKBcC0bKAbXl8HJRw4BcbUQYtZAVJzugM3gwUtGe3pOkNIKUCqDXpbJCoiKCt1cXn6jxMtrxiSZrACNZv32/PzLmQrFjFnNmjlIUCkWbt4s0cbHb9n9ww9zKxZNiuTucPxp3dcs4EKF4/riU1crjAFQVbxGhw5+dl5eUxZ06TJQJgGREhn5ztK8vF+KDAz/AOiDaOldYvrZ/Xmw2hlVY4LESi1wIhwSd8nVGjvzHIStBRqAvSQCoqAIVGshMkZ3wGbQoP+OdHOb+Lws2wqvXr1QolavXyerFXDrloxWwJbtV66knfD2njO3WbNuUgiIsrISEhI+379378yt3L1l8VfEqvpd4Dzwku54KdAfmAbkAqt0x7WIXIiZwG/ASv2JRC+ZVxc6OAzqLkshtrNnD6UmJKxbkp6uMdSlNBgYirB7DIkNK/dgFRFVU8ORCH1r7IjtMHiuXK2xDyyHTsPg3E5zz8Y4rhVDXCgcidYdsAkIeGeYTFZAYWF2SUzMmvWPPVbbVqmUyQq4UqZShW4rLc3J8vaeO6tpU7msgJyc00m9e8+a26qVkzRFkxISvtq/Z8+0DVRe8+B7Km8UdQaYV8nxC8DCigfu9JIZIlEvmUNpsbEff3zq1KECA0NnILpx9gUMjbVSCVY7o2pqMBKhBRIjIeJ/OgEhRThQtMaODQG34SKJUgYKdQLilwj9kYCAtwfLZgVER4d+amNTflOpDJoolxWwafu1awWZCsXMmU2bdpJiJa+3Ai5dUkd5eU2c3aqViwR1WoSASEzcemj37okbqb5o0gNjb29fLyDgnTmOjkOk6iUTFrZ+6alTh64YGDoWmIWIyuSYfmZ/TqwiompqKBJxuzX2FzA4WB4BceESRIRAp2ehV4DYOm3pFBZD1AY4fLu8r7//a4NkswLi4jZsrVXr+jUvr5nT5LQCxs+UpX+CsAK27jtz5lCYUjlnTrt2nlJss9Zqy0hJ+TZi585J66i+aNIDY29vX8/HZ1Gwk9NwhSyl4M+fj8yMiFiyOCNjR7aBoSMRVSgHIXJErDwgVhFRNTUQidC3xk7eBH6zoZNErbHDQ6DLAHALlMP1KroBqi1wJEx/pE+f1wO9vWdMkMkK0Gg2bLt+PT/bw2NqkJ1dR+msAG/vWXNkswLS0vb85O//6rx27RRS7JLSastITt4RvWPHmFVUXzTpYbB1c3t/RvfuI7zlERDRWWr1J8tOn95jSBQ8i8j3eAbIMPnE/uRYRUTVPGQkQgukqHWtsedAZ4laY6uXw5MB4DFYEgFRCjGb4NDt/gC+vvP8ZbQC8vMvZ3p5Bc2Q0Qrw9p4snRWgVn+xx9d3QXD79t5SJDlrtVpOnNiljoycvwrTbUO0HT780xmurqP6yNRLJjY2dHF8/FeZBoYOANYCTwGnDIy1YgRWEVE1DxGJ0AInNBC1EQJnQpfucuxo+DUHokOgdV9wGyqHgCguBdUmOHxAf6Rfv4Xe3t4zp8hjBVy7pVav2375cvrJ3r0nSWcFZGREhHt7B89r08ZdKisgLm7Lt4MGvT3X3r5fJ3PPyRiEgNgZHx4+e5kRNQ8elNrPPffpNBeX0X1l6yWTlLTtnIGhvohqlMOBFNPP7K+BVURUzQNGIvStsSM2Qp/ZcrXGDl8J7fzAY4g8AiLyU/j5doOh3r2DPT08gqSyAjSaz3bm5Z1L8vWdMad5c0fprABf3zlzZOqfcPz4N1G//PLhtsDA/8zq3DlAihwlrVZLaure4wcOLDamaNKDUuvZZ9e/4ur6Qn9ZSsHn5p7IT0jYukKt3nLawNBeiIZaowC16Wf218EqIqrmAcpea4HU5AqtsSUSEEeWQ3sPcB8KdSSYdHEZxH0BYT/pjygUC3opFFNnNm3aUQorQAiILbt//VUV7es7bXbLls7StFKOj996KDl5915f39fmy2QFpKTs1MTGhmx95pklc7p0GSSFxSiKJv2UEhX17uL8/NjfTHSZWkOHrnrF1fWlIbVry1EKPi/vVEFs7KoVkZHLDUUVnIEfgQnAUdPP7K+FVURUzX2Wvda3xj78iXytsWNXwd88wHOEHAKipAxU22D/HnQd9jw9pzr5+r4ySyYrIClp60/nzwsroHVreVopp6R8G6HRbPk2ICB4jr19H2kExIkTO+N/+eXf6/z83g5ycHhamqJJ5879nBYXF7LMiKJJD4rN4MErx7i7TxgiSyn4/Pz0344d+3y1SrU+0cDQrsBeYDKwz/Qz++shQ8zaXNyHnaEFzpwSrbEDJsnVGjs2BJq4gudIsJVg0iXlELsNDuxGJyA8PGY4+vhMCZbNCkhN/X6fv//bC2SzAuLi/rstMHBZsL29PFbAqVN7j4eFLftk4MCQoCefHOYii4BITz98TqMJXWxEzYMHxebpp5e96OY2fqQsbeXz89OLoqNXrYmJWakxMLQDQji8ihASVkyANRJRNfeRWJl+CqJWgsck6OYuh4C4UgDhq+Dx7qAcCfUkmHTJLVBvv1tAjO3i4zMxuGVLJ2msgISEL37WWwGytVJWqVZ87u8vmxXww4no6NdX9e07e/KTTw5xk0VAZGaGZ4SFrfs4KWlnrokuYfP004ufVygmjZClFPy1a5eK4+M3hMbErIw1MLQtcBjRifRr08/sr4tVRFSNkZGItFSIWAlu46CnJAIi/zfRmKplZ/AZBXUleB/c0oL6a/jpG3QCwsXlX50UihkLWrWSywpQqzd9J6EVcOzQoYUbevd+c7psVoBavXiVQvHWK05OI6UpmnTxYtTF5OQNS4womvSg2AwY8MEID49Jo21tG0vxSykszC5WqUJDf/llUYSBoS2AA8AyYJPpZ/bXxmpnVI0RkYgzaRC1HNxfBielHALiSiFErQa7juA5BmyluIFAbAwU5nNbQLzYzsdn+jyZrICkpK+j4uI2fDFgwLvzZbMCDh36eP2AAUumd+smlxUQGfnxcienSWN69JCpaFJMllq9dnF8/FcXTXWNAQPeHaxUThstSy+ZoqLs0tjY0C3h4R+GGxjaBGFhbAVCTT8zK1YRUTUGIhEXsqHgEHhI1ho7ei00aQceL0I9CW4g17WQdwYKb3vC3bqNauPuPuG11q17tS8rM1W9nZrkFqdPf69Wq1d97uf3ZnDHjv4Ocswb0tMPpkRHv74qIODfkx0cnu5VXm6qAok1y6VLsRkHDixd6uHxwqiePYf7a7XllJWZpL1EjZKbezw3JeXTpUYUTXpgAgLeGezpOW28LL1kiouvlKpUGzYdOfLeQQNDGyJyH/YAi0w/MytgFRHVYSASERsBz0+DHhIJiNi10KgZKMZAfQkERKkW4nfBvm8rHLQpL7/WND19/zfp6furfKUlYWNzS5uW9qWmfn3nNhcuRP1w4ULUD+aek7GcPx+bVFra9PHs7KQj2dlJR8w9H2O5cOH86dLSkzZXr7rEHTnyQZy552MsJSWZ5+Livr5gqvP37btwoIfH+LF16z5eRwYhe/361fJjxzZuCwv7j6EPe32EgNAgWp9beURYRUTVGIhEDB0Grv5yNKa6VgyqdVDnCVCMg/oSrEBuakGzC77fCtwCcHQc3szF5Z8zGzZsJkUhqVu3IC3tp/SkpK/+7+mnF81u3LiNFLtHAM6eDcsOD//os+ee2zjOzq6jFD0lAC5cUF2Njv5oY0DAR8+2aDG+m7nnYyzZ2cnFsbEhG/LzL5nMwgDqX79eWKhSfbLWhNeoUYqLLxeq1ZsTDAyzRRSSSgeCTT8rKxWxioiqMRCJqFdXDgFxtQRiQsG2CSjHQ0NJBIT6e/h+GzoB0aGDn52X15QFDg6DpEjq0+0KSPn114PfDh68ZrJMnRAzMiLOnT2b8PXzz299yclpdIAs5Y9zchJyfvstdUP//ouG9eo1fqg8NQ/SClJSvl9uSgHRr9+rfg4Ozzyr1T5m+R8eoLj4ik1CwrY9J09+F29gaC3gCyAfmIQuZ8rKo0OOu4N50CIeYLUAyzdTK6WwGNShQD3wGiuHgCgDNPvg+8/Q/d5btOjZqE+fBXNlERAAZ88eTD127L1V3t7/eaV7d3kExMWLURejopYv9/IaMaJnz39KIyByc1Nyo6NXhjRv7qbs1WusNAKioCC9MC5uy2qVarWhokkPTO/eC73d3adOs7OzlyKCV1paqI2L27D95MnvDFWXfAzRC6M28Aq6BYeVR4scdwjzobc0JBQR+tbY2jrgNwEaSVAMvwzQ7Ic9G6kgIAYN+nCBXLsCDqUdPvzeck/PWS916/acVLsCYmJClnXtOnCQi8uLgbL0T7h8+US+RrNhZatWPd3d3CaMtLVtJMUb5erVzMLIyLVrYmNDDBVNemCUylkeCsWEIHkERLFWo9m8a9+++dupPqpgA3yC2M75LOLmYcUMWEVE9egtDcvPQLqLwlKI3QTaW+A9GRpJ0A67HEjYD7vX6/6Cvb19PS+vd+Z06za0lywCIiMj4tyBA8tW+PhM+aeT06g+sqzkc3ISchITQ5fb2wf0d3V9eags/RPy89MKoqLWrrSza+fo5jbxeZmKJqnV69fHxobEmOoavr5TnRSKoOnNmj0pRS+ZmzdLtHFxG7/fty/4to1ZDYsRJa2HIN39+c+FHHc48/GAnTzNSXEpxG0Cm5ugnAKNZREQB+G72xEIe3v7ej4+i4JlsgLOn4/MDAtbHCKbFZCdnZAbE7MypFUrD6VMuQQFBemFKtWmNU2atOvs6TlljCw1DwoLs0s0mvXrjhz5yGTNoBSKST3d3YPmNm/eTYpkXtFW/vP9+/bN+QzDkd8PAT9gIHDd1HOzUj1y3OXMxwN08jQn+tbYt4rBOwgaS7CcLAeOHYKd6xGRHwBbN7f3Z3TvLlOBoOismJjlK5ycBj8lmxUQH//pypYtnTzc3MaPtLWVo3+C3gpo0KBRK0/PiWPq139CijdKUVF2aUzM2i3h4R+YbLusu/sEB6VyxuxWrZylEBCiK+y2g3v2TNuEYQERjIg+BABFJp+cFYNIUO7YrNxnJ09zUlwG6m1QWgjKadBEguWkFjgRDjvXcUdA1B45cut0V9dRfWxs5PjVCytgnaRWwIqVjRq1dnR3nzhSNiugbl3bx5XK6WMbNmwhhdAvLr5SGh296tPw8A8OmOoaCsWYzgrF1AWtWrm0MtU1ahJdM7rDe/ZMqbiIqIoZwBTgKaDA5JOzYhRy3KXNhyR2hr419o088J0BTRuae0aG0QJJEbB9NaAvg1h7+PAtQU5O/+wnoxXg5jZ+aJ06Emg3RCtlYQV07CKsgCZSrOQLC7NLVKrQUK3WxtbHZ9aEhg1bShHyKSm5Unbs2LovwsM/+slU13ByGtXe3X3WvHbtPKXpJXP8+I7IXbvGh2JYQIwFZgH9gBxTz82K8VgjEdVzH508zYW+NXbRJfAKAjsJsrC1QGIkbF/FHQFR69ln17/i4jJKWitAllbKV69mFkZFrV1bp06D1grFVOmsgLKy6yiVQRMbN24tQb4PlJRcLVepQr/cv//NPZiojoGr6z/a+vrOerVdO6UUhcGEgPguTq1+s+I9oCpGAu8Ag4AsU8/Nyv0hx3LPfFh4JELfGrvoEvjOBLvHzT0jw2iB5DhQreJOVnWtoUNXveLq+tIQWayAvLxTBdHRK1Y2b+7g6Ok5eaStrTxWgEYTuq5hw0Z2SmXQ2AYNmlnw+/sO+v4JWm3R7z4+c6Y3adJWipDPjRvXbqnVG7f//PNbOzGRgOjU6dlWCsWM+e3b+0jTVv7kyd2aiIjgkKysLEOJkX8HVgIDgAyTT87KfSPFDcSMWHAkouSWaI19NRV85sATEmzj0gIpcRCzFDL0Nw+bwYNXjnF3nzBEJitAo/l0TZMmHbu4uU0cI08r5awSlSo0tFatunU9PaeNa9Cgha2552QMeivgxo38fG/v2bOaNu0ogV2nL5q0cceBAwt3YCIB4eg4vJmPz8xXO3b072yK89c0Wq2W06f3JB8+/N6ynJysYgPDBwBrEDkQp0w/OysPgtXOqB4LjUSUPAaab+4IiOZNzT0jw2iBFDX8ElJRQDz99LIXZbMCoqNXrZHRClCrN24pK7uOQjFFOivgt9/yz3t5Bc20s+skQbRNXzTps1379y/4GhNVUuzQwc9OqZyysHNnedrKp6buPf7TTx8tzslJ+t3AcF9ENcrhQIrpZ2eQ9sCrCEFjpQJWEVE9FhqJOLYPCo6D10x5BMQJDfyyDG6vPmyefnrx8wrFpBEy7QrQaELX1a9v18zbO2icbFbAzZtXf/fxmTm1ceM2UoR89FZAQcGFNC+vyTNlKZpUWlpCQsJnP/344yxjiiY9EA4Oysf79n1jYZcugxxNcf6aRqvVcubM/tOJieuX5ufH/mZguBuiodYoQG362RlFJ+Bj4DlzT8TSkOImaEYsLBJRpoWb16HZVVDMhVYS7APXAqeS4EAI5N0WEAMGfDDC3X3CaBmtAIViijTbCmW3AvLyzib37j1jvkxFk5KStu7//vvpxtQ8eCBatOjZyMvr9flduz7VQ5ZKrufO/ZymUi1ddOrUIUNbM52BH4DxgMmKcVmpOayRiOqxoEhEqRbid0FkIjiMlkdApCbDD0sg73ZhmAED3h2sVE4bLZsVYGOjraVQTJkkmxVQUJB9SUYrICcnPq537+lSFU1KTPzq4O7dU29XXq1p2rRp02DgwA/mOzoOc5VFQGRkhJ/TaEIXnzp16IqBoV2BvcBkYL/pZ2alJrCgVbZFYiGRiJtaiN8N5+PAqTvUlkD8aYHTxyFiCeTfDl8GBLwz2NNz2vh69Z6wEHFWPXoroLi4oNjPLzioceM2UmwfqWgF+PnNDZbNCsjOVkV4ewfPb9XKWYqaB+XlpSQnfx2xa9fEDRiuefBA2Nvb11MqPw52dBzmJouAyMwMz4iIWLb49Ok9uQaGdgD2AQsRQqIyWgJ9ATtErYgzVJ0vqLX2iAAAIABJREFUUQ+RV2EPXEMkZt47tgngArQDGgN5QCYQz/0nwj6BSARtBxQCUdXMrTLa6OZ8FdHW/F6aAM2AYiD7PudmUizgAWnRWEDZ65taUO+F85HgOw9ObjPvfIxBC5w5BfFLIf2a/mhAwNuBslkBanXoths38vN797ZaAaZG9E/Yuv/MmUP7/P0XLmzb1vNv5p6TMYiaB99EffvtWGNqHjwQDg4Odd3dPwzu2XOElyyl4C9ciLmUnLxhyenTewzVdmgLHAb+C2yvYswiRMnre+8dacBghKDQ80/EttB7BegJRNEqNeKhfRHRDfRekoARwFkD89YzF3gPuPf+8D9Ei3Jj+nv0Br4BLiByQipGbRoAEYAj8DQWJiIkWNGaFTOXvS4Djh2AS7+A31z4mxSrMkg/BeqPIfm2/9m37+sBCsXkyTJZAXFx6764di0nS0YrIDs7WS2fFbDtYErKD3v79FkwX56iSeWcOLEnTq1+ayWm6yZp6+Ly5owePUZ4y1IKPitLk6VSrV8cG/vlRQNDWwAHgGXA5irGTEZEKMIRq/2uiN4Zy4C/6c6h5x/A14hnWzDgDwQCy4HOwJMVxsYBbyNqUXgBwxAPfhfgK2P+nQgBsQwhTPwRwsUN+D9gNEIYGcMOYAViF8jn3C1uVgNOwGvAISPP98iQ4x1pPsxoZ5QhWmNf3A/e86Ht38QxSyctFaIXw6nbAkKpnO3n6Tl5UuPGbaUQEHorID///BlZrQAfn9nSWQFq9Wc7n3rqo3nt23t3MPecjEEUTdqlCQ+fZUzRpAel9ogRnwa5uIz2l6UUvOgl8/nShITPMgwMbYKwMD4HQqsZ9w/d1wkIuwFE5OEXRIRCvwOmLiICcQPoz912wmHEw1i/MykLUFZyrR+AnghR0YbqK2Q2B94HEhDVNPVRqByEgHACpgJvImwIQyzUXXcIMA9YCvwLEc34H0KsWBzWSET1mCmxshw4dhBO/AhewdCuzaOfw4NwJg0iF8Gp26G43r0XevfuPWeaTFaAWr3pm5yctOM+PjOCZbQCFIoZwbJZAWr1pi8GDfporr19X2lqHqSl/ZD0889rQrKyDBZNelBqP/fc5mnOzqMDatWSoi4YeXkpudHRoSFRUasNWQENEbkPu4HFBsbq8xMGV3ZJ7oT++yIiE3upPB/hXBXHmyFaiz+HeGDrr9eikrEVGYoQJev5o41Vhoga1EeICWO4ibBichERjHHAJ0AiMNHIczxy5JC25sMMkQh9a+xTe6HfPGgvRSlbOHsO1Ish9bL+iFI5y0OhmBBkZ2cvQT+PO1bAr78mafr0mT9PRitgwIDXF8hnBaz6vG/f9+fY2/s7mHtOxiCKJv14/McfP1iSnx9rqnbUtZ59du14Z+fRA2TqJaNWb1ip0WwwVF2yPuJBr0bkEhhiHcLG+ASxQg/XvXY/d+ct9NB9PWnklEchCkj1quLnhrJX9eJgCZXbFvok7Pu5j1wCxiD+bZ8ikiyHY1wkwyxYRUT1POJIRDmQfBRO7Qb/+dBBirAuZJ6DQx9Dxu0MbF/fqU4KRdB0WayAmzdLtHFxG7/PzVVHeHvPXmC1AkyL3gqIjX1nY58+H81xcBjUXZYdB+nph04nJoYaUzTpQak1ZMjqca6u44ba2kqxGYj8/LSC6Oh1K1Sq1ccNDLVF5AukI/IJjOE7hF0wF9HFc7zuD8CXuu9vInY3gNjhYIhZCOsjDyFkjiGSNK8gchNGGXEO/X/ON0BqNeOq+1llhAOnEaIokTsWjkViFRHV8wgjEVog5ShEfg1D5oG9FA8DyMiAI4sh43bGsFI5pYe7e9BcmayA+PitBzIzw3/291+4UK5WyretgPmyWQGHD7+3LjDwwxlduw6RpmhSevqhtJiYj40pmvSg2Dz11PIx7u5jh9naSlFYlIKC9EKVatMalWp1ooGhtYAvgMvAJO5vG+XPuj91EAWp+iESJ18EIhE5FXpbw5hI3JuI3AlvhKCpiLHJZ/rrhSPyOmqKxQgBkYZIIH0DkXthkVhzIqrnEUUitEBSBBz9GgbPBXspmunA+YuQuARO304+cnef4KBQyLUrID5exl0BZRw//p1aWAFvzJbNCti//99rAgL+E+ToOESiokkR5zSaz40pmvSg2AwevGS0p+cEibrCZhbFxq5dExm52FB56seArQghMYEHLwd+ExE1CAGCdMc8dF9jdV+f0V2nKhoi8h0u8EcBcT9E6b7+o9pRd1MbUefCjsrtklHAHMRuDSWic+k7iEiMRWIVEdXzCCIRWiA5CuK/gsHB0EmK1SRcuASajyH29hYuhWJMZ4ViqnRWwLFjn+0MCJg3Ry4rYLcmLu79DX36vD1bNisgPn7p6v7935rQo8ff3WSpeZCZGZkZEbFkcVLSNkNFkx4Um0GD/jvSzW3i87L0krl69UJJXNz6dZGRITEGhtog8hmaIfz++91m9hXgU8lx/XZNfbg/CRGVcESs3iv+Husi8in+DvyO2EHRkTt5FCCeh9MQCZPGcBBRe2II8BZ/FC6dEbsqKi6o+iLyHPIRQqIiPYGNCGEzCShA7PIoR9g2Fnl/soqI6jFxJEILnFBB/DZRB6KTFKtJuHRJbOOMu6A/4uLyYjt391nzJLUCpNsVcPjwe+t8fD6cLpsVEBb22nJHx/H/6tFjhFIWAXHhQswljeaTZUYUTXpQbAIC3hmmUEwZVa9eUyl+KYWF2SUxMWvWHznykTH9LRYjajs8x4PV0lBypwLkJkQuw37dec8CayuMHYfYlvkuIhfhf4gdIL8itkzqd4ktQdzbNbpz7UFEJlZifBJjOSIKkYXIq8jQXWsroELYEaMwnKAJ8Dgi98NW9xp9kb4YhPXSHJF7YXHbdKw5EdVjwkiEvjX20U9h4CzoIouAyIHTSyAhQ3/Eze2VNgrFpFdltAL69Xs/WDYr4MCBf6/p3/9d6ayAyMgVyz09Z4x2dh7jJ1PRpJiYT5YkJX1lsuS2gIC3ByuVQS/LUgq+qCi7NCZm7ZbIyMVhRgz/ELF9ciDGVW6sjJcQyZOBwMuI7ZTnEAmQ/+XuMtFnEMWeFiIiCn9HPJDjEdUw9+jGLUcsEoMRVkEBoujVfxFbSQMR5av1FCByMu7deXICcEVYEM/qXmeDiCZsRTz4K84vX3ceuLs8+ljgPELoxN1zjSWIqEYX4HmML4T1SJDjDmQ+Pka8eRb98UfPvwzuIx/stPrW2OGbIHAmdO1h3H9FGXB4CXQeAg49DA6vUfKuwfLXQFEP4m77iJ06PdsqMHDeax07+kuRxyGsgO80MTHvrPfzWzSna9dnpFnJnz378+m4uA9DnJ2nvdKjx0hpVvKZmZGZhw+/s9TFZfQIV9cXA2TZspidnZAbG7t6qVq95bSpruHv/9ogX9/giQ0btpTil1JcfKU0JmbFp2FhH/xoxPA3EA+9/oj7qKVSGzkq+VkkciwHzIcJIhH61tiRGyBwtvECwtwU/wbkQ9zt1cSTTw5r7ub20r9btOjRqbj4cjWvtRzOn49KOnz4vXW9e8+b3batZ4+SElPlyNUs2dnxaWFh/17u4jJ+rL29v7KkxJLvyXfIyzt9Sa1eGtK166BhXbs+FVBaWkhpaaHhF5qZa9fOX46NXb9MozGdgOjT5/VAb++gCbIICH1b+bCwD34yYvgMRFi+H5YtIMAqIB4KGZ5e5uSde75W4EEiEVogNQl+WgODpkN31/v7LzBXJCI3F44uA03FUF6tZs3atW7RopsUlSgBbGwe016+nPBrcbFNw/btnaWoXwFi3tnZ+bllZal12rb1esLc8zEWG5vHtIWFRVcuXoy+5egY2NLc8zEWG5vHtDdvXr965szRPFNdw8dnZt9evcZPbdq0vRT7OG/evF6emPj5toMH39yF4a2Z44B/IwTEryaemhUzY41EVE8ZIqu3BtC3xv7xE3gmCBzvU0CYi7wrELeiooCwt+/XtHfv2fOeeKKLJOW4b5GaejAjOXl5aEDAypmtWjlJkQMBcO5ceE5Y2NJVgwa9MbZdO6WruedjLBcuxF2NjV2zqlev8c8NH76+t7nnYyy5uSd+j4//8pMzZw6aTEAA9c6ejbpYUHDiPya8Ro1y44b2xrlzh89jWEA8D/wHUd/AKiD+AlhFRPXcBGqgZLMWSE2B8NUweCp06yWHgMjNB1UIRN2uN9+iRc9Gvr7Bc7t1G/b/7Z15XJTV/sffhKJZpuRWrqjkCojAsLmSpKbpLbst2qK5a2ru3brVLaubK+YWaqamdX+t1yXLJRVFkW0GEJdQEsEFxQVETRTR+f1xhsswDsyI8whHz/v1mhf4zJnnOYwz5/me7/L5esmSS5CW9nvqsWPrl3XsOHOYh8cL0nRCPH485uSJE1uXPvnklL95eb3SrVIlOdQLz549cObYsR3L2rV7tZOPz6C+spQs5uSkXcrIiF56+PAvtmSby0xQ0AT/1q3/9mrlyi5SVMZdu3bJKSHhm00pKas3YNuA+Bsi2bEbolJBcR8gx2pafjgoJyItBWIWQvBIaNleDgPibA7s+Rzi/idjW79+/Wpdu34yuVWrPpJVBUyf6+ExZECbNi9JY0BkZhoyo6LCwpo2ffIpb+83esljQPyRExOzYGHdup4efn7Dnq9SRQ4DIjf3+JXExGXhMTHzYm2PLhs63RTvgIChb9aq1aKmVtdwJKKXzPJ1ycmrf8W2AREKLAR6ICSbFfcJcqyo5YcDdCJSD8OeeeD9BrSVxIA4nwO75oH+fzK2bm5uVQMCpk9o1apPe1kMiIyMXRkREdPCvL1fecHT82VpWimfPp10Jj7+i88bNw4M9vEZ0rtyZTkMiOzs1JyoqEXza9d2c/f1Hda/SpXqUuy2hWjSovDIyBlRWl3Dz2+kR3Dw4HHyGBB5JCev2vjbb2NXYVtdMhgh+9wX610yFfcwcqyq5ccdeiKOHIY9c8FnIHj4y2FAZF8Ew0LQJxYecXd3r+Lj8+mEtm37+ctSVnj8eMxJvT4szMvrhb6envKUFYpWymFhdet663x8hvWrXLmaDB8acnLSLkVHLwqvWfOx+n5+w/vLIpp0+fLpa3r9sq8iI2dEanUNX98xrYKCRkyoXbuVNFLw+/Z9u2ndulHLEIJKpeEP/IxoYW3QfHKKCocyIkrnDjwRaWkQPw98X4O2gXIYEDmXYPdCiDHXwXfx8npvTJs2/aQLBTRv/tRTnp6vPSWPASFrKED0T3jwQddaOt2IQTKJJsXFhX+1c+e037W6hq/vwOaBgUMn1K3rUVuraziSGzfySUr6ZuvatcPsMSA8ESqLAwB7lCsV9yBSuBvLkTJ6IjKOwsY50OolaB0shwFx4RLsWQgx5jHhSv36rRjt5dVfulBAo0ZBHby9B/WWqZVyVNSi+a6u8oUC4uK+XOLi8vBDAQGjBj30UB0pDIgrV84XxMUtWx0RMW2zVtfw9h7kptONmfLYY+0kkoL/adfatUOWUFxN0RpPABuAkYA9ypWKexQpFqpypAyeiPR02DIXAl8Ez86lN5OrKFy4AnGLIcq8kU6lZ59dNtLTs3+Is3OFk2u3iggFLAqrXbutTqcb+px8oYAGEoYCFn8FNyrpdMOHyyOadOGGwbB0dUTE+79odQ0vr34NAwJGTm7QwO9xra7hSIzGApKTv9vz00+vLEDISpdGY0S/iakIQ0JxH6OMiNK5TU9ERgZsnQO+z4F3FzkMiNwrEBMOO3abHXTu23fRG56eA6QJBZw7dzA7Pn7x/Dp1mnr6+Q2TrpWyCAUMlS4UcOPGtTx//zHDqldvULW852QPeXm5N/X6L7/fsuXdddiuOCgTrVu/+rhON/7thg0DGmlxfkdjNBpJSVkfr9e/Pw/bDbIaANsRPTG+13xyigqPHD7q8uM2PBHHTkBsGHj3A68QOQyIS1cgPhwizZPKnHv3XjCoXbtBz8gVClgw/9FHG7f08xv1skyhgPh4eUMB+flXcwMCxoytUaOBFKqL165dvpmQsPz7LVum/oBGBkTz5t3rBgUNmerm1qlCtm22pLCXzM6d48IyMzNtNciqg2hSNQf4SvvZKWRAGRGlY6cn4sQJ2B0GT/QF7xA53ta/8mDPUthpbkA49ew5p7+Pz8A+Li5S3BfIyUm7FBMT/kWNGo0byNRKuSgUcLOSTjdKolDA+YK4uPDV+flZmYGBE8fVrOnmADE27cnPv2JMTPxy7aZNEzUzIFq1eq5WYOCot5s27SpNM7rU1F+Tt25dGHb2bKat9tc1gU2IUs5w7WenkAUpdmzliB1GxIlM2DkXmodC+25yGBCXr0H0cthpnhDl1L37Zy/KGAqoWrV6HdlCAXv2yBkKMBiWfZ+bm5Oh040ZV7NmUyn6j1y/nmdMTFy+7tdfJ36Dbc2DMtG4cUdXf/8RU5o1C5VCUt1kQByIivpw9tmzOy7bGP4IIgdiHTBT+9kpZEIZEaVjI5yRmQX6udAiBHx7SWJA5EPcV7B9i9lBp+7d//28TjfyJblCAUsWi1DAmwNlCwXcvHk1199/zCjZQgHnz6ceDAx8Y2ytWi2lMCAKCvJISlq1acOGsauwXbJYJtzdAx7p0uXtqe7u3VvLIsR25Mi2w0lJi2elpRlybQx9EFgP7AGmaT8zhWzIcNcrT0rxRJy6AMdmw2NdoP0zcryVV/IhegVEmJe1OYWEfNhHplDApUun82JiFi5xdn6gslxVAXKHArKyDiV36DBuYr16HtKIJiUl/Wfz+vUjv0QjA6JOnbYPBwS8M+mJJ3q3kcWASEvblhobO316Sso2Wy26XYCfECqUE7SfmUJGpNh1liOleCKitkGdIPDtLYcBcbkA9Ksh4jfzoyEhH/QKCBj9ukyhgOjo8BVOTjeuyxsKGDtWtlDAyZP6Pf7+Q9+qV8+rTnnPyR5u3Mhn795vt61bN1QzA8LNza1qSMiH41u2fMZbFgMiPX330YiIJbNTUradtzHUGfgGOAeM1X5mCllRRkTplOKJePpJ8H8OKkuweuSZDIhNxeriu3Z9L1TGUICzs+yhADn6JxSGAtLTd0cGBk6Y1LChn0SiST9GrVkzeDG2RZPKhJubW9WgoBkTPDye08kiBX/sWFTG7t2zZqan/3jaxtAHgFUIQ2IIGuWRKO4NlBFROqV4Ih5ylceAiF0NW4rVxXfq9G43f/+Rw2QMBfj6jhzt6ipfKCAwcNx42UIBqanrNwYHjx8vk2jSvn0/Rv/006vzsC2aVFZc2rf/eEzr1v0C5TEgojP1+i/mHDq0PtPGUCdE9UUthJx1geaTU0iNMiJKx0GtwMuLvBsQ/62lAdGx46SOAQGjh6pQgLaYhwICA4dLFgpYtU2v/2Z9cPCUCY0aBUqjeXDw4Fp9VNTk+dgWTSorLs89t2JMu3Yvd5Kpl0xsbPjMxMT/ZNgxfBbQHHgW7d5DxT2EMiJKxwGtwMuLvJug/x42rcHMgOjadWqgv/9YiUIBuTcTEpb9cO5c2h8dOgyTNhRQv76PNKGAAwd+3h0fv/zn7t0/mOjm1rVpec/JHoQBsSYxMvKtOZmZNjUPykqlZ59dMcrLq38X2XrJJCevPmrH8H8j2no/C9gSnlIoAGVE2EJST8S1mxD/A2wsJqzTocMEP1/f0aNdXZtIEwowGFauycpK3RscPGa8TK2UZQ0F7N//w54dOz5d3a3bv8Y1axbSvLznZA9Go5HDhzfs37JlZpiGBoRz375LBrdr99KTskjBnzlzMDspadXnev3yQ3YM/yfwNNAbsKUboVD8D2VElI6EnohCA2LTd5gZEDrdFG+dbuTYmjWbSBUKOHUqLjowcPhbdet6StNKOTFRzlDAgQNrDLGxYauefnrW+ObNu7cq7znZg9Fo5M8/Nx/au3fJ7Ozs2IsaXcb5mWfmD27X7tXelSrJIQV/9mxKTmzs/M+jouYesGP4WOAlIBSwVfapUBRDwl32XUUyT0S+EfRr4bfvMTMg/PxGegQHDx4nYyigY8fJU2QLBRgMy3/u2fPTSZKFAhJ27HhncWho2Fh3957SiCYdPbo1NS5u9gw7NA/KilOvXvMG+PgM6V25shQRQLKz0y4mJHy9IC5uyV47hg8CxgBdAVtlnwrFLUh0gywXCpDGE5FvBMNa+HU1ZiVZvr5jWgUFjZggYyigc+cPpsgWCoiP//fqbt3mTHBzkycUkJKyYX9ExJzwp54KG92iRR8vWQyItLTtRw2G8Jl2aB6UFaeePee80r79G8/L0lY+OzvtcnT0/IUxMfMMdgz/O/AvIAQ4pe3MFPcqyogonetI8R5dN0LiOvjFwoAY2DwwcOiEunU9pAoF7Nu3fkNIyD+myNZKOS7u8687d5YrFJCa+uvB6Oh353fp8v7wFi16t5fFgMjIiEyPiFg8PT19zRmNLuHUs+fMv+t0w/rJ00vm5JXExKXhMTHzYu0Y/jfgc6AbkK7pxBT3NCononQkCGdcN0LiL7CuWG8Ab+9BbjrdmCmPPdZOulBASMiE8TK1Uj54cE3Ctm1Tl3bo8N6bsoUC9PqZ83W69wd7eDwvjWjSiRN7Tuzbt3SWHaJJZcUpNPSTfr6+w/q7uFSX4k25dOn0lbi48PAdO2bstmP4U8BCoAdgT9KlQlEiFfwGWe5U8MTKAiBxM6xdiZkB4eXVr2FAwMjJKhSgLYWhgG3bpi/p0WO2dKGAqKjpcz08hg1o00Ye0SShefDlrKSkb09odY3Q0I96BQSM6i9LL5nLl09fi40NXx4Z+WmkHcODgZVAX0RPDIXijlCeiNKpwJ6IAiBpM6xdipkB0br1q4/rdOPfVqEAbSlspRwd/e78kJCpQ1u06CNVKGDLltmzvbwGveDl1b+zLJoHWVlJWXv3Lp2dlLQyXatrhIR82MvPb9QbsvSSuXLlfH5cXPhXO3dO+92O4QHAz8DLgD05EwqFTeRYPcqPCuqJuP4A7N0C/y1mQDRv3r1ucPDgKbKFAiIipi6VrSrgyJHfDyckTDOFAuTpn3DixJ4Tev3cuX5+/fq1bftiiCwGxNmzB85ER4eHGQxLj2h1jZCQD7oFBo4eWK2aHL1k8vLOF+j14asjIqZttj0aL4QBMQDYpe3MFPcTcqwg5ccNhLfGCbOSyfJnbxwkr8NM175Vq+dqBQaOelvGUEBo6Kw3W7aUKRSwLXX79mlzdbqxr8gUCjh2LCYzJiZsTtOmPZ7y9n6lmyyiSefOHczW65fOMxiWpmh1jS5d3g3R6YYPr1atjiRS8Bdu6PVLV//++/u/2B7NE8AGYAQQoe3MFPcbyoiwTWFIQ5NugLfHTcB4A5LXYuaBcHVtVqNFix6TXF3d6mdnp2ql2OdQzpxJObJ161sLfH3HDqtbt22LnJw/pZh3Tk565tat0+e2aPH0i/Xr+/nl5h6VYt4XL57KNhiWfO7q2rJro0bBT168eEKKeeflXbicmLhiQWxs+H6trtGx46SOfn7DpWorr9d/+f2WLe8W64lTAo2BzcAU4FfNJ6e475Bj61e+/AXUASwW3b+/Dj7P371p3AAO7ILv5lO8O6EL4IpcBmEB4n2tRoUMF5XITeAiYt4u5TyX28GImHdVQA73QxG5aCjD7O09SNe+/YBRNWu6SSFFaTRiTElZ/8umTZOLKdKWQANgJ/AZ8JXmk1Pclygjwja5QCPEImzG3TQijEDybvi+WHfCOnXaPhwa+vGUxx7zaHF35nHnHDmy41hMzGdhXbp8+nrDhn4+5T0fezlxIj4rKmrJHF/fAX3c3Z/sVN7zsZesrP0XEhJWz3Vz6+jfsuUzvR94QI6v/PnzaVcOHPh+kcGwIkHDy1QHHtHw/FpwFcjGtgFRB9gBLAAWazwnxX2MTLvX8qKckyuNwN498EMxA8LNza2qv/+H41u37ustS0w+PX33UYNhzYLOnT/q37btCx1lSerLykrKysjY/IWv74s9vL1f6+HiIov8cWpOaurGJY0b67x8fYf0q1q1hhQflNzck1cyMnau1NKA0OnGe+t0r4ypUqXGQ1pdw5Hk519h377vN0VGfvYNtg2ImogQxtcoA0KhMXKs4uVLOZZ5GoF98RA3DwsDIihoxoTWreWpCjh2LCojIuKjMH//AVJVBZw+nXQmJmZeWL16vgHt27/xjEz9E+Lili2sUaNJcz+/EQNkMSAuXTqdZzAsWbxz52eaVRDodMPaBgQMHlevnqcUUvAFBXkkJn5daEDcsDH8EWALsAaYqfnkFPc9SifCNuXkiTACB+Jh9xxIv2r2hEv79h+Pad1apqqA6MyYmLmfe3g838PL62WpqgISE1fMq1vXw1em/gkXLmRc2rNn0aLKlas9ptONHPDgg49K8UG5fPl0fkzMouURER/v1Ooa3t6DnggIGPOWLAaE6CXz7Zb160ctw7YBUQ1YD0QBH2s+OYUC5Ymwh3LwRBiBgwbYEQaZeWZPVHr++VVvenq+3MnJSY7/ulOnkrL27l08t0mTLt3atXv9GZlaKUdHfz6vdm33Vn5+w5+XqX+CwRC++KGHHnYNCBg9sFq1WlJ8UK5cOZ8fHT1/RWTkZ1u0uoav70vN/fzenFyvnlc9ra7hSEzN6LavWzdsKbarw1yAn4D9wATNJ6dQmFCeCNvcZSPCCKQYIGI2ZJpXhFR67rnloz08XuwqUyggNnZeWO3avgE+PkN6y5NLkHbRYFixsEaNJs3btx86QJ7+CZl5cXHh4U5OVar4+Y0aVK1aHSkqSPLyzhckJCz+JjLys41aXcPD4+VGfn6TJjZs6CdNL5n9+3+MWrv2jXBsGxDOwDfAWWCc5pNTKMxQRoRt7mI4wwik7oVNYRYGhHPfvksGq1CA9ly4kHEpOnr+QhlDAXr9l8sLCq6i040YWr36Y5JoHly4ERcX/u3mze+tRyNBNy+vfg2Dg8e93bChrqEW53c0RmMB+/b9GK3Xv2dZzm2NB4BVCENiCGZdfBWHhOe8AAAZoUlEQVSKu4EcW9ry5S55IozAof2wYTZkm9fFOz/zzPzB7dq92lu2UECtWk+0ljEU8OCDrrUCAkYPkikUEBe3dFlBwYW/goLGv1m9en0pXD7XrgnRpK1b31+DRgZE06Z96/n7vzWpUaMgaXrJ/PHHOkNU1OT5mZmZV20MdwLCgVqI1t4FpQ9XKByPFItkOXMXPBGFBsTumZBtrkfh1KvXvAE+PkN6y1QVUBgK8PEZIl0rZWfnKlV0uhEDH3pInv4JCQmLv7l2LTs7MPCtcTVrNpGkZPGSMT7+yx+3bJn6IxoZEK1aPVcrKGjs202adG6mxfkdjdFo5NCh9fu2b582Jysr0x5F0VlAc+AZzKq3FIq7iTIibKOxJ8II/JkCibMhLdfsCaeePee8ImMooGpVV+lCAbGx4cudnIzOOt3w4bKFAi5ezDoZHDx2nKtrUymEk/LzrxgNhpVrN2+e8h0aud8bN+7oGhAwYmqzZvL0kjl8eMP+jRs/m5mdnfyXHS/5N6Ktd3eEAJVCUS6onAjbaOyJSEsB/XTYl2N20Klnz5l/1+mG9ataVb5QQGCgfKGAq1dz82Tqn1AYCsjJOZ4aFDRmdK1aLWqU95zsIT8/j6SklRt/+23cajQyINzdAx7p2vWfU2VqK//nn5sP7d27ZHZ2duxF26/gPeBpoDcaSoIrFPYgxUJfzmjoiThyGKJmQkoxAyI09JN+KhSgPYWtlK9dy87u0EG+UMDZs0f2degwZnLt2i2l0DwoKMgjOXnV5l9+edMezYMyUadO24f9/d+d7O7eo40sXWGPHt2aGhc3e0ZKyrYc26MZC7wIhAD2jFcoNEV5ImyjkSfiz1TYNQNSzpsfDQ39qFdAwKj+KhSgLXl5F27Exy/+Jjc3K9Pff/RY2UIBp0/v03fo8KZUokl79/7n93XrRn6JRgZE/fq+1Z566pPJrVr1aSeLAZGeHnnUYAifmZKy7bzt0QwCxgA9AHvGKxSao4wI22jgiTh6FPQz4fA586MhIR/28vMb9UbVqo9KsZOXPRSQnX3sT5lCAdev5xkTEr785fTpuN1BQWMn1qvnKYXmwY0b+ezb993utWuH2iOaVCbc3Nyqduw4dWKrVn3ay2JAZGREpu/ePWdmcvKaM3YM/zvwL4QBcUrbmSkU9qOMCNs42BORcRR2z4DkYgtHSMgH3WQMBeTnXzjfocNbI2QKBej1y37IykrdHxQ0ZoJMoYDExFVb0tIit+p0YyY0aOD3eHnPyR6EaNIPe37+eaC55sEDwFbgAqJRlPk6NAnRvnoaQvugkFGIrpQzsWjD7u7uXsXff8YED49+0vSSOX485uS+fUtnHTq0PtOO4c8CnwM9gXRNJ6ZQ3CYqJ8I2DvREpKfDzplwqNhOokuXd0NkCwXo9UtX5+ZmZcpYFXDqVLKhU6fJk+QKBaz+/cCBXzeEhr47pWHDAElEk25w8OD6eL3+/WIN5IAwoJvp9+7AdGAq4iY523S8M3AUWAEEAV+YjncBMhE3VQAXL6/3xrRp0y9QFin4zExDZlzckplJSd+esGP4U4h23t2BQ9rOTKG4fZQnwjYFOMQTcewE7J0Fh4rtPAIC3uooUyggL0+EAi5dSj8iWyggPl6EAgIDx06SLRSg169cExIyaXyjRoGNy3tO9iBEk9YaIiPHhqWnp1uWILpb/LuF6WcTi+NNbByv1K/fqtFeXv07yyIFn5WVlJWUtHxOUtLKdDuGdwBWIjwRB7Wcl0JRVpQRYZvr3LEn4vhJMEyH2GI7jw4dpgZ26DB+lEyhgISEZT/k5KTu9/WVLxSQkSFCAXL1T/hhj16/7Jvu3T+b6ObWRRrNg9TUX5O3bl0YlplpVTTpfYrUFQsQJYsAPwKHTb9nIm6gABuAZNPvZ4EvgUrPPvvVKE/PF0OcnaVoEcLZswfOREeHh0VHf/GnHcMDEA21XgIM2s5MoSg7cpjv5csdhjNOnoTomZB03PxoQMA4X51uyGhXV7eH73B+dwURCvhKylBAYuLq39PStm3o1GmKRKGAAvbv/69er5//dZcuH493c+tsuXuvkAjRpN/2//bbJ7Oys2NL0jBIBOohQhrbgGzT8WzAC2gF/AkUii5dBvyANkAacKVv30WDPT37h8rUS0avXzrPYFiaYsdwL+BnYACwW9uZKRR3hjIibHMHiZUnMkE/C5LSzY8GB4/00OlGvylfKGB3VGDgPybLFApISvomIiFh5ZqePadPlisUsM4QH//x0k6dZox3d+/eWpaKg7S0bYf27g23RzQpG+F5sOQasNfK8eum4869ey8Y1K7doGdcXOToJZOdnZqzZ8+iefHxX+y3Y3gLhOdlBBCh7cwUijtHCyOiOtAeaIDYQURRtNN42PRcQ8QuI4qKX+9c6Imohgj/2KkQdyoLEudA3FHzowEBI9r4+IyeKFMoICnp680ZGZFbO3eeOlW2UEBi4srvu3f/bLJM/RNSU39N3r592uJu3T4d88QTT0sjmpSWti01Jma6vaJJZcGpR4+5A3x8BvaRpa18Tk7apbi4ZQvj479IsmN4Y2ATMBn4VduZKRSOwdFGxNPA/wHmO+z+wHcI1+WPgKvZc4OArx08h0KcEQlYeZStrlqHSGjqh5jnYtPxK0A6RByHytXB89ytLz19BqLngL5Y7NPHZ4i7TieXQFBi4urfjxzZ/qusoYCuXT+eIFsoYMuWdxY++eRHo1u16i2RaNLuowbD1/aKJpUFp169ZvVv336IRF1hMy7Hxi5aGBUVprdjeENgO/Ap8IO2M1MoHIcjv4yPABmIm/cHiESousA+RKlWBvAgQjAlCdG+NoWihClH8xjCeNgGhN7G63SI5jZ2vqb2BQj9A7zOin+fOQO75oChWOxTpxvQzMdnwtuy7ORFKOA/2+Pjv/756ac/miTTTv6PP/5riIn5cEnHjjPGy7STP3Jk66H4+E/DPD1HDW7T5vkAWTQPMjKiMnbtmjndTs2DsuDUvfu/n9fpRg2oWrWmFG/KhQvH8/T68EU7d362y47hdRAaGAso2qwoFFLgSE+EP1ATUfP9ucVznYDawFxgjgOv6WjeQszvNhaqczXhuyBIzoDQHaCfZ2lAeHm90tDHZ+wkWQwIsZP/MSoxcfkP3bt/NEUmA8LUSlnKUEBs7LS5bduOeKNNm37SGBDHj8ecNBi+mKOlARES8mEfnW7Ey7IYEJcunc6LiVm4JCpqpj0GRE2E4NZKlAGhkBB7jAgnRFb04wiFuSSKyrPMaWr6aS37uLTnCqkMuAGPAscoPQRRCWiHCI3kIBKurM3JXpyAZcDgsp/iYBM47A4Fh82Ptm8/uL5ON+xtyUIB8Xr9vFVdu348Qa5Wyr/t//339xaEhn48Wq7+CbuPRkV9PtfTc3B/D4+XpBJNion5YlZy8n8ytLpGSMgHvQICRr8uixT85cun86Ojw1dERc20JynyEWAL8F9glrYzUyi0wZZORHdE3fZ+4HcgHnFzH2Ix7ntgqen3lYDR9PgOWEVR3sMSs+fWmI5VAxYBF03XikHUiGciwgqWjDHNQW+akx5hdPzdbMyLFBkh3cyuaSzhnB9wRwZEIQUdEH8jAE2b9q3n6ztwioRVAV926jTtLVlaKQMcObI9JTFx9oInn3x/iFz9E6IyIiI+CmvT5rkXPDz6d5FFNOn06aQz8fFffJ6cvPqo7dFlo3Pnf3QPCHhTGil40Utm0Ypdu6ZttmN4NWA9Irn8E21nplBoR2nuwSeB3xC7/jkI2VkDoob5dYToS7xprAsimbIZwrL+CfHliERItT6MUKnbhkiujAJ2ITwI/wEGIrKSP0UYJAcQteK+iBBIIdMQ4ZJ9wLsI4yMOIZE7CKG5X5iXcQMRYslA3NijTI+diBr0QjogjBxH3XW8gcOtWj13qlOnt95p2rSrNDv5Q4fW79u27cNFnTt/MqZly16estyI09J+T42NnTbXw2P4G23bviDNTv748ZiT8fGzZru79+7Zvv1r3StVkkK0lLNnD56Njg6bYzCs0EyGuVOnd7sFBb057OGHH6/wb8rNmwVO6enbq27cOD4mIeHrXETotirCc2u08hIXhPfhECKEqlBIS0l3CSfgD6A5QrfePLv4MUQyZDVESVJh+eZYYD4wGgi3ON9wxI18AsXzJR5CfNEOIm6+5l+4SkBvYJ3p3x4Io2MHwkNi3k64LSLMspOihEh7EiudEGIuwSU8X1YyX375x+/btv27NAbE4cMb9m/Z8u780NCPR7Vq9TdpdvLp6buP7tr1r1menq+95On5qjQ7+cxMQ2Zk5Iw5TZt2CmnffsgzspQsnj37R05MzLy5cXFLrGk5OITg4Emdg4MnjKpRo0GFflP27fuuTmLiqkbHju2ue+3aJWuymeeAjQhv7FbTMWeEh/YvhPfz5l2ZrEKhESWtuO2BloiEH8vypNOIpjhTgb4USdOWhYdNc3gUoS9hLlBTQJEBAcL78QDwEcUNCBCeiwNAR4q8EPbQGccbEAD1z58/0hU4bmtgeWM0Gvnzz82HEhPDFoSEvDdUrlDAroyIiGlh3t6vSBcK2LVr3vzGjQODfXyG9K5cuULfK/9HdvafFxMSvlqgpQHRtevUQB+f0SMqsgFx9OiOGhs3Tmh76lRSbRtDawOvmR4RiA6lUxDr2FCUAaG4Byhp1fU0/SwpEfIPi3FlJQvhCeiIyIdYh8iJiEMYBeb4mH5OQ6jXWdIQqIIIq2Rbed4az9/mfO0mKWllzWbNOu/R6vyOIjf3ZHZMzIdfNGjQ89mHH368/smTcRXe8AG4fPn8XwkJ4V88+qh7F1fX5k+cPp0gxbyvXr2Un5z83bJKlZxa1KvnEZCVtdeeTo7lzvXrV28eOvTLqqiouZr1cejQYYKfr+/o0TVrNqmwUvDR0fMabNnytndBwbXbrRQJQYR/DyLKyO8kEVyhqDCUZEQUfomtCCkBIh8CRHbxnfI3RGbyy4iwx3DT8T9MvxdqxxcKWF0A8q2cZ7vpp71eCChqR+xwzp5NqbdkSfBErMdEKxI3AWN6+oGvoqIqcvXtLdw0Pb7T6xd/V96TuQ2MiM9oalLSqt/KezK3gRENb3zNmnVsUa+e58uXL2devHw505ZkdrkQHb3AIzn5/3zv4BTOiI3XYG4N+SoUUlKSEVH4Ja5bwvOFegcXHDCHbES1xxiEt8EfESbpishebo4o48w1jZ+IaMJjL6X55rWsmqiGCNFUdFnvQmR1rVrzSsmArPPWhLS03WlpabvfKe95lEIPRD8LRzAfsYbZU8WhUFRoSirxLIx56kp43s9inCPIQ1RPzEW4/tYidCAKLf8E08+n7TzfNdPPktr8VaPI46IVj2t8foXiXqEAYVg5+tEGkRx+8w7OUQlRneaopJtKwFeIxHKFQmpKMiKSTY9Abr1pN0eUZOYiPAV3QitgFNa/nIVzK/R2rEC4gT+kyLAw5zHgPbN/5wCXEO5Da1/Wq2i/G8y1PUShUGjIfmAYwuO5BhE2rXmb55gINHLwvBoA4x18ToXirlOaZT0SkWfwM0JHYS9CB2IQogZ6FMWrKcrCQwgL/x+IL/gh05xCECGN7QhtChA5ElMQmhWxiCTMRES4wgth7JyhuHDLNkQTrZ0IHYqaCI2JJYidyWkcvzgUYkSIWJmHCa5jvQvoFYo8J+bkcmuYoQBhHFmShzCMLLnIrXkiN7D+f3fVdB5LLqESwRRycgOxZv2MyL/qjlDH3YdoFrgekdRdEk44LoxhySiE+F1Fz5tSKEqkNCMiGiE4NR9hUBRyFPHh/9li/FXE7t/azfCa6TnLm9wRYAYwgOKiK7nAPIRnwfwLNhdRMfJPxILQz+z8u7i13HQ0ImTRFeG9uIEQqSokAe2MiJMUiXFVxnropBoi3FLN9CikJrfmclRC5FhY8iDCqLOkBrd6mpyxngxb1XQeSx6hZEGym1j3tFxDGEWWXOZWz48R63k1+Yg6ekv+wnpSrbXW07drsFkTBioPg03heG4gKrHWIJKpKyPyr9ogqr0uI1pv/xeRp2D+GfNHuzWiASJkHKfR+RUKzbFXEOBxoD5isb6dpMbboR6is+d5ROmnLR4yzekvhKhUada8i+n8Zym++A/kznQuSuNfiAXqXqYkA+Z2jt/P5yjNSAPrhkZJxsftHL8fzmHN4KyMMBY6cqvRfBNhTFQF9lDkpXiJWxsKOpLxiA2TQiElcqgKaUcNhFH0qIPPm4/Y5Rxx8HkV9y7WDIoHKCptNqfQe2VJdW71LjphPQfABeu5Qg8jbraWuFo5VpKH7SHT+S25HQ9boZfOktvxsBVibmg4mcba6htkNI09hxCN0opZCOE+hUIhKeMp3qDLEY+wu/oXKBQKazyIMH4KH48iPI9XsP69vWl6rgCRJxEObChhrKMeX2n1xysUiruDCyL/w1GLQirWd20KhaL8cEJ0Gr5M8e/rZYSnolDO/wWKe3/+jePWBmsPa12FFQqFZNRGdPa80wUhF9EMTKFQVBweAL5BJFheR+RL/IWo2BpK6aJzb6KtEfGmw/5KhUJRrjREZEmXdTHIoEiES6EAUaY8HaGtoigfnBFdNAsQnX4/QFRc2Nv7wgNtjQi16VAo7iEeRJS0XsP+ReAGsBrHJ2cq5Gc+4jPyZHlP5D6mM8KYs5a8aS8paGNAlKZPoVDcFzRExBCtla/dLXQ4vpFWM4QI1klKXgDOIXY4Xg6+tuLeQRkR9wZj0MaIGHM3/wiFoqJRBdAj3IPliRuQCfTS4NxOQHuEUM04RCXHS0AA9rtDFfcvyoi4N6iEkM92pAHxB9ZLaRUKqbiThjKjESVRn9gaqDHpCLXLcKAF1tUIy4oRIa2d6MBzKu4eTog8lTaIcNMxRFy8JP0ON4T7u7ZpbKLFWGfTudogOtw6I4TREhEu79tFhxA+qoEQTPsNOH4br29J6U3kLqFc5o6gAHgdiMQxTbPyEFLcqpOr4r7lAYSrv7vZMS/ge4pLxPZB7Mas7dqfBT62OOYNfMmtgjQDgB8sHp9ajElCfNEVChAhqUSs7wI3WYx9EFiOyG+xHLuLImGiiSWcz4j47FuG9UryRNQGtlg5xzWKy7/bYmcp8zEiescoHMfziBv/nXggrpvOo1Dc1wQgdk6WxsHXiHbelRCL+BmgQwnnaIpQdmxq8XprErOeiNyLF4BXENLYlpLSU4Cf7P4LFPc6cYgd5LuI6ogGCKP3W0QlTSFOwC8UGRd9EN1leyKM1ZsUeewGIfJgXkV0uPVA9HDRm17/T4s5WDMiXBA9VfKB94EmCHXGTgiX+U1EAzp76ErR96Lw8SJChdWI8BYqHEtnhKZEWQyIc0Do3Z+yQlHxGIJoVGNJNUS3zzDEQjnKxnl+QZTAgdid/QU8YeM1i4CN3CpbG0rZXMqKe49aiJtxdAnPNzH7vTdigY/EusesE7YlkpubzhFlcdyaETHUdOwdK+dpa3ruvzauVxrvmM6x8g7OoSidRogNjzXPlbXHDdP4huUxWYWiIjIVoe5mjRaIXZZll09r9ER4K6qYzvmrjfGDEDFqa+WUrRGWvkJRA2FEXECEyEpjBWKhvx0Xs4vpvM8iDOp3EDcKSyPWmhGxyTS2pJLgU4h8jLLQA+F90WO9K6vCsbRBKE4mY914SDY936a8JqhQVFRGU/JuaSJC+vkcIlGtNB4wjR2IcME+XcpYP0QYo10JzwchkiwVCoBlFF/Mv0R4AepajNtjGuNhxzldEaW/uVi/aRyyGG/NiMgo4bXmD2utw23RFPH9OEtxT4vi7vAgwiOlA9xRRpxCUSrPIMIWlnRBxAsbIUIaeoonm73IrR3rJiIWv8MUdxtPAvqbfq+DWHwHlDKnVxGJZgoFiM/SUERiZD7FkxfNw2wG0/HSpI9BhDoKFU23I5J4/Siq0riKfUbEGUR2/vBSHoPt/isF1RBJpAU4XjNFoVAoHE51xKLpbnasPsIV28f078IEsqVmYw4AMyzO5YpYVM2z0msiFsRCF/MCxOKvN3tYhj5+RiSqKRSWVEUkQn6C+NzmU1RFtBlxoy8pAbiQbqZxW7m1egjsNyIKkydLa119u3xjus5kB55ToVAoNGUF4uZeyGPcqgNfC/BF7NTqI8qbLF2tngj3rXnnvGcRnofCrPgmpvOYPzzNxrsjXMzm5aUKhTUKcyAKQ2f/Mv17to3XDTSNK6nror1GxBLTseH2T5lqCGPbmnTzWxSVmFozbhQKhaJC4gbkIHIR7OE1rCdbLgcWWhxbyK1hj5JwRuwOp9saqLhv8EWUYjazOO6CCEncpKgKqCFwxfSwLK1shRCAqoTwVBiBBIoLDjVElILamxPRFuEJuYgoyTTHGXgZkb9hzmKKvCDmdDGdax+OEUFSKBSKu8pziJLLKnaM7catngoXRPOqlhbHX8X+hlZ9ELs7FzvHK+59/BA33QKE0fA18B9E1YMRmGsx/iVEuOwm4oa8FmEs3DSNr4TIsdhu+vdZYAdFWhSppp/2GBEgDOrCJm9/IkqdNyGSka2JRJVkRBQ2hjqLqFqyfMTe+tYoFAqF47jT/g8piJ3aDTvGHkUsdubcANYgEivNSUbkSdjDYWCDnXNQ3B+cQSRMOiMy5r0R4YBDCEEoSyPiALAOkVHfBOGByEXc3McgpKiNCOOiOiJ85o4oIV2IKD1uhvjcmqthPo7wFPxmmlMhyQivnBNCBKs1ImTxB8Ig/tR0/ULqI8Il8RRPHvZAfK/SEflIlo9jpr9BoVAoNOH/AbJXTTF95YUiAAAAAElFTkSuQmCC "量化体积")

图 42 — 用于POSITION\_QUANTIZED语义的量化说明

offset存储在全局语义QUANTIZED\_VOLUME\_OFFSET中，scale存储在全局语义QUANTIZED\_VOLUME\_SCALE中。如果未定义这些全局语义，则无法使用POSITION\_QUANTIZED 。

可以使用以下公式将量化位置映射到局部空间：

POSITION = POSITION\_QUANTIZED \* QUANTIZED\_VOLUME\_SCALE / 65535.0 + QUANTIZED\_VOLUME\_OFFSET

应在应用任何其他转换之前解压缩压缩的属性。

#### [7.7.4.3](http://7.7.4.3/).点色

如果定义了不止一种颜色语义，则优先顺序为RGBA、RGB、RGB565，然后是CONSTANT\_RGBA。例如，如果图块的特征表同时包含RGBA和CONSTANT\_RGBA属性，则运行时将使用RGBA以每点颜色进行渲染。

如果未定义颜色语义，则运行时可以使用特定于应用程序的默认颜色自由为点着色。

在任何情况下，[3D Tiles Styling](https://portal.ogc.org/files/102132#styling-styling)都可用于在运行时更改最终呈现的颜色和其他视觉属性。

#### [7.7.4.4](http://7.7.4.4/).点法线

每点法线是一个可选属性，可以通过启用照明、隐藏表面移除和其他渲染技术来帮助提高点的视觉质量。法线将使用 tileset 变换的逆变换进行变换。

##### [7.7.4.4](http://7.7.4.4/) .1.Oct 编码法向量

Oct 编码在\*[A Survey of Efficient Representations of Independent Unit Vectors](http://jcgt.org/published/0003/02/01/)\*中有所描述。Oct 编码值存储在无符号、非标准化范围 ( \[0, 255] ) 中，然后在运行时映射到带符号的标准化范围 ( \[-1.0, 1.0] )。

注意可以在 CesiumJS 的[AttributeCompression](https://github.com/CesiumGS/cesium/blob/main/Source/Core/AttributeCompression.js)模块  中找到对这些单位向量进行编码和解码的实现 。

应在应用任何其他转换之前解压缩压缩的属性。

#### [7.7.4.5](http://7.7.4.5/).批点

可以使用BATCH\_ID语义将构成点云不同特征的点一起批处理。例如，构成房屋门的点都将分配相同的BATCH\_ID，而构成窗户的点将分配不同的BATCH\_ID。这对于为声明式样式和特定于应用程序的用例（例如填充 UI 或基于每个对象而不是每个点发出 REST API 请求）的每个对象选择和存储特定于应用程序的元数据很有用。

BATCH\_ID语义可能具有componentType UNSIGNED\_BYTE 、UNSIGNED\_SHORT或UNSIGNED\_INT 。当componentType不存在时，使用UNSIGNED\_SHORT 。全局语义BATCH\_LENGTH定义唯一batchId值的数量，类似于[Batched 3D 模型](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-batched-3d-model)标头中的batchLength字段。

#### [7.7.4.6](http://7.7.4.6/).例子

*本节内容丰富*

这些示例展示了如何为特征表生成 JSON 和二进制缓冲区。

##### [7.7.4.6](http://7.7.4.6/) .1.仅限职位

这个最小的例子在单位长度正方形的角上有四个点：

```
var featureTableJSON = {     POINTS_LENGTH : 4 ,     POSITION : {         byteOffset : 0 } }; var featureTableBinary = new Buffer ( new Float32Array ([ 0.0 , 0.0 , 0.0 , 1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 , 1.0 , 0.0 , 1.0 ])。缓冲区); 
 
 
 
    


   
      
      
      
      

```

##### [7.7.4.6](http://7.7.4.6/) .2.位置和颜色

以下示例在地球上方有四个点（红色、绿色、蓝色和黄色）。它们的位置是相对于中心定义的：

    var featureTableJSON = {     POINTS_LENGTH : 4 ,     RTC_CENTER : [ 1215013.8 , - 4736316.7 , 4081608.4 ],     POSITION : {         byteOffset : 0 },     RGB : {         byteOffset : 48 } }; var positionBinary = new Buffer ( new Float32Array ([ 0.0 , 0.0 , 0.0 , 
     
       
     
     
        
     
     
        


       
          
        1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 , 1.0 , 0.0 , 1.0 ])。缓冲区）；var colorBinary = new Buffer ( new Uint8Array ([ 255 , 0 , 0 , 0 , 255 , 0 , 0 , 0 , 255 , 255 , 255 , 0 , ]).缓冲区  
          
          


       
          
          
          
          
    ); 

    var featureTableBinary =缓冲区。concat ([ positionBinary , colorBinary ]); 

##### [7.7.4.6](http://7.7.4.6/) .3.量化位置和八进制编码法线

在此示例中，四个点的法线在八进制编码格式中指向\[0.0, 1.0, 0.0]，并且它们将放置在x和z中从-250.0到250.0单位的量化体积的角上方向：

```
var featureTableJSON = {     POINTS_LENGTH ：4 ，    QUANTIZED_VOLUME_OFFSET ：[ - 250.0，0.0 ，- 250.0     ] ，    QUANTIZED_VOLUME_SCALE ：[ 500.0，0.0，500.0 ] ，POSITION_QUANTIZED ：{     byteOffset ：0 } ，否RMAL_OCT16P : {         byteOffset : 24         } } ; var positionQuantizedBinary = 
 
   
   
 
 
    
 
 
    


 新缓冲区(新Uint16Array ([ 0 , 0 , 0 , 65535 , 0 , 0 , 0 , 0 , 65535 , 65535 , 0 , 65535 ])。缓冲区); var normalOct16PBinary = new Buffer ( new Uint8Array ([ 128 , 255 , 128 , 255 , 128 , 255 , 128  
      
      
      
      


   
     
     
     
    , 255 ]). 缓冲区）；var featureTableBinary =缓冲区。concat ([ positionQuantizedBinary , normalOct16PBinary ]); 


 
```

##### [7.7.4.6](http://7.7.4.6/) .4.批点

在此示例中，前两个点的batchId为 0，接下来的两个点的batchId为 1。请注意，批处理表只有两个名称：

```
var featureTableJSON = {     POINTS_LENGTH : 4 ,     BATCH_LENGTH : 2 ,     POSITION : {         byteOffset : 0 },     BATCH_ID : {         byteOffset : 48 ,         componentType : "UNSIGNED_BYTE" } }; var positionBinary = new Buffer ( new Float32Array ([ 0.0 , 0.0 , 0.0 , 1.0 
 
 
 
 
    
 
 
 
    


   
      
    , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 , 1.0 , 0.0 , 1.0 ])。缓冲区）；var batchIdBinary = new Buffer ( new Uint8Array ([ 0 , 0 , 1 , 1 ]). buffer ); var featureTableBinary =缓冲区。concat ([ positionBinary , batchIdBinary ]); 变量batchTableJSON  
      
      


   
    
    
    
    


 

= {    名称: [ 'object1' , 'object2' ] }; 
  

```

##### [7.7.4.6](http://7.7.4.6/) .5.每点属性

在此示例中，4 个点中的每一个都将元数据存储在批处理表 JSON 和二进制文件中。

```
var featureTableJSON = {     POINTS_LENGTH : 4 ,     POSITION : {         byteOffset : 0 } }; var featureTableBinary = new Buffer ( new Float32Array ([ 0.0 , 0.0 , 0.0 , 1.0 , 0.0 , 0.0 , 0.0 , 0.0 , 1.0 , 1.0 , 0.0 , 1.0 ])。缓冲区); 
 
 
 
    


   
      
      
      
      


var batchTableJSON = {    名称：[ 'point1' , 'point2' , 'point3' , 'point4' ] }; 
    

```

### 7.7.5. 批处理表

批处理*表*包含特定于应用程序的元数据，可由batchId索引，可用于声明式样式和特定于应用程序的用例，例如填充 UI 或发出 REST API 请求。

*   如果定义了BATCH\_ID语义，则批处理表存储每个batchId 的元数据，并且批处理表数组的长度将等于BATCH\_LENGTH。
*   如果未定义BATCH\_ID语义，则批处理表存储每个点的元数据，并且批处理表数组的长度将等于POINTS\_LENGTH。

有关详细信息，请参阅[批处理表参考。](https://portal.ogc.org/files/102132#tileformats-batchtable-batch-table)

### 7.7.6. 扩展

以下扩展可应用于点云图块。

*   [3DTILES\_draco\_point\_compression](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_draco_point_compression/README.md)

### 7.7.7. 文件扩展名和媒体类型

点云图块使用.pnts扩展名和application/octet-stream媒体类型。

显式文件扩展名是可选的。有效的实现可能会忽略它并通过其标头中的魔术字段来识别内容的格式。

### 7.7.8. 实施例

*本节内容丰富*

读取标头的代码可以在 3D Tiles 的 CesiumJS 实现中的[PointCloud3DModelTileContent.js](https://github.com/CesiumGS/cesium/blob/main/Source/Scene/PointCloud3DTileContent.js)中找到。

## 7.8. 合成的

警告

Composite 在 3D Tiles 1.1 中被弃用。请参阅[cmpt迁移指南](https://portal.ogc.org/files/102132#tileformats-gltf-composite-cmpt)。

### 7.8.1. 概述

Composite tile 格式可以将不同格式的tile 连接成一个tile *。*

3D Tiles 和 Composite tile 允许灵活地流式传输异构数据集。例如，建筑物和树木可以存储在两个单独的*批处理 3D 模型*和*实例化 3D 模型*图块中，或者使用*复合*图块将这些图块组合起来。

支持具有瓦片间（同一瓦片集中不同格式的单独瓦片）和瓦片内（同一复合瓦片中的不同瓦片格式）选项的异构数据集允许转换工具在请求数量之间进行权衡，特定类型的最佳细分，以及可见/隐藏层的流式传输方式。

复合图块是小端字节序的二进制 blob。

### 7.8.2. 布局

复合布局（破折号表示可选字段）：

![](data\:image/png;base64,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)

图 43 — 复合图块的数据布局

#### [7.8.2.1](http://7.8.2.1/).填充

块的byteLength应与 8 字节边界对齐。复合块中包含的所有块也应与 8 字节边界对齐。

### 7.8.3. 标头

16 字节的标头部分包含以下字段：

表 19——复合块的标题字段

| 字段名称 | 数据类型          | 描述                             |
| :--- | :------------ | :----------------------------- |
| 魔法   | 4 字节 ANSI 字符串 | “cmpt”。这可用于将内容标识为复合图块。         |
| 版本   | uint32        | 复合格式的版本。目前是1。                  |
| 字节长度 | uint32        | 整个复合图块的长度，包括此标头和每个内部图块，以字节为单位。 |
| Tile长度 | uint32        | Composite 中的图块数。               |

### 7.8.4. 内瓦

内部磁贴字段紧跟在标题部分之后紧密存储。以下信息描述了复合瓦片阅读器可能用来查找内部瓦片边界的所有瓦片格式的一般特征：

*   每个图块都以一个 4 字节的 ANSI 字符串magic开头，可用于确定图块格式以供进一步解析。有关可能格式的列表，请参阅[图块格式规范。](https://portal.ogc.org/files/102132#tileformats-tile-formats)复合图块可以包含复合图块。
*   每个图块的标头都包含一个uint32 byteLength，它以字节为单位定义内部图块的长度，包括其标头。这可用于遍历内部Tile。
*   对于任何图块格式的版本 1，所有图块的前 12 个字节是以下字段：

表 20——tile 格式的通用标题字段

| 字段名称 | 数据类型          | 描述               |
| :--- | :------------ | :--------------- |
| 魔法   | 4 字节 ANSI 字符串 | 指示磁贴格式           |
| 版本   | uint32        | 1个               |
| 字节长度 | uint32        | 整个图块的长度（以字节为单位）。 |

有关详细信息，请参阅每种图块格式的规范。

### 7.8.5. 文件扩展名和媒体类型

复合图块使用.cmpt扩展名和application/octet-stream媒体类型。

显式文件扩展名是可选的。有效的实现可能会忽略它并通过其标头中的魔术字段来识别内容的格式。

### 7.8.6. 实施实例

*本节内容丰富*

*   [gltf2glb 工具集中的Python packcmpt](https://github.com/Geopipe/gltf2glb)工具包含用于将一个或多个*批处理 3D 模型*或*实例化 3D 模型*图块组合到单个复合图块文件中的代码。
*    读取标题的代码可以在 3D Tiles 的 CesiumJS 实现中的[Composite3DTileContent.js](https://github.com/CesiumGS/cesium/blob/main/Source/Scene/Composite3DTileContent.js)中找到 。

# 8.隐式平铺

## 8.1. 概述

隐式平铺定义了 3D 平铺中四叉树和八叉树的简明表示。这种常规模式允许根据瓦片坐标随机访问瓦片，从而实现加速空间查询、新遍历算法和瓦片内容的高效更新，以及其他用例。

隐式切片还可以通过隐式定义的切片方案与现有 GIS 数据格式实现更好的互操作性。一些示例是[TMS](https://wiki.osgeo.org/wiki/Tile_Map_Service_Specification)、[WMTS](https://www.ogc.org/standards/wmts)、[S2](http://s2geometry.io/)和[CDB](https://docs.opengeospatial.org/is/15-113r5/15-113r5.html)。

为了支持稀疏数据集，**可用性**数据决定了存在哪些切片。为了支持海量数据集，可用性被划分为固定大小的**子树**。子树可以存储可用图块和内容的**元数据。**

可以将implicitTiling对象添加到 tileset JSON 中的任何 tile。该对象定义了磁贴的细分方式以及内容资源的定位方式。它可以添加到多个图块以创建更复杂的细分方案。

![image](https://github.com/CHENJIAMIAN/Blog/assets/20126997/f45eb369-b67b-44a4-b776-c37eab38a627)

图 44 — 组织成稀疏八叉树的点云。数据来源：天宝

## 8.2. 隐根瓦片
可以将implicitTiling对象添加到 tileset JSON 中的任何 tile。这样的瓦片称为**隐式根瓦片**，以区别于瓦片集 JSON 的根瓦片。

```
{ “root” ：{ “boundingVolume” ：{ “region” ：[- 1.318 , 0.697 , - 1.319 , 0.698 , 0 , 20 ] }, “refine” : “REPLACE” , “geometricError” : 5000 , “content” : { “uri” ：“content/{level}/{x}/{y}.glb” }，“implicitTiling” ：{ “subdivisionScheme” ：“QUADTREE”，“可用级别” ：
   
     
            
    
     
     
     
       
    
     
       
       21 ，“subtreeLevels” ：7 ，“subtrees” ：{ “uri” ：“subtrees/{level}/{x}/{y}.json” } } } }
       
       
         
      
    
  

```

implicitTiling对象具有以下属性：

表 21——隐式平铺对象的属性

| 财产   | 描述                                                                                      |
| :--- | :-------------------------------------------------------------------------------------- |
| 细分方案 | 四叉树或八叉树。见[细分方案](https://portal.ogc.org/files/102132#implicittiling-subdivision-scheme)。 |
| 可用级别 | 树中有多少层可用的图块。                                                                            |
| 子树级别 | 每个子树中有多少层。                                                                              |
| 子树   | 子树文件的模板 URI。请参阅[子树](https://portal.ogc.org/files/102132#implicittiling-subtrees)。       |

[模板 URI](https://portal.ogc.org/files/102132#implicittiling-template-uris)用于定位子树文件和磁贴内容。对于内容，模板 URI 在 tile 的content.uri属性中指定。

以下约束适用于隐式根切片：

*   Tile应省略儿童财产
*   磁贴应省略元数据属性
*   content.uri不应指向外部[tileset](https://portal.ogc.org/files/102132#core-external-tilesets)
*   内容应省略boundingVolume属性

## 8.3. 细分方案

**细分方案**是一种递归模式，用于将图块的边界体积划分为占用相同空间的更小的子图块。

**四叉树**仅在x和y维度上划分空间。它将每个图块分成 4 个较小的图块，其中x和y维度减半。四叉树z 的最小值和最大值保持不变。生成的树每个图块有 4 个孩子。

![image](https://github.com/CHENJIAMIAN/Blog/assets/20126997/ca52e774-8f1c-40fb-a508-08a6fa6b5f53)

图 46——八叉树中的细分

对于区域边界体积，x、y和z分别指代longitude、latitude和height。

球体边界体积是不允许的，因为它们不能分为四叉树或八叉树。

有关 S2 边界体积的细分，请参阅[3DTILES\_bounding\_volume\_S2](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md#implicit-subdivision)。

下图说明了 3D Tiles 支持的包围体类型的细分：

表 22——边界框的细分

| 根箱 | 四叉树 | 八叉树 |
| ---- | ------ | ------ |
|   ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/d0e8fb3a-1189-4b48-baff-2789b30791d4) |    ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/a2de7c2b-9a2b-493f-990e-d36684209db8)|   ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/9a9d382e-ac4c-4efd-ab0f-0d868221c861) |



表 23——边界区域的细分

| 根区域 | 四叉树 | 八叉树 |
| ------ | ------ | ------ |
|    ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/3806e064-6405-4545-bbd8-65667982dbe5)    |    ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/a88dcaca-edb3-430f-bcd1-e79661fa01c0)    |   ![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/0319452f-be2d-4c69-a7bc-16bca1a5da09)     |

### 8.3.1. 细分规则

隐式分块只需要在隐式根分块处定义细分方案、细化策略、边界体积和几何误差。对于后代图块，这些属性是根据以下规则自动计算的：

表 24——隐式分块的细分规则

| 财产                                                                                                                                                                                                                                                                                       | 细分规则                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| `细分方案`                                                                                                                                                                                                                                                                                   | 所有后代瓦片的常量               |
| `提炼`                                                                                                                                                                                                                                                                                     | 所有后代瓦片的常量               |
| `边界体积`                                                                                                                                                                                                                                                                                   | `根据细分方案`分为四或八部分``       |
| `几何误差`                                                                                                                                                                                                                                                                                   | 每个孩子的`几何误差`是其父`几何误差的一半` |
| 注意  为了在此细分过程中保持数值稳定性，不应通过细分非根瓦片体积来逐步计算实际包围体积。相反，应该直接为给定级别计算精确的边界体积。设根边界体积沿一维*d 的*范围为 *(min d , max d )* 。对于给定级别，沿该维度的边界体积数为*2级别*。这个级别的每个边界体积的大小，沿着维度*d*，是*大小d = (max d  - min d ) / 2 level*。孩子的边界体积的范围可以直接计算为 *(min d + size d * i, min d + size d * (i + 1))* ，其中*i* *是子元素在维度d*中的索引。 |                         |

如果需要，可以使用[tile metadata](https://portal.ogc.org/files/102132#implicittiling-tile-metadata)覆盖计算出的 tile `boundingVolume`和`geometricError`。内容边界体积不是自动计算的，但它们可能由[内容元数据](https://portal.ogc.org/files/102132#implicittiling-content-metadata)提供。平铺和内容包围体应保持[空间连贯性](https://portal.ogc.org/files/102132#core-bounding-volume-spatial-coherence)。[](https://portal.ogc.org/files/102132#implicittiling-tile-metadata)[](https://portal.ogc.org/files/102132#implicittiling-content-metadata)[](https://portal.ogc.org/files/102132#core-bounding-volume-spatial-coherence)

## [](https://portal.ogc.org/files/102132#toc35)8.4. 平铺坐标

**瓦片坐标**是唯一标识瓦片的整数元组。四叉树的平铺坐标是`(level, x, y)`或八叉树的`(level, x, y, z)`。所有图块坐标都是从 0 开始索引的。

``对于隐式根瓦片，`级别为 0。`这个 tile 的子级是 1 级，依此类推。

`x`、`y`和`z`坐标定义图块在关卡中的位置。

对于`框`边界体积：

表 25——边界区域的瓦片坐标

| 协调  | 正方向        |
| --- | ---------- |
| `X` | 沿边界框的`+x轴` |
| `是` | 沿边界框的`+y轴` |
| `z` | 沿边界框的`+z轴` |

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/c83b7b92-b6d3-4909-8400-432f578591b8)

图 47 — 带有边界框的八叉树节点及其子节点的坐标

对于`区域`边界体积：

表 26——边界区域的瓦片坐标

| 协调  | 正方向        |
| --- | ---------- |
| `X` | 从西向东（增加经度） |
| `是` | 从南到北（纬度增加） |
| `z` | 从下到上（增加高度） |

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/2b0ac175-85d5-4f15-abfe-2d18e1f9817b)

图 48 — 具有边界区域的八叉树节点及其子节点的坐标

## 8.5. 模板 URI

**模板 URI**是一种URI 模式，用于通过图块坐标引用图块。

模板 URI 应包括变量`{level}`、`{x}`、`{y}`。八叉树的模板 URI 还应包括`{z}`。当引用特定的图块时，图块的坐标将替换这些变量。

当作为相对路径给出时，模板 URI 是相对于 tileset JSON 文件解析的。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/42060f92-4577-4bf3-8e73-6dc94bfc7a9f)

图 49——用于标识隐式图块内容的模板 URI 示例

## [](https://portal.ogc.org/files/102132#toc37)8.6. 子树

为了支持稀疏数据集，需要额外的信息来指示存在哪些图块或内容。这称为**可用性**。

**子树**是 tileset 树的固定大小部分，用于存储可用性。tileset 被划分为子树以限制每个可用性缓冲区的大小，以实现最佳网络传输和缓存。subtreeLevels属性定义每个子树中`的`级别数。细分方案决定了每个瓦片的孩子数量。

![子树解剖](https://github.com/CHENJIAMIAN/Blog/assets/20126997/8d262691-8a23-4761-986e-5017e1b0e6f9)

图 50——隐式平铺的子树结构

将 tileset 划分为子树后，结果是一棵子树。

![子树的树](https://github.com/CHENJIAMIAN/Blog/assets/20126997/dc5b378a-e7a7-42c8-9d6c-d2f65967e384)

图 51 — 表示隐式图块集的子树树

### [](https://portal.ogc.org/files/102132#8-6-1-%C2%A0-availability)8.6.1. 可用性

每个子树都包含磁贴可用性、内容可用性和子树可用性。

-   **瓦片可用性**指示子树中存在哪些瓦片
-   **内容可用性**指示哪些磁贴具有关联的内容资源
-   **子树可用性**表示可以从此子树访问哪些子树

每种类型的可用性都表示为单独的比特流。每个比特流都是一维数组，其中每个元素代表四叉树或八叉树中的一个节点。1 位表示该元素可用，而 0 位表示该元素不可用。或者，如果比特流中的所有比特都相同，则可以改为使用单个常量值。

为了形成 1D 比特流，图块按以下规则排序：

-   [在子树的每个级别中，使用Morton Z 顺序曲线对](https://en.wikipedia.org/wiki/Z-order_curve)图块进行排序[](https://en.wikipedia.org/wiki/Z-order_curve)
-   每个级别的比特被连接成一个比特流

![可用性订购](https://github.com/CHENJIAMIAN/Blog/assets/20126997/bca7c395-4ca8-48d3-b5de-cce2300f8dd0)

图 52——基于隐式块的坐标计算用于访问可用性比特流的索引

在上图中，彩色单元格代表 1 位，灰色单元格代表 0 位。

按 Morton 顺序存储磁贴具有以下好处：

-   高效索引 - 块的 Morton 索引是通过交织位在恒定时间内计算的。
-   高效遍历——父块或子块的莫顿索引分别通过删除或添加位在恒定时间内计算。
-   Locality of reference——连续的图块在 3D 空间中彼此靠近。
-   更好的压缩——参考的局部性导致可用性比特流的更好压缩。

有关使用 Morton 索引和可用性比特流的更多详细信息，请参阅[可用性索引](https://portal.ogc.org/files/102132#implicittiling-availability-indexing)。

#### [](https://portal.ogc.org/files/102132#8-6-1-1-%C2%A0-tile-availability)[8.6.1.1](http://8.6.1.1/).Tile可用性

瓦片可用性决定子树中存在哪些瓦片。

磁贴可用性具有以下限制：

-   如果非根瓦片的可用性为 1，则其父瓦片的可用性也应为 1。
-   一棵子树应至少有一个可用的图块。

![Tile可用性](https://github.com/CHENJIAMIAN/Blog/assets/20126997/5197ee3b-636f-4be4-8e60-bee622668197)

图 53 — 图块可用性比特流的图示。可用的区块在比特流中用`1`表示。

#### [](https://portal.ogc.org/files/102132#8-6-1-2-%C2%A0-content-availability)[8.6.1.2](http://8.6.1.2/).内容可用性

内容可用性决定了哪些磁贴具有内容资源。`使用content.uri`模板 URI定位内容资源。如果没有带有内容资源的图块，则应省略`tile.content 。`

内容可用性有以下限制：

-   如果内容可用性为 1，则其对应的图块可用性也应为 1。否则，可以指定图块集中的图块无法访问的内容文件。
-   如果内容可用性为 0 且其对应的磁贴可用性为 1，则该磁贴被视为空磁贴。

![内容可用性](https://github.com/CHENJIAMIAN/Blog/assets/20126997/fdd198f5-6c11-46ce-9635-fe4f34035ad7)

图 54 — 内容可用性比特流的图示。具有关联内容的图块在比特流中用`1表示。`

#### [](https://portal.ogc.org/files/102132#8-6-1-3-%C2%A0-child-subtree-availability)[8.6.1.3](http://8.6.1.3/).子树可用性

子树可用性决定了哪些子树可以从该子树的最深层到达。这将子树链接在一起形成一棵树。

与为子树中的每个级别存储位的图块和内容可用性不同，子树可用性为比子树最深级别更深一级的节点存储位，并表示子子树的根节点。这用于确定在请求图块之前可以访问哪些其他子树。如果所有子树的可用性为 0，则 tileset 不会进一步细分。

![子树可用性](https://github.com/CHENJIAMIAN/Blog/assets/20126997/f4e14397-cf8c-4f16-a43b-db225b978b1e)

图 55 — 子树可用性比特流的图示。作为可用子树根的图块在比特流中由`1表示。`

### [](https://portal.ogc.org/files/102132#8-6-2-%C2%A0-metadata)8.6.2. 元数据

子树可以以多种粒度存储元数据。

-   **Tile metadata**  — 子树中可用图块的元数据
-   **内容元数据** ——子树中可用内容的元数据
-   **子树元数据** ——关于整个子树的元数据

#### [](https://portal.ogc.org/files/102132#8-6-2-1-%C2%A0-tile-metadata)[8.6.2.1](http://8.6.2.1/).磁贴元数据

当图块在图块集中显式列出时，每个图块的元数据也会显式嵌入图块定义中。当 tile 层次结构是*implicit*时，由隐式切片启用，切片不会详尽列出，元数据不能直接嵌入切片定义中。为了支持隐式切片方案中切片的元数据，子树中所有可用切片的属性值都在[属性表](https://portal.ogc.org/files/102132#metadata-referenceimplementation-propertytable-property-table-implementation)中进行编码。二进制表示对于具有许多图块的较大数据集特别有效。

Tile 元数据仅存在于可用的 tiles 中，并根据[Availability Ordering](https://portal.ogc.org/files/102132#implicittiling-availability)由递增的 tile 索引紧密打包。[*每个可用的图块都应有一个值——只有使用二进制表格式*](https://portal.ogc.org/files/102132#metadata-binary-table-format)规范定义的`noData`指示符才能在图块中表示缺失值。[**](https://portal.ogc.org/files/102132#metadata-binary-table-format)

注 1  要确定特定图块的属性值数组的索引，请根据图块可用性排序计算在该索引之前出现的可用图块的数量。如果`i 个`可用图块出现在特定图块之前，则该图块的属性值存储在每个属性值数组的索引`i处。`这些索引可以针对所有可用区块预先计算，作为子树可用性缓冲区的单次传递。

Tile 属性可以具有定义属性值应如何解释的[语义。](https://portal.ogc.org/files/102132#metadata-semantics-3d-metadata-semantic-reference)特别是，`TILE_BOUNDING_BOX`、`TILE_BOUNDING_REGION`、`TILE_BOUNDING_SPHERE`、`TILE_MINIMUM_HEIGHT`和`TILE_MAXIMUM_HEIGHT`语义各自为图块定义了比从隐式平铺隐式计算的更具体的边界体积。如果这些语义中的一种以上可用于磁贴，则客户可以根据用例和性能要求选择最合适的选项。

注 2  下图显示了图块高度语义如何用于为隐式图块集定义更紧密的边界区域：整个图块集边界区域的总高度为 320。子图块的边界区域将通过拆分各自父图块在其中心的边界区域。默认情况下，高度将保持不变。通过存储相应区域中内容的*实际高度，并将其作为每个可用图块的*`TILE_MAXIMUM_HEIGHT`提供，可以为每个级别定义最紧密的边界区域。

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/3b731b55-66f6-4eed-8f34-c4f2247926cc)

`图 56 — 使用TILE_MAXIMUM_HEIGHT`语义存储单个图块实际高度的图示

TILE_GEOMETRIC_ERROR语义允许图块提供覆盖隐式计算的几何误差的几何误差`。`

#### [8.6.2.2](http://8.6.2.2/).内容元数据

子树还可以存储图块内容的元数据。内容元数据仅针对可用内容而存在，并通过增加的图块索引进行紧密打包。\*[二进制属性值以 3D 元数据规范定义的紧凑二进制表格式](https://portal.ogc.org/files/102132#metadata-binary-table-format)\*进行编码，并存储在[属性表](https://portal.ogc.org/files/102132#metadata-referenceimplementation-propertytable-property-table-implementation)中。如果隐式根瓦片有多个内容，则内容元数据存储在多个属性表中。

内容边界体积不会通过隐式平铺自动计算，但可以由具有语义CONTENT\_BOUNDING\_BOX、CONTENT\_BOUNDING\_REGION、CONTENT\_BOUNDING\_SPHERE、CONTENT\_MINIMUM\_HEIGHT和CONTENT\_MAXIMUM\_HEIGHT的属性提供。

如果将图块内容分配给一个[组](https://portal.ogc.org/files/102132#core-tile-content)，则隐式树中的所有内容都将分配给该组。

#### [8.6.2.3](http://8.6.2.3/).子树元数据

分配给子树的属性提供关于整个子树的元数据。子树元数据根据[JSON 格式](https://portal.ogc.org/files/102132#metadata-json-format)规范以 JSON 编码。

## 8.7. 子树 JSON 格式

*[在subtree.schema.json](https://portal.ogc.org/files/102132#reference-schema-subtree)中定义。*

子**树文件**是一个 JSON 文件，其中包含单个子树的可用性和元数据信息。子树可以引用包含二进制数据的外部文件。另一种[二进制格式](https://portal.ogc.org/files/102132#implicittiling-subtree-binary-format)允许将 JSON 和二进制数据嵌入到单个二进制文件中。

### 8.7.1. 缓冲区和缓冲区视图

属性[表基于作为](https://portal.ogc.org/files/102132#metadata-referenceimplementation-propertytable-property-table-implementation)*缓冲区*一部分*的缓冲区视图*以二进制形式定义元数据的存储。

缓冲区是一个二进制 blob \*\*。\*\*每个缓冲区都有一个指向包含缓冲区数据的外部文件的uri和一个以字节为单位描述缓冲区大小的byteLength 。相对路径是相对于子树文件的。不允许使用数据 URI。

在[二进制格式](https://portal.ogc.org/files/102132#implicittiling-subtree-binary-format)中，第一个缓冲区可能会引用子树文件的二进制块，在这种情况下，uri属性应该是未定义的。此缓冲区称为*内部缓冲区*。

**缓冲区视图**是缓冲区的连续子集。缓冲区视图的缓冲区属性是一个整数索引，用于标识缓冲区。缓冲区视图有一个byteOffset和一个byteLength来描述缓冲区内的字节范围。byteLength不包括任何填充。可能有多个缓冲区视图引用单个缓冲区。

为了高效的内存访问，缓冲区视图的byteOffset应对齐到 8 字节的倍数。

### 8.7.2. 可用性

应始终为子树提供图块可用性 ( tileAvailability ) 和子树可用性 ( childSubtreeAvailability )。

内容可用性 ( contentAvailability ) 是一组内容可用性对象。如果隐式根瓦片只有一个内容，则该数组将只有一个元素；如果 tile 有多个内容，这个数组将有多个元素。如果隐式根瓦片没有​​内容，则应省略contentAvailability 。

可用性可以表示为比特流或常量值。比特流是一个整数索引，用于标识包含可用性比特流的缓冲区视图。constant是一个整数，指示是所有元素都可用 ( 1 ) 还是所有元素都不可用 ( 0 )。availableCount是一个整数，指示可用性比特流中存在多少个1比特。

可用性比特流使用3D 元数据规范的[布尔部分中描述的格式以二进制形式打包。](https://portal.ogc.org/files/102132#metadata-booleans)

注意  子树的 JSON 描述，其中每个图块都可用，但并非所有图块都有内容，并且并非所有子树都可用：

```
{ “缓冲区” ：[ { “名称” ：“内部缓冲区” ，“byteLength” ：16 }，{ “名称” ：“外部缓冲区” ，“uri” ：“external.bin” ，“byteLength” ：32 } ] , "bufferViews" : [ { "buffer" : 0 , "byteOffset" : 0 , "byteLength" : 11 }, { "buffer"：1 ，“字节偏移量” ：
   
    
       
       
    
    
       
       
       
    
  
   
    
       
       
       
    
    
       
       0 ，“byteLength” ：32 } ]，“tileAvailability” ：{ “常量” ：1 ，}，“contentAvailability” ：[{ “bitstream” ：0 ，“availableCount” ：60 }]，“childSubtreeAvailability” ：{ “bitstream” “ ：1 } }
       
    
  
   
     
  
   
     
     
  
   
     
  

```

瓦片可用性可以通过将[tileAvailability.constant](http://tileavailability.constant/)设置为1来编码，不需要显式比特流，因为子树中的所有瓦片都可用。

只有一些瓦片有内容，并且contentAvailability.bufferView指示存储内容可用性的比特流的位置：索引为 0 的bufferView指的是索引为 0 的缓冲区。此缓冲区没有uri属性，因此指的是*内部*缓冲区直接存储在子树二进制文件的二进制块中。byteOffset和byteLength表示内容可用性比特流存储在内部缓冲区的字节\[ 0…11)中。

存在一些子树，因此childSubtreeAvailability.bufferView引用另一个比特流。索引为 1 的 bufferView指的是索引为1的缓冲区。这个缓冲区有一个uri属性，表示第二个比特流存储在一个外部二进制文件中。

### 8.7.3. 元数据

子树可以以多种粒度存储元数据。tileMetadata是包含可用图块元数据的属性表。contentMetadata是一组属性表，其中包含可用内容的元数据。如果隐式根瓦片只有一个内容，则该数组将只有一个元素；如果 tile 有多个内容，那么这个数组将有多个元素。如果隐式根瓦片没有​​内容，则应省略contentMetadata 。

子树元数据 ( subtreeMetadata ) 根据[JSON 格式](https://portal.ogc.org/files/102132#metadata-json-format)规范以 JSON 编码。

注意  使用图块、内容和子树元数据扩展的子树的相同 JSON 描述。子树 JSON 引用根 tileset 模式中的类 ID。Tile 和内容元数据存储在[属性表](https://portal.ogc.org/files/102132#metadata-referenceimplementation-propertytable-property-table-implementation)中；子树元数据直接用 JSON 编码。

*根 tileset JSON 中的模式*

```
{ “ schema ”: { “ classes ”: { “ tile ”: { “ properties ”: { “ horizo​​nOcclusionPoint ”: { “ semantic ”: “ TILE_HORIZON_OCCLUSION_POINT ”, “ type ”: “ VEC3 ”, “ componentType ”: “ FLOAT64 ”, }, “ countries ”: { “ description ”: “ countries a tile 相交
   
     
       
         
           
             
             
             
          
           
             ”，“类型”：“字符串”，“数组”：真} } }，“内容”：{ “属性”：{ “ attributionIds ”：{ “语义”：“ ATTRIBUTION_IDS ”，“类型”：“标量”，“ componentType ”: “ UINT16 ”, “ array ”: true }, “ minimumHeight ”:
             
             
          
        
      
       
         
           
             
             
             
             
          
           { “ semantic ”：“ CONTENT_MINIMUM_HEIGHT ”，“ type ”：“ SCALAR ”，“ componentType ”：“ FLOAT64 ” }，“ maximumHeight ”：{ “ semantic ”：“ CONTENT_MAXIMUM_HEIGHT ”，“ type ”：“ SCALAR ”，“ componentType ” : “ FLOAT64 ” }, “ triangleCount ”: { “类型”:
             
             
             
          
           
             
             
             
          
           
             “ SCALAR ”，“ componentType ”：“ UINT32 ” } } }，“子树”：{ “属性”：{ “ attributionStrings ”：{ “语义”：“ ATTRIBUTION_STRINGS ”，“类型”：“ STRING ”，“数组”：真} } } } } }
             
          
        
      
       
         
           
             
             
             
          
        
      
    
  

```

*子树 JSON*

```
{ “缓冲区”：[ { “名称”：“可用性缓冲区”，“ uri ”：“可用性。bin ”, “ byteLength ”: 48 }, { “ name ”: “元数据缓冲区”, “ uri ”: “元数据。bin ”, “ byteLength ”: 6512 } ], “ bufferViews ”: [ {
   
    
        
       
       
    
    
        
       
       
    
  
   
     “ buffer ”：0 ，“ byteOffset ”：0 ，“ byteLength ”：11 }，{ “ buffer ”：0 ，“ byteOffset ”：16 ，“ byteLength ”：32 }，{ “ buffer ”：1 ，“ byteOffset ”：0 , “ byteLength ”: 2040 }, { “缓冲区”: 1 , “      
           
           
       byteOffset ”：2040 ，“ byteLength ”：1530 }，{ “ buffer ”：1 ，“ byteOffset ”：3576 ，“ byteLength ”：344 }，{ “ buffer ”：1 ，“ byteOffset ”：3920 ，“ byteLength ”：1024 }, { “缓冲区”: 1 , “ byteOffset ”: 4944 , “    
           
           
         byteLength ”：240 }，{ “ buffer ”：1 ，“ byteOffset ”：5184 ，“ byteLength ”：122 }，{ “ buffer ”：1 ，“ byteOffset ”：5312 ，“ byteLength ”：480 }，{ “ buffer ” : 1 , “ byteOffset ”: 5792 , “ byteLength ”: 480 }, {  
           
           
           
     “ buffer ”：1 ，“ byteOffset ”：6272 ，“ byteLength ”：240 } }]，“ propertyTables ”：[ { “ class ”：“ tile ”，“ count ”：85 ，“ properties ”：{ “ horizo​​nOcclusionPoint ”：{ “价值观”：2 }，“国家”：{ “价值观”：3      
  
   
    
       
       
       
         
           
        
         
           ，“ arrayOffsets ”：4 ，“ stringOffsets ”：5 ，“ arrayOffsetType ”：“ UINT32 ”，“ stringOffsetType ”：“ UINT32 ” } } }，{ “ class ”：“ content ”，“ count ”：60 ，“ properties ” : { “ attributionIds ”: { “值”: 6 , “
           
           
           
           
        
      
    
    
       
       
       
         
           
          arrayOffsets ”：7 ，“ arrayOffsetType ”：“ UINT16 ” }，“ minimumHeight ”：{ “ values ”：8 }，“ maximumHeight ”：{ “ values ”：9 }，“ triangleCount ”：{ “ values ”：10 ，“最小”：520 ，“最大”：31902 } } } ]，“ 
           
        
         
           
        
         
           
        
         
           
           
           
        
      
    
  
  tileAvailability ”：{ “常量”：1 }，“ contentAvailability ”：[{ “ bitstream ”：0 ，“ availableCount ”：60 }]，“ childSubtreeAvailability ”：{ “ bitstream ”：1 }，“ tileMetadata ”：0 ，“ contentMetadata ”: [ 1 ], “ subtreeMetadata ”: { “ class ”: “ 
     
  
   
     
     
  
   
     
  
   
   
   
     subtree ”, “ properties ”: { “ attributionStrings ”: [ “ Source A ”, “ Source B ”, “ Source C ”, “ Source D ” ] } } }
     
       
        
        
        
        
      
    
  

```

### 8.7.4. 多个内容

当隐式根图块具有多个内容时，将为每个内容层提供contentAvailability和contentMetadata 。

注意  具有多个内容的子树的 JSON 描述。在此示例中，所有图块都可用，所有建筑内容都可用，只有一些树内容可用。

*隐根瓦片*

```
{ “ root ”: { “ boundingVolume ”: { “ region ”: [- 1.318 , 0.697 , - 1.319 , 0.698 , 0 , 20 ] }, “ refine ”: “ ADD ”, “ geometricError ”: 5000 , “ contents ”: [ { “ uri ”: “ buildings /{ level }/{ x }/{ y
   
     
            
    
     
     
     
      
         }. glb ”，}，{ “ uri ”：“树/{级别}/{ x }/{ y }。glb ”, } ], “ implicitTiling ”: { “ subdivisionScheme ”: “ QUADTREE ”, “ availableLevels ”: 21 , “ subtreeLevels ”: 7 , “ subtrees ”: { “ uri ”: “ subtrees /{ level
      
      
         
      
    
     
       
       
       
       
         }/{ x }/{ y }。JSON ” } } } }
      
    
  

```

*子树 JSON*

```
{ “ propertyTables ”：[ { “ class ”：“ building ”，“ count ”：85 ，“ properties ”：{ “ height ”：{ “ values ”：1 }，“ owners ”：{ “ values ”：2 ，“ arrayOffsets ”: 3 , “ stringOffsets ”: 4 } } }, { “类
   
    
       
       
       
         
           
        
         
           
           
           
        
      
    
    
      ”：“树”，“计数”：52 ，“属性”：{ “高度”：{ “值”：5 }，“物种”：{ “值”：6 } }} } ]，“ tileAvailability ”：{ “常量”：1 }，“ contentAvailability ”：[ { “常量”：1 }，{ 
       
       
         
           
        
         
           
        
      
    
  
   
     
  
   
    
       
    
    
      “ bitstream ”：0 ，“ availableCount ” ：52 } }]，“ childSubtreeAvailability ” ：{ “常量”：1 }，“ contentMetadata ”：[ 0，1 ] } 
       
    
  
   
     
  
    

```

## 8.8. 子树二进制格式

子树二进制格式是 JSON 文件格式的替代格式，它允许将 JSON 和二进制数据嵌入到单个二进制文件中。

二进制子树格式是小端格式，由一个 24 字节的标头和一个可变长度的有效负载组成：

![子树二进制格式](data\:image/png;base64,iVBORw0KGgoAAAANSUhEUgAADKIAAAJ+CAIAAAC16d72AAAAA3NCSVQICAjb4U/gAAAAEHRFWHRTb2Z0d2FyZQBTaHV0dGVyY4LQCQAAIABJREFUeNrs3Xt0VeWB8OE3gXCX0KJQgXJRsVQRDdQFUhUQxZZLCWgBlTQitC4ZqpXOgnbNmlrsjNJ2LDCt1bqqUqFFuUgE1FVAhCmIgi7iKLWCFyQgpAgJxFBNQvL9cb51vny5GVICL/g8f53ud5993rPPeRNW/HXvlIqKigAAAAAAAAAAAECsUp0CAAAAAAAAAACAmMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAgAAAAAAAAAAiJrMCwAAAAAAAAAAIGoyLwAAAAAAAAAAgKjJvAAAAAAAAAAAAKIm8wIAAAAAAAAAAIiazAsAAAAAAAAAACBqMi8AAAAAAAAAAICoybwAAAAAAAAAAACiJvMCAAAAAAAAAACImswLAAAAAAAAAAAgajIvAAAAAAAAAACAqMm8AAAAAAAAAAAAoibzAuBz4d577+3cuXPnzp29rwiNHz++c+fO1113nS8qAAAAAAAAQI2aOgUANLbXX3/9mWee2bRp0969e4uKitLT0y+88MJhw4ZNmDChbdu29T/O2rVrs7OzQwiXX355Tk6OEwsAAAAAAADA54SreQHQiD744INbbrll+PDhv/vd7958882CgoKysrKDBw9u3rx51qxZgwcPfvXVV+t5qPz8/Lvvvvu0eNePPPJI586dt2/f7gsAAAAAAAAAwAnhal4ANJa333571KhRxcXFIYQhQ4YMGzbswgsvbNOmzf79+1etWrV06dL8/PyJEyeuXr26a9eudR+qoqLirrvuOnTo0Nlnn/3RRx9F/sZfeOEFnz4AAAAAAAAAJ5DMC4DG8pWvfOWaa655//33H3jggd69eye39+7d+9prr/3617/+gx/8oKio6IEHHpg3b17dh3rooYf+8pe/XHDBBQMHDnziiSdiftfFxcWvvPKKTx8AAAAAAACAE8hNGwFoRPPmzVu1alXlxivp29/+9mWXXRZCWLNmTd0H+d///d+f//znIYSf/exnn3zyyT8zn5SUlMZ+y4sXLy4tLfXRAwAAAAAAAHACuZoXAI2oefPmdYz269cvNzf38OHDxcXFrVu3rnGfo0eP/su//EtZWdnEiROvvvrqJ5988p+ZT5MmTRLHnD9//nPPPbdr167i4uL27dt/7Wtfu+mmmwYNGlR558zMzK1bt7Zr127btm3NmjWr8YAffvhh//79y8vLb7nlliuvvHLOnDk7duxIDA0bNqzynm+99Vbbtm0rb8nPz3/sscfWrVuXl5dXUlLSsWPHAQMG3HrrrZdeemnD3l1paemTTz75zDPP7Ny5s7CwsG3btl/5yle++c1v3nzzzS1btqztWQ2Yxl//+tdVq1Zt2bIl8ULNmjU799xzBwwYcNttt/Xq1au2Z33wwQePPvro+vXr9+3bl5qa2qlTpyFDhkyePLlz585Nm37GP0ieffbZp59+Ojc39+DBg61bt77wwguHDx+elZXVokWLKnuuXbs2Ozu7Z8+e69evDyHs2rXrwQcf/Mtf/rJ3797y8vLHH3+8yucCAAAAAAAAcFqQeQFwyiSuepWSklJbRBVC+Ld/+7f33nuvZ8+es2bNSj6lwVq1arVz586srKy8vLzkxn379q1cuXLlypU33HDDr371q2RylJWVtXXr1sLCwueeey4zM7PGAy5durS8vDyEMH78+NmzZ+/Zs6dZs2YlJSUhhBYtWqSm1nrVzOXLl8+YMePo0aPJLbt37969e/eSJUu+//3vz5w587jeV7NmzfLy8rKzs99+++3kxkOHDm3evHnz5s0LFixYvHhxhw4dTsg0pk2btnz58spbysrK3n333Xffffepp56aN29ejedq8eLFM2fOTJyZhB07duzYsWPhwoVz585t06ZNbW/tyJEjU6ZM2bRpU3JLYWHhli1btmzZ8thjjy1cuPD888+v/qwDBw6EENatW3f77bdXfnfdunWz7gAAAAAAAIDTkcwLgFPmb3/7WwjhvPPOS0tLq3GHlStXLl68uFmzZg899FDiuk2JpqrBKioqbrrppgMHDmRlZX3jG9/o0qVLaWnp9u3bH3nkke3bty9btqxVq1azZ89O7Dxq1Kh77rmnoKBg0aJFtWVey5YtCyH07NmzX79+S5YsSWy58847QwgrVqy4+OKLa3zWs88+e+edd5aXl3fv3v2OO+7o169fWlra22+//dvf/jY3N/e///u/W7duPW3atPq/r+bNm3/nO9955513xo4dO2rUqG7dujVt2vTdd9999NFHN27cuHPnzh/+8IcLFiw4IdO44IILmjZtOnTo0Ouuu+6SSy754he/eOTIkdWrV8+ZM6ekpORf//Vfr7766i9+8YuVn7J27drp06dXVFS0bt166tSpgwcPbtu2bX5+/oYNGx5//PGpU6fWVl+VlpZOmDDh9ddfT01NnTBhwujRozt16lRYWLhmzZrf/e53u3fvHjdu3Nq1a7/whS9UeeLhw4ffeOONyZMnl5WVZWZmDho0qEWLFnl5eTIvAAAAAAAA4DQl8wLg1Ni9e/drr70WQhgxYkSNO+zZs2fGjBkhhH//93//6le/mthYUVHxz7xoUVFRcXHxwoULK9+f8atf/ero0aOzs7M3bNiwcOHCcePG9e3bN4TQrFmz8ePHP/zww5s2bdq9e3fXrl2rHC03N/edd94JIYwfP77+czh48OCMGTPKy8t79+69bNmy5IWsLrjggmHDhk2cOHHjxo2//OUvMzMzu3TpUv/3VVRU9PDDD48aNSq58fzzz7/22msnTpy4YcOGdevWffDBB5UjpwZPY9KkSTfffHPla4N16tSpV69eHTt2nD59+j/+8Y9nn302KysrOVpSUjJjxoyKioo2bdrk5OQkP8rzzjvviiuuuOGGGzIzMxOnsbo5c+a8/vrrIYS5c+fecMMNye19+/YdOHDgzTffvH///vvvv/8Xv/hFlSdWVFRMmjSpefPmixYtGjBggOUGAAAAAAAAnO5SnQIATon777//2LFjLVu2nDRpUvXRY8eOTZs27ciRI0OHDr3ttttO4Osmru1UZWNaWtovfvGLJk2aVFRUzJ8/P7k9KysrJSWloqJi0aJF1Q+VuJRX06ZNb7zxxvpPYMGCBYWFhampqb/85S+r3KwwLS0tcW/KsrKyhQsXHtf7GjlyZOXG6//+mk9Nvf322xOPt27dekKmkZ6eXuP9H8eOHZu44tr27dsrb3/++efz8/NDCHfeeWey8Urq2bPn3XffXeM7Ki4ufuyxx0II119/feXGK+Gqq676xje+EUJYsmRJUVFR9afv27fvwQcf1HgBAAAAAAAAZwaZFwCnwPLly1esWBFC+PGPf1xjMzR37tytW7d26NBhzpw5J/alR44cWeP2Ll269O/fP4SwYcOG5Mbu3btfeeWVIYTFixcfO3as8v6lpaU5OTkhhGuuueacc86p/wQSb7xPnz59+vSpPtqrV68vfelLIYSNGzce1/saO3ZsjdsvuuiixIMDBw406jTS0tK+/OUvhxAOHz5cefsLL7wQQmjSpMmECRNqfOKYMWNq3L5+/fpEvzVx4sQadxgyZEgIoaSk5NVXX60+esUVVwwdOtRaAwAAAAAAAM4MMi8ATraXXnpp+vTpIYQRI0bUeKWurVu3zps3LyUlZd68ee3btz+xr179glJJl156aQjho48+Slx9KuE73/lOCGH//v3r16+vvPOLL7546NChEEJt9VKNioqKdu7cGULo3bv3kVp07NgxhLB79+7jel+9e/eucXurVq0SD/7xj3809jTS0tJCCGVlZZU3vvHGGyGE8847r7aPsn379p06daq+PXFPzxDC+eefX+MM09PTEzvUOMlvfvOb1hoAAAAAAABwxmjqFABwMm3duvXWW28tKSnp169fouWqssORI0emTZt27NixO+644+qrr67PMQ8fPrx58+bq2zMyMhKtUmV1XHkrufNHH32UfDxs2LCOHTvm5+cvWrSo8tWhli5dmjjacV0yav/+/eXl5SGEhQsX1n1bxirXxPpMn9nDVVRUnJBplJeXr1279oUXXti+fXteXt7HH3/8ySef1HGExFXEEhf6qk2HDh0+/PDDKhuTWwYOHPiZX4DqG3v06GG5AQAAAAAAAGcMmRcAJ88rr7ySlZVVXFx88cUXL1iwoGXLltX3mTlz5p49e/r06TNz5sx6Hvbdd9+dPHly9e2PPPLIiBEjqmxs3rx5bcdp0aJF4sHRo0f/32/Kpk1vuummuXPnrlmz5sCBA4lK7MiRI2vWrAkh3HDDDU2bHscv048//riee1ausuojOflGncb27dunTp36zjvvhBBSU1M7derUtWvXli1bJnK9rVu3fvrpp1WOUFxcHEKo8bNOat269Qk/V8d1QgAAAAAAAAAiJ/MC4CTZtGnTrbfeevTo0T59+ixatCh5x73Kli5dumLFihDC2LFjN2zYUH2HxKWhDh8+vHbt2sSWel7xK+mTTz5J3sewiuRtDatURxMnTvz1r39dVla2dOnSO+64I4SwcuXKkpKScJx3bAyVaqef/OQnt99++6n6LBo2jX379o0bN66wsLB169YzZ84cO3bsF77whco79O/ff8+ePdVfq6SkpHr+VdmxY8dqm2Tr1q137Nhh+QAAAAAAAACfczIvAE6GF198cfLkyZ9++unll1/+xBNPtG3btsbdtm7dmnjw05/+tI6j7dixIzs7O/F427Ztffv23bt3bz1ncuDAgW7dutU4lDxIlRsgnnvuuUOHDl29evWSJUsSmdfy5ctDCH379u3Zs+dxnYfkLSPz8vJO4cfRsGk8+uijhYWFIYQHH3zwuuuuq75DIn2ron379ocPH87Pz6/jyAUFBdU3dujQIYRQXFxcUFBQpScDAAAAAAAA+LxJdQoAaGyrV6+eNGnSp59+OmjQoEWLFtXWeJ0cb775Zm1Dr732WgihQ4cOHTt2rDKUlZUVQnj77bffeuutffv2vfzyy6GWS3klbl9Ym/bt23fv3j2EsHHjxlN4Eho2jdzc3BBCenr6tddeW330448/PnjwYPXtF198ceLUVb4VZmWlpaXvvfde9e39+vVLPDi15woAAAAAAAAgBjIvABrXqlWrvvvd75aWlg4fPvwPf/hD8naBNfr5z3++t07XX399COHyyy9Pbklc86n+nnnmmRq379y5M5ExXXPNNdVHBw8e3LVr1xDCypUrV65cWVFR0bJly9GjR1ffs3nz5okHiftLVjdy5MjEy61Zs+YUfi4NmEbixoupqak1pmwrVqyo8d6LgwYNCiGUlJQkbsdZ3erVq0tLS6tvv+aaaxK313z44YdrPDIAAAAAAADA54fMC4BGtGzZsqlTp5aVld14440PP/xwWlraKZ/Sc8899+c//7nKxpKSkhkzZlRUVKSkpCRvB/n//b5MTb3llltCCOvWrXv++edDCCNGjGjTpk31PRM1WGLPGicwZcqUs846K4Qwffr0119/vcZ9ioqKjhw50qjnoQHT6NGjRwihoKBg27ZtVfZ86623/uM//qPGg3zrW99q165dCGH27NnV7xH597//vbYntmvX7tZbbw0h5Obm/uhHPyorK6txtz179lhoAAAAAAAAwBmvqVMAQCNZsmTJ9OnTy8vLu3Tp0q9fvz/96U917HzzzTc3adKksafUsWPH8vLy733ve+PHjx85cmTXrl3LysreeOON3/zmN3/7299CCLfddlufPn1qfO6ECRP+67/+K3nPxxrv2BhCuOiiizp16vThhx/+4Q9/OOecc0aOHJmWlrZ3795evXqlp6eHEM4555x58+ZNmTLl0KFD3/rWt0aPHj106NBOnTqFEA4dOrRz584tW7Zs2rRp/vz5V111VeOdigZMY+zYscuWLQshTJ48eebMmZdffnnLli3z8vL+/Oc/z58/v3379j169EhcEa2y1q1b/+xnP/v+979/4MCB4cOHT5s27aqrrmrTps3Bgwdfeuml3//+93//+9/POuusoqKi6pOcMWPGK6+88tprr/3pT3/avHnzTTfddMkll5x11llHjx7Ny8t74403/ud//qd9+/Y5OTmWGwAAAAAAAHBmk3kB0FhycnLKy8tDCHv27Pnxj39c987jxo07CZnX0KFDJ0+enJWV9cc//vGPf/xjldEJEybcc889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/fV7/vymTZuuWbPm9ddfTzRKS/zQTvnq1atvvfXW7du3N2rUqE6dOp988smTTz6Zk5MzefLkc889N/xnp3znjy3TKX/ppZfy8vI6deqUaJmHEEp3yi+99NKlS5empKScfPLJBQUF77333tKlS+fMmfPf//3fycnJe13OWbNm3XDDDWlpaZmZmV9++WWiU75y5cpf/vKXffv23bBhw0knndSgQYPEnPPmzXvhhRd2jsEdiE25Oy+//PIdd9yRWLBGjRr961//euqpp5599tnHHntsd7G5EuUvV+/evf/4xz/m5ORkZ2fvtYwAe9a6devWrVuPHz9+2bJlnTt33vmZsA8//PDUqVNr1ar14IMPtm/fPoQQj8efe+65oUOH3nPPPaecckq3bt328PnXXnvtiy++OHLkyIyMjETeqLi4+O67737rrbc6d+58zjnnlHM5p02bVq9evRdeeOGMM85IjMnJybn++utHjx7drl27s88+OykpqW/fvuPHj58+fXqZk9eXX365cOHCSpUqde/ePT09vX///v3798/Ly7vqqqt2PjjffPPNS5cu7dmz5z333FOtWrUQwqpVq37961/PnTv3gQceGDJkyJ6Xs6CgYPDgwUOHDr3hhhsSDwGYMWPGkCFDpkyZMnfu3MzMzJycnEQ+Ozc39/LLL//ggw8mTpx41113/fhNWb169TFjxrz11ltz5sxp0KDBmDFjyvnGwYMHn3feednZ2YlT+ZYtW2677bYnn3zy+uuvnz9//rHHHruH95a/XPXr169Vq9aXX365fPnyFi1a2PUAjiru5gUAAAAAQLS0bt16zJgxiW53586dx3yvpNlc0imfMWPG4sWLn3/++XfffXfSpEnHHHPMPffck7gt1h5ce+21ycnJI0eOfPPNNxNjiouL//CHP/zQTvnYsWNbt269aNGiOXPmPPPMM8uWLbvhhhvy8/N/+9vfbtq0KYSQ6JSHEKZPn17mvaU75f379x8zZkyjRo1CCFdddVXJ+pb0g0tav0uXLp07d+6rr746b968xo0bJ1q/e13Okk758uXLX3jhhaVLl44fPz6EMGXKlMsuuywzM3PBggWJz3zzzTdPP/30TZs27a//MNzrptydwYMHn3nmmYsWLZo/f/6LL7747rvv9u7dOz8///rrr0/Udg/KX65Ep3z79u3Lly+33wEH1Pbt2xPH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4w8t1xdffBFCqFmzpj2OSMnKyrqpFAWBA0HMCwAAAACAKIp+p3zu3LllurkhhCeeeCKE0KVLlzLjj+ZO+e425R7olAOHqdNOOy2EMHv27M8++6z0+AoVKtxxxx0hhKuvvjqRSE6YP39+Igxx88037+EBu506dapWrdrixYtHjhxZOou8bNmya6+9NoQwcODA8i/kjTfeWPqQnpOT8+CDD8Ziseuuu67MnH369ElJSZkxY8a7777bunXrzMzMMjMkoreTJ08u8/Tbli1bdu/evaCg4NJLL33llVdKQsxbtmx58sknS9/578Dp0KFDCGHUqFGJQ33iVPLXv/51ypQp5ckfN2zYsGLFimvWrHn22WfL+RM3b958zTXXlNxw9LvvvrvppptWrFhRs2bN/v377+GNP7RcixcvTrzLHgdwtBHzAgAAAAAgiqLfKS/TzS0sLLzrrrvefPPNmjVr9uvXr8zMR3OnfHebsvy11SkHDhdZWVmnn376li1bOnfu3Lt37x49eiQiqiGE3r1733jjjbm5uRdddNF5553Xp0+fdu3aXXrppZs2bRo8ePDOd3ksrWrVqvfff39aWtqkSZNatWrVo0ePyy677Pzzz7/wwgtXrFjRuXPnG2+8sZxLeMcdd1SqVKlbt24dOnRILMNVV11VWFh4yy23tGrVqszMxx13XJcuXd555514PL7LJRw4cGCVKlWWLFmSlZXVt2/fTp06LV++PDFp7Nix55xzzrp16wYOHNi0adOOHTs2bdq0SZMmN9xww4IFCw7CthgyZEi1atXef//9c845p0uXLr169TrzzDNvv/32wYMHn3rqqXt9e1pa2mWXXZa43ujRo0evXr2GDh2657eMGDFi0aJFbdq06dat289//vMWLVpMnz69UqVKDz744F4T5OUvV0FBQSKl16ZNG3scwNEmWQkAAAAAAIigRKf8gw8+6Ny5c7NmzfLz8/v16zdo0KAQQu/evVetWnXfffdddNFFDRs2rFWr1tq1a9esWRNCKGen/De/+c2kSZOeeOKJU045pVq1ap9//vknn3wSQvhBnfLfeE8SAAAOAklEQVSJEycOHz68TZs2p512WuXKlT/++OMNGzbsrpub6JQn7giyu075pEmTEp3yRo0aff311xMmTGjatGkIYezYsZs2bXr99dcHDhxYrVq1WrVqffXVVxs2bAgh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AACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEgT8wIAAAAAAAAAAIg0MS8AAAAAAAAAAIBIE/MCAAAAAAAAAACINDEvAAAAAAAAAACASBPzAgAAAAAAAAAAiDQxLwAAAAAAAAAAgEj7/wEH9BweUZmITwAAAABJRU5ErkJggg== "子树二进制格式")

图 57 — 子树二进制格式的数据布局

标头字段：

表 27——子树文件的头域

| 字节    | 场地       | 类型     | 描述                                                      |
| :---- | :------- | :----- | :------------------------------------------------------ |
| 0-3   | 魔法       | UINT32 | 将此标识为子树文件的幻数。这始终是0×74627573 ，ASCII 字符串subt的四个字节以小端顺序存储。 |
| 4-7   | 版本       | UINT32 | 版本号。对于此版本的规范，始终为1 。                                     |
| 8-15  | JSON字节长度 | UINT64 | 子树 JSON 的长度，包括任何填充。                                     |
| 16-23 | 二进制字节长度  | UINT64 | 缓冲区的长度（如果缓冲区不存在则为 0），包括任何填充。                            |

应填充每个块，使其以 8 字节为边界结束：

*   JSON 块应填充尾随空格字符 ( 0×20 )
*   如果存在，则二进制块应填充尾随零（0x00）

# 9. 3D 元数据规范

## 9.1. 概述

3D 元数据规范定义了 3D 内容中结构化元数据的标准格式。元数据——表示为实体和属性——可能与部分 3D 内容密切相关，数据表示适用于大型分布式数据集。对于最详细的用例，属性允许顶点级和纹素级关联；还支持更高级别的属性关联。

许多领域都受益于结构化元数据——典型示例包括城市建筑物的历史细节、CAD 模型中组件的名称、纹理表面区域的描述以及点云的分类代码。

该规范定义了多种 3D 格式要使用的核心概念，并且与语言和格式无关。本文档定义了具有目的和术语的概念，但没有强加特定的模式或序列化格式来实现。对于抽象概念定义之外的格式的使用，请参见：

*   [3D Tiles Metadata——](https://portal.ogc.org/files/102132#core-metadata) 将元数据分配给 3D Tiles 1.1 中的 tilesets、tiles 和内容
*   [3DTILES\_metadata](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_metadata)  — 3D Tiles 1.0 的扩展，将元数据分配给图块集、图块和内容
*   [EXT\_structural\_metadata](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata) (glTF 2.0) — 将元数据分配给 glTF 资产中的顶点、纹素和特征

该规范没有列举或定义元数据的语义，并假定单独的规范将为它们的特定应用程序或域定义语义。一个例子是[3D 元数据语义参考](https://portal.ogc.org/files/102132#metadata-semantics-3d-metadata-semantic-reference)，它定义了 3D Tiles 和 glTF 的内置语义。外部定义语义的标识符可以存储在 3D 元数据规范中。

## 9.2. 概念

本规范定义了元数据模式和编码元数据的方法。

**模式**包含一组**类**和**枚举**。一个类代表一类相似的实体，并被定义为一组**属性**。每个属性描述特定类型的值。枚举定义了一组表示单个值类型的命名值，并且可以由类属性引用。模式定义不描述实体或属性是如何存储的，并且可以以各种方式以文件格式表示。模式可以在多种资产甚至文件格式中重复使用。

**实体**是类的实例化，填充有符合类定义的\*\*属性值。\*\*实体的每个属性值都应由其类别定义，并且实体不应具有无关的属性值。可能需要一个类的属性，在这种情况下，所有实例化该类的实体都需要包含它们。

注：  实体可以在不同的抽象层次上定义。在大型数据集中，单个顶点或纹素可能代表具有细粒度元数据属性的实体。顶点和纹素可以组织成具有自己关联属性的高阶组（例如网格、场景图或图块集）。

**元数据**，如本规范中所使用的，指的是 3D 内容与实体和属性的任何关联，使得实体代表整体结构中有意义的单元。元数据的其他常见定义，特别是与文件系统或网络相关的定义，而不是 3D 内容，不在本文档的范围内。

属性值以灵活的表示形式存储，以允许紧凑的传输和高效的查找。本规范定义了两种可能的[存储格式](https://portal.ogc.org/files/102132#metadata-storage-formats)。

### 9.2.1. 身份标识

在本规范中，ID（标识符）是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字符串：由大写或小写字母、数字或下划线组成的字符串，以字母或下划线开头。这些字符串应该是人类可读的驼峰式字符串（只要可能）。当受这些限制的 ID 对于人类读者来说不够清晰时，应用程序还应该为支持专用名称的结构提供名称。

## 9.3. 图式

### 9.3.1. 图式

架构定义 3D 内容中使用的元数据的组织和类型，表示为一组类和枚举。类定义由其元数据符合类定义的实体引用。这为数据集中的所有实体提供了一致且机器可读的结构。

下面列出了模式的组件，并且实现可以定义其他组件。

#### [9.3.1.1](http://9.3.1.1/).ID

ID ( id ) 是架构的唯一[标识符。](https://portal.ogc.org/files/102132#metadata-identifiers)

#### [9.3.1.2](http://9.3.1.2/).版本

架构版本 ( version ) 是给定架构修订的特定于应用程序的标识符。Version 应该是一个字符串，并且在语法上应该与[SemVer](https://semver.org/)兼容。

当一个模式有多个版本时，(id, version)对唯一标识一个特定的模式和修订。

注意有效的  语义版本包括像0.1.2、1.2.3和1.2.3-alpha这样的字符串。

#### [9.3.1.3](http://9.3.1.3/).姓名

名称 ( name ) 为模式提供人类可读的标签，并且不需要是唯一的。名称应为有效的 Unicode 字符串，并应以自然语言书写。

#### [9.3.1.4](http://9.3.1.4/).描述

描述 ( description ) 提供对模式、其目的或其内容的人类可读解释。通常至少是一个短语，也可能是几个句子或段落。描述应为有效的 Unicode 字符串。

#### [9.3.1.5](http://9.3.1.5/).枚举

无序的[枚举集](https://portal.ogc.org/files/102132#metadata-enum)。

#### [9.3.1.6](http://9.3.1.6/).班级

无序的类[集](https://portal.ogc.org/files/102132#metadata-class)。

***

### 9.3.2. 枚举

枚举由一组命名值组成，表示为（字符串，整数）对。每个枚举都由一个唯一的 ID 标识。

注意  一个“物种”枚举，包含三种可能的树种，以及一个“未知”值。

*   **ID：** “物种”
*   **名称：** “物种”
*   **描述：** “研究中确定的常见树种。”
*   **值类型：** INT32

示例枚举的名称和值

| 姓名   | 价值 |
| :--- | :- |
| “橡木” | 0  |
| “松树” | 1个 |
| “枫”  | 2个 |
| “未知” | -1 |

#### [9.3.2.1](http://9.3.2.1/).ID

ID ( id ) 是架构中枚举的唯一[标识符。](https://portal.ogc.org/files/102132#metadata-identifiers)

#### [9.3.2.2](http://9.3.2.2/).姓名

名称 ( name ) 为枚举提供人类可读的标签，并且不需要在模式中是唯一的。名称应为有效的 Unicode 字符串，并应以自然语言书写。

#### [9.3.2.3](http://9.3.2.3/).描述

说明 ( description ) 为枚举、其用途或其内容提供人类可读的解释。通常至少是一个短语，也可能是几个句子或段落。描述应为有效的 Unicode 字符串。

#### [9.3.2.4](http://9.3.2.4/).价值观

枚举由一组命名值组成，表示为（字符串，整数）对。支持以下枚举值类型：INT8、UINT8、INT16、UINT16、INT32、UINT32、INT64和UINT64。有关每个的定义，请参阅[组件类型部分。](https://portal.ogc.org/files/102132#metadata-component-type)较小的枚举类型限制了可能的枚举值的范围，并允许更有效的二进制编码。不允许在同一枚举中使用重复的名称或值。

***

### 9.3.3. 班级

类表示相似实体的类别，并由类实体共享的一个或多个属性的集合定义。每个类在模式中都有一个唯一的 ID，每个属性在类中都有一个唯一的 ID，用于模式内部和外部的引用。

#### [9.3.3.1](http://9.3.3.1/).ID

ID ( id ) 是模式中类的唯一[标识符。](https://portal.ogc.org/files/102132#metadata-identifiers)

#### [9.3.3.2](http://9.3.3.2/).姓名

名称 ( name ) 为类提供人类可读的标签，并且不需要在模式中是唯一的。名称应为有效的 Unicode 字符串，并应以自然语言书写。

#### [9.3.3.3](http://9.3.3.3/).描述

描述 ( description ) 提供了一个类、它的用途或它的内容的人类可读的解释。通常至少是一个短语，也可能是几个句子或段落。描述应为有效的 Unicode 字符串。

#### [9.3.3.4](http://9.3.3.4/).特性

[无序的属性](https://portal.ogc.org/files/102132#metadata-property)集。

***

### 9.3.4. 财产

#### [9.3.4.1](http://9.3.4.1/).概述

属性描述可能与类的实体相关联的值的类型和结构。实体可以省略属性的值，除非属性是必需的。实体不应包含由其类的属性定义的值以外的值。

注意  以下示例显示了类如何描述元数据类型的基础知识。建筑类描述了数据集中各种建筑物的高度。同样，树类描述了具有高度、种类和叶子颜色的树。

**建筑**

建筑物的属性和类型

| 财产 | 类型 | 组件类型 |
| :- | :- | :--- |
| 高度 | 标量 | 浮动32 |

**树**

树的属性和类型

| 财产 | 类型 | 组件类型 | 枚举类型 |
| :- | :- | :--- | :--- |
| 高度 | 标量 | 浮动32 |      |
| 物种 | 枚举 |      | 物种   |
| 叶色 | 细绳 |      |      |

#### [9.3.4.2](http://9.3.4.2/).ID

ID ( id ) 是类中属性的唯一[标识符。](https://portal.ogc.org/files/102132#metadata-identifiers)

#### [9.3.4.3](http://9.3.4.3/).姓名

名称 ( name ) 为属性提供人类可读的标签，并且对于类中的属性应该是唯一的。名称应为有效的 Unicode 字符串，并应以自然语言书写。属性名称没有内在含义；为了提供这样的含义，属性还应定义[语义](https://portal.ogc.org/files/102132#metadata-semantic)。

注意  典型的 ID / 名称对，在英文中，将是localTemperature和“Local Temperature”。在日语中，这个名字可能表示为“きおん”。因为 ID 仅限于[identifiers](https://portal.ogc.org/files/102132#metadata-identifiers)，所以在许多语言中使用有用的属性名称对于清晰度来说是必不可少的。

#### [9.3.4.4](http://9.3.4.4/).描述

说明 ( description ) 提供对属性、其用途或其内容的人类可读的解释。通常至少是一个短语，也可能是几个句子或段落。描述应为有效的 Unicode 字符串。为了提供机器可读的语义，属性还应定义[语义](https://portal.ogc.org/files/102132#metadata-semantic)。

#### [9.3.4.5](http://9.3.4.5/).语义的

属性 ID、名称和描述没有固有含义。为了提供机器可读的含义，可以为属性分配语义标识符字符串 ( semantic )，指示应如何解释属性的内容。[语义标识符可以由3D 元数据语义参考](https://portal.ogc.org/files/102132#metadata-semantics-3d-metadata-semantic-reference)或外部语义参考定义，并且可以是特定于应用程序的。标识符应大写，并使用下划线作为单词分隔符。

注意  语义定义可能包括以摄氏度为单位的温度（例如TEMPERATURE\_DEGREES\_CELSIUS）、以毫秒为单位的时间（例如TIME\_MILLISECONDS）或均方误差（例如MEAN\_SQUARED\_ERROR）。这些例子只是说明性的。

#### [9.3.4.6](http://9.3.4.6/).类型

属性的类型 ( type ) 描述了为每个实体指定的值的结构。

表 28——元数据属性的类型

| 姓名   | 类型                   |
| :--- | :------------------- |
| 标量   | 单个数字组件               |
| VEC2 | 具有两 (2) 个数字分量的固定长度向量 |
| VEC3 | 具有三 (3) 个数字分量的固定长度向量 |
| VEC4 | 具有四 (4) 个数字分量的固定长度向量 |
| 垫2   | 具有数字组件的 2×2 矩阵       |
| 垫3   | 具有数字组件的 3×3 矩阵       |
| 垫4   | 具有数字组件的 4×4 矩阵       |
| 细绳   | 字符序列                 |
| 布尔值  | 对或错                  |
| 枚举   | 枚举类型                 |

#### [9.3.4.7](http://9.3.4.7/).组件类型

标量、向量和矩阵类型由数字组件组成。每个组件都是属性组件类型 ( componentType ) 的一个实例，支持以下组件类型：

表 29——元数据属性的组件类型

| 姓名      | 组件类型                                                  |
| :------ | :---------------------------------------------------- |
| 整数8     | \[-128, 127]范围内的有符号整数                                 |
| 整数 8    | \[0, 255]范围内的无符号整数                                    |
| INT16   | \[-32768, 32767]范围内的有符号整数                             |
| UINT16  | \[0, 65535]范围内的无符号整数                                  |
| INT32   | \[-2147483648, 2147483647]范围内的有符号整数                   |
| UINT32  | \[0, 4294967295]范围内的无符号整数                             |
| INT64   | \[-9223372036854775808, 9223372036854775807]范围内的有符号整数 |
| UINT64  | \[0, 18446744073709551615]范围内的无符号整数                   |
| 浮动32    | 可以表示为 32 位 IEEE 浮点数的数字                                |
| FLOAT64 | 可以表示为 64 位 IEEE 浮点数的数字                                |

浮点属性（FLOAT32和FLOAT64）不应包括值NaN、+Infinity或-Infinity。

注意  创作工具的开发人员应该知道，许多 JSON 实现仅支持可以表示为 IEEE-754 双精度浮点数的数值。当以 JSON 编码时，浮点数应表示为双精度 IEEE-754 浮点数。当这些数字表示具有较低精度（例如单精度浮点数、8 位整数或 16 位整数）的属性值（例如noData、min或max ）时，应将这些值四舍五入为 JSON 中的相同精度以避免任何潜在的不匹配。在二进制存储中编码的数字属性值不受 JSON 实现的这些限制的影响。

#### [9.3.4.8](http://9.3.4.8/).枚举类型

[枚举属性由](https://portal.ogc.org/files/102132#metadata-enums)ENUM表示。枚举属性还应提供其使用的特定枚举的 ID，称为其枚举类型 ( enumType )。

#### [9.3.4.9](http://9.3.4.9/).数组

属性可以声明为固定和可变长度数组，由给定类型的元素组成。对于固定长度数组，计数 ( count ) 表示每个数组中元素的数量，并且应大于或等于 2。可变长度数组不定义计数，可以具有任何长度，包括零。

#### [9.3.4.10](http://9.3.4.10/).归一化值

规范化属性 ( normalized ) 为较大的浮点类型提供了一种紧凑的替代方案。标准化值存储为整数，但在访问时根据以下等式转换为浮点数：

表 30——元件类型的转换

| 组件类型   | int 浮动                                   | 浮点数                                |
| :----- | :--------------------------------------- | :--------------------------------- |
| 整数8    | f = max(i / 127.0, -1.0)                 | 我 = 圆（f \* 127.0）                  |
| 整数 8   | f = i / 255.0                            | 我 = 圆（f \* 255.0）                  |
| INT16  | f = max(i / 32767.0, -1.0)               | 我 = 圆（f \* 32767.0）                |
| UINT16 | f = i / 65535.0                          | 我 = 轮（f \* 65535.0）                |
| INT32  | f = max(i / 2147483647.0, -1.0)          | 我 = 圆（f \* 2147483647.0）           |
| UINT32 | f = 我 / 4294967295.0                     | 我 = 圆（f \* 4294967295.0）           |
| INT64  | f = max(i / 9223372036854775807.0, -1.0) | 我 = 圆（f \* 9223372036854775807.0）  |
| UINT64 | f = 我 / 18446744073709551615.0           | 我 = 圆（f \* 18446744073709551615.0） |

normalized仅适用于具有整数分量类型的标量、向量和矩阵类型。

注意  根据实现和选择的整数类型，非规范​​化后值的精度可能会有所损失。例如，如果实现使用 32 位浮点变量来表示规范化的 32 位整数的值，则浮点数的尾数中只有 23 位，低位将被反规范化截断。客户端实现应在适合正确表示结果时使用更高精度的浮点数。

#### [9.3.4.11](http://9.3.4.11/).偏移量和比例

属性可以声明偏移量 ( offset ) 和比例 ( scale ) 以应用于属性值。这在将属性值映射到不同范围时很有用。

可以为具有浮点componentType或normalized设置为true 的类型定义偏移量和比例。这适用于SCALAR、VECN和MATN类型，以及这些类型的固定长度数组。offset和scale的结构在[Property Values Structure](https://portal.ogc.org/files/102132#metadata-property-values-structure)部分进行了解释。

以下等式用于将原始属性值转换为客户端使用的实际值：

transformedValue = offset + scale \* normalize(value)

这些操作是按组件应用的，既适用于数组元素，也适用于向量和矩阵组件。

此处描述的转换允许将任意源值范围映射到任意目标值范围，方法是首先计算原始归一化值的浮点值，然后将该浮点范围映射到所需的目标范围。

注意将规范化整数值转换为浮点值  的结果可能是有损的，如[规范化值部分](https://portal.ogc.org/files/102132#metadata-normalized-values)所述。根据属性值的范围、offset和scale的值以及客户端实现中使用的浮点精度，计算可能会导致低有效位从最终结果中被截断。客户端实现应尽可能合理地保持精度。

如果未给出属性的偏移量，则假定相应类型的每个组件的is 为0 。如果未给出属性的比例值，则假定相应类型的每个组件为1 。*定义相应属性的类的实例*可以覆盖偏移和比例因子，以说明实例提供的属性值的实际范围。

#### [9.3.4.12](http://9.3.4.12/).最小值和最大值

属性可以指定最小 ( min ) 和最大 ( max ) 值。最小值和最大值表示属性有效值范围的组件范围。这两个值都*包含*，这意味着它们分别表示允许的最小值和最大值。

可以为具有数字组件类型的SCALAR、VECN和MATN类型以及这些类型的固定长度数组定义最小值和最大值。min和max的结构在[“属性值结构”](https://portal.ogc.org/files/102132#metadata-property-values-structure)部分进行了解释。

对于normalized的属性， min和max的组件类型是浮点类型。它们的值表示最终的转换属性值的范围。这包括归一化和偏移量- 或比例计算，以及不属于类定义本身的其他变换或约束：应用归一化后，归一化的无符号值在 \[0.0, 1.0] 范围内，但\[ min , max ] 可以指定不同的值范围。

对于所有其他属性， min和max的组件类型与属性的componentType匹配，并且值是原始属性值的边界。

注意存储 GPS 坐标的属性可能会为经度值定义\[-180, 180]度  的范围，为纬度值定义 \[-90, 90]度的范围。

不允许\[minimum, maximum]范围之外的属性值， noData值除外。

#### [9.3.4.13](http://9.3.4.13/).必需属性、无数据值和默认值

当一个类的所有实体都应存在关联的属性值时，属性被认为是必需的（required）。

数组中的单个元素或向量或矩阵中的单个组件不能按要求标记；只有属性本身可以标记为必需。

当属性值不存在时，属性可以选择指定要使用的无数据值（noData或“标记值”）。可以为除BOOLEAN之外的任何类型提供noData值。对于ENUM类型，noData值应包含枚举值的名称作为字符串，而不是其整数值。noData值的结构在[“属性值结构”](https://portal.ogc.org/files/102132#metadata-property-values-structure)部分进行了说明。

当属性表中只有某些实体缺少属性值时，noData 值特别有用（请参阅二进制表[格式](https://portal.ogc.org/files/102132#metadata-binary-table-format)）。否则，如果所有实体都缺少属性值，则可以从表中省略该列，并且不需要提供noData值。[以JSON 格式](https://portal.ogc.org/files/102132#metadata-json-format)编码的实体可能会省略该属性，而不是提供noData值。noData值和省略的属性在功能上是等效的。

可以为缺少的属性值提供默认值 ( default )。对于ENUM类型，默认值应包含枚举值的名称作为字符串，而不是其整数值。对于所有其他情况，默认值的结构在[“属性值结构”](https://portal.ogc.org/files/102132#metadata-property-values-structure)部分进行了说明。

如果未提供默认值，则遇到缺少属性值时的行为是实现定义的。

注意  在下面的示例中，“树”类定义为noData，表示要解释为缺失数据的特定枚举值。

树的属性和类型

| 财产 | 组件类型 | 必需的 | 没有数据 |
| :- | :--- | :-- | :--- |
| 高度 | 浮动32 | 是的  |      |
| 物种 | 枚举   |     | “未知” |
| 叶色 | 细绳   | 是的  |      |

#### [9.3.4.14](http://9.3.4.14/).财产价值结构

作为类定义的一部分出现的属性值是偏移量、比例、最小值、最大值、默认值和无数据值。类定义中这些值的结构取决于属性的类型。对于SCALAR（非数组）类型，它们是单个值。对于所有其他情况，它们是数组：

*   对于具有固定长度count的SCALAR数组类型，它们是长度为count的数组。
*   对于VECN类型，它们是长度为N 的数组。
*   对于MATN类型，它们是长度为N \* N的数组。
*   对于具有固定长度count的VECN数组类型，它们是长度为count的数组，其中每个数组元素本身就是一个长度为N的数组
*   对于具有固定长度count的MATN数组类型，它们是长度为count的数组，其中每个数组元素本身就是一个长度为N \* N的数组。

对于noData值和未规范化的数值，这些数组最内层元素的类型对应于componentType。对于normalized的数值，最里面的元素是浮点值。

## 9.4. 存储格式

### 9.4.1. 概述

模式为实体提供模板，但创建实体需要特定的属性值和存储。本节介绍实体元数据的两种存储格式：

*   **二进制表格式** ——属性值存储在并行一维数组中，编码为二进制数据
*   **JSON 格式** ——属性值存储在键/值字典中，编码为 JSON 对象

这两种格式都适用于通用元数据存储。对于大量元数据，二进制格式可能更可取。

可以在本规范之外定义其他序列化方法。例如，属性值可以存储在纹理通道中或作为 XML 数据从 REST API 检索。

注：  任何引用 3D 元数据的规范都应明确说明支持哪些存储格式，或定义其自己的序列化。例如，[EXT\_structural\_metadata](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata) glTF 扩展实现了下面描述的二进制表格式，并为每个纹理元数据定义了一个额外的基于图像的格式。
### 9.4.2. 二进制表格式

#### [](https://portal.ogc.org/files/102132#9-4-2-1-%C2%A0-overview)[9.4.2.1](http://9.4.2.1/).概述

二进制表格式类似于数据库表，其中实体是行，属性是列。每列代表该类的一个属性。每行代表符合该类的单个实体。

![表格格式](https://github.com/CHENJIAMIAN/Blog/assets/20126997/571866a4-fa33-408b-8cf6-0df3274c0d29)

图 58 — 可以存储在表中的元数据的图示

表的行由称为**实体 ID 的**整数索引寻址。实体 ID 始终编号为`0、1、...、N — 1，`其中`N`是表中的行数。

属性值存储在称为**属性数组**的并行数组中，每列一个。每个属性数组存储单个属性的值。每个属性数组的第`i 个`值是实体 ID 为`i`的实体的该属性的值。

二进制编码对于运行时使用是高效的，并且可扩展到大量元数据。因为属性数组包含单一类型的元素，所以比特流可能被紧密打包或可能使用适合特定数据类型的压缩方法。

属性值根据其数据类型以小端格式进行二进制编码。值紧密排列：值之间没有填充。

#### [](https://portal.ogc.org/files/102132#9-4-2-2-%C2%A0-scalars)[9.4.2.2](http://9.4.2.2/).标量

标量值根据`componentType`进行编码。多个值紧密地打包在同一个缓冲区中。支持以下数据类型：

表 31——标量元数据值的类型

| 姓名      | 描述             |
| ------- | -------------- |
| 整数8     | 8 位二进制补码有符号整数  |
| 整数 8    | 8 位无符号整数       |
| INT16   | 16 位二进制补码有符号整数 |
| UINT16  | 16 位无符号整数      |
| INT32   | 32 位二进制补码有符号整数 |
| UINT32  | 32 位无符号整数      |
| INT64   | 64 位二进制补码有符号整数 |
| UINT64  | 64 位无符号整数      |
| 浮动32    | 32 位 IEEE 浮点数  |
| FLOAT64 | 64 位 IEEE 浮点数  |

#### [](https://portal.ogc.org/files/102132#9-4-2-3-%C2%A0-vectors)[9.4.2.3](http://9.4.2.3/).载体

矢量组件基于`componentType`紧密打包和编码。

#### [](https://portal.ogc.org/files/102132#9-4-2-4-%C2%A0-matrices)[9.4.2.4](http://9.4.2.4/).矩阵

矩阵组件以列优先顺序紧密打包，并根据`componentType`进行编码。

#### [](https://portal.ogc.org/files/102132#9-4-2-5-%C2%A0-booleans)[9.4.2.5](http://9.4.2.5/).布尔值

布尔值被编码为单个位，即 0 ( `false` ) 或 1 ( `true` )。多个布尔值被紧密地打包在同一个缓冲区中。这些紧密打包的比特缓冲区有时被称为比特流。

`对于具有N`行的表，存储这些布尔值的缓冲区将由`ceil(N / 8)`个字节组成。当`N`不能被 8 整除时，则该缓冲区最后一个字节的未使用位应设置为 0。

注意访问实体 ID `i`  的布尔值的示例。

```
byteIndex = floor ( i / 8 ) bitIndex = i % 8 bitValue = ( buffer [ byteIndex ] >> bitIndex ) & 1值= bitValue == 1 
 
    
  
```

#### [](https://portal.ogc.org/files/102132#9-4-2-6-%C2%A0-strings)[9.4.2.6](http://9.4.2.6/).字符串

字符串值是 UTF-8 编码的字节序列。多个字符串紧密地打包在同一个缓冲区中。

因为字符串长度可能不同，所以使用**字符串偏移**缓冲区来标识缓冲区中的字符串。如果属性数组中有`N 个`字符串，则字符串偏移缓冲区有`N + 1 个`元素。其中的前`N`​​个指向每个字符串的第一个字节，而最后一个指向紧跟在最后一个字符串之后的字节。`第 i 个`字符串中的字节数由`stringOffset[i + 1] — stringOffset[i]`给出。UTF-8 将每个字符编码为 1-4 个字节，因此字符串偏移量不一定代表字符串中的字符数。

**用于偏移的数据类型由字符串偏移类型**定义，可以是`UINT8`、`UINT16`、`UINT32`或`UINT64`。

注意  三个 UTF-8 字符串，在缓冲区中进行二进制编码。

![字符串属性示例](https://github.com/CHENJIAMIAN/Blog/assets/20126997/e1429726-3e79-4972-b48b-481be944cbf2)

图 60 — 存储字符串元数据的缓冲区的数据布局

#### [](https://portal.ogc.org/files/102132#9-4-2-7-%C2%A0-enums)[9.4.2.7](http://9.4.2.7/).枚举

根据枚举值类型将枚举编码为整数值（请参阅[枚举](https://portal.ogc.org/files/102132#metadata-enums)）。[标量](https://portal.ogc.org/files/102132#metadata-scalars)支持的任何整数数据类型都可以用于枚举值。

#### [](https://portal.ogc.org/files/102132#9-4-2-8-%C2%A0-fixed-length-arrays)[9.4.2.8](http://9.4.2.8/).定长数组

一个固定长度的数组值被编码为一个由`count`个元素组成的紧密排列的数组，其中每个元素都根据`type`进行编码。

#### [](https://portal.ogc.org/files/102132#9-4-2-9-%C2%A0-variable-length-arrays)[9.4.2.9](http://9.4.2.9/).变长数组

可变长度数组使用额外的**数组偏移**缓冲区。数组偏移缓冲区中的第 i 个值是元素索引——而不是字节偏移——标识第i`个``数组`的开头。数组中的字符串值可能具有不一致的长度，需要数组偏移和**字符串偏移**缓冲区（请参阅：[字符串](https://portal.ogc.org/files/102132#metadata-strings)）。

**用于偏移的数据类型由数组偏移类型**定义，可以是`UINT8`、`UINT16`、`UINT32`或`UINT64`。

如果属性数组中有`N 个`数组，则数组偏移缓冲区有`N + 1 个`元素。其中的前`N`​​个指向属性数组中数组的第一个元素，或者指向字符串组件类型的字符串偏移缓冲区中的第一个元素。最后一个值指向紧跟在最后一个数组元素之后的一个（不存在的）元素。

对于以下每种情况，数组元素`i`在其二进制存储中的偏移量以实体 ID `id`和元素索引`i`表示。

表 32——字符串和数组的偏移量类型

| 类型     | 胶印型   | 抵消                                  |
| ------ | ----- | ----------------------------------- |
| `细绳`   | 字节偏移量 | `stringOffset[arrayOffset[id] + i]` |
| 所有其他类型 | 数组索引  | `arrayOffset[id] + 我`               |

上表中的每个表达式都定义了底层属性数组的索引。`对于具有FLOAT32组件类型的``SCALAR`元素的属性数组，索引`3`对应于字节偏移量`3 * sizeof(FLOAT32)`。`对于具有FLOAT32组件类型的``VEC4`元素的属性数组，索引`3`对应于字节偏移量`3 * 4 * sizeof(FLOAT32) = 48`。`对于BOOLEAN`元素的数组，偏移量`3`将对应于*位*偏移量`3`。``````````````````**``

注 1  五个可变长度的 UINT8 组件数组，在缓冲区中进行二进制编码。关联的属性定义为`type = “SCALAR”`、`componentType = “UINT8”`和`array = true`。

![变长数组](https://github.com/CHENJIAMIAN/Blog/assets/20126997/4010d3f2-7297-40ec-a9e0-192b752e4ff6)

图 61 — 存储字符串可变长度数组的缓冲区的数据布局

注 2  两个可变长度的字符串数组，在缓冲区中进行二进制编码。关联的属性定义为`type = “STRING”`和`array = true`（可变长度）。观察数组偏移缓冲区的最后一个元素指向字符串偏移缓冲区的最后一个元素。这是因为最后一个有效的字符串偏移是字符串偏移缓冲区的倒数第二个元素。

![可变长度字符串数组](https://github.com/CHENJIAMIAN/Blog/assets/20126997/ee8ad8c2-14e4-4c6a-ab15-60d536aa604d)

图 62 — 存储字符串可变长度字符串数组的缓冲区的数据布局

### [](https://portal.ogc.org/files/102132#9-4-3-%C2%A0-json-format)9.4.3. JSON格式
#### [9.4.3.1](http://9.4.3.1/).概述

JSON 编码对于以人类可读的形式存储少量实体很有用。

每个实体都表示为一个 JSON 对象，其类由字符串 ID 标识。属性值在键/值属性字典中定义，属性 ID 作为其键。属性值被编码为相应的 JSON 类型：数值类型表示为number，布尔值表示为boolean，字符串表示为string ，枚举表示为string，向量和矩阵表示为number数组，数组表示为包含类型的数组。

注意  以下示例演示了固定长度和可变长度数组的用法：

*一个枚举，“basicEnum”，由三个（名称：值）对组成：*

示例枚举的名称和值

| 姓名     | 价值 |
| :----- | :- |
| “枚举 A” | 0  |
| “枚举 B” | 1个 |
| “枚举 C” | 2个 |

*一个类，“basicClass”，由十个属性组成。stringArrayProperty计数未定义，因此是可变长度的。*

示例类的属性

| ID           | 类型   | 组件类型    | 大批  | 数数 | 枚举类型 | 必需的 |
| :----------- | :--- | :------ | :-- | :- | :--- | :-- |
| 浮动属性         | 标量   | FLOAT64 | 错误的 |    |      | 是的  |
| 整型属性         | 标量   | INT32   | 错误的 |    |      | 是的  |
| 矢量属性         | VEC2 | 浮动32    | 错误的 |    |      | 是的  |
| floatArray属性 | 标量   | 浮动32    | 真的  | 3个 |      | 是的  |
| 矢量数组属性       | VEC2 | 浮动32    | 真的  | 2个 |      | 是的  |
| 布尔属性         | 布尔值  |         | 错误的 |    |      | 是的  |
| 字符串属性        | 细绳   |         | 错误的 |    |      | 是的  |
| 枚举属性         | 枚举   |         | 错误的 |    | 基本枚举 | 是的  |
| 字符串数组属性      | 细绳   |         | 真的  |    |      | 是的  |
| 可选属性         | 细绳   |         | 错误的 |    |      |     |

*以 JSON 编码的单个实体。请注意，此示例中省略了可选属性。*

```
{ “实体” ：{ “类” ：“basicClass” ，“属性” ：{ “floatProperty” ：1.5 ，“ integerProperty ” ：- 90 ，“ vectorProperty ” ：[ 0.0，1.0 ]，“floatArrayProperty” ：[ 1.0，0.5 , - 0.5 ], "vectorArrayProperty" : [[ 0.0 , 1.0 ], [ 1.0 , 2.0 ]],
   
     
     
       
       
        
         
          
      “booleanProperty” ：true ，“stringProperty” ：“x123” ，“enumProperty” ：“枚举 B” ，“stringArrayProperty” ：[ “abc” ，“12345” ，“おはようございます” ] } } } 
       
       
         
    
  

```

#### [9.4.3.2](http://9.4.3.2/).标量

所有组件类型（INT8、UINT8、INT16、UINT16、INT32、UINT32、INT64、UINT64、FLOAT32和FLOAT64）都编码为 JSON 数字。浮点值应表示为 IEEE 浮点数。

注意  对于数字类型，以位为单位的大小是明确的。尽管 JSON对于所有整数和浮点数只有一种数字类型，但使用 JSON 的应用程序可能会有所区别。例如，C 和 C++ 有几种不同的整数类型，例如uint8\_t、uint32\_t。应用程序负责使用属性定义中指定的类型来解释元数据。

#### [9.4.3.3](http://9.4.3.3/).载体

矢量被编码为 JSON 数字数组。

#### [9.4.3.4](http://9.4.3.4/).矩阵

矩阵被编码为按列优先顺序排列的 JSON 数字数组。

#### [9.4.3.5](http://9.4.3.5/).布尔值

布尔值被编码为 JSON 布尔值，true或false。

#### [9.4.3.6](http://9.4.3.6/).字符串

字符串被编码为 JSON 字符串。

#### [9.4.3.7](http://9.4.3.7/).枚举

使用枚举值的名称而不是整数值将枚举编码为 JSON 字符串。因此，如果指定了枚举值类型，JSON 编码将忽略它。

#### [9.4.3.8](http://9.4.3.8/).数组

数组被编码为 JSON 数组，其中每个元素都根据type进行编码。指定计数时，JSON 数组的长度应与计数匹配。否则，对于可变长度数组，JSON 数组可以是任意长度，包括零长度。

# 10.造型

## 10.1. 概述

3D Tiles 样式提供了 tileset 功能的简洁声明样式。样式定义表达式来评估特征的显示，例如颜色（RGB 和半透明）和显示属性，通常基于存储在磁贴[批处理表](https://portal.ogc.org/files/102132#tileformats-batchtable-batch-table)中的特征属性。

样式可以应用于不包含特征的图块，在这种情况下，图块被视为没有属性的隐式单个特征。

虽然可以为 tileset 创建样式并引用 tileset 的属性，但样式独立于 tileset，因此任何样式都可以应用于任何 tileset。

样式是用 JSON 定义的，表达式是用一小部分 JavaScript 编写的，用于样式增强。此外，样式语言提供了一组内置函数来支持常见的数学运算。

以下示例根据建筑物高度分配颜色。

```
{ "show" : "${Area} > 0" , "color" : { "条件" : [ [ "${Height} < 60" , "color('#13293D')" ], [ "${Height } < 120" , "color('#1B98E0')" ], [ "true" , "color('#E8F1F2', 0.5)" ] ] } }
      
      
          
             
             
             
        
    

```
![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/2a407b15-55c4-4047-8b21-4277290d4897)

图 63——根据建筑物的高度用不同颜色渲染建筑物

## 10.2. 概念

### 10.2.1.造型特点

可用于样式特征的视觉属性是show属性，其分配的表达式将评估为确定特征是否可见的布尔值，以及 color属性，其分配的表达式将评估为Color对象（RGB 和半透明）确定要素的显示颜色。

以下样式将默认显示和颜色属性分配给每个功能：

```javascript
{ “显示” ：“真”，“颜色” ：“颜色（'#ffffff ' ）” }
      
      

```

show可以是依赖于要素属性的表达式，而不是显示所有要素，例如，以下表达式将仅显示 19341 邮政编码中的要素：

```javascript
{ “ show ” : “ $ { ZipCode } === ' 19341 '” }
        

```

show也可以用于更复杂的查询；例如，这里使用复合条件和正则表达式来仅显示县以“Chest”开头且建造年份大于或等于 1970 年的要素：

```javascript
{ “ show ” : “( regExp ('^ Chest ') .test ( $ { County })) && ( $ { YearBuilt } >= 1970 )” }
          

```

颜色也可以通过依赖于特征属性的表达式来定义。例如，以下表达式将温度高于 90 的特征标记为红色，将其他颜色标记为白色：

```javascript
{ “颜色” ：“（$ {温度} > 90 ）？颜色（'红色'）：颜色（'白色'）” }
          

```

颜色的 alpha 分量定义了特征的不透明度。例如，以下代码根据要素的属性设置要素的 RGB 颜色分量，并使体积大于 100 的要素透明：

```javascript
{ “颜色” ：“ rgba （$ { red }，$ { green }，$ { blue }，（$ { volume } > 100 ？0.5 ：1.0 ））” }
            

```

### 10.2.2.状况

除了包含表达式的字符串外，color和show还可以是定义一系列条件的数组（类似于if...else语句）。例如，条件可用于制作具有任何类型的包含/排除间隔的颜色图和颜色渐变。

例如，以下表达式将 ID 属性映射到颜色。条件按顺序评估，因此如果\${id}不是'1'或'2'，“真”条件返回白色。如果不满足任何条件，特征的颜色将是未定义的：

```javascript
{ “颜色” ：{ “条件” ：[ [“ $ { id } === ' 1 '”，“颜色（'# FF0000 '）”]，[“ $ { id } === ' 2 '”，“ color ('# 00FF00 ')”], [“ true ”, “ color ('# FFFFFF ')”] ] } }
      
          
               
               
             
        
    

```

下一个示例显示如何使用条件使用具有包含下限和不包含上限的间隔来创建色带：

```
“颜色” ：{ “条件” ：[ [“（$ {高度} >= 1.0 ）&& （$ {高度} < 10.0 ）”，“颜色（'# FF00FF '）”]，[“（$ {高度} >= 10.0 ) && ( $ {高度} < 30.0 )", " color ('# FF0000 ')"], ["(  
      
                
               
        $ { Height } >= 30.0 ) && ( $ { Height } < 50.0 )", "颜色('# FFFF00 ')"], ["( $ { Height } >= 50.0 ) && ( $ { Height } < 70.0 ) ”, “颜色('# 00FF00 ')”], [“( $ {高度} >= 70.0 ) && ( $ {       
               
            Height } < 100.0 )", " color ('# 00FFFF ')"], ["( $ { Height } >= 100.0 )", " color ('# 0000FF ')"] ] }   
           
    

```

由于条件是按顺序评估的，因此可以将上面的内容更简洁地写成如下：

```
“颜色” ：{ “条件” ：[ [“（$ {高度} >= 100.0 ）”，“颜色（'# 0000FF '）”]，[“（$ {高度} >= 70.0 ）”，“颜色（ '# 00FFFF ')”], [“( $ { Height } >= 50.0 )”, “颜色('# 00FF00 ')”], [“( $ { Height  
      
           
           
           
        } >= 30.0 )", " color ('# FFFF00 ')"], ["( $ { Height } >= 10.0 )", " color ('# FF0000 ')"], ["( $ { Height } > = 1.0 )”, “颜色('# FF00FF ')”] ] }   
           
           
    

```

### 10.2.3.定义变量

常用表达式可以存储在以变量名作为键的定义对象中。如果变量引用已定义表达式的名称，则它会被引用的计算表达式的结果替换：

```
{ “定义” ：{ “ NewHeight ” ：“钳位（（$ {高度} -  0.5 ）/ 2.0，1.0，255.0 ） ” ，“ HeightColor ” ：“ rgb （$ {高度} ，$ {高度} ，$ {高度})” }, “颜色” : { “条件” :
      
              
          
    
      
          [ [“( $ { NewHeight } >= 100.0 )”, “颜色('# 0000FF ') * $ { HeightColor }”], [“( $ { NewHeight } >= 50.0 )”, “颜色('# 00FF00 ') ) * $ { HeightColor }”], [“( $ { NewHeight } >= 1.0 )”, “ color ('# FF0000 ') * $ {
                
                
                HeightColor }”] ] }，“显示” ：“ $ { NewHeight } < 200.0 ” }
        
    
        

```

定义表达式不能引用其他定义；但是，它可能会引用具有相同名称的要素属性。在下面的样式中，高度为 150 的特征变为红色：

    { “定义” ：{ “高度” ：“ $ {高度}/2.0 } ”，}，“颜色” ：{ “条件” ：[ [“（$ {高度} > = 100.0 ）”，“颜色（'# 0000FF ')”], [“( $ {高度} >= 1.0 )”, “颜色('# FF0000 ')”] ]
          
              
        
          
              
                   
                   
            
        } 
    }

### 10.2.4.元属性

可以使用元属性定义特征的非视觉属性。例如，以下将描述元属性设置为包含功能名称的字符串：

```
{ “ meta ” ：{ “ description ” ：“'你好，$ { featureName }。'” } }
      
          
    

```

元属性表达式可以计算为任何类型。例如：

```
{ “ meta ” ：{ “ featureColor ” ：“ rgb （$ { red }，$ { green }，$ { blue }）”，“ featureVolume ” ：“ $ { height } * $ { width } * $ { depth }” } }
      
          
            
    

```

## 10.3. 表达式

表达式语言是 JavaScript ( [EMCAScript 5](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf) ) 的一个小子集，加上本机向量和正则表达式类型，以及以只读变量的形式访问 tileset 特征属性。

注意  CesiumJS 使用[jsep](https://ericsmekens.github.io/jsep/) JavaScript 表达式解析器库将样式表达式解析为[抽象语法树 (AST)](https://en.wikipedia.org/wiki/Abstract_syntax_tree)。

### 10.3.1.语义学

点符号用于按名称访问属性，例如building.name。

括号表示法 ( \[] ) 也用于访问属性，例如building\['name']，或数组，例如temperatures\[1]。

调用函数时使用圆括号 ( () ) 和逗号分隔的参数，例如 ( isNaN(0.0) , color('cyan', 0.5) )。

### 10.3.2.运营商

以下运算符支持与 JavaScript 相同的语义和优先级。

*   一元：+，-，！

    *   不支持：\~
*   二进制：|| , && , === , !== , < , > , <= , >= , + , - , \* , / , % , =~ , !~

    *   不支持：| , ^ , & , << , >>和>>>
*   三元：？:

(和)也支持为清晰度和优先级对表达式进行分组。

逻辑|| &&实现短路；真|| expression不计算正确的表达式，而false && 表达式不计算正确的表达式。

同样，真？leftExpression : rightExpression只执行左边的表达式，false ? leftExpression : rightExpression只执行右边的表达式。

### 10.3.3.类型

支持以下类型：

*   布尔值
*   无效的
*   不明确的
*   数字
*   细绳
*   大批
*   vec2
*   vec3
*   vec4
*   正则表达式

除vec2、vec3、vec4和RegExp之外的所有类型都具有与 JavaScript 相同的语法和运行时行为。 vec2、vec3和vec4派生自 GLSL 向量，其行为类似于 JavaScript对象（请参阅[向量部分](https://portal.ogc.org/files/102132#styling-vector)）。颜色派生自[CSS3 Colors并作为](https://www.w3.org/TR/css3-color/)vec4实现。RegExp派生自 JavaScript，在[RegExp 部分](https://portal.ogc.org/files/102132#styling-regexp)中进行了描述。

不同类型的示例表达式包括：

*   真,假
*   无效的
*   不明确的
*   1.0 ,南,无穷大
*   '铯' , “铯”
*   \[0, 1, 2]
*   vec2(1.0, 2.0)
*   vec3(1.0, 2.0, 3.0)
*   vec4(1.0, 2.0, 3.0, 4.0)
*   颜色（'#00FFFF'）
*   regExp('^Chest'))

#### [10.3.3.1](http://10.3.3.1/).数字

与在 JavaScript 中一样，数字可以是NaN或Infinity。支持以下测试功能：

*   isNaN（测试值：数字）：布尔值
*   isFinite（测试值：数字）：布尔值

#### [10.3.3.2](http://10.3.3.2/).细绳

字符串以 UTF-8 编码。

#### [10.3.3.3](http://10.3.3.3/).向量

样式语言包括 2、3 和 4 分量浮点向量类型：vec2、vec3和vec4。向量构造函数与 GLSL 共享相同的规则：

##### [10.3.3.3](http://10.3.3.3/) .1.vec2

*   vec2(xy : Number)  — 用数字初始化每个组件
*   vec2(x : Number, y : Number)  — 用两个数字初始化
*   vec2(xy : vec2) — 用另一个vec2 初始化
*   vec2(xyz : vec3) — 删除vec3 的第三个组件
*   vec2(xyzw : vec4) — 删除vec4 的第三和第四部分

##### [10.3.3.3](http://10.3.3.3/) .2.vec3

*   vec3(xyz : Number)  — 用数字初始化每个组件
*   vec3(x : Number, y : Number, z : Number)  — 用三个数字初始化
*   vec3(xyz : vec3) — 用另一个vec3 初始化
*   vec3(xyzw : vec4) — 删除vec4 的第四个分量
*   vec3(xy : vec2, z : Number) — 用vec2和数字 初始化
*   vec3(x : Number, yz : vec2) — 用vec2和数字 初始化

##### [10.3.3.3](http://10.3.3.3/) .3.vec4

*   vec4(xyzw : Number)  — 用数字初始化每个组件
*   vec4(x : Number, y : Number, z : Number, w : Number)  — 用四个数字初始化
*   vec4(xyzw : vec4) — 用另一个vec4 初始化
*   vec4(xy : vec2, z : Number, w : Number) — 用vec2和两个数字 初始化
*   vec4(x : Number, yz : vec2, w : Number) — 用vec2和两个数字 初始化
*   vec4(x : Number, y : Number, zw : vec2)  — 用vec2和两个数字初始化
*   vec4(xyz : vec3, w : Number) — 用vec3和数字 初始化
*   vec4(x : Number, yzw : vec3) — 用vec3和数字 初始化

##### [10.3.3.3](http://10.3.3.3/) .4.矢量用法

可以访问vec2组件

*   .x , .y
*   .r , .g
*   \[0] , \[1]

可以访问vec3组件

*   .x , .y , .z
*   .r , .g , .b
*   \[0] , \[1] , \[2]

vec4组件可以访问

*   .x , .y , .z , .w
*   .r , .g , .b , .a
*   \[0] , \[1] , \[2] , \[3]

与 GLSL 不同，样式语言不支持 swizzling。例如，不支持vec3(1.0).xy 。

向量支持以下一元运算符：-、+。

向量通过执行分量运算来支持以下二元运算符：===、!==、+、-、\*、/和%。例如vec4(1.0) === vec4(1.0)为真，因为*x*、*y*、*z*和*w*分量相等。对于vec2、vec3和vec4 ，运算符基本上是重载的。

vec2、vec3和vec4有一个toString函数，用于显式（和隐式）转换为格式为'(x, y)'、'(x, y, z)'和'(x, y, z, w )'。

*   toString() : 字符串

vec2、vec3和vec4不公开任何其他函数或原型对象。

#### [10.3.3.4](http://10.3.3.4/).颜色

颜色作为vec4实现，并使用以下函数之一创建：

*   颜色（）
*   颜色（关键字：字符串，\[alpha：数字]）
*   颜色（6 位十六进制：字符串，\[alpha：数字]）
*   颜色（3 位十六进制：字符串，\[alpha：数字]）
*   rgb（红色：数字，绿色：数字，蓝色：数字）
*   rgba（红色：数字，绿色：数字，蓝色：数字，alpha：数字）
*   hsl（色调：数字，饱和度：数字，亮度：数字）
*   hsla（色调：数字，饱和度：数字，亮度：数字，alpha：数字）

调用不带参数的color()与调用color('#FFFFFF')相同。

由不区分大小写的关键字（例如，'cyan'）或十六进制 rgb 定义的颜色作为字符串传递给颜色函数。例如：

*   颜色（'青色'）
*   颜色（'#00FFFF'）
*   颜色（'#0FF'）

这些颜色函数有一个可选的第二个参数，它是一个用于定义不透明度的 alpha 组件，其中0.0是完全透明的，1.0是完全不透明的。例如：

*   颜色（'青色'，0.5）

使用十进制 RGB 或 HSL 定义的颜色分别使用rgb和hsl函数创建，就像在 CSS 中一样（但百分比范围分别从0.0到1.0表示0%到100%）。例如：

*   RGB(100, 255, 190)
*   hsl(1.0, 0.6, 0.7)

rgb组件的范围是0到255，包括在内。对于hsl，色相、饱和度和亮度的范围是0.0到1.0（含）。

用rgba或hsla定义的颜色有第四个参数，它是定义不透明度的 alpha 分量，其中0.0是完全透明的，1.0是完全不透明的。例如：

*   RGBA(100, 255, 190, 0.25)
*   hsla(1.0, 0.6, 0.7, 0.75)

颜色等同于vec4类型并共享相同的函数、运算符和组件访问器。颜色分量存储在0.0到1.0的范围内。

例如：

*   color('red').x、color('red').r和color('red')\[0] 的计算结果均为1.0。
*   color('red').toString()计算结果为(1.0, 0.0, 0.0, 1.0)
*   color('red') \* vec4(0.5)等同于vec4(0.5, 0.0, 0.0, 0.5)

#### [10.3.3.5](http://10.3.3.5/).正则表达式

正则表达式是使用以下函数创建的，其行为类似于 JavaScript [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)构造函数：

*   正则表达式()
*   regExp（模式：字符串，\[标志：字符串]）

调用不带参数的regExp()与调用regExp('(?:)')相同。

如果指定，标志可以具有以下值的任意组合：

*   g  — 全局匹配
*   i—— 忽略大小写
*   m  — 多行
*   你 ——统一码
*   y - 粘性

正则表达式支持这些功能：

*   test(string : String) : Boolean  — 测试指定字符串是否匹配。
*   exec(string : String) : String  — 在指定字符串中执行匹配项搜索。如果搜索成功，它会返回捕获的String的第一个实例。如果搜索失败，则返回null。

例如：

```
{ “名称” ：“ 1号楼” }
       

```

```
正则表达式（' a '）。test (' abc ') === true regExp (' a (.)', ' i '). exec (' Abc ') === ' b ' regExp (' Building \s ( \d )'). exec ( $ { Name }) === ' 1 '  
   
  
```

正则表达式有一个toString函数，用于显式（和隐式）转换为'pattern'格式的字符串：

*   toString() : 字符串

正则表达式不公开任何其他函数或原型对象。

运算符=~和!~为正则表达式重载。= ~运算符匹配测试函数的行为，并测试指定的字符串是否匹配。如果找到，则返回true ，如果找不到，则返回 false 。!~运算符与=\~运算符相反。如果未找到匹配项，则返回true ，如果找到匹配项，则返回false 。两个运算符都是可交换的。

例如，以下表达式的计算结果均为真：

```
regExp (' a ') =~ ' abc ' ' abc ' =~ regExp (' a ') regExp (' a ') !~ ' bcd ' ' bcd ' !~ regExp (' a ')  
 

  
 
```

### 10.3.4.运营商规则

*   一元运算符+和-仅对数字和向量表达式进行运算。
*   一元运算符！仅对布尔表达式进行操作。
*   二元运算符<、<=、>和>=仅对数字表达式进行运算。
*   二元运算符|| &&仅对布尔表达式进行操作。
*   二元运算符+对以下表达式进行运算：

    *   数字表达式
    *   相同类型的向量表达式
    *   [如果至少一个表达式是字符串，则另一个表达式将在字符串转换](https://portal.ogc.org/files/102132#styling-string-conversions)之后转换为字符串，并且该操作返回一个连接的字符串，例如“name”+ 10计算为“name10”
*   二元运算符-对以下表达式进行运算：

    *   数字表达式
    *   相同类型的向量表达式
*   二元运算符\*对以下表达式进行运算：

    *   数字表达式
    *   相同类型的向量表达式
    *   数字表达式和向量表达式的混合，例如3 \* vec3(1.0)和vec2(1.0) \* 3
*   二元运算符/对以下表达式进行运算：

    *   数字表达式
    *   相同类型的向量表达式
    *   向量表达式后跟数字表达式，例如vec3(1.0) / 3
*   二元运算符%对以下表达式进行运算：

    *   数字表达式
    *   相同类型的向量表达式
*   二元相等运算符===和!==对任何表达式进行运算。如果表达式类型不匹配，则该操作返回false 。
*   二元regExp运算符=~和!~要求一个参数是字符串表达式，另一个参数是RegExp表达式。
*   三元运算符？:条件参数应为布尔表达式。

### 10.3.5.类型转换

基本类型之间的显式转换使用Boolean、Number和String函数处理。

*   布尔值（值：任何）：布尔值
*   数字（值：任意）：数字
*   字符串（值：任何）：字符串

例如：

```
布尔值( 1 ) === true数字( '1' ) === 1字符串( 1 ) === '1'  
  
  
```

Boolean和Number遵循 JavaScript 约定。String遵循[String Conversions](https://portal.ogc.org/files/102132#styling-string-conversions)。

这些本质上是强制转换，而不是构造函数。

样式语言不允许隐式类型转换，除非上面另有说明。像vec3(1.0) === vec4(1.0)和“5” < 6 这样的表达式是无效的。

### 10.3.6.字符串转换

vec2、vec3、vec4和RegExp表达式使用它们的toString方法转换为字符串。所有其他类型都遵循 JavaScript 约定。

*   真 ——  “真”
*   假的 ——  “假的”
*   空 ——  “空”
*   未定义 ——  “未定义”
*   5.0  —  “5”
*   NaN  ——  “NaN”
*   无限 ——  “无限”
*   “名字”  ——  “名字”
*   \[0, 1, 2]  —  “\[0, 1, 2]”
*   vec2(1, 2)  —  “(1, 2)”
*   vec3(1, 2, 3)  —  “(1, 2, 3)”
*   vec4(1, 2, 3, 4)  —  “(1, 2, 3, 4)”
*   RegExp('a')  —  “/a/”

### 10.3.7.常量

样式语言支持以下常量：

*   [数学.PI](https://portal.ogc.org/files/102132#styling-pi)
*   [数学E](https://portal.ogc.org/files/102132#styling-e)

#### [10.3.7.1](http://10.3.7.1/).PI

数学常数 PI 表示圆的周长除以直径，大约为3.14159。

```
{ "show" : "cos(${Angle} + Math.PI) < 0" }
      

```

#### [10.3.7.2](http://10.3.7.2/).乙

欧拉常数和自然对数的底，大约为2.71828。

```
{ “color” ：“color() * pow(Math.E / 2.0, ${Temperature})” }
      

```

### 10.3.8.变量

变量用于检索 tileset 中各个要素的属性值。变量使用 ES 6 ( [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/) ) 模板文字语法来标识，即\${feature.identifier}或\${feature\['identifier']}，其中标识符是区分大小写的属性名称。变量名称以 UTF-8 编码。特征是隐式的，在大多数情况下可以省略。如果标识符包含非字母数字字符，例如:、-、#或空格，则应使用\${feature\['identifier']}形式。

变量可以在接受有效表达式的任何地方使用，但在其他变量标识符内除外。例如，不允许以下内容：

    $ { foo [ $ { bar }]} 
    ——

如果要素不具有具有指定名称的属性，则该变量的计算结果为undefined。请注意，如果为属性显式存储了null ，则该属性也可能为null 。

变量可以是任何受支持的原生 JavaScript 类型：

*   布尔值
*   无效的
*   不明确的
*   数字
*   细绳
*   大批

例如：

```
{ “ enabled ” ：true ，“ description ” ：null ，“ order ” ：1 ，“ name ” ：“ Feature name ” }
      
      
      
      

```

```
$ { enabled } === true $ { description } === null $ { order } === 1 $ { name } === '功能名称'  
  
  
  
```

此外，源自存储在[批处理表二进制文件](https://portal.ogc.org/files/102132#tileformats-batchtable-binary-body)中的向量属性的变量被视为向量类型：

表 33 — 矢量类型变量

| 组件类型   | 变量类型 |
| :----- | :--- |
| “VEC2” | vec2 |
| “VEC3” | vec3 |
| “VEC4” | vec4 |

变量可用于构造颜色或向量。例如：

    rgba ( $ { red }, $ { green }, $ { blue }, $ { alpha }) 
    vec4 ( $ { temperature })

点或括号表示法用于访问要素子属性。例如：

```
{ “地址” ：{ “街道” ：“示例街道”，“城市” ：“示例城市” } }
      
          
          
    

```

```
$ {地址。街道} === `示例街道` $ {地址['街道']} === `示例街道` $ {地址. city } === `Example city` $ { address [' city ']} === `Example city`  
  

  
  
```

括号表示法仅支持字符串文字。

可以通过显式使用feature关键字使用括号表示法访问顶级属性。例如：

```
{ “地址。街道” ：“枫树街”，“地址” ：{ “街道” ：“橡树街” } }
       
      
           
    

```

```
$ {地址。街道} === `Oak Street` $ { feature . 地址。street } === `Oak Street` $ { feature [' address ']. street } === `Oak Street` $ { feature [' address . 街道']} === `枫树街`  
  
  
  
```

要访问名为 feature 的功能，请使用变量\${feature}。这相当于访问\${feature.feature}

```
{ “特征” ：“建筑” }
      

```

```
$ { feature } === `building` $ { feature . 特征} === `建筑`  
  
```

也可以在用反引号定义的字符串中替换变量，例如：

```
{ “订单” ：1 ，“名称” ：“特征名称” }
      
      

```

    `名字是${name}，顺序是${order}`

括号表示法用于访问要素子属性或数组。例如：

```
{ “温度” ：{ “比例” ：“华氏度” ，“值” ：[ 70，80，90 ] } } _ _ _
      
          
            
    

```

```
$ {温度[' scale ']} === '华氏温度' $ {温度. values [ 0 ]} === 70 $ { temperatures [' values '][ 0 ]} === 70 // 与 (temperatures[values])[0] 和 temperatures.values[0] 相同  
  
   
```

### 10.3.9.内置函数

样式语言支持以下内置函数：

*   [腹肌](https://portal.ogc.org/files/102132#styling-abs)
*   [开方](https://portal.ogc.org/files/102132#styling-sqrt)
*   [余弦](https://portal.ogc.org/files/102132#styling-cos)
*   [罪](https://portal.ogc.org/files/102132#styling-sin)
*   [棕褐色](https://portal.ogc.org/files/102132#styling-tan)
*   [阿科斯](https://portal.ogc.org/files/102132#styling-acos)
*   [阿信](https://portal.ogc.org/files/102132#styling-asin)
*   [晒黑](https://portal.ogc.org/files/102132#styling-atan)
*   [阿坦2](https://portal.ogc.org/files/102132#styling-atan2)
*   [弧度](https://portal.ogc.org/files/102132#styling-radians)
*   [学位](https://portal.ogc.org/files/102132#styling-degrees)
*   [符号](https://portal.ogc.org/files/102132#styling-sign)
*   [地面](https://portal.ogc.org/files/102132#styling-floor)
*   [天花板](https://portal.ogc.org/files/102132#styling-ceil)
*   [圆形的](https://portal.ogc.org/files/102132#styling-round)
*   [exp](https://portal.ogc.org/files/102132#styling-exp)
*   [日志](https://portal.ogc.org/files/102132#styling-log)
*   [exp2](https://portal.ogc.org/files/102132#styling-exp2)
*   [log2](https://portal.ogc.org/files/102132#styling-log2)
*   [分形](https://portal.ogc.org/files/102132#styling-fract)
*   [战俘](https://portal.ogc.org/files/102132#styling-pow)
*   [分钟](https://portal.ogc.org/files/102132#styling-min)
*   [最大限度](https://portal.ogc.org/files/102132#styling-max)
*   [夹钳](https://portal.ogc.org/files/102132#styling-clamp)
*   [混合](https://portal.ogc.org/files/102132#styling-mix)
*   [长度](https://portal.ogc.org/files/102132#styling-length)
*   [距离](https://portal.ogc.org/files/102132#styling-distance)
*   [归一化](https://portal.ogc.org/files/102132#styling-normalize)
*   [点](https://portal.ogc.org/files/102132#styling-dot)
*   [叉](https://portal.ogc.org/files/102132#styling-cross)

许多内置函数将标量或向量作为参数。对于矢量参数，函数按组件应用并返回结果矢量。

#### [10.3.9.1](http://10.3.9.1/).腹肌

```
abs ( x : Number ) : Number abs ( x : vec2 ) : vec2 abs ( x : vec3 ) : vec3 abs ( x : vec4 ) : vec4   
 
 
 
```

返回x的绝对值。

```
{ “显示” ：“绝对值（$ {温度}）> 20.0 ” }
        

```

#### [10.3.9.2](http://10.3.9.2/).开方

```
sqrt （x ：数字）：数字sqrt （x ：vec2 ）：vec2 sqrt （x ：vec3 ）：vec3 sqrt （x ：vec4 ）：vec4   
 
 
 
```

当x >= 0时返回x的平方根。当x < 0时返回NaN。

```
{ “颜色” ：{ “条件” ：[ [“ $ {温度} >= 0.5 ”，“颜色（'# 00FFFF '）”]，[“ $ {温度} >= 0.0 ”，“颜色（'# FF00FF ')”] ] } }
      
          
               
               
        
    

```

#### [10.3.9.3](http://10.3.9.3/).余弦

```
cos （角度：数字）：数字cos （角度：vec2 ）：vec2 cos （角度：vec3 ）：vec3 cos （角度：vec4 ）：vec4   
 
 
 
```

以弧度返回角度的余弦值。

```
{ “显示” ：“ cos （$ {角度}）> 0.0 ” }
        

```

#### [10.3.9.4](http://10.3.9.4/).罪

```
sin ( angle : Number ) : Number sin ( angle : vec2 ) : vec2 sin ( angle : vec3 ) : vec3 sin ( angle : vec4 ) : vec4   
 
 
 
```

以弧度返回角度的正弦值。

```
{ “显示” ：“ sin （$ { Angle }）> 0.0 ” }
        

```

#### [10.3.9.5](http://10.3.9.5/).棕褐色

```
tan （角度：Number ）：数字tan （角度：vec2 ）：vec2 tan （角度：vec3 ）：vec3 tan （角度：vec4 ）：vec4   
 
 
 
```

以弧度返回角度的正切值。

```
{ “显示” ：“棕褐色（$ {角度}）> 0.0 ” }
        

```

#### [10.3.9.6](http://10.3.9.6/).阿科斯

```
acos ( angle : Number ) : Number acos ( angle : vec2 ) : vec2 acos ( angle : vec3 ) : vec3 acos ( angle : vec4 ) : vec4   
 
 
 
```

以弧度返回角度的反余弦值。

```
{ “显示” ：“ acos （$ {角度}）> 0.0 ” }
        

```

#### [10.3.9.7](http://10.3.9.7/).阿信

```
asin （角度：数字）：数字asin （角度：vec2 ）：vec2 asin （角度：vec3 ）：vec3 asin （角度：vec4 ）：vec4   
 
 
 
```

以弧度返回角度的反正弦值。

```
{ “显示” ：“ asin （$ { Angle }）> 0.0 ” }
        

```

#### [10.3.9.8](http://10.3.9.8/).晒黑

```
atan （角度：数字）：数字atan （角度：vec2 ）：vec2 atan （角度：vec3 ）：vec3 atan （角度：vec4 ）：vec4   
 
 
 
```

以弧度返回角度的反正切值。

```
{ “显示” ：“ atan （$ {角度}）> 0.0 ” }
        

```

#### [10.3.9.9](http://10.3.9.9/).阿坦2

```
atan2 （y ：数字，x ：数字）：数字atan2 （y ：vec2 ，x ：vec2 ）：vec2 atan2 （y ：vec3 ，x ：vec3 ）：vec3 atan2 （y ：vec4 ，x ：vec4 ）：vec4    
 
 
 
```

返回y和x的商的反正切值。

```
{ “显示” ：“ atan2 （$ { GridY }，$ { GridX }）> 0.0 ” }
        

```

#### [10.3.9.10](http://10.3.9.10/).弧度

```
弧度（角度：数字）：数字弧度（角度：vec2 ）：vec2弧度（角度：vec3 ）：vec3弧度（角度：vec4 ）：vec4   
 
 
 
```

将角度从度数转换为弧度。

```
{ “显示” ：“弧度（$ {角度}）> 0.5 ” }
        

```

#### [10.3.9.11](http://10.3.9.11/).学位

```
度（角度：数字）：数字度（角度：vec2 ）：vec2度（角度：vec3 ）：vec3度（角度：vec4 ）：vec4   
 
 
 
```

将角度从弧度转换为度数。

```
{ “显示” ：“度数（$ {角度}）> 45.0 ” }
        

```

#### [10.3.9.12](http://10.3.9.12/).符号

```
符号（x ：数字）：数字符号（x ：vec2 ）：vec2符号（x ：vec3 ）：vec3符号（x ：vec4 ）：vec4   
 
 
 
```

当x为正时返回 1.0，当x为零时返回 0.0，当x为负时返回 -1.0。

```
{ “显示” ：“符号（$ {温度}）*符号（$ {速度}）=== 1.0 ” }
         

```

#### [10.3.9.13](http://10.3.9.13/).地面

```
floor ( x : Number ) : Number floor ( x : vec2 ) : vec2 floor ( x : vec3 ) : vec3 floor ( x : vec4 ) : vec4   
 
 
 
```

返回小于或等于x 的最接近的整数。

```
{ “显示” ：“楼层（$ {位置}）=== 0 ” }
        

```

#### [10.3.9.14](http://10.3.9.14/).天花板

```
ceil （x ：Number ）：数字ceil （x ：vec2 ）：vec2 ceil （x ：vec3 ）：vec3 ceil （x ：vec4 ）：vec4   
 
 
 
```

返回大于或等于x 的最接近的整数。

```
{ “显示” ：“天花板（$ {位置}）=== 1 ” }
        

```

#### [10.3.9.15](http://10.3.9.15/).圆形的

```
回合（x ：数字）：数字回合（x ：vec2 ）：vec2回合（x ：vec3 ）：vec3回合（x ：vec4 ）：vec4   
 
 
 
```

返回最接近x的整数。小数为 0.5 的数字将按实现定义的方向舍入。

```
{ “显示” ：“轮（$ {位置}）=== 1 ” }
        

```

#### [10.3.9.16](http://10.3.9.16/).exp

```
exp （x ：数字）：数字exp （x ：vec2 ）：vec2 exp （x ：vec3 ）：vec3 exp （x ：vec4 ）：vec4   
 
 
 
```

返回e的x次方，其中e是欧拉常数，大约为2.71828。

```
{ “显示” ：“ exp （$ {密度}）> 1.0 ” }
        

```

#### [10.3.9.17](http://10.3.9.17/).日志

```
日志（x ：数字）：数字日志（x ：vec2 ）：vec2日志（x ：vec3 ）：vec3日志（x ：vec4 ）：vec4   
 
 
 
```

返回x的自然对数（以e为底）。

```
{ “显示” ：“日志（$ {密度}）> 1.0 ” }
        

```

#### [10.3.9.18](http://10.3.9.18/).exp2

```
exp2 ( x : Number ) : Number exp2 ( x : vec2 ) : vec2 exp2 ( x : vec3 ) : vec3 exp2 ( x : vec4 ) : vec4   
 
 
 
```

返回 2 的x次方。

```
{ “显示” ：“ exp2 （$ {密度}）> 1.0 ” }
        

```

#### [10.3.9.19](http://10.3.9.19/).log2

```
log2 ( x : Number ) : Number log2 ( x : vec2 ) : vec2 log2 ( x : vec3 ) : vec3 log2 ( x : vec4 ) : vec4   
 
 
 
```

返回x的以 2 为底的对数。

```
{ “显示” ：“ log2 （$ {密度}）> 1.0 ” }
        

```

#### [10.3.9.20](http://10.3.9.20/).分形

```
fract （x ：Number ）：Number fract （x ：vec2 ）：vec2 fract （x ：vec3 ）：vec3 fract （x ：vec4 ）：vec4   
 
 
 
```

返回x的小数部分。相当于x — floor(x)。

```
{ “颜色” ：“颜色（）*分形（$ {密度}）” }
       

```

#### [10.3.9.21](http://10.3.9.21/).战俘

```
pow （底数：Number ，指数：Number ）：数字pow （底数：vec2 ，指数：vec2 ）：vec2 pow （底数：vec3 ，指数：vec3 ）：vec3 pow （底数：vec4 ，指数：vec4 ）：vec4     
  
  
  
```

返回base的exponent次方。

```
{ “ show ” : “ pow ( $ { Density }, $ { Temperature }) > 1.0 ” }
        

```

#### [10.3.9.22](http://10.3.9.22/).分钟

```
min ( x : Number , y : Number ) : Number min ( x : vec2 , y : vec2 ) : vec2 min ( x : vec3 , y : vec3 ) : vec3 min ( x : vec4 , y : vec4 ) : vec4    
 
 
 
```

```
min （x ：Number ，y ：Number ）：Number min （x ：vec2 ，y ：Number ）：vec2 min （x ：vec3 ，y ：Number ）：vec3 min （x ：vec4 ，y ：Number ）：vec4    
  
  
  
```

返回x和y中较小的一个。

```
{ “ show ” : “ min ( $ { Width }, $ { Height }) > 10.0 ” }
        

```

#### [10.3.9.23](http://10.3.9.23/).最大限度

```
max （x ：Number ，y ：Number ）：Number max （x ：vec2 ，y ：vec2 ）：vec2 max （x ：vec3 ，y ：vec3 ）：vec3 max （x ：vec4 ，y ：vec4 ）：vec4    
 
 
 
```

```
max （x ：Number ，y ：Number ）：Number max （x ：vec2 ，y ：Number ）：vec2 max （x ：vec3 ，y ：Number ）：vec3 max （x ：vec4 ，y ：Number ）：vec4    
  
  
  
```

返回x和y中的较大者。

```
{ “显示” ：“最大（$ {宽度}，$ {高度}）> 10.0 ” }
        

```

#### [10.3.9.24](http://10.3.9.24/).夹钳

    clamp （x ：Number ，  min ：Number ，max ：Number ）：Number clamp （x ：vec2 ，  min ：vec2 ，max ：vec2 ）：vec2 clamp （x ：vec3 ，  min ：vec3 ，max ：vec3 ）：vec3 clamp （x : vec4 ,     
     
     
      最小值：vec4 ，最大值：vec4 ）：vec4 



    clamp （x ：Number ，  min ：Number ，max ：Number ）：Number clamp （x ：vec2 ，  min ：Number ，max ：Number ）：vec2 clamp （x ：vec3 ，  min ：Number ，max ：Number ）：vec3 clamp （x : vec4     
       
       
    ,   min :数字, max :数字) : vec4   

限制x位于min和max之间。

```
{ “颜色” ：“颜色（）*钳位（$ {温度}，0.1，0.2 ）” }
         

```

#### [10.3.9.25](http://10.3.9.25/).混合

    混合（x ：数字，  y ：数字，a ：数字）：数字混合（x ：vec2 ，  y ：vec2 ，a ：vec2 ）：vec2混合（x ：vec3 ，  y ：vec3 ，a ：vec3 ）：vec3混合（x : vec4 ,   y     
     
     
    : vec4 ,一个: vec4 ) : vec4 



    mix ( x : Number ,   y : Number , a : Number ) : Number mix ( x : vec2 ,   y : vec2 , a : Number ) : vec2 mix ( x : vec3 ,   y : vec3 , a : Number ) : vec3 mix ( x : vec4 ,   y     
      
      
    : vec4 , a :数字) : vec4  

计算x和y的线性插值。

```
{ “显示” ：“混合（20.0 ，$ {角度}，0.5 ）> 25.0 ” }
         

```

#### [10.3.9.26](http://10.3.9.26/).长度

```
长度（x ：数字）：数字长度（x ：vec2 ）：vec2长度（x ：vec3 ）：vec3长度（x ：vec4 ）：vec4   
 
 
 
```

计算向量x的长度，即分量平方和的平方根。如果x是数字，则length返回x。

```
{ “显示” ：“长度（$ {尺寸}）> 10.0 ” }
        

```

#### [10.3.9.27](http://10.3.9.27/).距离

```
距离（x ：数字，y ：数字）：数字距离（x ：vec2 ，y ：vec2 ）：vec2距离（x ：vec3 ，y ：vec3 ）：vec3距离（x ：vec4 ，y ：vec4 ）：vec4    
 
 
 
```

计算两点x和y之间的距离，即length(x — y)。

```
{ “显示” ：“距离（$ { BottomRight }，$ { UpperLeft }）> 50.0 ” }
        

```

#### [10.3.9.28](http://10.3.9.28/).归一化

```
标准化（x ：数字）：数字标准化（x ：vec2 ）：vec2标准化（x ：vec3 ）：vec3标准化（x ：vec4 ）：vec4   
 
 
 
```

返回与x平行的长度为 1.0 的向量。当x是数字时，normalize返回 1.0。

```
{ “显示” ：“归一化（$ { RightVector }，$ { UpVector }）> 0.5 ” }
        

```

#### [10.3.9.29](http://10.3.9.29/).点

```
点（x ：数字，y ：数字）：数字点（x ：vec2 ，y ：vec2 ）：vec2点（x ：vec3 ，y ：vec3 ）：vec3点（x ：vec4 ，y ：vec4 ）：vec4    
 
 
 
```

计算x和y的点积。

```
{ “显示” ：“点（$ { RightVector }，$ { UpVector }）> 0.5 ” }
        

```

#### [10.3.9.30](http://10.3.9.30/).叉

    交叉（x ：vec3 ，y ：vec3 ）：vec3 

计算x和y的叉积。此函数仅接受vec3参数。

```
{ “颜色” ：“ vec4 （交叉（$ { RightVector }，$ { UpVector }），1.0 ）” }
       

```

### 10.3.10.笔记

不支持评论。

## 10.4. 点云

点[云](https://portal.ogc.org/files/102132#tileformats-pointcloud-point-cloud)是可以像其他要素一样设置样式的点的集合。除了评估点的颜色和显示属性外，点云样式还可以评估pointSize或每个点的大小（以像素为单位）。默认的pointSize是1.0。

```
{ “颜色” ：“颜色（'红色'）”，“ pointSize ” ：“ $ {温度} * 0.5 ” }
      
        

```

实现可能会将评估的pointSize限制在系统支持的点大小范围内。例如，WebGL 渲染器可能会查询ALIASED\_POINT\_SIZE\_RANGE以获取使用POINTS渲染时的系统限制。应支持1.0的pointSize 。

点云样式还可以引用[要素表](https://portal.ogc.org/files/102132#tileformats-pointcloud-feature-table)中的语义，包括位置、颜色和法线，以允许对源数据进行更灵活的样式设置。

*   \${POSITION}是一个vec3，存储应用RTC\_CENTER和平铺变换之前点的 xyz 笛卡尔坐标。当位置被量化时，\${POSITION}指的是应用QUANTIZED\_VOLUME\_SCALE之后但应用QUANTIZED\_VOLUME\_OFFSET之前的位置。
*   \${POSITION\_ABSOLUTE}是一个vec3 ，存储应用RTC\_CENTER和平铺变换后点的 xyz 笛卡尔坐标。当位置被量化时，\${POSITION\_ABSOLUTE}指的是应用QUANTIZED\_VOLUME\_SCALE、QUANTIZED\_VOLUME\_OFFSET和平铺变换后的位置。
*   \${COLOR}评估为Color存储点的 rgba 颜色。当特征表的颜色语义为RGB或RGB565时，\${COLOR}.alpha为1.0。如果未定义颜色语义，则\${COLOR}计算为特定于应用程序的默认颜色。
*   \${NORMAL}是一个vec3，存储应用平铺变换之前点的笛卡尔坐标法线。当法线是 oct 编码时，\${NORMAL}指的是解码后的法线。如果特征表中没有定义正常语义，则\${NORMAL} 的计算结果为undefined。

例如：

```
{ “ color ” ：“ $ { COLOR } * color (' red ') '”，    “show”：“${POSITION}.x > 0.5”，    “pointSize”：“${NORMAL}.x > 0 ? 2 : 1” }
       



```

注意  点云样式引擎可能经常使用着色器 (GLSL) 实现，但是表达式语言的某些功能在纯 GLSL 实现中是不可能的。其中一些功能包括：

*   isNaN和isFinite的评估（GLSL 2.0+分别支持这些函数的isnan和isinf ）
*   类型null和undefined
*   字符串，包括访问对象属性 ( color()\['r'] ) 和批处理表值
*   常用表达
*   长度不是 2、3 或 4 的数组
*   不匹配的类型比较（例如1.0 === false）
*   数组索引越界

## 10.5.文件扩展名和媒体类型

Tileset 样式使用.json扩展名和application/json媒体类型。

**附件 A**\
（规范性）\
**属性参考**
========

## A.1. 资产

关于整个 tileset 的元数据。

表 A.1——资产属性

|               | 类型                                                            | 描述                                                  | 必需的 |
| :------------ | :------------------------------------------------------------ | :-------------------------------------------------- | :-- |
| **版本**        | 细绳                                                            | 3D Tile版本。该版本定义了 tileset JSON 的 JSON 模式和基本的 tile 格式集。 | ✓ 是 |
| **tileset版本** | 细绳                                                            | 此 tileset 的特定应用程序版本，例如，用于更新现有 tileset 时。            | 不   |
| **扩展名**       | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                      | 不   |
| **临时演员**      | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                         | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[asset.schema.json](https://portal.ogc.org/files/102132#reference-schema-asset)

### A.1.1. 资产版本

3D Tile版本。该版本定义了 tileset JSON 的 JSON 模式和基本的 tile 格式集。

*   **类型**：字符串
*   **要求**：✓ 是

### A.1.2. asset.tileset版本

此 tileset 的特定应用程序版本，例如，用于更新现有 tileset 时。

*   **类型**：字符串
*   **要求**：否

### A.1.3. 资产.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.1.4. asset.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A2.可用性

描述一组元素可用性的对象。

表 A.2——可用性属性

|          | 类型                                                            | 描述                                                                         | 必需的 |
| :------- | :------------------------------------------------------------ | :------------------------------------------------------------------------- | :-- |
| **比特流**  | 整数                                                            | 指示每个元素是否可用的缓冲区视图的索引。比特流符合 3D 元数据规范中描述的布尔数组编码。如果一个元素可用，则其位为 1，如果不可用，则其位为 0。 | 不   |
| **可用计数** | 整数                                                            | 一个数字，指示可用性比特流中存在多少个 1 比特。                                                  | 不   |
| **持续的**  | 整数                                                            | 指示是所有元素都可用 (1) 还是全部不可用 (0) 的整数。                                            | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                             | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                                | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[availability.schema.json](https://portal.ogc.org/files/102132#reference-schema-availability)

### A.2.1. 可用性.bitstream

指示每个元素是否可用的缓冲区视图的索引。比特流符合 3D 元数据规范中描述的布尔数组编码。如果一个元素可用，则其位为 1，如果不可用，则其位为 0。

*   **类型**：整数
*   **要求**：否
*   **最小值**：>= 0

### A.2.2. 可用性.availableCount

一个数字，指示可用性比特流中存在多少个 1 比特。

*   **类型**：整数
*   **要求**：否
*   **最小值**：>= 0

### A.2.3.  [可用性.常数](http://availability.constant/)

指示是所有元素都可用 (1) 还是全部不可用 (0) 的整数。

*   **类型**：整数
*   **要求**：否
*   **允许值**：

    *   0不可用
    *   1 个可用

### A.2.4.可用性.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.2.5.可用性.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.3. 批处理的 3D 模型特征表

一组批处理 3D 模型语义，其中包含有关图块中要素的附加信息。

表 A.3 —批处理 3D 模型特征表属性

|                   | 类型                                                                                                                                                   | 描述                                                                         | 必需的 |
| :---------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | :-- |
| **BATCH\_LENGTH** | [featureTable-定义-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)                | 定义所有要素的整数属性的GlobalPropertyInteger对象。3D Tiles 规范中描述了有关此属性的详细信息。             | ✓ 是 |
| **RTC\_中心**       | [featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3) | 一个GlobalPropertyCartesian3对象，为所有特征定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。 | 不   |
| **扩展名**           | [扩大](https://portal.ogc.org/files/102132#reference-extension)                                                                                        | 具有扩展特定对象的字典对象。                                                             | 不   |
| **临时演员**          | [临时演员](https://portal.ogc.org/files/102132#reference-extras)                                                                                         | 特定于应用程序的数据。                                                                | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[b3dm.featureTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-b3dm-featuretable)

### A.3.1. b3dm.featureTable.BATCH\_LENGTH

定义所有要素的整数属性的GlobalPropertyInteger对象。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)
*   **要求**：✓ 是

### A.3.2. b3dm.featureTable.RTC\_CENTER

一个GlobalPropertyCartesian3对象，为所有特征定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3)
*   **要求**：否

### A.3.3. b3dm.featureTable.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.3.4. b3dm.featureTable.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.4. 批处理表

一组属性，为图块中的要素定义特定于应用程序的元数据。

表 A.4 —批处理表属性

|          | 类型                                                            | 描述             | 必需的 |
| :------- | :------------------------------------------------------------ | :------------- | :-- |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。 | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。    | 不   |

*   **允许附加属性。**
*   **附加属性的类型**：[batchTable-definitions-property](https://portal.ogc.org/files/102132#reference-batchtable-definitions-property)
*   **JSON 架构**：[batchTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-batchtable)

### A.4.1. batchTable.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.4.2. batchTable.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

### A.4.3.  **批处理表定义**

#### A.4.3.1.batchTable-定义-binaryBodyReference

如果未在 JSON 中直接定义，则定义对存储属性值的批处理表的二进制主体部分的引用的对象。

*   **类型**：[根属性](https://portal.ogc.org/files/102132#reference-rootproperty)

表 A.5 — BinaryBodyReference属性

|           | 类型                                                            | 描述                | 必需的 |
| :-------- | :------------------------------------------------------------ | :---------------- | :-- |
| **字节偏移量** | 整数                                                            | 缓冲区中的偏移量（以字节为单位）。 | ✓ 是 |
| **组件类型**  | 细绳                                                            | 属性中组件的数据类型。       | ✓ 是 |
| **类型**    | 细绳                                                            | 指定属性是标量还是向量。      | ✓ 是 |
| **扩展名**   | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。    | 不   |
| **临时演员**  | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。       | 不   |

*   **允许附加属性。**

#### A.4.3.2.batchTable-定义-binaryBodyReference.byteOffset

缓冲区中的偏移量（以字节为单位）。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 0

#### A.4.3.3.  [batchTable-定义-binaryBodyReference.componentType](http://batchtable-definitions-binarybodyreference.componenttype/)

属性中组件的数据类型。

*   **类型**：字符串
*   **要求**：✓ 是
*   **允许值**：

    *   “字节”
    *   “UNSIGNED\_BYTE”
    *   “短的”
    *   “UNSIGNED\_SHORT”
    *   “情报”
    *   “UNSIGNED\_INT”
    *   “漂浮”
    *   “双倍的”

#### A.4.3.4.batchTable-definitions-binaryBodyReference.type

指定属性是标量还是向量。

*   **类型**：字符串
*   **要求**：✓ 是
*   **允许值**：

    *   “标量”
    *   “VEC2”
    *   “VEC3”
    *   “VEC4”

#### A.4.3.5.batchTable-definitions-binaryBodyReference.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

#### A.4.3.6. batchTable-definitions-binaryBodyReference.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

#### A.4.3.7.batchTable-定义-属性

一个用户定义的属性，用于指定磁贴中每个功能的特定于应用程序的元数据。值可以直接在 JSON 中定义为数组，也可以使用BinaryBodyReference对象引用二进制主体中的部分。

*   \*\*类型： \*\*[batchTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-batchtable-definitions-binarybodyreference)之一，数组
*   **允许附加属性。**

## A.5. 边界体积

包围图块或其内容的边界体积。至少需要一个边界体积属性。边界体积包括box、region或sphere。

表 A.6 —边界体积属性

|          | 类型                                                            | 描述                                                                                                                                            | 必需的 |
| :------- | :------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| **盒子**   | 数量 \[12]                                                      | 定义定向边界框的 12 个数字的数组。前三个元素定义框中心的 x、y 和 z 值。接下来的三个元素（索引为 3、4 和 5）定义了 x 轴方向和半长。接下来的三个元素（索引 6、7 和 8）定义了 y 轴方向和半长。最后三个元素（索引 9、10 和 11）定义了 z 轴方向和半长。 | 不   |
| **地区**   | 编号 \[6]                                                       | 定义 EPSG:4979 中边界地理区域的六个数字的数组，坐标顺序为 \[west, south, east, north, minimum height, maximum height]。经度和纬度以弧度为单位，高度以高于（或低于）WGS84 椭球的米为单位。           | 不   |
| **领域**   | 编号 \[4]                                                       | 定义边界球体的四个数字的数组。前三个元素定义球体中心的 x、y 和 z 值。最后一个元素（索引为 3）定义了以米为单位的半径。                                                                               | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                                                                                                | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                                                                                                   | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[boundingVolume.schema.json](https://portal.ogc.org/files/102132#reference-schema-boundingvolume)

### A.5.1. 包围盒.box

定义定向边界框的 12 个数字的数组。前三个元素定义框中心的 x、y 和 z 值。接下来的三个元素（索引为 3、4 和 5）定义了 x 轴方向和半长。接下来的三个元素（索引 6、7 和 8）定义了 y 轴方向和半长。最后三个元素（索引 9、10 和 11）定义了 z 轴方向和半长。

*   **类型**：数字 \[12]
*   **要求**：否

### A.5.2.边界体积.region

定义 EPSG:4979 中边界地理区域的六个数字的数组，坐标顺序为 \[west, south, east, north, minimum height, maximum height]。经度和纬度以弧度为单位，高度以高于（或低于）WGS84 椭球的米为单位。

*   **类型**：数字 \[6]
*   **要求**：否

### A.5.3. boundingVolume.sphere

定义边界球体的四个数字的数组。前三个元素定义球体中心的 x、y 和 z 值。最后一个元素（索引为 3）定义了以米为单位的半径。

*   **类型**：数字 \[4]
*   **要求**：否

### A.5.4.boundingVolume.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.5.5.boundingVolume.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.6. 缓冲

缓冲区是一个二进制 blob。它要么是子树文件的二进制块，要么是 URI 引用的外部缓冲区。

表 A.7 —缓冲区属性

|          | 类型                                                            | 描述                                                                                                                   | 必需的 |
| :------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------- | :-- |
| **乌里**   | 细绳                                                            | 外部架构文件的 URI（或 IRI）。相对路径是相对于包含缓冲区 JSON 的文件的。uri在使用 JSON 子树格式时是必需的，而在使用二进制子树格式时则不需要——当省略时，缓冲区指的是子树文件的二进制块。不允许使用数据 URI。 | 不   |
| **字节长度** | 整数                                                            | 缓冲区的长度（以字节为单位）。                                                                                                      | ✓ 是 |
| **姓名**   | 细绳                                                            | 缓冲区的名称。                                                                                                              | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                                                                       | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                                                                          | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[buffer.schema.json](https://portal.ogc.org/files/102132#reference-schema-buffer)

### A.6.1. 缓冲区.uri

外部架构文件的 URI（或 IRI）。相对路径是相对于包含缓冲区 JSON 的文件的。uri在使用 JSON 子树格式时是必需的，而在使用二进制子树格式时则不需要——当省略时，缓冲区指的是子树文件的二进制块。不允许使用数据 URI。

*   **类型**：字符串
*   **要求**：否
*   **格式**: iri-reference

### A.6.2. 缓冲区.byteLength

缓冲区的长度（以字节为单位）。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 1

### A.6.3. 缓冲区名称

缓冲区的名称。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.6.4.缓冲.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.6.5.缓冲区.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.7. 缓冲区视图

缓冲区的连续子集

表 A.8 —缓冲区视图属性

|           | 类型                                                            | 描述                | 必需的 |
| :-------- | :------------------------------------------------------------ | :---------------- | :-- |
| **缓冲**    | 整数                                                            | 缓冲区的索引。           | ✓ 是 |
| **字节偏移量** | 整数                                                            | 缓冲区中的偏移量（以字节为单位）。 | ✓ 是 |
| **字节长度**  | 整数                                                            | 缓冲区视图的总字节长度。      | ✓ 是 |
| **姓名**    | 细绳                                                            | 缓冲区视图的名称。         | 不   |
| **扩展名**   | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。    | 不   |
| **临时演员**  | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。       | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[bufferView.schema.json](https://portal.ogc.org/files/102132#reference-schema-bufferview)

### A.7.1. 缓冲视图.buffer

缓冲区的索引。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 0

### A.7.2. bufferView\.byteOffset

缓冲区中的偏移量（以字节为单位）。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 0

### A.7.3. bufferView.字节长度

缓冲区视图的总字节长度。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 1

### A.7.4. 缓冲区视图名称

缓冲区视图的名称。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.7.5. bufferView.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.7.6. bufferView\.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.8. 班级

包含一组属性的类。

表 A.9 —类属性

|          | 类型                                                            | 描述                                                                                         | 必需的 |
| :------- | :------------------------------------------------------------ | :----------------------------------------------------------------------------------------- | :-- |
| **姓名**   | 细绳                                                            | 类的名称，例如用于显示目的。                                                                             | 不   |
| **描述**   | 细绳                                                            | 类的描述。                                                                                      | 不   |
| **特性**   | 目的                                                            | 一个字典，其中每个键都是一个属性 ID，每个值都是一个定义属性的对象。属性 ID 应是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字母数字标识符。 | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                                             | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                                                | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[class.schema.json](https://portal.ogc.org/files/102132#reference-schema-class)

### A.8.1. 班级名称

类的名称，例如用于显示目的。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.8.2.  [类.描述](http://class.description/)

类的描述。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.8.3. 类.属性

一个字典，其中每个键都是一个属性 ID，每个值都是一个定义属性的对象。属性 ID 应是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字母数字标识符。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：[class.property](https://portal.ogc.org/files/102132#reference-class-property)

### A.8.4. 类.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.8.5. 类.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.9. 类属性

元数据类的单个属性。

表 A.10 —类属性属性

|          | 类型                                                                                                       | 描述                                                                                                                                  | 必需的        |
| :------- | :------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------- | :--------- |
| **姓名**   | 细绳                                                                                                       | 属性的名称，例如用于显示目的。                                                                                                                     | 不          |
| **描述**   | 细绳                                                                                                       | 属性的描述。                                                                                                                              | 不          |
| **类型**   | 细绳                                                                                                       | 元素类型。                                                                                                                               | ✓ 是        |
| **组件类型** | 细绳                                                                                                       | 元素组件的数据类型。仅适用于SCALAR、VECN和MATN类型。                                                                                                   | 不          |
| **枚举类型** | 细绳                                                                                                       | 枚举字典中声明的枚举 ID 。当类型为ENUM时是必需的。                                                                                                       | 不          |
| **大批**   | 布尔值                                                                                                      | 属性是否为数组。定义计数时，该属性是一个固定长度的数组。否则该属性是可变长度数组。                                                                                           | 否，默认：false |
| **数数**   | 整数                                                                                                       | 数组元素的数量。只能在array为true时定义。                                                                                                           | 不          |
| **归一化**  | 布尔值                                                                                                      | 指定是否规范化整数值。仅适用于具有整数组件类型的SCALAR、VECN和MATN类型。对于无符号整数组件类型，值在\[0.0, 1.0]之间进行归一化。对于有符号整数组件类型，值在\[-1.0, 1.0]之间标准化。对于所有其他组件类型，此属性应为 false。 | 否，默认：false |
| **抵消**   | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | 应用于属性值的偏移量。仅当组件类型为FLOAT32或FLOAT64或属性已规范化时，才适用于SCALAR、VECN和MATN类型。                                                                   | 不          |
| **规模**   | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | 应用于属性值的比例。仅当组件类型为FLOAT32或FLOAT64或属性已规范化时，才适用于SCALAR、VECN和MATN类型。                                                                    | 不          |
| **最大限度** | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | 属性的最大允许值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的最大值。                                                       | 不          |
| **分钟**   | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | 属性的最小允许值。仅适用于SCALAR、VECN和MATN类型。在应用基于normalized、offset和scale属性的转换之后，这是所有属性值中的最小值。                                                   | 不          |
| **必需的**  | 布尔值                                                                                                      | 如果需要，该属性应存在于符合该类的每个实体中。如果不需要，单个实体可以包含noData值，或者可以省略整个属性。因此，noData对必需的属性没有影响。客户端实现可以使用所需的属性来进行性能优化。                                  | 否，默认：false |
| **没有数据** | [定义-定义-noDataValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-nodatavalue)   | noData值代表缺失数据（也称为标记值），无论它出现在哪里。BOOLEAN属性不能指定noData值。这是作为普通属性值给出的，没有来自normalized、offset和scale属性的转换。如果required为真，则不应定义。               | 不          |
| **默认**   | [定义-定义-anyValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-anyvalue)         | 遇到noData值或省略的属性时使用的默认值。该值以其最终形式给出，并考虑了normalized、offset和scale属性的影响。如果required为真，则不应定义。                                              | 不          |
| **语义的**  | 细绳                                                                                                       | 描述应如何解释此属性的标识符。该语义不能被类中的其他属性使用。                                                                                                     | 不          |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension)                                            | 具有扩展特定对象的字典对象。                                                                                                                      | 不          |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)                                             | 特定于应用程序的数据。                                                                                                                         | 不          |

*   **允许附加属性。**
*   **JSON 架构**：[class.property.schema.json](https://portal.ogc.org/files/102132#reference-schema-class-property)

### A.9.1. 类.属性.名称

属性的名称，例如用于显示目的。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.9.2.  [类.属性.描述](http://class.property.description/)

属性的描述。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.9.3. 类.属性.类型

元素类型。

*   **类型**：字符串
*   **要求**：✓ 是
*   **允许值**：

    *   “标量”
    *   “VEC2”
    *   “VEC3”
    *   “VEC4”
    *   “垫2”
    *   “垫3”
    *   “垫4”
    *   “细绳”
    *   “布尔值”
    *   “枚举”

### A.9.4.  [类.property.componentType](http://class.property.componenttype/)

元素组件的数据类型。仅适用于SCALAR、VECN和MATN类型。

*   **类型**：字符串
*   **要求**：否
*   **允许值**：

    *   “INT8”
    *   “UINT8”
    *   “INT16”
    *   “UINT16”
    *   “INT32”
    *   “UINT32”
    *   “INT64”
    *   “UINT64”
    *   “FLOAT32”
    *   “浮动64”

### A.9.5. 类.property.enumType

枚举字典中声明的枚举 ID 。当类型为ENUM时是必需的。

*   **类型**：字符串
*   **要求**：否

### A.9.6. 类.属性.array

属性是否为数组。定义计数时，该属性是一个固定长度的数组。否则该属性是可变长度数组。

*   **类型**：布尔值
*   **必需**：否，默认值：false

### A.9.7.  [类.property.count](http://class.property.count/)

数组元素的数量。只能在array为true时定义。

*   **类型**：整数
*   **要求**：否
*   **最小值**：>= 2

### A.9.8.  [类.property.normalized](http://class.property.normalized/)

指定是否规范化整数值。仅适用于具有整数组件类型的SCALAR、VECN和MATN类型。对于无符号整数组件类型，值在\[0.0, 1.0]之间进行归一化。对于有符号整数组件类型，值在\[-1.0, 1.0]之间标准化。对于所有其他组件类型，此属性应为 false。

*   **类型**：布尔值
*   **必需**：否，默认值：false

### A.9.9. 类.property.offset

应用于属性值的偏移量。仅当组件类型为FLOAT32或FLOAT64或属性已规范化时，才适用于SCALAR、VECN和MATN类型。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.9.10. 类.属性.规模

应用于属性值的比例。仅当组件类型为FLOAT32或FLOAT64或属性已规范化时，才适用于SCALAR、VECN和MATN类型。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.9.11.类.property.max

属性的最大允许值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的最大值。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.9.12.类.property.min

属性的最小允许值。仅适用于SCALAR、VECN和MATN类型。在应用基于normalized、offset和scale属性的转换之后，这是所有属性值中的最小值。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.9.13. 类.property.required

如果需要，该属性应存在于符合该类的每个实体中。如果不需要，单个实体可以包含noData值，或者可以省略整个属性。因此，noData对必需的属性没有影响。客户端实现可以使用所需的属性来进行性能优化。

*   **类型**：布尔值
*   **必需**：否，默认值：false

### A.9.14.  [类.property.noData](http://class.property.nodata/)

noData值代表缺失数据（也称为标记值），无论它出现在哪里。BOOLEAN属性不能指定noData值。这是作为普通属性值给出的，没有来自normalized、offset和scale属性的转换。如果required为真，则不应定义。

*   **类型**：[定义-定义-noDataValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-nodatavalue)
*   **要求**：否

### A.9.15.  [类.property.default](http://class.property.default/)

遇到noData值或省略的属性时使用的默认值。该值以其最终形式给出，并考虑了normalized、offset和scale属性的影响。如果required为真，则不应定义。

*   **类型**：[定义-定义-anyValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-anyvalue)
*   **要求**：否

### A.9.16.  [类.属性.语义](http://class.property.semantic/)

描述应如何解释此属性的标识符。该语义不能被类中的其他属性使用。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.9.17. 类.属性.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.9.18.类.property.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.10. 内容

有关磁贴内容的元数据和指向内容的链接。

表 A.11 —内容属性

|          | 类型                                                                    | 描述                                                                                                                                                          | 必需的 |
| :------- | :-------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| **边界体积** | [边界体积](https://portal.ogc.org/files/102132#reference-boundingvolume)  | 一个可选的边界体积，它紧紧地包围着图块内容。tile.boundingVolume 提供空间连贯性，而[tile.content.boundingVolume](http://tile.content.boundingvolume/)实现紧密的视锥体剔除。省略时，使用 tile.boundingVolume。 | 不   |
| **乌里**   | 细绳                                                                    | 指向磁贴内容的 uri。当 uri 是相对的时，它是相对于引用的 tileset JSON 文件的。                                                                                                          | ✓ 是 |
| **元数据**  | [元数据实体](https://portal.ogc.org/files/102132#reference-metadataentity) | 与此内容关联的元数据。                                                                                                                                                 | 不   |
| **团体**   | 整数                                                                    | 此内容所属的组。该值是为包含 tileset 定义的组数组的索引。                                                                                                                           | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension)         | 具有扩展特定对象的字典对象。                                                                                                                                              | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)          | 特定于应用程序的数据。                                                                                                                                                 | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[content.schema.json](https://portal.ogc.org/files/102132#reference-schema-content)

### A.10.1. content.boundingVolume

一个可选的边界体积，它紧紧地包围着图块内容。tile.boundingVolume 提供空间连贯性，而[tile.content.boundingVolume](http://tile.content.boundingvolume/)实现紧密的视锥体剔除。省略时，使用 tile.boundingVolume。

*   **类型**：[边界体积](https://portal.ogc.org/files/102132#reference-boundingvolume)
*   **要求**：否
*   **最小属性数**：1

### A.10.2. 内容.uri

指向磁贴内容的 uri。当 uri 是相对的时，它是相对于引用的 tileset JSON 文件的。

*   **类型**：字符串
*   **要求**：✓ 是

### A.10.3. 内容.元数据

与此内容关联的元数据。

*   **类型**：[元数据实体](https://portal.ogc.org/files/102132#reference-metadataentity)
*   **要求**：否

### A.10.4. 内容组

此内容所属的组。该值是为包含 tileset 定义的组数组的索引。

*   **类型**：整数
*   **要求**：否
*   **最小值**：>= 0

### A.10.5.内容.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.10.6. 内容.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.11. 定义

模式文件中使用的通用定义。

*   **允许附加属性。**
*   **JSON 模式**：[definitions.schema.json](https://portal.ogc.org/files/102132#reference-schema-definitions)

### A.11.1.  **定义定义**

#### A.11.1.1.定义-定义-numericArray1D

数值数组

*   **类型**：数字 \[1-\*]
*   **最少项目**：1
*   **允许附加属性。**

#### A.11.1.2.定义-定义-numericArray2D

数值数组的数组

*   **类型**：[定义-定义-numericArray1D](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericarray1d) \[1-\*]
*   **最少项目**：1
*   **允许附加属性。**

#### A.11.1.3.定义-定义-booleanArray1D

布尔值数组

*   **类型**：布尔值 \[1-\*]
*   **最少项目**：1
*   **允许附加属性。**

#### A.11.1.4.定义-定义-stringArray1D

字符串值数组

*   **类型**：字符串 \[1-\*]
*   **最少项目**：1
*   **允许附加属性。**

#### A.11.1.5.定义-定义-numericValue

对于SCALAR，这是一个数字。对于VECN，这是一个包含N 个数字的数组。对于MATN，这是一个N²数字数组。对于固定长度数组，这是给定类型的计数元素数组。

*   \*\*类型： \*\*number、[definitions-definitions-numericArray1D](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericarray1d)、[definitions-definitions-numericArray2D](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericarray2d)之一
*   **允许附加属性。**

#### A.11.1.6.定义-定义-noDataValue

对于SCALAR，这是一个数字。对于STRING，这是一个字符串。对于ENUM，这是一个字符串，它应该是一个有效的枚举名称，而不是一个整数值。对于VECN，这是一个包含N 个数字的数组。对于MATN，这是一个N²数字数组。对于固定长度数组，这是给定类型的计数元素数组。

*   \*\*类型： \*\*[definitions-definitions-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)、string、[definitions-definitions-stringArray1D](https://portal.ogc.org/files/102132#reference-definitions-definitions-stringarray1d)之一
*   **允许附加属性。**

#### A.11.1.7.定义-定义-anyValue

对于SCALAR，这是一个数字。对于STRING，这是一个字符串。对于ENUM，这是一个字符串，它应该是一个有效的枚举名称，而不是一个整数值。对于BOOLEAN，这是一个布尔值。对于VECN，这是一个包含N 个数字的数组。对于MATN，这是一个N²数字数组。对于固定长度数组，这是给定类型的计数元素数组。对于可变长度数组，这是给定类型的任意长度的数组。

*   \*\*类型： \*\*[definitions-definitions-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)、string、[definitions-definitions-stringArray1D](https://portal.ogc.org/files/102132#reference-definitions-definitions-stringarray1d)、boolean、[definitions-definitions-booleanArray1D](https://portal.ogc.org/files/102132#reference-definitions-definitions-booleanarray1d)之一
*   **允许附加属性。**

## A.12. 枚举

定义枚举值的对象。

表 A.12 —枚举属性

|          | 类型                                                                      | 描述                     | 必需的          |
| :------- | :---------------------------------------------------------------------- | :--------------------- | :----------- |
| **姓名**   | 细绳                                                                      | 枚举的名称，例如用于显示目的。        | 不            |
| **描述**   | 细绳                                                                      | 枚举的描述。                 | 不            |
| **值类型**  | 细绳                                                                      | 整数枚举值的类型。              | 否，默认值：UINT16 |
| **价值观**  | [枚举值](https://portal.ogc.org/files/102132#reference-enum-value) \[1-\*] | 枚举值数组。不允许重复的名称或重复的整数值。 | ✓ 是          |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension)           | 具有扩展特定对象的字典对象。         | 不            |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)            | 特定于应用程序的数据。            | 不            |

*   **允许附加属性。**
*   **JSON 架构**：[enum.schema.json](https://portal.ogc.org/files/102132#reference-schema-enum)

### A.12.1.枚举名称

枚举的名称，例如用于显示目的。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.12.2.  [枚举.描述](http://enum.description/)

枚举的描述。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.12.3.枚举值类型

整数枚举值的类型。

*   **类型**：字符串
*   **必需**：否，默认值：UINT16
*   **允许值**：

    *   “INT8”
    *   “UINT8”
    *   “INT16”
    *   “UINT16”
    *   “INT32”
    *   “UINT32”
    *   “INT64”
    *   “UINT64”

### A.12.4.枚举值

枚举值数组。不允许重复的名称或重复的整数值。

*   **类型**：[枚举值](https://portal.ogc.org/files/102132#reference-enum-value) \[1-\*]
*   **要求**：✓ 是

### A.12.5.枚举.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.12.6.枚举.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.13. 枚举值

一个枚举值。

表 A.13 —枚举值属性

|          | 类型                                                            | 描述             | 必需的 |
| :------- | :------------------------------------------------------------ | :------------- | :-- |
| **姓名**   | 细绳                                                            | 枚举值的名称。        | ✓ 是 |
| **描述**   | 细绳                                                            | 枚举值的描述​​。      | 不   |
| **价值**   | 整数                                                            | 整数枚举值。         | ✓ 是 |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。 | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。    | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[enum.value.schema.json](https://portal.ogc.org/files/102132#reference-schema-enum-value)

### A.13.1.枚举值名称

枚举值的名称。

*   **类型**：字符串
*   **要求**：✓ 是
*   **最小长度**：>= 1

### A.13.2.  [枚举值描述](http://enum.value.description/)

枚举值的描述​​。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.13.3. 枚举值

整数枚举值。

*   **类型**：整数
*   **要求**：✓ 是

### A.13.4. 枚举值扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.13.5.enum.value.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.14. 扩大

具有扩展特定对象的字典对象。

*   **允许附加属性。**
*   **附加属性的类型**：对象
*   **JSON 架构**：[extension.schema.json](https://portal.ogc.org/files/102132#reference-schema-extension)

## A.15. 附加功能

特定于应用程序的数据。

*   **允许附加属性。**
*   **JSON 架构**：[extras.schema.json](https://portal.ogc.org/files/102132#reference-schema-extras)

## A.16. 特征表

一组语义，包含每个图块和每个特征值，定义图块中特征的位置和外观属性。

表 A.14 —特征表属性

|          | 类型                                                            | 描述             | 必需的 |
| :------- | :------------------------------------------------------------ | :------------- | :-- |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。 | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。    | 不   |

*   **允许附加属性。**
*   **附加属性的类型**：[featureTable-definitions-property](https://portal.ogc.org/files/102132#reference-featuretable-definitions-property)
*   **JSON 架构**：[featureTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-featuretable)

### A.16.1. featureTable.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.16.2.featureTable.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

### A.16.3.  **特征表定义**

#### A.16.3.1.featureTable-定义-binaryBodyOffset

如果未在 JSON 中直接定义，则将偏移量定义到要素表的二进制主体的一部分中，属性值将存储在该部分中。

*   **类型**：[根属性](https://portal.ogc.org/files/102132#reference-rootproperty)

表 A.15 — BinaryBodyOffset属性

|           | 类型                                                            | 描述                | 必需的 |
| :-------- | :------------------------------------------------------------ | :---------------- | :-- |
| **字节偏移量** | 整数                                                            | 缓冲区中的偏移量（以字节为单位）。 | ✓ 是 |
| **扩展名**   | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。    | 不   |
| **临时演员**  | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。       | 不   |

*   **允许附加属性。**

#### A.16.3.2.featureTable-定义-binaryBodyOffset.byteOffset

缓冲区中的偏移量（以字节为单位）。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 0

#### A.16.3.3.featureTable-definitions-binaryBodyOffset.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

#### A.16.3.4.featureTable-definitions-binaryBodyOffset.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

#### A.16.3.5.featureTable-definitions-binaryBodyReference

如果未在 JSON 中直接定义，则定义对存储属性值的特征表的二进制主体部分的引用的对象。

*   **类型**：[featureTable-definitions-binaryBodyOffset](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyoffset)

表 A.16 — BinaryBodyReference属性

|           | 类型                                                            | 描述                                             | 必需的 |
| :-------- | :------------------------------------------------------------ | :--------------------------------------------- | :-- |
| **组件类型**  | 细绳                                                            | 属性中组件的数据类型。仅当语义允许覆盖隐式组件类型时才定义它。这些案例在每个图块格式中指定。 | 不   |
| **字节偏移量** | 整数                                                            | 缓冲区中的偏移量（以字节为单位）。                              | ✓ 是 |
| **扩展名**   | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                 | 不   |
| **临时演员**  | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                    | 不   |

*   **允许附加属性。**

#### A.16.3.6.  [featureTable-定义-binaryBodyReference.componentType](http://featuretable-definitions-binarybodyreference.componenttype/)

属性中组件的数据类型。仅当语义允许覆盖隐式组件类型时才定义它。这些案例在每个图块格式中指定。

*   **类型**：字符串
*   **要求**：否
*   **允许值**：

    *   “字节”
    *   “UNSIGNED\_BYTE”
    *   “短的”
    *   “UNSIGNED\_SHORT”
    *   “情报”
    *   “UNSIGNED\_INT”
    *   “漂浮”
    *   “双倍的”

#### A.16.3.7.featureTable-定义-binaryBodyReference.byteOffset

缓冲区中的偏移量（以字节为单位）。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 0

#### A.16.3.8.featureTable-definitions-binaryBodyReference.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

#### A.16.3.9.featureTable-definitions-binaryBodyReference.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

#### A.16.3.10.特征表定义属性

一种用户定义的属性，用于指定磁贴中特定于应用程序的元数据。值可以使用BinaryBodyReference对象引用二进制主体中的部分。也可以直接在 JSON 中定义全局值。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)、[featureTable-definitions-globalPropertyBoolean](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyboolean)、[featureTable-definitions-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)、[featureTable-definitions-globalPropertyNumber](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertynumber)、[featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3)、[featureTable-definitions-globalPropertyCartesian4之一](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian4)
*   **允许附加属性。**

#### A.16.3.11.featureTable-定义-globalPropertyBoolean

为所有功能定义全局布尔属性值的对象。

*   **类型**：布尔值
*   **允许附加属性。**

#### A.16.3.12.featureTable-定义-globalPropertyInteger

为所有功能定义全局整数属性值的对象。

*   \*\*类型： \*\*[featureTable-definitions-binaryBodyOffset](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyoffset)之一，整数
*   **允许附加属性。**

#### A.16.3.13.featureTable-定义-globalPropertyNumber

为所有特征定义全局数字属性值的对象。

*   \*\*类型： \*\*[featureTable-definitions-binaryBodyOffset](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyoffset)之一，数字
*   **允许附加属性。**

#### A.16.3.14.featureTable-definitions-globalPropertyCartesian3

为所有特征定义全局 3 分量数字属性值的对象。

*   \*\*类型： \*\*[featureTable-definitions-binaryBodyOffset](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyoffset)之一，数字 \[3]
*   **允许附加属性。**

#### A.16.3.15.featureTable-definitions-globalPropertyCartesian4

为所有特征定义全局 4 分量数字属性值的对象。

*   \*\*类型： \*\*[featureTable-definitions-binaryBodyOffset](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyoffset)之一，数字 \[4]
*   **允许附加属性。**

## A.17. 组元数据

包含有关组的元数据的对象。

表 A.17 —组元数据属性

|          | 类型                                                            | 描述                                                                                                                                                                                                         | 必需的 |
| :------- | :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| **班级**   | 细绳                                                            | 属性值符合的类。该值应是在元数据模式的类字典中声明的类 ID。                                                                                                                                                                            | ✓ 是 |
| **特性**   | 目的                                                            | 一个字典，其中每个键对应于类的属性字典中的一个属性 ID，每个值都包含属性值。值的类型应与属性定义匹配：对于BOOLEAN使用true或false。对于STRING，使用 JSON 字符串。对于数字类型，使用 JSON 数字。对于ENUM使用有效的枚举名称，而不是整数值。对于ARRAY、VECN和MATN类型，使用包含与componentType匹配的值的 JSON 数组。必需的属性应包含在该词典中。 | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                                                                                                                                                             | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                                                                                                                                                                | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[group.schema.json](https://portal.ogc.org/files/102132#reference-schema-group)

### A.17.1. 组.类

属性值符合的类。该值应是在元数据模式的类字典中声明的类 ID。

*   **类型**：字符串
*   **要求**：✓ 是

### A.17.2. 组.properties

一个字典，其中每个键对应于类的属性字典中的一个属性 ID，每个值都包含属性值。值的类型应与属性定义匹配：对于BOOLEAN使用true或false。对于STRING，使用 JSON 字符串。对于数字类型，使用 JSON 数字。对于ENUM使用有效的枚举名称，而不是整数值。对于ARRAY、VECN和MATN类型，使用包含与componentType匹配的值的 JSON 数组。必需的属性应包含在该词典中。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：[definitions-definitions-anyValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-anyvalue)

### A.17.3. 群组扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.17.4. group.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.18. 实例化 3D 模型特征表

一组实例化 3D 模型语义，其中包含定义图块中实例化模型的位置和外观属性的值。

表 A.18 —实例化 3D 模型特征表属性

|                               | 类型                                                                                                                                                   | 描述                                                                         | 必需的 |
| :---------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------- | :-- |
| **位置**                        | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **POSITION\_QUANTIZED**       | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **NORMAL\_UP**                | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **正常\_右**                     | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **NORMAL\_UP\_OCT32P**        | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **NORMAL\_RIGHT\_OCT32P**     | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **规模**                        | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **SCALE\_NON\_UNIFORM**       | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **批号**                        | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。     | 不   |
| **INSTANCES\_LENGTH**         | [featureTable-定义-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)                | 定义所有要素的整数属性的GlobalPropertyInteger对象。3D Tiles 规范中描述了有关此属性的详细信息。             | ✓ 是 |
| **RTC\_中心**                   | [featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3) | 一个GlobalPropertyCartesian3对象，为所有特征定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。 | 不   |
| **QUANTIZED\_VOLUME\_OFFSET** | [featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3) | 一个GlobalPropertyCartesian3对象，为所有特征定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。 | 不   |
| **QUANTIZED\_VOLUME\_SCALE**  | [featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3) | 一个GlobalPropertyCartesian3对象，为所有特征定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。 | 不   |
| **EAST\_NORTH\_UP**           | [featureTable-定义-globalPropertyBoolean](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyboolean)                | 为所有功能定义布尔属性的GlobalPropertyBoolean对象。3D Tiles 规范中描述了有关此属性的详细信息。             | 不   |
| **扩展名**                       | [扩大](https://portal.ogc.org/files/102132#reference-extension)                                                                                        | 具有扩展特定对象的字典对象。                                                             | 不   |
| **临时演员**                      | [临时演员](https://portal.ogc.org/files/102132#reference-extras)                                                                                         | 特定于应用程序的数据。                                                                | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[i3dm.featureTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-i3dm-featuretable)

### A.18.1.i3dm.featureTable.POSITION

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.2.i3dm.featureTable.POSITION\_QUANTIZED

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.3.  [i3dm.featureTable.NORMAL\_UP](http://i3dm.featuretable.normal_up/)

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.4.  [i3dm.featureTable.NORMAL\_RIGHT](http://i3dm.featuretable.normal_right/)

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.5.  [i3dm.featureTable.NORMAL\_UP\_OCT32P](http://i3dm.featuretable.normal_up_oct32p/)

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.6.  [i3dm.featureTable.NORMAL\_RIGHT\_OCT32P](http://i3dm.featuretable.normal_right_oct32p/)

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.7.i3dm.featureTable.SCALE

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.8.i3dm.featureTable.SCALE\_NON\_UNIFORM

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.9. i3dm.featureTable.BATCH\_ID

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.18.10.  [i3dm.featureTable.INSTANCES\_LENGTH](http://i3dm.featuretable.instances_length/)

定义所有要素的整数属性的GlobalPropertyInteger对象。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)
*   **要求**：✓ 是

### A.18.11. i3dm.featureTable.RTC\_CENTER

一个GlobalPropertyCartesian3对象，为所有特征定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3)
*   **要求**：否

### A.18.12. i3dm.featureTable.QUANTIZED\_VOLUME\_OFFSET

一个GlobalPropertyCartesian3对象，为所有特征定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3)
*   **要求**：否

### A.18.13. i3dm.featureTable.QUANTIZED\_VOLUME\_SCALE

一个GlobalPropertyCartesian3对象，为所有特征定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3)
*   **要求**：否

### A.18.14. i3dm.featureTable.EAST\_NORTH\_UP

为所有功能定义布尔属性的GlobalPropertyBoolean对象。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyBoolean](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyboolean)
*   **要求**：否

### A.18.15.i3dm.featureTable.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.18.16. i3dm.featureTable.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.19. 元数据实体

一个对象，包含对元数据模式中的类的引用，以及符合该类属性的属性值。

表 A.19 —元数据实体属性

|          | 类型                                                            | 描述                                                                                                                                                                                                         | 必需的 |
| :------- | :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| **班级**   | 细绳                                                            | 属性值符合的类。该值应是在元数据模式的类字典中声明的类 ID。                                                                                                                                                                            | ✓ 是 |
| **特性**   | 目的                                                            | 一个字典，其中每个键对应于类的属性字典中的一个属性 ID，每个值都包含属性值。值的类型应与属性定义匹配：对于BOOLEAN使用true或false。对于STRING，使用 JSON 字符串。对于数字类型，使用 JSON 数字。对于ENUM使用有效的枚举名称，而不是整数值。对于ARRAY、VECN和MATN类型，使用包含与componentType匹配的值的 JSON 数组。必需的属性应包含在该词典中。 | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                                                                                                                                                             | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                                                                                                                                                                | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[metadataEntity.schema.json](https://portal.ogc.org/files/102132#reference-schema-metadataentity)

### A.19.1. 元数据实体类

属性值符合的类。该值应是在元数据模式的类字典中声明的类 ID。

*   **类型**：字符串
*   **要求**：✓ 是

### A.19.2. 元数据实体.properties

一个字典，其中每个键对应于类的属性字典中的一个属性 ID，每个值都包含属性值。值的类型应与属性定义匹配：对于BOOLEAN使用true或false。对于STRING，使用 JSON 字符串。对于数字类型，使用 JSON 数字。对于ENUM使用有效的枚举名称，而不是整数值。对于ARRAY、VECN和MATN类型，使用包含与componentType匹配的值的 JSON 数组。必需的属性应包含在该词典中。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：[definitions-definitions-anyValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-anyvalue)

### A.19.3. 元数据实体.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.19.4. metadataEntity.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.20. 点云特征表

一组点云语义，其中包含定义图块中点的位置和外观属性的值。

表 A.20 —点云特征表属性

|                               | 类型                                                                                                                                                   | 描述                                                                        | 必需的 |
| :---------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :-- |
| **位置**                        | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。    | 不   |
| **POSITION\_QUANTIZED**       | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。    | 不   |
| **RGBA**                      | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。    | 不   |
| **红绿蓝**                       | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。    | 不   |
| **RGB565**                    | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。    | 不   |
| **普通的**                       | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。    | 不   |
| **正常\_OCT16P**                | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。    | 不   |
| **批号**                        | [featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)           | 一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。    | 不   |
| **POINTS\_LENGTH**            | [featureTable-定义-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)                | 定义所有点的整数属性的GlobalPropertyInteger对象。3D Tiles 规范中描述了有关此属性的详细信息。             | ✓ 是 |
| **RTC\_中心**                   | [featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3) | 一个GlobalPropertyCartesian3对象，为所有点定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。 | 不   |
| **QUANTIZED\_VOLUME\_OFFSET** | [featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3) | 一个GlobalPropertyCartesian3对象，为所有点定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。 | 不   |
| **QUANTIZED\_VOLUME\_SCALE**  | [featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3) | 一个GlobalPropertyCartesian3对象，为所有点定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。 | 不   |
| **常数\_RGBA**                  | [featureTable-definitions-globalPropertyCartesian4](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian4) | 一个GlobalPropertyCartesian4对象，为所有点定义一个 4 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。 | 不   |
| **BATCH\_LENGTH**             | [featureTable-定义-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)                | 定义所有点的整数属性的GlobalPropertyInteger对象。3D Tiles 规范中描述了有关此属性的详细信息。             | 不   |
| **扩展名**                       | [扩大](https://portal.ogc.org/files/102132#reference-extension)                                                                                        | 具有扩展特定对象的字典对象。                                                            | 不   |
| **临时演员**                      | [临时演员](https://portal.ogc.org/files/102132#reference-extras)                                                                                         | 特定于应用程序的数据。                                                               | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[pnts.featureTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-pnts-featuretable)

### A.20.1.pnts.featureTable.POSITION

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.20.2.pnts.featureTable.POSITION\_QUANTIZED

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.20.3. pnts.featureTable.RGBA

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.20.4.pnts.featureTable.RGB

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.20.5.pnts.featureTable.RGB565

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.20.6.  [pnts.featureTable.NORMAL](http://pnts.featuretable.normal/)

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.20.7.  [pnts.featureTable.NORMAL\_OCT16P](http://pnts.featuretable.normal_oct16p/)

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.20.8.pnts.featureTable.BATCH\_ID

一个BinaryBodyReference对象，定义对存储属性值的二进制主体部分的引用。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-binaryBodyReference](https://portal.ogc.org/files/102132#reference-featuretable-definitions-binarybodyreference)
*   **要求**：否

### A.20.9.pnts.featureTable.POINTS\_LENGTH

定义所有点的整数属性的GlobalPropertyInteger对象。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)
*   **要求**：✓ 是

### A.20.10.pnts.featureTable.RTC\_CENTER

一个GlobalPropertyCartesian3对象，为所有点定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3)
*   **要求**：否

### A.20.11. pnts.featureTable.QUANTIZED\_VOLUME\_OFFSET

一个GlobalPropertyCartesian3对象，为所有点定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3)
*   **要求**：否

### A.20.12. pnts.featureTable.QUANTIZED\_VOLUME\_SCALE

一个GlobalPropertyCartesian3对象，为所有点定义一个 3 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyCartesian3](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian3)
*   **要求**：否

### A.20.13.  [pnts.featureTable.CONSTANT\_RGBA](http://pnts.featuretable.constant_rgba/)

一个GlobalPropertyCartesian4对象，为所有点定义一个 4 分量数字属性。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyCartesian4](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertycartesian4)
*   **要求**：否

### A.20.14. pnts.featureTable.BATCH\_LENGTH

定义所有点的整数属性的GlobalPropertyInteger对象。3D Tiles 规范中描述了有关此属性的详细信息。

*   **类型**：[featureTable-definitions-globalPropertyInteger](https://portal.ogc.org/files/102132#reference-featuretable-definitions-globalpropertyinteger)
*   **要求**：否

### A.20.15.pnts.featureTable.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.20.16. pnts.featureTable.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.21. 特性

关于每个特征属性的元数据的字典对象。

表 A.21 -属性属性

|          | 类型                                                            | 描述                | 必需的 |
| :------- | :------------------------------------------------------------ | :---------------- | :-- |
| **最大限度** | 数字                                                            | 瓦片集中所有要素的此属性的最大值。 | ✓ 是 |
| **最低限度** | 数字                                                            | 瓦片集中所有要素的此属性的最小值。 | ✓ 是 |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。    | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。       | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[properties.schema.json](https://portal.ogc.org/files/102132#reference-schema-properties)

### A.21.1.属性.maximum

瓦片集中所有要素的此属性的最大值。

*   **类型**：数字
*   **要求**：✓ 是

### A.21.2.属性.minimum

瓦片集中所有要素的此属性的最小值。

*   **类型**：数字
*   **要求**：✓ 是

### A.21.3.属性.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.21.4.属性.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.22. 属性表

符合类的属性，组织为存储在二进制列数组中的属性值。

表 A.22 —属性表属性

|          | 类型                                                            | 描述                                                              | 必需的 |
| :------- | :------------------------------------------------------------ | :-------------------------------------------------------------- | :-- |
| **姓名**   | 细绳                                                            | 属性表的名称，例如用于显示目的。                                                | 不   |
| **班级**   | 细绳                                                            | 属性值符合的类。该值应是类字典中声明的类 ID。                                        | ✓ 是 |
| **数数**   | 整数                                                            | 每个属性数组中的元素数。                                                    | ✓ 是 |
| **特性**   | 目的                                                            | 一个字典，其中每个键对应于类的属性字典中的一个属性 ID，每个值都是一个描述属性值存储位置的对象。必需的属性应包含在该词典中。 | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                  | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                     | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[propertyTable.schema.json](https://portal.ogc.org/files/102132#reference-schema-propertytable)

### A.22.1.属性表.name

属性表的名称，例如用于显示目的。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.22.2.属性表.class

属性值符合的类。该值应是类字典中声明的类 ID。

*   **类型**：字符串
*   **要求**：✓ 是

### A.22.3.  [属性表.count](http://propertytable.count/)

每个属性数组中的元素数。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 1

### A.22.4.属性表.properties

一个字典，其中每个键对应于类的属性字典中的一个属性 ID，每个值都是一个描述属性值存储位置的对象。必需的属性应包含在该词典中。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：[propertyTable.property](https://portal.ogc.org/files/102132#reference-propertytable-property)

### A.22.5.propertyTable.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.22.6.propertyTable.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.23. 属性表属性

二进制属性值数组。这表示属性表的一列，并包含每个元数据实体的某个属性的一个值。

表 A.23 —属性表属性

|                   | 类型                                                                                                       | 描述                                                                                                                                                                                                                                                                                                                                     | 必需的          |
| :---------------- | :------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------- |
| **价值观**           | 整数                                                                                                       | 包含属性值的缓冲区视图的索引。属性值的数据类型由属性定义决定：当类型为BOOLEAN时，值被打包到比特流中。当类型为STRING时，值存储为字节序列并解码为 UTF-8 字符串。当类型为SCALAR、VECN或MATN时，值存储为提供的componentType并且缓冲区视图byteOffset应与componentType大小的倍数对齐。当类型为ENUM时，值存储为枚举的valueType和缓冲区视图byteOffset应与valueType大小的倍数对齐。数组中的每个枚举值都应与枚举定义中允许的值之一相匹配。arrayOffsets是可变长度数组所必需的，stringOffsets是字符串所必需的（对于可变长度字符串数组，两者都是必需的）。 | ✓ 是          |
| **数组偏移量**         | 整数                                                                                                       | 包含可变长度数组偏移量的缓冲区视图的索引。偏移量的数量等于属性表计数加一。偏移量表示每个数组的起始位置，最后一个偏移量表示最后一个数组之后的位置。使用后续偏移量和当前偏移量之间的差值计算数组长度。如果类型为STRING，则偏移量索引到字符串偏移量数组（存储在stringOffsets中），否则它们索引到属性数组（存储在values中）。这些偏移量的数据类型由arrayOffsetType确定。缓冲区视图byteOffset应对齐到arrayOffsetType大小。                                                                                            | 不            |
| **字符串偏移量**        | 整数                                                                                                       | 包含字符串偏移量的缓冲区视图的索引。偏移量的数量等于字符串元素的数量加一。偏移量表示属性数组（存储在values中）中每个字符串的字节偏移量，最后一个偏移量表示最后一个字符串之后的字节偏移量。使用后续偏移量和当前偏移量之间的差异计算字符串字节长度。这些偏移量的数据类型由stringOffsetType确定。缓冲区视图byteOffset应与stringOffsetType大小的倍数对齐。                                                                                                                                    | 不            |
| **arrayOffset类型** | 细绳                                                                                                       | arrayOffsets中值的类型。                                                                                                                                                                                                                                                                                                                     | 否，默认值：UINT32 |
| **字符串偏移类型**       | 细绳                                                                                                       | stringOffsets中值的类型。                                                                                                                                                                                                                                                                                                                    | 否，默认值：UINT32 |
| **抵消**            | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | 应用于属性值的偏移量。仅当组件类型为FLOAT32或FLOAT64或属性已规范化时适用。如果两者都已定义，则覆盖类属性的偏移量。                                                                                                                                                                                                                                                                       | 不            |
| **规模**            | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | 应用于属性值的比例。仅当组件类型为FLOAT32或FLOAT64或属性已规范化时适用。如果两者都已定义，则覆盖类属性的比例。                                                                                                                                                                                                                                                                         | 不            |
| **最大限度**          | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | 属性值中存在的最大值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的最大值。                                                                                                                                                                                                                                                        | 不            |
| **分钟**            | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | 属性值中存在的最小值。仅适用于SCALAR、VECN和MATN类型。在应用基于normalized、offset和scale属性的转换之后，这是所有属性值中的最小值。                                                                                                                                                                                                                                                    | 不            |
| **扩展名**           | [扩大](https://portal.ogc.org/files/102132#reference-extension)                                            | 具有扩展特定对象的字典对象。                                                                                                                                                                                                                                                                                                                         | 不            |
| **临时演员**          | [临时演员](https://portal.ogc.org/files/102132#reference-extras)                                             | 特定于应用程序的数据。                                                                                                                                                                                                                                                                                                                            | 不            |

*   **允许附加属性。**
*   **JSON 架构**：[propertyTable.property.schema.json](https://portal.ogc.org/files/102132#reference-schema-propertytable-property)

### A.23.1.属性表.属性.值

包含属性值的缓冲区视图的索引。属性值的数据类型由属性定义决定：当类型为BOOLEAN时，值被打包到比特流中。当类型为STRING时，值存储为字节序列并解码为 UTF-8 字符串。当类型为SCALAR、VECN或MATN时，值存储为提供的componentType并且缓冲区视图byteOffset应与componentType大小的倍数对齐。当类型为ENUM时，值存储为枚举的valueType和缓冲区视图byteOffset应与valueType大小的倍数对齐。数组中的每个枚举值都应与枚举定义中允许的值之一相匹配。arrayOffsets是可变长度数组所必需的，stringOffsets是字符串所必需的（对于可变长度字符串数组，两者都是必需的）。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 0

### A.23.2.propertyTable.property.arrayOffsets

包含可变长度数组偏移量的缓冲区视图的索引。偏移量的数量等于属性表计数加一。偏移量表示每个数组的起始位置，最后一个偏移量表示最后一个数组之后的位置。使用后续偏移量和当前偏移量之间的差值计算数组长度。如果类型为STRING，则偏移量索引到字符串偏移量数组（存储在stringOffsets中），否则它们索引到属性数组（存储在values中）。这些偏移量的数据类型由arrayOffsetType确定。缓冲区视图byteOffset应对齐到arrayOffsetType大小。

*   **类型**：整数
*   **要求**：否
*   **最小值**：>= 0

### A.23.3.propertyTable.property.stringOffsets

包含字符串偏移量的缓冲区视图的索引。偏移量的数量等于字符串元素的数量加一。偏移量表示属性数组（存储在values中）中每个字符串的字节偏移量，最后一个偏移量表示最后一个字符串之后的字节偏移量。使用后续偏移量和当前偏移量之间的差异计算字符串字节长度。这些偏移量的数据类型由stringOffsetType确定。缓冲区视图byteOffset应与stringOffsetType大小的倍数对齐。

*   **类型**：整数
*   **要求**：否
*   **最小值**：>= 0

### A.23.4.propertyTable.property.arrayOffsetType

arrayOffsets中值的类型。

*   **类型**：字符串
*   **必需**：否，默认值：UINT32
*   **允许值**：

    *   “UINT8”
    *   “UINT16”
    *   “UINT32”
    *   “UINT64”

### A.23.5.propertyTable.property.stringOffsetType

stringOffsets中值的类型。

*   **类型**：字符串
*   **必需**：否，默认值：UINT32
*   **允许值**：

    *   “UINT8”
    *   “UINT16”
    *   “UINT32”
    *   “UINT64”

### A.23.6.propertyTable.property.offset

应用于属性值的偏移量。仅当组件类型为FLOAT32或FLOAT64或属性已规范化时适用。如果两者都已定义，则覆盖类属性的偏移量。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.23.7.propertyTable.property.scale

应用于属性值的比例。仅当组件类型为FLOAT32或FLOAT64或属性已规范化时适用。如果两者都已定义，则覆盖类属性的比例。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.23.8.属性表.property.max

属性值中存在的最大值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的最大值。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.23.9.属性表.property.min

属性值中存在的最小值。仅适用于SCALAR、VECN和MATN类型。在应用基于normalized、offset和scale属性的转换之后，这是所有属性值中的最小值。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.23.10.propertyTable.property.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.23.11.propertyTable.property.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.24. 根属性

存储扩展和额外内容的基础。

表 A.24 —根属性

|          | 类型                                                            | 描述             | 必需的 |
| :------- | :------------------------------------------------------------ | :------------- | :-- |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。 | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。    | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[rootProperty.schema.json](https://portal.ogc.org/files/102132#reference-schema-rootproperty)

### A.24.1.rootProperty.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.24.2.rootProperty.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.25. 图式

定义类和枚举的对象。

表 A.25 —模式属性

|          | 类型                                                            | 描述                                                                                          | 必需的 |
| :------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------ | :-- |
| **ID**   | 细绳                                                            | 架构的唯一标识符。架构 ID 应是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字母数字标识符。                            | ✓ 是 |
| **姓名**   | 细绳                                                            | 模式的名称，例如用于显示目的。                                                                             | 不   |
| **描述**   | 细绳                                                            | 模式的描述。                                                                                      | 不   |
| **版本**   | 细绳                                                            | 特定于应用程序的模式版本。                                                                               | 不   |
| **类**    | 目的                                                            | 一个字典，其中每个键都是一个类 ID，每个值都是一个定义类的对象。类 ID 应是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字母数字标识符。     | 不   |
| **枚举**   | 目的                                                            | 一个字典，其中每个键都是一个枚举 ID，每个值都是一个定义枚举值的对象。枚举 ID 应是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字母数字标识符。 | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                                              | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                                                 | 不   |

*   **允许附加属性。**
*   **JSON 模式**：[schema.schema.json](https://portal.ogc.org/files/102132#reference-schema-schema)

### A.25.1.模式.id

架构的唯一标识符。架构 ID 应是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字母数字标识符。

*   **类型**：字符串
*   **要求**：✓ 是
*   **模式**：^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$

### A.25.2.架构名称

模式的名称，例如用于显示目的。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.25.3.  [架构.描述](http://schema.description/)

模式的描述。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.25.4.模式.version

特定于应用程序的模式版本。

*   **类型**：字符串
*   **要求**：否
*   **最小长度**：>= 1

### A.25.5.模式.类

一个字典，其中每个键都是一个类 ID，每个值都是一个定义类的对象。类 ID 应是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字母数字标识符。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：[类](https://portal.ogc.org/files/102132#reference-class)

### A.25.6.架构.枚举

一个字典，其中每个键都是一个枚举 ID，每个值都是一个定义枚举值的对象。枚举 ID 应是与正则表达式^\[a-zA-Z\_]\[a-zA-Z0-9\_]\*\$匹配的字母数字标识符。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：[枚举](https://portal.ogc.org/files/102132#reference-enum)

### A.25.7.架构.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.25.8.模式.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.26. 统计数据

有关实体的统计信息。

表 A.26 -统计属性

|          | 类型                                                            | 描述                                                | 必需的 |
| :------- | :------------------------------------------------------------ | :------------------------------------------------ | :-- |
| **类**    | 目的                                                            | 字典，其中每个键对应于类字典中的类 ID，每个值是一个对象，其中包含有关符合该类的实体的统计信息。 | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                    | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                       | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[statistics.schema.json](https://portal.ogc.org/files/102132#reference-schema-statistics)

### A.26.1.统计类

字典，其中每个键对应于类字典中的类 ID，每个值是一个对象，其中包含有关符合该类的实体的统计信息。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：[statistics.class](https://portal.ogc.org/files/102132#reference-statistics-class)

### A.26.2.统计.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.26.3.统计.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.27. 班级统计

有关符合类的实体的统计信息。

表 A.27 —类统计属性

|          | 类型                                                            | 描述                                               | 必需的 |
| :------- | :------------------------------------------------------------ | :----------------------------------------------- | :-- |
| **数数**   | 整数                                                            | 符合类别的实体数。                                        | 不   |
| **特性**   | 目的                                                            | 一个字典，其中每个键对应于类的属性字典中的一个属性 ID，每个值是一个包含属性值统计信息的对象。 | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                   | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                      | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[statistics.class.schema.json](https://portal.ogc.org/files/102132#reference-schema-statistics-class)

### A.27.1.  [统计.class.count](http://statistics.class.count/)

符合类别的实体数。

*   **类型**：整数
*   **要求**：否
*   **最小值**：>= 0

### A.27.2.统计.class.properties

一个字典，其中每个键对应于类的属性字典中的一个属性 ID，每个值是一个包含属性值统计信息的对象。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：[statistics.class.property](https://portal.ogc.org/files/102132#reference-statistics-class-property)

### A.27.3.统计.class.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.27.4.statistics.class.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.28. 财产统计

有关属性值的统计信息。

表 A.28 —属性统计属性

|          | 类型                                                                                                       | 描述                                                                                         | 必需的 |
| :------- | :------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------- | :-- |
| **分钟**   | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | tileset 中出现的最小属性值。仅适用于SCALAR、VECN和MATN类型。在应用基于normalized、offset和scale属性的转换之后，这是所有属性值中的最小值。 | 不   |
| **最大限度** | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | tileset 中出现的最大属性值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的最大值。     | 不   |
| **意思是**  | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | tileset 中出现的属性值的算术平均值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的平均值。 | 不   |
| **中位数**  | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | tileset 中出现的属性值的中值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的中值。     | 不   |
| **标准差**  | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | tileset 中出现的属性值的标准偏差。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的标准差。  | 不   |
| **方差**   | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | tileset 中出现的属性值的方差。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的方差。     | 不   |
| **和**    | [定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue) | tileset 中出现的属性值的总和。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的总和。     | 不   |
| **事件**   | 目的                                                                                                       | 一个字典，其中每个键对应一个枚举名称，每个值是该枚举的出现次数。仅当类型为ENUM时适用。对于固定长度的数组，这是一个按组件出现的数组。                       | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension)                                            | 具有扩展特定对象的字典对象。                                                                             | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)                                             | 特定于应用程序的数据。                                                                                | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[statistics.class.property.schema.json](https://portal.ogc.org/files/102132#reference-schema-statistics-class-property)

### A.28.1.statistics.class.property.min

tileset 中出现的最小属性值。仅适用于SCALAR、VECN和MATN类型。在应用基于normalized、offset和scale属性的转换之后，这是所有属性值中的最小值。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.28.2.统计.class.property.max

tileset 中出现的最大属性值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的最大值。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.28.3.统计.class.property.mean

tileset 中出现的属性值的算术平均值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的平均值。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.28.4.statistics.class.property.median

tileset 中出现的属性值的中值。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的中值。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.28.5.statistics.class.property.standardDeviation

tileset 中出现的属性值的标准偏差。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的标准差。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.28.6.统计.class.property.variance

tileset 中出现的属性值的方差。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的方差。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.28.7.统计.class.property.sum

tileset 中出现的属性值的总和。仅适用于SCALAR、VECN和MATN类型。这是应用基于normalized、offset和scale属性的转换后所有属性值的总和。

*   **类型**：[定义-定义-numericValue](https://portal.ogc.org/files/102132#reference-definitions-definitions-numericvalue)
*   **要求**：否

### A.28.8.statistics.class.property.occurrences

一个字典，其中每个键对应一个枚举名称，每个值是该枚举的出现次数。仅当类型为ENUM时适用。对于固定长度的数组，这是一个按组件出现的数组。

*   **类型**：对象
*   **要求**：否
*   **最小属性数**：1
*   **允许附加属性。**
*   **每个属性的类型**：整数

### A.28.9.统计.class.property.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.28.10.statistics.class.property.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.29. 风格

3D Tile风格。

表 A.29 —样式属性

|          | 类型                                                                                                                                                | 描述                                                                  | 必需的                   |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------------------------------------ | :-------------------- |
| **定义**   | 目的                                                                                                                                                | 映射到可在整个样式中引用的变量名称键的表达式字符串的字典对象。如果一个表达式引用了一个已定义的变量，它将被替换为相应表达式的计算结果。 | 不                     |
| **展示**   | [style.booleanExpression](https://portal.ogc.org/files/102132#reference-style-booleanexpression) , [style.conditions](http://style.conditions/)之一 | 一个布尔表达式或条件属性，用于确定是否应显示某个功能。                                         | 否，默认值：true            |
| **颜色**   | [style.colorExpression](http://style.colorexpression/) , [style.conditions](http://style.conditions/)之一                                           | 颜色表达式或条件属性，用于确定与要素的固有颜色混合的颜色。                                       | 否，默认：color('#FFFFFF') |
| **元**    | [样式.meta](https://portal.ogc.org/files/102132#reference-style-meta)                                                                               | 确定要素的非视觉属性值的元对象。                                                    | 不                     |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension)                                                                                     | 具有扩展特定对象的字典对象。                                                      | 不                     |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)                                                                                      | 特定于应用程序的数据。                                                         | 不                     |

*   **允许附加属性。**
*   **JSON 架构**：[style.schema.json](https://portal.ogc.org/files/102132#reference-schema-style)

### A.29.1.  [风格.定义](http://style.defines/)

映射到可在整个样式中引用的变量名称键的表达式字符串的字典对象。如果一个表达式引用了一个已定义的变量，它将被替换为相应表达式的计算结果。

*   **类型**：对象
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：[style.expression](https://portal.ogc.org/files/102132#reference-style-expression)

### A.29.2.样式.show

一个布尔表达式或条件属性，用于确定是否应显示某个功能。

*   **类型**：其中一种[style.booleanExpression](https://portal.ogc.org/files/102132#reference-style-booleanexpression) , [style.conditions](http://style.conditions/)
*   **必需**：否，默认值：true

### A.29.3.  [样式.颜色](http://style.color/)

颜色表达式或条件属性，用于确定与要素的固有颜色混合的颜色。

*   **类型**：其中一种[style.colorExpression](http://style.colorexpression/)，[style.conditions](http://style.conditions/)
*   **必需**：否，默认值：color('#FFFFFF')

### A.29.4.样式.meta

确定要素的非视觉属性值的元对象。

*   **类型**：[style.meta](https://portal.ogc.org/files/102132#reference-style-meta)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：[style.expression](https://portal.ogc.org/files/102132#reference-style-expression)

### A.29.5.样式.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.29.6. 样式.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.30. 布尔表达式

具有计算结果为布尔值的 3D Tiles 样式表达式的布尔值或字符串。详细信息在 3D Tiles Styling 规范中进行了描述。

*   **允许附加属性。**
*   **JSON 架构**：[style.booleanExpression.schema.json](https://portal.ogc.org/files/102132#reference-schema-style-booleanexpression)

## A.31. 色彩表达

计算结果为 Color 的3D Tiles 样式表达式。详细信息在 3D Tiles Styling 规范中进行了描述。

*   **允许附加属性。**
*   **JSON 模式**：[style.colorExpression.schema.json](http://style.colorexpression.schema.json/)

## A.32. 状况

按顺序计算的一系列条件，例如一系列 if...else 语句，这些语句导致表达式被计算。

表 A.30——条件属性

|          | 类型                                                            | 描述                                                                                                                               | 必需的 |
| :------- | :------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------- | :-- |
| **状况**   | [样式.条件.条件](http://style.conditions.condition/) \[]            | 按顺序评估的一系列布尔条件。对于第一个计算结果为 true 的，计算并返回其值“结果”（也是一个表达式）。结果表达式都应是同一类型。如果没有条件计算为真，则结果为undefined。当条件为undefined、null或空对象时，结果为undefined。 | 不   |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                                                                                   | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                                                                                      | 不   |

*   **允许附加属性。**
*   **JSON 模式**：[style.conditions.schema.json](http://style.conditions.schema.json/)

### A.32.1.  [样式.条件.条件](http://style.conditions.conditions/)

按顺序评估的一系列布尔条件。对于第一个计算结果为 true 的，计算并返回其值“结果”（也是一个表达式）。结果表达式都应是同一类型。如果没有条件计算为真，则结果为undefined。当条件为undefined、null或空对象时，结果为undefined。

*   **类型**: [style.conditions.condition](http://style.conditions.condition/) \[]
*   **要求**：否

### A.32.2.  [样式.条件.扩展](http://style.conditions.extensions/)

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.32.3.  [style.conditions.extras](http://style.conditions.extras/)

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.33. 健康）状况

作为条件为真的结果评估的表达式。两个表达式的数组。如果对第一个表达式求值且结果为true，则对第二个表达式求值并作为条件结果返回。

*   **允许附加属性。**
*   **JSON 模式**：[style.conditions.condition.schema.json](http://style.conditions.condition.schema.json/)

## A.34. 表达

有效的 3D Tiles 样式表达式。详细信息在 3D Tiles Styling 规范中进行了描述。

*   **允许附加属性。**
*   **JSON 模式**：[style.expression.schema.json](https://portal.ogc.org/files/102132#reference-schema-style-expression)

## A.35.元

一系列属性名称和用于计算该属性值的表达式。

表 A.31——元属性

|          | 类型                                                            | 描述             | 必需的 |
| :------- | :------------------------------------------------------------ | :------------- | :-- |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。 | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。    | 不   |

*   **允许附加属性。**
*   **附加属性的类型**：[style.expression](https://portal.ogc.org/files/102132#reference-style-expression)
*   **JSON 架构**：[style.meta.schema.json](https://portal.ogc.org/files/102132#reference-schema-style-meta)

### A.35.1.样式.元.扩展

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.35.2.style.meta.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.36. 子树

描述子树中图块和内容的可用性以及子树的可用性的对象。还可以存储可用图块和内容的元数据。

表 A.32 —子树属性

|           | 类型                                                                         | 描述                                                                                                                                                                                                                                                                                                                     | 必需的 |
| :-------- | :------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-- |
| **缓冲器**   | [缓冲区](https://portal.ogc.org/files/102132#reference-buffer) \[1-\*]        | 缓冲区数组。                                                                                                                                                                                                                                                                                                                 | 不   |
| **缓冲区视图** | [缓冲区视图](https://portal.ogc.org/files/102132#reference-bufferview) \[1-\*]  | 缓冲区视图数组。                                                                                                                                                                                                                                                                                                               | 不   |
| **属性表**   | [属性表](https://portal.ogc.org/files/102132#reference-propertytable) \[1-\*] | 一组属性表。                                                                                                                                                                                                                                                                                                                 | 不   |
| **Tile可用性** | [可用性](https://portal.ogc.org/files/102132#reference-availability)          | 子树中磁贴的可用性。可用性比特流是一个一维布尔数组，其中图块按其在子树中的级别和该级别内的 Morton 索引排序。瓦片的可用性由一位确定，1 表示该空间索引处存在瓦片，0 表示不存在。数组中的元素数是(N^subtreeLevels — 1)/(N — 1)，其中 N 是 4 用于细分方案QUADTREE和 8 用于OCTREE。可用性可以存储在缓冲区视图中或作为适用于所有图块的常量值。如果非根瓦片的可用性为 1，则其父瓦片的可用性也应为 1。tileAvailability.constant [:](http://tileavailability.constant/) 0是不允许的，因为子树应至少有一个瓦片。 | ✓ 是 |
| **内容可用性** | [可用性](https://portal.ogc.org/files/102132#reference-availability) \[1-\*]  | 一组内容可用性对象。如果图块只有一个内容，则此数组将有一个元素；如果 tile 有多个内容——如 3DTILES\_multiple\_contents 和 3D Tiles 1.1 所支持——这个数组将有多个元素。                                                                                                                                                                                                           | 不   |
| **子树可用性** | [可用性](https://portal.ogc.org/files/102132#reference-availability)          | 子树的可用性。可用性比特流是一个一维布尔数组，其中子树按其在子树底行正下方的树级别中的 Morton 索引排序。子树的可用性由一位决定，1 表示该空间索引处存在子树，0 表示不存在。数组中的元素数量是N^subtreeLevels，其中 N 是 4 对于细分方案QUADTREE和 8 对于OCTREE。可用性可以存储在缓冲区视图中或作为适用于所有子树的常量值。如果所有子树的可用性为 0，则 tileset 不会进一步细分。                                                                                                  | ✓ 是 |
| **图块元数据** | 整数                                                                         | 包含图块元数据的属性表的索引。瓦片元数据仅存在于可用瓦片中，并通过增加瓦片索引来紧密打包。为了访问单个图块元数据，实现可以创建从图块索引到图块元数据索引的映射。                                                                                                                                                                                                                                       | 不   |
| **内容元数据** | 整数 \[1-\*]                                                                 | 包含内容元数据的属性表的索引数组。如果图块只有一个内容，则此数组将有一个元素；如果 tile 有多个内容——如 3DTILES\_multiple\_contents 和 3D Tiles 1.1 所支持——这个数组将有多个元素。内容元数据仅存在于可用内容中，并通过增加 tile 索引进行紧密打包。为了访问单独的内容元数据，实现可以创建从图块索引到内容元数据索引的映射。                                                                                                                             | 不   |
| **子树元数据** | [元数据实体](https://portal.ogc.org/files/102132#reference-metadataentity)      | 以 JSON 编码的子树元数据。                                                                                                                                                                                                                                                                                                       | 不   |
| **扩展名**   | [扩大](https://portal.ogc.org/files/102132#reference-extension)              | 具有扩展特定对象的字典对象。                                                                                                                                                                                                                                                                                                         | 不   |
| **临时演员**  | [临时演员](https://portal.ogc.org/files/102132#reference-extras)               | 特定于应用程序的数据。                                                                                                                                                                                                                                                                                                            | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[subtree.schema.json](https://portal.ogc.org/files/102132#reference-schema-subtree)

### A.36.1.子树缓冲区

缓冲区数组。

*   **类型**：[缓冲区](https://portal.ogc.org/files/102132#reference-buffer) \[1-\*]
*   **要求**：否

### A.36.2.子树.bufferViews

缓冲区视图数组。

*   **类型**：[缓冲视图](https://portal.ogc.org/files/102132#reference-bufferview) \[1-\*]
*   **要求**：否

### A.36.3.子树.propertyTables

一组属性表。

*   **类型**：[属性表](https://portal.ogc.org/files/102132#reference-propertytable) \[1-\*]
*   **要求**：否

### A.36.4.subtree.tileAvailability

子树中磁贴的可用性。可用性比特流是一个一维布尔数组，其中图块按其在子树中的级别和该级别内的 Morton 索引排序。瓦片的可用性由一位确定，1 表示该空间索引处存在瓦片，0 表示不存在。数组中的元素数是(N^subtreeLevels — 1)/(N — 1)，其中 N 是 4 用于细分方案QUADTREE和 8 用于OCTREE。可用性可以存储在缓冲区视图中或作为适用于所有图块的常量值。如果非根瓦片的可用性为 1，则其父瓦片的可用性也应为 1。tileAvailability.constant [:](http://tileavailability.constant/) 0是不允许的，因为子树应至少有一个瓦片。

*   **类型**：[可用性](https://portal.ogc.org/files/102132#reference-availability)
*   **要求**：✓ 是

### A.36.5.  [subtree.contentAvailability](http://subtree.contentavailability/)

一组内容可用性对象。如果图块只有一个内容，则此数组将有一个元素；如果 tile 有多个内容——如 3DTILES\_multiple\_contents 和 3D Tiles 1.1 所支持——这个数组将有多个元素。

*   **类型**：[可用性](https://portal.ogc.org/files/102132#reference-availability) \[1-\*]
*   **要求**：否

### A.36.6.  [subtree.childSubtreeAvailability](http://subtree.childsubtreeavailability/)

子树的可用性。可用性比特流是一个一维布尔数组，其中子树按其在子树底行正下方的树级别中的 Morton 索引排序。子树的可用性由一位决定，1 表示该空间索引处存在子树，0 表示不存在。数组中的元素数量是N^subtreeLevels，其中 N 是 4 对于细分方案QUADTREE和 8 对于OCTREE。可用性可以存储在缓冲区视图中或作为适用于所有子树的常量值。如果所有子树的可用性为 0，则 tileset 不会进一步细分。

*   **类型**：[可用性](https://portal.ogc.org/files/102132#reference-availability)
*   **要求**：✓ 是

### A.36.7.subtree.tileMetadata

包含图块元数据的属性表的索引。瓦片元数据仅存在于可用瓦片中，并通过增加瓦片索引来紧密打包。为了访问单个图块元数据，实现可以创建从图块索引到图块元数据索引的映射。

*   **类型**：整数
*   **要求**：否
*   **最小值**：>= 0

### A.36.8.  [子树.contentMetadata](http://subtree.contentmetadata/)

包含内容元数据的属性表的索引数组。如果图块只有一个内容，则此数组将有一个元素；如果 tile 有多个内容——如 3DTILES\_multiple\_contents 和 3D Tiles 1.1 所支持——这个数组将有多个元素。内容元数据仅存在于可用内容中，并通过增加 tile 索引进行紧密打包。为了访问单独的内容元数据，实现可以创建从图块索引到内容元数据索引的映射。

*   **类型**：整数 \[1-\*]

    *   数组中的每个元素都应大于或等于0。
*   **要求**：否

### A.36.9.subtree.subtreeMetadata

以 JSON 编码的子树元数据。

*   **类型**：[元数据实体](https://portal.ogc.org/files/102132#reference-metadataentity)
*   **要求**：否

### A.36.10.子树.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.36.11.子树.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.37. 子树

描述子树文件位置的对象。

表 A.33 —子树属性

|          | 类型                                                                 | 描述                                                                                                                            | 必需的 |
| :------- | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :-- |
| **乌里**   | [模板Uri](https://portal.ogc.org/files/102132#reference-templateuri) | 指向子树文件的模板 URI。子树是树的固定深度（由subtreeLevels定义）部分，以限制内存使用。每个文件的 URI 被替换为子树根的全局级别、x 和 y。对于细分方案OCTREE，还应给出 z。相对路径是相对于 tileset JSON 的。 | ✓ 是 |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension)      | 具有扩展特定对象的字典对象。                                                                                                                | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)       | 特定于应用程序的数据。                                                                                                                   | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[subtrees.schema.json](https://portal.ogc.org/files/102132#reference-schema-subtrees)

### A.37.1.子树.uri

指向子树文件的模板 URI。子树是树的固定深度（由subtreeLevels定义）部分，以限制内存使用。每个文件的 URI 被替换为子树根的全局级别、x 和 y。对于细分方案OCTREE，还应给出 z。相对路径是相对于 tileset JSON 的。

*   **类型**：[templateUri](https://portal.ogc.org/files/102132#reference-templateuri)
*   **要求**：✓ 是

### A.37.2.子树.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.37.3.子树.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.38. 模板 URI

一个带有嵌入式表达式的 URI，用于描述与隐式瓦片集中的隐式瓦片关联的资源。允许的表达式是{level}、{x}、{y}和{z}。{level}代入节点的层级，{x}代入层级内节点的 x 索引，{y}代入层内节点的 y 索引。{z}只能在细分方案为OCTREE时给出，并替换为级别内节点的 z 索引。

*   **允许附加属性。**
*   **JSON 架构**：[templateUri.schema.json](https://portal.ogc.org/files/102132#reference-schema-templateuri)

## A.39. 瓦

3D Tiles 瓦片集中的瓦片。

表 A.34 —拼贴属性

|                         | 类型                                                                                       | 描述                                                                                                                                                                                                                                     | 必需的                                     |
| :---------------------- | :--------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------- |
| **边界体积**                | [边界体积](https://portal.ogc.org/files/102132#reference-boundingvolume)                     | 包围图块的边界体积。                                                                                                                                                                                                                             | ✓ 是                                     |
| **viewerRequestVolume** | [边界体积](https://portal.ogc.org/files/102132#reference-boundingvolume)                     | 可选的边界体积，它定义了在请求图块内容之前以及根据几何错误优化图块之前查看者应位于其中的体积。                                                                                                                                                                                        | 不                                       |
| **几何误差**                | 数字                                                                                       | 如果渲染此图块而其子项未呈现，则会引入以米为单位的错误。在运行时，几何误差用于计算屏幕空间误差 (SSE)，即以像素为单位测量的误差。                                                                                                                                                                    | ✓ 是                                     |
| **提炼**                  | 细绳                                                                                       | 指定在遍历 tileset 进行渲染时是否使用附加或替换细化。这个属性对于 tileset 的根 tile 是必需的；它对于所有其他图块都是可选的。默认是从父 tile 继承。                                                                                                                                               | 不                                       |
| **转换**                  | 编号 \[16]                                                                                 | 一个浮点 4×4 仿射变换矩阵，以列优先顺序存储，将图块的内容——即它的特征以及 content.boundingVolume、boundingVolume 和 viewerRequestVolume——从图块的局部坐标系转换到父瓦片的坐标系，或者，在根瓦片的情况下，从瓦片的局部坐标系到瓦片集的坐标系。当体积是在 EPSG:4979 坐标中定义的区域时，变换不适用于任何体积属性。transform通过矩阵中的最大缩放因子缩放geometricError 。 | 否，默认：\[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1] |
| **内容**                  | [内容](https://portal.ogc.org/files/102132#reference-content)                              | 有关磁贴内容的元数据和指向内容的链接。当省略时，瓦片仅用于剔除。当它被定义时，内容将是未定义的。                                                                                                                                                                                       | 不                                       |
| **内容**                  | [内容](https://portal.ogc.org/files/102132#reference-content) \[1-\*]                      | 内容数组。当它被定义时，内容将是未定义的。                                                                                                                                                                                                                  | 不                                       |
| **元数据**                 | [元数据实体](https://portal.ogc.org/files/102132#reference-metadataentity)                    | 与此磁贴关联的元数据实体。                                                                                                                                                                                                                          | 不                                       |
| **隐式平铺**                | [tile.implicitTiling](https://portal.ogc.org/files/102132#reference-tile-implicittiling) | 描述此图块的隐式细分的对象。                                                                                                                                                                                                                         | 不                                       |
| **孩子们**                 | [Tile](https://portal.ogc.org/files/102132#reference-tile) \[1-\*]                         | 定义子图块的对象数组。每个子图块内容都被其父图块的边界体积完全包围，并且通常具有小于其父图块的几何误差的几何误差。对于叶瓦片，此数组的长度为零，并且可能未定义子级。                                                                                                                                                     | 不                                       |
| **扩展名**                 | [扩大](https://portal.ogc.org/files/102132#reference-extension)                            | 具有扩展特定对象的字典对象。                                                                                                                                                                                                                         | 不                                       |
| **临时演员**                | [临时演员](https://portal.ogc.org/files/102132#reference-extras)                             | 特定于应用程序的数据。                                                                                                                                                                                                                            | 不                                       |

*   **允许附加属性。**
*   **JSON 架构**：[tile.schema.json](https://portal.ogc.org/files/102132#reference-schema-tile)

### A.39.1.tile.boundingVolume

包围图块的边界体积。

*   **类型**：[边界体积](https://portal.ogc.org/files/102132#reference-boundingvolume)
*   **要求**：✓ 是
*   **最小属性数**：1

### A.39.2.tile.viewerRequestVolume

可选的边界体积，它定义了在请求图块内容之前以及根据几何错误优化图块之前查看者应位于其中的体积。

*   **类型**：[边界体积](https://portal.ogc.org/files/102132#reference-boundingvolume)
*   **要求**：否
*   **最小属性数**：1

### A.39.3.tile.geometricError

如果渲染此图块而其子项未呈现，则会引入以米为单位的错误。在运行时，几何误差用于计算屏幕空间误差 (SSE)，即以像素为单位测量的误差。

*   **类型**：数字
*   **要求**：✓ 是
*   **最小值**：>= 0

### A.39.4.tile.refine

指定在遍历 tileset 进行渲染时是否使用附加或替换细化。这个属性对于 tileset 的根 tile 是必需的；它对于所有其他图块都是可选的。默认是从父 tile 继承。

*   **类型**：字符串
*   **要求**：否
*   **允许值**：

    *   “添加”
    *   “代替”

### A.39.5.tile.transform

一个浮点 4×4 仿射变换矩阵，以列优先顺序存储，将图块的内容——即它的特征以及 content.boundingVolume、boundingVolume 和 viewerRequestVolume——从图块的局部坐标系转换到父瓦片的坐标系，或者，在根瓦片的情况下，从瓦片的局部坐标系到瓦片集的坐标系。当体积是在 EPSG:4979 坐标中定义的区域时，变换不适用于任何体积属性。transform通过矩阵中的最大缩放因子缩放geometricError 。

*   **类型**：数字 \[16]
*   **必填**：否，默认：\[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]

### A.39.6.  [图块内容](http://tile.content/)

有关磁贴内容的元数据和指向内容的链接。当省略时，瓦片仅用于剔除。当它被定义时，内容将是未定义的。

*   **类型**：[内容](https://portal.ogc.org/files/102132#reference-content)
*   **要求**：否

### A.39.7.  [tile.contents](http://tile.contents/)

内容数组。当它被定义时，内容将是未定义的。

*   **类型**：[内容](https://portal.ogc.org/files/102132#reference-content) \[1-\*]
*   **要求**：否

### A.39.8.图块元数据

与此磁贴关联的元数据实体。

*   **类型**：[元数据实体](https://portal.ogc.org/files/102132#reference-metadataentity)
*   **要求**：否

### A.39.9.tile.implicitTiling

描述此图块的隐式细分的对象。

*   **类型**：[tile.implicitTiling](https://portal.ogc.org/files/102132#reference-tile-implicittiling)
*   **要求**：否

### A.39.10.  [tile.children](http://tile.children/)

定义子图块的对象数组。每个子图块内容都被其父图块的边界体积完全包围，并且通常具有小于其父图块的几何误差的几何误差。对于叶瓦片，此数组的长度为零，并且可能未定义子级。

*   **类型**：[Tile](https://portal.ogc.org/files/102132#reference-tile) \[1-\*]

    *   数组中的每个元素都应是唯一的。
*   **要求**：否

### A.39.11.tile.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.39.12.tile.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.40. 隐式平铺

该对象允许对图块进行隐式细分。磁贴和内容可用性以及元数据存储在外部引用的子树中。

表 A.35——隐式平铺属性

|          | 类型                                                            | 描述                                                                  | 必需的 |
| :------- | :------------------------------------------------------------ | :------------------------------------------------------------------ | :-- |
| **细分方案** | 细绳                                                            | 描述 tileset 中使用的细分方案的字符串。                                            | ✓ 是 |
| **子树级别** | 整数                                                            | 每个子树中不同级别的数量。例如，subtreeLevels = 2的四叉树将具有包含 5 个节点（一个根节点和 4 个子节点）的子树。 | ✓ 是 |
| **可用级别** | 整数                                                            | 树中可用图块的层数。                                                          | ✓ 是 |
| **子树**   | [子树](https://portal.ogc.org/files/102132#reference-subtrees)  | 描述子树文件位置的对象。                                                        | ✓ 是 |
| **扩展名**  | [扩大](https://portal.ogc.org/files/102132#reference-extension) | 具有扩展特定对象的字典对象。                                                      | 不   |
| **临时演员** | [临时演员](https://portal.ogc.org/files/102132#reference-extras)  | 特定于应用程序的数据。                                                         | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[tile.implicitTiling.schema.json](https://portal.ogc.org/files/102132#reference-schema-tile-implicittiling)

### A.40.1.tile.implicitTiling.subdivisionScheme

描述 tileset 中使用的细分方案的字符串。

*   **类型**：字符串
*   **要求**：✓ 是
*   **允许值**：

    *   “四叉树”
    *   “八叉树”

### A.40.2.tile.implicitTiling.subtreeLevels

每个子树中不同级别的数量。例如，subtreeLevels = 2的四叉树将具有包含 5 个节点（一个根节点和 4 个子节点）的子树。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 1

### A.40.3.tile.implicitTiling.availableLevels

树中可用图块的层数。

*   **类型**：整数
*   **要求**：✓ 是
*   **最小值**：>= 1

### A.40.4.tile.implicitTiling.subtrees

描述子树文件位置的对象。

*   **类型**：[子树](https://portal.ogc.org/files/102132#reference-subtrees)
*   **要求**：✓ 是

### A.40.5.tile.implicitTiling.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.40.6.tile.implicitTiling.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

## A.41. 瓦片集

一个 3D Tiles Tile集。

表 A.36 — Tileset属性

|                  | 类型                                                                    | 描述                                                                  | 必需的 |
| :--------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------ | :-- |
| **资产**           | [资产](https://portal.ogc.org/files/102132#reference-asset)             | 关于整个 tileset 的元数据。                                                  | ✓ 是 |
| **特性**           | 目的                                                                    | 关于每个特征属性的元数据的字典对象。                                                  | 不   |
| **图式**           | [图式](https://portal.ogc.org/files/102132#reference-schema)            | 定义元数据类和枚举结构的对象。当它被定义时，schemaUri应该是未定义的。                             | 不   |
| **架构Uri**        | 细绳                                                                    | 外部架构文件的 URI（或 IRI）。当它被定义时，模式应该是未定义的。                                | 不   |
| **统计数据**         | [统计数据](https://portal.ogc.org/files/102132#reference-statistics)      | 包含有关元数据实体的统计信息的对象。                                                  | 不   |
| **团体**           | [组](https://portal.ogc.org/files/102132#reference-group) \[1-\*]      | 图块内容可能属于的一组数组。该数组的每个元素都是一个描述组的元数据实体。图块内容组属性是此数组的索引。                 | 不   |
| **元数据**          | [元数据实体](https://portal.ogc.org/files/102132#reference-metadataentity) | 与此 tileset 关联的元数据实体。                                                | 不   |
| **几何误差**         | 数字                                                                    | 如果未渲染此 tileset，则会引入以米为单位的错误。在运行时，几何误差用于计算屏幕空间误差 (SSE)，即以像素为单位测量的误差。 | ✓ 是 |
| **根**            | [瓦](https://portal.ogc.org/files/102132#reference-tile)               | 根瓦片。                                                                | ✓ 是 |
| **扩展使用**         | 字符串 \[1-\*]                                                           | 此 tileset 中某处使用的 3D Tiles 扩展的名称。                                    | 不   |
| **extensions必填** | 字符串 \[1-\*]                                                           | 正确加载此 tileset 所需的 3D Tiles 扩展的名称。                                   | 不   |
| **扩展名**          | [扩大](https://portal.ogc.org/files/102132#reference-extension)         | 具有扩展特定对象的字典对象。                                                      | 不   |
| **临时演员**         | [临时演员](https://portal.ogc.org/files/102132#reference-extras)          | 特定于应用程序的数据。                                                         | 不   |

*   **允许附加属性。**
*   **JSON 架构**：[tileset.schema.json](https://portal.ogc.org/files/102132#reference-schema-tileset)

### A.41.1.tileset.asset

关于整个 tileset 的元数据。

*   **类型**：[资产](https://portal.ogc.org/files/102132#reference-asset)
*   **要求**：✓ 是

### A.41.2.tileset.properties

关于每个特征属性的元数据的字典对象。

*   **类型**：对象
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：[属性](https://portal.ogc.org/files/102132#reference-properties)

### A.41.3.tileset.schema

定义元数据类和枚举结构的对象。当它被定义时，schemaUri应该是未定义的。

*   **类型**：[架构](https://portal.ogc.org/files/102132#reference-schema)
*   **要求**：否

### A.41.4.tileset.schemaUri

外部架构文件的 URI（或 IRI）。当它被定义时，模式应该是未定义的。

*   **类型**：字符串
*   **要求**：否
*   **格式**: iri-reference

### A.41.5.tileset.statistics

包含有关元数据实体的统计信息的对象。

*   **类型**：[统计](https://portal.ogc.org/files/102132#reference-statistics)
*   **要求**：否

### A.41.6.tileset.groups

图块内容可能属于的一组数组。该数组的每个元素都是一个描述组的元数据实体。图块内容组属性是此数组的索引。

*   **类型**：[组](https://portal.ogc.org/files/102132#reference-group) \[1-\*]
*   **要求**：否

### A.41.7.tileset.metadata

与此 tileset 关联的元数据实体。

*   **类型**：[元数据实体](https://portal.ogc.org/files/102132#reference-metadataentity)
*   **要求**：否

### A.41.8.tileset.geometricError

如果未渲染此 tileset，则会引入以米为单位的错误。在运行时，几何误差用于计算屏幕空间误差 (SSE)，即以像素为单位测量的误差。

*   **类型**：数字
*   **要求**：✓ 是
*   **最小值**：>= 0

### A.41.9.tileset.root

根瓦片。

*   **类型**:[Tile](https://portal.ogc.org/files/102132#reference-tile)
*   **要求**：✓ 是

### A.41.10.tileset.extensionsUsed

此 tileset 中某处使用的 3D Tiles 扩展的名称。

*   **类型**：字符串 \[1-\*]

    *   数组中的每个元素都应是唯一的。
*   **要求**：否

### A.41.11.tileset.extensionsRequired

正确加载此 tileset 所需的 3D Tiles 扩展的名称。

*   **类型**：字符串 \[1-\*]

    *   数组中的每个元素都应是唯一的。
*   **要求**：否

### A.41.12.tileset.extensions

具有扩展特定对象的字典对象。

*   **类型**：[扩展](https://portal.ogc.org/files/102132#reference-extension)
*   **要求**：否
*   **允许附加属性。**
*   **每个属性的类型**：对象

### A.41.13.tileset.extras

特定于应用程序的数据。

*   **类型**：[临时演员](https://portal.ogc.org/files/102132#reference-extras)
*   **要求**：否

**附件 B**\
（资料性）\
**JSON SCHEMA 参考**
==================

## B.1. 资产的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“asset.schema.json” ，“title” ：“资产” ，“$ref " : "rootProperty.schema.json" , "description" : "关于整个 tileset 的元数据。" , "properties" : { "version" : { "type" : "string" , "description" : "3D Tiles 版本。
     
     
     
     
     
     
         
             
             
        
        : { "type" : "string" , "description" : "此 tileset 的应用程序特定版本，例如，用于更新现有 tileset 时。" } }，“必需” ：[ “版本” ] } 
             
             
        
    
     
        
    

```

## B.2. 可用性的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“availability.schema.json” ，“title” ：“可用性” ，“$ref " : "rootProperty.schema.json" , "description" : "描述一组元素可用性的对象。" , “属性” ：{ “比特流” ：{ “描述” ：
     
     
     
     
     
     
         
             "指示每个元素是否可用的缓冲区视图的索引。比特流符合 3D 元数据规范中描述的布尔数组编码。如果元素可用，则其位为 1，如果不可用，其位为 0 ” , "type" : "integer" , "minimum" : 0 }, "availableCount" : { "description" : "一个数字，表示可用性比特流中存在多少个 1 比特。" , "type" : "integer" , "minimum" : 0 }, "constant" :
             
             
        
         
             
             
             
        
         
             “表示所有元素可用 (1) 还是全部不可用 (0) 的整数。” ，“anyOf” ：[ { “常量” ：0 ，“描述” ：“不可用” ，“类型” ：“整数” }，{ “常量” ：1 ，“描述” ：“可用” ，“类型” ：“整数" }, { "类型" : "整数" } ] } }, "
             
                
                     
                     
                     
                
                
                     
                     
                     
                
                
                     
                
            
        
    
     
        
             
                “比特流” ] }，{ “必需” ：[ “常量” ] }} ] }
            
        
        
             
                
            
        
    

```

## B.3. 批量 3D 模型特征表的 JSON 模式

```
{ "$schema" : " https://json-schema.org/draft/2020-12/schema" , "$id" : "b3dm.featureTable.schema.json" , "title" : "批处理 3D 模型特征Table" , "$ref" : "featureTable.schema.json" , "description" : "一组批处理 3D 模型语义，其中包含有关图块中要素的附加信息。" ，“弃用” ：真，“属性” ：{ “BATCH_LENGTH” ：{ “
     
     
     
     
     
     
     
         
             , "description" : "一个 `GlobalPropertyInteger` 对象，为所有特征定义一个整数属性。有关此属性的详细信息在 3D Tiles 规范中进行了描述。" }, "RTC_CENTER" : { "$ref" : "featureTable.schema.json#/definitions/globalPropertyCartesian3" , "description" : "一个 `GlobalPropertyCartesian3` 对象，为所有特征定义一个 3 分量数字属性。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” } }, “必需” ：[ “BATCH_LENGTH” ] }
             
        
         
             
             
        
    
     
        
    

```

## B.4. 批处理表的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“batchTable.schema.json” ，“title” ：“批处理表” ，“$ ref" : "rootProperty.schema.json" , "description" : "一组属性，为磁贴中的功能定义特定于应用程序的元数据。" , "已弃用" : true , "additionalProperties" : { "$ref" : "#/definitions/property" }, "
     
     
     
     
     
     
     
         
    
     
         { "title" : "BinaryBodyReference" , "$ref" : "rootProperty.schema.json" , "description" : "定义对存储属性值的批处理表的二进制主体部分的引用的对象没有直接在 JSON 中定义。” , "properties" : { "byteOffset" : { "type" : "integer" , "description" : "以字节为单位的缓冲区偏移量。, "最低" : 0 }, "
             
             
             
             
                 
                     
                     
                     
                
                 
                     “属性中组件的数据类型。” ，“anyOf” ：[ { “const” ：“BYTE” }，{ “const” ：“UNSIGNED_BYTE” }，{ “const” ：“SHORT” }，{ “const” ：“UNSIGNED_SHORT” }，{ “const” ：“INT” }，{ “常量” ：“UNSIGNED_INT” }，{ “常量” ：“FLOAT” }，{ “
                     
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             "string" } ] }, "type" : { "description" : "指定属性是标量还是向量。" ，“anyOf” ：[ { “const” ：“SCALAR” }，{ “const” ：“VEC2” }，{ “const” ：“VEC3” }，{ “const” ：“VEC4” }，{ “类型” ：“字符串” } ] } }，“必需”
                        
                    
                
                 
                     
                     
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                    
                
            
             
                
                , "type" ] }, "property" : { "title" : "Property" , "description" : "一个用户定义的属性，它在图块中指定每个功能特定于应用程序的元数据。值可以直接在JSON 作为数组，或者可以使用 `BinaryBodyReference` 对象引用二进制主体中的部分。” , "oneOf" : [ { "$ref" : "#/definitions/binaryBodyReference" }, { "type" : "array" } ] } } }
                
            
        
         
             
             
             
                
                     
                
                
                     
                
            
        
    

```

## B.5. 边界体积的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“boundingVolume.schema.json” ，“title” ：“包围卷” ，“$ ref" : "rootProperty.schema.json" , "description" : "包围图块或其内容的包围体。至少需要一个包围体属性。包围体包括 `box`、`region` 或 `sphere `。，“minProperties” ：1 ，“属性” ：{ “框” ：
     
     
     
     
     
     
     
         
             
            "description" : "一个包含 12 个数字的数组，用于定义定向边界框。前三个元素定义框中心的 x、y 和 z 值。接下来的三个元素（索引为 3、4 和 5 )定义x轴方向和半长。接下来的三个元素（索引6、7和8）定义y轴方向和半长。最后三个元素（索引9、10和11）定义z轴向和半长。” ，“项目” ：{ “类型” ：“数字” }，“minItems” ：12 ，“maxItems” ：12 }，“区域” ：{ “ 
             
                 
            
             
             
        
         
             
            "description" : "一个包含六个数字的数组，定义了 EPSG:4979 中的边界地理区域，坐标顺序为 [west, south, east, north, minimum height, maximum height]。经度和纬度以弧度为单位，高度为在 WGS84 椭球上方（或下方）以米为单位。” , "items" : { "type" : "number" }, "minItems" : 6 , "maxItems" : 6 }, "sphere" : { "type" : "array" , "description" : 
             
                 
            
             
             
        
         
             
             “定义边界球体的四个数字数组。前三个元素定义球体中心的 x、y 和 z 值。最后一个元素（索引为 3）定义以米为单位的半径。” , "items" : { "type" : "number" }, "minItems" : 4 , "maxItems" : 4 } } }
             
                 
            
             
             
        
    

```

## B.6. 缓冲区的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“buffer.schema.json” ，“title” ：“Buffer” ，“$ref " : "rootProperty.schema.json" , "description" : "缓冲区是二进制 blob。它可以是子树文件的二进制块，也可以是 URI 引用的外部缓冲区。" ，“属性” ：{ “uri” ：{ “类型” ：“字符串” ，“描述”
     
     
     
     
     
     
         
             
             “外部模式文件的 URI（或 IRI）。相对路径是相对于包含缓冲区 JSON 的文件的。使用 JSON 子树格式时需要 `uri`，而使用二进制子树格式时则不需要 - 当省略缓冲区时指的是子树文件的二进制块。不允许使用数据 URI。” , "format" : "iri-reference" }, "byteLength" : { "type" : "integer" , "minimum" : 1 , "description" : "缓冲区的长度，以字节为单位。" }, “名称” ：{ “类型”
             
        
         
             
             
             
        
         
             
            : 1 , "description" : "缓冲区的名称。" } }，“必需” ：[ “byteLength” ] } 
             
        
    
     
        
    

```

## B.7. 缓冲区视图的 JSON 模式

```
：“缓冲区的索引。” }，“字节偏移量” ：
     
     
     
     
     
     
         
             
             
             
        
         { "type" : "integer" , "minimum" : 0 , "description" : "缓冲区中的偏移量（以字节为单位）。" }, "byteLength" : { "type" : "integer" , "minimum" : 1 , "description" : "缓冲区视图的总字节长度。" }, “名称” ：{ “类型” ：“字符串” ，“最小长度” ：1 ，“
             
             
             
        
         
             
             
             
        
         
             
             
             
        
    
    “必需” ：[ “缓冲区” ，“byteOffset” ，“byteLength” ] } 
        
        
        
    

```

## B.8. 类的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“class.schema.json” ，“title” ：“Class” ，“$ref " : "rootProperty.schema.json" , "description" : "包含一组属性的类。" ，“属性” ：{ “名称” ：{ “类型” ：“字符串” ，“最小长度” ：1 ，“描述” ：“类的名称，例如用于显示目的。” }, "描述"
     
     
     
     
     
     
         
             
             
             
        
        : { "type" : "string" , "minLength" : 1 , "description" : "类的描述。" }, "properties" : { "type" : "object" , "description" : "一个字典，其中每个键是一个属性 ID，每个值是一个定义属性的对象。属性 ID 应是与正则表达式匹配的字母数字标识符`^[a-zA-Z_][a-zA-Z0-9_]*$`。” , "minProperties" : 1 , "additionalProperties" : 
             
             
             
        
         
             
             
             
             
                 “class.property.schema.json” } } } }
            
        
    

```

## B.9. 类属性的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“class.property.schema.json” ，“title” ：“类属性” ，"$ref" : "rootProperty.schema.json" , "description" : "元数据类的单个属性。" ，“属性” ：{ “名称” ：{ “类型” ：“字符串” ，“最小长度” ：1 ，“
     
     
     
     
     
     
         
             
             
             
        
        "description" : { "type" : "string" , "minLength" : 1 , "description" : "属性的描述。" }, "type" : { "description" : "元素类型。" ，“anyOf” ：[ { “const” ：“SCALAR” }，{ “const” ：“VEC2” }，{ “const” ：“VEC3” }，{ “ 
             
             
             
        
         
             
             
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     “MAT2” }，{ “const” ：“MAT3” }，{ “const” ：“MAT4” }，{ “const” ：“STRING” }，{ “const” ：“BOOLEAN” }，{ “const” ："ENUM" }, { "type" : "string" } ] }, "componentType" : { "description" : "元素组件的数据类型。仅适用于`SCALAR`、`VECN`、和 `MATN` 类型。" , "anyOf" : [ {
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
            
        
         
             
             
                
                    “常量” ：“INT8” }，{ “常量” ：“UINT8” }，{ “常量” ：“INT16” }，{ “常量” ：“UINT16” }，{ “常量” ：“INT32” }，{ “常量” ：“UINT32” }，{ “常量” ：“INT64” }，{ “常量” ：“UINT64” }，{ “常量” ：“FLOAT32” }，{ “常量” ：“FLOAT64” }，{ “类型” 
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                    : "string" } ] }, "enumType" : { "type" : "string" , "description" : "在 `enums` 字典中声明的枚举 ID。当 `type` 为 `ENUM` 时需要。" }, "array" : { "type" : "boolean" , "default" : false , "description" : "属性是否为数组。定义`count`时，属性为定长数组。否则属性是一个可变长度数组。” }, “计数” 
                
            
        
         
             
             
        
         
             
             
             
        
         
             , "minimum" : 2 , "description" : "数组元素的数量。只能在 array 为 true 时定义。" }, "normalized" : { "type" : "boolean" , "description" : "指定整数值是否被归一化。仅适用于具有整数组件类型的`SCALAR`、`VECN`和`MATN`类型。对于无符号整数组件类型，值在 [0.0, 1.0] 之间归一化。对于有符号整数组件类型，值在 [-1.0, 1.0] 之间归一化。对于所有其他组件类型，此属性应为 false。，“默认” ：
             
             
        
         
             
             
             
        
        : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : "应用于属性值的偏移量。仅适用于 `SCALAR`、`VECN` 和 `MATN` 类型组件类型为 `FLOAT32` 或 `FLOAT64`，或者当属性为 `normalized` 时。” }, "scale" : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : "适用于属性值的比例。仅适用于 `SCALAR`、`VECN` 和当组件类型为 `FLOAT32` 或 `FLOAT64` 或属性为 `normalized` 时，`MATN` 类型。}, 
             
             
        
         
             
             
        
         
            "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : "属性的最大允许值。仅适用于 `SCALAR`、`VECN` 和 `MATN` 类型。这是所有属性值的最大值，在应用基于 `normalized`、`offset` 和 `scale` 属性的转换之后。” }, "min" : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : 
             
        
         
             
             “属性的最小允许值。仅适用于 ‘SCALAR’、‘VECN’ 和 ‘MATN’ 类型。这是所有属性值中的最小值，在基于 ‘normalized’、‘offset’ 和 ‘已应用 scale` 属性。” }, "required" : { "type" : "boolean" , "description" : "如果需要，该属性应出现在符合该类的每个实体中。如果不需要，单个实体可以包含 `noData` 值，或者整个属性可能会被省略。因此，`noData` 对必需的属性没有影响。客户端实现可能会使用必需的属性来进行性能优化。” , “默认”
        
         
             
             
             
        
        "noData" : { "$ref" : "definitions.schema.json#/definitions/noDataValue" , "description" : "`noData` 值表示缺失数据——也称为哨兵值——无论它出现在哪里。`BOOLEAN ` 属性不能指定 `noData` 值。这是作为普通属性值给出的，没有来自 `normalized`、`offset` 和 `scale` 属性的转换。如果 `required` 为真，则不应定义。}, "默认" : { "$ref" : "definitions.schema.json#/definitions/anyValue" , "描述" : 
             
             
        
         
             
             “在遇到 ‘noData’ 值或省略的属性时使用的默认值。该值以其最终形式给出，并考虑了 ‘normalized’、‘offset’ 和 ‘scale’ 属性的影响。不应是如果 `required` 为真则定义。” }, "semantic" : { "type" : "string" , "minLength" : 1 , "description" : "描述该属性应如何解释的标识符。语义不能被类中的其他属性使用。" } }, "必填" : [ "类型" ] }
        
         
             
             
             
        
    
     
        
    

```

## B.10. 内容的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“content.schema.json” ，“title” ：“内容” ，“$ref " : "rootProperty.schema.json" , "description" : "关于磁贴内容的元数据和内容链接。" , "properties" : { "boundingVolume" : { "description" : "一个可选的边界体积，它紧紧地包围着 tile 内容。tile.
     
     
     
     
     
     
         
             启用紧密视锥体剔除。省略时，使用 tile.boundingVolume。" , "$ref" : "boundingVolume.schema.json" }, "uri" : { "type" : "string" , "description" : "指向平铺内容。当uri 是相对的时，它是相对于引用的tileset JSON文件。" }, "
             
        
         
             
             
        
         
             
             
        
         
             , "minimum" : 0 , "description" : "此内容所属的组。该值是为包含 tileset 定义的 `groups` 数组的索引。" } }, “必填项” ：[ “uri” ] }
             
             
        
    
     
        
    

```

## B.11. 用于定义的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“definitions.schema.json” ，“title” ：“定义” ，“描述” ：“模式文件中使用的通用定义。” ，“定义” ：{ “numericArray1D” ：{ “标题” ：“数字一维数组” ，“类型” ：“数组” ，“项目” ：{ “类型” ：
     
     
     
     
     
         
             
             
             
                 
            
             
            "description" : "数值数组" }, "numericArray2D" : { "title" : "Numeric 2D Array" , "type" : "array" , "items" : { "$ref" : "#/definitions /numericArray1D" }, "minItems" : 1 , "description" : "数值数组的数组" }, "booleanArray1D" : { "title" : "布尔一维数组" ,“类型” ：“数组” ，“项目” ：{ 
        
         
             
             
             
                 
            
             
             
        
         
             
             
             
                “type” ：“boolean” }，“minItems” ：1 ，“description” ：“布尔值数组” }，“stringArray1D” ：{ “title” ：“String 1D Array” ，“type” ：“array” , "items" : { "type" : "string" }, "minItems" : 1 , "description" : "字符串值数组" }, "numericValue"：{ “标题” ：“数值” ，“一个” 
            
             
             
        
         
             
             
             
                 
            
             
             
        
         
             
            : [ { "type" : "number" }, { "$ref" : "#/definitions/numericArray1D" }, { "$ref" : "#/definitions/numericArray2D" } ], "description" : "For ` SCALAR` 这是一个数字。对于 `VECN`，这是一个包含 `N` 个数字的数组。对于 `MATN`，这是一个包含 `N²` 个数字的数组。对于固定长度的数组，这是一个包含 `count` 个元素的数组给定的`类型`。” }, "noDataValue" : { "title" : "无数据值" , "oneOf" : 
                
                     
                
                
                     
                
                
                     
                
            
             
        
         
             
             
                
                     "#/definitions/numericValue" }, { "type" : "string" }, { "$ref" : "#/definitions/stringArray1D" } ], "description" : "对于 `SCALAR`，这是一个数字。对于`STRING` 这是一个字符串。对于 `ENUM`，这是一个字符串，它应该是一个有效的枚举 `name`，而不是整数值。对于 `VECN`，这是一个包含 `N` 个数字的数组。对于 `MATN`，这是一个包含“N²”个数字的数组。对于固定长度的数组，这是一个包含给定“类型”的“count”个元素的数组。}, "anyValue" : { "title" : "任何值" , "oneOf"
                
                
                     
                
                
                     
                
            
             
        
         
             
             
                
                    : "#/definitions/numericValue" }, { "type" : "string" }, { "$ref" : "#/definitions/stringArray1D" }, { "type" : "boolean" }, { "$ref" : "#/definitions/booleanArray1D" } ], "描述" : 
                
               
                     
                
                
                     
                
                
                     
                
                
                     
                
            
             “对于‘SCALAR’，这是一个数字。对于‘STRING’，这是一个字符串。对于‘ENUM’，这是一个字符串，它应该是一个有效的枚举‘name’，而不是整数值。对于‘BOOLEAN’，这是一个布尔值.对于“VECN”，这是一个包含“N”个数的数组。对于“MATN”，这是一个包含“N²”个数的数组。对于固定长度数组，这是一个包含给定“类型”的“count”个元素的数组。对于可变长度数组，这是给定“类型”的任意长度的数组。” } } }
        
    

```

## B.12. 枚举的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“enum.schema.json” ，“title” ：“Enum” ，“$ref " : "rootProperty.schema.json" , "description" : "定义枚举值的对象。" ，“属性” ：{ “名称” ：{ “类型” ：“字符串” ，“最小长度” ：1 ，“描述” ：“枚举的名称，例如用于显示目的。” }, "描述"
     
     
     
     
     
     
         
             
             
             
        
        : { "type" : "string" , "minLength" : 1 , "description" : "枚举的描述。" }, "valueType" : { "default" : "UINT16" , "description" : "整数枚举值的类型。" , "anyOf" : [ { "const" : "INT8" }, { "const" : "UINT8" }, { "const" : 
             
             
             
        
         
             
             
             
                
                     
                
                
                     
                
                
                     
                
                
                     
                }, { “const” : “INT32” }, { “const” : “UINT32” }, { “const” : “INT64” }, { “const” : “UINT64” }, { “type” : “string” } ] }, "values" : { "type" : "array" , "description" : "枚举值数组。不允许重复名称或重复整数值。" , "物品"
                
                     
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
            
        
         
             
             
             
                 
            }, "minItems" : 1 } }, "required" : [ "values" ] }
             
        
    
     
        
    

```

## B.13. 枚举值的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“enum.value.schema.json” ，“title” ：“枚举值” ，"$ref" : "rootProperty.schema.json" , "description" : "一个枚举值。" ，“属性” ：{ “名称” ：{ “类型” ：“字符串” ，“最小长度” ：1 ，“描述” ：“枚举值的名称。” }，“描述” ：{
     
     
     
     
     
     
         
             
             
             
        
         
            “type” ：“string” ，“minLength” ：1 ，“description” ：“枚举值的描述​​。” }, "value" : { "type" : "integer" , "description" : "整数枚举值。" } }, "必填项" : [ "名称" , "值" ] } 
             
             
        
         
             
             
        
    
     
        
        
    

```

## B.14. 扩展的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“extension.schema.json” ，“title” ：“Extension” ，“type” ：“对象” ，“描述” ：“具有扩展特定对象的字典对象。” , "additionalProperties" : { "type" : "object" } }
     
     
     
     
     
     
         
    

```

## B.15. 额外的 JSON 模式

```
{ "$schema" : " https://json-schema.org/draft/2020-12/schema" , "$id" : "extras.schema.json" , "title" : "Extras" , "description" ：“特定于应用程序的数据。” }
     
     
     
     

```

## B.16. 特征表的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“featureTable.schema.json” ，“title” ：“特征表” ，“$ ref" : "rootProperty.schema.json" , "description" : "一组语义，包含每个图块和每个特征值，定义图块中特征的位置和外观属性。" ，“弃用” ：真，“additionalProperties” ：{ “$ref” ：“
     
     
     
     
     
     
     
         
    
     
        "binaryBodyOffset" : { "title" : "BinaryBodyOffset" , "$ref" : "rootProperty.schema.json" , "description" : "一个对象，将偏移量定义为特征表的二进制主体的一部分，其中属性如果没有直接在 JSON 中定义，值将被存储。” , "properties" : { "byteOffset" : { "type" : "integer" , "description" : "以字节为单位的缓冲区偏移量。，“最小” 
             
             
             
             
                 
                     
                     
                     
                
            
             [ "byteOffset" ] }, "binaryBodyReference" : { "title" : "BinaryBodyReference" , "$ref" : "#/definitions/binaryBodyOffset" , "description" : "定义对二进制主体部分的引用的对象如果未在 JSON 中直接定义，则存储属性值的功能表的名称。” , “属性” ：{ “组件类型” ：{ “描述” ：
                
            
        
         
             
             
             
             
                 
                     “属性中组件的数据类型。仅当语义允许覆盖隐式组件类型时才定义。这些情况在每个图块格式中指定。” ，“anyOf” ：[ { “const” ：“BYTE” }，{ “const” ：“UNSIGNED_BYTE” }，{ “const” ：“SHORT” }，{ “const” ：“UNSIGNED_SHORT” }，{ “const” : "INT" }, { "const" : "UNSIGNED_INT"
                     
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        
                             
                        
                        { "const" : "DOUBLE" }, { "type" : "string" } ] } } }, "property" : { "title" : "Property" , "description" : "指定应用程序的用户定义属性- 磁贴中的特定元数据。值可以使用“BinaryBodyReference”对象引用二进制主体中的部分。全局值也可以直接在 JSON 中定义。” , "oneOf" : [ { "$ref" : "#/definitions/binaryBodyReference"
                             
                        
                        
                             
                        
                    
                
            
        
         
             
             
             
                
                     
                
                
                     "#/definitions/globalPropertyBoolean" }, { "$ref" : "#/definitions/globalPropertyInteger" }, { "$ref" : "#/definitions/globalPropertyNumber" }, { "$ref" : "#/definitions/ globalPropertyCartesian3" }, { "$ref" : "#/definitions/globalPropertyCartesian4" } ] }, "globalPropertyBoolean" : { "title" : "GlobalPropertyBoolean" , "description" : "为所有特征定义全局布尔属性值的对象。" , "type"
                
                
                     
                
                
                     
                
                
                     
                
                
                     
                
            
        
         
             
             
            : "boolean" }, "globalPropertyInteger" : { "title" : "GlobalPropertyInteger" , "description" : "为所有特征定义全局整数属性值的对象。" , "oneOf" : [ { "$ref" : "#/definitions/binaryBodyOffset" }, { "type" : "integer" , "minimum" : 0 } ] }, "globalPropertyNumber" : { "title" : 
        
         
             
             
             
                
                     
                
                
                     
                     
                
            
        
         
             
             “为所有功能定义全局数字属性值的对象。” , "oneOf" : [ { "$ref" : "#/definitions/binaryBodyOffset" }, { "type" : "number" , "minimum" : 0 } ] }, "globalPropertyCartesian3" : { "title" : "GlobalPropertyCartesian3 " , "description" : "一个为所有特征定义全局 3 分量数字属性值的对象。" ，“一个” ：
             
                
                     
                
                
                     
                     
                
            
        
         
             
             
             
                
                     "#/definitions/binaryBodyOffset" }, { "type" : "array" , "items" : { "type" : "number" }, "minItems" : 3 , "maxItems" : 3 } ] }, "globalPropertyCartesian4" : { "title" : "GlobalPropertyCartesian4" , "description" : "为所有特征定义全局 4 分量数字属性值的对象。" ，“一个” ：
                
                
                     
                     
                         
                    
                     
                     
                
            
        
         
             
             
             
                
                     "#/definitions/binaryBodyOffset" }, { "type" : "array" , "items" : { "type" : "number" }, "minItems" : 4 , "maxItems" : 4 } ] } } }
                
                
                     
                     
                         
                    
                     
                     
                
            
        
    

```

## B.17. 组元数据的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“group.schema.json” ，“title” ：“组元数据” ，“$ ref" : "metadataEntity.schema.json" , "description" : "包含有关组的元数据的对象。" }
     
     
     
     
     

```

## B.18. 实例化 3D 模型特征表的 JSON 架构

```
{ "$schema" : " https://json-schema.org/draft/2020-12/schema" , "$id" : "i3dm.featureTable.schema.json" , "title" : "实例化 3D 模型特征Table" , "$ref" : "featureTable.schema.json" , "description" : "一组实例化 3D 模型语义，包含定义图块中实例化模型的位置和外观属性的值。" ，“弃用” ：真，“属性” ：{ “位置” ：
     
     
     
     
     
     
     
         
             “一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "POSITION_QUANTIZED" : { "description" : "一个 `BinaryBodyReference` 对象定义了对二进制主体部分的引用，其中属性值是存储。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "
             
        
         
             
             
        
         
            "description" : "一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。" , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "NORMAL_RIGHT" : { "description" : "一个 `BinaryBodyReference` 对象定义了对二进制主体部分的引用，其中属性值是存储。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema. 
             
        
         
             
             
        
        : { "description" : "一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。" , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "NORMAL_RIGHT_OCT32P" : { "description" : "一个 `BinaryBodyReference` 对象定义了对二进制主体部分的引用，其中属性值是存储。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema. 
             
             
        
         
             
             
        
        "SCALE" : { "description" : "一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。" , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "SCALE_NON_UNIFORM" : { "description" : "一个 `BinaryBodyReference` 对象定义了对二进制主体部分的引用，其中属性值是存储。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$参考" : 
             
             
        
         
             
             "featureTable.schema.json#/definitions/binaryBodyReference" }, "BATCH_ID" : { "description" : "一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "INSTANCES_LENGTH" : { "description" : "一个 `GlobalPropertyInteger` 对象定义所有特征的整数属性。有关此属性的详细信息在3D Tiles 规范。” ,
        
         
             
             
        
         
             
             "featureTable.schema.json#/definitions/globalPropertyInteger" }, "RTC_CENTER" : { "description" : "一个 `GlobalPropertyCartesian3` 对象定义了所有特征的 3 分量数字属性。有关此属性的详细信息在 3D Tiles 中进行了描述规格。” , "$ref" : "featureTable.schema.json#/definitions/globalPropertyCartesian3" }, "QUANTIZED_VOLUME_OFFSET" : { "description" : "一个 `GlobalPropertyCartesian3` 对象定义了所有特征的 3 分量数字属性。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” ,
        
         
             
             
        
         
             
             "featureTable.schema.json#/definitions/globalPropertyCartesian3" }, "QUANTIZED_VOLUME_SCALE" : { "description" : "一个 `GlobalPropertyCartesian3` 对象定义了所有特征的 3 分量数字属性。有关此属性的详细信息在 3D Tiles 中有描述规格。” , "$ref" : "featureTable.schema.json#/definitions/globalPropertyCartesian3" }, "EAST_NORTH_UP" : { "description" : "一个 `GlobalPropertyBoolean` 对象定义了所有特征的布尔属性。有关此属性的详细信息在3D Tiles 规范。” ,
        
         
             
             
        
         
             
             "featureTable.schema.json#/definitions/globalPropertyBoolean" } }, "oneOf" : [ { "required" : [ "POSITION" ] }, { "required" : [ "POSITION_QUANTIZED" ] } ], "dependencies" : { “POSITION_QUANTIZED” ：[ “QUANTIZED_VOLUME_OFFSET” ，“QUANTIZED_VOLUME_SCALE” ]，“NORMAL_UP” ：[ “NORMAL_RIGHT” ]，“NORMAL_RIGHT” ：[ "NORMAL_UP" ], "NORMAL_UP_OCT32P"
        
    
     
        
             
                
            
        
        
             
                
            
        
    
     
         
            
            
        
         
            
        
         
            
        
        ：[ “NORMAL_RIGHT_OCT32P” ]，“NORMAL_RIGHT_OCT32P” ：[ “NORMAL_UP_OCT32P” ] }，“必需” ：[ “INSTANCES_LENGTH” ] } 
            
        
         
            
        
    
     
        
    

```

## B.19. 元数据实体的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“metadataEntity.schema.json” ，“title” ：“元数据实体” ，“$ ref" : "rootProperty.schema.json" , "description" : "一个对象，包含对元数据模式中的类的引用，以及符合该类属性的属性值。" ，“属性” ：{ “类” ：{ “类型” ：“字符串” ，
     
     
     
     
     
     
         
             
             “属性值符合的类。该值应是在元数据模式的“类”字典中声明的类 ID。” }, "属性" : { "类型" : "对象" , "描述" :
        
         
             
             “一个字典，其中每个键对应于类‘properties’字典中的一个属性 ID，每个值都包含属性值。值的类型应与属性定义匹配：对于 ‘BOOLEAN’，使用 ‘true’ 或 ‘false’ `。对于 `STRING` 使用 JSON 字符串。对于数字类型使用 JSON 数字。对于 `ENUM` 使用有效的枚举 `name`，而不是整数值。对于 `ARRAY`、`VECN` 和 `MATN` 类型使用包含与“componentType”匹配的值的 JSON 数组。必需的属性应包含在此字典中。” , "minProperties" : 1 , "additionalProperties" : { "$ref" : "definitions.schema.json#/definitions/anyValue" } } },
             
             
                 
            
        
    
     [ “类” ] }
        
    

```

## B.20. 点云特征表的 JSON 模式

```
{ "$schema" : " https://json-schema.org/draft/2020-12/schema" , "$id" : "pnts.featureTable.schema.json" , "title" : "点云特征表" , "$ref" : "featureTable.schema.json" , "description" : "一组点云语义，包含定义图块中点的位置和外观属性的值。" ，“弃用” ：真，“属性” ：{ “位置” ：
     
     
     
     
     
     
     
         
             “一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "POSITION_QUANTIZED" : { "description" : "一个 `BinaryBodyReference` 对象定义了对二进制主体部分的引用，其中属性值是存储。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "
             
        
         
             
             
        
         
            "description" : "一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。" , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "RGB" : { "description" : "一个 `BinaryBodyReference` 对象定义了对二进制主体部分的引用，其中属性值是存储。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" 
             
        
         
             
             
        
         { "description" : "一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。" , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "NORMAL" : { "description" : "一个 `BinaryBodyReference` 对象定义了对二进制主体部分的引用，其中属性值是存储。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$ref" : "featureTable.schema.
             
             
        
         
             
             
        
        "NORMAL_OCT16P" : { "description" : "一个 `BinaryBodyReference` 对象定义了对存储属性值的二进制主体部分的引用。有关此属性的详细信息在 3D Tiles 规范中进行了描述。" , "$ref" : "featureTable.schema.json#/definitions/binaryBodyReference" }, "BATCH_ID" : { "description" : "一个 `BinaryBodyReference` 对象，定义对二进制主体部分的引用，其中属性值为存储。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$参考" : 
             
             
        
         
             
             "featureTable.schema.json#/definitions/binaryBodyReference" }, "POINTS_LENGTH" : { "description" : "一个 `GlobalPropertyInteger` 对象定义了所有点的整数属性。有关此属性的详细信息在 3D Tiles 规范中进行了描述。" , "$ref" : "featureTable.schema.json#/definitions/globalPropertyInteger" }, "RTC_CENTER" : { "description" : "一个 `GlobalPropertyCartesian3` 对象，为所有点定义一个 3 分量数字属性。有关此属性的详细信息在 3D Tiles 规范中进行了描述。” , "$参考"
        
         
             
             
        
         
             
             "featureTable.schema.json#/definitions/globalPropertyCartesian3" }, "QUANTIZED_VOLUME_OFFSET" : { "description" : "一个 `GlobalPropertyCartesian3` 对象定义了所有点的 3 分量数字属性。有关此属性的详细信息在 3D Tiles 中有描述规格。” , "$ref" : "featureTable.schema.json#/definitions/globalPropertyCartesian3" }, "QUANTIZED_VOLUME_SCALE" : { "description" : "一个 `GlobalPropertyCartesian3` 对象，为所有点定义一个 3 分量数字属性。有关此属性的详细信息在 3D Tiles 规范中进行了描述。”
        
         
             
             
        
         
             
             "featureTable.schema.json#/definitions/globalPropertyCartesian3" }, "CONSTANT_RGBA" : { "description" : "一个 `GlobalPropertyCartesian4` 对象定义了所有点的 4 分量数字属性。有关此属性的详细信息在 3D Tiles 中有描述规格。” , "$ref" : "featureTable.schema.json#/definitions/globalPropertyCartesian4" }, "BATCH_LENGTH" : { "description" : "一个 `GlobalPropertyInteger` 对象定义所有点的整数属性。有关此属性的详细信息在3D Tiles 规范。” , "
        
         
             
             
        
         
             
             “featureTable.schema.json#/definitions/globalPropertyInteger” } }，“anyOf” ：[ { “required” ：[ “POSITION” ] }，{ “required” ：[ “POSITION_QUANTIZED” ] } ]，“dependencies” ：{ “POSITION_QUANTIZED” ：[ “QUANTIZED_VOLUME_OFFSET” ，“QUANTIZED_VOLUME_SCALE” ]，“BATCH_ID” ：[ “BATCH_LENGTH” ] }，“必需” ：[ “POINTS_LENGTH” ] }
        
    
     
        
             
                
            
        
        
             
                
            
        
    
     
         
            
            
        
         
            
        
    
     
        
    

```

## B.21. 属性的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“properties.schema.json” ，“title” ：“属性” ，“$ref " : "rootProperty.schema.json" , "description" : "关于每个特征属性的元数据字典对象。" ，“属性” ：{ “最大” ：{ “类型” ：“数字” ，“描述” ：“
     
     
     
     
     
     
         
             
             
        
         { "type" : "number" , "description" : "tileset 中所有特征的这个属性的最小值。" } }, "必需" : [ "最大" , "最小" ] }
             
             
        
    
     
        
        
    

```

## B.22. 属性表的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“propertyTable.schema.json” ，“title” ：“属性表” ，“$ ref" : "rootProperty.schema.json" , "description" : "符合类的属性，组织为存储在二进制柱状数组中的属性值。" ，“属性” ：{ “名称” ：{ “类型” ：“字符串” ，“最小长度” ：
     
     
     
     
     
     
         
             
             
             “属性表的名称，例如用于显示目的。” }, "class" : { "type" : "string" , "description" : "属性值符合的类。该值应为在 `classes` 字典中声明的类 ID。" }, "count" : { "type" : "integer" , "minimum" : 1 , "description" : "每个属性数组中的元素数。" }, “属性” ：{ “类型” ：
        
         
             
             
        
         
             
             
             
        
         
             
             “一个字典，其中每个键对应于类‘properties’字典中的一个属性 ID，每个值都是一个描述属性值存储位置的对象。必需的属性应包含在该字典中。” , "minProperties" : 1 , "additionalProperties" : { "$ref" : "propertyTable.property.schema.json" } } }, "required" : [ "class" , "count" ] }
             
             
                 
            
        
    
     
        
        
    

```

## B.23. 属性表属性的 JSON 模式

    { “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“propertyTable.property.schema.json” ，“title” ：“属性表属性” , "$ref" : "rootProperty.schema.json" , "description" : "一组二进制属性值。这代表属性表的一列，并包含每个元数据实体的某个属性的一个值。" ，“属性” ：{ “值” ：{ “类型” ：
         
         
         
         
         
         
             
                 
                 , "描述" :
                 “包含属性值的缓冲区视图的索引。属性值的数据类型由属性定义决定：当 type 是 BOOLEAN 时，值被打包到比特流中。当 type 是 STRING 时，值被存储作为字节序列并解码为 UTF-8 字符串。当“type”为“SCALAR”、“VECN”或“MATN”时，值将存储为提供的“componentType”，缓冲区视图“byteOffset”应与`componentType` 大小的倍数。当 `type` 为 `ENUM` 时，值存储为枚举的 `valueType` 并且缓冲区视图 `byteOffset` 应与 `valueType` 大小的倍数对齐。每个枚举值在数组应匹配枚举定义中允许的值之一。可变长度数组需要 arrayOffsets，字符串需要 stringOffsets（对于字符串的可变长度数组，两者都是必需的）。”
            }, "arrayOffsets" : { "type" : "integer" , "minimum" : 0 , "description" :
             
                 
                 
                 "缓冲区视图的索引，包含可变长度数组的偏移量。偏移量的数量等于属性表`count`加一。偏移量表示每个数组的起始位置，最后一个偏移量表示数组之后的位置最后一个数组。数组长度是使用后续偏移量和当前偏移量之间的差值计算的。如果“type”为“STRING”，则偏移量索引到字符串偏移量数组（存储在“stringOffsets”中），否则它们索引到属性中数组（存储在“值”中）。这些偏移量的数据类型由“arrayOffsetType”确定。缓冲区视图“byteOffset”应与“arrayOffsetType”大小的倍数对齐。}, "stringOffsets" : { "类型" : "
            
             
                 
                "minimum" : 0 , "description" : "包含字符串偏移量的缓冲区视图的索引。偏移量的数量等于字符串元素的数量加一。偏移量表示属性数组中每个字符串的字节偏移量(存储在`values`中)，最后一个偏移量表示最后一个字符串之后的字节偏移量。字符串字节长度是使用后续偏移量与当前偏移量之间的差来计算的。这些偏移量的数据类型由`stringOffsetType确定`。缓冲区视图 `byteOffset` 应与 `stringOffsetType` 大小的倍数对齐。" }, "arrayOffsetType" : { "说明" : " 
                 
            
             
                 ，“默认” ：“UINT32” ，“anyOf” ：[ { “常量” ：“UINT8” }，{ “常量” ：“UINT16” }，{ “常量” ：“UINT32” }，{ “常量” ：“ UINT64" }, { "type" : "string" } ] }, "stringOffsetType" : { "description" : "`stringOffsets` 中值的类型。" ,
                 
                 
                    
                         
                    
                    
                         
                    
                    
                         
                    
                    
                         
                    
                    
                         
                    
                
            
             
                 
                 
                 [ { “常量” ：“UINT8” }，{ “常量” ：“UINT16” }，{ “常量” ：“UINT32” }，{ “常量” ：“UINT64” }，{ “类型” ：“字符串” } ] }, "offset" : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" :
                    
                         
                    
                    
                         
                    
                    
                         
                    
                    
                         
                    
                    
                         
                    
                
            
             
                 
                 “应用于属性值的偏移量。仅当组件类型为“FLOAT32”或“FLOAT64”，或者属性为“规范化”时才适用。如果两者均已定义，则覆盖类属性的“偏移量”。}, "scale" : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : "应用于属性值的比例。仅适用于组件类型为 `FLOAT32` 或 ` FLOAT64，或者当属性被“规范化”时。如果两者都被定义，则覆盖类属性的“比例”。}, "max" : { "$ref" : "definitions.schema.
            
             
                 
                 
            
             
                 
                : "属性值中存在的最大值。仅适用于 `SCALAR`、`VECN` 和 `MATN` 类型。这是所有属性值的最大值，在基于 `normalized`、`offset` 的转换之后，并且应用了 `scale` 属性。” }, "min" : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : "属性值中存在的最小值。仅适用于 `SCALAR`、`VECN` 和`MATN` 类型。在应用基于 `normalized`、`offset` 和 `scale` 属性的转换后，这是所有属性值中的最小值。” } }，“必填” ： 
            
             
                 
                 
            
        
         
            
        
    }

## B.24. 根属性的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“rootProperty.schema.json” ，“title” ：“根属性” ，“类型" : "object" , "description" : "存储扩展和额外内容的基础。, "properties" : { "extensions" : { "$ref" : "extension.schema.json" }, "extras" : { "$ref" :
     
     
     
     
     
     
         
             
        
         
             
        
    

```

## B.25. 模式的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“schema.schema.json” ，“title” ：“Schema” ，“$ref " : "rootProperty.schema.json" , "description" : "定义类和枚举的对象。" ，“属性” ：{ “id” ：{ “类型” ：“字符串” ，“模式” ：“^ [a-zA-Z_] [a-zA-Z0-9_] * $” ，“
     
     
     
     
     
     
         
             
             
             “架构的唯一标识符。架构 ID 应是与正则表达式 `^[a-zA-Z_][a-zA-Z0-9_]*$` 匹配的字母数字标识符。” }, "name" : { "type" : "string" , "minLength" : 1 , "description" : "模式的名称，例如用于显示目的。" }, "description" : { "type" : "string" , "minLength" : 1 , "description" : "模式的描述。" }, "
        
         
             
             
             
        
         
             
             
             
        
         
             “string” ，“minLength” ：1 ，“description” ：“特定于应用程序的模式版本。” }, "classes" : { "type" : "object" , "description" : "字典，其中每个键是一个类 ID，每个值是一个定义类的对象。类 ID 应是与正则表达式匹配的字母数字标识符`^[a-zA-Z_][a-zA-Z0-9_]*$`。” , "minProperties" : 1 , "additionalProperties" : { "$ref" : "
             
             
        
         
             
             
             
             
                 
            
        
         { "type" : "object" , "description" : "一个字典，其中每个键都是一个枚举 ID，每个值都是一个定义枚举值的对象。枚举 ID 应该是与正则表达式 `^[ 匹配的字母数字标识符a-zA-Z_][a-zA-Z0-9_]*$`。” , "minProperties" : 1 , "additionalProperties" : { "$ref" : "enum.schema.json" } } }, "required" : [ "id" ] }
             
             
             
             
                 
            
        
    
     
        
    

```

## B.26. 用于统计的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“statistics.schema.json” ，“title” ：“统计” ，“$ref " : "rootProperty.schema.json" , "description" : "关于实体的统计信息。" ，“属性” ：{ “类” ：{ “类型” ：“对象” ，“描述” ：
     
     
     
     
     
     
         
             
             “一个字典，其中每个键对应于 ‘classes’ 字典中的一个类 ID，每个值都是一个对象，其中包含有关符合该类的实体的统计信息。” , "minProperties" : 1 , "additionalProperties" : { "$ref" : "statistics.class.schema.json" } } } }
             
             
                 
            
        
    

```

## B.27. 用于类统计的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“statistics.class.schema.json” ，“title” ：“类统计” ，"$ref" : "rootProperty.schema.json" , "description" : "关于符合类的实体的统计信息。" ，“属性” ：{ “计数” ：{ “类型” ：“整数” ，“描述” ：“
     
     
     
     
     
     
         
             
             
             
        }, "properties" : { "type" : "object" , "description" : "一个字典，其中每个键对应于类'`properties`字典中的一个属性ID，每个值是一个包含属性值统计信息的对象” , "minProperties" : 1 , "additionalProperties" : { "$ref" : "statistics.class.property.schema.json" } } } }
         
             
             
             
             
                 
            
        
    

```

## B.28. 属性统计的 JSON 模式

```
{ "$schema" : " https://json-schema.org/draft/2020-12/schema" , "$id" : "statistics.class.property.schema.json" , "title" : "属性统计" , "$ref" : "rootProperty.schema.json" , "description" : "关于属性值的统计数据。" ，“属性” ：{ “分钟” ：{ “$ref” ：“definitions.schema.json#/definitions/numericValue” ，“描述” ：
     
     
     
     
     
     
         
             
             "tileset 中出现的最小属性值。仅适用于 `SCALAR`、`VECN` 和 `MATN` 类型。这是所有属性值中的最小值，在基于 `normalized`、`offset`、并且应用了 `scale` 属性。” }, "max" : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : "tileset 中出现的最大属性值。仅适用于`SCALAR`, `VECN`,和 `MATN` 类型。这是所有属性值的最大值，在应用基于 `normalized`、`offset` 和 `scale` 属性的转换之后。}，“平均” ：
        
         
             
             
        
         
             "definitions.schema.json#/definitions/numericValue" , "description" : "tileset 中出现的属性值的算术平均值。仅适用于 `SCALAR`、`VECN` 和 `MATN` 类型。这是平均值所有属性值，在应用基于 `normalized`、`offset` 和 `scale` 属性的转换之后。” }，“中位数” ：{ “$ref” ：“definitions.schema.json#/definitions/numericValue” ，“描述” ：
             
        
         
             
             "tileset 中出现的属性值的中值。仅适用于 `SCALAR`、`VECN` 和 `MATN` 类型。这是所有属性值的中值，在基于 `normalized`、`offset` 的转换之后，并且应用了 `scale` 属性。” }, "standardDeviation" : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : "tileset中出现的属性值的标准差。仅适用于`SCALAR`, `VECN `, 和 `MATN` 类型。这是所有属性值的标准偏差，在应用基于 `normalized`、`offset` 和 `scale` 属性的转换之后。}, "
        
         
             
             
        
         
            "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : "tileset 中出现的属性值的变化。仅适用于 `SCALAR`、`VECN` 和 `MATN` 类型。这是所有属性值的方差，在应用基于“规范化”、“偏移量”和“缩放”属性的转换之后。” }, "sum" : { "$ref" : "definitions.schema.json#/definitions/numericValue" , "description" : 
             
        
         
             
             "tileset 中出现的属性值的总和。仅适用于 `SCALAR`、`VECN` 和 `MATN` 类型。这是所有属性值的总和，在基于 `normalized`、`offset` 的转换之后，并且应用了 `scale` 属性。” }, "occurrences" : { "type" : "object" , "description" : "一个字典，其中每个键对应一个枚举`name`，每个值是该枚举的出现次数。仅适用于`type ` 是 `ENUM`。对于固定长度的数组，这是一个按组件出现的数组。" , "minProperties" : 1 , "additionalProperties"
        
         
             
             
             
             
                ：[ { “类型” ：“整数” }，{ “类型” ：“数组” ，“项目” ：{ “类型” ：“整数” }，“minItems” ：1 } ] } } } } } 
                    
                         
                    
                    
                         
                         
                             
                        
                         
                    
                
            
        
    

```

## B.29. 样式的 JSON 模式

    { “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“style.schema.json” ，“title” ：“Style” ，“$ref " : "rootProperty.schema.json" , "description" : "3D Tiles 样式。" , "properties" : { "defines" : { "type" : "object" , "additionalProperties" : { "$ref" : "style.
         
         
         
         
         
         
             
                 
                 
                     
                
                 “映射到可在整个样式中引用的变量名称键的 `expression` 字符串的字典对象。如果表达式引用已定义的变量，它将替换为相应表达式的评估结果。” }, "show" : { "oneOf" : [ { "$ref" : "style.booleanExpression.schema.json" }, { "$ref" : "style.conditions.schema.json" } ], "description" : "一个 `boolean expression` 或 `conditions` 属性，决定是否应该显示一个特征。" ，“默认” ：
            
             
                 
                    
                         
                    
                    
                         
                    
                
                 
                 
            
            : { "oneOf" : [ { "$ref" : "style.colorExpression.schema.json" }, { "$ref" : "style.conditions.schema.json" } ], "description" : "A `color expression` 或 `conditions` 属性，用于确定与特征的固有颜色混合的颜色。” , "default" : "color('#FFFFFF')" }, "meta" : { "$ref" : "style.meta.schema.json" , "description" : " 
                 
                    
                         
                    
                    
                         
                    
                
                 
                 
            
             
                 
                 
            
        } 
    }

## B.30. 布尔表达式的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“style.booleanExpression.schema.json” ，“title” ：“布尔表达式” ，"type" : [ "boolean" , "string" ], "description" : "具有 3D Tiles 样式表达式的布尔值或字符串，其计算结果为布尔值。详细信息在 3D Tiles Styling 规范中进行了描述。" }
     
     
     
     
        
        
    
     

```

## B.31. 用于颜色表达的 JSON 模式

```
{ "$schema" : " https://json-schema.org/draft/2020-12/schema" , "$id" : "style.colorExpression.schema.json" , "title" : "颜色表达" , "type" : "string" , "description" : "3D Tiles style `expression` 计算结果为 Color。详细信息在 3D Tiles Styling 规范中描述。" }
     
     
     
     
     

```

## B.32. 条件的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“style.conditions.schema.json”，“title” ：“条件” ，“ $ref" : "rootProperty.schema.json" , "description" : "按顺序评估的一系列条件，如一系列 if...else 语句，导致表达式被评估。" , “属性” ：{ “条件” ：{ “类型” ：“数组” ，
     
     
     
     
     
     
         
             
             “按顺序评估的一系列布尔条件。对于第一个评估为真的条件，评估并返回其值“结果”（也是一个表达式）。结果表达式应全部为同一类型。如果没有condition 的计算结果为 true，结果为 undefined。当 conditions 为 undefined、null 或空对象时，结果为 undefined。” , "items" : { "$ref" : "style.conditions.condition.schema.json" } } } }
             
                 
            
        
    

```

## B.33. 条件的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“style.conditions.condition.schema.json”，“title” ：“条件” , "type" : "array" , "description" : "一个 `expression` 被评估为条件为真的结果。两个表达式的数组。如果第一个表达式被评估并且结果为 `true`，那么第二个表达式被评估并作为条件的结果返回。” , "项目" : { "$ref" :
     
     
     
     
     
     
         
    
    ：2 ，“最大项目” ：2 } 
     

```

## B.34. 表达式的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“style.expression.schema.json” ，“title” ：“表达式” ，“ type" : "string" , "description" : "有效的 3D Tiles 样式表达式。详细信息在 3D Tiles Styling 规范中描述。" }
     
     
     
     
     

```

## B.35.元数据的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“style.meta.schema.json” ，“title” ：“元” ，“ $ref" : "rootProperty.schema.json" , "description" : "一系列属性名称和用于评估该属性值的 `expression`。" , "additionalProperties" : { "$ref" : "style.expression.schema.json" } }
     
     
     
     
     
     
         
    

```

## B.36. 子树的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“subtree.schema.json” ，“title” ：“子树” ，“$ref " : "rootProperty.schema.json" , "description" : "描述子树中图块和内容的可用性以及子树的可用性的对象。还可以存储可用图块和内容的元数据。" ，“属性” ：{ “缓冲区” ：{ “类型” ：“
     
     
     
     
     
     
         
             
             
                : "buffer.schema.json" }, "minItems" : 1 , "description" : "一个缓冲区数组。" }, "bufferViews" : { "type" : "array" , "items" : { "$ref" : "bufferView.schema.json" }, "minItems" : 1 , "description" : "缓冲区视图数组” }, "propertyTables" : { "类型" : "数组" 
            
             
             
        
         
             
             
                 
            
             
             
        
         
             
             
                 "propertyTable.schema.json" }, "minItems" : 1 , "description" : "一组属性表。" }, "tileAvailability" : { "$ref" : "availability.schema.json" , "description" :
            
             
             
        
         
             
             “子树中瓦片的可用性。可用性比特流是一个一维布尔数组，其中瓦片按其在子树中的级别和该级别中的莫顿索引排序。瓦片的可用性由一位确定，1 表示瓦片存在于该空间索引，0 表示它没有。数组中的元素数为 `(N^subtreeLevels - 1)/(N - 1)`，其中对于细分方案 `QUADTREE`，N 为 4，对于 `OCTREE`，N 为 8 . 可用性可以存储在缓冲区视图中或作为适用于所有图块的常量值。如果非根图块的可用性为 1，则其父图块的可用性也应为 1。`tileAvailability.constant: 0` 是不允许的，因为子树应该至少有一张牌。” }，“内容可用性” ：
        
         
            : "array" , "items" : { "$ref" : "availability.schema.json" }, "minItems" : 1 , "description" : "内容可用性对象数组。如果磁贴只有一个内容数组将有一个元素；如果 tile 有多个内容——如 3DTILES_multiple_contents 和 3D Tiles 1.1 所支持——这个数组将有多个元素。” }, "childSubtreeAvailability" : { "$ref" : "availability.schema.json" , "description" : 
             
                 
            
             
             
        
         
             
             “子树的可用性。可用性比特流是一个一维布尔数组，其中子树按其在子树底行正下方的树级别中的 Morton 索引排序。子树的可用性由一位确定，1表示该空间索引处存在子树，0 表示不存在。数组中的元素数为“N^subtreeLevels”，其中对于细分方案“QUADTREE”，N 为 4，对于“OCTREE”，N 为 8。可存储可用性在缓冲区视图中或作为适用于所有子树的常量值。如果所有子树的可用性为 0，则 tileset 不会进一步细分。” }，“tileMetadata” ：{ “类型” ：“整数” ，“
        
         
             
             0 , "description" : "包含图块元数据的属性表的索引。图块元数据仅存在于可用图块中，并通过增加图块索引来紧密打包。要访问单个图块元数据，实现可以创建从图块索引到图块元数据索引的映射” }, "contentMetadata" : { "type" : "array" , "items" : { "type" : "integer" , "minimum" : 0 }, "minItems" : 1 , "description" :
             
        
         
             
             
                 
                 
            
             
             “包含内容元数据的属性表的索引数组。如果图块具有单个内容，则该数组将具有一个元素；如果图块具有多个内容——如 3DTILES_multiple_contents 和 3D Tiles 1.1 所支持——该数组将具有多个元素。内容元数据仅存在于可用内容中，并通过增加 tile 索引紧密打包。要访问单个内容元数据，实现可能会创建从 tile 索引到内容元数据索引的映射。}, "subtreeMetadata" : { "$ref" : "metadataEntity.schema.json" , "description" : "以 JSON 编码的子树元数据。" } }, “必需”
        
         
             
             
        
    
     
        “tileAvailability” ，“childSubtreeAvailability” ] }
        
    

```

## B.37. 子树的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“subtrees.schema.json” ，“title” ：“子树” ，“$ref " : "rootProperty.schema.json" , "description" : "一个描述子树文件位置的对象。" ，“属性” ：{ “uri” ：{ “$ref” ：“templateUri.schema.json” ，“描述” ：
     
     
     
     
     
     
         
             
             “指向子树文件的模板 URI。子树是树的固定深度（由 subtreeLevels 定义）部分，以限制内存使用。每个文件的 URI 替换为子树根的全局级别 x，和y。对于细分方案'OCTREE'，还应给出z。相对路径是相对于tileset JSON。" } }, “必填项” ：[ “uri” ] }
        
    
     
        
    

```

## B.38. 模板 URI 的 JSON 架构

    { “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“templateUri.schema.json” ，“title” ：“模板 URI” ，“类型” ：“字符串” ，“描述” ：
         
         
         
         
         “带有嵌入式表达式的 URI，用于描述与隐式瓦片集中的隐式瓦片关联的资源。允许的表达式为 `{level}`、`{x}`、`{y}` 和 `{z}`。 `{level}` 替换为节点的级别，`{x}` 替换为该级别内节点的 x 索引，而 `{y}` 替换为该级别内节点的 y 索引. `{z}` 只能在细分方案为 `OCTREE` 时给出，并替换为该级别内节点的 z 索引。
    }

## B.39. Tile 的 JSON 架构

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“tile.schema.json” ，“title” ：“Tile” ，“$ref " : "rootProperty.schema.json" , "description" : "3D Tiles 瓦片集中的瓦片。" , "properties" : { "boundingVolume" : { "description" : "包围图块的边界体积。" , "$ref" : "边界体积。
     
     
     
     
     
     
         
             
             
        
         
            "description" : "可选的边界体积，它定义了在请求图块的内容之前以及在基于几何错误对图块进行细化之前，查看者应位于其中的体积。" , "$ref" : "boundingVolume.schema.json" }, "geometricError" : { "type" : "number" , "description" : "错误，以米为单位，如果这个瓦片被渲染而它的孩子没有被引入. 在运行时，几何误差用于计算屏幕空间误差 (SSE)，即以像素为单位测量的误差。” ，“最小” ： 
             
        
         
             
             
             
        
         
            "description" : "指定在遍历瓦片集进行渲染时是否使用附加或替换细化。此属性对于瓦片集的根瓦片是必需的；它对于所有其他瓦片是可选的。默认是从父瓦片继承。 “ , "anyOf" : [ { "const" : "ADD" }, { "const" : "REPLACE" }, { "type" : "string" } ] }, "transform" : { "type" : "array" , " 
             
                
                     
                
                
                     
                
                
                     
                
            
        
         
             
             “一个浮点 4x4 仿射变换矩阵，以列优先顺序存储，将图块的内容——即它的特征以及 content.boundingVolume、boundingVolume 和 viewerRequestVolume——从图块的本地坐标系转换到父级瓦片的坐标系，或者，在根瓦片的情况下，从瓦片的局部坐标系到瓦片集的坐标系。当体积是在 EPSG:4979 坐标中定义的区域时，“转换”不适用于任何体积属性。 `transform` 通过矩阵的最大缩放因子缩放 `geometricError`。” , "items" : { "type" : "number" }, "minItems" : 16 ,
             
                 
            
             
             16 ，“默认” ：[ 1.0，0.0，0.0，0.0，0.0，1.0，0.0，0.0，0.0，0.0，0.0，0.0，1.0，0.0，0.0，0.0，0.0，0.0，0.0，1.0 ] } ，“ content ” ：{ “ description ” ：{ “ description ” ：_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ “关于图块内容的元数据和内容链接。省略时，图块仅用于剔除。定义后，‘内容’将未定义。”
             
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
            
        
         
             , "$ref" : "content.schema.json" }, "contents" : { "type" : "array" , "description" : "内容数组。定义后，`content` 应为未定义” ，“项目” ：{ “$ref” ：“content.schema.json” }，“minItems” ：1 }，“元数据” ：{ “$ref” ：“metadataEntity.schema.json” ，“描述” ：“
             
        
         
             
             
             
                 
            
             
        
         
             
             
        
        : { "$ref" : "tile.implicitTiling.schema.json" , "description" : "一个描述该图块隐式细分的对象。" }, "children" : { "type" : "array" , "description" : "定义子图块的对象数组。每个子图块的内容完全被其父图块的包围体包围，并且通常具有较少的几何误差比其父图块的几何错误。对于叶图块，此数组的长度为零，并且可能未定义子项。” ，“项目” ： 
             
             
        
         
             
             
             
                 
            
            “uniqueItems” ：true ，“minItems” ：1 } }，“required” ：[ “boundingVolume” ，“geometricError” ]，“not” ：{ “required” ：[ “content” ，“contents” ] } } 
             
        
    
     
        
        
    
     
         
            
            
        
    

```

## B.40.用于隐式平铺的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“tile.implicitTiling.schema.json” ，“title” ：“隐式平铺” ，"$ref" : "rootProperty.schema.json" , "description" : "此对象允许对图块进行隐式细分。图块和内容可用性以及元数据存储在外部引用的子树中。" , "properties" : { "subdivisionScheme" : { "description" :
     
     
     
     
     
     
         
             , "anyOf" : [ { "const" : "QUADTREE" }, { "const" : "OCTREE" }, { "type" : "string" } ] }, "subtreeLevels" : { "type" : "integer" , "description" : "每个子树中不同级别的数量。例如，`subtreeLevels = 2` 的四叉树将有包含 5 个节点的子树（一个根节点和 4 个子节点）。" , "最少" : 1 }, "
             
                
                     
                
                
                     
                
                
                     
                
            
        
         
             
             
             
        
         
             “整数” ，“描述” ：“树中可用图块的级别数。” , "minimum" : 1 }, "subtrees" : { "$ref" : "subtrees.schema.json" , "description" : "描述子树文件位置的对象。" } }, "required" : [ "subdivisionScheme" , "subtreeLevels" , "availableLevels" , "subtrees" ] }
             
             
        
         
             
             
        
    
     
        
        
        
        
    

```

## B.41. Tileset 的 JSON 模式

```
{ “$schema” ：“ https://json-schema.org/draft/2020-12/schema”，“$id” ：“tileset.schema.json” ，“title” ：“Tileset” ，“$ref " : "rootProperty.schema.json" , "description" : "一个 3D Tiles tileset." , "properties" : { "asset" : { "description" : "关于整个 tileset 的元数据。" , "$ref" : "asset.schema.json" },
     
     
     
     
     
     
         
             
             
        
         
             , "description" : "关于每个特征属性的元数据字典对象。" , "additionalProperties" : { "$ref" : "properties.schema.json" }, "deprecated" : true }, "schema" : { "$ref" : "schema.schema.json" , "description" : "定义元数据类和枚举结构的对象。定义后，`schemaUri` 应该是未定义的。” }, "schemaUri" : { "类型" :
             
             
                 
            
             
        
         
             
             
        
         
             
             “外部模式文件的 URI（或 IRI）。定义后，‘模式’将未定义。” , "format" : "iri-reference" }, "statistics" : { "$ref" : "statistics.schema.json" , "description" : "包含元数据实体统计信息的对象。" }, "groups" : { "type" : "array" , "description" : "平铺内容可能属于的一组数组。此数组的每个元素都是描述该组的元数据实体。
             
        
         
             
             
        
         
             
             
            “项目” ：{ “$ref” ：“group.schema.json” }，“minItems” ：1 }，“元数据” ：{ “$ref” ：“metadataEntity.schema.json” ，“描述” ：“A与此 tileset 关联的元数据实体。” }, "geometricError" : { "type" : "number" , "description" : "错误，以米为单位，如果这个 tileset 没有被渲染。在运行时， 
                 
            
             
        
         
             
             
        
         
             
             
            : 0 }, "root" : { "description" : "根瓦片。" , "$ref" : "tile.schema.json" }, "extensionsUsed" : { "type" : "array" , "description" : "在此 tileset 中某处使用的 3D Tiles 扩展的名称。" , "items" : { "type" : "string" }, "uniqueItems" : true , "minItems" : 1 }, 
        
         
             
             
        
         
             
             
             
                 
            
             
             
        
         
             “array” ，“description” ：“正确加载此 tileset 所需的 3D Tiles 扩展名称。” , "items" : { "type" : "string" }, "uniqueItems" : true , "minItems" : 1 } }, "required" : [ "asset" , "geometricError" , "root" ], "not" ：{ “必需” ：[ “模式” ，“
             
             
                 
            
             
             
        
    
     
        
        
        
    
     
         
            
            
        
    

```

# **附件 C**
# （资料性） **从旧版图块格式迁移**

本节介绍如何将旧版图块格式转换为等效的 glTF 内容。

## [](https://portal.ogc.org/files/102132#toc136)C.1. 批处理 3D 模型 (b3dm)

[批处理 3D 模型](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-batched-3d-model)是二进制 glTF 的包装器，在其特征表和批处理表中包含附加信息。批处理的 3D 模型内容可以通过以下更改转换为 glTF 内容：

-   RTC_CENTER可以添加到 glTF 资产[`的`](https://portal.ogc.org/files/102132#tileformats-batched3dmodel-coordinate-system)根节点的翻译组件。
-   可以使用[`EXT_mesh_features`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_mesh_features)和[`EXT_structural_metadata`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata)表示批次 ID 和批次表。

![b3dm](https://github.com/CHENJIAMIAN/Blog/assets/20126997/7669df5d-f96e-4a0e-ae82-6282d19a59f2)

图 C.1 — 3D Tiles 1.0 中的批处理 3D 模型，以及 3D Tiles 1.1 中的相应表示

## [](https://portal.ogc.org/files/102132#toc137)C.2. 实例化 3D 模型 (i3dm)

[实例化 3D 模型](https://portal.ogc.org/files/102132#tileformats-instanced3dmodel-instanced-3d-model)实例化 glTF 资产（嵌入式或外部）并提供每个实例的转换和批次 ID。

-   RTC_CENTER可以添加到 glTF 资产`的`根节点的翻译组件。
-   glTF 可以利用带有[EXT_mesh_gpu_instancing](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)扩展的 GPU 实例化。
-   [`批次 ID 和批次表可以使用EXT_instance_features`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_instance_features)和[`EXT_structural_metadata`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata)表示。
-   `不直接支持EAST_NORTH_UP`，但可以使用每个实例的旋转来表示。

![i3dm](https://github.com/CHENJIAMIAN/Blog/assets/20126997/95a2d0aa-ad29-4297-b5c9-e7c9c3dad749)

图 C.2 — 3D Tiles 1.0 中的实例化 3D 模型，以及 3D Tiles 1.1 中的相应表示

## [](https://portal.ogc.org/files/102132#toc138)C.3. 点云 (pnts)

[点云可以表示为使用原始模式](https://portal.ogc.org/files/102132#tileformats-pointcloud-point-cloud)`0` ( `POINTS` )的 glTF 。

-   RTC_CENTER可以添加到 glTF 资产`的`根节点的翻译组件。
-   `POSITION`、`COLOR`和`NORMAL 等`要素表属性可以存储为 glTF 属性。
-   [`EXT_meshopt_compression`](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Vendor/EXT_meshopt_compression)和[`KHR_mesh_quantization`](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_mesh_quantization)可用于点云压缩。glTF 不直接支持[`3DTILES_draco_point_compression ，因为`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_draco_point_compression/)[`KHR_draco_mesh_compression`](https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_draco_mesh_compression)仅支持三角形网格。
-   可以使用[`EXT_mesh_features`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_mesh_features)和[`EXT_structural_metadata`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata)表示批次 ID 和批次表。
-   `CONSTANT_RGBA`在 glTF 中不直接支持，但可以通过材质或逐点颜色来实现。

![积分](https://github.com/CHENJIAMIAN/Blog/assets/20126997/11ca3680-0747-45a3-b943-029c14fea29a)

图 C.3 — 3D Tiles 1.0 中的点云，以及 3D Tiles 1.1 中的相应表示

## [](https://portal.ogc.org/files/102132#toc139)C.4. 复合 (cmpt)

[Composite](https://portal.ogc.org/files/102132#tileformats-composite-composite)的所有内部内容都可以组合成相同的 glTF 作为单独的节点、网格或基元，由 tileset 作者自行决定。或者，一个图块可以有[多个内容](https://portal.ogc.org/files/102132#core-tile-content)。

  


# [](https://portal.ogc.org/files/102132#toc140)**附件 D** （资料性） **可用性索引**

## [](https://portal.ogc.org/files/102132#toc141)D.1. 从瓦片坐标转换为莫顿指数

[Morton 指数](https://en.wikipedia.org/wiki/Z-order_curve)是通过交错图块的`(x, y)`或`(x, y, z)`坐标的位来计算的。具体来说：

```
quadtreeMortonIndex = interleaveBits ( x , y ) 
octreeMortonIndex = interleaveBits ( x , y , z )
```

例如：

```
// 四叉树
交错位( 0b11 , 0b00 ) = 0b0101交错位( 0b1010 , 0b0011 ) = 0b01001110交错位( 0b0110 , 0b0101 ) = 0b00110110 // 八叉树交错位( 0b001 , 0b0 10 , 0b100 ) = 0b100010001 interleaveBits ( 0b111 , 0b000 , 0b111 ) = 0b101101101   
   
   


    
    
```

![莫顿秩序](https://github.com/CHENJIAMIAN/Blog/assets/20126997/c99e0a04-faa6-44c9-93db-9fa51e51b8e8)

图 D.1——基于四叉树三层瓦片坐标计算 Morton 指数的示例

## [](https://portal.ogc.org/files/102132#toc142)D.2. 可用性比特流长度

表 D.1——可用性比特流长度

| 可用性类型 | 长度（位）                           | 描述                                             |
| ----- | ------------------------------- | ---------------------------------------------- |
| Tile可用性 | `(N^subtreeLevels - 1)/(N - 1)` | 子树中的节点总数                                       |
| 内容可用性 | `(N^subtreeLevels - 1)/(N - 1)` | 由于每个 tile 最多有一个内容，因此这与 tile availability 的长度相同 |
| 子树可用性 | `N^subtreeLevels`               | 比子树最深一层更深一层的节点数                                |

其中`N`对于四叉树为 4，对于八叉树为 8。

这些长度以比特流中的比特数表示。要计算比特流的字节长度，使用以下公式：

```
lengthBytes = ceil ( lengthBits / 8 ) 
```

## [](https://portal.ogc.org/files/102132#toc143)D.3. 访问可用性位

对于图块可用性和内容可用性，Morton 索引仅确定子树的单个级别内的排序。由于可用性比特流为子树的每个级别存储比特，因此应计算级别偏移量。

给定一个 tile 相对于子树根的`(level, mortonIndex)`，相应位的索引可以用以下公式计算：

表 D.2——可用性补偿

| 数量                      | 公式                          | 描述                            |
| ----------------------- | --------------------------- | ----------------------------- |
| `levelOffset`           | `(N^level - 1) / (N - 1)`   | `这是第 1、2`层、...（第 - 1 层）的节点数`` |
| `tileAvailabilityIndex` | `levelOffset + mortonIndex` | 缓冲区视图中的索引是图块级别的偏移量加上图块的莫顿索引   |

其中`N`对于四叉树为 4，对于八叉树为 8。

由于子树可用性存储单个级别的位，因此不需要 levelOffset，即`childSubtreeAvailabilityIndex = mortonIndex`，其中`mortonIndex`是所需子树相对于当前子树根的 Morton 索引。

## [](https://portal.ogc.org/files/102132#toc144)D.4. 全局和局部图块坐标

使用图块坐标时，重要的是要考虑坐标相对于哪个图块。隐式平铺中使用了两种主要类型：

-   **全局坐标** ——相对于隐式根瓦片的坐标。
-   **局部坐标** ——相对于特定子树的根的坐标。

全局坐标用于定位整个隐式瓦片集中的任何瓦片。例如，模板 URI 使用全局坐标来定位内容文件和子树。同时，本地坐标用于在单个子树文件中定位数据。

在二进制中，瓦片的全局莫顿索引是从隐式根瓦片到瓦片的完整路径。这是从隐式根瓦片到子树根瓦片的路径的串联，后跟从子树根瓦片到瓦片的路径。这可以用以下等式表示：

```
Tile。globalMortonIndex = concatBits ( subtreeRoot.globalMortonIndex , tile.localMortonIndex ) _ _ _ _
```

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/34696603-3f6c-4e0c-bb96-ccda61ffb1fe)

图 D.2——说明如何根据包含子树的根的全局莫顿索引和该子树中的图块的局部莫顿索引来计算图块的全局莫顿索引

类似地，瓦片的全局级别是从隐式根瓦片到瓦片的路径长度。这是子树根瓦片的全局级别和瓦片相对于子树根瓦片的本地级别的总和：

```
Tile。全局级别=子树根。全球水平+平铺。本地级别
```

![download](https://github.com/CHENJIAMIAN/Blog/assets/20126997/938673f3-8e7f-4ebb-b2a4-7d9f4876f06e)

图 D.3 — 说明如何从包含子树的根的全局级别和该子树中的图块的局部级别计算图块的全局级别

`(x, y, z)`坐标遵循与 Morton 指数相同的模式。唯一的区别是位的连接是按组件进行的。那是：

```
Tile。globalX = concatBits ( subtreeRoot.globalX , tile.localX )瓦片。_ _ _ _ globalY = concatBits ( subtreeRoot . globalY , tile . localY ) // 只有八叉树tile . globalZ = concatBits ( subtreeRoot.globalZ , tile.localZ ) _ _ _ _
```

![全局到局部 XY 坐标](https://github.com/CHENJIAMIAN/Blog/assets/20126997/cafc3851-a9db-4128-ad7c-d6db7ee544fa)

图 D.4——从包含子树的全局坐标和该子树中的局部坐标计算全局图块坐标的图示。

## [](https://portal.ogc.org/files/102132#toc145)D.5. 查找父子磁贴

也可以通过对 Morton 索引的按位运算来计算父或子图块的坐标。以下公式适用于局部坐标和全局坐标。

```
儿童Tile。级别=父图块。级别+ 1 childTile 。mortonIndex = concatBits ( parentTile.mortonIndex , childIndex ) childTile 。_ _ x = concatBits ( parentTile.x , childX ) childTile 。_ _ y = concatBits ( parentTile.y , childY ) //仅八叉树childTile . 





z = concatBits ( parentTile.z , childZ ) _ _
```

在哪里：

-   `childIndex是``[0, N)`范围内的整数，它是子瓦片相对于父瓦片的索引。
-   `childX`、`childY`和`childZ`是单个位，表示子级在每个方向上位于父级边界体积的哪一半。

![父子坐标](https://github.com/CHENJIAMIAN/Blog/assets/20126997/82148992-c715-44c9-bb87-e0a138975782)

图 D.5——父子块坐标计算的图示

  


# [](https://portal.ogc.org/files/102132#toc146)**附件 E** （资料性） **3D 元数据参考实现**

[本文档定义了3D 元数据规范](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)中定义的概念的参考实现。3D 元数据规范本身以与语言和格式无关的方式为 3D 内容中的结构化元数据定义了标准格式。此处描述的参考实现是这些概念的实现：

-   Schema是[3D 元数据模式](https://portal.ogc.org/files/102132#metadata-schemas)的基于 JSON 的表示，描述了元[数据](https://portal.ogc.org/files/102132#metadata-referenceimplementation-schema-schema-implementation)的结构和类型[](https://portal.ogc.org/files/102132#metadata-schemas)
-   PropertyTable[是](https://portal.ogc.org/files/102132#metadata-referenceimplementation-propertytable-property-table-implementation)[Binary Table Format](https://portal.ogc.org/files/102132#metadata-binary-table-format)的一种形式。它是一种基于 JSON 的描述，描述了如何以二进制形式紧凑地存储大量元数据。

这些序列化格式用作 3D 元数据规范的不同实现的通用基础：

-   [3D Tiles Metadata——](https://portal.ogc.org/files/102132#core-metadata) 将元数据分配给 3D Tiles 1.1 中的 tilesets、tiles 和内容
-   [`3DTILES_metadata`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_metadata)  — 3D Tiles 1.0 的扩展，将元数据分配给图块集、图块和内容
-   [`EXT_structural_metadata`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata) (glTF 2.0) — 将元数据分配给 glTF 资产中的顶点、纹素和特征

## [](https://portal.ogc.org/files/102132#toc147)E.1. 属性表实现

3D[元数据规范](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)将模式定义为元数据结构的描述，以及元数据的不同存储格式。存储元数据的一种形式是[二进制表格式](https://portal.ogc.org/files/102132#metadata-binary-table-format)，其中数据以表的二进制表示形式存储。这样一个表的每一列代表一个类的属性。每行代表符合该类的单个实体。下面是对这种二进制表格式的描述，简称**属性表**。它在以下实现中用作定义元数据存储的基础：

-   [3D Tiles Metadata Implicit Tilesets](https://portal.ogc.org/files/102132#implicittiling-implicit-tiling)  - 将元数据分配给 3D Tiles tileset 中的 tilesets、tiles、groups 和内容。为隐式图块层次结构的子树定义属性表，并存储与此类子树的节点相关联的元数据。
-   [`EXT_structural_metadata`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata)  — 将元数据分配给 glTF 资产中的顶点、纹素和特征。属性表在顶级扩展对象中定义。属性值存储在标准 glTF 缓冲区视图中。

[此实现的完整 JSON 模式定义可以在规范的 PropertyTable 目录](https://github.com/CesiumGS/3d-tiles/tree/draft-1.1/specification/schema/PropertyTable/)中找到。

### [](https://portal.ogc.org/files/102132#e-1-1-%C2%A0-property-tables)E.1.1. 属性表

*[`在propertyTable.schema.json`](https://portal.ogc.org/files/102132#reference-schema-propertytable)中定义。*

属性表应指定以下元素：

-   它的类（`class ），指的是一个`[Schema](https://portal.ogc.org/files/102132#metadata-referenceimplementation-schema-schema)中的类ID 。
-   `属性 ( properties` )的字典，其中每个条目描述相应类属性的数据的二进制存储。
-   属性表中元素（行）数的计数 ( `count )。`

属性表可能只为其类的属性的一个子集提供值数组，但模式中标记为`required: true的类属性不应被省略。`

注意  tree_survey_2021-09-29属性表，实现了[架构](https://portal.ogc.org/files/102132#metadata-referenceimplementation-schema-schema)示例中定义的`树``类`。该表包含 10 棵树的观察结果。有关类属性的详细信息将在后面的示例中给出。[](https://portal.ogc.org/files/102132#metadata-referenceimplementation-schema-schema)

```
“模式” ：{ ... }，“propertyTables” ：[{ “名称” ：“tree_survey_2021-09-29” ，“类” ：“树” ，“计数” ：10 ，“属性” ：{ “物种” : { ... }, "age" : { ... }, "height" : { ... }, // "diameter" 不是必需的，已从该表中省略。} }]   
 
   
   
   
   
       
       
       
    
  
```

### [](https://portal.ogc.org/files/102132#e-1-2-%C2%A0-property-table-properties)E.1.2. 属性表属性

*[`在propertyTable.schema.json`](https://portal.ogc.org/files/102132#reference-schema-propertytable)中定义。*

属性表中的每个属性定义代表该表的一列。[此列数据以二进制形式存储，使用 3D 元数据规范的二进制表格式](https://portal.ogc.org/files/102132#metadata-binary-table-format)部分中定义的编码。实际数据存储在二进制缓冲区中，属性指的是该缓冲区的一部分，称为*缓冲区视图*。

-   在[3D Tiles Metadata](https://portal.ogc.org/files/102132#core-metadata)实现中，缓冲区视图被定义为[隐式 tilesets 中子树](https://portal.ogc.org/files/102132#implicittiling-buffers-and-buffer-views)的一部分。
-   在3D Tiles 1.0 的[`3DTILES_metadata`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_metadata)扩展中，缓冲区视图被定义为[`3DTILES_implicit_tiling`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_implicit_tiling#buffers-and-buffer-views)[扩展](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_implicit_tiling#buffers-and-buffer-views)[中子树``](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_implicit_tiling#buffers-and-buffer-views)的一部分。
-   在[`EXT_structural_metadata`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata)中，缓冲区视图是标准的 glTF 缓冲区视图。

每个属性条目的确切结构取决于[属性类型](https://portal.ogc.org/files/102132#metadata-property)：

-   每个属性定义都应定义存储实际值原始数据的`值。`
-   具有`STRING`组件类型的属性应定义 stringOffsets `，`如[Strings](https://portal.ogc.org/files/102132#metadata-strings)中所定义。
-   可变长度数组的属性应定义 arrayOffsets `，如`[Arrays](https://portal.ogc.org/files/102132#metadata-arrays)中所定义。

对于可变长度的字符串数组，stringOffsets`和`arrayOffsets`都是`必需的。

注 1  前面示例中的属性表，包含有关属性值二进制存储的详细信息

```
{ “propertyTables” ：[{ “name” ：“tree_survey_2021-09-29” ，“class” ：“tree” ，“count” ：10 ，“properties” ：{ “species” ：{ “values” ：2 ，“ stringOffsets" : 3 }, "age" : { "values" : 1 }, "height" : { "values" : 0 }, // "diameter" 不是必需的，已从该表中省略。 } } ]
   
     
     
     
     
       
         
         
      
       
         
      
       
         
      
      
    
  
}
```

每个缓冲区视图`byteOffset`应与相应属性的[`componentType`](https://portal.ogc.org/files/102132#metadata-component-type)大小的倍数对齐。

注 2  创作工具可以选择将所有缓冲区视图对齐到 8 字节边界以保持一致性，但客户端实现应该仅依赖于包含 64 位组件类型的缓冲区视图的 8 字节对齐。

对于`arrayOffsets`和`stringOffsets`缓冲区视图，该属性还可以定义`arrayOffsetType`和`stringOffsetType`，它们分别描述数组和字符串偏移量的存储类型。允许的类型是`UINT8`、`UINT16`、`UINT32`和`UINT64`。默认值为`UINT32`。

属性可以覆盖类中属性定义的[`最小值`和`最大值`](https://portal.ogc.org/files/102132#metadata-minimum-and-maximum-values)以及[`偏移量`和`比例`](https://portal.ogc.org/files/102132#metadata-offset-and-scale)[，以说明存储在属性表中的实际值范围。](https://portal.ogc.org/files/102132#metadata-minimum-and-maximum-values)

## [](https://portal.ogc.org/files/102132#toc148)E.2. 模式实施

3D[元数据规范将](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)[模式](https://portal.ogc.org/files/102132#metadata-schemas)定义为元数据结构的描述，由具有不同属性的类和枚举类型组成。以下是此类模式及其元素的基于 JSON 的表示形式的描述。它在以下实现中用作定义元数据结构的基础：

-   [3D Tiles Metadata Implicit Tilesets](https://portal.ogc.org/files/102132#implicittiling-implicit-tiling)  - 将元数据分配给 3D Tiles tileset 中的 tilesets、tiles、groups 和内容。为隐式图块层次结构的子树定义属性表，并存储与此类子树的节点相关联的元数据。
-   [`EXT_structural_metadata`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata)  — 将元数据分配给 glTF 资产中的顶点、纹素和特征。属性表在顶级扩展对象中定义。属性值存储在标准 glTF 缓冲区视图中。

[可以在规范的 Schema 目录](https://github.com/CesiumGS/3d-tiles/tree/draft-1.1/specification/schema/Schema/)中找到此实现的完整 JSON 架构定义。

### [](https://portal.ogc.org/files/102132#e-2-1-%C2%A0-schema)E.2.1. 图式

*[`在schema.schema.json`](https://portal.ogc.org/files/102132#reference-schema-schema)中定义。*

模式定义了一组类和枚举。类充当实体的模板。它们提供属性列表和这些属性的类型信息。枚举定义枚举属性的允许值。

注意  具有`树`类和定义不同树种的`speciesEnum枚举的模式。`后面的例子更详细地展示了这些结构。

```
{ “架构” ：{ “类” ：{ “树” ：{ ... }，“枚举” ：{ “物种枚举” ：{ ... } } } }
   
     
         
     
         
    
  
```

#### [](https://portal.ogc.org/files/102132#e-2-1-1-%C2%A0-class)E.2.1.1.班级

*[`在class.schema.json`](https://portal.ogc.org/files/102132#reference-schema-class)中定义。*

类是元数据实体的模板。类提供属性定义列表。每个实体都应与一个类关联，实体的属性应符合类的属性定义。属性符合类的实体被认为是该类的实例。

类被定义为`schema.classes`字典中的条目，由类 ID 索引。类 ID 应是3D 元数据规范中定义的[标识符。](https://portal.ogc.org/files/102132#metadata-identifiers)

注意  一个“树”类，它可能描述了在公园里进行的树木测量表。属性定义在这里略写，下一节介绍。

```
{ “模式” ：{ “类” ：{ “树” ：{ “名称” ：“树” ，“描述” ：“多年生木本植物。” ，“属性” ：{ “物种” ：{ ... }，“年龄” ：{ ... }，“身高” ：{ ... }，“直径” ：{ ... }} } }} } }
   
     
       
         
         
         
             
             
             
             
        
      
    
  
```

#### [](https://portal.ogc.org/files/102132#e-2-1-2-%C2%A0-class-property)E.2.1.2.类属性

*[`在class.property.schema.json`](https://portal.ogc.org/files/102132#reference-schema-class-property)中定义。*

类属性是在类中抽象定义的。该类使用符合这些属性的特定值进行实例化。类属性支持多种数据类型。有关受支持类型的详细信息，请参阅[3D 元数据规范](https://portal.ogc.org/files/102132#metadata-property)。

类属性定义为`class.properties`字典中的条目，由属性 ID 索引。属性 ID 应是3D 元数据规范中定义的[标识符。](https://portal.ogc.org/files/102132#metadata-identifiers)

注意  一个“树”类，它可能描述了在公园里进行的树木测量表。属性包括每棵树的种类、年龄、高度和直径。

```
{ “模式” ：{ “类” ：{ “树” ：{ “名称” ：“树” ，“描述” ：“多年生木本植物。” , "properties" : { "species" : { "description" : "树的类型。" , "type" : "ENUM" , "enumType" : "speciesEnum" , "required" : true }, "age"
   
     
       
         
         
         
           
             
             
             
             
          
           
             
            “type” ：“SCALAR” ，“componentType” ：“UINT8” ，“required” ：true }，“height” ：{ “description” ：“从地面测量的树高，以米为单位。” , "type" : "SCALAR" , "componentType" : "FLOAT32" }, "diameter" : { "description" : "树干底部的直径，以米为单位。" ，“类型” ：“标量” 
             
             
          
           
             
             
             
          
           
             
             
             
          
        
      
    } } }
  
```

#### [](https://portal.ogc.org/files/102132#e-2-1-3-%C2%A0-enum)E.2.1.3.枚举

*[`在enum.schema.json`](https://portal.ogc.org/files/102132#reference-schema-enum)中定义。*

一组分类类型，定义为`（名称，值）`对。枚举属性使用枚举作为它们的类型。

枚举被定义为`schema.enums`字典中的条目，由枚举 ID 索引。枚举 ID 应是3D 元数据规范中定义的[标识符。](https://portal.ogc.org/files/102132#metadata-identifiers)

注意  定义树木类型的“物种”枚举。“未指定”枚举值是可选的，但当作为属性的`noData`值提供时（请参阅： [3D 元数据 - 无数据值](https://portal.ogc.org/files/102132#metadata-required-properties-no-data-values-and-default-values)）可能有助于识别缺失数据。

```
{ “schema” ：{ “enums” ：{ “speciesEnum” ：{ “name” ：“Species” ，“description” ：“树种的示例枚举。” , "values" : [ { "name" : "Unspecified" , "value" : 0 }, { "name" : "Oak" , "value" : 1 }, { "name" : "Pine" ,
   
     
       
         
         
         
             
             
             
          ：“枫树” ，“价值” ：3 } ] } } } }   
        
      
    
  
```

#### [](https://portal.ogc.org/files/102132#e-2-1-4-%C2%A0-enum-value)E.2.1.4.枚举值

*[`在enum.value.schema.json`](https://portal.ogc.org/files/102132#reference-schema-enum-value)中定义。*

成对的`（名称，值）`条目表示枚举属性的可能值。

枚举值定义为`enum.values`数组中的条目。不允许重复的名称或重复的整数值。

  


# [](https://portal.ogc.org/files/102132#toc149)**附录 F** （资料性） **3D 元数据语义参考**

## [](https://portal.ogc.org/files/102132#toc150)F.1. 概述

本文档提供了 3D Tiles 和 glTF 中元数据属性使用的含义（“语义”）的通用定义。Tileset 作者可以单独定义他们自己的应用程序或特定领域的语义。

语义描述了应该如何解释属性。例如，在解析数据集时遇到`ID`或`NAME`语义的应用程序可能会将这些值分别用作唯一标识符或人类可读标签。

每个语义都是根据它的含义和它可能采用的数据类型来定义的。[数据类型规范包括3D 元数据规范](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)定义的“类型” 。适用时，它们还可能包括“组件类型”、“数组”和“计数”。

有关语义的使用，请参见：

-   [3D Tiles Metadata——](https://portal.ogc.org/files/102132#core-metadata) 将元数据分配给 3D Tiles 1.1 中的 tilesets、tiles 和内容
-   [`3DTILES_metadata`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_metadata)  — 3D Tiles 1.0 的扩展，将元数据分配给图块集、图块和内容
-   [`EXT_structural_metadata`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_structural_metadata) (glTF 2.0) — 将元数据分配给 glTF 资产中的顶点、纹素和特征

## [](https://portal.ogc.org/files/102132#toc151)F.2. 一般的

### [](https://portal.ogc.org/files/102132#f-2-1-%C2%A0-overview)F.2.1. 概述

在本节中，术语“实体”指的是可能与属性值（如[3D 元数据规范](https://portal.ogc.org/files/102132#metadata-3d-metadata-specification)中定义）相关联的任何概念对象。实体的示例包括 3D Tiles 中的图块集、图块和图块内容，或 glTF 2.0 资产中的顶点和纹素组。其他类型的实体可以由其他规范或应用程序定义。

### [](https://portal.ogc.org/files/102132#f-2-2-%C2%A0-general-semantics)F.2.2. 一般语义

表 F.1——通用元数据语义

| 语义的                   | 类型                                                                 | 描述                                                                                                                                                                                   |
| --------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ID`                  | -   类型：`STRING`                                                    | 实体的唯一标识符。                                                                                                                                                                            |
| `姓名`                  | -   类型：`STRING`                                                    | 实体的名称。名称应该是人类可读的，并且不必是唯一的。                                                                                                                                                           |
| `描述`                  | -   类型：`STRING`                                                    | 实体的描述。通常至少是一个短语，也可能是几个句子或段落。                                                                                                                                                         |
| `ATTRIBUTION_IDS`     | -   类型：`标量`
-   组件类型：`UINT8`、`UINT16`、`UINT32`或`UINT64`
-   数组：`真` | 索引到属性字符串全局列表中的属性 ID 列表。这种语义可以分配给任何粒度级别的元数据，包括瓦片集、组、子树、瓦片、内容、特征、顶点和纹素粒度。属性字符串的全局列表位于具有属性语义`ATTRIBUTION_STRINGS 的`tileset 或子树中。以下优先顺序用于定位属性字符串：首先是包含子树（如果适用），然后是包含外部瓦片集（如果适用），最后是根瓦片集。 |
| `ATTRIBUTION_STRINGS` | -   类型：`STRING`
-   数组：`真`                                         | 属性字符串列表。每个字符串都包含有关数据提供者或版权文本的信息。文本可能包含嵌入式标记语言，例如 HTML。这种语义可以分配给任何粒度的元数据（任何可以编码`STRING属性值的地方）。`当与`ATTRIBUTION_IDS`结合使用时，它被分配给子树和 tilesets。                                            |

## [](https://portal.ogc.org/files/102132#toc152)F.3. 3D Tile

### [](https://portal.ogc.org/files/102132#f-3-1-%C2%A0-overview)F.3.1. 概述

3D Tiles 的语义根据 3D Tiles 规范定义的 tileset、子树、tile 或 tile 内容进行分配。当与其他类型的实体相关联时，这些语义可能具有无效或未定义的含义。

所有直线距离的单位都是米，所有角度的单位都是弧度。

### [](https://portal.ogc.org/files/102132#f-3-2-%C2%A0-tileset)F.3.2. 瓦片集

#### [](https://portal.ogc.org/files/102132#f-3-2-1-%C2%A0-overview)F.3.2.1.概述

`TILESET_*`语义为与 tileset 关联的属性提供含义。

#### [](https://portal.ogc.org/files/102132#f-3-2-2-%C2%A0-tileset-semantics)F.3.2.2.瓦片集语义

表 F.2——Tileset 元数据语义

| 语义的                            | 类型                         | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TILESET_FEATURE_ID_LABELS`    | -   类型：`STRING`
-   数组：`真` | [`使用EXT_mesh_features`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_mesh_features)和[`EXT_instance_features`](https://github.com/CesiumGS/glTF/tree/3d-tiles-next/extensions/2.0/Vendor/EXT_instance_features)扩展合并 glTF 内容中的所有特征 ID 标签。                                                                                                                                                                                            |
| `TILESET_CRS_GEOCENTRIC`       | -   类型：`STRING`            | tileset 的地心坐标参考系统 (CRS)。值包括但不限于：-   `“EPSG:4978”`  ——WGS 84
-   `"EPSG:7656"`  — WGS 84 (G730)
-   `"EPSG:7658"`  — WGS 84 (G873)
-   `"EPSG:7660"`  — WGS 84 (G1150)
-   `"EPSG:7662"`  — WGS 84 (G1674)
-   `"EPSG:7664"`  — WGS 84 (G1762)
-   `"EPSG:9753"`  — WGS 84 (G2139)
-   `"UNKNOWN"`  — CRS 未知`假定区域`包围体使用与此处指定的地心坐标参考系相同的参考椭球体。有关 3D Tiles 中坐标参考系统的更多详细信息，请参阅[坐标参考系统 (CRS)](https://portal.ogc.org/files/102132#core-coordinate-reference-system-crs)。 |
| `TILESET_CRS_COORDINATE_EPOCH` | -   类型：`STRING`            | 参考动态 CRS（例如 WGS 84）的坐标的坐标纪元。坐标包括应用变换后的 glTF 顶点位置——请参阅[glTF 变换](https://portal.ogc.org/files/102132#core-gltf-transforms)。表示为十进制年份（例如`"2019.81"`）。有关更多详细信息，请参阅[坐标纪元和坐标元数据的 WKT 表示。](http://docs.opengeospatial.org/is/18-010r7/18-010r7.html#128)                                                                                                                                                                                                                    |

### [](https://portal.ogc.org/files/102132#f-3-3-%C2%A0-tile)F.3.3. 瓦

#### [](https://portal.ogc.org/files/102132#f-3-3-1-%C2%A0-overview)F.3.3.1.概述

`TILE_*`语义为与特定图块关联的属性提供含义，并且应优先于父对象上的等效元数据，以及从[隐式平铺](https://portal.ogc.org/files/102132#implicittiling-implicit-tiling)中的细分方案派生的值。

如果缺少属性值，要么是因为省略了属性，要么是属性表包含`noData`值，则会使用原始图块属性，例如在 tileset JSON 中明确定义的属性或从[隐式平铺](https://portal.ogc.org/files/102132#implicittiling-implicit-tiling)中的细分方案隐式计算的属性。

特别是，`TILE_BOUNDING_BOX`、`TILE_BOUNDING_REGION`和`TILE_BOUNDING_SPHERE`语义各自为图块定义了比从[隐式平铺隐式](https://portal.ogc.org/files/102132#implicittiling-implicit-tiling)计算的更具体的边界体积。如果这些语义中的一种以上可用于磁贴，则客户可以根据用例和性能要求选择最合适的选项。

#### [](https://portal.ogc.org/files/102132#f-3-3-2-%C2%A0-tile-semantics)F.3.3.2.Tile语义

表 F.3——图块元数据语义

| 语义的                              | 类型                                                              | 描述                                                                                                                                                                                                                                                                                    |
| -------------------------------- | --------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TILE_BOUNDING_BOX`              | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`
-   数组：`真`
-   数量：`12` | tile 的边界体积，表示为[box](https://portal.ogc.org/files/102132#core-box)。相当于`tile.boundingVolume.box`。                                                                                                                                                                                       |
| `TILE_BOUNDING_REGION`           | -   类型：`标量`
-   组件类型：`FLOAT64`
-   数组：`真`
-   数量：`6`            | tile 的边界体积，表示为[region](https://portal.ogc.org/files/102132#core-region)。相当于`tile.boundingVolume.region`。                                                                                                                                                                              |
| `TILE_BOUNDING_SPHERE`           | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`
-   数组：`真`
-   数量：`4`  | tile 的边界体积，表示为[sphere](https://portal.ogc.org/files/102132#core-sphere)。相当于`tile.boundingVolume.sphere`。                                                                                                                                                                              |
| `TILE_BOUNDING_S2_CELL`          | -   类型：`标量`
-   组件类型：`UINT64`                                   | 图块的边界体积，使用 64 位表示而不是十六进制表示表示为[S2 单元 ID 。](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md#cell-ids)仅适用于[`3DTILES_bounding_volume_S2`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md)。 |
| `TILE_MINIMUM_HEIGHT`            | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`                        | WGS84 椭球体上方（或下方）的最小高度。相当于`TILE_BOUNDING_REGION`和`tile.boundingVolume.region`的最小高度组件。也相当于[`3DTILES_bounding_volume_S2`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md)的最小高度组件。                                                        |
| `TILE_MAXIMUM_HEIGHT`            | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`                        | WGS84 椭球体上方（或下方）的最大高度。相当于`TILE_BOUNDING_REGION`和`tile.boundingVolume.region`的最大高度组件。也相当于[`3DTILES_bounding_volume_S2`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md)的最大高度分量。                                                        |
| `TILE_HORIZON_OCCLUSION_POINT `1 | -   类型：`VEC3`
-   组件类型：`FLOAT32`或`FLOAT64`                      | Tile的地平线遮挡点以椭圆体比例的固定框架表示。如果此点在地平线以下，则整个图块都在地平线以下。有关详细信息，请参阅[地平线剔除。](https://cesium.com/blog/2013/04/25/horizon-culling/)                                                                                                                                                                |
| `TILE_GEOMETRIC_ERROR`           | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`                        | Tile的几何误差。相当于`tile.geometricError`。                                                                                                                                                                                                                                                     |
| `TILE_REFINE`                    | -   类型：`标量`
-   组件类型：`UINT8`                                    | 磁贴优化类型。有效值为`0` ( `”ADD”` ) 和`1` ( `”REPLACE”` )。相当于`tile.refine`。                                                                                                                                                                                                                     |
| `TILE_TRANSFORM`                 | -   类型：`MAT4`
-   组件类型：`FLOAT32`或`FLOAT64`                      | Tile变换。相当于`tile.transform`。                                                                                                                                                                                                                                                             |

1 `TILE_HORIZON_OCCLUSION_POINT`应说明图块及其后代中的所有内容，而`CONTENT_HORIZON_OCCLUSION_POINT`应仅说明图块中的内容。当两个值相等时，只应指定`TILE_HORIZON_OCCLUSION_POINT 。`

### [](https://portal.ogc.org/files/102132#f-3-4-%C2%A0-content)F.3.4. 内容

#### [](https://portal.ogc.org/files/102132#f-3-4-1-%C2%A0-overview)F.3.4.1.概述

`CONTENT_*`语义为与图块内容关联的属性提供含义，并且可能比包含图块的属性更具体到该内容。

`CONTENT_BOUNDING_BOX`、`CONTENT_BOUNDING_REGION`和`CONTENT_BOUNDING_SPHERE`语义分别为图块内容定​​义比图块边界体积更具体的边界体积。如果这些语义中有多个可用于相同的内容，则客户端可以根据用例和性能要求选择最合适的选项。

#### [](https://portal.ogc.org/files/102132#f-3-4-2-%C2%A0-content-semantics)F.3.4.2.内容语义

表 F.4——内容元数据语义

| 语义的                                 | 类型                                                              | 描述                                                                                                                                                                                                                                                                                      |
| ----------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `CONTENT_BOUNDING_BOX`              | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`
-   数组：`真`
-   数量：`12` | tile 内容的边界体积，表示为[box](https://portal.ogc.org/files/102132#core-box)。相当于`tile.content.boundingVolume.box`。                                                                                                                                                                               |
| `CONTENT_BOUNDING_REGION`           | -   类型：`标量`
-   组件类型：`FLOAT64`
-   数组：`真`
-   数量：`6`            | tile 内容的边界体积，表示为[region](https://portal.ogc.org/files/102132#core-region)。相当于`tile.content.boundingVolume.region`。                                                                                                                                                                      |
| `CONTENT_BOUNDING_SPHERE`           | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`
-   数组：`真`
-   数量：`4`  | tile 内容的边界体积，表示为[sphere](https://portal.ogc.org/files/102132#core-sphere)。相当于`tile.content.boundingVolume.sphere`。                                                                                                                                                                      |
| `CONTENT_BOUNDING_S2_CELL`          | -   类型：`标量`
-   组件类型：`UINT64`                                   | 图块内容的边界体积，使用 64 位表示而不是十六进制表示表示为[S2 单元 ID 。](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md#cell-ids)仅适用于[`3DTILES_bounding_volume_S2`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md)。 |
| `CONTENT_MINIMUM_HEIGHT`            | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`                        | WGS84 椭球上方（或下方）的图块内容的最小高度。相当于`CONTENT_BOUNDING_REGION`和`tile.content.boundingVolume.region`的最小高度组件。也相当于[`3DTILES_bounding_volume_S2`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md)的最小高度组件。                                           |
| `CONTENT_MAXIMUM_HEIGHT`            | -   类型：`标量`
-   组件类型：`FLOAT32`或`FLOAT64`                        | WGS84 椭球上方（或下方）的图块内容的最大高度。相当于`CONTENT_BOUNDING_REGION`和`tile.content.boundingVolume.region`的最大高度组件。也相当于[`3DTILES_bounding_volume_S2`](https://github.com/CesiumGS/3d-tiles/tree/main/extensions/3DTILES_bounding_volume_S2/README.md)的最大高度分量。                                           |
| `CONTENT_HORIZON_OCCLUSION_POINT `1 | -   类型：`VEC3`
-   组件类型：`FLOAT32`或`FLOAT64`                      | 以椭圆体比例固定框架表示的图块内容的水平遮挡点。如果这个点在地平线以下，则整个内容都在地平线以下。有关详细信息，请参阅[地平线剔除。](https://cesium.com/blog/2013/04/25/horizon-culling/)                                                                                                                                                                |
| `内容_URI`                            | -   类型：`STRING`                                                 | 内容 uri。覆盖隐式磁贴生成的内容 uri。相当于`tile.content.uri`。                                                                                                                                                                                                                                           |
| `CONTENT_GROUP_ID`                  | -   类型：`标量`
-   组件类型：`UINT8`、`UINT16`、`UINT32`或`UINT64`         | 内容组 ID。相当于`tile.content.group`。                                                                                                                                                                                                                                                         |

1 `TILE_HORIZON_OCCLUSION_POINT`应说明图块及其后代中的所有内容，而`CONTENT_HORIZON_OCCLUSION_POINT`应仅说明图块中的内容。当两个值相等时，只应指定`TILE_HORIZON_OCCLUSION_POINT 。`

  


# [](https://portal.ogc.org/files/102132#toc153)**附件 G** （资料性） **贡献者**

编辑：

-   帕特里克·科齐，[@pjcozzi](https://twitter.com/pjcozzi)，<patrick@cesium.com>
-   肖恩·利利，[@](https://twitter.com/lilleyse) lilleyse ，<sean@cesium.com>

致谢：

-   加比盖茨，[@gabbygetz](https://twitter.com/gabbygetz)
-   马特·阿马托，[@matt_amato](https://twitter.com/matt_amato)
-   埃里克·安德森，[@e-andersson](https://github.com/e-andersson)
-   丹·巴格内尔，[@bagnell](https://github.com/bagnell)
-   雷宾利
-   詹尼斯博林，[@jbo023](https://github.com/jbo023)
-   约翰博格
-   迪伦·布朗，[@Dylan-Brown](http://www.github.com/Dylan-Brown)
-   Sarah Chow，[cesium.com/team/SarahChow](https://cesium.com/team/SarahChow/)
-   保罗·康奈利
-   沃尔克库尔斯
-   埃里克·达尔斯特罗姆，[@erikdahlstrom](https://github.com/erikdahlstrom)
-   汤姆菲利，[@CesiumFili](https://twitter.com/CesiumFili)
-   丽萨·菲尼，[@LeesaFini](http://www.github.com/LeesaFini)
-   彼得·加利亚尔迪，[@ptrgags](https://github.com/ptrgags)
-   拉尔夫古特贝尔
-   弗雷德里克·胡比
-   马可·哈特，[@javagl](https://github.com/javagl)
-   丹尼尔克鲁普卡，[@krupkad](https://github.com/krupkad)
-   伊恩·利利，[@IanLilleyT](https://github.com/IanLilleyT)
-   唐麦柯迪，[@donmccurdy](https://github.com/donmccurdy)
-   Christopher Mitchell，博士，[@KermMartian](https://github.com/KermMartian)
-   谢赞穆罕默德，[@shehzan10](https://github.com/shehzan10)
-   克劳斯内格尔
-   让-菲利普庞斯
-   卡尔·里德
-   凯文·林 (Kevin Ring)，[www.kotachrome.com/kevin](http://www.kotachrome.com/kevin/)
-   斯科特·西蒙斯
-   Sam Suhag，[@sanjeetsuhag](https://github.com/sanjeetsuhag)
-   Rob Taglang，[@lasalvavida](https://github.com/lasalvavida)
-   斯坦蒂尔曼
-   皮耶罗·托法宁，[@pierotofy](https://github.com/pierotofy)
-   Bao Tran，[@baothientran](https://github.com/baothientran)
-   塞缪尔巴尔加斯，[@samulus](https://github.com/samulus)
-   帕诺·沃杜里斯
-   戴夫韦斯洛

  


# [](https://portal.ogc.org/files/102132#toc154)**附录 H** （资料性附录） **修订历史**

| 日期         | 发布    | 编辑    | 主要条款已修改 | 描述                                         |
| ---------- | ----- | ----- | ------- | ------------------------------------------ |
| 2022-07-26 | 1.1.0 | 肖恩·里利 | 全部      | 这是本文件的第一个规范版本。                             |
| 2022-08-17 | 1.1.0 | 肖恩·里利 |         | 添加了关于矩阵的弧度选择、边界框表示和列主序的解释性说明。修复了格式问题和拼写错误。 |
| 2022-08-18 | 1.1.0 | 肖恩·里利 |         | 生成的文档的 HTML 版本。
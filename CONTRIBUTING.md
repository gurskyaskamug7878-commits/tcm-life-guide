# 贡献指南 (Contributing to 知常中医)

感谢你对 **知常中医 (ZhiChang TCM Guide)** 的关注！为了让更多普通人能够安全、准确地了解中医穴位与传统功法，我们非常欢迎你提交新的穴位图解、病症辨证科普或体验优化。

## 📁 项目结构说明

```text
tcm-life-guide/
├── index.html                  # 主页面渲染与交互逻辑（无构建依赖）
├── data.js                     # 核心数据仓库（病症、穴位、八部金刚功、更新日志）
├── README.md                   # 中英双语项目说明
├── CONTRIBUTING.md             # 本贡献指南
└── .github/
    ├── ISSUE_TEMPLATE/         # Issue 反馈与词条提交模板
    └── workflows/              # 每日自动巡检与安全提醒工作流
```

## ➕ 如何新增一个穴位或病症？（无需懂复杂前端）

你只需要编辑根目录下的 `data.js` 文件，按照现有格式追加一个 JSON 对象即可：

1. **新增穴位**（添加到 `window.TCM_DATA.acupoints` 数组）：
   - `id`: 唯一英文拼音标识（如 `'yinlingquan'`）
   - `category`: 分类（`'kidney'` / `'cold'` / `'stomach'` / `'sleep'`）
   - `name`: 穴位名称与核心功效一句话总结
   - `meridian`: 所属经络
   - `targetSymptoms`: 主治常见症状
   - `locationGuide`: 一秒找准法（用骨头、横纹、几横指等大白话描述）
   - `method`: 按揉手法与时长
   - `caution`: **必填！安全禁忌提示（如孕妇禁忌、皮肤破损禁忌等）**

2. **内容审核安全红线（必读）**：
   - 严禁出现具体处方中药材克数（如附子、细辛等有毒烈性中药）。
   - 食疗茶饮仅限药食同源常见食材（如生姜、葱白、薏米、红豆、陈皮、枸杞等）。
   - 必须包含明确的安全提示与就医提醒。

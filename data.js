/**
 * 知常中医 (ZhiChang TCM Guide) 核心数据结构
 * 欢迎通过 Pull Request 补充穴位、病症辨证或功法解析！
 * 贡献规范请见根目录 CONTRIBUTING.md
 */

window.TCM_DATA = {
  version: "v2.0.0",
  lastUpdated: "2026-11-26",
  changelog: [
    {
      date: "2026-11-26",
      version: "v2.0.0",
      title: "开源社区协作架构升级",
      items: [
        "抽离核心数据至 data.js，降低社区贡献者添加穴位与病症的门槛",
        "补全太溪、涌泉、关元、大椎等补肾固本与下焦养护穴位图解",
        "强化顶部与底部医疗合规免责声明，新增一键反馈与贡献入口",
        "优化移动端单手触控体验与折叠导航，新增版本更新日志弹窗"
      ]
    },
    {
      date: "2026-11-24",
      version: "v1.2.0",
      title: "补肾辨证与前列腺养护专题上线",
      items: [
        "新增肾阴虚与肾阳虚对比及六味地黄丸误服避坑指南",
        "新增前列腺 40℃~42℃ 温水坐浴理疗规范与备孕安全警示"
      ]
    },
    {
      date: "2026-11-23",
      version: "v1.0.0",
      title: "首个 MVP 版本发布",
      items: [
        "上线风寒/风热感冒对比、湿疹/荨麻疹/痘痘辨证科普",
        "上线八部金刚功全八式图解与智能语音带练计时器"
      ]
    }
  ],
  illnesses: [
    {
      id: 'kidney-yin-yang',
      category: 'kidney',
      tag: '补肾固本 · 阴阳辨证',
      tagColor: 'bg-indigo-100 text-indigo-800',
      title: '肾虚别乱补！3分钟分清“肾阳虚”与“肾阴虚”',
      coreLogic: '中医讲“肾为先天之本”，内藏真阴（肾水）与真阳（命门之火）。阳虚是“锅炉火力不够”，全身怕冷；阴虚是“锅里水烧干了”，虚火往上冒。不分阴阳乱吃补药，越补越伤身！',
      symptoms: [
        '【肾阳虚（火力不足）】腰膝冷痛、特别怕冷手脚冰凉、精神萎靡、夜尿频多（起夜2次以上）、大便稀溏',
        '【肾阴虚（水液亏虚）】腰膝酸软、手脚心和胸口烦热、晚上睡觉出盗汗、口干咽燥、耳鸣健忘'
      ],
      rightWay: '【按穴 + 食疗 + 导引】无论阴虚阳虚，每天按揉脚内踝后方的【太溪穴】和搓热脚底【涌泉穴】各5分钟（既能滋肾水又能引火归元）。阳虚平时可吃核桃仁、黑豆、韭菜、生姜羊肉汤；阴虚可吃黑芝麻、桑葚、山药、银耳百合。每天练八部金刚功【第二部：手足前后固肾腰】。',
      wrongPitfall: '❌ 避坑提醒：六味地黄丸只针对【肾阴虚】！如果你本身怕冷、手脚冰凉（肾阳虚），吃了六味地黄丸等于雪上加霜，会越吃越怕冷、胃口变差。'
    },
    {
      id: 'prostate-sitz-bath',
      category: 'kidney',
      tag: '下焦养护 · 前列腺专题',
      tagColor: 'bg-cyan-100 text-cyan-800',
      title: '前列腺养护指南：为什么“温水坐浴”比盲目吃消炎药管用？',
      coreLogic: '从中医视角看，前列腺位于下焦盆底，长期久坐、憋尿、熬夜会把会阴部血脉死死压住，形成“下焦气滞血瘀、湿热下注”。多数慢性前列腺不适并非急性细菌感染，而是局部微循环淤堵、肌肉痉挛所致。',
      symptoms: [
        '久坐后会阴部、小腹、腹股沟或腰骶部隐隐坠胀酸痛',
        '尿频、尿急、排尿等待、尿后滴沥不尽或夜尿增多',
        '喝酒、吃辛辣火锅或受凉久坐后症状明显加重'
      ],
      rightWay: '【40℃~42℃ 温水坐浴法（核心居家理疗）】每晚睡前准备专用坐浴盆，倒入 40℃~42℃ 温热水（手感温热不烫皮肤），将整个臀部和会阴部浸入水中坐浴 15~20 分钟。热力直接透达【会阴穴】与【关元穴】，松弛盆底痉挛肌肉、加速前列腺局部血液循环。配合每日按揉【关元穴】与【太溪穴】，每坐 45 分钟起身走动 5 分钟。',
      wrongPitfall: '⚠️ 重要安全提示：1. 未婚未育或近期有备孕计划的男性，慎用高温坐浴（高温会影响睾丸生精功能）；2. 切忌憋尿、戒酒戒辣、避免骑硬座自行车长时间压迫会阴。'
    },
    {
      id: 'cold-wind-cold',
      category: 'cold',
      tag: '普通感冒 · 寒证',
      tagColor: 'bg-sky-100 text-sky-800',
      title: '风寒感冒：为什么穿再多还是打冷战？',
      coreLogic: '本质是“寒邪把皮肤毛孔锁死了”。身体想靠升高体温把寒气逼出去，但毛孔闭着出不了汗，所以你会觉得怕冷、浑身肌肉紧绷酸痛、流清水鼻涕。',
      symptoms: ['明显怕冷、风一吹就打寒战', '流清稀鼻涕（像水一样）、打喷嚏', '后脑勺和脖子发紧、舌苔薄白、基本不出汗'],
      rightWay: '核心思路是【辛温解表、微微发汗】。用3片带皮生姜 + 2根带须葱白 + 少许红糖煮水趁热喝，喝完盖被子捂出一点微汗（切忌大汗淋漓）即好。配合按揉【风池穴】【大椎穴】。',
      wrongPitfall: '❌ 千万别喝板蓝根、蒲地蓝、双黄连等苦寒中成药！寒上加寒，会把寒气死死压在肺里，导致咳嗽拖一两个月好不了。'
    },
    {
      id: 'cold-wind-heat',
      category: 'cold',
      tag: '普通感冒 · 热证',
      tagColor: 'bg-amber-100 text-amber-800',
      title: '风热感冒：一上来就嗓子吞刀片、流黄涕',
      coreLogic: '本质是“体内存有积热，又感受了温热之邪”，火气直接往上冲到咽喉和鼻腔，把津液烤干了，所以痰和鼻涕都是黄黏的。',
      symptoms: ['嗓子红肿干痛、咽口水像吞刀片', '流黄浓鼻涕、咳黄黏痰', '发热重、怕冷轻、口干口渴、舌尖红'],
      rightWay: '核心思路是【辛凉透表、清利咽喉】。可用干桑叶 6g + 菊花 6g + 薄荷 3g（后下）泡水代茶饮；多吃梨子、白萝卜。配合掐按虎口【合谷穴】清泄肺热。',
      wrongPitfall: '❌ 此时千万别喝姜糖水、别吃羊肉火锅或桂圆红枣，等于往火堆里浇油，扁桃体会迅速化脓。'
    },
    {
      id: 'skin-eczema',
      category: 'skin',
      tag: '常见皮肤 · 湿热/脾虚',
      tagColor: 'bg-emerald-100 text-emerald-800',
      title: '湿疹反复发作：为什么光涂药膏总是断不了根？',
      coreLogic: '中医讲“诸痛痒疮，皆属于心；湿性趋下，缠绵难愈”。皮肤只是身体的排污口！脾胃虚弱运化不动体内的水湿，湿气郁久化热，被迫往皮肤表面拱，起水泡、抓破渗黄水就是湿疹。',
      symptoms: ['皮肤起红斑丘疹、剧烈瘙痒、夜间加重', '抓破后容易渗出黏液、结痂、对称分布', '常伴随舌苔厚腻、大便粘马桶、容易疲倦'],
      rightWay: '【内健脾祛湿 + 外温和止痒】。日常用炒薏米 + 赤小豆 + 茯苓煮水（健脾利水）；每天按揉小腿内侧【足三里】各5分钟。洗澡水温别太烫（烫水当时解痒，事后更干更痒）。',
      wrongPitfall: '❌ 严格忌口“发物与生湿之物”：冰奶茶、甜蛋糕、芒果榴莲、海鲜虾蟹、辛辣酒水。体内湿气源头不断，涂再多药膏也只是暂时压制。'
    },
    {
      id: 'skin-urticaria',
      category: 'skin',
      tag: '常见皮肤 · 风邪入血',
      tagColor: 'bg-purple-100 text-purple-800',
      title: '荨麻疹（风疹块）：吹风就起包，退了又长',
      coreLogic: '“风者，善行而数变”。荨麻疹起得快、消得也快、位置乱跑，完全符合中医“风邪”的特点。根本原因是卫气不固（皮肤防御门户松了），风寒或风热乘虚钻进血脉里。',
      symptoms: ['皮肤突然出现大小不一的红色或苍白色风团', '剧烈瘙痒，越抓越成片，消退后不留痕迹', '受凉吹风、熬夜免疫力下降或吃异种蛋白后诱发'],
      rightWay: '【固表祛风、活血止痒】。中医有句名言“治风先治血，血行风自灭”。日常保持作息规律，出汗后及时擦干避风，按揉【足三里】与【合谷穴】增强卫气。',
      wrongPitfall: '❌ 避免在出大汗后直接对着空调冷风吹，或洗完澡没擦干就吹风扇，最易把风寒直接关进皮肤腠理。'
    },
    {
      id: 'skin-acne',
      category: 'skin',
      tag: '常见皮肤 · 肺胃郁热',
      tagColor: 'bg-rose-100 text-rose-800',
      title: '反复长痘（痤疮）：不同位置对应不同脏腑火气',
      coreLogic: '长痘绝不只是“脸没洗干净”。额头和眉心长痘多是心肺火旺（熬夜、思虑多）；鼻子周围与口周红肿痘多是脾胃湿热（吃得油腻重口）；下巴两侧反复硬结痘多与肝郁及下焦寒湿有关。',
      symptoms: ['面部出油旺盛、毛孔粗大', '红肿疼痛的脓包痘，或摸起来硬硬的暗疮', '常伴随口臭、大便干结或粘滞、熬夜后加重'],
      rightWay: '【清胃降火 + 疏通中焦】。晚上11点前入睡养肝血；用蒲公英（少量）+ 桑叶 + 甘草泡水清肺胃热；每天练习八部金刚功的【调理脾肤需单举】，拉伸脾胃经络。',
      wrongPitfall: '❌ 切忌用手硬挤三角区痘痘，也别天天用强力皂基洗面奶猛搓，破坏皮肤屏障后反而外油内干、越长越多。'
    },
    {
      id: 'daily-spleen-sleep',
      category: 'daily',
      tag: '亚健康调理 · 脾胃与睡眠',
      tagColor: 'bg-teal-100 text-teal-800',
      title: '胃不和则卧不安：为什么越累越睡不着？',
      coreLogic: '现代人很多失眠不是“缺安眠药”，而是“心肾不交”或“胃气不降”。白天久坐不动、晚上吃太晚太饱，胃里食物堵着，阳气下不去潜藏，全浮在头面部，大脑就像关不掉的CPU一样胡思乱想。',
      symptoms: ['躺下脑子停不下来、入睡超过30分钟', '睡得很浅、做梦多、凌晨1~3点容易醒', '晚饭后肚子发胀、打嗝、手脚心容易发热或脚凉'],
      rightWay: '【引火归元 + 疏通心包】。晚饭七分饱且睡前3小时不进食；睡前用温热水泡脚15分钟，搓热脚底【涌泉穴】100下，按揉手腕内侧【神门穴】。',
      wrongPitfall: '❌ 睡前刷刺激性短视频、喝浓茶咖啡，或刚吃完夜宵立刻平躺睡觉。'
    }
  ],
  acupoints: [
    {
      id: 'taixi',
      category: 'kidney',
      name: '太溪穴（滋阴补肾、强腰膝第一原穴）',
      meridian: '足少阴肾经 · 原穴',
      targetSymptoms: '肾阴虚/肾阳虚通用、腰膝酸软、夜尿频多、耳鸣脱发、手脚冰凉或手心发热',
      locationGuide: '【一秒找准法】在脚内侧，摸到内踝骨（脚腕内侧最突出的骨头尖）和脚后跟大筋（跟腱）之间的正中凹陷处，按下去能摸到动脉微微跳动的地方就是太溪穴。',
      method: '用大拇指指腹垂直按揉，力度由轻到重，感到明显酸胀感向脚底或小腿内侧扩散为佳，左右脚各按揉 5 分钟（睡前泡脚后按揉效果翻倍）。',
      caution: '肾经原穴，气血汇聚之处，日常坚持按揉无任何副作用。',
      svgDiagram: `<svg viewBox="0 0 320 240" class="w-full h-56 bg-[#FAF8F5] rounded-xl border border-[#E2DCD0]"><path d="M120,30 L125,120 Q122,145 95,165 Q65,185 55,200 Q50,210 75,212 L195,212 Q218,210 212,185 Q205,160 192,135 L188,30 Z" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="2"/><path d="M188,45 Q194,120 202,190" fill="none" stroke="#C5B49A" stroke-width="4" stroke-linecap="round"/><text x="225" y="110" font-size="10" fill="#6E7872">跟腱</text><circle cx="152" cy="142" r="16" fill="#E8D7C3" stroke="#8C7A5B" stroke-width="1.5"/><text x="152" y="145" font-size="9" fill="#5A655F" text-anchor="middle">内踝尖</text><circle cx="180" cy="142" r="12" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="180" cy="142" r="5.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><line x1="180" y1="142" x2="235" y2="165" stroke="#DC2626" stroke-width="1.5"/><rect x="208" y="155" width="102" height="26" rx="6" fill="#DC2626"/><text x="259" y="172" font-size="11" fill="#FFFFFF" font-weight="bold" text-anchor="middle">太溪穴（凹陷中）</text><text x="145" y="25" font-size="10" fill="#6E7872" text-anchor="middle">足内侧视图 · 内踝尖与跟腱连线中点</text></svg>`
    },
    {
      id: 'yongquan',
      category: 'kidney',
      name: '涌泉穴（引火归元、温补肾阳长寿穴）',
      meridian: '足少阴肾经 · 井穴',
      targetSymptoms: '肾阳虚怕冷、虚火上浮失眠、高血压头晕、精力不足、腰腿无力',
      locationGuide: '【一秒找准法】把脚掌用力向脚心方向弯曲（蜷起脚趾），脚底前部正中央会出现一个明显的人字形凹陷窝（约在足底前 1/3 与后 2/3 交界处），这里就是涌泉穴。',
      method: '【擦涌泉法】每晚温水泡脚后，用左手掌心快速搓擦右脚心涌泉穴 100 下，再用右手搓擦左脚心 100 下，搓到脚心发烫、全身微微发热为止。',
      caution: '搓热脚心后建议立刻穿上袜子或盖被入睡，防止寒气从脚底入侵。',
      svgDiagram: `<svg viewBox="0 0 320 240" class="w-full h-56 bg-[#FAF8F5] rounded-xl border border-[#E2DCD0]"><path d="M135,35 C165,35 195,55 192,95 C190,120 182,145 185,175 C187,198 172,215 152,215 C132,215 120,198 122,175 C124,148 115,120 112,92 C108,58 118,35 135,35 Z" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="2"/><ellipse cx="128" cy="26" rx="9" ry="11" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="1.5"/><ellipse cx="146" cy="24" rx="6" ry="9" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="1.5"/><ellipse cx="160" cy="27" rx="5.5" ry="8" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="1.5"/><ellipse cx="173" cy="32" rx="5" ry="7.5" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="1.5"/><ellipse cx="185" cy="40" rx="4.5" ry="6.5" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="1.5"/><path d="M132,85 Q152,102 172,85" fill="none" stroke="#C5B49A" stroke-width="2" stroke-linecap="round"/><circle cx="152" cy="92" r="12" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="152" cy="92" r="5.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><line x1="152" y1="92" x2="215" y2="112" stroke="#DC2626" stroke-width="1.5"/><rect x="202" y="102" width="108" height="26" rx="6" fill="#DC2626"/><text x="256" y="119" font-size="11" fill="#FFFFFF" font-weight="bold" text-anchor="middle">涌泉穴（足心凹陷）</text><text x="72" y="130" font-size="10" fill="#6E7872" text-anchor="middle">足底前1/3处</text></svg>`
    },
    {
      id: 'guanyuan',
      category: 'kidney',
      name: '关元穴（培元固本、前列腺与下焦温煦大穴）',
      meridian: '任脉 · 小肠募穴（下丹田所在）',
      targetSymptoms: '前列腺坠胀尿频、肾气虚弱、小腹冷痛、宫寒痛经、元气不足易疲劳',
      locationGuide: '【一秒找准法】在下腹部正中线上，把除大拇指外的四根手指（食指、中指、无名指、小指）并拢横放，食指上缘紧贴肚脐眼下缘，小指下缘正对腹中线的位置（肚脐正下方 3 寸）就是关元穴。',
      method: '【掌心温摩法】两手掌心搓热，叠放在关元穴上，顺时针缓慢画圈揉动 5 分钟，直到小腹部感到温热舒适（配合温水坐浴效果极佳）。',
      caution: '⚠️ 孕妇禁止重按或艾灸下腹部关元穴；排空小便后再按揉更舒适。',
      svgDiagram: `<svg viewBox="0 0 320 240" class="w-full h-56 bg-[#FAF8F5] rounded-xl border border-[#E2DCD0]"><path d="M85,35 L235,35 L245,155 Q195,195 160,210 Q125,195 75,155 Z" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="2"/><line x1="160" y1="40" x2="160" y2="200" stroke="#C5B49A" stroke-width="1.5" stroke-dasharray="4,3"/><circle cx="160" cy="78" r="8" fill="#E2CBB0" stroke="#8C7A5B" stroke-width="1.5"/><text x="122" y="82" font-size="10" fill="#6E7872">肚脐(神阙)</text><line x1="175" y1="78" x2="175" y2="132" stroke="#2C5E4F" stroke-width="1.5"/><text x="212" y="108" font-size="10" fill="#2C5E4F" font-weight="bold">四横指(3寸)</text><circle cx="160" cy="132" r="13" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="160" cy="132" r="5.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><line x1="160" y1="132" x2="98" y2="155" stroke="#DC2626" stroke-width="1.5"/><rect x="14" y="145" width="104" height="26" rx="6" fill="#DC2626"/><text x="66" y="162" font-size="11" fill="#FFFFFF" font-weight="bold" text-anchor="middle">关元穴（下丹田）</text></svg>`
    },
    {
      id: 'dazhui',
      category: 'cold',
      name: '大椎穴（振奋全身阳气、退热散寒总开关）',
      meridian: '督脉 · 手足三阳经交会穴',
      targetSymptoms: '风寒感冒怕冷、发热不退、低头族颈椎僵硬、阳气不足易感冒',
      locationGuide: '【一秒找准法】低头时，用手摸后脖子正中线上最突出、最高的那块骨头（第 7 颈椎棘突），紧贴这块骨头下方的凹陷处就是大椎穴。',
      method: '【搓热/温水冲淋法】洗澡时用 40℃ 左右温热水对着大椎穴冲淋 3 分钟；或用手掌根上下快速摩擦大椎穴，直到后背微微发热出微汗。',
      caution: '出汗后及时擦干穿衣，切忌吹冷风。',
      svgDiagram: `<svg viewBox="0 0 320 240" class="w-full h-56 bg-[#FAF8F5] rounded-xl border border-[#E2DCD0]"><path d="M115,45 C115,25 205,25 205,45 L200,115 Q245,130 265,165 L265,215 L55,215 L55,165 Q75,130 120,115 Z" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="2"/><line x1="160" y1="75" x2="160" y2="210" stroke="#C5B49A" stroke-width="2" stroke-dasharray="4,3"/><circle cx="160" cy="118" r="10" fill="#E8D7C3" stroke="#8C7A5B" stroke-width="1.5"/><text x="115" y="115" font-size="9" fill="#5A655F" text-anchor="end">第7颈椎高骨</text><circle cx="160" cy="136" r="13" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="160" cy="136" r="5.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><line x1="160" y1="136" x2="225" y2="155" stroke="#DC2626" stroke-width="1.5"/><rect x="205" y="145" width="102" height="26" rx="6" fill="#DC2626"/><text x="256" y="162" font-size="11" fill="#FFFFFF" font-weight="bold" text-anchor="middle">大椎穴（高骨下）</text></svg>`
    },
    {
      id: 'hegu',
      category: 'cold',
      name: '合谷穴（万能止痛与清热大穴）',
      meridian: '手阳明大肠经 · 原穴',
      targetSymptoms: '感冒发热、嗓子痛、头痛、牙痛、鼻塞、面部长痘',
      locationGuide: '【一秒找准法】把一只手的大拇指和食指张开，另一只手的大拇指第一个关节横纹正对虎口边缘，拇指尖按下去的地方就是合谷穴（约在第二掌骨中点桡侧缘）。',
      method: '用另一侧大拇指指腹垂直用力按揉，力度以产生明显“酸、麻、胀”感为宜，每次左右手各按揉 3~5 分钟。',
      caution: '⚠️ 重要禁忌：合谷穴有较强的行气活血作用，【孕妇严禁按揉】！',
      svgDiagram: `<svg viewBox="0 0 320 240" class="w-full h-56 bg-[#FAF8F5] rounded-xl border border-[#E2DCD0]"><path d="M90,220 L85,150 Q65,135 45,115 Q35,105 45,95 Q55,88 70,105 L95,125 L105,55 Q108,42 118,44 Q126,46 125,60 L122,115 L138,40 Q142,28 152,30 Q160,32 158,48 L152,115 L170,50 Q174,38 183,41 Q191,44 188,58 L178,120 L198,75 Q203,65 211,69 Q218,73 213,86 L192,155 L185,220 Z" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="2"/><circle cx="96" cy="132" r="14" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="96" cy="132" r="6" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><line x1="96" y1="132" x2="32" y2="62" stroke="#DC2626" stroke-width="1.5"/><rect x="10" y="34" width="115" height="28" rx="6" fill="#DC2626"/><text x="67" y="52" font-size="11" fill="#FFFFFF" font-weight="bold" text-anchor="middle">合谷穴（虎口高处）</text></svg>`
    },
    {
      id: 'fengchi',
      category: 'cold',
      name: '风池穴（风邪入脑的必守关口）',
      meridian: '足少阳胆经',
      targetSymptoms: '风寒/风热感冒初期、后脑勺头痛、落枕肩颈僵硬、眼睛干涩疲劳',
      locationGuide: '【一秒找准法】双手掌心捂住耳朵，大拇指自然向后脑勺下方摸去，在枕骨（后脑勺最突出的骨头）下方两侧，两条大筋外侧各有一个明显的凹陷窝，与耳垂基本齐平。',
      method: '双手大拇指指腹顶住两侧风池穴，其余四指抱住头部固定，向上方（朝向对侧眼睛方向）顶按揉动 3 分钟，直到后脖子微微发热。',
      caution: '力度适中，切忌用尖锐物猛戳。',
      svgDiagram: `<svg viewBox="0 0 320 240" class="w-full h-56 bg-[#FAF8F5] rounded-xl border border-[#E2DCD0]"><path d="M95,110 C95,55 225,55 225,110 C225,140 205,158 195,170 L205,220 L115,220 L125,170 C115,158 95,140 95,110 Z" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="2"/><circle cx="128" cy="148" r="12" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="128" cy="148" r="5.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><circle cx="192" cy="148" r="12" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="192" cy="148" r="5.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><rect x="10" y="165" width="98" height="26" rx="6" fill="#DC2626"/><text x="59" y="182" font-size="11" fill="#FFFFFF" font-weight="bold" text-anchor="middle">风池穴（双侧）</text></svg>`
    },
    {
      id: 'zusanli',
      category: 'stomach',
      name: '足三里（健脾祛湿、补气第一大穴）',
      meridian: '足阳明胃经 · 合穴',
      targetSymptoms: '胃胀胃痛、消化不良、体内湿气重（湿疹/大便粘）、免疫力低下、腿脚乏力',
      locationGuide: '【一秒找准法】坐着屈膝90度，摸到膝盖外侧下方有一个凹陷（外膝眼），把同侧手的四根手指并拢横放在外膝眼下方，小指下缘所对应的地方，再往小腿胫骨外侧移开约一横指处就是足三里。',
      method: '用大拇指指腹用力按压揉动，酸胀感越明显效果越好，每天两侧各按揉 5 分钟。',
      caution: '饭后半小时内不宜过重猛按，日常随时可按。',
      svgDiagram: `<svg viewBox="0 0 320 240" class="w-full h-56 bg-[#FAF8F5] rounded-xl border border-[#E2DCD0]"><path d="M70,50 L155,60 Q180,65 182,92 L175,215 L122,215 L125,112 L70,105 Z" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="2"/><circle cx="160" cy="146" r="12" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="160" cy="146" r="5.5" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><rect x="14" y="165" width="102" height="26" rx="6" fill="#DC2626"/><text x="65" y="182" font-size="11" fill="#FFFFFF" font-weight="bold" text-anchor="middle">足三里（小腿前外）</text></svg>`
    },
    {
      id: 'shenmen',
      category: 'sleep',
      name: '神门穴（安神助眠、平复心烦焦虑）',
      meridian: '手少阴心经 · 原穴',
      targetSymptoms: '入睡困难、多梦易醒、心慌心悸、工作压力大心烦焦虑',
      locationGuide: '【一秒找准法】掌心朝上，看手腕最靠近手掌的那条横纹，顺着小拇指往下摸到腕横纹处，能摸到一根硬硬的肌腱，就在这根肌腱内侧（靠大拇指一侧）的凹陷里。',
      method: '睡前躺在床上，用另一只手大拇指指腹轻轻掐按神门穴，配合缓慢深呼吸，左右手各按 3 分钟。',
      caution: '睡前按揉宜轻柔缓和，切忌暴力快搓。',
      svgDiagram: `<svg viewBox="0 0 320 240" class="w-full h-56 bg-[#FAF8F5] rounded-xl border border-[#E2DCD0]"><path d="M115,225 L120,135 L95,95 Q88,85 96,80 Q104,76 112,88 L125,108 L128,45 Q130,35 138,36 Q145,37 144,48 L144,100 L154,38 Q156,28 164,29 Q171,30 169,42 L166,100 L178,46 Q180,36 187,38 Q194,40 191,52 L184,106 L198,65 Q201,56 208,59 Q214,62 210,73 L194,135 L190,225 Z" fill="#F2E6D8" stroke="#8C7A5B" stroke-width="2"/><circle cx="182" cy="138" r="11" fill="#DC2626" fill-opacity="0.25" class="pulse-point"/><circle cx="182" cy="138" r="5" fill="#DC2626" stroke="#FFFFFF" stroke-width="2"/><rect x="200" y="162" width="108" height="26" rx="6" fill="#DC2626"/><text x="254" y="179" font-size="11" fill="#FFFFFF" font-weight="bold" text-anchor="middle">神门穴（小指侧腕纹）</text></svg>`
    }
  ],
  jingangMoves: [
    {
      num: '第一部',
      name: '双手插顶利三焦',
      organ: '疏通上、中、下三焦水道与气机',
      steps: '两脚与肩同宽站立，两手在腹前十指交叉，掌心向上缓慢托至胸前；随后翻掌向下压至小腹，再翻掌向上极力托举过头顶，同时两脚跟尽量提起离地，全身上下拔伸到极致，略停2秒后脚跟落地、两手从两侧划弧放下。',
      keyPoint: '关键点：用力不用拙力，托顶时要像要把头顶天花板顶破一样拔伸，把久坐挤压的胸腹腔彻底拉开。'
    },
    {
      num: '第二部',
      name: '手足前后固肾腰',
      organ: '强肾固腰、疏通膀胱经与督脉',
      steps: '左脚向前迈出一步成前弓步，两手合掌从胸前向上举起、向后仰身拉伸；随后两手分开向下划弧，顺着左腿两侧一直摸到脚尖（膝盖尽量挺直），停留2秒感受后腰与腿后侧拉伸，再起身换右脚向前重复。',
      keyPoint: '关键点：低头弯腰摸脚尖时，腿后侧膀胱经会有强烈酸胀拉伸感，切忌憋气，动作慢而沉稳。'
    },
    {
      num: '第三部',
      name: '调理脾肤需单举',
      organ: '健脾胃、祛湿气、改善皮肤出油与湿疹',
      steps: '左手掌心朝上从腰间向上托举过头顶（指尖朝右），同时右手掌心朝下用力向地面按压（指尖朝前），一上一下形成对拉拔伸之势；停留2秒后两手在胸前交替，换右手上托、左手下按。',
      keyPoint: '关键点：脾胃一升一降，左右单举正是模拟脾气上升、胃气下降，对胃胀、湿气重极有效。'
    },
    {
      num: '第四部',
      name: '左肝右肺如射雕',
      organ: '疏肝理气（左）与宣肺清气（右）',
      steps: '两脚开立比肩宽，屈膝下蹲成马步。左手握空拳拉弓，右手如推弓箭般向左前方推出，眼睛紧盯右手食指，两臂用力拉开；随后收回换另一侧向右侧拉弓射雕。',
      keyPoint: '关键点：中医讲“肝气升于左，肺气降于右”，拉弓时扩胸开背，专门化解现代人胸闷气短、爱叹气。'
    },
    {
      num: '第五部',
      name: '回头望足去心疾',
      organ: '降心火、交通心肾、缓解失眠心悸',
      steps: '左脚向左前方迈半步，身体向左后方极力扭转，右手向下往左脚后跟方向伸去，同时转头用眼睛紧紧盯着左脚后跟，左手向左上后方举起；恢复站立后换右侧重复。',
      keyPoint: '关键点：扭转到极限时停顿2秒，眼睛一定要看到脚后跟，能把浮在头顶的虚火引回肾水之中。'
    },
    {
      num: '第六部',
      name: '五劳七伤向后瞧',
      organ: '调理五脏积劳、修复低头族颈椎',
      steps: '两脚与肩同宽自然站立，两手五指并拢贴于大腿外侧；双肩保持不动，头部缓慢向左后方转动，眼睛尽量往正后方看，停留2秒后缓慢回正，再向右后方转动瞧看。',
      keyPoint: '关键点：身子绝不跟着转，只转脖子与眼睛，能极大缓解颈椎僵硬与用眼过度。'
    },
    {
      num: '第七部',
      name: '凤凰展翅周身力',
      organ: '打通带脉与全身经络、活血化瘀',
      steps: '两脚开立较宽，两臂向左右平举如大鹏展翅；上身前俯，右手向左脚尖方向点去，左手向后上方高举，眼睛看左手；随后起身左右交替展翅点脚。',
      keyPoint: '关键点：动作舒展大方，带动腰腹带脉大幅度扭转，最能消除腰腹赘肉与寒湿瘀堵。'
    },
    {
      num: '第八部',
      name: '两足顿顿饮嗜消',
      organ: '震动全身经脉、消除饮食积滞、收功归元',
      steps: '两脚并拢站直，两手自然下垂贴腿侧，全身放松；两脚跟缓缓提起离地尽量高，然后身体保持正直，脚跟轻轻向下顿地（震动感从脚底直传头顶）。最后做三次深呼吸收功。',
      keyPoint: '关键点：顿地时牙齿要轻轻咬合（防止震到舌头），力度适中，把全身气血震荡归位。'
    }
  ]
};

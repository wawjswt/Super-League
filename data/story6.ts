

import { StoryChapter } from './story';

export const STORY_DATA_PART_7: StoryChapter[] = [
  {
      id: 23,
      title: "Chapter XXIII: The Street Myth",
      intro: [
          "此时此刻，伦敦南岸（South Bank）已经被挤爆了。著名的“伦敦眼”被百事可乐的蓝色灯光点亮，泰晤士河畔搭建起了一座充满了赛博朋克风格的“铁笼球场” (The Pepsi Cage)。",
          "这是决赛前的最后狂欢。",
          "时间： 6月27日 19:00 (决赛前3天)",
          "活动： 《街头神话：谁是技巧之王？》",
          "直播平台： TikTok (竖屏第一视角) & YouTube (4K VR全景)",
          "在线人数： 突破 1.5 亿",
          "我是您的现场导播经理，现在为您切入直播信号！"
      ],
      sections: [
          {
              title: "🎥 直播开场：蓝色风暴",
              subtitle: "Live Stream Start",
              intro: [
                  "镜头穿过拥挤的人群，重低音 Hip-Hop 音乐震耳欲聋。百事可乐的罐子堆成了金字塔。"
              ],
              dialogues: [
                  {
                      speaker: "主持人组合",
                      colorClass: "text-blue-400",
                      text: "里奥·费迪南德 (Rio Ferdinand) 手持麦克风，戴着墨镜，旁边是 IShowSpeed（身穿印着 CR7 头像的衣服，正在对着镜头狂吠）。"
                  },
                  {
                      speaker: "费迪南德",
                      colorClass: "text-blue-500",
                      text: "“女士们先生们！温布利的决战还要等三天，但今晚，我们要解决一些私人恩怨！欢迎来到——街头神话！”"
                  }
              ]
          },
          {
              title: "🏆 第一关：【泰晤士河·上帝之弧】",
              subtitle: "The Thames Challenge",
              context: "规则：一艘挂着巨大靶心的快艇在泰晤士河上高速行驶。球员必须在岸边将球踢进靶心。",
              intro: ["选手：贝克汉姆 (绯红)、皮尔洛 (金耀)、梅西 (橙色)"],
              dialogues: [
                  {
                      speaker: "Round 1 - 安德烈亚·皮尔洛",
                      colorClass: "text-yellow-400",
                      text: "这位意大利大师手里甚至还拿着一杯百事（虽然他更想喝红酒）。他随意地摆腿，皮球划出一道落叶弧线。\n结果： 击中靶心边缘。8分。\n弹幕：“睡皮依然优雅！” “这不仅是足球，这是几何学。”"
                  },
                  {
                      speaker: "Round 2 - 大卫·贝克汉姆",
                      colorClass: "text-red-400",
                      text: "万人迷登场，尖叫声分贝爆表。他退后三步，身体大幅倾斜，那个标志性的圆月弯刀姿势！\n结果： 皮球带着剧烈的旋转，精准命中靶心红点！10分！\n费迪南德怒吼：“贝克斯！他还是那个金右脚！”"
                  },
                  {
                      speaker: "Round 3 - 莱昂内尔·梅西",
                      colorClass: "text-orange-400",
                      text: "梅西看起来有点害羞，他把球摆好。快艇突然加速了（据说是穆里尼奥在驾驶——开玩笑）。\n梅西左脚轻搓。球看起来软绵绵的，但在空中突然下坠。\n结果： 命中靶心正中央！10分！\nSpeed 狂喊：“Messi! Messi! Messi! 但罗纳尔多在哪？我要看罗纳尔多！”"
                  }
              ]
          },
          {
              title: "⚡ 第二关：【激光迷宫·花式过人】",
              subtitle: "The Laser Dribble",
              context: "规则：铁笼内布满红外线，触碰扣分。要在最短时间内运球通过。",
              intro: ["选手：罗纳尔迪尼奥 (橙色) vs 马拉多纳 (金耀)"],
              dialogues: [
                  {
                      speaker: "挑战者：小罗 (Ronaldinho)",
                      colorClass: "text-orange-500",
                      text: "音乐响起，是桑巴舞曲。小罗不是在跑，他是在跳舞。\n牛尾巴、插花脚、背部停球。他甚至用头顶着球穿过了红外线阵。\nTikTok 弹幕炸了：“这还是人类吗？” “他是快乐的化身！”\n成绩：25秒，0触碰。"
                  },
                  {
                      speaker: "挑战者：马拉多纳 (Maradona)",
                      colorClass: "text-yellow-500",
                      text: "老马一上场就对着红外线机器踢了一脚。\n他在过障碍时，用手偷偷拨开了一根光线（被高清摄像机抓拍）。\n裁判（光头科里纳客串）：吹哨警告！\n老马对着镜头摊手：“这是上帝的手指，不算违规！”\n全场爆笑。"
                  },
                  {
                      speaker: "胜者",
                      colorClass: "text-white",
                      text: "罗纳尔迪尼奥（毫无悬念的技巧之王）"
                  }
              ]
          },
          {
              title: "🔥 终极对决：【铁笼 3v3 死斗】",
              subtitle: "The Cage Match",
              context: "规则：先进3球者胜。无出界，无犯规。",
              intro: [
                  "这是今晚的重头戏。致敬经典的百事广告。",
                  "🔵 百事蓝队 (Team Blue): C.罗纳尔多 (C), 鲁尼, 卡卡",
                  "⚫ 百事黑队 (Team Black): 梅西 (C), 小罗, 加林查"
              ],
              dialogues: [
                  {
                      speaker: "开场",
                      colorClass: "text-slate-300",
                      text: "C罗眼神凶狠，仿佛这是欧冠决赛。他在综艺里也绝不想输给梅西。"
                  },
                  {
                      speaker: "1-0 (蓝队)",
                      colorClass: "text-blue-500",
                      text: "卡卡长途奔袭，分球给 C罗。C罗踩单车晃过加林查（加林查防守在看戏），爆射入网！\nC罗在铁笼里做出了 'Siuuuu!'，全场几万人一起合喊，声浪震动泰晤士河。"
                  },
                  {
                      speaker: "1-1 (黑队)",
                      colorClass: "text-slate-800",
                      text: "梅西 和 小罗 开始了二人转。两人连续撞墙配合，把球传进了球门。"
                  },
                  {
                      speaker: "1-2 (黑队)",
                      colorClass: "text-slate-800",
                      text: "加林查 突然发威，在底线附近把 鲁尼 晃倒了两次，传中给小罗倒钩破门。"
                  },
                  {
                      speaker: "2-2 (赛点时刻)",
                      colorClass: "text-blue-500",
                      text: "C罗急了。他脱掉了上衣（直播间流量瞬间暴涨 20%），露出完美的肌肉线条。\n鲁尼 铲断梅西，传给C罗。C罗带球撞开小罗，面对空门……但他没有射门！\n他把球回传给了插上的 卡卡。卡卡推射！2-2！\n费迪南德惊呼：“C罗传球了！为了胜利，他居然传球了！”"
                  },
                  {
                      speaker: "🌕 金球决胜",
                      colorClass: "text-yellow-400",
                      text: "双方僵持。最后时刻，贝利 (特邀嘉宾) 把一个金色的足球扔进了笼子：“谁进这个球，谁就是王！”\n六个人疯抢。\n最后，小罗 用一个极具想象力的挑球过顶，球落在了 C罗 和 梅西 中间。\n两人同时起跳争顶……"
                  },
                  {
                      speaker: "画面定格",
                      colorClass: "text-red-500",
                      text: "直播信号突然切断，屏幕上出现一行字：\n“想知道结果？6月30日，温布利见。”"
                  }
              ]
          },
          {
              title: "📈 活动总结报告",
              subtitle: "Social Media Impact",
              dialogues: [
                  {
                      speaker: "数据监控",
                      colorClass: "text-white",
                      table: {
                          headers: ["指标", "数据", "备注"],
                          rows: [
                              ["在线峰值", "1.8 亿", "打破历史记录"],
                              ["热搜话题", "#PepsiCageMatch", "全球第一"],
                              ["GIF传播", "C罗脱衣 & 小罗舞步", "病毒式传播"],
                              ["舆论风向", "期待值爆表", "为决赛完美预热"]
                          ]
                      }
                  },
                  {
                      speaker: "经理人笔记",
                      colorClass: "text-slate-300",
                      text: "这场活动成功地将那些被淘汰球队的粉丝重新拉回了关注中心。C罗和梅西的直接对话，让大家更加遗憾他们没能在决赛相遇，但也让大家对决赛（蔚蓝 vs 银河）中大罗 vs 亨利的对决更加期待，因为大家想看：‘到底谁能比这群人更强？’"
                  }
              ]
          }
      ]
  },
  {
      id: 24,
      title: "Chapter XXIV: The War Room",
      intro: [
          "现在是 2026年6月29日，晚 21:00。",
          "决赛前夜。",
          "伦敦碎片大厦（The Shard）顶层的演播厅。窗外是温布利大球场的灯光，窗内是 TNT Sports & Sky Sports 联合直播 的演播室。",
          "这里没有温情脉脉的商业互吹，只有带着血腥味的复盘和对决战的“恶毒”预测。空气中弥漫着昂贵的威士忌味道和火药味。",
          "节目名称： 《毒舌战争：温布利前夜》 (The War Room)",
          "在线收视率： 破纪录的 20 亿人次（全球同步）",
          "我是您的现场制片人。直播倒计时：3，2，1…… Action！"
      ],
      sections: [
          {
              title: "📺 开场：加里·莱因克尔的冷汗",
              subtitle: "The Opening",
              dialogues: [
                  {
                      speaker: "加里·莱因克尔 (主持人)",
                      colorClass: "text-slate-300",
                      text: "“晚上好！明天就是终局之战。\n但今晚，我们把四个最不甘心、最愤怒、但也最懂球的男人关在了一个屋子里。\n坐在我左边的是——刚刚在半决赛惜败的 弗格森爵士，以及他的‘打手’队长 罗伊·基恩。\n坐在我右边的是——在资格赛被弗格森淘汰的 何塞·穆里尼奥，以及常规赛被挤出局的 阿尔塞纳·温格。\n先生们，请收起你们的餐刀，我们只动口。”"
                  }
              ]
          },
          {
              title: "🗣️ 第一回合：关于“失败者的借口”",
              subtitle: "Round 1: Loser's Excuses",
              dialogues: [
                  {
                      speaker: "莱因克尔",
                      colorClass: "text-slate-300",
                      text: "“亚历克斯（弗格森），让我们从你开始。半决赛 3:4 输给齐达内的银河白昼。C罗上演了帽子戏法却还是输了。你现在服气吗？”"
                  },
                  {
                      speaker: "弗格森爵士",
                      colorClass: "text-red-500",
                      text: "“服气？我的字典里没有这个词。\n听着，齐达内那小子没有什么战术。他只有运气，还有一个作弊码——罗纳尔多 (R9)。\n如果再给我 5 分钟补时，我有信心贝克汉姆能助攻鲁尼扳平。那场比赛霍华德·韦伯（裁判）看表看早了。”",
                      action: "(抿了一口红酒，脸颊通红)"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“得了吧，爵士。你在资格赛赢我的时候，补时可是给足了。\n如果不是坎通纳那个运气球，现在坐在决赛席位上的就是我的黑曜石堡垒。我的大巴车连苍蝇都飞不进去，却漏了一个脚后跟。”",
                      action: "(冷笑，插嘴)"
                  },
                  {
                      speaker: "罗伊·基恩",
                      colorClass: "text-red-600",
                      text: "“何塞，闭嘴。输了就是输了。你的球队踢得像是在便秘。老特拉福德不需要你的大巴车，我们需要的是血性。坎通纳那个球不是运气，那是艺术——虽然我讨厌这个词。”",
                      action: "(瞪着穆里尼奥)"
                  }
              ]
          },
          {
              title: "🗣️ 第二回合：剖析瓜迪奥拉",
              subtitle: "Round 2: Analyzing Guardiola",
              context: "关于决赛队伍：蔚蓝控域 (Azure Control)",
              dialogues: [
                  {
                      speaker: "莱因克尔",
                      colorClass: "text-slate-300",
                      text: "“让我们谈谈决赛队伍。瓜迪奥拉的蔚蓝控域。温格先生，您一直很推崇他。”"
                  },
                  {
                      speaker: "温格",
                      colorClass: "text-red-400",
                      text: "“佩普把足球变成了一门科学。\n你们看他在半决赛对阵克鲁伊夫的调整。让拉莫斯（如果是他的话，哦不，是拉姆）内收，让亨利拉边。这不仅是控制，这是流动的建筑学。我认为他在战术层面是无敌的。”",
                      action: "(推眼镜，儒雅地分析)"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“建筑学？我只看到了催眠术。\n他传了 800 脚球，就是为了进一个球。这效率太低了。\n如果是我的球队打决赛，我只需要 3 脚传球，德罗巴就能解决问题。\n佩普的问题在于他想太多。明天决赛，我敢打赌他会整活。比如让埃德森踢后腰。等着瞧吧。”",
                      action: "(翻白眼，夸张地打哈欠)"
                  },
                  {
                      speaker: "弗格森",
                      colorClass: "text-red-500",
                      text: "“我不喜欢佩普的风格，太软了。\n但他手里有张王牌——哈兰德。那小子是头野兽。如果传控打不开局面，佩普会直接把球往禁区里砸。这招是从我这儿学的。”"
                  }
              ]
          },
          {
              title: "🗣️ 第三回合：剖析齐达内",
              subtitle: "Round 3: Analyzing Zidane",
              context: "关于决赛队伍：银河白昼 (White Galaxy)",
              dialogues: [
                  {
                      speaker: "莱因克尔",
                      colorClass: "text-slate-300",
                      text: "“那齐达内呢？大家都说他是‘玄学大师’。他的战术板上到底有什么？”"
                  },
                  {
                      speaker: "罗伊·基恩",
                      colorClass: "text-red-600",
                      text: "“什么都没有。我看了半决赛的录像。\n齐达内就在场边拍手，笑，然后换上大罗。\n这叫战术吗？这叫‘把球给那个胖子’（指R9）。\n但不得不说，那个胖子……真他妈强。我的队友费迪南德被他晃得像个傻子。”",
                      action: "(不屑)"
                  },
                  {
                      speaker: "温格",
                      colorClass: "text-red-400",
                      text: "“罗伊，粗鲁了。\n齐达内拥有的是一种‘更衣室的魔法’。你能想象让坎特、克罗斯、莫德里奇、大罗、姆巴佩这些人在一个队里不打架吗？\n安切洛蒂做到了，齐达内做得更好。他在用‘快乐’赢球。”"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“快乐个鬼。那是皇马的底蕴。\n这支银河白昼其实就是巅峰皇马的加强版。\n如果是我的黑曜石堡垒进了决赛，我会派马尔蒂尼和特里轮流踢大罗的脚踝。我不信他能快乐得起来。\n可惜，佩普的球队太绅士了，他们防不住大罗。”"
                  }
              ]
          },
          {
              title: "🗣️ 第四回合：C罗 vs 大罗",
              subtitle: "Round 4: The Ronaldo Debate",
              dialogues: [
                  {
                      speaker: "莱因克尔",
                      colorClass: "text-slate-300",
                      text: "“这也是一个敏感话题。C罗在半决赛帽子戏法却输给了梅开二度的大罗。谁才是更好的那个？”"
                  },
                  {
                      speaker: "弗格森",
                      colorClass: "text-red-500",
                      text: "“克里斯蒂亚诺。毫无疑问。\n他在逆境中的精神属性是天下第一。大罗是天赋，C罗是意志。\n如果这两人互换球队，C罗在银河白昼能进 50 个球。”",
                      action: "(护犊子模式开启)"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“得了吧。我是葡萄牙人，我也爱C罗。\n但R9？那是外星生物。\n你们没看数据吗？16场21球。\n在没有伤病的世界里，R9 就是上帝穿着球鞋下凡。明天的决赛，皮克和耶罗（蔚蓝后卫）会做噩梦的。”"
                  },
                  {
                      speaker: "温格",
                      colorClass: "text-red-400",
                      text: "“我同意何塞。大罗的钟摆过人是无解的物理题。蔚蓝控域的高位防线正是大罗最喜欢的猎场。”"
                  }
              ]
          },
          {
              title: "🔮 终局：毒奶预测",
              subtitle: "The Prediction",
              dialogues: [
                  {
                      speaker: "莱因克尔",
                      colorClass: "text-slate-300",
                      text: "“好了，先生们。我们要下播了。给出你们的最终比分预测。”"
                  },
                  {
                      speaker: "温格",
                      colorClass: "text-red-400",
                      text: "“蔚蓝控域 3:2 银河白昼。\n我想看亨利捧杯。而且，体系终将战胜个人。”"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“银河白昼 1:0 蔚蓝控域。\n齐达内会赢，不仅因为大罗，还因为佩普在决赛总是会‘自杀’。而且坎特会锁死德布劳内。”"
                  },
                  {
                      speaker: "罗伊·基恩",
                      colorClass: "text-red-600",
                      text: "“我不在乎谁赢。我希望他们踢点球大战，然后踢到第20轮。\n比分？2:2，然后大罗射失点球。”",
                      action: "(恶毒的诅咒)"
                  },
                  {
                      speaker: "弗格森",
                      colorClass: "text-red-500",
                      text: "“蔚蓝控域 4:3 银河白昼。\n我讨厌承认这一点，但瓜迪奥拉的球队更像一个整体。而且，为了给C罗复仇，我希望大罗输。曼联永远支持击败皇马的人。”"
                  }
              ]
          }
      ],
      outro: {
          speaker: "莱因克尔",
          lines: [
              "“听到了吗？这就是战争宣言！",
              "感谢四位‘失败者’（基恩差点扔杯子）的精彩点评。",
              "明天，温布利大球场。",
              "万神殿超级联赛 2.0 总决赛。",
              "Just Watch It.”"
          ],
          action: "(镜头拉远，穆里尼奥还在和温格争论坎特的防守范围，弗格森给C罗发短信，基恩正在瞪着摄像机。)"
      }
  }
];

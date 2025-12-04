

export interface StoryTable {
  headers: string[];
  rows: (string | number)[][];
}

export interface StoryDialogue {
  speaker: string;
  text?: string;
  table?: StoryTable;
  action?: string;
  colorClass: string; // Tailwind class for speaker name color
  customType?: 'bracket'; // New field to trigger custom components
}

export interface StorySection {
  title: string;
  subtitle?: string;
  context?: string; // Used for Q&A context
  intro?: string[]; // Stage directions before dialogue
  dialogues: StoryDialogue[];
}

export interface StoryChapter {
  id: number;
  title: string;
  intro?: string[]; // Scene setting
  managerSpeech?: {
    speaker: string;
    lines: string[];
  }; // Specific for the manager's opening/closing
  sections: StorySection[];
  outro?: {
    speaker?: string;
    lines: string[];
    action?: string;
  };
}

export const STORY_DATA: StoryChapter[] = [
  {
    id: 1,
    title: "Chapter I: The Introduction",
    intro: [
      "(现场灯光全暗，只有一束聚光灯打在舞台中央。背景音乐是低沉而宏大的管弦乐，那是万神殿超级联赛的主题曲《诸神的黄昏》。)",
      "(我作为联赛经理，身穿剪裁得体的黑色西装，从幕后大步走出，站在布满全球几百家媒体麦克风的演讲台前。)"
    ],
    managerSpeech: {
      speaker: "联赛经理",
      lines: [
        "“女士们，先生们，欢迎来到万神殿。",
        "有人说，足球是生与死的游戏。不，他们错了。在接下来的赛季里，足球高于生死。",
        "我们复活了历史，我们折叠了时间。这里没有弱旅，只有传奇。",
        "今晚，不是新闻发布会，这是向旧世界宣战的檄文。”"
      ]
    },
    sections: [
      {
        title: "I. 哲学的碰撞",
        subtitle: "(The Philosophers)",
        intro: [
          "(左侧通道走出了“橙色革命”的主帅约翰·克鲁伊夫，他嘴里叼着一根没点燃的棒棒糖，一脸傲气。跟在他身后的是莱昂内尔·梅西，低着头，神情羞涩但眼神坚定。)",
          "(右侧通道走出的是“蔚蓝控域”的主帅佩普·瓜迪奥拉，他一直在整理自己的领带，看起来有些神经质的紧张。而跟在他身后的队长……竟然是球员版的约翰·克鲁伊夫！)"
        ],
        dialogues: [
          {
            speaker: "教练克鲁伊夫 (橙色革命)",
            colorClass: "text-orange-400",
            text: "“佩普，你偷走了我的理念，现在还想用‘我’来击败我？很有趣。”",
            action: "(轻蔑一笑)"
          },
          {
            speaker: "佩普 (蔚蓝控域)",
            colorClass: "text-sky-400",
            text: "“约翰，你的理念是完美的，但我是来修补漏洞的。而且……我有最好的执行者。”",
            action: "(摸着光头，指着身后的球员克鲁伊夫)"
          },
          {
            speaker: "球员克鲁伊夫 (蔚蓝控域)",
            colorClass: "text-sky-200",
            text: "“老头子，别太固执，这赛季我会教你怎么跑位。”",
            action: "(耸耸肩)"
          },
          {
            speaker: "梅西 (橙色革命)",
            colorClass: "text-orange-200",
            text: "“我们用球说话。”",
            action: "(小声说)"
          }
        ]
      },
      {
        title: "II. 红与黑的世仇",
        subtitle: "(The Blood Feud)",
        intro: [
          "(沉重的脚步声。“绯红王朝”的弗格森爵士嚼着口香糖走了出来，气场强大。身后的队长罗伊·基恩眼神像要杀人，衣领竖起。另一侧，“优雅枪手”的温格教授儒雅地挥手，但笑容消失了。身后的队长帕特里克·维埃拉冷冷地盯着基恩。)",
          "(基恩和维埃拉在舞台中央擦肩而过，空气仿佛凝固了。)"
        ],
        dialogues: [
          {
            speaker: "弗格森 (绯红王朝)",
            colorClass: "text-red-500",
            text: "“阿尔塞纳，听说你买了贝利？希望他能在英式铲抢下活过90分钟。基恩会‘好好照顾’他的。”",
            action: "(指着温格)"
          },
          {
            speaker: "温格 (优雅枪手)",
            colorClass: "text-red-300",
            text: "“亚历克斯，野蛮人即使穿上西装也是野蛮人。维埃拉会保护艺术。还有，贝利不需要跑，球会找到他。”",
            action: "(推了推眼镜)"
          },
          {
            speaker: "罗伊·基恩 (绯红王朝)",
            colorClass: "text-red-400",
            text: "“隧道里见，帕特里克。”",
            action: "(低语)"
          },
          {
            speaker: "维埃拉 (优雅枪手)",
            colorClass: "text-red-200",
            text: "“随时奉陪。”",
            action: "(冷笑)"
          }
        ]
      },
      {
        title: "III. 矛盾之争",
        subtitle: "(The Shield and The Spear)",
        intro: [
          "(灯光变暗。“黑曜石堡垒”的穆里尼奥双手插兜，一脸“我是特殊的一个”。身后的队长马尔蒂尼如同雕塑般优雅。对面是“重金属风暴”的克洛普，大笑着给了杰拉德一个熊抱。)"
        ],
        dialogues: [
          {
            speaker: "穆里尼奥 (黑曜石堡垒)",
            colorClass: "text-blue-600",
            text: "“这屋子里有身价20亿的球队，但我只看到了恐惧。我不需要最贵的球员，我有保罗，我有上帝。其他人？只是在争第二名。”",
          },
          {
            speaker: "克洛普 (重金属风暴)",
            colorClass: "text-teal-500",
            text: "“哈哈哈哈！若泽，你的大巴车会被我的重金属摇滚震碎的！杰拉德会把你的中场冲得七零八落！Boom！就像那样！”",
          },
          {
            speaker: "马尔蒂尼 (黑曜石堡垒)",
            colorClass: "text-blue-400",
            text: "“防守是一门艺术，尤尔根先生。我们会让安菲尔德安静下来。”",
            action: "(整理袖口)"
          },
          {
            speaker: "杰拉德 (重金属风暴)",
            colorClass: "text-teal-300",
            text: "“那就试试看，保罗。”",
          }
        ]
      },
      {
        title: "IV. 王权与秩序",
        subtitle: "(The Royalty and The System)",
        intro: [
          "(“金耀王冠”的安切洛蒂极其松弛。身后的队长马拉多纳正在用脚颠着一个橘子。对面是“战术米兰”的萨基，带着墨镜，手拿战术板。队长巴雷西面无表情。)"
        ],
        dialogues: [
          {
            speaker: "萨基 (战术米兰)",
            colorClass: "text-red-600",
            text: "“卡洛，你曾经是我的球员。你知道个人英雄主义在完美的区域联防面前毫无意义。马拉多纳会被我们锁死在越位陷阱里。”",
          },
          {
            speaker: "安切洛蒂 (金耀王冠)",
            colorClass: "text-yellow-400",
            text: "“阿里戈，放松点。这就是为什么你总是压力那么大。我不需要教迭戈怎么踢球，我只需要给他一个球，然后坐在场边欣赏。”",
            action: "(嚼着口香糖)"
          },
          {
            speaker: "马拉多纳 (金耀王冠)",
            colorClass: "text-yellow-200",
            text: "“嘿，法兰哥，别那么严肃。足球是用来享受的。如果你想抓我，记得多带几个人。”",
            action: "(把橘子踢给巴雷西)"
          }
        ]
      },
      {
        title: "V. 玄学与铁幕",
        subtitle: "(The Magic and The Iron)",
        intro: [
          "(“银河白昼”的齐达内微笑着走来。队长布冯搭着他的肩膀。“铁幕军团”的埃雷拉神情严肃像个军官。身后的队长贝肯鲍尔昂首挺胸。)"
        ],
        dialogues: [
          {
            speaker: "埃雷拉 (铁幕军团)",
            colorClass: "text-indigo-400",
            text: "“我们不踢球，我们赢得战争。齐达内先生，你的‘玄学’在我的链式防守面前没有作用。1-0，这就是我需要的全部比分。”",
          },
          {
            speaker: "齐达内 (银河白昼)",
            colorClass: "text-white",
            text: "“是吗？但我有大罗。有些事情是战术解释不了的。而且……我们总能在决赛赢球。”",
            action: "(淡淡一笑)"
          },
          {
            speaker: "贝肯鲍尔 (铁幕军团)",
            colorClass: "text-indigo-200",
            text: "“我会清扫一切威胁。”",
          },
          {
            speaker: "布冯 (银河白昼)",
            colorClass: "text-slate-200",
            text: "“那我这赛季可能很清闲了。”",
          }
        ]
      }
    ],
    outro: {
        speaker: "联赛经理",
        lines: [
            "“各位记者朋友们，你们看到了吗？空气中弥漫的不是火药味，是历史燃烧的味道。”",
            "“这是足球的终局之战。”",
            "“没有剧本，没有重赛。第一轮对阵将在3天后打响。”",
            "“现在，我宣布：万神殿超级联赛 2.0，正式开幕！”"
        ],
        action: "(全场闪光灯疯狂闪烁，穆里尼奥翻了个白眼，马拉多纳对着镜头飞吻，基恩死死盯着维埃拉，克鲁伊夫和佩普还在争论空间问题……大幕落下。)"
    }
  },
  {
      id: 2,
      title: "Chapter II: The Epic Begins",
      intro: [
          "这不是足球，这是史诗。",
          "第一轮联赛刚刚结束，全球互联网的服务器都因为流量过载而崩溃了三次。我们在伊蒂哈德见证了父子相残的泪水，在老特拉福德听到了骨头碰撞的声音，在安菲尔德感受到了令人窒息的寂静。",
          "我是您的联赛经理，现在为您呈上万神殿超级联赛 2.0 (PSL 2.0) 第一轮的全景战报。"
      ],
      sections: [
          {
              title: "🏟️ 揭幕战：伊蒂哈德的雨夜",
              subtitle: "The Rain at Etihad",
              context: "蔚蓝控域 (Azure Control) 2 : 1 橙色革命 (Orange Revolution)",
              intro: ["场馆：伊蒂哈德球场 | 天气：小雨"],
              dialogues: [
                  {
                      speaker: "比赛纪实",
                      colorClass: "text-sky-400",
                      text: "比赛第80分钟，比分是 1:1。梅西 (橙色) 在上半场用一记标志性的内切弧线球为客队首开纪录，进球后他没有庆祝，只是深深地看了一眼场边的瓜迪奥拉。\n但下半场，佩普·瓜迪奥拉 做出了一个残忍的决定。他让 布斯克茨 和 拉姆 切断了梅西与哈维的所有联系。球权被 球员克鲁伊夫 (蔚蓝) 彻底掌控。\n第85分钟，最讽刺的一幕发生了。球员克鲁伊夫 在禁区前沿做了一个经典的“克鲁伊夫转身”，晃过了防守他的 科曼 (橙色)，然后送出了一脚手术刀般的直塞。\n亨利 (蔚蓝) 高速插上，推射死角！2:1！绝杀！"
                  },
                  {
                      speaker: "赛后声音",
                      colorClass: "text-orange-300",
                      text: "终场哨响，主帅瓜迪奥拉拥抱了球员克鲁伊夫，而主帅克鲁伊夫站在雨中，狠狠地把嘴里的棒棒糖嚼碎了。"
                  }
              ]
          },
          {
              title: "🏟️ 老特拉福德的角斗场",
              subtitle: "The Gladiator Pit",
              context: "绯红王朝 (Crimson Dynasty) 2 : 1 优雅枪手 (Elegant Cannons)",
              intro: ["战况：4张黄牌，1张红牌。"],
              dialogues: [
                  {
                      speaker: "比赛纪实",
                      colorClass: "text-red-500",
                      text: "这不是比赛，是战争。\n第10分钟，维埃拉 (优雅) 在中圈铲翻了 斯科尔斯，基恩 (绯红) 立刻冲上去推搡，双方队长顶牛，全场沸腾。\n贝利 (优雅) 展现了球王风采，他在第30分钟连过三人助攻 博格坎普 破门。温格在场边露出了微笑。\n但弗格森爵士只做了一件事：看表，嚼口香糖。\n第75分钟，贝克汉姆 右路起球，C罗 在空中停留了仿佛一个世纪，力压 图拉姆 头球轰炸扳平！\n进入伤停补时第94分钟（弗格森时间），替补登场的 鲁尼 满脸是血（眉骨撞破）地在混战中捅射破门！"
                  },
                  {
                      speaker: "赛后声音",
                      colorClass: "text-red-400",
                      text: "2:1！红魔逆转！温格愤怒地摔了水瓶，而弗格森只是整理了一下衣领。"
                  }
              ]
          },
          {
              title: "🏟️ 安菲尔德的沉默",
              subtitle: "Silence at Anfield",
              context: "重金属风暴 (Heavy Metal Storm) 0 : 1 黑曜石堡垒 (Obsidian Fortress)",
              intro: ["射门比 25 : 2"],
              dialogues: [
                  {
                      speaker: "比赛纪实",
                      colorClass: "text-blue-500",
                      text: "克洛普的球队像疯狗一样进攻。古利特 和 杰拉德 把穆里尼奥的禁区轰炸了整整89分钟。\n马尔蒂尼 (黑曜石) 今天是神。他贡献了8次解围，5次封堵。切赫 更是扑出了 萨拉赫 的单刀。\n第90分钟，全场唯一一次机会。斯内德 长传，德罗巴 用强壮的身体倚住 范戴克，转身，凌空抽射！\n球进了！全场唯一一次射正！"
                  },
                  {
                      speaker: "赛后声音",
                      colorClass: "text-blue-600",
                      text: "穆里尼奥在安菲尔德的草皮上狂奔滑跪，把手指放在嘴边，做出了“闭嘴”的手势。安菲尔德死一般寂静。"
                  }
              ]
          },
          {
              title: "🏟️ 圣西罗的棋局",
              subtitle: "The Chess Match",
              context: "战术米兰 (Tactical Milan) 1 : 1 铁幕军团 (The Iron Curtain)",
              intro: ["越位次数合计 15 次"],
              dialogues: [
                  {
                      speaker: "比赛纪实",
                      colorClass: "text-indigo-400",
                      text: "两位战术大师的窒息博弈。萨基的球队把防线提到了中圈，巴雷西 指挥着造越位陷阱，让 盖德·穆勒 (铁幕) 也是无可奈何。\n第55分钟，范巴斯滕 接 里杰卡尔德 传球，零度角抽射破门，打破僵局。\n但在第80分钟，贝肯鲍尔 (铁幕) 突然带球前插，既然传球过不去，他就自己带！“足球皇帝”连过两人，分球给 苏亚雷斯 (老)，后者远射扳平。\n1:1，双方握手言和，这是一场属于高智商的平局。"
                  }
              ]
          },
          {
              title: "🏟️ 伯纳乌的烟花",
              subtitle: "Fireworks at Bernabéu",
              context: "金耀王冠 (Golden Sovereign) 3 : 3 银河白昼 (White Galaxy)",
              intro: ["纯粹的天赋对轰"],
              dialogues: [
                  {
                      speaker: "比赛纪实",
                      colorClass: "text-yellow-400",
                      text: "安切洛蒂和齐达内根本没有布置防守战术。\n马拉多纳 梅开二度，其中一个是连过五人的神迹重现。卡卡 也是长途奔袭破门。\n银河那边，大罗 (R9) 和 姆巴佩 的速度让金耀的后卫 内斯塔 苦不堪言。大罗两球，姆巴佩一球。\n最后时刻，3:3。安切洛蒂和齐达内都在场边笑着鼓掌。这是献给球迷的礼物，防守？不存在的。"
                  }
              ]
          },
          {
              title: "📊 第一轮积分榜",
              subtitle: "League Table - Round 1",
              dialogues: [
                  {
                      speaker: "积分榜",
                      colorClass: "text-white",
                      table: {
                          headers: ["排名", "球队", "赛", "胜", "平", "负", "进", "失", "净胜", "积分", "状态"],
                          rows: [
                              [1, "蔚蓝控域", 1, 1, 0, 0, 2, 1, "+1", 3, "🔥"],
                              [2, "绯红王朝", 1, 1, 0, 0, 2, 1, "+1", 3, "🔥"],
                              [3, "黑曜石堡垒", 1, 1, 0, 0, 1, 0, "+1", 3, "🛡️"],
                              [4, "金耀王冠", 1, 0, 1, 0, 3, 3, "0", 1, "➖"],
                              [5, "银河白昼", 1, 0, 1, 0, 3, 3, "0", 1, "➖"],
                              [6, "战术米兰", 1, 0, 1, 0, 1, 1, "0", 1, "➖"],
                              [7, "铁幕军团", 1, 0, 1, 0, 1, 1, "0", 1, "➖"],
                              [8, "橙色革命", 1, 0, 0, 1, 1, 2, "-1", 0, "🔽"],
                              [9, "优雅枪手", 1, 0, 0, 1, 1, 2, "-1", 0, "🔽"],
                              [10, "重金属风暴", 1, 0, 0, 1, 0, 1, "-1", 0, "🔽"]
                          ]
                      }
                  }
              ]
          },
          {
              title: "👟 个人数据榜",
              subtitle: "Stats",
              dialogues: [
                  {
                      speaker: "射手榜 (Top Scorers)",
                      colorClass: "text-yellow-500",
                      table: {
                          headers: ["排名", "球员", "球队", "进球数"],
                          rows: [
                              [1, "马拉多纳", "金耀王冠", 2],
                              [1, "R9", "银河白昼", 2],
                              [3, "C罗", "绯红王朝", 1],
                              [3, "亨利", "蔚蓝控域", 1],
                              [3, "梅西", "橙色革命", 1],
                              [3, "德罗巴", "黑曜石堡垒", 1],
                              [3, "姆巴佩", "银河白昼", 1],
                              [3, "卡卡", "金耀王冠", 1]
                          ]
                      }
                  },
                  {
                      speaker: "助攻榜 (Top Assists)",
                      colorClass: "text-blue-400",
                      table: {
                          headers: ["排名", "球员", "球队", "助攻数"],
                          rows: [
                              [1, "球员克鲁伊夫", "蔚蓝控域", 1],
                              [1, "贝克汉姆", "绯红王朝", 1],
                              [1, "斯内德", "黑曜石堡垒", 1],
                              [1, "莫德里奇", "银河白昼", 1],
                              [1, "贝利", "优雅枪手", 1]
                          ]
                      }
                  }
              ]
          },
          {
              title: "🌟 本轮 MVP",
              subtitle: "Player of the Week",
              dialogues: [
                  {
                      speaker: "🏆 获奖者：保罗·马尔蒂尼 (黑曜石堡垒)",
                      colorClass: "text-blue-400",
                      text: "数据： 8次解围，5次封堵，100% 对抗成功率，0被过。\n颁奖词：“在安菲尔德的狂轰滥炸中，他不是一个人在防守，他是一座移动的叹息之墙。他让穆里尼奥的‘1:0主义’成为了可能。伟大的防守表演！”"
                  }
              ]
          }
      ],
      outro: {
          speaker: "联赛经理",
          lines: [
              "“老板，这就是疯狂的第一轮！”",
              "“穆里尼奥在更衣室开了香槟，弗格森在嘲笑温格，而瓜迪奥拉正在和球员克鲁伊夫复盘比赛录像。”"
          ]
      }
  },
  {
      id: 3,
      title: "Chapter III: The First Phase Recap",
      intro: [
          "时间飞逝！转眼间，万神殿超级联赛 2.0 的第一阶段（前6轮）已经结束。",
          "这四轮比赛如同过山车般刺激。我们见证了克洛普的绝地反击，见证了穆里尼奥的“大巴”被马拉多纳的神来之笔拆毁，也见证了齐达内那支看似“毫无战术”的银河战舰如何靠着纯粹的天赋登顶。",
          "以下是第3轮至第6轮的剧情回顾及阶段性总结报告。"
      ],
      sections: [
          {
              title: "📅 赛程回溯：混乱与秩序的博弈",
              subtitle: "Rounds 3-6 Recap",
              intro: ["从双红会的疯狗流到银河战舰的起飞，第一阶段充满了戏剧性。"],
              dialogues: [
                  {
                      speaker: "第 3 轮：双红会与疯狗 (The Red Derby)",
                      colorClass: "text-teal-500",
                      text: "【重金属风暴 (Klopp) 4 : 3 绯红王朝 (Ferguson)】\n剧情： 克洛普输急眼了。他在安菲尔德祭出了自杀式的高位逼抢。古利特和杰拉德像两头野兽一样冲垮了曼联（绯红）的中场。尽管C罗完成了梅开二度，但莱万多夫斯基在第95分钟（没错，在弗格森时间里）打入绝杀！克洛普眼镜都跑掉了。\n\n【其他焦点】： 蔚蓝控域 1:0 小胜 战术米兰（球员克鲁伊夫助攻亨利）。萨基的造越位战术被克鲁伊夫的直塞破解。"
                  },
                  {
                      speaker: "第 4 轮：上帝拆大巴 (God vs The Bus)",
                      colorClass: "text-yellow-400",
                      text: "【金耀王冠 (Ancelotti) 2 : 1 黑曜石堡垒 (Mourinho)】\n剧情： 穆里尼奥以为他的防线坚不可摧。直到第80分钟，马拉多纳在禁区前沿面对马克莱莱和特里的包夹，用一只脚完成了“世纪助攻”——挑传过顶。舍甫琴科凌空抽射破门。这是天赋对体系的降维打击。\n\n【其他焦点】： 橙色革命 3:0 大胜 铁幕军团。梅西把埃雷拉的链式防守突成了筛子，诺伊尔甚至压到了中圈。"
                  },
                  {
                      speaker: "第 5 轮：两个罗纳尔多 (The Battle of Ronaldos)",
                      colorClass: "text-red-500",
                      text: "【绯红王朝 (Ferguson) 3 : 2 银河白昼 (Zidane)】\n剧情： 本轮最大看点：C罗 (绯红) vs 大罗 (银河)。\n大罗在上半场利用爆发力生吃拉莫斯，打进两球。\n下半场，弗格森开启“吹风机模式”。C罗展现了恐怖的意志力，头球、点球、远射，上演帽子戏法逆转比赛！赛后两个罗纳尔多拥抱，画面成为了历史经典。"
                  },
                  {
                      speaker: "第 6 轮：齐祖的弑君 (Zidane vs Zidane)",
                      colorClass: "text-white",
                      text: "【银河白昼 (Zidane) 4 : 2 优雅枪手 (Wenger)】\n剧情： 这场比赛非常有趣，因为 球员齐达内 在温格的队里，而 教练齐达内 在指挥银河白昼。\n球员齐达内打进了一粒天外飞仙。但教练齐达内的球队太不讲理了——姆巴佩上演大四喜！温格的美丽足球在绝对的速度暴力美学面前显得有些脆弱。"
                  }
              ]
          },
          {
              title: "📊 积分榜 (League Table - Round 6)",
              subtitle: "First Phase Standings",
              intro: ["第一阶段结束，齐达内的“玄学”登顶，克鲁伊夫紧随其后！"],
              dialogues: [
                  {
                      speaker: "积分榜",
                      colorClass: "text-white",
                      table: {
                          headers: ["排名", "球队", "主帅", "赛", "胜", "平", "负", "进", "失", "净胜", "积分", "趋势"],
                          rows: [
                              [1, "银河白昼", "齐达内", 6, 4, 1, 1, 18, 10, "+8", 13, "👑"],
                              [2, "橙色革命", "克鲁伊夫", 6, 4, 0, 2, 16, 9, "+7", 12, "🔼"],
                              [3, "蔚蓝控域", "瓜迪奥拉", 6, 3, 2, 1, 9, 5, "+4", 11, "➖"],
                              [4, "黑曜石堡垒", "穆里尼奥", 6, 3, 1, 2, 6, 4, "+2", 10, "🛡️"],
                              [5, "绯红王朝", "弗格森", 6, 3, 0, 3, 11, 12, "-1", 9, "🔼"],
                              [6, "优雅枪手", "温格", 6, 2, 1, 3, 12, 14, "-2", 7, "🔽"],
                              [7, "铁幕军团", "埃雷拉", 6, 1, 3, 2, 4, 7, "-3", 6, "➖"],
                              [8, "金耀王冠", "安切洛蒂", 6, 1, 2, 3, 10, 14, "-4", 5, "🆘"],
                              [9, "重金属风暴", "克洛普", 6, 1, 1, 4, 9, 15, "-6", 4, "🆘"],
                              [10, "战术米兰", "萨基", 6, 0, 3, 3, 4, 9, "-5", 3, "☠️"]
                          ]
                      }
                  },
                  {
                      speaker: "经理人点评",
                      colorClass: "text-slate-300",
                      text: "战术米兰的崩盘： 萨基的区域造越位战术在面对拥有梅西、大罗、贝利这种“单点爆破”能力的联赛里完全失效。\n银河战舰起飞： 齐达内证明了“最贵的往往是最贵的道理”。大罗和姆巴佩的组合至今无人能解。"
                  }
              ]
          },
          {
              title: "👟 个人数据榜 (Stats)",
              subtitle: "Golden Boot & Assists",
              dialogues: [
                  {
                      speaker: "👟 射手榜 (Golden Boot)",
                      colorClass: "text-yellow-500",
                      table: {
                          headers: ["排名", "球员", "球队", "进球数", "简评"],
                          rows: [
                              [1, "罗纳尔多 (R9)", "银河白昼", 9, "场均1.5球，膝盖无恙"],
                              [2, "C.罗纳尔多", "绯红王朝", 7, "第5轮的帽子戏法"],
                              [3, "姆巴佩", "银河白昼", 7, "银河双核"],
                              [4, "梅西", "橙色革命", 6, "射手兼大脑"],
                              [5, "贝利", "优雅枪手", 5, "老当益壮"],
                              [6, "马拉多纳", "金耀王冠", 4, "享受助攻"]
                          ]
                      }
                  },
                  {
                      speaker: "🎯 助攻榜 (Assist King)",
                      colorClass: "text-blue-400",
                      table: {
                          headers: ["排名", "球员", "球队", "助攻数", "简评"],
                          rows: [
                              [1, "梅西", "橙色革命", 5, "真正的双能卫"],
                              [2, "球员克鲁伊夫", "蔚蓝控域", 5, "体系绝对核心"],
                              [3, "马拉多纳", "金耀王冠", 4, "上帝的视角"],
                              [4, "莫德里奇", "银河白昼", 4, "喂饼大罗"],
                              [5, "贝克汉姆", "绯红王朝", 4, "圆月弯刀"]
                          ]
                      }
                  }
              ]
          },
          {
              title: "🌟 第一阶段 MVP (Player of the Phase)",
              subtitle: "The Chosen One",
              dialogues: [
                  {
                      speaker: "🏆 获奖者：罗纳尔多 (R9) - 银河白昼",
                      colorClass: "text-white",
                      text: "数据： 6场比赛，9个进球，2次助攻。\n\n评语：\n“在这个众神云集的联赛里，只有一个‘外星人’。当拥有健康身体的大罗遇上齐达内的‘快乐足球’体系，他就是无解的物理公式。任何战术在他面前都显得苍白无力。”"
                  }
              ]
          }
      ]
  },
  {
      id: 4,
      title: "Chapter IV: Christmas Special",
      intro: [
          "12月23日，随着第6轮比赛结束哨声吹响，万神殿超级联赛 2.0 暂时按下了暂停键。虽然积分榜上硝烟弥漫，但在圣诞节这一周，战术板被收起，取而代之的是火鸡、红酒、家庭聚会……以及一些只有这些偏执狂教练才能干得出来的“圣诞特辑”。",
          "作为您的经理，我收集了各大豪门在圣诞假期发生的6个独家幕后故事。请您过目，这绝对比比赛本身还有趣。"
      ],
      sections: [
          {
              title: "🎄 故事一：齐达内的“玄学”派对",
              subtitle: "Zidane's Metaphysics Party",
              context: "主角：银河白昼 (White Galaxy) | 地点：迪拜豪华游艇",
              intro: [
                  "当其他球队还在苦练体能时，榜首球队银河白昼全队飞往了迪拜。",
                  "甲板上，罗纳尔多 (R9) 穿着花衬衫，手里拿着一块巨大的意大利圣诞面包（Panettone），正在和 本泽马 比赛谁吃得快。姆巴佩 则戴着墨镜，躺在躺椅上晒日光浴。"
              ],
              dialogues: [
                  {
                      speaker: "助攻教练",
                      colorClass: "text-slate-400",
                      text: "“齐祖，我们下一轮要打穆里尼奥，真的不需要安排一次训练吗？大罗已经吃了第三块面包了。”",
                      action: "(担心地问)"
                  },
                  {
                      speaker: "齐达内",
                      colorClass: "text-white",
                      text: "“让他吃。他开心了，球就能进。如果他不开心，我让他跑一万米也没用。”",
                      action: "(微微一笑，看着正在狂笑的大罗)"
                  },
                  {
                      speaker: "场景描述",
                      colorClass: "text-slate-500",
                      text: "就在这时，大罗把一块面包扔向了 坎特，坎特敏捷地接住并羞涩地笑了。"
                  },
                  {
                      speaker: "齐达内",
                      colorClass: "text-white",
                      text: "“你看，坎特的反应速度还在。这就够了。圣诞快乐。”",
                      action: "(指了指那一幕)"
                  }
              ]
          },
          {
              title: "🎄 故事二：佩普的“餐桌战术课”",
              subtitle: "Pep's Dinner Tactics",
              context: "主角：蔚蓝控域 (Azure Control) | 地点：曼彻斯特豪宅",
              intro: [
                  "这是一场尴尬的圣诞晚宴。瓜迪奥拉 邀请了球队核心 球员克鲁伊夫、哈维 和 伊涅斯塔 来家里做客。",
                  "餐桌上摆满了美食，但没人敢动筷子。因为佩普正在用胡椒瓶、盐罐和酱汁瓶摆阵型。"
              ],
              dialogues: [
                  {
                      speaker: "佩普·瓜迪奥拉",
                      colorClass: "text-sky-400",
                      text: "“听着，约翰（球员克鲁伊夫），当梅西内切的时候，你不能站在这个‘酱汁’的位置，你得移动到‘叉子’这里！这就是‘半空间’（Half-space）！”",
                      action: "(拿着一个盐罐疯狂地移动)"
                  },
                  {
                      speaker: "球员克鲁伊夫",
                      colorClass: "text-sky-200",
                      text: "“佩普，今天是圣诞节。而且那个盐罐是我的汤，不是后卫。”",
                      action: "(无奈地翻了个白眼，试图拿一根烟被佩普夺走)"
                  },
                  {
                      speaker: "佩普·瓜迪奥拉",
                      colorClass: "text-sky-400",
                      text: "“等等……如果把后卫看作是流动的汤……这也许是个新战术……”",
                      action: "(突然陷入了沉思)"
                  },
                  {
                      speaker: "伊涅斯塔",
                      colorClass: "text-sky-300",
                      text: "“我早说了别来，他连切火鸡都要计算切割角度。”",
                      action: "(小声对哈维说)"
                  }
              ]
          },
          {
              title: "🎄 故事三：穆里尼奥的“黑色圣诞礼物”",
              subtitle: "Mourinho's Black Christmas Gift",
              context: "主角：黑曜石堡垒 (Obsidian Fortress) | 地点：科巴姆封闭会议室",
              intro: [
                  "没有假期。穆里尼奥把全队关在会议室里，窗帘拉得严严实实。"
              ],
              dialogues: [
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“我不给你们放假，是因为外面的人都想看我们要死。但我是个好人，我有礼物给你们。”",
                      action: "(穿着黑色风衣，开始分发礼盒)"
                  },
                  {
                      speaker: "特里",
                      colorClass: "text-blue-300",
                      text: "（打开盒子，里面是一块砖头）",
                      action: "(疑惑)"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“约翰，这是你的礼物。我要你做这块砖头。下一场比赛，我不允许任何东西穿过你。”"
                  },
                  {
                      speaker: "德罗巴",
                      colorClass: "text-blue-300",
                      text: "（打开盒子，里面是一个坦克模型）"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“迪迪埃，碾碎他们。”"
                  },
                  {
                      speaker: "马尔蒂尼",
                      colorClass: "text-blue-300",
                      text: "（打开盒子，里面是一瓶1985年的红酒）"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "“保罗，你像这瓶酒。越老越贵，越老越狠。圣诞快乐，现在全体都有，出去跑10公里。”",
                      action: "(表情终于柔和了一些)"
                  }
              ]
          },
          {
              title: "🎄 故事四：萨基的“幽灵训练”",
              subtitle: "Sacchi's Ghost Training",
              context: "主角：战术米兰 (Tactical Milan) | 地点：米兰内洛，浓雾",
              intro: [
                  "战术米兰目前垫底，萨基 已经处于崩溃边缘。",
                  "圣诞节清晨5点，全队被哨声叫醒。雾大得伸手不见五指。"
              ],
              dialogues: [
                  {
                      speaker: "范巴斯滕",
                      colorClass: "text-red-300",
                      text: "“教练，我们要练射门吗？”",
                      action: "(睡眼惺忪)"
                  },
                  {
                      speaker: "萨基",
                      colorClass: "text-red-600",
                      text: "“不，那是庸俗的人才练的东西。今天我们练‘影子足球’。没有球。你们要在脑子里想象球的位置。”",
                      action: "(拿着扩音器)"
                  },
                  {
                      speaker: "恐怖一幕",
                      colorClass: "text-slate-400",
                      text: "路过米兰内洛的球迷看到了恐怖的一幕：11个大男人在浓雾中整齐划一地左右移动，对着空气铲球，对着空气争顶。"
                  },
                  {
                      speaker: "巴雷西",
                      colorClass: "text-red-400",
                      text: "“造越位！现在！”",
                      action: "(对着空气大喊)"
                  },
                  {
                      speaker: "萨基",
                      colorClass: "text-red-600",
                      text: "“完美。那个‘看不见的球’今天一次都没过半场。”",
                      action: "(三个小时后，满意地点头)"
                  }
              ]
          },
          {
              title: "🎄 故事五：弗格森的“父爱与吹风机”",
              subtitle: "Father's Love & The Hairdryer",
              context: "主角：绯红王朝 (Crimson Dynasty) | 地点：弗格森家中",
              intro: [
                  "C罗 是唯一一个没有回家的球员，因为他坚持在圣诞节加练。",
                  "弗格森爵士开着车，亲自去训练基地把正在做第500个卷腹的C罗“抓”回了家。"
              ],
              dialogues: [
                  {
                      speaker: "弗格森爵士",
                      colorClass: "text-red-500",
                      text: "“听着，孩子。今天是圣诞节。如果你不把这块布丁吃了，我就打开吹风机，对着你的脸喷十分钟。”",
                      action: "(系着围裙，看着C罗盘子里的水煮鸡胸肉)"
                  },
                  {
                      speaker: "C.罗纳尔多",
                      colorClass: "text-red-300",
                      text: "“可是Boss，糖分会影响……”"
                  },
                  {
                      speaker: "弗格森爵士",
                      colorClass: "text-red-500",
                      text: "“吃！”",
                      action: "(吼道)"
                  },
                  {
                      speaker: "场景描述",
                      colorClass: "text-slate-400",
                      text: "C罗乖乖吃了。弗格森露出了慈父般的笑容，拍了拍C罗的头。"
                  },
                  {
                      speaker: "弗格森爵士",
                      colorClass: "text-red-500",
                      text: "“这就对了。上一轮你帽子戏法救了我的命。在这个家里，你是我的骄傲。但如果下一场你跑动偷懒，我会杀了你。”"
                  },
                  {
                      speaker: "C.罗纳尔多",
                      colorClass: "text-red-300",
                      text: "“我知道，Boss。”",
                      action: "(笑了，嘴边还沾着布丁)"
                  }
              ]
          },
          {
              title: "🎄 故事六：克洛普的“圣诞老人特种部队”",
              subtitle: "Klopp's Santa Special Forces",
              context: "主角：重金属风暴 (Heavy Metal Storm) | 地点：安菲尔德更衣室",
              intro: [
                  "球队两连败，积分榜倒数第二。气氛很压抑。",
                  "突然，更衣室大门被踹开。克洛普 穿着全套圣诞老人服装（甚至粘了大胡子）冲了进来，背上背着一个巨大的麻袋。"
              ],
              dialogues: [
                  {
                      speaker: "克洛普",
                      colorClass: "text-teal-500",
                      text: "“HO! HO! HO! 摇滚乐团的混蛋们！圣诞老人来了！”",
                      action: "(发出震耳欲聋的笑声)"
                  },
                  {
                      speaker: "场景描述",
                      colorClass: "text-slate-400",
                      text: "古利特 和 杰拉德 面面相觑。克洛普把麻袋往地上一倒，里面全是……负重背心。"
                  },
                  {
                      speaker: "克洛普",
                      colorClass: "text-teal-500",
                      text: "“这就是你们的礼物！摘下胡子，露出标志性的狰狞笑容。我们要去阿尔卑斯山特训三天！没有火鸡，只有缺氧！我们要把失去的分数抢回来！谁是第一个？”"
                  },
                  {
                      speaker: "杰拉德",
                      colorClass: "text-teal-300",
                      text: "“我是队长，我先来。”",
                      action: "(二话不说，穿上了最重的一件)"
                  },
                  {
                      speaker: "古利特",
                      colorClass: "text-teal-400",
                      text: "“这真是最‘重金属’的圣诞节。”",
                      action: "(叹了口气，也穿上一件)"
                  },
                  {
                      speaker: "克洛普",
                      colorClass: "text-teal-500",
                      text: "“跑起来！像被驯鹿追杀一样跑起来！”",
                      action: "(五分钟后，在后面大喊)"
                  }
              ]
          }
      ],
      outro: {
          speaker: "联赛经理",
          lines: [
              "“老板，这就是各队的圣诞百态。”",
              "“有人在享受，有人在折磨，有人在思考人生。但有一点是肯定的：”",
              "“当新年钟声敲响，第7轮联赛开始时，这群人会比之前更加可怕。”"
          ]
      }
  }
];

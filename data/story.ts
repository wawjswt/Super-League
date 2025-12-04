
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
    title: "Chapter II: The Crossfire",
    sections: [
      {
        title: "I. 关于“弑父”与“背叛”",
        subtitle: "(Patricide & Betrayal)",
        context: "《泰晤士报》 Henry Winter → 佩普·瓜迪奥拉 & 约翰·克鲁伊夫",
        intro: [
            "记者：“瓜迪奥拉先生，您一直称克鲁伊夫为您的导师。但在这次选秀中，您不仅抢走了他作为球员的‘本体’，还将在第一轮直接面对他执教的球队。这是不是一种战术上的‘弑父’行为？另外，克鲁伊夫先生，看着年轻的自己为别人踢球，您是什么感觉？”"
        ],
        dialogues: [
          {
            speaker: "佩普·瓜迪奥拉",
            colorClass: "text-sky-400",
            text: "“这不叫‘弑父’，亨利。这是致敬。为了击败约翰的‘全攻全守’，我需要那个世界上最懂空间的球员——那就是他自己。这很逻辑，不是吗？我比任何人都爱他，但在场上，我会摧毁他的球队。”",
            action: "(紧张地抓了抓头皮，喝了一口水)"
          },
          {
            speaker: "约翰·克鲁伊夫 (主教练)",
            colorClass: "text-orange-400",
            text: "“佩普，你总是想太多。你拥有了我的‘身体’，但你拥有不了我的‘灵魂’。我的灵魂现在在梅西身上。至于看着我自己为别人踢球？呵，我只希望那个年轻的小子别丢我的脸，如果他跑动距离少于10公里，赛后我会亲自去更衣室骂他。”",
            action: "(冷笑一声，拿出口里的棒棒糖指着佩普)"
          },
          {
            speaker: "球员克鲁伊夫",
            colorClass: "text-sky-200",
            text: "“老头子，省省吧。佩普的战术比你的更先进。”",
            action: "(插嘴)"
          }
        ]
      },
      {
        title: "II. 关于“暴力”与“艺术”",
        subtitle: "(Violence & Art)",
        context: "《太阳报》 → 弗格森爵士 & 温格",
        intro: [
            "记者：“弗格森爵士，温格先生刚刚说他的球队是‘艺术品’。但我们看到您的队长是罗伊·基恩，而且您选了拉莫斯。外界评论说您的球队更像是一个‘黑帮团伙’。您打算在比赛中把温格的‘艺术品’踢碎吗？”"
        ],
        dialogues: [
          {
            speaker: "弗格森爵士",
            colorClass: "text-red-500",
            text: "“典型的《太阳报》垃圾问题。听着，小子。足球是男人的运动。如果有人想在老特拉福德拉小提琴，基恩会告诉他这里是歌剧院还是屠宰场。我们不踢人，我们踢球——只不过有时候人也是球的一部分。”",
            action: "(脸色瞬间涨红，身体前倾)"
          },
          {
            speaker: "温格",
            colorClass: "text-red-300",
            text: "“暴力是无能者的避难所。亚历克斯，你可以试图踢碎我们，但你踢不到影子。贝利和亨利的速度会让你们的铲球看起来像是在给草坪松土。”",
            action: "(优雅地微笑，但眼神锐利)"
          },
          {
            speaker: "罗伊·基恩",
            colorClass: "text-red-400",
            text: "“甚至不用等到比赛开始。球员通道里见。”",
            action: "(对着话筒冷冷地说了一句)"
          }
        ]
      },
      {
        title: "III. 关于“过时”与“特殊”",
        subtitle: "(Outdated & Special)",
        context: "《米兰体育报》 → 穆里尼奥",
        intro: [
            "记者：“何塞，很多人说您的‘摆大巴’战术在2026年已经过时了。面对拥有梅西、大罗、马拉多纳的超级攻击线，您的防守还能守住吗？”"
        ],
        dialogues: [
          {
            speaker: "穆里尼奥",
            colorClass: "text-blue-600",
            text: "“过时？你知道这是什么吗？这是三个字：R-E-S-P-E-C-T（尊重）。他们有梅西，有大罗，那又怎样？我有马尔蒂尼，我有马克莱莱，我有特里。他们想踢出 5-4 的比分来取悦观众，我想赢 1-0 拿冠军。这世界上只有两种教练：一种是被解雇的，一种是穆里尼奥。等赛季结束，你们会排队来向我道歉。”",
            action: "(做出一个夸张的嘲讽表情，伸出三根手指)"
          }
        ]
      },
      {
        title: "IV. 关于“玄学”与“银河战舰”",
        subtitle: "(Metaphysics & Galacticos)",
        context: "《马卡报》 → 齐达内",
        intro: [
            "记者：“齐祖，您的球队身价高达29亿欧元。但很多专家批评说，您的战术板上只有‘把球给大罗’或者‘把球给姆巴佩’。您真的只靠球星个人能力吗？”"
        ],
        dialogues: [
          {
            speaker: "齐达内",
            colorClass: "text-white",
            text: "“战术？什么战术？如果你的前锋是大罗和姆巴佩，中场是莫德里奇和克罗斯，你告诉我要教他们怎么踢球？我的工作不是画箭头，我的工作是让他们开心。如果大罗开心了，我就赢了。如果姆巴佩开心了，我们就夺冠了。这很简单，不是吗？”",
            action: "(标志性的羞涩微笑，摸了摸光头)"
          },
          {
            speaker: "大罗 (R9)",
            colorClass: "text-white",
            text: "“齐祖说得对，只要给我球，我就搞定一切。”",
            action: "(大笑)"
          }
        ]
      },
      {
        title: "V. 关于“球王之争”",
        subtitle: "(The G.O.A.T Debate)",
        context: "阿根廷 TyC Sports → 马拉多纳 & 梅西",
        intro: [
            "记者：“这是历史性的一刻。迭戈，里奥，你们终于在同一个联赛了，却是对手。谁才是真正的历史最佳（G.O.A.T）？”"
        ],
        dialogues: [
          {
            speaker: "马拉多纳",
            colorClass: "text-yellow-400",
            text: "“听着！我和里奥不是敌人，我们是阿根廷的血液！但是……里奥，虽然我也爱你，但在这个联赛里，我是老大（El Diego）。安切洛蒂这老头不错，他不管我，我甚至可以抽着雪茄踢球。但你那个荷兰教练管得太宽了，你会累坏的。”",
            action: "(抢过话筒，站了起来)"
          },
          {
            speaker: "梅西",
            colorClass: "text-orange-200",
            text: "“迭戈永远是偶像。但克鲁伊夫先生教会了我如何用脑子踢球。在这个体系里，我感觉……我无所不能。球场上见吧，迭戈。”",
            action: "(害羞地挠挠头，凑近麦克风)"
          }
        ]
      },
      {
        title: "VI. 关于“重金属”",
        subtitle: "(Heavy Metal)",
        context: "德国《图片报》 → 克洛普",
        intro: [
            "记者：“尤尔根，有人说这不叫足球，这叫田径队。您怎么回应？”"
        ],
        dialogues: [
          {
            speaker: "克洛普",
            colorClass: "text-teal-500",
            text: "“田径队？哈哈哈哈！如果田径队能把球踢进网窝，那我就是田径教练！我们要跑，要抢，要战斗！我们要让对手喘不过气来！这就是重金属！我们会把安菲尔德变成地狱。那些优雅的球队，最好多带一副护腿板，因为我们会像暴风雨一样冲垮他们！Boom！”",
            action: "(拍着桌子大笑)"
          }
        ]
      }
    ],
    outro: {
        speaker: "联赛经理",
        lines: [
            "“好了！今天的提问环节到此结束！各位，正如你们所见，这不仅仅是足球，这是战争。”",
            "“三天后，第一轮联赛，我们球场见！”"
        ],
        action: "(保安迅速冲上台，将几位试图互相“交流”的主教练隔开。现场一片混乱与狂热。)"
    }
  },
  {
      id: 3,
      title: "Chapter III: Round 1 Report",
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
              intro: [
                  "场馆：伊蒂哈德球场\n天气：小雨 (Perfect for sliding passes)"
              ],
              dialogues: [
                  {
                      speaker: "赛场故事",
                      colorClass: "text-sky-400",
                      text: "比赛第80分钟，比分是 1:1。\n梅西 (橙色) 在上半场用一记标志性的内切弧线球为客队首开纪录，进球后他没有庆祝，只是深深地看了一眼场边的瓜迪奥拉。\n但下半场，佩普·瓜迪奥拉做出了一个残忍的决定。他让布斯克茨和拉姆切断了梅西与哈维的所有联系。球权被球员克鲁伊夫 (蔚蓝) 彻底掌控。\n第85分钟，最讽刺的一幕发生了。球员克鲁伊夫在禁区前沿做了一个经典的“克鲁伊夫转身”，晃过了防守他的科曼 (橙色)，然后送出了一脚手术刀般的直塞。\n亨利 (蔚蓝) 高速插上，推射死角！\n2:1！绝杀！\n终场哨响，主帅瓜迪奥拉拥抱了球员克鲁伊夫，而主帅克鲁伊夫站在雨中，狠狠地把嘴里的棒棒糖嚼碎了。"
                  }
              ]
          },
          {
              title: "🏟️ 老特拉福德的角斗场",
              subtitle: "The Gladiator Pit",
              context: "绯红王朝 (Crimson Dynasty) 2 : 1 优雅枪手 (Elegant Cannons)",
              intro: [
                  "场馆：老特拉福德\n战况：4张黄牌，1张红牌。"
              ],
              dialogues: [
                  {
                      speaker: "赛场故事",
                      colorClass: "text-red-500",
                      text: "这不是比赛，是战争。\n第10分钟，维埃拉 (优雅) 在中圈铲翻了斯科尔斯，基恩 (绯红) 立刻冲上去推搡，双方队长顶牛，全场沸腾。\n贝利 (优雅) 展现了球王风采，他在第30分钟连过三人助攻博格坎普破门。温格在场边露出了微笑。\n但弗格森爵士只做了一件事：看表，嚼口香糖。\n第75分钟，贝克汉姆右路起球，C罗在空中停留了仿佛一个世纪，力压图拉姆头球轰炸扳平！\n进入伤停补时第94分钟（弗格森时间），替补登场的鲁尼满脸是血（眉骨撞破）地在混战中捅射破门！\n2:1！红魔逆转！温格愤怒地摔了水瓶，而弗格森只是整理了一下衣领。"
                  }
              ]
          },
          {
              title: "🏟️ 安菲尔德的沉默",
              subtitle: "Silence at Anfield",
              context: "重金属风暴 (Heavy Metal Storm) 0 : 1 黑曜石堡垒 (Obsidian Fortress)",
              intro: [
                  "场馆：安菲尔德\n战况：射门比 25 : 2。"
              ],
              dialogues: [
                  {
                      speaker: "赛场故事",
                      colorClass: "text-blue-500",
                      text: "克洛普的球队像疯狗一样进攻。古利特和杰拉德把穆里尼奥的禁区轰炸了整整89分钟。\n马尔蒂尼 (黑曜石) 今天是神。他贡献了8次解围，5次封堵。切赫更是扑出了萨拉赫的单刀。\n第90分钟，全场被动的黑曜石堡垒获得了一次反击机会。\n斯内德长传，德罗巴用强壮的身体倚住范戴克，转身，凌空抽射！\n球进了！全场唯一一次射正！\n穆里尼奥在安菲尔德的草皮上狂奔滑跪，把手指放在嘴边，做出了“闭嘴”的手势。安菲尔德死一般寂静。"
                  }
              ]
          },
          {
              title: "🏟️ 圣西罗的棋局",
              subtitle: "The Chess Match",
              context: "战术米兰 (Tactical Milan) 1 : 1 铁幕军团 (The Iron Curtain)",
              intro: [
                  "场馆：圣西罗\n战况：越位次数合计 15 次。"
              ],
              dialogues: [
                  {
                      speaker: "赛场故事",
                      colorClass: "text-indigo-400",
                      text: "两位战术大师的窒息博弈。\n萨基的球队把防线提到了中圈，巴雷西指挥着造越位陷阱，让盖德·穆勒 (铁幕) 也是无可奈何。\n第55分钟，范巴斯滕接里杰卡尔德传球，零度角抽射破门，打破僵局。\n但在第80分钟，贝肯鲍尔 (铁幕) 突然带球前插，既然传球过不去，他就自己带！“足球皇帝”连过两人，分球给苏亚雷斯 (老)，后者远射扳平。\n1:1，双方握手言和，这是一场属于高智商的平局。"
                  }
              ]
          },
          {
              title: "🏟️ 伯纳乌的烟花",
              subtitle: "Fireworks at Bernabéu",
              context: "金耀王冠 (Golden Sovereign) 3 : 3 银河白昼 (White Galaxy)",
              intro: [
                  "场馆：圣地亚哥·伯纳乌\n战况：纯粹的天赋对轰。"
              ],
              dialogues: [
                  {
                      speaker: "赛场故事",
                      colorClass: "text-yellow-400",
                      text: "安切洛蒂和齐达内根本没有布置防守战术。\n马拉多纳梅开二度，其中一个是连过五人的神迹重现。卡卡也是长途奔袭破门。\n银河那边，大罗 (R9) 和姆巴佩的速度让金耀的后卫内斯塔苦不堪言。大罗两球，姆巴佩一球。\n最后时刻，3:3。安切洛蒂和齐达内都在场边笑着鼓掌。这是献给球迷的礼物，防守？不存在的。"
                  }
              ]
          },
          {
              title: "📊 第一轮积分榜",
              subtitle: "League Table - Round 1",
              intro: [],
              dialogues: [
                  {
                      speaker: "积分榜",
                      colorClass: "text-white",
                      text: "",
                      table: {
                          headers: ["排名", "球队", "赛", "胜", "平", "负", "净胜", "积分", "状态"],
                          rows: [
                              [1, "蔚蓝控域 (Guardiola)", 1, 1, 0, 0, "+1", 3, "🔥"],
                              [2, "绯红王朝 (Ferguson)", 1, 1, 0, 0, "+1", 3, "🔥"],
                              [3, "黑曜石堡垒 (Mourinho)", 1, 1, 0, 0, "+1", 3, "🛡️"],
                              [4, "金耀王冠 (Ancelotti)", 1, 0, 1, 0, "0", 1, "➖"],
                              [5, "银河白昼 (Zidane)", 1, 0, 1, 0, "0", 1, "➖"],
                              [6, "战术米兰 (Sacchi)", 1, 0, 1, 0, "0", 1, "➖"],
                              [7, "铁幕军团 (Herrera)", 1, 0, 1, 0, "0", 1, "➖"],
                              [8, "橙色革命 (Cruyff)", 1, 0, 0, 1, "-1", 0, "🔽"],
                              [9, "优雅枪手 (Wenger)", 1, 0, 0, 1, "-1", 0, "🔽"],
                              [10, "重金属风暴 (Klopp)", 1, 0, 0, 1, "-1", 0, "🔽"]
                          ]
                      }
                  },
                  {
                      speaker: "👟 射手榜 (Top Scorers)",
                      colorClass: "text-yellow-500",
                      text: "1. 马拉多纳 (2球)\n1. 罗纳尔多 R9 (2球)\n3. C.罗纳尔多, 亨利, 梅西, 德罗巴, 姆巴佩, 卡卡 (各1球)"
                  },
                  {
                      speaker: "🎯 助攻榜 (Top Assists)",
                      colorClass: "text-blue-400",
                      text: "1. 球员克鲁伊夫 (1)\n1. 贝克汉姆 (1)\n1. 斯内德 (1)\n1. 莫德里奇 (1)\n1. 贝利 (1)"
                  },
                  {
                      speaker: "🌟 本轮 MVP 投票结果",
                      colorClass: "text-purple-400",
                      text: "🏆 获奖者：保罗·马尔蒂尼 (黑曜石堡垒)\n\n数据：8次解围，5次封堵，100% 对抗成功率，0被过。\n颁奖词：“在安菲尔德的狂轰滥炸中，他不是一个人在防守，他是一座移动的叹息之墙。他让穆里尼奥的‘1:0主义’成为了可能。伟大的防守表演！”"
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
    id: 4,
    title: "Chapter IV: The Christmas Break",
    intro: [
        "12月23日，随着第6轮比赛结束哨声吹响，万神殿超级联赛 2.0 暂时按下了暂停键。虽然积分榜上硝烟弥漫，但在圣诞节这一周，战术板被收起，取而代之的是火鸡、红酒、家庭聚会……以及一些只有这些偏执狂教练才能干得出来的“圣诞特辑”。",
        "作为您的经理，我收集了各大豪门在圣诞假期发生的6个独家幕后故事。请您过目，这绝对比比赛本身还有趣。"
    ],
    sections: [
        {
            title: "I. 齐达内的“玄学”派对",
            subtitle: "(Zidane's Metaphysical Party)",
            context: "📍 地点： 迪拜，齐达内租下的超豪华游艇",
            intro: [
                "当其他球队还在苦练体能时，榜首球队银河白昼全队飞往了迪拜。\n甲板上，罗纳尔多 (R9) 穿着花衬衫，手里拿着一块巨大的意大利圣诞面包（Panettone），正在和本泽马比赛谁吃得快。姆巴佩则戴着墨镜，躺在躺椅上晒日光浴。\n齐达内坐在船头，安静地看着海面，手里拿着一杯柠檬水。"
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
                    action: "(微微一笑，转过头，看着正在狂笑的大罗)"
                },
                {
                    speaker: "齐达内",
                    colorClass: "text-white",
                    text: "“你看，坎特的反应速度还在。这就够了。圣诞快乐。”",
                    action: "(就在这时，大罗把一块面包扔向了坎特，坎特敏捷地接住并羞涩地笑了)"
                }
            ]
        },
        {
            title: "II. 佩普的“餐桌战术课”",
            subtitle: "(Pep's Dinner Table Tactics)",
            context: "📍 地点： 曼彻斯特，瓜迪奥拉的豪宅",
            intro: [
                "这是一场尴尬的圣诞晚宴。瓜迪奥拉邀请了球队核心球员克鲁伊夫、哈维和伊涅斯塔来家里做客。\n餐桌上摆满了美食，但没人敢动筷子。因为佩普正在用胡椒瓶、盐罐和酱汁瓶摆阵型。"
            ],
            dialogues: [
                {
                    speaker: "佩普·瓜迪奥拉",
                    colorClass: "text-sky-400",
                    text: "“听着，约翰，当梅西内切的时候，你不能站在这个‘酱汁’的位置，你得移动到‘叉子’这里！这就是‘半空间’（Half-space）！”",
                    action: "(拿着一个盐罐疯狂地移动)"
                },
                {
                    speaker: "球员克鲁伊夫",
                    colorClass: "text-sky-200",
                    text: "“佩普，今天是圣诞节。而且那个盐罐是我的汤，不是后卫。”",
                    action: "(无奈地翻了个白眼，拿出一根烟被佩普一把夺走)"
                },
                {
                    speaker: "佩普·瓜迪奥拉",
                    colorClass: "text-sky-400",
                    text: "“等等……如果把后卫看作是流动的汤……这也许是个新战术……”",
                    action: "(愣了一下，突然陷入了沉思)"
                },
                {
                    speaker: "伊涅斯塔",
                    colorClass: "text-sky-300",
                    text: "“我早说了别来，他连切火鸡都要计算切割角度。”",
                    action: "(默默地切了一块火鸡，小声对哈维说)"
                }
            ]
        },
        {
            title: "III. 穆里尼奥的“黑色圣诞礼物”",
            subtitle: "(Mourinho's Dark Gifts)",
            context: "📍 地点： 伦敦，科巴姆训练基地封闭会议室",
            intro: [
                "没有假期。穆里尼奥把全队关在会议室里，窗帘拉得严严实实。"
            ],
            dialogues: [
                {
                    speaker: "穆里尼奥",
                    colorClass: "text-blue-600",
                    text: "“我不给你们放假，是因为外面的人都想看我们要死。但我是个好人，我有礼物给你们。”",
                    action: "(穿着黑色风衣，在黑板前走来走去，开始分发礼盒)"
                },
                {
                    speaker: "穆里尼奥",
                    colorClass: "text-blue-600",
                    text: "“约翰，这是你的礼物。我要你做这块砖头。下一场比赛，我不允许任何东西穿过你。”",
                    action: "(特里打开盒子，里面是一块砖头)"
                },
                {
                    speaker: "穆里尼奥",
                    colorClass: "text-blue-600",
                    text: "“迪迪埃，碾碎他们。”",
                    action: "(德罗巴打开盒子，里面是一个坦克模型)"
                },
                {
                    speaker: "穆里尼奥",
                    colorClass: "text-blue-600",
                    text: "“保罗，你像这瓶酒。越老越贵，越老越狠。圣诞快乐，现在全体都有，出去跑10公里。”",
                    action: "(马尔蒂尼打开盒子，里面是一瓶1985年的红酒。穆里尼奥的表情终于柔和了一些)"
                }
            ]
        },
        {
            title: "IV. 萨基的“幽灵训练”",
            subtitle: "(Sacchi's Ghost Training)",
            context: "📍 地点： 米兰内洛，浓雾中的训练场",
            intro: [
                "战术米兰目前垫底，萨基已经处于崩溃边缘。\n圣诞节清晨5点，全队被哨声叫醒。雾大得伸手不见五指。"
            ],
            dialogues: [
                {
                    speaker: "范巴斯滕",
                    colorClass: "text-red-300",
                    text: "“教练，我们要练射门吗？”",
                    action: "(睡眼惺忪地穿着训练服)"
                },
                {
                    speaker: "萨基",
                    colorClass: "text-red-600",
                    text: "“不，那是庸俗的人才练的东西。今天我们练‘影子足球’。没有球。你们要在脑子里想象球的位置。”",
                    action: "(手里拿着一个扩音器)"
                },
                {
                    speaker: "场景描述",
                    colorClass: "text-slate-400",
                    text: "11个大男人在浓雾中整齐划一地左右移动，对着空气铲球，对着空气争顶，巴雷西还在大喊：“造越位！现在！”\n里杰卡尔德甚至对着空气做了一个胸部停球的动作。"
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
            title: "V. 弗格森的“父爱与吹风机”",
            subtitle: "(Ferguson's Hairdryer & Love)",
            context: "📍 地点： 弗格森爵士家中",
            intro: [
                "C罗是唯一一个没有回家的球员，因为他坚持在圣诞节加练。\n弗格森爵士开着车，亲自去训练基地把正在做第500个卷腹的C罗“抓”回了家。\n在弗格森家的厨房里，这位铁血教头系着围裙，正在给C罗盛布丁。"
            ],
            dialogues: [
                {
                    speaker: "弗格森爵士",
                    colorClass: "text-red-600",
                    text: "“听着，孩子。今天是圣诞节。如果你不把这块布丁吃了，我就打开吹风机，对着你的脸喷十分钟。”",
                    action: "(看着C罗盘子里的水煮鸡胸肉，皱起了眉头)"
                },
                {
                    speaker: "C罗",
                    colorClass: "text-red-400",
                    text: "“可是Boss，糖分会影响……”",
                    action: "(犹豫了一下)"
                },
                {
                    speaker: "弗格森爵士",
                    colorClass: "text-red-600",
                    text: "“吃！”",
                    action: "(吼道，C罗乖乖吃了)"
                },
                {
                    speaker: "弗格森爵士",
                    colorClass: "text-red-600",
                    text: "“这就对了。上一轮你帽子戏法救了我的命。在这个家里，你是我的骄傲。但如果下一场你跑动偷懒，我会杀了你。”",
                    action: "(露出了慈父般的笑容，拍了拍C罗的头)"
                },
                {
                    speaker: "C罗",
                    colorClass: "text-red-400",
                    text: "“我知道，Boss。”",
                    action: "(笑了，嘴边还沾着布丁)"
                }
            ]
        },
        {
            title: "VI. 克洛普的“圣诞老人特种部队”",
            subtitle: "(Klopp's Santa Special Forces)",
            context: "📍 地点： 利物浦，安菲尔德更衣室",
            intro: [
                "球队两连败，积分榜倒数第二。气氛很压抑。\n突然，更衣室大门被踹开。克洛普穿着全套圣诞老人服装（甚至粘了大胡子）冲了进来，背上背着一个巨大的麻袋。"
            ],
            dialogues: [
                {
                    speaker: "克洛普",
                    colorClass: "text-teal-500",
                    text: "“HO! HO! HO! 摇滚乐团的混蛋们！圣诞老人来了！”",
                    action: "(发出震耳欲聋的笑声)"
                },
                {
                    speaker: "克洛普",
                    colorClass: "text-teal-500",
                    text: "“这就是你们的礼物！我们要去阿尔卑斯山特训三天！没有火鸡，只有缺氧！我们要把失去的分数抢回来！谁是第一个？”",
                    action: "(把麻袋往地上一倒，里面全是负重背心)"
                },
                {
                    speaker: "杰拉德",
                    colorClass: "text-teal-300",
                    text: "“我是队长，我先来。”",
                    action: "(二话不说，走过去穿上了最重的一件)"
                },
                {
                    speaker: "古利特",
                    colorClass: "text-teal-300",
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

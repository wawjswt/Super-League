
import { StoryChapter } from './story';

export const STORY_DATA_PART_9: StoryChapter[] = [
  {
      id: 28,
      title: "Chapter XXVI: The Grand Kickoff",
      intro: [
          "温布利的穹顶仿佛要被声浪掀翻，空气中燃烧着数以亿计的期待。",
          "我是您的现场导播。所有机位已就绪，向全世界几十亿观众切入——决赛开场仪式！"
      ],
      sections: [
          {
              title: "🚶 【入场仪式】诸神归位",
              subtitle: "The Entrance of Gods",
              intro: [
                  "BGM: 激昂的《Champions League Theme》变奏版，混合着现场 90,000 人的战吼。",
                  "通道口的光线骤然变亮。两列纵队踏上了温布利的草皮。"
              ],
              dialogues: [
                  {
                      speaker: "左侧：蔚蓝控域 (Azure Control)",
                      colorClass: "text-sky-400",
                      text: "他们身穿深天蓝色的紧身球衣，球衣上有暗纹的几何线条，象征着精密与控制。\n走在最前面的是队长 菲利普·拉姆 (21号)。虽然身材不高，但他昂首挺胸，眼神坚毅如铁。紧随其后的是 亨利 (14号)，他竖起了衣领；以及那个特殊的男人——球员克鲁伊夫 (14号)，他那件复古风格的球衣在队伍中格外显眼。"
                  },
                  {
                      speaker: "右侧：银河白昼 (White Galaxy)",
                      colorClass: "text-white",
                      text: "他们身穿纯白如雪的球衣，金色的号码在泛光灯下熠熠生辉，象征着皇家的尊贵。\n领头的是队长 吉安路易吉·布冯 (1号)，这位传奇门将依然梳着一丝不苟的大背头。在他身后，是咬着指甲的 大罗 (9号)，他脚上那双金色的 Nike Mercurial 战靴极其刺眼。姆巴佩 (7号) 和 莫德里奇 (10号) 正在互相击掌。"
                  }
              ]
          },
          {
              title: "🎵 【国歌奏响】天佑吾王",
              subtitle: "God Save the King",
              intro: ["两队在球场中圈一字排开。看台上的喧嚣突然安静了一秒，随即爆发。"],
              dialogues: [
                  {
                      speaker: "仪式",
                      colorClass: "text-yellow-500",
                      text: "《God Save the King》 的旋律响起。\n威廉王子在皇家包厢肃立。全场数万名英国本土观众高声合唱，声浪震动着每一块钢板。\n贝克汉姆 在解说席上也不自觉地跟唱。\n镜头扫过球员：德布劳内 闭目养神，齐达内 (教练) 把手放在胸口，大罗 正在嚼口香糖，眼神却变得锐利起来。"
                  }
              ]
          },
          {
              title: "🪙 【挑边仪式】硬币的两面",
              subtitle: "The Coin Toss",
              dialogues: [
                  {
                      speaker: "皮耶路易吉·科里纳 (主裁)",
                      colorClass: "text-slate-400",
                      text: "标志性的光头主裁站在中圈，眼神比探照灯还亮。\n拉姆 与 布冯 握手。这一握，代表了两种防守哲学的致敬。\n双方交换队旗。科里纳将硬币高高抛起，银色的硬币在空中翻转。",
                      action: "(硬币落地)"
                  },
                  {
                      speaker: "结果",
                      colorClass: "text-white",
                      text: "布冯猜对了。银河白昼选择了开球权。拉姆选择了场地——他要让蔚蓝控域在上半场朝着本方死忠看台进攻。"
                  }
              ]
          },
          {
              title: "🗣️ 【最后的圆阵】战吼",
              subtitle: "The Final Huddle",
              intro: ["两队迅速散开，围成了两个紧密的圆圈。"],
              dialogues: [
                  {
                      speaker: "🔵 蔚蓝圆阵",
                      colorClass: "text-sky-500",
                      text: "拉姆 在怒吼：“不要给他们一秒钟的呼吸时间！控制！控制！这是我们的球场！”\n普约尔（虽然在替补席，但在场边大喊助威）。"
                  },
                  {
                      speaker: "⚪ 银河圆阵",
                      colorClass: "text-white",
                      text: "布冯 把头埋在队友中间：“我们要把这种快乐带到最后！兄弟们，去享受吧！把球踢进那个该死的网窝！”\n大罗 拍了拍 本泽马 的背。"
                  }
              ]
          },
          {
              title: "🎙️ 【解说席】传奇的声音",
              subtitle: "Commentary Box",
              intro: ["镜头切到高处的评论席。"],
              dialogues: [
                  {
                      speaker: "Peter Drury (足球诗人)",
                      colorClass: "text-slate-300",
                      text: "“这里是温布利，这里是时间的尽头。两种哲学，一个奖杯。”"
                  },
                  {
                      speaker: "大卫·贝克汉姆 (特邀嘉宾)",
                      colorClass: "text-red-300",
                      text: "“晚上好，彼得。看看这两套阵容，简直让人窒息。\n蔚蓝控域这边，德布劳内 和 克鲁伊夫 的中场组合，是几何学的极致。瓜迪奥拉排出了无锋阵的变种，看来是要把球权控制到死。\n而银河白昼……齐达内把 大罗、姆巴佩、本泽马 同时派上场了。这是要对攻！莫德里奇和克罗斯的输送将是关键。\n作为前皇马和曼联球员，我的心跳在加速。这会是一场载入史册的比赛。”"
                  }
              ]
          },
          {
              title: "🎥 【超级特写】宿命的对视",
              subtitle: "The Destined Gaze",
              intro: ["超级慢动作摄像机（Super Slow-mo）锁定了两个人。"],
              dialogues: [
                  {
                      speaker: "镜头左侧：约翰·克鲁伊夫 (蔚蓝控域)",
                      colorClass: "text-sky-400",
                      text: "镜头聚焦在他的眼睛。那是一双正在计算空间的眼睛。他看了一眼正在开球点站定的大罗，眼神冷酷如冰。"
                  },
                  {
                      speaker: "镜头右侧：罗纳尔多 R9 (银河白昼)",
                      colorClass: "text-white",
                      text: "镜头聚焦在他的嘴角。他微微上扬，露出了那一对标志性的兔牙。那是猎手看到猎物时的微笑。他踩了踩球，仿佛在和皮球对话。"
                  }
              ]
          },
          {
              title: "⏱️ 【倒计时】全场共振",
              subtitle: "Countdown",
              intro: [
                  "导播给了一个极低机位的特写。草皮上，静静地躺着那颗 Nike Flight 官方比赛用球。金色的纹路在灯光下流动。",
                  "大屏幕上的数字开始跳动。全场 90,000 人，以及屏幕前几十亿人，异口同声地倒数。"
              ],
              dialogues: [
                  {
                      speaker: "10! 9! 8!",
                      colorClass: "text-slate-500",
                      text: "(大罗把脚踩在了球上)",
                      action: "心跳加速"
                  },
                  {
                      speaker: "7! 6!",
                      colorClass: "text-slate-400",
                      text: "(亨利深吸一口气，瓜迪奥拉坐回了教练席，齐达内站在场边)",
                      action: "窒息"
                  },
                  {
                      speaker: "5! 4! 3!",
                      colorClass: "text-slate-300",
                      text: "",
                      action: "声浪顶峰"
                  },
                  {
                      speaker: "2! 1!",
                      colorClass: "text-white",
                      text: "",
                      action: "Boom!"
                  },
                  {
                      speaker: "科里纳",
                      colorClass: "text-yellow-500",
                      text: "哔！！！",
                      action: "(终极一战，正式开球)"
                  }
              ]
          }
      ]
  },
  {
      id: 29,
      title: "Chapter XXVII: First Half - Alien vs Geometry",
      intro: [
          "比赛开始了。温布利的雨丝如同银针，编织着这场世纪之战的网。",
          "前30分钟，我们见证了完美的团队控制，也见证了令人绝望的个人天赋。"
      ],
      sections: [
          {
              title: "⏱️ 【0' - 10'】 开局：蓝色的窒息与白色的闪电",
              subtitle: "The Opening",
              intro: ["科里纳哨声刚落，蔚蓝控域 (Azure Control) 就如同潮水般涌过半场。"],
              dialogues: [
                  {
                      speaker: "3' - 险些破门",
                      colorClass: "text-sky-400",
                      text: "球员克鲁伊夫回撤勾出瓦拉内，德布劳内手术刀直塞！亨利启动，但在射门前一毫秒，坎特像幽灵一样出现破坏！"
                  },
                  {
                      speaker: "8' - 银河反击",
                      colorClass: "text-white",
                      text: "莫德里奇摆脱伊涅斯塔，长传找姆巴佩。姆巴佩试图生吃拉姆，但拉姆教科书般卡位断球。"
                  },
                  {
                      speaker: "场边特写",
                      colorClass: "text-sky-500",
                      text: "瓜迪奥拉疯狂挥手大喊：“内收！控制中场！”他紧张地喝水又吐掉。\n齐达内双手插兜，甚至微笑着和第四官员聊天。"
                  },
                  {
                      speaker: "弗格森爵士",
                      colorClass: "text-red-500",
                      text: "“看坎特那小子，如果在我手下，我会让他把半场的草都吃掉。”",
                      action: "(对温格说)"
                  }
              ]
          },
          {
              title: "⏱️ 【11' - 20'】 中盘：神迹降临的前兆",
              subtitle: "The Build Up",
              intro: ["蔚蓝控域控球率一度达到 72%，形成令人窒息的围攻。"],
              dialogues: [
                  {
                      speaker: "16' - 布冯神扑",
                      colorClass: "text-white",
                      text: "菲戈右路晃过卡洛斯传中，亨利高高跃起头球！布冯做出了逆天反应，单掌将必进球托出横梁！"
                  },
                  {
                      speaker: "19' - 克罗斯的视野",
                      colorClass: "text-white",
                      text: "克罗斯在本方禁区前沿，面对逼抢从容送出40米贴地长传，打穿三道防线找到本泽马。"
                  },
                  {
                      speaker: "IShowSpeed",
                      colorClass: "text-red-400",
                      text: "“传给罗纳尔多！为什么还在散步？！动起来啊 R9！！！”",
                      action: "(在直播间急得跳脚)"
                  }
              ]
          },
          {
              title: "⏱️ 【21' - 25'】 高潮：外星人摧毁几何学",
              subtitle: "Alien vs Geometry",
              dialogues: [
                  {
                      speaker: "23' - 历史性时刻",
                      colorClass: "text-white",
                      text: "本泽马背身脚后跟一磕，皮球滚向罗纳尔多 (R9)。\n距离球门35米，面前是皮克、耶罗，身后是布斯克茨。\n大罗启动了。\n第一步甩开布斯克茨。\n面对皮克，极快频率的‘牛尾巴’ (Elastico)！皮克重心倒地。\n耶罗封堵，大罗右脚假射扣球变向！耶罗滑铲铲空！\n单刀面对埃德森，大罗钟摆动作骗倒门将，推射空门。\n球进了！\n银河白昼 1 : 0 蔚蓝控域！"
                  },
                  {
                      speaker: "齐达内",
                      colorClass: "text-white",
                      text: "终于拿出双手，用力鼓掌三次，又插回口袋。",
                      action: "(仿佛在说：看，这很简单)"
                  },
                  {
                      speaker: "瓜迪奥拉",
                      colorClass: "text-sky-500",
                      text: "抱住脑袋跪在草皮上。20分钟的完美体系被5秒钟的天赋摧毁。对着替补席怒吼。",
                      action: "(崩溃边缘)"
                  },
                  {
                      speaker: "贝克汉姆",
                      colorClass: "text-red-300",
                      text: "“上帝啊……那就是我在皇马看到的罗尼。给他一英寸缝隙，他能塞进一辆坦克。皮克和耶罗尽力了，但那是外星科技。”"
                  }
              ]
          },
          {
              title: "⏱️ 【26' - 30'】 反击：愤怒的蓝色海洋",
              subtitle: "Azure Fury",
              dialogues: [
                  {
                      speaker: "28' - 立柱救险",
                      colorClass: "text-sky-400",
                      text: "球员克鲁伊夫愤怒了。连续过掉克罗斯和卡瓦哈尔，禁区弧顶怒射！\n‘铛！！！’\n皮球狠狠砸在立柱外侧弹出！"
                  },
                  {
                      speaker: "观众反应",
                      colorClass: "text-purple-400",
                      text: "马斯克发推：“R9 违背了物理定律！”\n查尔斯国王惊讶得张大嘴巴。\nC罗在包厢里紧握拳头，为大罗鼓掌，眼神里满是英雄惜英雄的敬意。"
                  }
              ]
          }
      ],
      outro: {
          speaker: "Leo Sterling",
          lines: [
              "“老板，这就是前30分钟。”",
              "“瓜迪奥拉的体系近乎完美，但齐达内拥有那个打破平衡的核武器。”",
              "“1:0。但这仅仅是开始。”"
          ]
      }
  },
  {
      id: 30,
      title: "Chapter XXVIII: The Equalizer & The Physicist",
      intro: [
          "直击 上半场终章 (31' - 45+') 的窒息时刻！"
      ],
      sections: [
          {
              title: "⏱️ 【31' - 38'】 围城：蓝色的窒息陷阱",
              subtitle: "The Blue Siege",
              intro: [
                  "丢球后的 蔚蓝控域 并没有慌乱，反而变得更加冷酷。他们把阵型压扁，皮克 和 耶罗 直接站到了中圈弧。银河白昼 被压缩在己方 30 米区域内。"
              ],
              dialogues: [
                  {
                      speaker: "33' - 小白的华尔兹",
                      colorClass: "text-sky-400",
                      text: "布斯克茨 在中场断下了 克罗斯 的传球（极其罕见的失误！），立刻分给 伊涅斯塔。小白在三人包夹中居然把球摘了出来，那一刻他像是在跳华尔兹。"
                  },
                  {
                      speaker: "36' - 险些破门",
                      colorClass: "text-sky-300",
                      text: "德布劳内 在右肋尝试了一脚远射！球带着强烈的下旋，擦着立柱飞出底线。布冯 甚至还没来得及起跳。"
                  },
                  {
                      speaker: "场边指挥",
                      colorClass: "text-slate-400",
                      text: "瓜迪奥拉蹲在场边，像个拆弹专家，猛地站起来对亨利大喊：“拉边！把德塞利拉出来！”\n齐达内依然双手插兜，但开始嚼口香糖了（紧张微表情）。他朝 坎特 吹口哨，示意贴身德布劳内。"
                  }
              ]
          },
          {
              title: "⏱️ 【39'】 进球：教科书般的“Tiki-Taka”",
              subtitle: "The Perfect Goal",
              intro: [
                  "第 39 分钟，蔚蓝控域打出了一次足以载入足球教科书的配合。这次进攻经过了 24 脚传递，触球覆盖了除门将外的所有 10 名球员。"
              ],
              dialogues: [
                  {
                      speaker: "进攻路线",
                      colorClass: "text-sky-400",
                      text: "拉姆 内切 -> 哈维 -> 球员克鲁伊夫 回撤带出 瓦拉内 -> 菲戈 斜插。\n就在瓦拉内失位的瞬间，球员克鲁伊夫 没有停球，脚后跟一磕，球到了 亨利 脚下。"
                  },
                  {
                      speaker: "致命一击",
                      colorClass: "text-sky-500",
                      text: "亨利在禁区左侧没有射门！他横传门前！\n皮球贴着草皮划过，德塞利 铲空。\n后点！凯文·德布劳内 (De Bruyne) 拍马赶到，迎球爆射！\n“嘭！” 皮球挂入球门顶角！布冯毫无办法！\n1 : 1！！！ 蔚蓝控域扳平比分！"
                  },
                  {
                      speaker: "瓜迪奥拉",
                      colorClass: "text-sky-600",
                      text: "激动地挥舞双拳，转身拥抱了助教。这不是一个人的进球，这是体系的胜利。"
                  }
              ]
          },
          {
              title: "⏱️ 【40' - 45'】 惊魂：物理学的奇迹",
              subtitle: "The Physics Miracle",
              intro: ["被扳平的银河白昼立刻反扑。上半场最后的高潮来了。"],
              dialogues: [
                  {
                      speaker: "43' - 姆巴佩强吃",
                      colorClass: "text-white",
                      text: "姆巴佩在左路启动，阿尔维斯根本追不上，只能战术犯规拉倒。黄牌！任意球，距离球门 35 米。"
                  },
                  {
                      speaker: "罗伯特·卡洛斯 (Roberto Carlos)",
                      colorClass: "text-white",
                      text: "他站在了球前。开始了标志性的超长助跑。\n“突突突突……” 小碎步启动。\n左脚外脚背重炮轰门！\n“BOOM！！！”"
                  },
                  {
                      speaker: "诡异弧线",
                      colorClass: "text-slate-300",
                      text: "皮球画出了一道极其诡异的 S 型弧线，绕过人墙飞向角旗杆，却突然急转弯飞向球门！\n埃德森 已放弃抵抗……\n“哐！！！”\n球砸在横梁与立柱的交界处！整个温布利的球门都在剧烈摇晃！球弹回场内被皮克解围。"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "猛拍大腿：“这不科学！这球要是进了，我就承认齐达内是上帝！”",
                      action: "(VIP席特写)"
                  },
                  {
                      speaker: "刘易斯·汉密尔顿",
                      colorClass: "text-indigo-400",
                      text: "“这速度比我的法拉利还快。”",
                      action: "(摘下墨镜震惊)"
                  }
              ]
          },
          {
              title: "🏁 【上半场结束】",
              subtitle: "Half Time",
              intro: [
                  "主裁科里纳吹响了半场结束的哨声。",
                  "比分：蔚蓝控域 1 : 1 银河白昼",
                  "蔚蓝控域： 控球率 68%，传球成功率 94%。\n银河白昼： 射门 4 次，2 次中框（1进球1门框）。"
              ],
              dialogues: [
                  {
                      speaker: "中场休息镜头",
                      colorClass: "text-slate-400",
                      text: "球员克鲁伊夫 和 齐达内 (教练) 擦肩而过，齐达内点头致意。\n大罗 依然在和 姆巴佩 说笑，心态极好。\n而 瓜迪奥拉 已经拽着 拉姆 在通道里开始画战术了。"
                  }
              ]
          }
      ]
  },
  {
      id: 31,
      title: "Chapter XXIX: The Pantheon Era Show",
      intro: [
          "当主裁科里纳吹响半场哨声，球员们刚刚走进通道，温布利的灯光瞬间全部熄灭。",
          "这通常意味着两件事：要么是电路故障，要么是那个女人来了。",
          "时间： 20:50 PM | 事件： Taylor Swift 中场秀"
      ],
      sections: [
          {
              title: "🌌 【开场：无人机的星空】",
              subtitle: "The Drone Galaxy",
              intro: [
                  "黑暗中，5,000 架 Nvidia 驱动的无人机 像萤火虫一样从球场顶棚俯冲而下。",
                  "它们在空中迅速编队，先是拼出了 蔚蓝控域 的队徽，瞬间又变换成了 银河白昼 的队徽。",
                  "最后，它们汇聚成了一个巨大的、旋转的 “TS” 标志。"
              ],
              dialogues: [
                  {
                      speaker: "音效",
                      colorClass: "text-purple-500",
                      text: "一声标志性的电子重低音炸响：“...Ready For It?”\n舞台从中心圆缓缓升起。烟火四射！\n泰勒·斯威夫特 (Taylor Swift) 登场了！她穿着一件银色与金色拼接的亮片战袍，站在巨大的蛇形舞台中央。"
                  }
              ]
          },
          {
              title: "🎤 第一曲：...Ready For It? (战斗宣言)",
              subtitle: "Killer Instinct",
              intro: ["氛围：极度炸裂。"],
              dialogues: [
                  {
                      speaker: "大屏幕互动",
                      colorClass: "text-red-500",
                      text: "当她唱到 \"Knew he was a killer first time that I saw him\" 时，大屏幕极其搞事地切了一个分屏：\n左边是 罗纳尔多 (R9) 刚才钟摆过人的回放。\n右边是 哈兰德 在替补席上凶狠的眼神。\n全场爆笑与尖叫！"
                  }
              ]
          },
          {
              title: "🎸 第二曲：Style (温布利特别版)",
              subtitle: "Style - Beckham Edition",
              intro: ["画风突变：舞台灯光变成了浪漫的粉紫色。泰勒抱起了吉他。"],
              dialogues: [
                  {
                      speaker: "歌词改编",
                      colorClass: "text-pink-400",
                      text: "她即兴改了一句歌词：\n\"You got that James Dean daydream look in your eye...\"\n改成了 -> \"You got that David Beckham daydream look in your eye...\""
                  },
                  {
                      speaker: "贝克汉姆",
                      colorClass: "text-red-300",
                      text: "镜头切到 VIP 席：贝克汉姆正喝着香槟，听到这句歌词，害羞地笑了，脸红得像曼联球衣。维多利亚笑着拍了他一下。\n全场女球迷的尖叫声甚至超过了刚才大罗进球的声音。"
                  }
              ]
          },
          {
              title: "💃 第三曲：Shake It Off (快乐足球)",
              subtitle: "Shake It Off",
              dialogues: [
                  {
                      speaker: "伴舞",
                      colorClass: "text-slate-400",
                      text: "居然是一群穿着 战术米兰、铁幕军团 等被淘汰球队球衣的伴舞（当然是舞蹈演员）。"
                  },
                  {
                      speaker: "马拉多纳",
                      colorClass: "text-yellow-400",
                      text: "在包厢里彻底嗨了，站起来跟着节奏扭动身躯，拉着贝利一起跳桑巴。",
                      action: "(彻底享受)"
                  },
                  {
                      speaker: "穆里尼奥",
                      colorClass: "text-blue-600",
                      text: "双手抱胸，虽然不想承认，但脚尖在跟着节奏轻轻点地。",
                      action: "(傲娇)"
                  },
                  {
                      speaker: "埃隆·马斯克",
                      colorClass: "text-purple-400",
                      text: "正在直播：“地球人的能量太疯狂了，我要把这首歌设为火星基地的闹钟。”"
                  }
              ]
          },
          {
              title: "🎆 【谢幕：紫色的雨】",
              subtitle: "Purple Rain Finale",
              intro: ["随着最后一个音符落下，温布利上空炸开了紫金色的烟花雨。"],
              dialogues: [
                  {
                      speaker: "Taylor Swift",
                      colorClass: "text-purple-500",
                      text: "“温布利！下半场把冠军带回家！爱你们！”"
                  },
                  {
                      speaker: "Leo Sterling",
                      colorClass: "text-slate-300",
                      text: "“老板，这太不真实了！\n我刚刚看到 齐达内 从更衣室通道探出头来看了一眼，甚至跟着哼了两句！\n而 瓜迪奥拉……好吧，他刚刚抓着 德布劳内 在战术板上画了十分钟。\n娱乐时间结束。灯光重新变白。\n下半场，生死 45 分钟。球员们出来了！他们的眼神变了——从欣赏表演的观众，变回了嗜血的战士！”"
                  }
              ]
          }
      ]
  }
];

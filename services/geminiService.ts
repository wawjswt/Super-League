import { GoogleGenAI, Type, Schema } from "@google/genai";
import { LeagueResponse, TeamData, Player, TeamStats } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SQUAD_DB: Record<string, Player[]> = {
  "The Crimson Dynasty": [
      {
        "name": "Cristiano Ronaldo (C罗)",
        "position": "ST",
        "role": "Starter",
        "ovr": 99,
        "attributes": { "ATT": 99, "MID": 75, "DEF": 40, "SPD": 95, "CRE": 88, "DIS": 85 }
      },
      {
        "name": "Wayne Rooney (鲁尼)",
        "position": "ST/CF",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 92, "MID": 85, "DEF": 70, "SPD": 88, "CRE": 82, "DIS": 98 }
      },
      {
        "name": "Ryan Giggs (吉格斯)",
        "position": "LM",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 82, "MID": 88, "DEF": 55, "SPD": 92, "CRE": 90, "DIS": 85 }
      },
      {
        "name": "David Beckham (贝克汉姆)",
        "position": "RM",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 78, "MID": 96, "DEF": 65, "SPD": 75, "CRE": 88, "DIS": 98 }
      },
      {
        "name": "Paul Scholes (斯科尔斯)",
        "position": "CM",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 85, "MID": 98, "DEF": 60, "SPD": 65, "CRE": 88, "DIS": 88 }
      },
      {
        "name": "Roy Keane (基恩)",
        "position": "CDM",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 70, "MID": 85, "DEF": 94, "SPD": 78, "CRE": 70, "DIS": 99 }
      },
      {
        "name": "Denis Irwin (埃尔文)",
        "position": "LB",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 75, "MID": 80, "DEF": 88, "SPD": 80, "CRE": 75, "DIS": 92 }
      },
      {
        "name": "Sergio Ramos (拉莫斯)",
        "position": "CB",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 82, "MID": 75, "DEF": 93, "SPD": 82, "CRE": 70, "DIS": 90 }
      },
      {
        "name": "Rio Ferdinand (费迪南德)",
        "position": "CB",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 60, "MID": 80, "DEF": 92, "SPD": 85, "CRE": 75, "DIS": 88 }
      },
      {
        "name": "Gary Neville (加里·内维尔)",
        "position": "RB",
        "role": "Starter",
        "ovr": 87,
        "attributes": { "ATT": 60, "MID": 75, "DEF": 88, "SPD": 75, "CRE": 65, "DIS": 96 }
      },
      {
        "name": "Peter Schmeichel (舒梅切尔)",
        "position": "GK",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 20, "MID": 50, "DEF": 50, "SPD": 60, "CRE": 40, "DIS": 98 }
      },
      {
        "name": "Eric Cantona (坎通纳)",
        "position": "CF",
        "role": "Substitute",
        "ovr": 92,
        "attributes": { "ATT": 90, "MID": 88, "DEF": 40, "SPD": 75, "CRE": 94, "DIS": 70 }
      },
      {
        "name": "Ruud van Nistelrooy (范尼)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 90,
        "attributes": { "ATT": 95, "MID": 60, "DEF": 30, "SPD": 82, "CRE": 75, "DIS": 85 }
      },
      {
        "name": "Nemanja Vidic (维迪奇)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 90,
        "attributes": { "ATT": 50, "MID": 55, "DEF": 95, "SPD": 70, "CRE": 50, "DIS": 92 }
      },
      {
        "name": "Patrice Evra (埃弗拉)",
        "position": "LB",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 75, "MID": 78, "DEF": 86, "SPD": 88, "CRE": 78, "DIS": 88 }
      },
      {
        "name": "Park Ji-Sung (朴智星)",
        "position": "LM/RM",
        "role": "Substitute",
        "ovr": 86,
        "attributes": { "ATT": 75, "MID": 80, "DEF": 80, "SPD": 85, "CRE": 75, "DIS": 99 }
      },
      {
        "name": "Michael Carrick (卡里克)",
        "position": "CDM",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 60, "MID": 90, "DEF": 82, "SPD": 60, "CRE": 80, "DIS": 90 }
      },
      {
        "name": "Edwin van der Sar (范德萨)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 10, "MID": 60, "DEF": 50, "SPD": 50, "CRE": 45, "DIS": 95 }
      }
  ],
  "Azure Control": [
      {
        "name": "Johan Cruyff (克鲁伊夫)",
        "position": "CF",
        "role": "Starter",
        "ovr": 97,
        "attributes": { "ATT": 95, "MID": 99, "DEF": 50, "SPD": 88, "CRE": 98, "DIS": 90 }
      },
      {
        "name": "Thierry Henry (亨利)",
        "position": "LW",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 94, "MID": 85, "DEF": 40, "SPD": 96, "CRE": 92, "DIS": 80 }
      },
      {
        "name": "Luís Figo (菲戈)",
        "position": "RW",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 88, "MID": 92, "DEF": 40, "SPD": 85, "CRE": 94, "DIS": 75 }
      },
      {
        "name": "Andrés Iniesta (伊涅斯塔)",
        "position": "CM",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 80, "MID": 98, "DEF": 60, "SPD": 78, "CRE": 96, "DIS": 85 }
      },
      {
        "name": "Kevin De Bruyne (德布劳内)",
        "position": "CM",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 85, "MID": 97, "DEF": 65, "SPD": 78, "CRE": 90, "DIS": 88 }
      },
      {
        "name": "Sergio Busquets (布斯克茨)",
        "position": "CDM",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 50, "MID": 96, "DEF": 85, "SPD": 50, "CRE": 85, "DIS": 98 }
      },
      {
        "name": "Philipp Lahm (拉姆)",
        "position": "LB/CDM",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 70, "MID": 92, "DEF": 92, "SPD": 80, "CRE": 85, "DIS": 99 }
      },
      {
        "name": "Gerard Piqué (皮克)",
        "position": "CB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 60, "MID": 85, "DEF": 88, "SPD": 70, "CRE": 75, "DIS": 88 }
      },
      {
        "name": "Fernando Hierro (耶罗)",
        "position": "CB",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 75, "MID": 85, "DEF": 90, "SPD": 65, "CRE": 70, "DIS": 90 }
      },
      {
        "name": "Dani Alves (阿尔维斯)",
        "position": "RB",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 82, "MID": 88, "DEF": 80, "SPD": 90, "CRE": 88, "DIS": 75 }
      },
      {
        "name": "Ederson (埃德森)",
        "position": "GK",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 20, "MID": 90, "DEF": 50, "SPD": 60, "CRE": 60, "DIS": 85 }
      },
      {
        "name": "Erling Haaland (哈兰德)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 95,
        "attributes": { "ATT": 96, "MID": 65, "DEF": 30, "SPD": 96, "CRE": 70, "DIS": 80 }
      },
      {
        "name": "David Silva (席尔瓦)",
        "position": "CM/AM",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 75, "MID": 95, "DEF": 50, "SPD": 72, "CRE": 94, "DIS": 85 }
      },
      {
        "name": "Rodri (罗德里)",
        "position": "CDM",
        "role": "Substitute",
        "ovr": 92,
        "attributes": { "ATT": 75, "MID": 94, "DEF": 90, "SPD": 70, "CRE": 82, "DIS": 95 }
      },
      {
        "name": "Bernardo Silva (B席)",
        "position": "RW/CM",
        "role": "Substitute",
        "ovr": 90,
        "attributes": { "ATT": 80, "MID": 90, "DEF": 75, "SPD": 85, "CRE": 92, "DIS": 96 }
      },
      {
        "name": "Javier Mascherano (马斯切拉诺)",
        "position": "CB/CDM",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 50, "MID": 80, "DEF": 92, "SPD": 75, "CRE": 70, "DIS": 95 }
      },
      {
        "name": "Eric Abidal (阿比达尔)",
        "position": "LB/CB",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 60, "MID": 75, "DEF": 88, "SPD": 80, "CRE": 70, "DIS": 90 }
      },
      {
        "name": "Victor Valdes (巴尔德斯)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 10, "MID": 85, "DEF": 50, "SPD": 60, "CRE": 50, "DIS": 82 }
      }
  ],
  "Obsidian Fortress": [
      {
        "name": "Didier Drogba (德罗巴)",
        "position": "ST",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 90, "MID": 75, "DEF": 60, "SPD": 85, "CRE": 80, "DIS": 95 }
      },
      {
        "name": "Eden Hazard (阿扎尔)",
        "position": "LM/LW",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 88, "MID": 88, "DEF": 40, "SPD": 92, "CRE": 96, "DIS": 75 }
      },
      {
        "name": "Wesley Sneijder (斯内德)",
        "position": "AM",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 85, "MID": 94, "DEF": 60, "SPD": 75, "CRE": 90, "DIS": 90 }
      },
      {
        "name": "Samuel Eto'o (埃托奥)",
        "position": "RM/RW",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 92, "MID": 75, "DEF": 65, "SPD": 95, "CRE": 85, "DIS": 95 }
      },
      {
        "name": "Claude Makélélé (马克莱莱)",
        "position": "CDM",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 50, "MID": 80, "DEF": 96, "SPD": 75, "CRE": 65, "DIS": 98 }
      },
      {
        "name": "Michael Essien (埃辛)",
        "position": "CDM",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 70, "MID": 85, "DEF": 90, "SPD": 88, "CRE": 75, "DIS": 95 }
      },
      {
        "name": "Paolo Maldini (马尔蒂尼)",
        "position": "LB",
        "role": "Starter",
        "ovr": 95,
        "attributes": { "ATT": 75, "MID": 85, "DEF": 99, "SPD": 82, "CRE": 80, "DIS": 98 }
      },
      {
        "name": "John Terry (特里)",
        "position": "CB",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 70, "MID": 75, "DEF": 94, "SPD": 65, "CRE": 60, "DIS": 99 }
      },
      {
        "name": "Ricardo Carvalho (卡瓦略)",
        "position": "CB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 50, "MID": 70, "DEF": 92, "SPD": 75, "CRE": 65, "DIS": 95 }
      },
      {
        "name": "Maicon (麦孔)",
        "position": "RB",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 82, "MID": 80, "DEF": 85, "SPD": 90, "CRE": 80, "DIS": 88 }
      },
      {
        "name": "Petr Cech (切赫)",
        "position": "GK",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 10, "MID": 60, "DEF": 70, "SPD": 50, "CRE": 40, "DIS": 94 }
      },
      {
        "name": "Diego Milito (米利托)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 92, "MID": 70, "DEF": 40, "SPD": 78, "CRE": 75, "DIS": 92 }
      },
      {
        "name": "Frank Lampard (兰帕德)",
        "position": "CM",
        "role": "Substitute",
        "ovr": 91,
        "attributes": { "ATT": 88, "MID": 90, "DEF": 75, "SPD": 72, "CRE": 82, "DIS": 95 }
      },
      {
        "name": "Esteban Cambiasso (坎比亚索)",
        "position": "CDM",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 65, "MID": 82, "DEF": 88, "SPD": 70, "CRE": 75, "DIS": 96 }
      },
      {
        "name": "Marco Materazzi (马特拉齐)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 60, "MID": 60, "DEF": 90, "SPD": 60, "CRE": 50, "DIS": 85 }
      },
      {
        "name": "Walter Samuel (萨穆埃尔)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 40, "MID": 60, "DEF": 93, "SPD": 65, "CRE": 50, "DIS": 92 }
      },
      {
        "name": "Marcelo (马塞洛)",
        "position": "LB",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 85, "MID": 88, "DEF": 75, "SPD": 85, "CRE": 92, "DIS": 70 }
      },
      {
        "name": "Júlio César (塞萨尔)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 10, "MID": 65, "DEF": 60, "SPD": 55, "CRE": 45, "DIS": 90 }
      }
  ],
  "White Galaxy": [
      {
        "name": "Ronaldo Nazário (大罗)",
        "position": "ST",
        "role": "Starter",
        "ovr": 98,
        "attributes": { "ATT": 98, "MID": 80, "DEF": 35, "SPD": 96, "CRE": 95, "DIS": 70 }
      },
      {
        "name": "Kylian Mbappé (姆巴佩)",
        "position": "LW/ST",
        "role": "Starter",
        "ovr": 96,
        "attributes": { "ATT": 95, "MID": 80, "DEF": 40, "SPD": 99, "CRE": 92, "DIS": 75 }
      },
      {
        "name": "Karim Benzema (本泽马)",
        "position": "CF",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 92, "MID": 88, "DEF": 50, "SPD": 82, "CRE": 90, "DIS": 90 }
      },
      {
        "name": "Luka Modrić (莫德里奇)",
        "position": "CM/AM",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 82, "MID": 98, "DEF": 75, "SPD": 78, "CRE": 96, "DIS": 92 }
      },
      {
        "name": "Toni Kroos (克罗斯)",
        "position": "CM",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 80, "MID": 99, "DEF": 70, "SPD": 55, "CRE": 90, "DIS": 95 }
      },
      {
        "name": "N'Golo Kanté (坎特)",
        "position": "CDM",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 60, "MID": 85, "DEF": 98, "SPD": 88, "CRE": 75, "DIS": 99 }
      },
      {
        "name": "Roberto Carlos (卡洛斯)",
        "position": "LB",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 88, "MID": 82, "DEF": 85, "SPD": 95, "CRE": 85, "DIS": 80 }
      },
      {
        "name": "Marcel Desailly (德塞利)",
        "position": "CB",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 60, "MID": 75, "DEF": 96, "SPD": 78, "CRE": 65, "DIS": 94 }
      },
      {
        "name": "Raphaël Varane (瓦拉内)",
        "position": "CB",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 55, "MID": 70, "DEF": 92, "SPD": 90, "CRE": 65, "DIS": 88 }
      },
      {
        "name": "Dani Carvajal (卡瓦哈尔)",
        "position": "RB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 75, "MID": 80, "DEF": 88, "SPD": 82, "CRE": 75, "DIS": 94 }
      },
      {
        "name": "Gianluigi Buffon (布冯)",
        "position": "GK",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 10, "MID": 65, "DEF": 80, "SPD": 55, "CRE": 45, "DIS": 99 }
      },
      {
        "name": "Gareth Bale (贝尔)",
        "position": "RW",
        "role": "Substitute",
        "ovr": 91,
        "attributes": { "ATT": 92, "MID": 80, "DEF": 55, "SPD": 98, "CRE": 88, "DIS": 70 }
      },
      {
        "name": "Casemiro (卡塞米罗)",
        "position": "CDM",
        "role": "Substitute",
        "ovr": 90,
        "attributes": { "ATT": 70, "MID": 75, "DEF": 94, "SPD": 70, "CRE": 65, "DIS": 92 }
      },
      {
        "name": "Didier Deschamps (德尚)",
        "position": "CDM/CM",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 60, "MID": 85, "DEF": 90, "SPD": 70, "CRE": 75, "DIS": 99 }
      },
      {
        "name": "Pepe (佩佩)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 50, "MID": 60, "DEF": 94, "SPD": 78, "CRE": 55, "DIS": 85 }
      },
      {
        "name": "Laurent Blanc (布兰科)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 65, "MID": 80, "DEF": 90, "SPD": 60, "CRE": 75, "DIS": 96 }
      },
      {
        "name": "Bixente Lizarazu (利扎拉祖)",
        "position": "LB",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 70, "MID": 75, "DEF": 88, "SPD": 85, "CRE": 75, "DIS": 92 }
      },
      {
        "name": "Iker Casillas (卡西利亚斯)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 92,
        "attributes": { "ATT": 10, "MID": 60, "DEF": 75, "SPD": 70, "CRE": 50, "DIS": 95 }
      }
  ],
  "Golden Sovereign": [
      {
        "name": "Diego Maradona (马拉多纳)",
        "position": "AM/SS",
        "role": "Starter",
        "ovr": 99,
        "attributes": { "ATT": 98, "MID": 99, "DEF": 40, "SPD": 88, "CRE": 99, "DIS": 60 }
      },
      {
        "name": "Andriy Shevchenko (舍甫琴科)",
        "position": "ST",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 96, "MID": 80, "DEF": 40, "SPD": 90, "CRE": 85, "DIS": 85 }
      },
      {
        "name": "Kaká (卡卡)",
        "position": "AM",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 92, "MID": 90, "DEF": 45, "SPD": 94, "CRE": 95, "DIS": 80 }
      },
      {
        "name": "Andrea Pirlo (皮尔洛)",
        "position": "CM",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 75, "MID": 99, "DEF": 60, "SPD": 60, "CRE": 96, "DIS": 85 }
      },
      {
        "name": "Clarence Seedorf (西多夫)",
        "position": "CM",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 85, "MID": 92, "DEF": 75, "SPD": 78, "CRE": 88, "DIS": 90 }
      },
      {
        "name": "Xabi Alonso (阿隆索)",
        "position": "CM/CDM",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 70, "MID": 95, "DEF": 80, "SPD": 55, "CRE": 85, "DIS": 95 }
      },
      {
        "name": "Gianluca Zambrotta (赞布罗塔)",
        "position": "LB/RB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 78, "MID": 82, "DEF": 88, "SPD": 88, "CRE": 80, "DIS": 92 }
      },
      {
        "name": "Alessandro Nesta (内斯塔)",
        "position": "CB",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 50, "MID": 75, "DEF": 97, "SPD": 75, "CRE": 70, "DIS": 92 }
      },
      {
        "name": "Jaap Stam (斯塔姆)",
        "position": "CB",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 50, "MID": 65, "DEF": 95, "SPD": 82, "CRE": 55, "DIS": 90 }
      },
      {
        "name": "Cafu (卡福)",
        "position": "RB",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 82, "MID": 86, "DEF": 90, "SPD": 92, "CRE": 85, "DIS": 95 }
      },
      {
        "name": "Dida (迪达)",
        "position": "GK",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 10, "MID": 55, "DEF": 60, "SPD": 70, "CRE": 40, "DIS": 80 }
      },
      {
        "name": "Filippo Inzaghi (因扎吉)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 92, "MID": 50, "DEF": 20, "SPD": 75, "CRE": 60, "DIS": 95 }
      },
      {
        "name": "Alessandro Del Piero (皮耶罗)",
        "position": "SS",
        "role": "Substitute",
        "ovr": 91,
        "attributes": { "ATT": 90, "MID": 88, "DEF": 40, "SPD": 80, "CRE": 94, "DIS": 85 }
      },
      {
        "name": "Rui Costa (鲁伊·科斯塔)",
        "position": "AM",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 80, "MID": 92, "DEF": 45, "SPD": 75, "CRE": 94, "DIS": 75 }
      },
      {
        "name": "Marco Verratti (维拉蒂)",
        "position": "CM",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 65, "MID": 94, "DEF": 82, "SPD": 70, "CRE": 92, "DIS": 82 }
      },
      {
        "name": "Lúcio (卢西奥)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 65, "MID": 75, "DEF": 92, "SPD": 80, "CRE": 70, "DIS": 85 }
      },
      {
        "name": "Andreas Brehme (布雷默)",
        "position": "LB",
        "role": "Substitute",
        "ovr": 90,
        "attributes": { "ATT": 78, "MID": 85, "DEF": 90, "SPD": 80, "CRE": 82, "DIS": 94 }
      },
      {
        "name": "Thibaut Courtois (库尔图瓦)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 91,
        "attributes": { "ATT": 10, "MID": 60, "DEF": 65, "SPD": 50, "CRE": 40, "DIS": 90 }
      }
  ],
  "Heavy Metal Storm": [
      {
        "name": "Robert Lewandowski (莱万多夫斯基)",
        "position": "ST",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 96, "MID": 75, "DEF": 45, "SPD": 82, "CRE": 80, "DIS": 92 }
      },
      {
        "name": "Mohamed Salah (萨拉赫)",
        "position": "RW",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 92, "MID": 80, "DEF": 50, "SPD": 95, "CRE": 88, "DIS": 85 }
      },
      {
        "name": "Sadio Mané (马内)",
        "position": "LW",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 88, "MID": 78, "DEF": 60, "SPD": 94, "CRE": 85, "DIS": 90 }
      },
      {
        "name": "Ruud Gullit (古利特)",
        "position": "CM/CF",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 92, "MID": 93, "DEF": 85, "SPD": 88, "CRE": 90, "DIS": 90 }
      },
      {
        "name": "Steven Gerrard (杰拉德)",
        "position": "CM",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 88, "MID": 88, "DEF": 85, "SPD": 82, "CRE": 80, "DIS": 98 }
      },
      {
        "name": "Michael Ballack (巴拉克)",
        "position": "CM",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 85, "MID": 88, "DEF": 82, "SPD": 75, "CRE": 78, "DIS": 95 }
      },
      {
        "name": "Andrew Robertson (罗伯逊)",
        "position": "LB",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 70, "MID": 82, "DEF": 86, "SPD": 90, "CRE": 75, "DIS": 95 }
      },
      {
        "name": "Virgil van Dijk (范戴克)",
        "position": "CB",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 75, "MID": 80, "DEF": 96, "SPD": 85, "CRE": 75, "DIS": 92 }
      },
      {
        "name": "Jürgen Kohler (科勒)",
        "position": "CB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 40, "MID": 60, "DEF": 95, "SPD": 75, "CRE": 50, "DIS": 96 }
      },
      {
        "name": "Trent Alexander-Arnold (阿诺德)",
        "position": "RB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 80, "MID": 94, "DEF": 70, "SPD": 80, "CRE": 90, "DIS": 75 }
      },
      {
        "name": "Alisson Becker (阿利松)",
        "position": "GK",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 10, "MID": 80, "DEF": 60, "SPD": 65, "CRE": 50, "DIS": 90 }
      },
      {
        "name": "Roberto Firmino (菲尔米诺)",
        "position": "CF/ST",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 82, "MID": 85, "DEF": 65, "SPD": 78, "CRE": 88, "DIS": 95 }
      },
      {
        "name": "Marco Reus (罗伊斯)",
        "position": "LW/AM",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 86, "MID": 85, "DEF": 50, "SPD": 88, "CRE": 88, "DIS": 80 }
      },
      {
        "name": "Jordan Henderson (亨德森)",
        "position": "CM",
        "role": "Substitute",
        "ovr": 85,
        "attributes": { "ATT": 70, "MID": 80, "DEF": 82, "SPD": 75, "CRE": 70, "DIS": 99 }
      },
      {
        "name": "Fabinho (法比尼奥)",
        "position": "CDM",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 60, "MID": 78, "DEF": 88, "SPD": 70, "CRE": 70, "DIS": 90 }
      },
      {
        "name": "Mats Hummels (胡梅尔斯)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 60, "MID": 85, "DEF": 90, "SPD": 60, "CRE": 75, "DIS": 92 }
      },
      {
        "name": "Alphonso Davies (戴维斯)",
        "position": "LB",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 78, "MID": 75, "DEF": 80, "SPD": 98, "CRE": 80, "DIS": 75 }
      },
      {
        "name": "Oliver Kahn (卡恩)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 92,
        "attributes": { "ATT": 10, "MID": 50, "DEF": 65, "SPD": 65, "CRE": 30, "DIS": 99 }
      }
  ],
  "Orange Revolution": [
      {
        "name": "Lionel Messi (梅西)",
        "position": "FW/CF",
        "role": "Starter",
        "ovr": 99,
        "attributes": { "ATT": 98, "MID": 99, "DEF": 45, "SPD": 88, "CRE": 99, "DIS": 75 }
      },
      {
        "name": "Ronaldinho (小罗)",
        "position": "LW",
        "role": "Starter",
        "ovr": 96,
        "attributes": { "ATT": 92, "MID": 94, "DEF": 35, "SPD": 89, "CRE": 99, "DIS": 60 }
      },
      {
        "name": "Garrincha (加林查)",
        "position": "RW",
        "role": "Starter",
        "ovr": 95,
        "attributes": { "ATT": 90, "MID": 88, "DEF": 30, "SPD": 92, "CRE": 99, "DIS": 50 }
      },
      {
        "name": "Xavi (哈维)",
        "position": "CM",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 75, "MID": 99, "DEF": 65, "SPD": 70, "CRE": 92, "DIS": 90 }
      },
      {
        "name": "Johan Neeskens (内斯肯斯)",
        "position": "CM",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 85, "MID": 88, "DEF": 80, "SPD": 85, "CRE": 82, "DIS": 95 }
      },
      {
        "name": "Pep Guardiola (瓜迪奥拉)",
        "position": "CDM",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 60, "MID": 92, "DEF": 80, "SPD": 65, "CRE": 85, "DIS": 96 }
      },
      {
        "name": "Ruud Krol (克洛尔)",
        "position": "LB/CB",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 80, "MID": 88, "DEF": 88, "SPD": 82, "CRE": 85, "DIS": 90 }
      },
      {
        "name": "Ronald Koeman (科曼)",
        "position": "CB",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 88, "MID": 92, "DEF": 88, "SPD": 70, "CRE": 80, "DIS": 85 }
      },
      {
        "name": "Carles Puyol (普约尔)",
        "position": "CB/RB",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 60, "MID": 70, "DEF": 96, "SPD": 78, "CRE": 60, "DIS": 99 }
      },
      {
        "name": "Carlos Alberto (阿尔贝托)",
        "position": "RB",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 82, "MID": 85, "DEF": 88, "SPD": 88, "CRE": 85, "DIS": 88 }
      },
      {
        "name": "Manuel Neuer (诺伊尔)",
        "position": "GK",
        "role": "Starter",
        "ovr": 95,
        "attributes": { "ATT": 50, "MID": 88, "DEF": 60, "SPD": 75, "CRE": 70, "DIS": 90 }
      },
      {
        "name": "Romário (罗马里奥)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 93,
        "attributes": { "ATT": 96, "MID": 70, "DEF": 25, "SPD": 88, "CRE": 90, "DIS": 60 }
      },
      {
        "name": "Hristo Stoichkov (斯托伊奇科夫)",
        "position": "FW",
        "role": "Substitute",
        "ovr": 91,
        "attributes": { "ATT": 92, "MID": 80, "DEF": 40, "SPD": 85, "CRE": 88, "DIS": 75 }
      },
      {
        "name": "Frenkie de Jong (德容)",
        "position": "CM",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 70, "MID": 90, "DEF": 78, "SPD": 82, "CRE": 88, "DIS": 85 }
      },
      {
        "name": "Jordi Alba (阿尔巴)",
        "position": "LB",
        "role": "Substitute",
        "ovr": 86,
        "attributes": { "ATT": 75, "MID": 80, "DEF": 80, "SPD": 92, "CRE": 80, "DIS": 85 }
      },
      {
        "name": "Daley Blind (布林德)",
        "position": "CB/LB/CDM",
        "role": "Substitute",
        "ovr": 85,
        "attributes": { "ATT": 60, "MID": 85, "DEF": 82, "SPD": 65, "CRE": 80, "DIS": 90 }
      },
      {
        "name": "Patrick Kluivert (克鲁伊维特)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 90, "MID": 75, "DEF": 40, "SPD": 82, "CRE": 82, "DIS": 80 }
      },
      {
        "name": "Marc-André ter Stegen (特尔施特根)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 10, "MID": 85, "DEF": 50, "SPD": 50, "CRE": 50, "DIS": 85 }
      }
  ],
  "The Iron Curtain": [
      {
        "name": "Gerd Müller (盖德·穆勒)",
        "position": "ST",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 98, "MID": 70, "DEF": 30, "SPD": 80, "CRE": 75, "DIS": 90 }
      },
      {
        "name": "Luis Suárez (老苏亚雷斯)",
        "position": "AM/CM",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 85, "MID": 92, "DEF": 60, "SPD": 75, "CRE": 90, "DIS": 85 }
      },
      {
        "name": "Lothar Matthäus (马特乌斯)",
        "position": "CM",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 88, "MID": 92, "DEF": 92, "SPD": 88, "CRE": 85, "DIS": 95 }
      },
      {
        "name": "Gennaro Gattuso (加图索)",
        "position": "CDM",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 50, "MID": 70, "DEF": 95, "SPD": 75, "CRE": 50, "DIS": 99 }
      },
      {
        "name": "Giacinto Facchetti (法切蒂)",
        "position": "LWB",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 82, "MID": 85, "DEF": 94, "SPD": 90, "CRE": 80, "DIS": 95 }
      },
      {
        "name": "Javier Zanetti (萨内蒂)",
        "position": "RWB",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 70, "MID": 80, "DEF": 92, "SPD": 88, "CRE": 75, "DIS": 98 }
      },
      {
        "name": "Tarcisio Burgnich (布尔尼奇)",
        "position": "CB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 50, "MID": 70, "DEF": 94, "SPD": 80, "CRE": 60, "DIS": 95 }
      },
      {
        "name": "Fabio Cannavaro (卡纳瓦罗)",
        "position": "CB",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 50, "MID": 70, "DEF": 98, "SPD": 85, "CRE": 65, "DIS": 96 }
      },
      {
        "name": "Franz Beckenbauer (贝肯鲍尔)",
        "position": "SW",
        "role": "Starter",
        "ovr": 96,
        "attributes": { "ATT": 88, "MID": 96, "DEF": 98, "SPD": 82, "CRE": 90, "DIS": 99 }
      },
      {
        "name": "Lev Yashin (雅辛)",
        "position": "GK",
        "role": "Starter",
        "ovr": 96,
        "attributes": { "ATT": 20, "MID": 60, "DEF": 80, "SPD": 70, "CRE": 50, "DIS": 99 }
      },
      {
        "name": "Luis Suárez (苏亚雷斯-乌拉圭)",
        "position": "ST",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 94, "MID": 82, "DEF": 60, "SPD": 82, "CRE": 88, "DIS": 92 }
      },
      {
        "name": "Giuseppe Bergomi (贝尔戈米)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 45, "MID": 65, "DEF": 94, "SPD": 75, "CRE": 50, "DIS": 95 }
      },
      {
        "name": "Claudio Gentile (詹蒂莱)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 40, "MID": 60, "DEF": 95, "SPD": 78, "CRE": 45, "DIS": 92 }
      },
      {
        "name": "Marco Tardelli (塔尔德利)",
        "position": "CM",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 75, "MID": 85, "DEF": 88, "SPD": 80, "CRE": 75, "DIS": 95 }
      },
      {
        "name": "Zbigniew Boniek (博涅克)",
        "position": "SS",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 85, "MID": 82, "DEF": 50, "SPD": 88, "CRE": 80, "DIS": 85 }
      },
      {
        "name": "Gaetano Scirea (西雷阿)",
        "position": "SW/CB",
        "role": "Substitute",
        "ovr": 91,
        "attributes": { "ATT": 65, "MID": 85, "DEF": 95, "SPD": 75, "CRE": 80, "DIS": 98 }
      },
      {
        "name": "Alessandro Altobelli (阿尔托贝利)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 86,
        "attributes": { "ATT": 88, "MID": 60, "DEF": 35, "SPD": 80, "CRE": 70, "DIS": 85 }
      },
      {
        "name": "Walter Zenga (曾加)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 10, "MID": 55, "DEF": 75, "SPD": 65, "CRE": 40, "DIS": 90 }
      }
  ],
  "Tactical Milan": [
      {
        "name": "Marco van Basten (范巴斯滕)",
        "position": "ST",
        "role": "Starter",
        "ovr": 96,
        "attributes": { "ATT": 96, "MID": 85, "DEF": 40, "SPD": 85, "CRE": 90, "DIS": 85 }
      },
      {
        "name": "Roberto Baggio (巴乔)",
        "position": "SS/ST",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 92, "MID": 92, "DEF": 40, "SPD": 85, "CRE": 96, "DIS": 75 }
      },
      {
        "name": "Roberto Donadoni (多纳多尼)",
        "position": "RM/LM",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 82, "MID": 88, "DEF": 65, "SPD": 85, "CRE": 88, "DIS": 92 }
      },
      {
        "name": "Alberigo Evani (埃瓦尼)",
        "position": "LM",
        "role": "Starter",
        "ovr": 85,
        "attributes": { "ATT": 75, "MID": 82, "DEF": 70, "SPD": 80, "CRE": 80, "DIS": 95 }
      },
      {
        "name": "Frank Rijkaard (里杰卡尔德)",
        "position": "CM",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 80, "MID": 90, "DEF": 94, "SPD": 80, "CRE": 85, "DIS": 95 }
      },
      {
        "name": "Demetrio Albertini (阿尔贝蒂尼)",
        "position": "CM",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 70, "MID": 90, "DEF": 75, "SPD": 70, "CRE": 85, "DIS": 90 }
      },
      {
        "name": "Antonio Cabrini (卡布里尼)",
        "position": "LB",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 78, "MID": 80, "DEF": 88, "SPD": 82, "CRE": 75, "DIS": 90 }
      },
      {
        "name": "Franco Baresi (巴雷西)",
        "position": "CB",
        "role": "Starter",
        "ovr": 94,
        "attributes": { "ATT": 60, "MID": 88, "DEF": 98, "SPD": 75, "CRE": 80, "DIS": 99 }
      },
      {
        "name": "Alessandro Costacurta (科斯塔库塔)",
        "position": "CB",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 50, "MID": 75, "DEF": 90, "SPD": 75, "CRE": 60, "DIS": 95 }
      },
      {
        "name": "Mauro Tassotti (塔索蒂)",
        "position": "RB",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 60, "MID": 75, "DEF": 90, "SPD": 75, "CRE": 65, "DIS": 95 }
      },
      {
        "name": "Dino Zoff (佐夫)",
        "position": "GK",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 10, "MID": 60, "DEF": 80, "SPD": 55, "CRE": 40, "DIS": 98 }
      },
      {
        "name": "Dejan Savićević (萨维切维奇)",
        "position": "AM/RM",
        "role": "Substitute",
        "ovr": 90,
        "attributes": { "ATT": 88, "MID": 90, "DEF": 40, "SPD": 85, "CRE": 95, "DIS": 60 }
      },
      {
        "name": "Jean-Pierre Papin (帕潘)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 90,
        "attributes": { "ATT": 92, "MID": 70, "DEF": 35, "SPD": 85, "CRE": 80, "DIS": 85 }
      },
      {
        "name": "Daniele Massaro (马萨罗)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 86,
        "attributes": { "ATT": 88, "MID": 70, "DEF": 50, "SPD": 82, "CRE": 75, "DIS": 90 }
      },
      {
        "name": "Carlo Ancelotti (安切洛蒂-球员)",
        "position": "CM",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 70, "MID": 88, "DEF": 75, "SPD": 60, "CRE": 82, "DIS": 92 }
      },
      {
        "name": "Christian Panucci (帕努奇)",
        "position": "RB/CB",
        "role": "Substitute",
        "ovr": 86,
        "attributes": { "ATT": 65, "MID": 70, "DEF": 88, "SPD": 75, "CRE": 60, "DIS": 88 }
      },
      {
        "name": "Ciro Ferrara (费拉拉)",
        "position": "CB",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 50, "MID": 60, "DEF": 92, "SPD": 75, "CRE": 55, "DIS": 95 }
      },
      {
        "name": "Gianluca Pagliuca (帕柳卡)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 10, "MID": 55, "DEF": 70, "SPD": 65, "CRE": 45, "DIS": 90 }
      }
  ],
  "Elegant Cannons": [
      {
        "name": "Pelé (贝利)",
        "position": "CF/SS",
        "role": "Starter",
        "ovr": 99,
        "attributes": { "ATT": 99, "MID": 95, "DEF": 50, "SPD": 92, "CRE": 98, "DIS": 85 }
      },
      {
        "name": "George Weah (维阿)",
        "position": "ST",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 92, "MID": 75, "DEF": 45, "SPD": 94, "CRE": 88, "DIS": 75 }
      },
      {
        "name": "Dennis Bergkamp (博格坎普)",
        "position": "SS/AM",
        "role": "Starter",
        "ovr": 93,
        "attributes": { "ATT": 90, "MID": 92, "DEF": 40, "SPD": 75, "CRE": 98, "DIS": 80 }
      },
      {
        "name": "Robert Pirès (皮雷)",
        "position": "LM/LW",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 85, "MID": 88, "DEF": 50, "SPD": 82, "CRE": 92, "DIS": 75 }
      },
      {
        "name": "Freddie Ljungberg (永贝里)",
        "position": "RM/RW",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 85, "MID": 80, "DEF": 60, "SPD": 90, "CRE": 82, "DIS": 90 }
      },
      {
        "name": "Patrick Vieira (维埃拉)",
        "position": "CM",
        "role": "Starter",
        "ovr": 92,
        "attributes": { "ATT": 75, "MID": 88, "DEF": 94, "SPD": 85, "CRE": 80, "DIS": 92 }
      },
      {
        "name": "Emmanuel Petit (佩蒂特)",
        "position": "CM/CDM",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 70, "MID": 82, "DEF": 88, "SPD": 75, "CRE": 75, "DIS": 90 }
      },
      {
        "name": "Ashley Cole (阿什利·科尔)",
        "position": "LB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 75, "MID": 80, "DEF": 92, "SPD": 90, "CRE": 78, "DIS": 90 }
      },
      {
        "name": "Sol Campbell (坎贝尔)",
        "position": "CB",
        "role": "Starter",
        "ovr": 89,
        "attributes": { "ATT": 50, "MID": 60, "DEF": 94, "SPD": 80, "CRE": 50, "DIS": 88 }
      },
      {
        "name": "Tony Adams (亚当斯)",
        "position": "CB",
        "role": "Starter",
        "ovr": 90,
        "attributes": { "ATT": 55, "MID": 65, "DEF": 95, "SPD": 65, "CRE": 55, "DIS": 98 }
      },
      {
        "name": "Lilian Thuram (图拉姆)",
        "position": "RB",
        "role": "Starter",
        "ovr": 91,
        "attributes": { "ATT": 65, "MID": 75, "DEF": 96, "SPD": 88, "CRE": 70, "DIS": 92 }
      },
      {
        "name": "David Seaman (希曼)",
        "position": "GK",
        "role": "Starter",
        "ovr": 88,
        "attributes": { "ATT": 10, "MID": 55, "DEF": 70, "SPD": 55, "CRE": 40, "DIS": 90 }
      },
      {
        "name": "Gilberto Silva (吉尔伯托·席尔瓦)",
        "position": "CDM",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 60, "MID": 80, "DEF": 90, "SPD": 70, "CRE": 70, "DIS": 95 }
      },
      {
        "name": "Cesc Fàbregas (法布雷加斯)",
        "position": "CM",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 80, "MID": 94, "DEF": 60, "SPD": 65, "CRE": 92, "DIS": 80 }
      },
      {
        "name": "Mesut Özil (厄齐尔)",
        "position": "AM",
        "role": "Substitute",
        "ovr": 89,
        "attributes": { "ATT": 75, "MID": 95, "DEF": 35, "SPD": 72, "CRE": 96, "DIS": 60 }
      },
      {
        "name": "Ian Wright (伊恩·赖特)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 90, "MID": 70, "DEF": 35, "SPD": 88, "CRE": 80, "DIS": 80 }
      },
      {
        "name": "Nicolas Anelka (阿内尔卡)",
        "position": "ST",
        "role": "Substitute",
        "ovr": 87,
        "attributes": { "ATT": 88, "MID": 75, "DEF": 30, "SPD": 92, "CRE": 82, "DIS": 70 }
      },
      {
        "name": "Jens Lehmann (莱曼)",
        "position": "GK",
        "role": "Substitute",
        "ovr": 88,
        "attributes": { "ATT": 10, "MID": 60, "DEF": 65, "SPD": 60, "CRE": 40, "DIS": 85 }
      }
  ]
};

const teamStatsSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    attack: { type: Type.INTEGER, description: "Rating 0-100" },
    defense: { type: Type.INTEGER, description: "Rating 0-100" },
    midfield: { type: Type.INTEGER, description: "Rating 0-100" },
    pace: { type: Type.INTEGER, description: "Rating 0-100" },
    creativity: { type: Type.INTEGER, description: "Rating 0-100" },
    discipline: { type: Type.INTEGER, description: "Rating 0-100" },
  },
  required: ["attack", "defense", "midfield", "pace", "creativity", "discipline"],
};

const teamSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    id: { type: Type.STRING },
    nameCN: { type: Type.STRING, description: "Creative Chinese team name" },
    nameEN: { type: Type.STRING, description: "Creative English team name" },
    coach: { type: Type.STRING, description: "Real legendary football manager name" },
    formation: { type: Type.STRING, description: "e.g., 4-3-3, 4-4-2, 3-5-2" },
    stadium: { type: Type.STRING, description: "Real historic stadium name" },
    tacticalStyle: { type: Type.STRING, description: "e.g., Tiki-Taka, Catenaccio, Total Football" },
    descriptionEN: { type: Type.STRING, description: "Compelling 1-sentence lore about the team's philosophy in English" },
    descriptionCN: { type: Type.STRING, description: "Compelling 1-sentence lore about the team's philosophy in Chinese" },
    primaryColor: { type: Type.STRING, description: "Hex color code" },
    secondaryColor: { type: Type.STRING, description: "Hex color code" },
    stats: teamStatsSchema,
  },
  required: ["id", "nameCN", "nameEN", "coach", "formation", "stadium", "tacticalStyle", "descriptionEN", "descriptionCN", "primaryColor", "secondaryColor", "stats"],
};

const responseSchema: Schema = {
  type: Type.OBJECT,
  properties: {
    teams: {
      type: Type.ARRAY,
      items: teamSchema,
    },
  },
  required: ["teams"],
};

// Helper to categorize positions
const getPosCategory = (pos: string): 'GK' | 'DF' | 'MF' | 'FW' => {
    const p = pos.toUpperCase();
    if (p.includes('GK')) return 'GK';
    if (p.includes('CB') || p.includes('LB') || p.includes('RB') || p.includes('WB') || p.includes('SW')) return 'DF';
    if (p.includes('CM') || p.includes('CDM') || p.includes('CAM') || p.includes('LM') || p.includes('RM') || p.includes('AM')) return 'MF';
    if (p.includes('ST') || p.includes('CF') || p.includes('LW') || p.includes('RW') || p.includes('FW') || p.includes('SS')) return 'FW';
    return 'MF'; // Default fallback
};

const calculateTeamStats = (squad: Player[]): TeamStats => {
  const starters = squad.filter(p => p.role === 'Starter');
  if (starters.length === 0) return { attack: 50, defense: 50, midfield: 50, pace: 50, creativity: 50, discipline: 50 };

  // Weights configuration: How much does a player's attribute count towards the team stat based on their position?
  // e.g. For "Team Attack", a Forward's ATT attribute is weighted 1.5x, while a Defender's is 0.2x.
  const weights = {
      attack:     { FW: 1.5, MF: 1.0, DF: 0.3, GK: 0.0 },
      defense:    { GK: 1.5, DF: 1.5, MF: 0.8, FW: 0.2 },
      midfield:   { MF: 1.5, FW: 0.5, DF: 0.5, GK: 0.1 },
      pace:       { FW: 1.2, MF: 1.0, DF: 1.0, GK: 0.5 },
      creativity: { MF: 1.5, FW: 1.2, DF: 0.5, GK: 0.2 },
      discipline: { DF: 1.5, GK: 1.0, MF: 1.0, FW: 0.5 }
  };

  const calculateWeightedStat = (statName: keyof typeof weights, attributeName: keyof Player['attributes']) => {
      let totalWeight = 0;
      let weightedSum = 0;

      starters.forEach(player => {
          const category = getPosCategory(player.position);
          const weight = weights[statName][category];
          const value = player.attributes[attributeName];

          weightedSum += value * weight;
          totalWeight += weight;
      });

      return Math.round(weightedSum / totalWeight);
  };

  return {
    attack: calculateWeightedStat('attack', 'ATT'),
    defense: calculateWeightedStat('defense', 'DEF'),
    midfield: calculateWeightedStat('midfield', 'MID'),
    pace: calculateWeightedStat('pace', 'SPD'),
    creativity: calculateWeightedStat('creativity', 'CRE'),
    discipline: calculateWeightedStat('discipline', 'DIS')
  };
};

export const fetchLeagueData = async (): Promise<LeagueResponse> => {
  // Fixed data provided by the user
  const specificTeams = [
    { nameCN: "绯红王朝", nameEN: "The Crimson Dynasty", coach: "Sir Alex Ferguson", stadium: "Old Trafford", formation: "4-4-2 / 4-4-1-1", style: "Fergie Time & Wing Play" },
    { nameCN: "蔚蓝控域", nameEN: "Azure Control", coach: "Pep Guardiola", stadium: "Etihad Stadium", formation: "4-3-3 / 3-2-4-1", style: "Tiki-Taka & Positional Play" },
    { nameCN: "黑曜石堡垒", nameEN: "Obsidian Fortress", coach: "José Mourinho", stadium: "Stamford Bridge", formation: "4-2-3-1 / 5-4-1", style: "Park the Bus & Counter" },
    { nameCN: "银河白昼", nameEN: "White Galaxy", coach: "Zinedine Zidane", stadium: "Stade de France", formation: "4-3-3 (Diamond)", style: "Clutch & Fluidity" },
    { nameCN: "金耀王冠", nameEN: "Golden Sovereign", coach: "Carlo Ancelotti", stadium: "Santiago Bernabéu", formation: "4-3-2-1 / 4-3-3", style: "Laissez-faire" },
    { nameCN: "重金属风暴", nameEN: "Heavy Metal Storm", coach: "Jürgen Klopp", stadium: "Anfield", formation: "4-3-3", style: "Gegenpressing" },
    { nameCN: "橙色革命", nameEN: "Orange Revolution", coach: "Johan Cruyff", stadium: "Camp Nou", formation: "3-4-3 / 4-3-3", style: "Total Football" },
    { nameCN: "铁幕军团", nameEN: "The Iron Curtain", coach: "Helenio Herrera", stadium: "Giuseppe Meazza", formation: "5-3-2 (Sweeper)", style: "Catenaccio" },
    { nameCN: "战术米兰", nameEN: "Tactical Milan", coach: "Arrigo Sacchi", stadium: "San Siro", formation: "4-4-2 (Flat)", style: "Zonal Pressing" },
    { nameCN: "优雅枪手", nameEN: "Elegant Cannons", coach: "Arsène Wenger", stadium: "Highbury", formation: "4-2-3-1 / 4-4-2", style: "Wengerball" }
  ];

  const prompt = `
    You are the Chairman of the "Pantheon Super League".
    
    Task:
    Enrich the following list of specific football teams to populate the league database.

    Input Data:
    ${JSON.stringify(specificTeams)}

    Requirements for JSON Output:
    1. **Data Consistency**: Use the provided Name (CN/EN), Coach, Stadium, and Tactical Style EXACTLY as provided.
    2. **Formation**: The input formation might be complex (e.g., "4-4-2 / 4-4-1-1"). In your output 'formation' field, ONLY use the primary/first formation as a clean string (e.g., "4-4-2").
    3. **Colors**: Assign specific hex colors based on the team identity:
       - Crimson Dynasty: #DA291C (Man Utd Red) & #FBE122 (Gold)
       - Azure Control: #6CABDD (City Blue) & #FFFFFF
       - Obsidian Fortress: #034694 (Chelsea Blue) & #1c1c1c (Obsidian)
       - White Galaxy: #FFFFFF & #000000 (Classic)
       - Golden Sovereign: #FEBE10 (Gold) & #00529F (Real Madrid Blue)
       - Heavy Metal Storm: #C8102E (Liverpool Red) & #00B2A9 (Teal)
       - Orange Revolution: #EDBB00 (Barca Yellow) & #A50044 (Barca Blue) or Dutch Orange.
       - Iron Curtain: #002D72 (Inter Blue) & #000000
       - Tactical Milan: #AC162C (Milan Red) & #000000
       - Elegant Cannons: #EF0107 (Arsenal Red) & #FFFFFF
    4. **Stats**: Generate specific stats (0-100) reflecting the 'Tactical Style'.
       - 'Tiki-Taka': High Creativity, High Midfield.
       - 'Catenaccio': High Defense, High Discipline.
       - 'Heavy Metal': High Pace, High Attack.
    5. **Description**: Write a compelling 1-sentence lore description suitable for a football trading card.
       - **descriptionEN**: The description in English.
       - **descriptionCN**: The description in Chinese.

    Return ONLY the raw JSON object matching the schema.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No data returned from Gemini");
    
    const parsedData = JSON.parse(jsonText) as LeagueResponse;

    // Post-process: Attach squads from local DB if available
    const enrichedTeams = parsedData.teams.map(team => {
        const squadData = SQUAD_DB[team.nameEN]; 
        if (squadData) {
            const calculatedStats = calculateTeamStats(squadData);
            return { ...team, squad: squadData, stats: calculatedStats };
        }
        return team;
    });

    return { teams: enrichedTeams };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
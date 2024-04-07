// 千葉ロッテマリーンズHPの選手団写真URL
const baseUrl =
  "https://www.marines.co.jp/media/sites/5/team/player/2024/ph_player_2024_playerno.jpg";
// 選手情報のオブジェクトを格納する配列
const players = [
  {
    no: "11",
    position: "投手",
    furigana: "さわむら ひろかず",
    name: "澤村 拓一",
  },
  {
    no: "14",
    position: "投手",
    furigana: "おじま かずや",
    name: "小島 和哉",
  },
  {
    no: "15",
    position: "投手",
    furigana: "みま まなぶ",
    name: "美馬 学",
  },
  {
    no: "16",
    position: "投手",
    furigana: "たねいち あつき",
    name: "種市 篤暉",
  },
  {
    no: "17",
    position: "投手",
    furigana: "ささき ろうき",
    name: "佐々木 朗希",
  },
  {
    no: "18",
    position: "投手",
    furigana: "ふたき こうた",
    name: "二木 康太",
  },
  {
    no: "19",
    position: "投手",
    furigana: "からかわ ゆうき",
    name: "唐川 侑己",
  },
  {
    no: "20",
    position: "投手",
    furigana: "とうじょう たいき",
    name: "東條 大樹",
  },
  {
    no: "24",
    position: "投手",
    furigana: "あづま ゆうすけ",
    name: "東妻 勇輔",
  },
  {
    no: "28",
    position: "投手",
    furigana: "きくち りく",
    name: "菊地 吏玖",
  },
  {
    no: "29",
    position: "投手",
    furigana: "にしの ゆうじ",
    name: "西野 勇士",
  },
  {
    no: "30",
    position: "投手",
    furigana: "ひろはた あつや",
    name: "廣畑 敦也",
  },
  {
    no: "31",
    position: "投手",
    furigana: "おおたに ひかる",
    name: "大谷 輝龍",
  },
  {
    no: "33",
    position: "投手",
    furigana: "やぎ あきら",
    name: "八木 彬",
  },
  {
    no: "34",
    position: "投手",
    furigana: "たかの しゅうた",
    name: "高野 脩汰",
  },
  {
    no: "35",
    position: "投手",
    furigana: "たなか はるや",
    name: "田中 晴也",
  },
  {
    no: "36",
    position: "投手",
    furigana: "さかもと こうしろう",
    name: "坂本 光士郎",
  },
  {
    no: "37",
    position: "投手",
    furigana: "おの ふみや",
    name: "小野 郁",
  },
  {
    no: "40",
    position: "投手",
    furigana: "にしむら たかひろ",
    name: "西村 天裕",
  },
  {
    no: "41",
    position: "投手",
    furigana: "じぇーむす・だいくすとら",
    name: "ジェームス・ダイクストラ",
  },
  {
    no: "42",
    position: "投手",
    furigana: "しー・しー・めるせです",
    name: "C.C.メルセデス",
  },
  {
    no: "43",
    position: "投手",
    furigana: "あきやま せいうん",
    name: "秋山 正雲",
  },
  {
    no: "46",
    position: "投手",
    furigana: "いわした だいき",
    name: "岩下 大輝",
  },
  {
    no: "47",
    position: "投手",
    furigana: "すずき しょうた",
    name: "鈴木 昭汰",
  },
  {
    no: "48",
    position: "投手",
    furigana: "なかむら としや",
    name: "中村 稔弥",
  },
  {
    no: "49",
    position: "投手",
    furigana: "もとまえ ふみや",
    name: "本前 郁也",
  },
  {
    no: "52",
    position: "投手",
    furigana: "ますだ なおや",
    name: "益田 直也",
  },
  {
    no: "53",
    position: "投手",
    furigana: "きむら ゆうと",
    name: "木村 優人",
  },
  {
    no: "56",
    position: "投手",
    furigana: "なかもり しゅんすけ",
    name: "中森 俊介",
  },
  {
    no: "59",
    position: "投手",
    furigana: "はやさか おと",
    name: "早坂 響",
  },
  {
    no: "60",
    position: "投手",
    furigana: "よこやま りくと",
    name: "横山 陸人",
  },
  {
    no: "62",
    position: "投手",
    furigana: "もり りょうたろう",
    name: "森 遼大朗",
  },
  {
    no: "64",
    position: "投手",
    furigana: "じゅにおーる・ふぇるなんです",
    name: "ジュニオール・フェルナンデス",
  },
  {
    no: "66",
    position: "投手",
    furigana: "さわだ けいすけ",
    name: "澤田 圭佑",
  },
  {
    no: "69",
    position: "投手",
    furigana: "じみー・こるでろ",
    name: "ジミー・コルデロ",
  },
  {
    no: "91",
    position: "投手",
    furigana: "にほ あきら",
    name: "二保 旭",
  },
  {
    no: "92",
    position: "投手",
    furigana: "くによし ゆうき",
    name: "国吉 佑樹",
  },
  {
    no: "120",
    position: "投手",
    furigana: "たなか ふうき",
    name: "田中 楓基",
  },
  {
    no: "121",
    position: "投手",
    furigana: "どひ せいや",
    name: "土肥 星也",
  },
  {
    no: "122",
    position: "投手",
    furigana: "いしかわ あゆむ",
    name: "石川 歩",
  },
  {
    no: "123",
    position: "投手",
    furigana: "かわむら ときと",
    name: "河村 説人",
  },
  {
    no: "124",
    position: "投手",
    furigana: "ふるや たくろう",
    name: "古谷 拓郎",
  },
  {
    no: "125",
    position: "投手",
    furigana: "ながしまだ きらと",
    name: "永島田 輝斗",
  },
  {
    no: "127",
    position: "投手",
    furigana: "よしかわ ゆうと",
    name: "吉川 悠斗",
  },
  {
    no: "128",
    position: "投手",
    furigana: "しらはま かいき",
    name: "白濱 快起",
  },
  {
    no: "133",
    position: "投手",
    furigana: "たけうち りょうた",
    name: "武内 涼太",
  },
  {
    no: "138",
    position: "投手",
    furigana: "よしだ りょう",
    name: "吉田 凌",
  },
  {
    no: "2",
    position: "捕手",
    furigana: "まつかわ こう",
    name: "松川 虎生",
  },
  {
    no: "32",
    position: "捕手",
    furigana: "さとう としや",
    name: "佐藤 都志也",
  },
  {
    no: "45",
    position: "捕手",
    furigana: "うえだ しょうた",
    name: "植田 将太",
  },
  {
    no: "55",
    position: "捕手",
    furigana: "かきぬま ともや",
    name: "柿沼 友哉",
  },
  {
    no: "65",
    position: "捕手",
    furigana: "てらち りゅうせい",
    name: "寺地 隆成",
  },
  {
    no: "126",
    position: "捕手",
    furigana: "むらやま りょうすけ",
    name: "村山 亮介",
  },
  {
    no: "137",
    position: "捕手",
    furigana: "とみやま こうのしん",
    name: "富山 紘之進",
  },
  {
    no: "00",
    position: "内野手",
    furigana: "いけだ らいと",
    name: "池田 来翔",
  },
  {
    no: "00",
    position: "内野手",
    furigana: "いけだ らいと",
    name: "池田 来翔",
  },
  {
    no: "4",
    position: "内野手",
    furigana: "ともすぎ あつき",
    name: "友杉 篤輝",
  },
  {
    no: "5",
    position: "内野手",
    furigana: "やすだ ひさのり",
    name: "安田 尚憲",
  },
  {
    no: "7",
    position: "内野手",
    furigana: "ふじおか ゆうだい",
    name: "藤岡 裕大",
  },
  {
    no: "8",
    position: "内野手",
    furigana: "なかむら しょうご",
    name: "中村 奨吾",
  },
  {
    no: "10",
    position: "内野手",
    furigana: "うえだ きゅうと",
    name: "上田 希由翔",
  },
  {
    no: "13",
    position: "内野手",
    furigana: "ひらさわ たいが",
    name: "平沢 大河",
  },
  {
    no: "39",
    position: "内野手",
    furigana: "おおした せいいちろう",
    name: "大下 誠一郎",
  },
  {
    no: "44",
    position: "内野手",
    furigana: "いのうえ せいや",
    name: "井上 晴哉",
  },
  {
    no: "57",
    position: "内野手",
    furigana: "おがわ りゅうせい",
    name: "小川 龍成",
  },
  {
    no: "67",
    position: "内野手",
    furigana: "ちゃたに けんた",
    name: "茶谷 健太",
  },
  {
    no: "68",
    position: "内野手",
    furigana: "かねだ ゆうた",
    name: "金田 優太",
  },
  {
    no: "99",
    position: "内野手",
    furigana: "ねふたり・そと",
    name: "ネフタリ・ソト",
  },
  {
    no: "129",
    position: "内野手",
    furigana: "かつまた るい",
    name: "勝又 琉偉",
  },
  {
    no: "130",
    position: "内野手",
    furigana: "くろかわ かいせい",
    name: "黒川 凱星",
  },
  {
    no: "134",
    position: "内野手",
    furigana: "まついし しんや",
    name: "松石 信八",
  },
  {
    no: "0",
    position: "外野手",
    furigana: "おぎの たかし",
    name: "荻野 貴司",
  },
  {
    no: "1",
    position: "外野手",
    furigana: "ふじわら きょうた",
    name: "藤原 恭大",
  },
  {
    no: "3",
    position: "外野手",
    furigana: "かくなか かつや",
    name: "角中 勝也",
  },
  {
    no: "22",
    position: "外野手",
    furigana: "ぐれごりー・ぽらんこ",
    name: "グレゴリー・ポランコ",
  },
  {
    no: "23",
    position: "外野手",
    furigana: "いしかわ しんご",
    name: "石川 慎吾",
  },
  {
    no: "25",
    position: "外野手",
    furigana: "おか ひろみ",
    name: "岡 大海",
  },
  {
    no: "38",
    position: "外野手",
    furigana: "たかべ あきと",
    name: "髙部 瑛斗",
  },
  {
    no: "50",
    position: "外野手",
    furigana: "あいと",
    name: "愛斗",
  },
  {
    no: "51",
    position: "外野手",
    furigana: "やまぐち こうき",
    name: "山口 航輝",
  },
  {
    no: "61",
    position: "外野手",
    furigana: "やまもと だいと",
    name: "山本 大斗",
  },
  {
    no: "63",
    position: "外野手",
    furigana: "わだ こうしろう",
    name: "和田 康士朗",
  },
  {
    no: "131",
    position: "外野手",
    furigana: "すがの つよし",
    name: "菅野 剛士",
  },
  {
    no: "135",
    position: "外野手",
    furigana: "こうの ひかる",
    name: "髙野 光海",
  },
  {
    no: "136",
    position: "外野手",
    furigana: "ふじた かずき",
    name: "藤田 和樹",
  },
];

// HTMLの各要素取得
const playerNo = document.querySelector(".player-no");
const playerBg = document.querySelector(".player-bg");
const playerPosition = document.querySelector(
  ".player-detail__text:first-child"
);
const playerFurigana = document.querySelector(
  ".player-detail__text:nth-child(2)"
);
const playerName = document.querySelector(".player-detail__text:last-child");

// 選手オブジェクトの配列からランダムな要素を取得
const randomPlayer = players[Math.floor(Math.random() * players.length)];
// 選手の写真URL設定
let photoUrl = baseUrl.replace("playerno", randomPlayer.no);

// 91番選手はURLの番号が異なるため別途書き換えを行う
if (randomPlayer.no === "91") {
  photoUrl = baseUrl.replace("playerno", "132");
}

// 各HTML要素にランダムな要素の各プロパティを設定
playerNo.innerHTML = `No.${randomPlayer.no}`;
playerBg.style.backgroundImage = `url('${photoUrl}')`;
playerPosition.innerHTML = randomPlayer.position;
playerFurigana.innerHTML = randomPlayer.furigana;
playerName.innerHTML = randomPlayer.name;

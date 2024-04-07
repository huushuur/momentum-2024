const quotes = [
  {
    quote: "人生は、大いなる戦場である。",
    author: "島崎 藤村",
  },
  {
    quote: "人の一生は重荷を負うて遠き道を行くがごとし。急ぐべからず。",
    author: "徳川 家康",
  },
  {
    quote:
      "俺の人生は挫折の連続なんです。 でもそこから這い上がろうとして、 未知の世界を知ることもある。",
    author: "本田 圭佑",
  },
  {
    quote:
      "真の発見の旅とは、新しい風景を求めることでなく、新しいものの見方を得ることだ。",
    author: "プルースト",
  },
  {
    quote:
      "人生はいたって単純。競争なんて本当は存在しないし、勝たなきゃいけないレースもない。",
    author: "スザンヌ・サマーズ",
  },
  {
    quote: "過ぎてかえらぬ不幸を悔やむのは、さらに不幸を招く近道だ。",
    author: "シェークスピア",
  },
  {
    quote: "頑張っても頑張っても直せないもの、それが個性。",
    author: "光浦 靖子",
  },
  {
    quote: "ネガティブを潰すのはポジティブではない。没頭だ。",
    author: "若林 正恭",
  },
  {
    quote:
      "人間ってのはもともとみんな違う。無理に普通にならなくてもいいはずだ。",
    author: "ズラタン・イブラヒモビッチ",
  },
  {
    quote: "下を向くのは、出勤時に靴をはくときだけさ。",
    author: "ローランド",
  },
];

const quote = document.querySelector("#quote span:first-of-type");
const author = document.querySelector("#quote span:last-of-type");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

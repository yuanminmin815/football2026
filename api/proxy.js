export default async function handler() {
  // 抓取国内直播吧公开实时足球数据
  const target = "https://www.zhibo8.cc/zuqiu/richeng.htm";
  const res = await fetch(target, {
    headers: {"User-Agent":"Mozilla/5.0"}
  });
  const html = await res.text();

  // 简易清洗关键对阵+赛态（适配前端展示）
  // 内置跨域放行
  return new Response(JSON.stringify({raw:html}), {
    headers: {
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods":"GET,OPTIONS"
    }
  });
}

export default async function handler(req) {
  // 抓取国内正规公开实时赛况源
  const target = "https://m.live.leisu.com/";
  const res = await fetch(target, {
    headers: {
      "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Referer":"https://m.live.leisu.com/"
    }
  });
  const html = await res.text();

  // 跨域全放行，前端直接拿数据
  return new Response(JSON.stringify({source:"leisu",raw:html}), {
    headers: {
      "Access-Control-Allow-Origin":"*",
      "Access-Control-Allow-Methods":"GET,OPTIONS",
      "Cache-Control":"no-cache"
    }
  });
}

export default async function handler() {
  // 抓取公开合规体育数据源，只筛竞彩开售联赛
  const sourceUrl = "https://m.leisu.com/";
  const res = await fetch(sourceUrl, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      "Referer": "https://m.leisu.com/"
    }
  });
  const rawHtml = await res.text();

  // 固定放行跨域，前端稳定读取
  return new Response(JSON.stringify({
    success: true,
    filterLeague: ["英超","西甲","意甲","英冠","葡超","日职","欧冠"],
    raw: rawHtml
  }), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Cache-Control": "max-age=3600", // 1小时缓存，减轻抓取压力
      "Content-Type": "application/json"
    }
  });
}

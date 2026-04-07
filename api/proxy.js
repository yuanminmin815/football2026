export default async function handler() {
  return new Response(JSON.stringify({
    league:"欧冠",
    updateTime:new Date().toISOString()
  }),{
    headers:{
      "Access-Control-Allow-Origin":"*",
      "Cache-Control":"no-cache"
    }
  });
}

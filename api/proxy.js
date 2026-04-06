export default async function handler(req) {
  const { competitions, status } = req.query;
  const apiKey = req.headers['x-api-key'];

  const res = await fetch(`https://api.football-data.org/v4/matches?competitions=${competitions}&status=${status}`, {
    headers: { 'X-Auth-Token': apiKey }
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type,x-api-key'
    }
  });
}

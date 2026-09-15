export async function onRequest(context) {
  const mockData = [
    { platform: "淘宝", brand: "海尔", model: "M123", price: 289, stock: true, link: "https://taobao.com/xxx" },
    { platform: "京东", brand: "海尔", model: "M123", price: 299, stock: true, link: "https://jd.com/xxx" },
    { platform: "唯品会", brand: "海尔", model: "M123", price: 319, stock: false, link: "https://vip.com/xxx" }
  ];

  return new Response(JSON.stringify({
    success: true,
    query: "海尔 M123 微波炉",
    results: mockData
  }), {
    headers: { "Content-Type": "application/json" }
  });
}
// server/api/sse.js
export default defineEventHandler(async (event) => {
    event.res.setHeader('Content-Type', 'text/event-stream')
    event.res.setHeader('Cache-Control', 'no-cache')
    event.res.setHeader('Connection', 'keep-alive')
  
    try {
      const data = await fetchSseData() // 从后端获取 SSE 数据
      event.res.write(`data: ${JSON.stringify(data)}\n\n`)
    } catch (error) {
      console.error('Error fetching SSE data:', error)
      event.res.write(`event: error\ndata: ${JSON.stringify({ error: 'Error fetching data' })}\n\n`)
    }
  
    event.onClose(() => {
      console.log('SSE connection closed')
    })
  })
  
  // 假设存在一个 fetchSseData 函数从后端获取数据
  async function fetchSseData() {
    const response = await fetch('/api/sse-data')
    return await response.json()
  }
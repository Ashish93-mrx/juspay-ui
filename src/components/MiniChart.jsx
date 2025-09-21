import { LineChart, Line, ResponsiveContainer } from 'recharts'

export default function MiniChart({ data = [] }) {
  return (
    <ResponsiveContainer width="100%" height={60}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="value" stroke="#4C8BF5" strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

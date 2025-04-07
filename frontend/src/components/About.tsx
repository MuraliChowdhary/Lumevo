import { Card, CardHeader, CardTitle, CardContent } from "./ui/card"

export default function ProductCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3 px-4">
      {/* Card 1 */}
      <Card>
        <CardHeader>
          <CardTitle>Daily Motivation, Straight to You</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Start your day with a fresh quote, a habit challenge, or an uplifting story.
            Get daily doses of inspiration to stay grounded and energized.
            ✨ One push of positivity a day keeps doubt away.
          </p>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card>
        <CardHeader>
          <CardTitle>Curated Content That Matters</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            From personal growth to productivity and mindfulness, our blog is filled with
            real stories, deep reflections, and actionable advice. We help you live motivation.
          </p>
        </CardContent>
      </Card>

      {/* Card 3 */}
      <Card>
        <CardHeader>
          <CardTitle>A Community That Cares</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            This isn’t just another site. It’s a space for dreamers and doers. Join a
            growing community where every word lifts you up. 🌱 Together, we grow.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

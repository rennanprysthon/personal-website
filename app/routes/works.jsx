import workStyle from '~/styles/routes/works.css'

export function links () {
  return [
    {
      rel: "stylesheet",
      href: workStyle
    }
  ]
}

export default function Works () {
  return (
    <section>
        <h2>Works</h2>
    </section>
  )
}

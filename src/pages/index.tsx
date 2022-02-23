const foo = 'baar'

export default function Home() {
  return (
    <div>
      <h1 style={{ fontFamily: 'monospace' }}>
        foo; <br /> {foo};
      </h1>
    </div>
  )
}

import { Navigation } from '../Navigation'

export function Header() {
  return (
    <header className="mb-10">
      <div className="max-w-screen-lg mx-auto flex justify-between items-end border-b border-b-slate-200">
        <h1 className="text-5xl font-bold tracking-tighter self-center">
          10News<span className="text-emerald-500">.</span>
        </h1>

        <Navigation.Root>
          <Navigation.Item>
            <Navigation.Link href="#" text="Economia" />
          </Navigation.Item>

          <Navigation.Item>
            <Navigation.Link href="#" text="Internacional" />
          </Navigation.Item>

          <Navigation.Item>
            <Navigation.Link href="#" text="Política" />
          </Navigation.Item>

          <Navigation.Item>
            <Navigation.Link href="#" text="Criptomoedas" />
          </Navigation.Item>
        </Navigation.Root>
      </div>
    </header>
  )
}

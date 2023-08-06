import { useGetPokemonQuery } from '@/services/query/pokemon.ts'

function App() {
  const { data } = useGetPokemonQuery({})
  console.log(data)

  return (
    <>
      <div className="text-red-600 text-3xl">hello world</div>
    </>
  )
}

export default App

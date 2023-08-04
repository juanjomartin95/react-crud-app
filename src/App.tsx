import { useGetPokemonQuery } from '@/services/query/pokemon.ts'

function App() {
  const { data } = useGetPokemonQuery({})
  console.log(data)

  return <>Hello World</>
}

export default App

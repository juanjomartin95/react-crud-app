import { useGetPokemonQuery } from '@/services/query/pokemon.ts'
import { useTranslation } from 'react-i18next'

function App() {
  const { data } = useGetPokemonQuery({})

  const { t } = useTranslation()

  return (
    <>
      <div className="text-red-600 text-3xl">{t('TITLE')}</div>
      {data && (
        <ul>
          {data.results.map(({ name }) => (
            <li>{name}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default App

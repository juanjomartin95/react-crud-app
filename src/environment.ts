interface AppEnvVars {
  basePath: string
  baseApiUrl: string
}

export default Object.keys(import.meta.env)
  .filter((envKey) => envKey.startsWith('VITE_'))
  .reduce((env, envKey) => {
    const key = envKey
      .replace('VITE_', '')
      .split('_')
      .map((keyPart, i) => `${i ? keyPart[0] : ''}${keyPart.substring(i ? 1 : 0).toLowerCase()}`)
      .join('')
    let value = import.meta.env[envKey]
    value = ['true', 'false'].includes(value.toLowerCase()) ? value === 'true' : value
    return { ...env, [key]: value }
  }, {}) as AppEnvVars

export const getAPIUrl = (context: string) => {

  if (context.startsWith('/')) {
    context = context.substring(1, context.length)
  }

  return `${import.meta.env.VITE_REACT_APP_API}/${context}`
}

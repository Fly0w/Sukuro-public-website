export default defineEventHandler(() => {
  const config = useRuntimeConfig()

  return {
    email: config.contactEmail || '',
  }
})

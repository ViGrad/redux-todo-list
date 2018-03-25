export const loadState = () => {
  try {
    const serialisableState = localStorage.getItem('state')
    return serialisableState === null
      ? undefined
      : JSON.parse(serialisableState)
  }
  catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  const serialisableState = JSON.stringify(state)
  localStorage.setItem('state', serialisableState)
}
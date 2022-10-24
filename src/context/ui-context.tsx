import { createContext, useCallback, useContext, useState } from 'react'

interface IUiContext {
  state: IUiState
  actions: IUiActions
}

interface IUiState {
  showSearch: boolean
}

interface IUiActions {
  handleShowSearch: () => void
  handleHideSearch: () => void
}

const UiContext = createContext<IUiContext | null>(null)
UiContext.displayName = 'UiContext'

const UiProvider = ({ children }: { children: JSX.Element }) => {
  const [state, setState] = useState({ showSearch: true } as IUiState)

  const handleShowSearch = useCallback(
    () => setState((prev) => ({ ...prev, showSearch: true })),
    []
  )
  const handleHideSearch = useCallback(
    () => setState((prev) => ({ ...prev, showSearch: false })),
    []
  )

  const actions: IUiActions = {
    handleShowSearch,
    handleHideSearch,
  }

  return (
    <UiContext.Provider value={{ state, actions }}>
      {children}
    </UiContext.Provider>
  )
}

const useUiContext = () => {
  const context = useContext(UiContext)

  if (!context) {
    throw new Error(`useUiContext must be used within a UiProvider`)
  }

  return context
}

export { UiProvider, useUiContext }

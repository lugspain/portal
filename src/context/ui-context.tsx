import { createContext, useCallback, useContext, useReducer } from 'react'

const initialValue: any = { showSearch: true }

const UiContext = createContext(initialValue)
UiContext.displayName = 'UiContext'

const ACTIONS = {
  SHOW_SEARCH: 'SHOW_SEARCH',
  HIDE_SEARCH: 'HIDE_SEARCH',
}

const uiReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'HIDE_SEARCH': {
      return {
        ...state,
        showSearch: false,
      }
    }
    case 'SHOW_SEARCH': {
      return {
        ...state,
        showSearch: true,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const UiProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(uiReducer, initialValue)

  const showSearch = useCallback(
    () => dispatch({ type: ACTIONS.SHOW_SEARCH }),
    []
  )
  const hideSearch = useCallback(
    () => dispatch({ type: ACTIONS.HIDE_SEARCH }),
    []
  )

  const actions = {
    showSearch,
    hideSearch,
  }

  return (
    <UiContext.Provider value={{ state, actions }}>
      {children}
    </UiContext.Provider>
  )
}

const useUiContext = () => {
  const context = useContext(UiContext)

  if (!Object.keys(context).length) {
    throw new Error(`useUiContext must be used within a UiProvider`)
  }

  return context
}

export { UiProvider, useUiContext }

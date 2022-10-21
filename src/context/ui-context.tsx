import { createContext, useCallback, useContext, useReducer } from 'react'

interface IUiState {
  showSearch: boolean
}

const initialValue: IUiState = {
  showSearch: true,
}

const UiContext = createContext(initialValue)
UiContext.displayName = 'UiContext'

enum ACTIONS {
  SHOW_SEARCH = 'SHOW_SEARCH',
  HIDE_SEARCH = 'HIDE_SEARCH',
}

interface IUiActionTypes {
  type: ACTIONS.SHOW_SEARCH | ACTIONS.HIDE_SEARCH
}

interface IActions {
  showSearch: () => void
  hideSearch: () => void
}

const uiReducer = (state: IUiState, action: IUiActionTypes) => {
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

  const actions: IActions = {
    showSearch,
    hideSearch,
  }

  return (
    <UiContext.Provider
      value={{ state, actions } as { state: IUiState; actions: IActions }}
    >
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

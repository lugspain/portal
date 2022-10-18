import { createContext, useContext, useReducer } from 'react'

const initialValue: any = { showSearch: true, pepe: true }

const UiContext = createContext(initialValue)
UiContext.displayName = 'UiContext'

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

  return (
    <UiContext.Provider value={{ state, dispatch }}>
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

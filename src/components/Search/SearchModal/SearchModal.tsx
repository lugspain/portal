import { useEffect, useState } from 'react'
import ClayModal from '@clayui/modal'
import ClayLoadingIndicator from '@clayui/loading-indicator'
import { Observer } from '@clayui/modal/lib/types'
import ClayManagementToolbar from '@clayui/management-toolbar'
import { ClayInput } from '@clayui/form'
import SearchResults from '../SearchResults/SearchResults'
import fetchResults from 'api/fetch-results'
import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import {
  ClayModalBodyStyled,
  ClayManagementToolbarStyled,
  ClayEmptyStateStyled,
  ClayButtonWithIconStyled,
  CloseButtonStyled,
} from './SearchModalStyled'
import { ClayLoadingIndicatorWrapperStyled } from 'assets/styles/containers'
import searchImage from 'assets/images/search_state.gif'
import emptyImage from 'assets/images/empty_state.gif'
import ErrorFallback from 'components/ErrorFallback/ErrorFallback'
import { CustomError } from 'types'

const SearchModal = ({ open, observer, onClick }: IProps) => {
  const [value, setValue] = useState('')
  const location = useLocation()

  const { data, isLoading, error, refetch } = useQuery(['search', value], () =>
    fetchResults({ value })
  )

  useEffect(() => {
    onClick()
  }, [location, onClick])

  return (
    <>
      {open && (
        <ClayModal observer={observer} data-cy="search-modal">
          <ClayModalBodyStyled scrollable>
            <CloseButtonStyled
              displayType="unstyled"
              symbol="times"
              onClick={() => {
                onClick()
              }}
            />
            <ClayManagementToolbarStyled>
              <ClayManagementToolbar.Search onlySearch>
                <ClayInput.Group>
                  <ClayInput.GroupItem>
                    <ClayInput
                      autoFocus
                      placeholder="Buscar"
                      aria-label="Search"
                      className="form-control input-group-inset input-group-inset-after"
                      onChange={(event) => setValue(event.target.value)}
                      type="text"
                      value={value}
                    />
                    <ClayInput.GroupInsetItem after tag="span">
                      <ClayButtonWithIconStyled
                        displayType="unstyled"
                        symbol={value ? 'times' : 'search'}
                        onClick={() => {
                          value && setValue('')
                        }}
                        value={value}
                      />
                    </ClayInput.GroupInsetItem>
                  </ClayInput.GroupItem>
                </ClayInput.Group>
              </ClayManagementToolbar.Search>
            </ClayManagementToolbarStyled>
            {data?.length ? (
              <SearchResults results={data} />
            ) : isLoading ? (
              <ClayLoadingIndicatorWrapperStyled>
                <ClayLoadingIndicator displayType="secondary" size="sm" />
              </ClayLoadingIndicatorWrapperStyled>
            ) : error ? (
              <ErrorFallback
                resetCallback={refetch}
                error={error as CustomError}
              />
            ) : (
              <ClayEmptyStateStyled
                description=""
                imgSrc={value ? emptyImage : searchImage}
                title={
                  value
                    ? 'Vaya, no hemos encontrado nada'
                    : 'Introduce un término de búsqueda'
                }
              />
            )}
          </ClayModalBodyStyled>
        </ClayModal>
      )}
    </>
  )
}

interface IProps {
  open: boolean
  onClick: () => void
  observer: Observer
}

export default SearchModal

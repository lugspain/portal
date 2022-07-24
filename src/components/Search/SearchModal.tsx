import { useCallback, useEffect, useState } from 'react'
import ClayModal from '@clayui/modal'
import ClayButton from '@clayui/button'
import { Observer } from '@clayui/modal/lib/types'
import spritemap from 'assets/images/icons.svg'
import ClayManagementToolbar from '@clayui/management-toolbar'
import { ClayInput } from '@clayui/form'
import { ClayButtonWithIcon } from '@clayui/button'
import SearchResults from './SearchResults'
import fetchResults from 'api/fetch-results'
import { useLocation } from 'react-router-dom'

const SearchModal = ({ open, observer, onClick }: IProps) => {
  const [value, setValue] = useState('')
  const [results, setResults] = useState([])
  const location = useLocation()

  useEffect(() => {
    onClick()
  }, [location, onClick])

  useEffect(() => {
    const search = async () => {
      setResults(await fetchResults({ value }))
    }
    search()
  }, [value])

  return (
    <>
      {open && (
        <ClayModal observer={observer} spritemap={spritemap}>
          <ClayModal.Body>
            <ClayManagementToolbar>
              <ClayManagementToolbar.Search onlySearch>
                <ClayInput.Group>
                  <ClayInput.GroupItem>
                    <ClayInput
                      placeholder="Buscar"
                      aria-label="Search"
                      className="form-control input-group-inset input-group-inset-after"
                      onChange={(event) => setValue(event.target.value)}
                      type="text"
                      value={value}
                    />
                    <ClayInput.GroupInsetItem after tag="span">
                      <ClayButtonWithIcon
                        spritemap={spritemap}
                        displayType="unstyled"
                        symbol="search"
                        type="submit"
                      />
                    </ClayInput.GroupInsetItem>
                  </ClayInput.GroupItem>
                </ClayInput.Group>
              </ClayManagementToolbar.Search>
            </ClayManagementToolbar>

            <SearchResults results={results} />
          </ClayModal.Body>
          <ClayModal.Footer
            last={
              <ClayButton displayType="secondary" onClick={onClick}>
                {'Cerrar'}
              </ClayButton>
            }
          />
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

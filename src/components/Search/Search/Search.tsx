import { useCallback } from 'react'
import SearchButton from '../SearchButton/SearchButton'
import SearchModal from '../SearchModal/SearchModal'
import { useModal } from '@clayui/modal'
import { DisplayType } from '@clayui/alert'

const Search = ({
  small,
  buttonText,
  displayType = 'secondary' as DisplayType,
}: IProps) => {
  const { observer, onOpenChange, open } = useModal()

  const closeModalCallback = useCallback(
    () => onOpenChange(false),
    [onOpenChange]
  )

  return (
    <>
      <SearchButton
        small={small}
        text={buttonText}
        displayType={displayType}
        onClick={() => onOpenChange(true)}
      />
      <SearchModal
        observer={observer}
        onClick={closeModalCallback}
        open={open}
      />
    </>
  )
}

interface IProps {
  buttonText: string
  small?: boolean
  displayType?: DisplayType
}

export default Search

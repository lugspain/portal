import { useCallback } from 'react'
import SearchButton from './SearchButton'
import SearchModal from './SearchModal'
import { useModal } from '@clayui/modal'

const Search = ({ buttonText }: IProps) => {
  const { observer, onOpenChange, open } = useModal()

  const closeModalCallback = useCallback(
    () => onOpenChange(false),
    [onOpenChange]
  )

  return (
    <>
      <SearchButton text={buttonText} onClick={() => onOpenChange(true)} />
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
}

export default Search

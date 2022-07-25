import { DisplayType } from '@clayui/alert'
import ClayButton from '@clayui/button'

const SearchButton = ({ small, text, onClick, displayType }: IProps) => {
  return (
    <ClayButton small={small} onClick={onClick} displayType={displayType}>
      {text}
    </ClayButton>
  )
}

interface IProps {
  text: string
  onClick: () => void
  small?: boolean
  displayType: DisplayType | undefined
}

export default SearchButton

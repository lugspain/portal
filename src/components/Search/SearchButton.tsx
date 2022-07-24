import ClayButton from '@clayui/button'

const SearchButton = ({ text, onClick }: IProps) => {
  return (
    <ClayButton onClick={onClick} displayType="secondary">
      {text}
    </ClayButton>
  )
}

interface IProps {
  text: string
  onClick: () => void
}

export default SearchButton

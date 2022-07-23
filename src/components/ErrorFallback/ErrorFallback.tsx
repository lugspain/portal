import ClayAlert from '@clayui/alert'
import ClayButton from '@clayui/button'
import { ErrorFallbackStyled } from './ErrorFallbackStyled'

const ErrorFallback = ({ resetErrorBoundary }: IProps) => {
  return (
    <ErrorFallbackStyled>
      <ClayAlert displayType="warning" title="Something went wrong">
        Please try again
        <ClayAlert.Footer>
          <ClayButton.Group>
            <ClayButton alert onClick={resetErrorBoundary}>
              Fetch events
            </ClayButton>
          </ClayButton.Group>
        </ClayAlert.Footer>
      </ClayAlert>
    </ErrorFallbackStyled>
  )
}

interface IProps {
  resetErrorBoundary: (...args: Array<unknown>) => void
}

export default ErrorFallback

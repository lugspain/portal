import ClayAlert from '@clayui/alert'
import ClayButton from '@clayui/button'
import { CustomError } from 'types'
import { ErrorFallbackStyled } from './ErrorFallbackStyled'

const ErrorFallback = ({ resetCallback, error }: IProps) => {
  const castedError = error as CustomError

  return (
    <ErrorFallbackStyled>
      <ClayAlert displayType="warning" title="Something went wrong:">
        <span>{castedError.message}.</span>
        <code dangerouslySetInnerHTML={{ __html: castedError.response.data }} />
        <code
          dangerouslySetInnerHTML={{ __html: castedError.request.responseURL }}
        />
        <ClayAlert.Footer>
          <ClayButton.Group>
            {resetCallback && (
              <ClayButton alert onClick={resetCallback}>
                Re-fetch events
              </ClayButton>
            )}
          </ClayButton.Group>
        </ClayAlert.Footer>
      </ClayAlert>
    </ErrorFallbackStyled>
  )
}

interface IProps {
  resetCallback?: () => void
  error?: CustomError
}

export default ErrorFallback

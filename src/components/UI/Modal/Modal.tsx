import ClayButton from '@clayui/button'
import ClayModal, { useModal } from '@clayui/modal'
import spritemap from 'assets/images/icons.svg'
import VideoPlayer from 'components/UI/VideoPlayer/VideoPlayer'

const Modal = ({ label, link }: IProps) => {
  const { observer, onOpenChange, open } = useModal()

  return (
    <>
      {open && (
        <ClayModal observer={observer} size="lg" spritemap={spritemap}>
          <ClayModal.Header>{label}</ClayModal.Header>
          <ClayModal.Body>
            <VideoPlayer text={link} title={label} />
          </ClayModal.Body>
        </ClayModal>
      )}
      <div className="mb-1">
        <ClayButton
          className="p-0"
          displayType="link"
          onClick={() => onOpenChange(true)}
        >
          {label}
        </ClayButton>
      </div>
    </>
  )
}

interface IProps {
  label: string
  link: string
}

export default Modal

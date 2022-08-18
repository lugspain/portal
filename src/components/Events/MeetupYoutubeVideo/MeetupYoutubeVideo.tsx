const MeetupYoutubeVideo = ({ description }: IProps) => {
  if (!description) {
    return null
  }
  const arrayDescription = description.split('[youtube]')
  const endOfYoutubeLink = arrayDescription[1].indexOf(')')
  const youtubeLink = arrayDescription[1].slice(1, endOfYoutubeLink)

  const mockedYoutubeLink = 'https://www.youtube.com/embed/8BGfDJ1j5-Q'

  return (
    <>
      <p>{youtubeLink}</p>
      <iframe
        title="myFrame"
        width="560"
        height="315"
        src={mockedYoutubeLink}
        frameBorder="0"
      ></iframe>
    </>
  )
}

interface IProps {
  description: string | undefined
}
export default MeetupYoutubeVideo

const useYoutubeEmbedUrl = (text: string | undefined): string | undefined => {
  if (!text) {
    return
  }
  const YOUTUBE_EMBED_BASE_URL = 'http://www.youtube.com/embed/'

  const youtubeLink = text.match(
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/gi
  )

  return youtubeLink
    ? YOUTUBE_EMBED_BASE_URL + youtubeLink[0].split('v=')[1]
    : undefined
}

const VideoPlayer = ({ text, title }: IProps) => {
  const videoUrl = useYoutubeEmbedUrl(text)

  if (!videoUrl) {
    return null
  }

  return (
    <IframeWrapperStyled>
      <iframe title={title} src={videoUrl} frameBorder="0" />
    </IframeWrapperStyled>
  )
}

interface IProps {
  text: string | undefined
  title: string
}
export default VideoPlayer

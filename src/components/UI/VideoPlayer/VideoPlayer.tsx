import { FallbackImageStyled, IframeWrapperStyled } from './VideoPlayerStyled'
import { Image } from 'types'
import buildImageUrl from 'utils/build-image-url'

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed'
const YOUTUBE_LINK_REGEX =
  /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w\?‌​=]*)?/gi
const YOUTUBE_ID_REGEX = /([A-Za-z0-9_\-]{11})/gi

const _getYoutubeVideoId = (string: string): string => {
  const _link: RegExpMatchArray | '' | null = string.match(YOUTUBE_LINK_REGEX)
  const id: RegExpMatchArray | '' | null = _link?.length
    ? _link[0].match(YOUTUBE_ID_REGEX)
    : ''

  return id && id.length ? id[0] : ''
}

const useYoutubeEmbedUrl = (text: string | undefined): string | undefined => {
  if (!text) {
    return
  }

  const youtubeVideoId = _getYoutubeVideoId(text)

  return youtubeVideoId
    ? `${YOUTUBE_EMBED_BASE_URL}/${youtubeVideoId}`
    : undefined
}

const VideoPlayer = ({ fallbackImage, text, title }: IProps) => {
  const videoUrl = useYoutubeEmbedUrl(text)

  return (
    <>
      {!!videoUrl ? (
        <IframeWrapperStyled>
          <iframe title={title} src={videoUrl} frameBorder="0" />
        </IframeWrapperStyled>
      ) : (
        <FallbackImageStyled>
          <img src={buildImageUrl(fallbackImage.id)} alt={title} />
        </FallbackImageStyled>
      )}
    </>
  )
}

interface IProps {
  fallbackImage: Image
  text: string | undefined
  title: string
}
export default VideoPlayer

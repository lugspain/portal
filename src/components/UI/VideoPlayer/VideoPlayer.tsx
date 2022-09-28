import { FallbackImageStyled, IframeWrapperStyled } from './VideoPlayerStyled'
import { Comments, Image } from 'types'
import buildImageUrl from 'utils/build-image-url'

const YOUTUBE_EMBED_BASE_URL = 'https://www.youtube.com/embed'
const YOUTUBE_LINK_REGEX =
  /http(?:s?):\/\/(?:www\.)?youtu(?:be\.com\/watch\?v=|\.be\/)([\w\-\_]*)(&(amp;)?‌​[\w?‌​=]*)?/gi
const YOUTUBE_ID_REGEX = /([A-Za-z0-9_-]{11})/gi

const _getYoutubeVideoIdFromText = (string: string): string => {
  const _link: RegExpMatchArray | '' | null = string.match(YOUTUBE_LINK_REGEX)
  const id: RegExpMatchArray | '' | null = _link?.length
    ? _link[0].match(YOUTUBE_ID_REGEX)
    : ''

  return id && id.length ? id[0] : ''
}

const _getYoutubeVideoIdFromComments = (
  comments: Comments
): string | undefined => {
  if (!comments) {
    return ''
  }

  const { edges } = comments

  for (let edge of edges) {
    const {
      node: { text },
    } = edge

    const id = _getYoutubeVideoIdFromText(text)

    if (id) {
      return id
    } else {
      continue
    }
  }
}

const useYoutubeEmbedUrl = ({
  comments,
  text,
}: {
  comments: Comments
  text: string | undefined
}): string | undefined => {
  if (!text) {
    return
  }

  const youtubeVideoId =
    _getYoutubeVideoIdFromText(text) || _getYoutubeVideoIdFromComments(comments)

  return youtubeVideoId
    ? `${YOUTUBE_EMBED_BASE_URL}/${youtubeVideoId}`
    : undefined
}

const VideoPlayer = ({ comments, fallbackImage, text, title }: IProps) => {
  const videoUrl = useYoutubeEmbedUrl({ comments, text })

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
  comments: Comments
  fallbackImage: Image
  text: string | undefined
  title: string
}
export default VideoPlayer

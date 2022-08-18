const MeetupYoutubeVideo = ({ description }: IProps) => {
  if (!description) {
    return null
  }
  const arrayDescription = description.split('[youtube]')
  const endOfYoutubeLink = arrayDescription[1].indexOf(')')
  const youtubeLink = arrayDescription[1].slice(1, endOfYoutubeLink)

  const rExp: RegExp = /https?:\/\/www\.youtube\.com/
  const rExp1: RegExp = /https?:\/\/www\.youtube\.com\/embed/
  const isCompleteURL: boolean = rExp.test(youtubeLink)
  const hasEmbed: boolean = rExp1.test(youtubeLink)

  var ampersandPosition: number = 0
  var indexOfCharacterV: number = 0
  var videoId: string
  if (!isCompleteURL) {
    videoId = youtubeLink.slice(16, youtubeLink.length)
    videoId = 'https://www.youtube.com/embed/' + videoId
  } else if (hasEmbed) {
    videoId = youtubeLink
  } else {
    var arr_video_id = youtubeLink.split('v=')
    if (arr_video_id.length < 2) {
      indexOfCharacterV = arr_video_id[0].indexOf('v')
      videoId = arr_video_id[0].slice(
        indexOfCharacterV + 2,
        indexOfCharacterV + 13
      )
    } else {
      ampersandPosition = arr_video_id[1].indexOf('&')
      if (ampersandPosition !== -1) {
        videoId = arr_video_id[1].substring(0, ampersandPosition)
      } else {
        videoId = arr_video_id[1].substring(0, 11)
      }
    }
    videoId = 'https://www.youtube.com/embed/' + videoId
  }

  return (
    <>
      <p>{youtubeLink}</p>
      <iframe
        title="myFrame"
        width="560"
        height="315"
        src={videoId}
        frameBorder="0"
      ></iframe>
    </>
  )
}

interface IProps {
  description: string | undefined
}
export default MeetupYoutubeVideo

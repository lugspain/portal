const MEETUP_IMAGES_BASE_URL: string =
  'https://secure-content.meetupstatic.com/images/classic-events'

const MEETUP_IMAGE_SIZE_AND_EXTENSION: string = '676x380.webp'

const buildImageUrl = (id: string) => {
  return `${MEETUP_IMAGES_BASE_URL}/${id}/${MEETUP_IMAGE_SIZE_AND_EXTENSION}`
}

export default buildImageUrl

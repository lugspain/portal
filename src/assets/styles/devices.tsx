export const _sizes: IDevices = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
}

let devices: IDevices = {}

for (let size in _sizes) {
  devices![size as keyof IDevices] = `(min-width: ${
    _sizes[size as keyof IDevices]
  })`
}

interface IDevices {
  mobileS?: string
  mobileM?: string
  mobileL?: string
  tablet?: string
  laptop?: string
  laptopL?: string
  desktop?: string
}

export default devices

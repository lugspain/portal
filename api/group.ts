import type { VercelRequest, VercelResponse } from '@vercel/node'
import * as data from '../data/data.json'

const userGroupData = (
  request: VercelRequest,
  response: VercelResponse
): void => {
  response.status(200).json(data)
}

export default userGroupData

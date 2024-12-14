import { fetchSanityData } from '.'
import { type CampItem, digestCampItem } from './digests/digest-camps-data'
import { secureImage } from './digests/utils'

export async function getSummerCamps(): Promise<CampItem | null> {
  const data = await fetchSanityData(querySummerCampsData)
  const digestedData = digestSummerCamps(data[0])
  return digestedData
}

export const querySummerCampsData = `*[_type == 'summer_camps'] {
  summer_camps_intro,
  summer_camps_name,
  summer_camps_image,
  summer_camps_sessions,
  summer_camps_start_date,
  summer_camps_end_date,
  summer_camps_description,
  summer_camps_place,
  summer_camps_price,
  summer_camps_meta_data_block {
    meta_data_site_title,
    meta_data_site_description
  },
  summer_camps_long_description,
  summer_camps_program,
  summer_camps_price_details
}`

//@ts-ignore
export function digestSummerCamps(source): CampItem | null {
  if (!source) return null

  return {
    name: source.summer_camps_name,
    image: secureImage(source.summer_camps_image),
    sessions: source.summer_camps_sessions.map((session) => {
      return {
        startTime: session.summer_camps_start_date,
        endTime: session.summer_camps_end_date,
        name: session.summer_camps_session_name,
      }
    }),
    description: source.summer_camps_description,
    location: source.summer_camps_place,
    price: `${source.summer_camps_price} zł`,
    longDescription: source.summer_camps_long_description,
    slug: '',
    program: source.summer_camps_program,
    priceDetails: source.summer_camps_price_details,
    meta: {
      title: source.summer_camps_meta_data_block.meta_data_site_title,
      description: source.summer_camps_meta_data_block.meta_data_site_description,
    },
  }
}

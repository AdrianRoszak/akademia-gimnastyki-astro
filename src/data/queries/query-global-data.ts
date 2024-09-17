import { defineQuery } from 'groq'

export const queryGlobalData = defineQuery(`*[_type == 'company_data'] {
  company_data_name,
  company_data_logo,
  company_data_phone,
  company_data_email,
}`)

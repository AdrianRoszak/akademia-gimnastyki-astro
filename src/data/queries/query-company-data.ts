import { defineQuery } from 'groq'

export const queryCompanyData = defineQuery(`*[_type == 'company_data'] {
  company_data_name,
  company_data_phone,
  company_data_email,
}`)

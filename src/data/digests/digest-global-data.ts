import type { GlobalData } from '../types'
import { secureImage } from './utils'

//@ts-ignore
export function digestGlobalData(source): GlobalData {
  console.log(source)
  return {
    companyName: source[0].company_data_name,
    companyLogo: secureImage(source[0].company_data_logo),
    companyPhone: source[0].company_data_phone,
    companyEmail: source[0].company_data_email,
    companyAccountDetails: {
      companyAccountName: source[0].company_data_account_details.company_data_account_details_name,
      companyAccountDescription: source[0].company_data_account_details.company_data_account_details_description,
      companyAccountNumber: source[0].company_data_account_details.company_data_account_number,
    },
  }
}

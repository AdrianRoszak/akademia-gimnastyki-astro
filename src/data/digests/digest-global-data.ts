import { secureImage } from './utils'

//@ts-ignore
export function digestGlobalData(source): GlobalData {
  return {
    companyName: source[0].company_data_name,
    companyLogo: secureImage(source[0].company_data_logo),
    companyPhone: source[0].company_data_phone,
    companyEmail: source[0].company_data_email,
  }
}

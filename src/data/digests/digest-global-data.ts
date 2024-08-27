//@ts-ignore
export function digestGlobalData(source) {
  return {
    companyName: source[0].company_data_name,
    companyPhone: source[0].company_data_phone,
    companyEmail: source[0].company_data_email,
  }
}

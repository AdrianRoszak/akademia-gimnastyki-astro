//@ts-ignore
export function digestGlobalData(source) {
  return {
    companyName: source.company_data_name,
    companyPhone: source.company_data_phone,
    companyEmail: source.company_data_email,
  }
}

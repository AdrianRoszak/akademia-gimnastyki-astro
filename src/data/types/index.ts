export type ImageType = {
  alt: string
  source: string
}

export interface GlobalData {
  companyName: string
  companyLogo: ImageType | null
  companyPhone: string
  companyEmail: string
  companyAccountNumber: string
}

export type ImageType = {
	alt: string;
	source: string;
};

export type CompanyAccountDetails = {
	companyAccountName: string;
	companyAccountReceiver: string;
	companyAccountDescription: string;
	companyAccountNumber: string;
};

export interface GlobalData {
	companyName: string;
	companyLogo: ImageType | null;
	companyPhone: string;
	companyEmail: string;
	companyAccountDetails: CompanyAccountDetails | null;
}

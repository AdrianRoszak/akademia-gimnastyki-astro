export type ImageType = {
	alt: string;
	source: string;
};

export type CompanyAccountDetails = {
	companyAccountName: string;
	companyAccountDescription: string;
	companyAccountNumber: string;
};

export interface GlobalData {
	companyName: string;
	companyLogo: imagetype | null;
	companyPhone: string;
	companyEmail: string;
	companyAccountDetails: companyaccountdetails;
}

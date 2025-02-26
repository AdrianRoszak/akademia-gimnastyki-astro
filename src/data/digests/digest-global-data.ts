import type { GlobalData } from '../types';
import { secureImage } from './utils';

//@ts-ignore
export function digestGlobalData(source): GlobalData {
	return {
		companyName: source[0].company_data_name,
		companyLogo: secureImage(source[0].company_data_logo),
		companyPhone: source[0].company_data_phone,
		companyEmail: source[0].company_data_email,
		companyAccountDetails: source[0].company_data_accounts.map(digestAccount),
	};
}

//@ts-ignore
function digestAccount(source): GlobalData['companyAccountDetails'] | null {
	if (!source) return null;

	return {
		companyAccountName: source.bank_account_item_name,
		companyAccountReceiver: source.bank_account_item_receiver_name,
		companyAccountDescription: `W tytule ${source.bank_account_item_description}`,
		companyAccountNumber: source.bank_account_item_number,
	};
}

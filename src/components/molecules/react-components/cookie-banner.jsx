import { useEffect, useState } from 'react';

const CookieBanner = () => {
	const [showBanner, setShowBanner] = useState(false);

	useEffect(() => {
		const consent = localStorage.getItem('cookieConsent');
		if (!consent) {
			setShowBanner(true);
		}
	}, []);

	const acceptCookies = () => {
		localStorage.setItem('cookieConsent', 'true');
		setShowBanner(false);
	};

	const rejectCookies = () => {
		localStorage.setItem('cookieConsent', 'false');
		setShowBanner(false);
	};

	if (!showBanner) return null;

	return (
		<div className="cookie-banner">
			<p className="cookie-banner__text">
				Używamy plików cookie, aby zapewnić Ci jak najlepsze doświadczenia na naszej stronie.
				Niektóre z nich są niezbędne do działania strony, inne pomagają nam analizować ruch lub
				dostosowywać treści.
			</p>
			<div>
				<button type="button" onClick={acceptCookies} className="btn-accept">
					Akceptuję
				</button>
				<button type="button" onClick={rejectCookies} className="btn-reject">
					Odrzuć
				</button>
			</div>
		</div>
	);
};

export default CookieBanner;

import { useState, useEffect } from 'react';

const useMediaQuery = (query, dimension) => {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const checkMatches = () => {
			if (dimension === 'width') {
				setMatches(window.innerWidth <= parseInt(query));
			} else if (dimension === 'height') {
				setMatches(
					window.innerHeight <= parseInt(query) &&
						window.innerWidth >= 1281 &&
						window.innerWidth <= 1920
				);
			}
		};

		checkMatches();

		window.addEventListener('resize', checkMatches);

		return () => window.removeEventListener('resize', checkMatches);
	}, [query, dimension]);

	return matches;
};

const useMobileMedia = () => {
	return useMediaQuery('720', 'width');
};

const useTabletMedia = () => {
	return useMediaQuery('1280', 'width');
};

const useSmallMedia = () => {
	return useMediaQuery('1366', 'width');
};

const useHeightMedia = () => {
	return useMediaQuery('800', 'height');
};

const useLargeMedia = () => {
	return useMediaQuery('1920', 'width');
};

export { useMobileMedia, useTabletMedia, useSmallMedia, useHeightMedia, useLargeMedia };

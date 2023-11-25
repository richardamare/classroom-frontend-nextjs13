import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export function useQueryParam<T>(paramName: string, defaultValue: T) {

	const [isLoading, setIsLoading] = useState(false);

	const router = useRouter();
	const [paramValue, setParamValue] = useState<T>(() => {
		// Initialize with the default value or the value from the URL
		return router.query[paramName] !== undefined
			? (router.query[paramName] as unknown as T)
			: defaultValue;
	});

	// on set
	useEffect(() => {
		if (isLoading) {
			setIsLoading(false);
		}

		const query = router.query;

		if (paramValue === defaultValue) {
			delete query[paramName];
		} else {
			query[paramName] = paramValue as string;
		}

		router.replace({
			pathname: router.pathname,
			query: query,
		}, undefined, {shallow: true});

		return () => {
			setIsLoading(false);
		};
	}, [paramValue]);

	// on change
	useEffect(() => {
		if (isLoading) {
			return;
		}
		setIsLoading(true);
		const query = router.query;
		if (query[paramName] !== undefined) {
			setParamValue(query[paramName] as unknown as T);
		} else {
			setParamValue(defaultValue);
		}
	}, [router.query]);

	// on unmount
	useEffect(() => {
		return () => {
			setIsLoading(false);
		};
	}, []);

	return [paramValue, setParamValue] as const;
}

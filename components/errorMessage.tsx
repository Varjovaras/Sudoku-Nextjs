import type { FC } from "react";

interface ErrorProps {
	errorMessage: string;
}

export const ErrorMessage: FC<ErrorProps> = ({ errorMessage }) => {
	return <>{errorMessage ? <div>{errorMessage}</div> : <div />}</>;
};

import { FC } from 'react';
import { Path, Svg } from 'react-native-svg';

import { Props } from './types';

export const EyeOff: FC<Props> = ({ size = 24, color = '#FFFFFF' }) => {
	return (
		<Svg width={size} height={size} viewBox="0 0 15 14" fill="none">
			<Path
				fill={color}
				d="M7.61591 4.14474L5.45455 6.32763V6.21711C5.45455 5.66748 5.67005 5.14036 6.05365 4.75172C6.43724 4.36308 6.95751 4.14474 7.5 4.14474H7.61591ZM10.5477 4.69737L9.49091 5.76809C9.525 5.91316 9.54545 6.05822 9.54545 6.21711C9.54545 6.76673 9.32995 7.29385 8.94636 7.68249C8.56276 8.07114 8.04249 8.28947 7.5 8.28947C7.35 8.28947 7.2 8.26875 7.05682 8.23421L6 9.30493C6.45682 9.53289 6.96136 9.67105 7.5 9.67105C8.40415 9.67105 9.27126 9.30716 9.91059 8.65942C10.5499 8.01167 10.9091 7.13315 10.9091 6.21711C10.9091 5.67138 10.7727 5.1602 10.5477 4.69737ZM14.3182 0.877303L12.7636 2.4523L12.4568 2.76316C13.5818 3.66118 14.4682 4.83553 15 6.21711C13.8205 9.24967 10.9091 11.398 7.5 11.398C6.44318 11.398 5.43409 11.1908 4.51364 10.8178L4.22046 11.1079L2.22955 13.125L1.36364 12.2477L13.4523 0M7.5 2.76316C6.59585 2.76316 5.72874 3.12705 5.08941 3.7748C4.45008 4.42254 4.09091 5.30106 4.09091 6.21711C4.09091 6.65921 4.17955 7.0875 4.33636 7.47434L2.33864 9.49835C1.31591 8.63487 0.497727 7.50197 0 6.21711C1.17955 3.18454 4.09091 1.03618 7.5 1.03618C8.45455 1.03618 9.36818 1.20888 10.2273 1.51974L8.74773 3.00493C8.35909 2.85296 7.94318 2.76316 7.5 2.76316Z"
			/>
		</Svg>
	);
};

export default EyeOff;

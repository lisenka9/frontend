import { ElementType } from 'react';
import { clsx } from 'clsx';

import styles from './index.module.scss';

type SpacingProps = {
	as?: ElementType;
	size?: 4 | 24 | 50 | 90 | 207;
};

export const Spacing = ({ as: Tag = 'div', size = 4 }: SpacingProps) => {
	const className = clsx(styles[`size${size}`]);
	return <Tag className={className}></Tag>;
};
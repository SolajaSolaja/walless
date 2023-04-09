import { createAnimations } from '@tamagui/animations-css';
import { createTamagui, TamaguiInternalConfig } from '@tamagui/core';

import { fonts, media, themes, tokens } from '../../tool/tamagui';

const animations = createAnimations({
	fast: 'ease-in 150ms',
	medium: 'ease-in 300ms',
	slow: 'ease-in 450ms',
	crawl: 'ease-in 1000ms',
	mask: 'ease-in 250ms',
});

export const config: TamaguiInternalConfig = createTamagui({
	defaultTheme: 'dark',
	themes,
	fonts,
	tokens,
	media,
	animations,
});

export default config;

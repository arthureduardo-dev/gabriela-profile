import React from 'react';
import styled, { keyframes } from 'styled-components';

const eye1 = keyframes`
	from {
		transform: rotate(-260deg) translate(0,-56px);
	}
	50%,
	60% {
		animation-timing-function: cubic-bezier(0.17,0,0.58,1);
		transform: rotate(-40deg) translate(0,-56px) scale(1);
	}
	to {
		transform: rotate(225deg) translate(0,-56px) scale(0.35);
	}
`;

const eye2 = keyframes`
	from {
		transform: rotate(-260deg) translate(0,-56px);
	}
	50% {
		transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
	}
	52.5% {
		transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1,0);
	}
	55%,
	70% {
		animation-timing-function: cubic-bezier(0,0,0.28,1);
		transform: rotate(40deg) translate(0,-56px) rotate(-40deg) scale(1);
	}
	to {
		transform: rotate(150deg) translate(0,-56px) scale(0.4);
	}
`;

const mouth1 = keyframes`
	from {
		animation-timing-function: ease-in;
		stroke-dasharray: 0 351.86;
		stroke-dashoffset: 0;
	}
	25% {
		animation-timing-function: ease-out;
		stroke-dasharray: 175.93 351.86;
		stroke-dashoffset: 0;
	}
	50% {
		animation-timing-function: steps(1,start);
		stroke-dasharray: 175.93 351.86;
		stroke-dashoffset: -175.93;
		visibility: visible;
	}
	75%,
	to {
		visibility: hidden;
	}
`;

const mouth2 = keyframes`
	from {
		animation-timing-function: steps(1,end);
		stroke-dashoffset: 0;
		visibility: hidden;
	}
	50% {
		animation-timing-function: ease-in-out;
		visibility: visible;
		stroke-dashoffset: 0;
	}
	to {
		stroke-dashoffset: -351.86;
		visibility: visible;
	}
`;

const SmileyContainer = styled.svg`
	width: 8em;
	height: 8em;
	font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));

	.smiley__eye1,
	.smiley__eye2,
	.smiley__mouth1,
	.smiley__mouth2 {
		animation: ${eye1} 5s ease-in-out infinite;
	}

	.smiley__eye1,
	.smiley__eye2 {
		transform-origin: 64px 64px;
	}

	.smiley__eye2 {
		animation-name: ${eye2};
	}
	
	.smiley__mouth1 {
		animation-name: ${mouth1};
	}
	
	.smiley__mouth2 {
		animation-name: ${mouth2};
		visibility: hidden;
	}
`;

const SmileyPreloader = () => (
	<SmileyContainer role="img" aria-label="Smiley preloader" viewBox="0 0 128 128" width="128px" height="128px">
		<defs>
			<clipPath id="smiley-eyes">
				<circle className="smiley__eye1" cx="64" cy="64" r="8" transform="rotate(-40,64,64) translate(0,-56)" />
				<circle className="smiley__eye2" cx="64" cy="64" r="8" transform="rotate(40,64,64) translate(0,-56)" />
			</clipPath>
            <linearGradient id="purple-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" /> 
                <stop offset="100%" stopColor="#6D28D9" /> 
            </linearGradient>
		</defs>
		<g strokeLinecap="round" strokeWidth="12" strokeDasharray="175.93 351.86" fill="none" stroke="url(#purple-grad)">
			<rect fill="url(#purple-grad)" width="128" height="64" clipPath="url(#smiley-eyes)" />
			<g>
				<circle className="smiley__mouth1" cx="64" cy="64" r="56" transform="rotate(180,64,64)" />
				<circle className="smiley__mouth2" cx="64" cy="64" r="56" transform="rotate(0,64,64)" />
			</g>
		</g>
	</SmileyContainer>
);

export default SmileyPreloader;
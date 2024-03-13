// components/StyledButton.tsx
import { Button } from '@chakra-ui/react';
import React from 'react';

interface StyledButtonProps {
	text: string;
	onClick?: () => void;
	className?: string;
}

const StyledButton: React.FC<StyledButtonProps> = ({ text, onClick, className }) => {
	return (
		<Button
			onClick={onClick}
			sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '4px 32px',
				gap: '16px',
				width: '199px',
				height: '35px',
				backgroundColor: '#7EA756',
				borderRadius: '28px',
			}}
			colorScheme="green"
			color="white"
			className={className}
		>
			{text}
		</Button>
	);
};

export default StyledButton;

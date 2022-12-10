import React,  {PropsWithChildren} from "react";

type LoadingProps = {
	children: JSX.Element
	wait? : number
}
function Delayed({ children, wait = 300 }: PropsWithChildren<LoadingProps>) {
	const [show, setShow] = React.useState(false);
	
	React.useEffect(() => {
		const timer = window.setTimeout(() => {
			setShow(true);
		}, wait);
		return () => {
			window.clearTimeout(timer);
		};
	}, [wait]);
	return show ? children : null;
}

export default function Loading() {
	return (
		<Delayed>
			<div className="loading center" />
		</Delayed>
	);
}

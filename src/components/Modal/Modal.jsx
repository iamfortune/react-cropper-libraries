import { createPortal } from "react-dom";
import styled from "styled-components";
import Button from "../Button/Button";

const Modal = ({ children, onModalClose, showModal, onSaveHandler }) => {
	return createPortal(
		<Wrapper
			style={{
				opacity: showModal ? 1 : 0,
				pointerEvents: showModal ? "all" : "none",
			}}
		>
			<div
				onClick={onModalClose}
				role="button"
				className="iu-modal-backdrop"
				style={{
					display: showModal ? "flex" : "none",
				}}
			/>
			<div className="iu-modal-content">
				{children}
				<footer className="px-12 md:sticky absolute bottom-0 bg-white w-full left-0 py-4 border-t border-black flex items-center justify-between">
					<Button onClick={onModalClose}>Dismiss</Button>
					<Button
						onClick={() => {
							onSaveHandler();
							onModalClose();
						}}
					>
						Save
					</Button>
				</footer>
			</div>
		</Wrapper>,
		document.getElementById("modal")
	);
};

const Wrapper = styled.div`
	position: relative;
	width: 100vw;
	height: 100%;

	.iu-modal-backdrop {
		background: rgba(0, 0, 0, 0.7);
		z-index: 13000;
		backdrop-filter: blur(0px);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.iu-modal-content {
		position: fixed;
		z-index: 15000;
		left: 50%;
		top: 50%;
		padding: 0;
		height: 80vh;
		width: 732px;
		overflow: hidden !important;
		background: #fff;
		transform: translate(-50%, -50%);

		& button {
			width: 135px;
		}

		& button:focus {
			background: transparent;
			color: transparent;
		}

		&::-webkit-scrollbar {
			width: 0.2rem;
			height: 0rem;
			border-radius: 10px;
		}
	}

	.iu-preview:hover {
		color: #2eff7b;
	}
`;

export default Modal;

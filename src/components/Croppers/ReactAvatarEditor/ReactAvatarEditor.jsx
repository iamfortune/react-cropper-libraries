import { useRef } from "react";
import AvatarEditor from "react-avatar-editor";
import styled from "styled-components";
import Modal from "../../Modal/Modal";

const ReactAvatarEditor = ({
	showModal,
	onModalClose,
	imgURL,
	onSaveHandler,
}) => {
	const EditorRef = useRef(null);

	const showCroppedImage = async () => {
		if (EditorRef.current) {
			const img = EditorRef.current.getImage().toDataURL();
			return img;
		}
	};

	return (
		<Modal
			showModal={showModal}
			onSaveHandler={async () => onSaveHandler(await showCroppedImage())}
			onModalClose={onModalClose}
		>
			<Wrapper className="w-full h-full flex flex-col items-center justify-center">
				<AvatarEditor
					ref={EditorRef}
					image={imgURL}
					width={250}
					height={250}
					border={0}
					scale={1.2}
					color={[255, 255, 255, 0.6]}
				/>
			</Wrapper>
		</Modal>
	);
};

const Wrapper = styled.div`
	background: #ccc;
	backdrop-filter: blur(2px);
`;

export default ReactAvatarEditor;

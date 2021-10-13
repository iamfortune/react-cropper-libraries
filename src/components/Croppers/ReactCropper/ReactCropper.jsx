import { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import Modal from "../../Modal/Modal";

const ReactCropper = ({ showModal, onModalClose, imgURL, onSaveHandler }) => {
	const cropperRef = useRef(null);
	const [croppedImg, setCroppedImg] = useState("");

	const onCrop = () => {
		const imageElement = cropperRef?.current;
		const cropper = imageElement?.cropper;
		setCroppedImg(cropper.getCroppedCanvas().toDataURL());
	};

	return (
		<Modal
			showModal={showModal}
			onSaveHandler={() => onSaveHandler(croppedImg)}
			onModalClose={onModalClose}
		>
			<Cropper
				src={imgURL}
				style={{ height: 500, width: "732px" }}
				initialAspectRatio={16 / 9}
				guides={false}
				crop={onCrop}
				ref={cropperRef}
				viewMode={1}
				// guides={true}
				minCropBoxHeight={10}
				minCropBoxWidth={10}
				// background={false}
				responsive={true}
				autoCropArea={1}
				aspectRatio={4 / 3}
				checkOrientation={false}
			/>
		</Modal>
	);
};

export default ReactCropper;

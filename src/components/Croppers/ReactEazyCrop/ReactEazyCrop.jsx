import { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import Modal from "../../Modal/Modal";
import { getCroppedImg } from "../../../utils/getCroppedImage";

const ReactEazyCrop = ({ showModal, onModalClose, imgURL, onSaveHandler }) => {
	const [crop, setCrop] = useState({ x: 2, y: 2 });
	const [zoom, setZoom] = useState(1);
	const [croppedArea, setCroppedArea] = useState("");

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
		setCroppedArea(croppedAreaPixels);
	}, []);

	const showCroppedImage = useCallback(async () => {
		try {
			const croppedImage = await getCroppedImg(imgURL, croppedArea, 0);
			return croppedImage;
		} catch (error) {
			console.error(error);
		}
	}, [croppedArea, imgURL]);

	return (
		<Modal
			showModal={showModal}
			onSaveHandler={async () => onSaveHandler(await showCroppedImage())}
			onModalClose={onModalClose}
		>
			<div className="relative w-full">
				<Cropper
					image={imgURL}
					crop={crop}
					zoom={zoom}
					aspect={4 / 3}
					onCropChange={setCrop}
					onCropComplete={onCropComplete}
					onZoomChange={setZoom}
				/>
			</div>
		</Modal>
	);
};

export default ReactEazyCrop;

import { useState, } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Modal from "../../Modal/Modal";

const Cropper = ({ showModal, onModalClose, imgURL, onSaveHandler }) => {
	const [image, setImage] = useState(null);
	const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 });
	const [croppedImageUrl, setCroppedImageUrl] = useState("");

	const makeClientCrop = async (crop) => {
		if ((image, crop.width && crop.height)) {
			const croppedImg = await getCroppedImg(image, crop, "newFile.jpeg");
			setCroppedImageUrl(croppedImg);
		}
	};

	const getCroppedImg = (image, crop, fileName) => {
		const canvas = document.createElement("canvas");
		const pixelRatio = window.devicePixelRatio;
		const scaleX = image.naturalWidth / image.width;
		const scaleY = image.naturalHeight / image.height;
		const ctx = canvas.getContext("2d");

		canvas.width = crop.width * pixelRatio * scaleX;
		canvas.height = crop.height * pixelRatio * scaleY;

		ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
		ctx.imageSmoothingQuality = "high";

		ctx.drawImage(
			image,
			crop.x * scaleX,
			crop.y * scaleY,
			crop.width * scaleX,
			crop.height * scaleY,
			0,
			0,
			crop.width * scaleX,
			crop.height * scaleY
		);

		try {
			return new Promise((resolve) => {
				canvas.toBlob((file) => {
					resolve(URL.createObjectURL(file));
				}, "image/jpeg");
			});
		} catch (error) {
			console.log(error);
			return null;
		}
	};

	return (
		<Modal
			showModal={showModal}
			onSaveHandler={() => onSaveHandler(croppedImageUrl)}
			onModalClose={onModalClose}
		>
			<ReactCrop
				src={imgURL}
				crop={crop}
				ruleOfThirds
				onImageLoaded={(img) => {
					console.log(img);
					setImage(img);
				}}
				onComplete={(crop) => makeClientCrop(crop)}
				onChange={(cropData) => setCrop(cropData)}
			/>
		</Modal>
	);
};

export default Cropper;

import ReactAvatarEditor from "../Croppers/ReactAvatarEditor/ReactAvatarEditor";
import ReactCropper from "../Croppers/ReactCropper/ReactCropper";
import ReactEazyCrop from "../Croppers/ReactEazyCrop/ReactEazyCrop";
import ReactImageCrop from "../Croppers/ReactImageCrop/ReactImageCrop";

const ModalWrapper = ({
	modal,
	showModal,
	onModalClose,
	imgURL,
	onSaveHandler,
}) => {
	switch (modal) {
		case "React Cropper":
			return (
				<ReactCropper
					showModal={showModal}
					onModalClose={onModalClose}
					imgURL={imgURL}
					onSaveHandler={onSaveHandler}
				/>
			);
		case "React Image Crop":
			return (
				<ReactImageCrop
					showModal={showModal}
					onModalClose={onModalClose}
					imgURL={imgURL}
					onSaveHandler={onSaveHandler}
				/>
			);
		case "React Easy Crop":
			return (
				<ReactEazyCrop
					showModal={showModal}
					onModalClose={onModalClose}
					imgURL={imgURL}
					onSaveHandler={onSaveHandler}
				/>
			);
		case "React Avatar Editor":
			return (
				<ReactAvatarEditor
					showModal={showModal}
					onModalClose={onModalClose}
					imgURL={imgURL}
					onSaveHandler={onSaveHandler}
				/>
			);
		default:
			return "";
	}
};

export default ModalWrapper;

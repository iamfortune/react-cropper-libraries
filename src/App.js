import { useState } from "react";
import styled from "styled-components";
import Button from "./components/Button/Button";
import Checkbox from "./components/Checkbox/Checkbox";
import ModalWrapper from "./components/ModalWrapper/ModalWrapper";

const App = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedModal, setSelectedModal] = useState("React Cropper");
	const [image, setImage] = useState(null);
	const [croppedImg, setCroppedImg] = useState(null);

	const handleFileSelect = async (e) => {
		try {
			e.preventDefault();
			let files;

			if (e.dataTransfer) {
				files = e.dataTransfer.files;
			} else if (e.target) {
				files = e.target.files;
			}

			const reader = new FileReader();

			if (!reader) return;

			reader.onload = () => {
				setImage(reader.result?.toString());
				e.target.value = null;
				setShowModal(true);
			};

			reader.readAsDataURL(files[0]);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Wrapper>
			<header className="mt-6 flex flex-col items-center justify-center">
				<h2 className="mb-6 font-medium tracking-widest text-3xl">
					IMAGE UPLOADER
				</h2>
				<h3 className="text-base text-center">
					Hey 👋! Wanna see something cool? 😊 <br /> Select one of the options
					below and crop your image with any of our special image-cropping
					modals
				</h3>
			</header>
			<main>
				<section className="mt-8">
					<div className="flex justify-center">
						<article className="mx-2">
							<Checkbox
								label="React Cropper"
								isChecked={selectedModal === "React Cropper"}
								onChange={setSelectedModal}
								id="r-cropper"
							/>
						</article>

						<article className="mx-2">
							<Checkbox
								label="React Image Crop"
								isChecked={selectedModal === "React Image Crop"}
								onChange={setSelectedModal}
								id="r-img-crop"
							/>
						</article>

						<article className="mx-2">
							<Checkbox
								label="React Easy Crop"
								isChecked={selectedModal === "React Easy Crop"}
								onChange={setSelectedModal}
								id="r-easy-crop"
							/>
						</article>

						<article className="mx-2">
							<Checkbox
								label="React Avatar Editor"
								isChecked={selectedModal === "React Avatar Editor"}
								onChange={setSelectedModal}
								id="r-avatar-editor"
							/>
						</article>
					</div>
					<article className="relative flex flex-col items-center mt-10">
						<input
							className="opacity-0 cursor-pointer absolute w-48"
							style={{ height: 45, display: !selectedModal ? "none" : "block" }}
							type="file"
							onChange={handleFileSelect}
						/>
						<Button disabled={!selectedModal} className="w-48">
							Upload Image
						</Button>
					</article>
				</section>
				<section className="mt-10 flex flex-col items-center justify-center">
					{croppedImg && <img src={croppedImg} alt="uploaded pic" />}
				</section>
			</main>

			<div className="absolute">
				<ModalWrapper
					showModal={showModal}
					modal={selectedModal}
					imgURL={image}
					onSaveHandler={setCroppedImg}
					onModalClose={() => {
						setShowModal(false);
						setImage(null);
					}}
				/>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 80%;
	margin: auto;
`;

export default App;

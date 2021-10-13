import styled from "styled-components";

const Checkbox = ({ label, onChange, id, isChecked }) => {

	return (
		<Wrapper>
			<label htmlFor={id}>{label}</label>
			<input
				id={id}
				type="checkbox"
				name={label}
				onChange={() => {
					onChange(!isChecked ? label : null);
				}}
				value={isChecked ? label : ""}
				checked={isChecked}
			/>
			<span className="rounded-full" />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: inline-block;
	position: relative;
	padding-left: 30px;
	cursor: pointer;
	font-size: 16px;

	&:hover {
		input ~ span {
			background-color: #f3f3f3;
		}
	}

	label {
		cursor: pointer;
	}

	input {
		position: absolute;
		cursor: pointer;
		height: 18px;
		width: 18px;
		left: 0;
		z-index: 2;
		opacity: 0;

		&:checked {
			& ~ span {
				background-color: skyblue;

				&:after {
					display: block;
				}
			}
		}
	}
	span {
		position: absolute;
		top: 3px;
		left: 0;
		height: 18px;
		width: 18px;
		border: 2px solid #0f0f0f;

		&:after {
			left: 9px;
			top: 5px;
			width: 5px;
			height: 10px;
			border: solid white;
			border-width: 0 3px 3px 0;
			-webkit-transform: rotate(45deg);
			-ms-transform: rotate(45deg);
			transform: rotate(45deg);
		}
	}
`;
export default Checkbox;

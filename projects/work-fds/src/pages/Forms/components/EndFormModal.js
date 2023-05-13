import {Modal} from "@mui/material";
import { Fragment} from "react";

const EndFormModal = ({
	succeedLabel,
    succeedImage,
    succeedImageAlt,
    succeedButtonLabel,
    onClickSucceedButton,
    failLabel,
    failImage,
    failImageAlt,
    failButtonLabel,
    onClickFailButton,
    isSuccess,
    isOpen
}) => {

	const content = (
		<Fragment>
                <Modal open={isOpen} aria-labelledby={""} aria-describedby={""}>
                <div className='submitMessage'>
						<div className='submitMessage__block'>
							<div className='submitMessage__img'>
                                {isSuccess ? (<img src={succeedImage} alt={succeedImageAlt} />) : (<img src={failImage} alt={failImageAlt} />)}	
							</div>

							<h2 className='submitMessage__title'>
                                {isSuccess ? (succeedLabel) : (failLabel)}
							</h2>
                            <button
                            className={`submitMessage__action mainBtn mainBtn--continue`}
                            onClick={isSuccess ? onClickSucceedButton : onClickFailButton}
                        >
                            {isSuccess ? (succeedButtonLabel) : (failButtonLabel)}
                        </button>
						</div>
					</div>
                </Modal>
            </Fragment>
	);

	return content;
};

export default EndFormModal;
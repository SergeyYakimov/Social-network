import React from 'react';
import styles from './FormControls.module.css';

const FormControls = ({input, meta, child, ...props}) => {
	const hasError = meta.touched && meta.error; 
	return (
		<div className={styles.formControl + " " + (hasError ? styles.error : "")}>
			<div>
				{props.children}
			</div>
			{hasError && <span>{meta.error}</span>}
		</div>
		)
}

export const Textarea = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControls {...props}><textarea {...input} {...restProps} /></FormControls>
}

export const Input = (props) => {
	const {input, meta, child, ...restProps} = props;
	return <FormControls {...props}><input {...input} {...restProps} /></FormControls>

}
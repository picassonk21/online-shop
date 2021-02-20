import s from './formControls.module.css'

export const Input = ({input, meta, ...props}) => {
    return (
        <div className={s.input}>
            <div className={s.inputTitle}>{input.name}</div>
            <input {...input} {...props} className={s.inputField} />
        </div>
    )
}

export const Radio = ({input, meta, ...props}) => {
    return (
        <div className={s.radio}>
            <input {...input} {...props} className={s.radioField} />
            <span className={s.radioTitle}>{input.value}</span>        
        </div>
    )
}
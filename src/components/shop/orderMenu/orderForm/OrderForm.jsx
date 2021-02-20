import { Field, reduxForm } from "redux-form"
import { Input, Radio } from "../../../utils/formControls/formControls"
import s from './orderForm.module.css'
import { required, requiredRadio } from '../../../utils/validators/validators'

const OrderForm = (props) => {
    return (
        <div className={s.orderFormWrapper}>
            <form onSubmit={props.handleSubmit} className={s.orderForm}>
                <div className={s.orderFormItem}>
                    <Field component={Input} name={"name"} validate={[required]} />
                </div>
                <div className={s.orderFormItem}>
                    <Field component={Input} name={"phone"} validate={[required]} />
                </div>
                <div className={s.orderFormItem}>
                    <Field component={Input} name={"email"} validate={[required]} />
                </div>
                <div className={s.orderFormAddress}>
                    <Field component={Input} name={"address"} validate={[required]} />
                </div>
                <div className={s.orderFormPaymentType}>
                    <div className={s.orderFormPaymentTypeTitle}>payment method</div>
                    <div className={s.orderFormPaymentTypeContainer}>
                        <Field component={Radio} name={"paymentType"} type={"radio"} value={"cash"} />
                        <Field component={Radio} name={"paymentType"} type={"radio"} value={"credit card"} />
                    </div>

                </div>
                <div className={s.orderFormButtons}>
                    <button className={s.buyBtn + ' ' + s.orderBtn} >buy</button>
                    <div className={s.cancelBtn + ' ' + s.orderBtn}>cancel</div>
                </div>
            </form>
        </div>
    )
}

export default reduxForm({ form: 'order' })(OrderForm)
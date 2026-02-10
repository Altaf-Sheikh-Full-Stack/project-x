import './email.css'
import ButtonPrimary from '../../common/button/primary'
import ButtonSecondary from '../../common/button/secondary'

const Email = () => {
    return(
        <div className="emailCard">

            <h2>Please verify your email</h2>
            <p>You're almost there! We sent an email to sophia+test14@segment.com</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique dolorem nobis odit fugit suscipit, nostrum itaque facere nulla laboriosam, necessitatibus velit vero! Rerum nostrum laboriosam deleniti velit quasi ab voluptas.</p>
            <p >can't find the email</p>
            <ButtonSecondary buttonSecondary={"Resend email"}/>
        </div>
    )
}

export default Email
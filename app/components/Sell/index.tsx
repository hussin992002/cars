import { useState } from 'react';
import './index.scss';


const Sell = () => {
    const [log, setLog] = useState(true)

    function login() {
        return (
            <div className="login">
                <h2>Login</h2>
                <form>
                    <div className="email box">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="box password">
                        <label htmlFor="pass">Password</label>
                        <input type="password" name="pass" id="pass" required />
                    </div>
                    <input className='bttn' type="submit" />
                </form>
                <p className='bt'onClick={() => {
                    setLog(false)
                }}>Do Not Have acc?</p>

            </div >
        )
    }
    function SignUp() {
        return (
            <>
                <div className="signUp">
                    <div className="rol">
                        <h2>الشروط الخاصه بنا</h2>
                        <div className="box">
                            <h3>العمر</h3>
                            <p>
                                يجب أن يكون المستأجر فوق سن معين، عادةً 21 سنة
                            </p>
                        </div>
                        <div className="box">
                            <h3>رخصة القيادة</h3>
                            <p>
                                يجب أن يكون المستأجر حاصلاً على رخصة قيادة سارية المفعول
                            </p>
                        </div>
                        <div className="box">
                            <h3>
                                البطاقة الائتمانية
                            </h3>
                            <p>
                                يجب أن يكون المستأجر حاصلاً على بطاقة ائتمانية سارية المفعول
                            </p>
                        </div>
                        <div className="box">
                            <h3>
                                التأمين
                            </h3>
                            <p>
                                يجب أن يكون المستأجر قد قام بتأمين السيارة ضد الحوادث والسرقة
                            </p>
                        </div>
                        <div className="box">
                            <h3>
                                مكان التسليم
                            </h3>
                            <p>
                                سيتم  تحديد  مكان تسليم السيارة.
                            </p>
                        </div>
                        <div className="box">
                            <h3>
                                وقت التسليم
                            </h3>
                            <p>
                                وقت تسليم السيارة إن حدث اي تأخر سيتم دفع غرامة لذلك
                            </p>
                        </div>
                        <div className="box">
                            <h3>
                                رسوم الوقود
                            </h3>
                            <p>
                                يجب أن يدفع المستأجر رسوم الوقود التي استهلكها خلال فترة الاستئجار
                            </p>
                        </div>


                    </div>
                    <div className="form">
                        <h2>SignUp</h2>
                        <form>
                            <div className="username box">
                                <label htmlFor="username">UserName</label>
                                <input type="text" name="username" id="username" required />
                            </div>
                            <div className="email box">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" required />
                            </div>
                            <div className="box password">
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="pass" id="pass" required />
                            </div>
                            <input type="date" name="data" id="data" />
                            <input className='bttn' type="submit" />
                        </form>
                        <p className='bt' onClick={() => {
                            setLog(true)
                        }}>Have acc ?</p>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div className="sell">
            <div className="cont se">
                {log ? login() : SignUp()}
            </div>
        </div>
    )
}
export default Sell;
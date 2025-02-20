import { useState } from 'react';
import './index.scss';

const ChatBot = () => {
    const [q, setq] = useState('')
    const [m, setm] = useState('m')
    function whatq() {
        if (q === '') {
            return (
                <p>Please Select Question</p>
            )
        }
        if (q === '1') {
            return (
                <p>
                    متي استخدم الطوارئ أو الاسعافات  الأولية؟
                    الإسعافات الأولية هي الخطوات التي يتم اتخاذها في حالة الطوارئ الطبية، مثل الحوادث أو الإصابات، قبل وصول المساعدة الطبية. عندما تكون وحدك على الطريق، من المهم أن تعرف كيفية تقديم الإسعافات الأولية بنفسك. إليك بعض المعلومات حول كيفية تقديم الإسعافات الأولية عندما تكون وحدك على الطريق
                </p>
            )
        }
        if (q === '2') {
            return (
                <>

                    <p>
                        الإصابات الشائعة على الطريق
                        <p>
                            إصابات الرأس: يمكن أن تحدث إصابات الرأس بسبب الحوادث أو السقوط. إذا كان الشخص مصابًا في الرأس، يجب أن تتحقق من وجود أي جروح أو دماء
                        </p>
                        <p>
                            إصابات العظام: يمكن أن تحدث إصابات العظام بسبب الحوادث أو السقوط. إذا كان الشخص مصابًا في العظام، يجب أن تتحقق من وجود أي كسر أو تشوه
                        </p>
                        <p>
                            إصابات الحروق: يمكن أن تحدث إصابات الحروق بسبب الحوادث أو الحريق. إذا كان الشخص مصابًا بحروق، يجب أن تتحقق من مدى الحروق
                        </p>
                        <p>
                            الخطوات الأساسية للإسعافات الأولية
                        </p>
                        <p>
                            التحقق من الأمان: قبل تقديم الإسعافات الأولية، يجب أن تتحقق من الأمان. تأكد من أنك في مكان آمن ولا توجد أي مخاطر
                        </p>
                        <p>
                            الاستدعاء للمساعدة: إذا كنت في حالة طارئة، يجب أن تستدعي للمساعدة. استخدم هاتفك لاستدعاء الخدمات الطبية أو الشرطة
                        </p>
                        تقديم الإسعافات الأولية: بعد التحقق من الأمان والاستدعاء للمساعدة، يمكنك تقديم الإسعافات الأولية
                    </p>
                </>
            )
        }
        if (q === '3') {
            return (
                <p>
                    تقديم الإسعافات الأولية

                    نصائح إضافية
                    1. *سيكون هناك معك أدوات الإسعافات الأولية في السيارة*: ، مثل قفازات طبية وشرائط طبية وماء بارد الأدوية اللازمة لأمراض متعددة ادوات صحية
                    2. *تعلم تقنيات الإسعافات الأولية*: يجب أن تعلم تقنيات الإسعافات الأولية، مثل تقنية CPR وطريقة استخدام الأدوية الطبية.
                    3. *احتفظ بهاتفك قريبًا*: يجب أن تحتفظ بهاتفك قريبًا لاستدعاء المساعدة في حالة الطوارئ.
                </p>
            )
        }
        if (q === '4') {
            return (
                <p>
                    كيفية استدعاء الطوارئ في مصر ؟
                    في مصر، هناك عدة أرقام استدعاء طارئة يمكنك استخدامها في حالة الطوارئ. إليكِ بعض هذه الأرقام:

                    أرقام الاستدعاء الطارئة في مصر
                    1. _الشرطة_: 122
                    2. _الإسعاف_: 123
                    3. _النار_: 125
                    4. _الطوارئ الطبية_: 180
                    5. _الطوارئ البحرية_: 1533
                    6. _الطوارئ الجوية_: 2455
                    7. _الطوارئ على الطرق_: 16016

                    نصائح إضافية
                    1. _احتفظ بأرقام الاستدعاء الطارئة_: احتفظ بأرقام الاستدعاء الطارئة في هاتفك أو في مكان يمكنك الوصول إليه بسهولة.
                    2. _تعلم كيفية استدعاء الطوارئ_: تعلم كيفية استدعاء الطوارئ في مصر.
                    3. _كن واضحًا_: كن واضحًا عند استدعاء الطوارئ، وأخبرهم عن حالتك وموقعك.
                </p>
            )
        }
        if (q === '5') {
            return (
                <>

                    <p>
                        كيفية التعامل إذا حدث لي عطل سيارة في الطريق ؟



                        إذا حدث لك عطل سيارة في الطريق، يجب أن تتخذ بعض الإجراءات لتجنب أي مخاطر وتحصل على المساعدة اللازمة. إليك بعض الخطوات التي يمكنك اتباعها
                    </p>

                    <p>
                        الخطوات الأساسية
                    </p>
                    <p>
                        توقف في مكان آمن_: توقف سيارتك في مكان آمن بعيدًا عن حركة المرور
                    </p>
                    <p>
                        تشغيل مصابيح الطوارئ_: تشغيل مصابيح الطوارئ لتحذير السائقين الآخرين
                    </p>
                    <p>
                        تأكد من أمانك_: تأكد من أمانك وعدم وجود أي مخاطر في المنطقة المحيطة
                    </p>
                    <p>
                        اتصل بالمساعدة_: اتصل بنا سوف نتواصل معك لارسال جهة مختصة لحل المشكلة، مثل خدمة إصلاح السيارات أو شركة التأمين
                    </p>
                    <p>

                        انتظر المساعدة_: انتظر المساعدة في مكان آمن
                    </p>

                    <p>
                        نصائح إضافية

                    </p>
                    <p>

                        سيكون هناك  أدوات إصلاح السيارات في السيارة _: احمل أدوات إصلاح السيارات الأساسية، مثل مفك البراغي ومفتاح العجلة
                    </p>
                    <p>

                        احمل هاتفك_: احمل هاتفك معك دائمًا لاتصال بالمساعدة ومعرفة كيفية الاستخدام
                    </p>
                    <p>

                        احمل بطاقة التأمين_: احمل بطاقة التأمين معك دائمًا لاتصال بشركة التأمين
                    </p>
                    <p>
                        كن حذرًا_: كن حذرًا عند الخروج من السيارة، خاصةً إذا كنت في طريق سريع

                    </p>
                    <p>

                        لا تحاول إصلاح السيارة بنفسك_: لا تحاول إصلاح السيارة بنفسك إذا كنت لا تعرف كيفية القيام بذلك
                    </p>
                </>

            )
        }

    }
    function NewQ() {
        return (
            <div className="new">
                <div className={`q ${q === '' ? '' : 'hide'}`}>
                    <p onClick={() => {
                        setq('1')
                    }}>
                        متي استخدم الطوارئ أو الاسعافات  الأولية؟
                    </p>
                    <p onClick={() => {
                        setq('2')
                    }}>
                        الإصابات الشائعة على الطريق؟
                    </p>
                    <p onClick={() => {
                        setq('3')
                    }}>
                        الخطوات الأساسية للإسعافات الأولية؟
                    </p>
                    <p onClick={() => {
                        setq('4')
                    }}>
                        كيفية استدعاء الطوارئ في مصر ؟
                    </p>
                    <p onClick={() => {
                        setq('5')
                    }}>
                        كيفية التعامل إذا حدث لي عطل سيارة في الطريق ؟
                    </p>
                </div>
                <div className="answer">
                    {whatq()}
                </div>
            </div>
        )
    }
    function min() {
        if (m === 'm') {
            return (
                <div className="mine">
                    <p onClick={() => {
                        setm('c')
                    }}>Want Question?</p>
                </div>
            )
        } if (m === 'c') {
            <div className="chat">
                {NewQ()}
                <p className='bt' onClick={() => {
                    setq('')
                }}>New Question ?</p>
            </div>
        }
    }
    return (
        min()

    )
}
export default ChatBot;
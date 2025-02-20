import Image from 'next/image';
import './index.scss';
import logosrc from '@/app/imgs/logo-modified.png'
import whatssvg from '@/app/svgs/whatsapp.svg'
import downarrow from '@/app/svgs/downarrow.svg'
import rightarrow from '@/app/svgs/rightarrow.svg'
const Navbar = () => {
    return (
        <div className="header">
            <div className="text">
                <div className="img">
                    <Image src={logosrc} alt='loading' width={150} height={150}/>
                </div>
                <div className="txt">
                <h1>Safe<span>Trip</span></h1>
                <h2>نوفر لك تجربة تأجير سيارات إلكترونية</h2>
                <h2>سريعة - آمنة - تلبي جميع احتياجاتك</h2>
                <h2> تبحث عن سيارة يومية فاخره او مجهزه لذوي الاحتياجات الخاصه ؟</h2>
                <h2>نحن هنا لنقدم لك افضل الحلول بأسعار تنافسيه وخدمه متميزه</h2>
                <h3>
                    <Image src={rightarrow} alt='' />
                    حجز إلكتروني سريع وسهل
                </h3>
                <h3>
                    <Image src={rightarrow} alt='' />

                    أسطول متنوع من السيارات الحديثة
                </h3>
                <h3>
                    <Image src={rightarrow} alt='' />

                    خدمة عملاء متاحة 24/7
                </h3>
                <h3>
                    <Image src={rightarrow} alt='' />

                    أمان وراحة في كل رحلة
                </h3>

                </div>
            </div>
            <div className="nav">
                <div className="logo">
                    <Image className='img' src={logosrc} alt='loading' width={50} height={50} />
                    <h3>Safe<span>Trip</span></h3>
                </div>
                <div className="contact">
                    <h3>تواصل <span>معنا</span></h3>
                    <Image className='img' src={whatssvg} alt='' />
                </div>
            </div>
            <div className="arrow">
                <Image className='img' src={downarrow} alt='loading' />

            </div>
        </div>
    )
}

export default Navbar;
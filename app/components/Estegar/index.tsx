import Image from 'next/image';
import './index.scss';
import car1 from '@/app/imgs/car1.jpeg'
import car2 from '@/app/imgs/car2.jpeg'
import car3 from '@/app/imgs/car3.jpeg'
import car4 from '@/app/imgs/car4.jpeg'
import car5 from '@/app/imgs/car5.jpeg'

const Estegar = () => {
    return (
        <div className="est">
            <div className="cont estegar">
                <div className="box">
                    <div className="img">
                        <Image src={car1} alt='' width={250} height={250} />
                    </div>
                    <div className="text">
                        <h1>
                            سيارة نيسان باترول
                        </h1>

                        <h2>
                            فئة السيارة  دفع رباعي
                        </h2>
                        <h2>
                            قوة المحرك  400 حصان
                        </h2>
                        <h2>
                            سيلندرات  8
                        </h2>
                        <h2>
                            الصبابات  16
                        </h2>
                        <h2>
                            ناقل الحركة   اوتوماتيك
                        </h2>
                        <h2>
                            عدد النقلات   7
                        </h2>
                        <h2>
                            سعة الخزان الوقود  100.0
                        </h2>
                        <h2>
                            عزم دوران 560 نيوتن متر
                        </h2>
                        <h2>
                            سعة المحرك   5.6 لتر
                        </h2>
                        <h2>
                            قاعدة عجلات 3065 
                        </h2>
                    </div>
                </div>
                <div className="box">
                    <div className="img">

                        <Image src={car2} alt='' width={250} height={250} />
                    </div>
                    <div className="text">

                        <h1>
                            فان عائلي بالسائق موديل 2023
                            <span> H1هيونداي</span>
                        </h1>

                        <h2>
                            لعشاق الراحة أثناء السفر والتنقلات العائلية، نقدم أحدث سيارة هيونداي H1 ميكروباص فان عائلي بأرخص الأسعار، مع أقوى العروض والتخفيضات في مصر
                        </h2>
                    </div>

                </div>
                <div className="box">
                    <div className="img">
                        <Image src={car3} alt='' width={250} height={250} />
                    </div>
                    <div className="text">

                        <h1>
                            مرسيدس s500 الجوهرة
                        </h1>

                        <h2>
                            قوة المحرك: 367 حصان
                        </h2>
                        <h2>
                            نوع الوقود: بنزين
                        </h2>
                        <h2>
                            ناقل الحركة: أوتوماتيك
                        </h2>
                        <h2>
                            قياس العجلات: 20 إنش
                        </h2>
                    </div>

                </div>
                <div className="box">
                    <div className="img">
                        <Image src={car4} alt='' width={250} height={250} />
                    </div>
                    <div className="text">

                        <h1>
                            كيا سبورتاج موديل 2024
                        </h1>
                        <p>
                            للإيجار بأفضل الأسعار في القاهرة للمدد القصيرة والطويلة، والرحلات العائلية، والمشاوير الشخصية، وكذلك لخدمات رجال الأعمال، السياحة ، الحفلات، والمناسبات الخاصة. واستقبال من المطار
                        </p>
                        <h2>
                            4 سلندر 1.6 cc تيربو.
                        </h2>
                        <h2>
                            يتوفر في كيا سبورتاج اي اكس 2024 ناقل حركة 7 سرعات مزدوج
                        </h2>
                        <h2>
                            دفع رباعي 180 حصان
                        </h2>
                        <h2>
                            تحكم ناقل حركة إلكتروني على شكل قرص
                        </h2>
                        <h2>
                            مقاعد جلد مع مخمل
                        </h2>
                        <h2>
                            تشغيل بصمة ودخول ذكي
                        </h2>
                        <h2>
                            تشغيل عن بعد
                        </h2>
                    </div>

                </div>
                <div className="box">
                    <div className="img">
                        <Image src={car5} alt='' width={250} height={250} />
                    </div>
                    <div className="text">

                        <h1>
                            سيارة تويوتا لاند كروزر
                        </h1>
                        <h2>
                            نوع السيارة 4×4
                        </h2>
                        <h2>
                            عدد الأبواب 5
                        </h2>
                        <h2>
                            الركاب 7
                        </h2>
                        <h2>
                            نوع التحويل auto
                        </h2>
                        <h2>
                            تكييف
                        </h2>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Estegar;
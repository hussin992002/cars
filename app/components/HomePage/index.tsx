import Image from 'next/image'
import './index.scss'
import downarrow from '@/app/svgs/downarrow.svg'
import car from '@/app/svgs/car.svg'
import key from '@/app/svgs/key.svg'

interface Ibrop{
    setSorB : (val:string)=>void
}
const HomePage = ({setSorB}:Ibrop) => {
    return (
        <div className="cont home">
            <div className="sell box" onClick={()=>{
                setSorB('s')
            }}>
                <Image className='img' src={key} alt='' />
                <h2>أعرض</h2>
                <Image className='arrow' src={downarrow} alt='' />

            </div>
            <div className="line"></div>
            <div className="buy box" onClick={()=>{
                setSorB('b')
            }}>   
                <Image className='img' src={car} alt='' />
                <h2>استأجر</h2>
                <Image className='arrow' src={downarrow} alt='' />
            </div>
        </div>
    )
}
export default HomePage;
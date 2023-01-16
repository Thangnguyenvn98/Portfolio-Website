import {AiOutlineMail, AiFillFilePdf} from 'react-icons/ai'
import Resume from '../../assets/Thang-Resume 2023.pdf'



const data = [
    {id:1,articleClass: 'contact__option',icon:<AiOutlineMail className = "contact__option-icon"/>,title:'Email',description:'thangnguyenvn647@gmail.com',
    link:"mailto:thangnguyenvn647@gmail.com",
    rel:'noreferrer',
    target:'_blank',
    message:'Send a message'
    },
    {id:2,articleClass: 'contact__option',icon:<AiFillFilePdf className = "contact__option-icon"/>,title:'Resume',description:'Thang Nguyen',
    link: Resume, 
    downloads: "thangnguyen-resume",
    rel:'noreferrer',
    target:'_blank',
    message:'Click to Download'}
]

export default data; 
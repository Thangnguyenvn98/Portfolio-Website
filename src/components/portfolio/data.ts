import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

interface PortfolioItem{
    id:number,
    image: any,
    title: string,
    github: string,
    demo: string
}


const data: PortfolioItem[] = [
    {id:1,image: IMG1,title:'Thang Nguyen - Personal Website',github:'https://github.com/Thangnguyenvn98/Portfolio-Website',demo:'https://www.thang-nguyen.ca/'},
    {id:2,image: IMG2,title:'My Notes - Created with React,JS and Tailwind',github:'https://github.com/Thangnguyenvn98/react-notes',demo:'https://reactnote-thang.vercel.app/'},
    {id:3,image: IMG3,title:'PostUrThought - FullStack Project built with NextJS, Prisma, NextAuth and TS',github:'https://github.com/Thangnguyenvn98/NextJS-PostUrThought',demo:'https://posturthought.vercel.app/'},
    {id:4,image: IMG4,title:'In progress with placeholder picture',github:'https://github.com',demo:'https://github.com'},
    {id:5,image: IMG5,title:'In progress with placeholder picture',github:'https://github.com',demo:'https://github.com'},
    {id:6,image: IMG6,title:'In progress with placeholder picture',github:'https://github.com',demo:'https://github.com'}
]

export default data;
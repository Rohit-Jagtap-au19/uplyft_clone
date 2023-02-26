import React from 'react'
import './announcment.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'


const Announcment = () => {
  return (
    <div className='Announcment'>
        <Navbar/>
        <div className="Annoucment_Data">
        <Sidebar/>
        <div className="announcment_data">
        <div className="heading">
            <h4 className='Subject'>Need  to Upgrde announcment</h4>
            <span className='announcment_date'>16/02/2023</span>
        </div>
        <div className="content">
        <article>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste provident quibusdam doloremque, earum corporis rem deleniti molestiae dolor? Quaerat maiores earum necessitatibus dolores perferendis voluptatibus ex laboriosam eos culpa excepturi ullam non sit quo, facilis mollitia asperiores, tempora atque officiis? Modi, illum! Distinctio odio vel ea sed voluptatibus quidem enim, molestiae voluptatem, aspernatur ipsa esse. Minus saepe tempora unde ipsam amet dolorem quia mollitia molestias deleniti eius voluptatem obcaecati maxime officia labore cupiditate iure aperiam dolor expedita voluptate, totam eos atque. Adipisci quo, quos nulla, libero qui non quae rerum doloribus nihil saepe obcaecati magnam nam dignissimos consequuntur quaerat, omnis hic assumenda iusto facere fugiat natus reprehenderit! Consequatur deleniti, molestias sequi ducimus commodi maiores dolorum illo culpa in tempore quidem sint dolore perspiciatis autem mollitia necessitatibus, deserunt tempora nulla nisi. Illum facere placeat quas non, consectetur quidem sunt quisquam aut error at corrupti veritatis magni nemo eius ratione eligendi ipsum perferendis voluptate tempore odit impedit.
        </article>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Announcment
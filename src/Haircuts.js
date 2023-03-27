import { dataTwo } from "./dataTwo";
import { useState } from "react";
import './App.css';
import Sliders from "./Sliders";


 function Haircuts() {
    const [haircut, setHaircut] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const {id, name, image} = dataTwo[haircut]; 
 
    const text = "СТРИЖКА всегда была и остаётся одной из самых востребованных услуг в салонах красоты. Здоровые, ухоженные и красиво уложенные волосы создают неповторимый образ красоты и обаяния. Причем это работает как для женщин, так и для мужчин. Стрижка – способ самовыражения и проявления своей индивидуальности, который доступен каждому. Это способ показать свой характер, амбиции, оказать влияние на окружающих и показать им свое скрытое «Я». Стрижка – это не просто парикмахерская услуга, это во многом – искусство, в котором важно уметь найти гармонию между внешним обликом человека, его эстетическими пожеланиями и тенденциями в области моды и стиля. Грамотный и квалифицированный парикмахер должен учесть тип и природный цвет волос, форму головы, шеи, лица. Ответственный подход к учету всех этих нюансов и высокая квалификация мастеров позволяют нам гарантировать нашим клиентам положительные эмоции от процесса стрижки и ее конечного результата. Вы можете заказать нашим парикмахерам стрижку, описав желаемый результат, можете заказать стрижку из каталога, можете принести с собой фотографию кинозвезды или любимой артистки, стрижку которой хотите скопировать – мы идем навстречу любым пожеланиям клиентов. Для нас важно, чтобы наши посетители чувствовали себя обновленными и вдохновленными. Приходите к нам, мы Вас ждем!" 

    const next/* Haircut */ = () => {
        setHaircut((haircut => {
            haircut ++;
            if(haircut > dataTwo.length -1) {
                haircut = 0;
            }
            return haircut;
        }))
    }

    const previous/* Haircut */ = () => { 
        setHaircut((haircut => {
            haircut --;
            if(haircut < 0) {
                return dataTwo.length - 1;
            }
            return haircut;
        }))
    } 

    return(
    <div>
        <div className="back">
            <h1>Наши работы</h1>
        </div>

        <div className="container">
            <div>
                <p className="desc">{showMore? text: text.substring(0, 190) + "..."}
                <button onClick={() => setShowMore(!showMore)}>{showMore? "Свернуть": "Развернуть"}</button>
                </p>
            </div>
        </div>
        
        {/*  <div key={id} className="back">
              <button className="change" onClick={previousHaircut}>
              <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons"/>
              </button>  */}
            
              <Sliders anySlider ={haircut}/>
            {/* <img className="image" src={image} width="320px" alt="haircut"/>  */}
            
         {/*  <button className="change" onClick={nextHaircut}>
              <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons"/>
          </button>
              
            <h2>{name}</h2> 
        </div>      */}         
     </div>    
    )
}
export default Haircuts;
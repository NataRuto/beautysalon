import { useState } from "react";
import './App.css';
    
    function Sliders({ anySlider }) {
    
        const [index, setIndex] = useState(0); //переименовала, чтобы было понятно, что это индекс активного элемента в массиве
        const { name, image } = anySlider[index]; //здесь будет не dataTwo, а anySlider - потому что именно в нем хранится наша переданная пропсом база данных
    
    
        const next = () => {
            setIndex((index => {
                index++;
                if (index > anySlider.length - 1) {
                    index = 0;
                }
                return index;
            }))
        }
    
        const previous = () => {
            setIndex((index => {
                index--;
                if (index < 0) {
                    return anySlider.length - 1;
                }
                return index;
            }))
        }
    
        return (
            <div>
                <div className="container">
                    <div className="back">
                        <button className="change" onClick={previous}>
                            <img className="icon" src="https://img.icons8.com/fluency/512/less-than.png" width="15px" alt="icons" />
                        </button>
    
                        <img className="image" src={image} width="320px" alt="cinema" />
    
                        <button className="change" onClick={next}>
                            <img className="icon" src="https://img.icons8.com/fluency/512/more-than.png" width="15px" alt="icons" />
                        </button>
    
                        <h2>{name}</h2>
                    </div>
                </div>
            </div>
        )
    }
    
    export default Sliders;    
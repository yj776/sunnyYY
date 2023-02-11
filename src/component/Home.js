import React from "react";
import move1 from '../move1.jpeg';

export default function Home(){
    return(
        <>
        <h2><u>Home</u></h2>
        <br></br>
            <div><b>紐約陽光搬運公司</b></div>
            <br></br>
            <p> 
                搬家對于很多人來說是一件非常麻煩的事，但由于工作、學校的變動和其他不可預測的原因需要轉換住房，但面對各類大小傢具和成堆的生活用品該如何處理？搬家公司又該如何選擇？
            </p>
            <br></br>
            <p>
                答案是：紐約陽光搬運公司將不會辜負您的期望！
            </p>
            <p>陽光照耀你我！</p>
            <br></br>
            <img src={move1} alt = "move1" />
        </>
    )
}
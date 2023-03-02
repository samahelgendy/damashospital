import React, { Component } from 'react';
import Footer from '../Footer';
import {Pragproc , Part , Img , PartTitle , Desc , Slide , Sal , Delsal} from './style';
import axios from 'axios';
class Proces extends Component{
    state ={
        proces:[]
    }

    componentDidMount(){
    axios.get("js/data.json").then(res =>{this.setState({proces:res.data.proces})});

    }


    render(){

        const {proces}= this.state;
        const procesList = proces.map((procesItem) => {
            return(
                <Part key={procesItem.id} className="box">
                    <Img src={procesItem.img} alt="" /> 
                   
                    <PartTitle >{procesItem.title}</PartTitle >
                    
                    <Desc>
                        {procesItem.body}
                    </Desc>
                    <Sal>
                     <Delsal>{procesItem.delsal}</Delsal>
                     <span className='newsal'>{procesItem.sal}</span>
                    </Sal>
                    
                </Part>  
            )
        })
        return(
            <React.Fragment>
            <div className="drop">
         <div className="container">
             <h4 className="samah" data-text ="العمليات"> 
             <span className="line">العمليات</span>
             </h4>
             <Pragproc>يعمل بمركز الكبد والجهاز الهضمى بدماص متخصصون فى الحراجة على كفاءة
                 عالية فى الجراحة  العامة وجراحة الكبد والجهاز الهضمى والأورام هناك
                 ايضا فريق جراحة متكامل لعمليات تكميم المعدة وتحويل المسار
            </Pragproc>

            <Slide>
                 {procesList}
            </Slide>
         </div>
       </div>
       <Footer />
          </React.Fragment>
        )
    }
}

export default Proces;
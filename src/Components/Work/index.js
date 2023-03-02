import React , {Component}  from "react";
import {WorkSec , Title , Part , Slide , Drname , PartTitle , Desc ,Img, Btn }from"./style"
import axios from 'axios';

class Work extends Component{

    state ={
        works:[]
    }

    componentDidMount(){
    axios.get("js/data.json").then(res =>{this.setState({works:res.data.works})});

    }
    render(){
          
        const {works}= this.state;
        const WorkList = works.map((WorkItem) => {
            return(
                <Part key={WorkItem.id} className="box">
                    <Img src={WorkItem.img} alt="" /> 
                    <Drname>{WorkItem.trame}</Drname>
                    <PartTitle >{WorkItem.title}</PartTitle >
                    
                    <Desc>
                        {WorkItem.body}
                    </Desc>
                    <Btn>{WorkItem.btn}</Btn>
                </Part>  
            )
        }
        )
        return(
            <WorkSec className="worksec">
            <div className="container">
                <Title>الأطباء</Title>
                 <Slide>
                 {WorkList}
                 </Slide>
                
            </div>
        </WorkSec>

        )
    }
}

export default Work ;
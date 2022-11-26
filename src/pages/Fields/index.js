/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { Link } from "react-router-dom";
import { UserFields } from "../../api/api";
import fieldImg from "../../assets/images/field1.png"
function Fields() {
    const [fields, setFields] = useState(UserFields)
    const ImgHandle = async (img) => {
        return fieldImg
    }  
    return (
        <div className="row row-cols-2 row-cols-sm-3 p-2">
            {
                fields.map((field,index) => {
                    return (
                        <div key={index} className="col">
                            <Link to={{pathname:"/field/"+field.id}}
                                  state = {{
                                    coordinate:field.coordinate,
                                    name:field.name,
                                }}
                            >
                                <img src={field.img} className="img-fluid" style={{maxHeight:'100%'}}/>
                            </Link>
                            <h2>Field: {field.name}</h2>
                         </div>
                    )
                })
            }
            
        </div>

    )
}

export default(Fields)
import React, { Component } from 'react';
import { uploadImage} from '../services/imageService'

class Form extends Component {
    state = { 
      data: {
        name: null,
        image: null,
      }
     }

     fileSelected = e => {
       const file = e.target.files[0];
       this.setState({ data: {image: file} })
      }
      
      upload = e =>{
        e.preventDefault()
        const { image, name } = this.state.data;
        const data = new FormData();
        data.append('name', name)
        data.append('image', image)
        uploadImage(data);
      }

    render() { 
        return ( 
            <React.Fragment>
              <div className="container">
              <form action="#" encType='multipart/form-data'>
                
                <input type="text"  id='name'  placeholder='הכנס טקסט'  className='form-control mt-4' onChange={ this.fileSelected }/>

                <br/>
                 <div className="porm-group">
                    <input type="file" 
                           name='image' 
                           id="image" 
                           className="form-control-file"
                           accept='image/*'
                           onChange={ this.fileSelected}
                           ref={fileInput => this.fileInput = fileInput}
                           hidden/>
                    <span></span>

                           <button className='btn btn-outline-dark' onClick={()=>this.fileInput.click()}>העלה קובץ</button>
                </div>
                <br/>

                <button className='btn btn-outline-dark' onClick={this.upload}>שלח</button>
              </form>
              </div>
            </React.Fragment>
         );
    }
}
 
export default Form;
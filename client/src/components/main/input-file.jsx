import React, { Component } from 'react';

class InputFile extends Component {
    state = {  }
    render() { 
        return ( 
              <React.Fragment>
                <div className="porm-group">
                    <label htmlFor="image">העלה קובץ</label>
                    <input type="file" 
                           name='image' 
                           id="image" 
                           className="form-control-file"
                           accept='.png'/>
                </div>
              </React.Fragment>
         );
    }
}
 
export default InputFile;
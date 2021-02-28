import React, { Component } from 'react';

class Input extends Component {
    state = {  }
    render() { 
        return ( 

            
              
                <div className="porm-group">
                    <label htmlFor="image">טקסט חופשי</label>
                    <input type="text" name='image' id="image" className="form-control-file"/>
                </div>

            
         );
    }
}
 
export default Input;
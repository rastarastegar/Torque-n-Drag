import React, {Component} from "react";
import "./Graph3D.css";
//import { Link } from 'react-router-dom'
import CsvParse from  "../UploadCSV"; 
import { Route } from 'react-router-dom'
import { renderToStaticMarkup as render } from 'react-dom/server'

const mockFunc = () => true
const keys = ['account', 'balance']


class Graph3D extends Component {
    

render(){ 
    return(<div>
            <CsvParse
              keys={keys}
              onDataUploaded={mockFunc}
              render={onChange => <input type="file" />}
            />,
            <Route exact path="../Upload.csv" component={CsvParse} />
        </div>
        );
    }
}

export default Graph3D;
//import "./3.js";
import React, {Component} from "react";
import "./Graph3D.css";
//import { Link } from 'react-router-dom'
import CsvParse from  "../UploadCSV"; 
import "./tubular.js";
//import "./vectors.js";
import * as THREE from "three";
import ExpoTHREE from "expo-three";


class Graph3D extends Component {

    constructor() {
        super()

        this.state = {
            data: null,
            error: null,
        }
        }

        handleData = data => {
        this.setState({ data })
        }

        handleError = error => {
        this.setState({ error })
        }

        render() {
        const keys = [
            'Depth (ft)',
            'Incl. (Deg.)',
            'Azim. (Deg.)',
            'XXXX',
            'XXXX',
            'XXXX',
            'XXXX',
            'XXXX',
            'XXXX',
            'XXXX',
            'XXXX',
            'XXXX',
        ]

        return (
            <div>
            <h1>Demo React Csv Parse</h1>

            <CsvParse
                keys={keys}
                onDataUploaded={this.handleData}
                onError={this.handleError}
                render={onChange => <input type="file" onChange={onChange} />}
            />

            





            {this.state.data && (
                <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
            )}

            {this.state.error && (
                <pre>{JSON.stringify(this.state.error, null, 2)}</pre>
            )}
            </div>
        )
    }
}


export default Graph3D;
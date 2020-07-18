import React, { Component } from 'react';
import './table.css'
import api from '../../api/api';

const TableHead = () => (
    <thead>
        <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Qtd</th>
        </tr>
    </thead>
);



export default class Table extends Component {
    state = {
        tools: [],
    };

    componentDidMount() {
        this.loadTools();
    };

    loadTools = async () => {
        const response = await api.get("/list");
        this.setState({ tools: response.data.docs });

    };

    render() {
        return (
            <table className="tool-list">
                <TableHead />
                <tbody>
                    {this.state.tools.map(tool => (
                        <tr key={tool._id}>
                            <td>{tool.description}</td>
                            <td>R$ {String(tool.price).replace('.', ',')}</td>
                            <td>{tool.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        )
    }

}



import React, { Component } from 'react';
import './table.css'
import api from '../../api/api';

export default class Table extends Component {
    state = {
        tools: [],
        toolInfo: {},
        page: 1,
    };

    componentDidMount() {
        this.loadTools();
    };

    loadTools = async (pageNumber = 1) => {
        const response = await api.get(`/list?page=${pageNumber}`);
        const { docs, ...toolInfo } = response.data;
        this.setState({ tools: docs, toolInfo, page: pageNumber });
    };

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadTools(pageNumber);
    };

    nextPage = () => {
        const { page, toolInfo } = this.state;
        console.log(typeof pages)
        if (page === toolInfo.pages) return;
        const pageNumber = page + 1;
        this.loadTools(pageNumber);
    }

    render() {
        return (
            <div>
                <div>
                    <table className="tool-list">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Qtd</th>
                            </tr>
                        </thead>
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
                </div>
                <div className="pagination">
                    <button onClick={this.prevPage}>Anterior</button>
                    <button onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }

}



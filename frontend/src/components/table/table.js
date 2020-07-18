import React, { Component } from 'react';
import './table.css'
import api from '../../api/api';

const TableHead = () => (
    <table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Preço</th>
                <th>Quantidade</th>
            </tr>
        </thead>
    </table>
);

export default class Table extends Component {
    render() {
        return (
            <TableHead />
        )
    }

}



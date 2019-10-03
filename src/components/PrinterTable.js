import React from 'react'

const PrinterTable = props =>(
    <table>
        <thead>
            <tr>
                <th>Printer Name</th>
                <th>Printer Ip</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {props.printers.length > 0 ? (
                props.printers.map(printer => (
                    <tr key={printer._id}>
                        <td>{printer.name}</td>
                        <td>{printer.ip}</td>
                        <td>
                            <button className="button muted-button">Edit</button>
                            <button className="button muted-button">Delete</button>
                        </td>
                    </tr>
                ))
            ) : (
                    <tr>
                        <td colSpan={3}>No printers available</td>
                    </tr>
                )} 

          
        </tbody>
    </table>
)

export default PrinterTable;
import React , { useState } from 'react';

const PrinterForm = props => {
    const initPrinter = {id:null,name:'',username:''}
    const [printer, setPrinter] = useState(initPrinter)

    const handleInputChange = event => {
        const { name, value } = event.target

        setPrinter({ ...printer, [name]: value })
    }

    return(
        <form
            onSubmit={event => {
                event.preventDefault()
                if (!printer.name || !printer.ip) return

        
                setPrinter(initPrinter)
            }}
        >
            <label>Printer Name</label>
            <input type="text" name="name" value={printer.name} onChange={handleInputChange} />
            <label>Printer Ip</label>
            <input type="text" name="ip" value={printer.ip} onChange={handleInputChange} />
            <button>Add new printer</button>
        </form>
    )
}

export default PrinterForm
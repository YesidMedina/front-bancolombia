
import ReactHTMLTableToExcel from 'react-html-table-to-excel'

export const ExcelExport = () => {

   
  return (
    <div>
        <ReactHTMLTableToExcel
        className=''
        table='Amm_im'
        filename='Amm_im'
        sheet='pagina 1'
        buttonText='Exportar a excel'

        />
    </div>
  )
}

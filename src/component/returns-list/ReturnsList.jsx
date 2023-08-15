import TableHeader from "../table-header/TableHeader";
import PerYearData from "../per-year-data/PerYearData";
import Error from "./style"

const ReturnsList = ({ yearlyData }) => {
    let tableContent = (
        <table className="result">
            <TableHeader />
            <tbody>
                {yearlyData.map(data => <PerYearData key={data.year} data={data} />)} 
            </tbody>
        </table>
    )

    if(!yearlyData.length) tableContent = <Error>Fill all details!!</Error>
    return (   
        <>
            {tableContent}
        </>
    )
}

export default ReturnsList;
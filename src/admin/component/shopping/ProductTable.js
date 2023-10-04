
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import { tableContext } from '../../pages/Addproducts';





const Producttable=()=>{
    const product= useContext(tableContext)

    return(
        <>
  {product===null ? <Spinner animation="border" variant="primary" /> : 
     <Table responsive striped bordered hover>
    <thead>
      <tr>
         <th>کد کالا</th> 
        <th>نام گروه</th>
        <th>نام محصول</th>
        <th>موجودی</th>
        <th>قیمت فروش</th>
        <th>قیمت خرید</th>
        <th>شرکت سازنده</th>
      </tr>
    </thead>
    <tbody>
   
       
       { 

       
         product.map(p=>(
     <tr key={p._id}>   
     <td>{p.productcode} </td>  
     <td>{p.productgroup} </td>  
     <td>{p.productname} </td>
     <td>{p.numberInStock} </td>
     <td>{p.price} </td>
     <td>{p.sellprice} </td>
     <td>{p.company} </td>
     {/* <td>{p.productinfo} </td> */}
      </tr>
        

         ))
       }
      
    
    </tbody>
  </Table> 
}
  </>
    )
}
export default Producttable;
import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import useSWR from 'swr'
import axios from 'axios'
import Link from "next/link";


const TableroTercero = ({proveedor}) => {

    const {nombre} = proveedor;

    console.log(proveedor)
  
    
  

 


  return (

    <>
    


    
    <table class="w-full table-auto text-sm">
    
        <tbody>
            <tr class="hover:bg-grey-lighter">
                <td class="py-2 px-4 border-b border-grey-light">{nombre}</td>
            </tr>
        
        </tbody>
    </table>
    
   
    
    

    
                  


</>
  );
};

export default TableroTercero;



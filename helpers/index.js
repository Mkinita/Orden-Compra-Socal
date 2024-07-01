// export const formatearDinero = cantidad => {
//     return cantidad.toLocaleString('en-CO',{
//         style: 'currency',
//         currency:'USD',
//         minimumFractionDigits: 0
//     })
// } 



export const formatearDinero = cantidad => {
    if (cantidad != null) {
      return cantidad.toLocaleString('es-CL',{
        style: 'currency',
        currency:'CLP',
        minimumFractionDigits: 0
      });
    } else {
      return '';
    }
  };
  


export const formatearDinerouf = (cantidad) => {
  if (cantidad != null) {
    return cantidad.toLocaleString('es-CL', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  } else {
    return '';
  }
};

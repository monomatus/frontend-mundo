import { Autocomplete, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

//Para la Tabla

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const Principal = () => {

    const [nombre,setNombre] = useState('');
    const [bodega,setBodega] = useState('');
    const [bodegas,setBodegas] = useState([]);
    const [marca,setMarca] = useState('');
    const [marcas,setMarcas] = useState([]);
    const [modelo,setModelo] = useState('');
    const [modelos,setModelos] = useState([]);

//PARA FORMULARIO INGRESAR
    const [bodega2,setBodega2] = useState('');
    const [bodegas2,setBodegas2] = useState([]);
    const [marca2,setMarca2] = useState('');
    const [marcas2,setMarcas2] = useState([]);
    const [modelo2,setModelo2] = useState('');
    const [modelos2,setModelos2] = useState([]);

//para el filtro
    const [filtrar,setFiltrar] = useState(false);

// estado para mostrar formulario
const [mostrarFormulario, setMostrarFormulario] = useState(false);



  const listarBodega = async () => {
    try {
      const response = await fetch(`http://mundo-app.test/api/listarBodegas`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      console.log(res); //imprimir por pantalla lo que tiene la variable res
      setBodegas(res);
    } catch (err) {

        console.log(err);
    }
  };

  const listarMarca = async () => {
    try {
      const response = await fetch(`http://mundo-app.test/api/listarMarcas`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await response.json();
      //console.log(res); //imprimir por pantalla lo que tiene la variable res
      setMarcas(res);
    } catch (err) {

        console.log(err);
    }
  };

  const listarModeloMarca = async (m) => {
    //console.log(m);
    try {
        const response = await fetch(`http://mundo-app.test/api/listarDispositivosModeloMarca?idMarca=${m}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          }
        });
        const res = await response.json();
        console.log(res); //imprimir por pantalla lo que tiene la variable res
        setModelos(res);
      } catch (err) {
  
          console.log(err);
      }

  };


  const handleChangeBodega = (e) => {
    setBodega(e.target.value);
    setFiltrar(false);

  }
  const handleChangeMarca = (e) => {
    setMarca(e.target.value);
    listarModeloMarca(e.target.value);
    setFiltrar(false);

  }

  const handleChangeModelo = (e) => {
    setModelo(e.target.value);
    setFiltrar(false);

  }


//PARA FORMULARIO INGRESAR
const listarBodega2 = async () => {
  try {
    const response = await fetch(`http://mundo-app.test/api/listarBodegas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    console.log(res); //imprimir por pantalla lo que tiene la variable res
    setBodegas2(res);
  } catch (err) {

      console.log(err);
  }
};

const listarMarca2 = async () => {
  try {
    const response = await fetch(`http://mundo-app.test/api/listarMarcas`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    //console.log(res); //imprimir por pantalla lo que tiene la variable res
    setMarcas2(res);
  } catch (err) {

      console.log(err);
  }
};

const listarModeloMarca2 = async (m) => {
  //console.log(m);
  try {
      const response = await fetch(`http://mundo-app.test/api/listarDispositivosModeloMarca?idMarca=${m}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const res = await response.json();
      console.log(res); //imprimir por pantalla lo que tiene la variable res
      setModelos2(res);
    } catch (err) {

        console.log(err);
    }

};


const handleChangeBodega2 = (e) => {
  setBodega2(e.target.value);
  setFiltrar(false);

}
const handleChangeMarca2 = (e) => {
  setMarca2(e.target.value);
  listarModeloMarca2(e.target.value);
  setFiltrar(false);

}

const handleChangeModelo2 = (e) => {
  setModelo2(e.target.value);
  setFiltrar(false);

}

const handleNombre = (e) => {
  setNombre(e.target.value);
  setFiltrar(false);

}



// para los botones de filtros

const handleClickFiltrar = () => {

  setFiltrar(true);

}

const handleClickLimpiarFiltro = () =>{

  setBodega('');
  setMarca('');
  setModelo('');
  setFiltrar(false);


}



// boton de ingresar

const handleIngresar = () =>{
  setMostrarFormulario(true);
}
const handleCerrar = () =>{
  setMostrarFormulario(false);
}

const handleSubmit = async (e) =>{
  e.preventDefault(); // Previene el envío del formulario por defecto

  
  const dispositivoData = {
    nombre: nombre, 
    id_modelo: modelo2, 
    id_bodega: bodega2, 
  };

  try {
    const response = await fetch(`http://mundo-app.test/api/guardarDispositivo`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dispositivoData), // Convierte el objeto a JSON
    });
    if (response.ok) {
      // Si la respuesta es exitosa (código 200), puedes realizar acciones adicionales si es necesario
      console.log("Dispositivo guardado con éxito");
      setMostrarFormulario(false); // Cierra el diálogo de formulario
    } else {
      console.error("Error al guardar el dispositivo");
    }
  } catch (err) {
    console.error(err);
  }

}






const rows = [
  {id:'id', nombreDispositivo: 'nombreDispositivo', Bodega: 'idBodega', nombreModelo: 'idModelo', nombreMarca: 'idMarca'}
];



  useEffect(()=>{
    listarBodega();
    listarMarca();
    listarModeloMarca();
    listarBodega2();
    listarMarca2();
    listarModeloMarca2();
  }, []);



  return (
    <div>
      <grid>
      <h2>App Mundo Pacifico</h2>
      </grid>
      <br></br><br></br>

      <Button onClick={handleIngresar}>Ingresar Dispositivo</Button>

<Dialog open={mostrarFormulario} onClose={handleCerrar}>
  <DialogTitle>Formulario de Ingreso de Dispositivo</DialogTitle>
  <DialogContent>
    <TextField value={nombre} onChange={handleNombre} label="Nombre del Dispositivo" variant="outlined" /><br></br>

    <FormControl fullWidth> {/* ... BODEGA ... */}
      <InputLabel id="bodega-select-label">Bodegas</InputLabel>
      <Select
        labelId="bodega-select-label"
        id="bodega-select"
        value={bodega2}
        label="Bodega2"
        onChange={handleChangeBodega2}
      >
        {bodegas.map((b) => {
          return <MenuItem value={b.id}>{b.id}</MenuItem>;
        })}
      </Select>
    </FormControl><br></br>
    
    <FormControl fullWidth>  {/* ... MARCA ... */}

        <InputLabel id="demo-simple-select-label">Marcas</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={marca2}
        label="Marca"
        onChange={handleChangeMarca2}
        >
            {marcas.map((marc)=>{
                return <MenuItem value={marc.id}>{marc.nombre}</MenuItem>
            })}
        
        </Select>
        </FormControl><br></br>

        <FormControl fullWidth > {/* ... MODELO ... */}

        <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={modelo2}
        label="Modelo2"
        onChange={handleChangeModelo2}
        >
            {
            
            modelos2.dispositivos ? 
            modelos2?.dispositivos.map((model)=>{
                return <MenuItem value={model.modeloId}>{model.modeloNombre}</MenuItem>
            })
            : null
            }

        </Select>
        </FormControl><br></br>



  </DialogContent>
  <DialogActions>
    <Button variant="contained" onClick={handleSubmit}>Guardar Dispositivo</Button>
    <Button variant="contained" onClick={handleCerrar}>Cancelar</Button>
  </DialogActions>
</Dialog>
      
      
      <br></br><br></br>



            
      <FormControl fullWidth>

        <InputLabel id="demo-simple-select-label">Bodegas</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bodega}
          label="Bodega"
          onChange={handleChangeBodega}
        >
            {bodegas.map((b)=>{
                return <MenuItem value={b.id}>{b.id}</MenuItem>
            })}
          
        </Select>
      </FormControl>
      
      <br ></br> <br ></br>



        <FormControl fullWidth>

        <InputLabel id="demo-simple-select-label">Marcas</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={marca}
        label="Marca"
        onChange={handleChangeMarca}
        >
            {marcas.map((marc)=>{
                return <MenuItem value={marc.id}>{marc.nombre}</MenuItem>
            })}
        
        </Select>
        </FormControl>

        <br ></br> <br ></br>

        <FormControl fullWidth >

        <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={modelo}
        label="Modelo"
        onChange={handleChangeModelo}
        >
            {
            
            modelos.dispositivos ? 
            modelos?.dispositivos.map((model)=>{
                return <MenuItem value={model.modeloId}>{model.modeloNombre}</MenuItem>
            })
            : null
            }
        
        </Select>
        </FormControl>
        <br></br><br></br>
        <Button variant="contained" onClick={handleClickFiltrar}>Filtrar</Button> <br ></br><br ></br>
        <Button variant="contained" onClick={handleClickLimpiarFiltro}>Limpiar Filtros</Button>
        <br></br><br></br>


      {
        modelos?.dispositivos && filtrar &&

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID DISPOSITIVO</TableCell>
            <TableCell align="right">NOMBRE DISPOSITIVO</TableCell>
            <TableCell align="right">BODEGA</TableCell>
            <TableCell align="right">MODELO</TableCell>
            <TableCell align="right">MARCA</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {modelos?.dispositivos.map((row) => {
          // Agrega una condición para filtrar por el ID del modelo
          if (modelo === row.modeloId && bodega === row.bodegaId) {
            return (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.nombre}</TableCell>
                <TableCell align="right">{bodega}</TableCell>
                <TableCell align="right">{row.modeloNombre}</TableCell>
                <TableCell align="right">{marca}</TableCell>
              </TableRow>
            );
          } else {
            return null; // Filtra los dispositivos que no coinciden con el modelo seleccionado
          }
        })}
      </TableBody>
      </Table>
    </TableContainer>






        
      }

        



    </div>
  );
};

export default Principal;

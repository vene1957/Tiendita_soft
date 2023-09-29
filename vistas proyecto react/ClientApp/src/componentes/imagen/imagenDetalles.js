﻿import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { NavBar } from '../principales/navbar'
import '../../assets/css/menu.css'

export const ImagenDetalles = () => {
    const { idImagen } = useParams();
    const [imagen, setimagen] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchimagen = async () => {
            try {
                const response = await axios.get(`/api/imagen/Detalles/${idImagen}`);
                setimagen(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        };

        fetchimagen();
    }, [idImagen]);

    if (loading) {
        return <div>Cargando imagen...</div>;
    }

    if (!imagen) {
        return <div>No se encontró el imagen.</div>;
    }

    return (
        <div>
            <NavBar />
            
            <div className="card ">


                <div className="partedeltitulo">
                    <h2 className="letra">Detalle del Productos</h2>

                </div>
                <div className="card-body">
                        <div className="Titulo">
                        <div className="btn-neon btn-agre letra2">
                                <span id="span1"></span>
                                <span id="span2"></span>
                                <span id="span3"></span>
                                <span id="span4"></span>
                                <a href="/imagen">Regresar</a>
                            </div>

                            
                                                       
                        
                <table className="table1">
                    <thead>
                        <tr>
                            <th scope="col " className="raya">Id imagen</th>
                            <th scope="col " className="raya">Nombre</th>
                            <th scope="col " className="raya">Descripción</th>
                            <th scope="col " className="raya">Stock</th>
                            <th scope="col " className="raya">Precio</th>
                            <th scope="col " className="raya">Categoria</th>
                            <th scope="col " className="raya">StockMax</th>
                            <th scope="col " className="raya">StockMin</th>
                            <th scope="col " className="raya">Imagen</th>
                            
                        </tr>
                    </thead>
                    <tbody>

                            <tr >
                                <td className="raya">{imagen.idImagen}</td>
                                <td className="raya">{imagen.nombre}</td>
                                <td className="raya">{imagen.descripcion}</td>
                                <td className="raya">{imagen.stock}</td>
                                <td className="raya">{imagen.precio}</td>
                                <td className="raya">{imagen.categoria}</td>
                                <td className="raya">{imagen.stockMax}</td>
                                <td className="raya">{imagen.stockMin}</td>
                                <td className="raya">{imagen.imagen1}</td>
                                
                            </tr>

                    </tbody>
                </table>
            </div>
            </div>
        </div>
        </div>
    );
};


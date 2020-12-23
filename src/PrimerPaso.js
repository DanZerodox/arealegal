import * as React from 'react';
import './App.css';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import planta from './planta.png';

export default class PrimerPaso extends React.Component {
    render() {
        return (
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                millionaire: false,
                money: 0,
                description: ''
            }} onSubmit={() => { }}>
                <Form style={{ padding: '50px 80px' }}>
                    <Grid style={{ lineHeight: 1 }} container spacing={3}>
                        <Grid xs={12} style={{ fontWeight: 500, borderBottom: '1px solid' }}>
                            <div><img style={{width:25}} src={planta}></img><p style={{marginLeft:37, marginTop:-22, color:'rgb(0, 20, 137)'}}>Publicidad – Concepto Publicitario y Claims Asociados</p></div>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- El material publicitario, ¿atribuye a los productos cualidades preventivas, terapéuticas, rehabilitatorias, nutritivas, estimulantes o de otra índole, que no correspondan a su función o uso?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p1a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p1a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- El material publicitario, ¿indica o sugiere que el uso o consumo de un producto es un factor determinante para modificar la conducta de las personas?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p2a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p2a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- El material publicitario, ¿presenta al producto como estimulante o modificador del estado físico o mental?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p3a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p3a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- El material publicitario, ¿indica o induce a creer, explícita o implícitamente, que el producto cuenta con ingredientes o propiedades que no tiene?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p4a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p4a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- ¿El producto se asocia directamente o indirectamente con el consumo de bebidas alcohólicas o tabaco?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p5a" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p5a" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} style={{border:'3px solid #43b02a'}}>
                            <p>Si respondiste “Sí” a cualquiera de estas preguntas, se debe ajustar la pieza publicitaria para evitar el efecto señalado.
Fundamentos: Artículos 6, 21 y 22 Reglamento de la Ley General de Salud en Materia de Publicidad.
</p>
                        </Grid>
                    </Grid>
                </Form>
            </Formik>
            
        );
    }
}
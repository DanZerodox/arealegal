import * as React from 'react';
import './App.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import planta from './planta.png';


export default class TercerPaso extends React.Component {
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
                            <div><img style={{width:25}} src={planta}></img><p style={{marginLeft:37, marginTop:-22, color:'rgb(0, 20, 137)'}}>Promociones y Ofertas- ¿Quién es el Organizador de la Promoción?</p></div>              
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- ¿El Organizador (responsable) de la promoción es Jumex®?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p1c" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p1c" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- Si el Organizador es un tercero, ¿tienes contrato firmado y vigente?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p2c" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p2c" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- Si el Organizador es un tercero, ¿legal ya revisó los Términos y Condiciones?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p3c" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p3c" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- ¿Realizarás publicaciones en redes sociales? </p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p4c" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p4c" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- ¿El material de tus publicaciones en redes sociales ya fueron revisados y aprobados por legal?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p5c" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p5c" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} style={{border:'3px solid #43b02a'}}>
                            <p>Si respondiste “No” a cualquiera de estas preguntas, debes de contar con todos los documentos necesarios para solicitarle a legal la elaboración de un contrato y/o enviar a legal los Términos y Condiciones y/o publicaciones previo al inicio de tu promoción.
Es importante que recuerdes que debes de solicitar la elaboración o revisión de un contrato o Términos y Condiciones a legal con tiempo suficiente, así como enviar todos los documentos e información que te sean solicitados. 
</p>
                        </Grid>
                    
                    </Grid>
                </Form>
            </Formik>
        );
    }
}
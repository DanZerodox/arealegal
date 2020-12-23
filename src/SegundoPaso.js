import * as React from 'react';
import './App.css';
import { Card, CardContent, Typography } from '@material-ui/core';
import { Field, Form, Formik } from 'formik';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import BorderLinearProgress from '@material-ui/core/LinearProgress';
import planta from './planta.png';


export default class SegundoPaso extends React.Component {
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
                             <div><img style={{width:25}} src={planta}></img><p style={{marginLeft:37, marginTop:-22, color:'rgb(0, 20, 137)'}}>Publicidad – Legales Mínimos</p></div>              
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- ¿La marca utilizada está acompañado del signo de marca registrada?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p1b" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p1b" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- ¿El nombre del producto está bien escrito y acompañado del signo de la marca registrada?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p2b" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p2b" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- ¿Se incluye la leyenda promotora de salud?</p>
                            <p style={{marginLeft:52}}>Opciones</p>
                            <ul style={{marginLeft:31}}>
                                        <li>COME FRUTAS Y VERDURAS</li>
                                        <li>COME BIEN</li>
                                        <li>ALIMÉNTATE SANAMENTE</li>
                                        <li>HIDRÁTATE DIARIAMENTE</li>
                             </ul>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p3b" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p3b" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- Si tu publicidad incluye envases, éstos se encuentran con los octágonos correspondientes en el material publicitario?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p4b" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p4b" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- Si tu publicidad incluye imágenes de los premios/incentivos que se ofrecen, ¿ya indica que son de carácter ilustrativo o que solamente son de referencia?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p5b" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p5b" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- Si tu publicidad está asociada a una promoción de materialización con mecánica, ¿ya incluye el legal "Consulta mecánica, términos y condiciones"?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p6b" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p6b" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- Si tu publicidad está asociada a una promoción de materialización con mecánica, ¿ya indica dónde se pueden consultar la mecánica, términos y condiciones (e.g., URL)?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p7b" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p7b" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={8}>
                            <p>- Si tu publicidad es de b:oost®, ¿ya indica que es una promoción limitada a mayores de 18 años?</p>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'rgb(0, 20, 137)'}}>
                                <Field type="radio" name="p8b" value="0" />
                      Si
                    </label>
                        </Grid>
                        <Grid item xs={12} sm={2} style={{ padding: 30 }}>
                            <label style={{color:'red'}}>
                                <Field type="radio" name="p8b" value="1" />
                      No
                    </label>
                        </Grid>
                        <Grid item xs={12} style={{border:'3px solid #43b02a'}}>
                            <p>Si respondiste “No” a cualquiera de estas preguntas, tu pieza publicitaria no está lista.</p>
                            <p style={{fontWeight:500, textAlign:'center'}}>Reglas Leyenda Promotora de Salud</p>
                            <ul>
                                <li style={{fontWeight:500}}>Siempre</li>
                                <p>Colores contrastantes</p>
                                <p>Colocada horizontalmente</p>
                                <p>Letra helvética regular no condensada</p>
                                <li style={{fontWeight:500}}>Material Impreso o Fijo en Facebook, Instagram o Twitter</li>
                                <p>Tamaño no menor a 20 puntos de altura en proporción a una página de 21.5 cm x 28 cm</p>
                                <li style={{fontWeight:500}}>Material Televisión, Cine, Facebook, Instagram, Twitter</li>
                                <p>Duración mínima equivalente a la cuarta parte de la duración total del anuncio Tamaño equivalente a 40 puntos por letra, en proporción a una pantalla de TV de 14”</p>
                                <li style={{fontWeight:500}}>Radio</li>
                                <p>Mismo ritmo y volumen que el anuncio</p>
                            </ul>
                        </Grid>
                    
                    </Grid>
                </Form>
            </Formik>
        );
    }
}
import React, { Component } from 'react'
import './CSS/Login.css'
import logo from './Images/logo.png'
import sideImage from './Images/image_login.png'

export default class Login extends Component {

    state={
        email:'',
        password:''
    }


    handleLogin=()=>{
        fetch('http://stim.selfip.com:8091/api/Admin/login',{
            method:'Post',
            body:{"email":"prueba","password":"1234"},
            mode:'no-cors'
        })
        .then(res=>res.json())
        .then(res2=>console.log(res2))
    }

    render() {
        return (
            <div className="Login-container">
                <div className="Login-body-container">
                    <div className="Login-form">
                        <div className="form">
                            <div className="logo">
                                <img src={logo} style={{maxHeight:'100%',maxWidth:'100%'}} />
                            </div>
                            <h1>¡BIENVENIDO!</h1>
                            <div style={{width:'90%'}}>
                                <h2 style={{color:'darkblue'}}>USUARIO</h2>
                                <input type="text" className="input" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value}) } />
                            </div>
                            <div style={{width:'90%'}}>
                                <h2 style={{color:'darkblue'}}>CLAVE</h2>
                                <input type="password" className="input" value={this.state.password} onChange={(e)=>this.setState({password:e.target.value})} />
                            </div> 
                            <div style={{width:'90%'}}>
                                <button className="btn" onClick={this.handleLogin}>INICIAR SESIÓN</button> 
                            </div>
                        </div>
                    </div>
                    <div className="side-image">
                        <div className="image-container">
                            <img src={sideImage} style={{maxHeight:'100%'}} />
                        </div>
                    </div>
                </div>
                <p style={{fontSize:'25px',fontFamily:'Gotham Pro Light',textAlign:'right'}}>DESARROLLADO POR MERCADEO ONLINE</p>
            </div>
        )
    }
}

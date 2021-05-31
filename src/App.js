import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import Checkbox from'@material-ui/core/Checkbox'
import FormControlLabel from'@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
// import { green, orange  } from '@material-ui/core/colors';
import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'


const useStyles = makeStyles({
  root:{
    background:'linear-gradient(45deg, #333, #999)',
    border:0,
    borderRadius:15,
    color:'white',
    padding:'15px 30px',
    marginBottom:'10px'
  }
})

const theme  =  createMuiTheme({
  typography:{
    h1:{
      fontSize:45,
      marginBottom:15
    }
  },
  //sobrepondo cores 
  // palette:{
  //   primary:{
  //     main: green[500],
  //   },
  //   secondary:{
  //     main:red[400]
  //   }
  // }
})

//criando um estilo pro botão
function ButtonStyle(){
  const classes = useStyles();
  return <Button className={classes.root}>teste de estilo em botões</Button>
}

function CheckboxTeste() {
  const [checked, setChecked] = React.useState(true)
  return(
    <div>
      <FormControlLabel 
        control={
          <Checkbox 
            checked={checked}
            icon={<SaveIcon/>}
            checkedIcon={<SaveIcon />}

            onChange={(e) => setChecked(e.target.checked)}
            itemProp={{
              'aria=label': 'secondary checkbox'
            }}
          />}
          label="teste do checkbox"
      />          
    </div>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6">
                  MUI Treino
                </Typography>
                <Button color='secondary'>
                  login
                </Button>
              </Toolbar>
            </AppBar>
            <Typography variant='h1'component='div'>
              Bem vindo ao MUI
            </Typography>
            <Typography variant='h4'>
              Aprendendo a usar Material Ui e React
            </Typography>
            <img src={logo} className="App-logo" alt="logo" />
            <ButtonStyle />
            <TextField 
              variant="filled"
              color='secondary'
              type="email"     
              label='email'     
              placeholder="teste@teste.com"
            />
            <TextField 
              variant="outlined"
              color='secondary'
              type="date"
            />
            <CheckboxTeste />
            <Grid container spacing={2} justify="center" style={{marginBottom:10}}>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75,width:'100%'}} />
              </Grid>
              <Grid item xs={3} sm={6}>
                <Paper style={{height:75,width:'100%'}} />
              </Grid>
              <Grid item xs={3} sm={12}>
                <Paper style={{height:75,width:'100%'}} />
              </Grid>
            </Grid>
            <ButtonGroup>
              <Button 
                startIcon={<SaveIcon />}
                endIcon={<SaveIcon />}
                onClick={()=>alert('Salvo')} 
                size="large"
                style={{
                  fontSize:25
                }}
                variant="contained"
                color="primary">
                Salvar
              </Button>
              <Button 
                startIcon={<DeleteIcon />}
                endIcon={<DeleteIcon />}
                onClick={()=>alert('jogado fora')} 
                size="large"
                style={{
                  fontSize:25
                }}
                variant="contained"
                color="secondary">
                Descartar
              </Button>
            </ButtonGroup>
            
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

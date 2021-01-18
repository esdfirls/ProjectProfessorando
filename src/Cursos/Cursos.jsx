import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { userActions } from '../_actions';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const images = [
    {
      url: '/violao.jpg',
      title: 'Violão',
      width: '40%',
    },
    {
      url: '/sax.jpg',
      title: 'Sax',
      width: '30%',
    },
    {
      url: '/batuque.jpg',
      title: 'Batuque',
      width: '30%',
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  export default function ButtonBases() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        {images.map((image) => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    );
  }
  

class Cursos extends React.Component {
    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h1>Olá {user.firstName}!</h1>
                <p>CURSOS DISPONÍVEIS
                </p>
                <h3>Instrumentos:</h3>
                <Link to="/Violao"><Button variant="contained" color="primary">Violão</Button></Link>

                <Button variant="contained" color="primary">Guitarra</Button>
                <Button variant="contained" color="primary">Batuque</Button>
                <p> 
                <h3>Saúde e Beleza:</h3>
                <Button variant="contained" color="secondary">Maquiagem</Button>
                <Button variant="contained" color="secondary">Manicure</Button>
                <Button variant="contained" color="secondary">Cabelos</Button>
                </p>
                <p> 
                <h3>Construção:</h3>
                <Button variant="contained" color="primary">Alvenaria</Button>
                <Button variant="contained" color="primary">Pintura</Button>
                <Button variant="contained" color="primary">Spray</Button>
                </p>
                <p> 
                <h3>Culinária:</h3>
                <Button variant="contained" color="default">Panificação</Button>
                <Button variant="contained" color="default">Confeitaria</Button>
                <Button variant="contained" color="default">Doces</Button>
                </p>
                <p> 
                <h3>Informática:</h3>
                <Link to="/Word"><Button variant="contained" color="secondary">Word</Button></Link>
                <Button variant="contained" color="secondary">Excel</Button>
                <Button variant="contained" color="secondary">Power Point</Button>
                <Button variant="contained" color="secondary">Linux</Button>
                </p>
                <p>
                    <Link to="/"><Button variant="contained" color="default">Retornar ao Menu Principal</Button></Link>
                    
                </p>
                


            </div>
            
            
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(Cursos);
export { connectedHomePage as Cursos };
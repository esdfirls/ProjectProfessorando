import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { userActions } from '../_actions';
import ReactPlayer from 'react-player'



class Word extends React.Component {
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
                O Microsoft Word é um programa destinado à criação de documentos, vulgarmente conhecido como processador de texto.
                Este programa faz parte de um conjunto de programas de produtividade da mundialmente conhecida Microsoft Corporation, presidida por Bill Gates, o Microsoft Office.
                Este poderoso programa de criação de documentos apresenta inúmeras funcionalidades que permitem ao utilizador criar novos documentos ou trabalhar em documentos já existentes com uma grande eficácia e rapidez.
                <p>Aula Online:
                </p>
                <ReactPlayer url='https://www.youtube.com/watch?v=CEvvMv7u2ag'/>
                <p>
                    <Link to="/cursos"><Button variant="contained" color="primary">Procurar Mentoria</Button></Link>
                    
                </p>

                <p>
                    <Link to="/cursos"><Button variant="contained" color="default">Retornar ao Menu Cursos</Button></Link>
                    
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

const connectedHomePage = connect(mapState, actionCreators)(Word);
export { connectedHomePage as Word };
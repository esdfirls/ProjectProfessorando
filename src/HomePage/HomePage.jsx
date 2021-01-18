import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import { userActions } from '../_actions';

class HomePage extends React.Component {
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
                <p>Bem-vindo ao professorando!
                </p>
                
                <Link to="/cursos"><Button variant="contained" color="primary">Cursos</Button></Link>
                <Button variant="contained" color="primary">Progresso</Button>
                <Button variant="contained" color="primary">Perfil</Button>

                <h3>Usuarios registrados:</h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    
                                }
                            </li>
                        )}
                    </ul>
                }
                <p>
                    <Link to="/login"><Button variant="contained" color="secondary">Logout</Button></Link>

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

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
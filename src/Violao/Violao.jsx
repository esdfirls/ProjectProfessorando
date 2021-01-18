import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { userActions } from '../_actions';
import ReactPlayer from 'react-player'



class Violao extends React.Component {
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
                <h2>Módulo Básico</h2>

                O violão é um instrumento musical que utiliza cordas para produzir o som. 
                Geralmente o violão tem seis cordas, mas há de quatro, sete, oito, dez e doze 
                cordas não são raras. O violão é considerado como um instrumento que serve para
                 muitos tipos de música como blues, country, flamengo, rock e pop. Tocando o violão
                  acusticamente envolve a produção de tons pela vibração das cordas e modulação pelo
                   corpo do violão. A manipulação eletrônica também pode ser feita no tom usando um amplificador.
                    A combinação de várias madeiras, com cordas de náilon ou de aço são utilizadas para a 
                    construção de violões acústicos.
                    A história e o desenvolvimento dos instrumentos de corda semelhantes ao violão, 
                    data de pelo menos 5.000 anos atrás. Naqueles dias, quando o material sintético não era 
                    disponível para a fabricação de violões, um violão era definido como um sendo instrumento
                     longo, com um braço de madeira, que emitia baixos sons, e um instrumento de costas achatadas,
                      geralmente com os lados arredondados.
                      O Violão atual é composto das seguientes partes:

1 Cabeça, mão ou paleta

2 Pestana ou capotraste

3 Tarrachas ou cravelhas

4 Trastes

6 Elementos decorativos

7 Braço

8 Tróculo (Junta do braço)

9 Corpo

12 Cavalete

14 Fundo

15 Tampo

16 Lateral ou faixas

17 Abertura ou boca

18 Cordas

19 Rastilho

20 Escala
                <p>Aula Online:
                </p>
                <ReactPlayer url='https://www.youtube.com/watch?v=ZI2h7A1NM4A'/>

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

const connectedHomePage = connect(mapState, actionCreators)(Violao);
export { connectedHomePage as Violao };
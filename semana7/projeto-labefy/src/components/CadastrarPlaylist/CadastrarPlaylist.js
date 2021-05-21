import { ContainerCriaPlaylist, Input } from './styles';

export default function CadastrarPlaylist(props) {
    return (
        <ContainerCriaPlaylist>
            <h1>Criar Playlist</h1>
            <div>
                <input value={props.value} 
                onChange={props.inputPlaylist} 
                placeholder="Nome da Playlist"
                placeholderTextColor="black"/>

                <button onClick={props.cadastrarPlaylist}>Cadastrar</button>
            </div>
        </ContainerCriaPlaylist>
    )
}
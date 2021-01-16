import React from 'react';
import './DestaqueMovie.css';

export default ({ item }) => {
    console.log(item);
    let data = item.last_air_date;
    let ano = data.split('-');

    let genres = [];
    for(let i in item.genres){
        genres.push( item.genres[i].name);
    }
    return(
        <section className="destaque" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className="destaque-vertical">
                <div className="destaque-horizontal">
                    <div className="destaque-name">
                        {item.name}
                    </div>
                    <div className="destaque-info">
                        <div className="destaque-pontos">{item.vote_average} pontos</div>
                        <div className="destaque-ano">{ano[0]}</div>
                        <div className="destaque-temporadas">{item.number_of_seasons} Temporada{item.number_of_seasons != 1 ? 's' : ''} </div>
                        <div className="destaque-desc">{item.overview}</div>
                        <div className="destaque-buttons">
                            <button className="destaque-button1">▶ Assistir</button>
                            <button className="destaque-button2">+ Minha Lista</button>
                        </div>
                        <div className="destaque-geners">
                            <strong>Genero:</strong> {genres.join(', ')} 
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
}
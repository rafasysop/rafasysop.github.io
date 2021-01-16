import React, { useEffect, useState } from 'react';
import MovieRow from './components/MovieRow';
import Tmdb from "./Tmdb";
import "./App.css";
import DestaqueMovie from './components/DestaqueMovie';
import Header from './components/Header';

// let app = '';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [destaqueData, setDestaqueData] = useState(null);
  const [black, setBlack] = useState(false);

  useEffect(()=> {
    const loadAll = async () => {
      // Pegando toda a Lista
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      let originals = list.filter(i => i.slug === 'originals');
      let ramdomChosen = Math.floor(Math.random() * (originals[0].itens.results.length -1));
      let chosen = originals[0].itens.results[ramdomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setDestaqueData(chosenInfo);
    }

    loadAll();
  }, []);


  useEffect(()=> {
    const scrollListener = () => {
      if(window.scrollY > 10){
        setBlack(true);
      } else {
        setBlack(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);
  
    return (
      <div className="page">
        <Header black={black} />
        {destaqueData &&
          <DestaqueMovie item={destaqueData} />
        }
        <section className="lists">
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} itens={item.itens} />
          ))}
        </section>
        <footer>
         <p>Desenvolvido por Rafael Costa Moura</p>
         <p>Direitos de Imagem para Netflix </p>
         <p>Dados obtidos na API theMoviodb.org</p> 
        </footer>
        {movieList <= 0 &&
        
        
        <div className="loading">
          <img src="https://cdn.lowgif.com/full/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="Carregando" />
        </div>}

      </div>
       );
  }

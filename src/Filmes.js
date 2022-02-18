import Tmdb from './Tmdb';
import './App.css';
import React,{useEffect, useState} from 'react';
import MovieRow from './Components/MovieRow';

const Filmes = ()=>{

    const [movieLists, setMovieList] = useState([]);

    useEffect(()=>{
      const loadAll = async ()=> {
      //pegando a lista total
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      }
  
      loadAll();
  
    },[]);
  
    return (
     <div className='page'>
     <section className='lists' >
       {movieLists.map((item,key)=>(
         <MovieRow key={key} title={item.title} items = {item.items}/>
  
       ))}
     </section>
  
     </div>
    );
  }

export default Filmes
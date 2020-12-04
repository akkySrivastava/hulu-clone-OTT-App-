import React from 'react'
import requests from './Request'
import './Navbar.css'

function Navbar({ setSelectedOption }) {
    return (
        <div className ="navbar">
            <h3 onClick = {() => setSelectedOption(requests.fetchTrending)}>Trending</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchActionMovies)}>Action</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchComedyMovies)}>Comedy</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchHorroMovies)}>Horror</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchRomanticMovies)}>Romance</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchMystery)}>Mystery</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchWestern)}>Western</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchAnimation)}>Animation</h3>
            <h3 onClick = {() => setSelectedOption(requests.fetchTV)}>Movie</h3>
        </div>
    )
}

export default Navbar

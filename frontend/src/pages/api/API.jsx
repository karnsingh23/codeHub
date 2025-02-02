import React from 'react';
import './api.css';
import Apicard from '../../components/card/Apicard';
import { faImdb, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const API = () => {
  return (
    <>
    <h1 className='head'>Top Collections</h1>
    <div className='box'>
        
    <Apicard
        icon={faTwitter}
        heading="Twitter API"
        description="Introducing a powerful Twitter API with endpoints to help you access valuable Twitter data."
        name="Rapid API"
        link="https://rapidapi.com/davethebeast/api/twitter241"
        buttonLabel={"Learn more"}
      />
      <Apicard
        icon={faInstagram}
        heading="Instagram Stable API"
        description="Instagram public data scraper API for search, users, posts, followers list, followings list, and more."
        name="Rapid API"
        link="https://rapidapi.com/thetechguy32744/api/instagram-scraper-stable-api"
        buttonLabel={"Learn more"}
      />
      <Apicard
        icon={faLinkedin}
        heading="LinkedIn Scraper"
        description="🔍 Unlock the power of LinkedIn data with our cutting-edge API service!"
        name="Rapid API"
        link="https://rapidapi.com/rockapis-rockapis-default/api/linkedin-api8"
        buttonLabel={"Learn more"}
      />
      <Apicard
        icon={faImdb}
        heading="IMDB API"
        description="This IMDb API provides access to a wide range of IMDb data, including movies, TV shows, and others."
        name="Rapid API"
        link="https://rapidapi.com/octopusteam-octopusteam-default/api/imdb236"
        buttonLabel={"Learn more"}
      />
      </div>
    </>
  );
};

export default API;

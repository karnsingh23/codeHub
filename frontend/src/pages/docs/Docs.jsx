import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HTML, CSS, JS,REACT,tailwindCSS,nodeJS, mongoDB, SQL } from '../../components/docsitem/Docsiteam'; 
import './docs.css'

function Docs() {
    const [data, setData] = useState([]);
    const { language } = useParams();

    useEffect(() => {
        if (language === 'html') {
            setData(HTML);
        }
        if (language === 'css') {
            setData(CSS);
        }
        if (language === 'javascript') {
            setData(JS);
        }
        if (language === 'react') {
            setData(REACT);
        }
        if (language === 'tailwindcss') {
            setData(tailwindCSS);
        }
        if (language === 'nodejs') {
            setData(nodeJS);
        }
        if (language === 'mongodb') {
            setData(mongoDB);
        }
        if (language === 'sql') {
            setData(SQL);
        }
    }, [language]); 

    

    return (
        <>

       <div className="containers">
        <div className='nav'>
            <ul>
                <li><NavLink to={'/docs/html'}  activeClassName="active-link" >HTML</NavLink></li>
                <li><NavLink to={'/docs/css'} activeClassName="active-link" >CSS</NavLink></li>
                <li><NavLink to={'/docs/tailwindcss'} activeClassName="active-link" >TAILWIND</NavLink></li>
                <li><NavLink to={'/docs/javascript'} activeClassName="active-link" >JAVASCRIPT</NavLink></li>
                <li><NavLink to={'/docs/react'} activeClassName="active-link">REACT</NavLink></li>
                <li><NavLink to={'/docs/nodejs'} activeClassName="active-link">NODEJS</NavLink></li>
                <li><NavLink to={'/docs/mongodb'} activeClassName="active-link">MONGODB</NavLink></li>
                <li><NavLink to={'/docs/sql'} activeClassName="active-link">SQL</NavLink></li>
                
            </ul>
        </div>
        <div className="docs-container">
            {data.length > 0 ? (
                data.map((item, index) => (
                    <div key={index} className="doc-item">
                        <h3 className="doc-topic">{item.Topic}</h3>
                        <p className="doc-description">{item.description}</p>
                        <p className="doc-code">{item.codeExample}</p>
                    </div>
                ))
            ) : (
                <div className="no-content">No content available for this language</div>
            )}
        </div>
       </div>
        </>
    );
}

export default Docs;

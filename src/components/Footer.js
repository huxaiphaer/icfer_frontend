import {Footer} from "react-materialize";
import React from "react";
import '../styles/footer.css'

const developer = "Lutaaya Huzaifah Idris"
export const FooterComponent = ()=>(
    <div className={'footer'}>
        <Footer copyrights={`© 2019 Copyright Developed by `.concat(developer)}
                links={
                    <ul>
                        <li><a className="teal darken-1" href="https://codementor.io/lutaayahuzaifahidris/">
                            <div className="grey-text text-lighten-3">Checkout the developers portfolio</div></a></li>
                    </ul>
                }
                className='teal lighten-1'
        >
            <h5 className="white-text">Islamic Center For Education & Research.</h5>
        </Footer>
    </div>

);

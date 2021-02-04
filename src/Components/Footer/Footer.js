import React, { Component } from 'react'
import "./Footer.css"

class Footer extends Component{
    render(){
        return(
                // <footer>
                //     <ul className="social-media">
                //         <li><a href="https://www.facebook.com/" target="_blank" className="fa fa-facebook"></a></li> 
                //         <li><a href="https://www.twitter.com/"  target="_blank" className="fa fa-twitter"></a></li>
                //         <li><a href="https://www.instagram.com/" target="_blank" className="fa fa-instagram"></a></li>
                //     </ul>   
                // </footer>

                <footer id="footer">
                <section class="social-media-links">
                    <a href="https://www.facebook.com/" class="fa fa-facebook" aria-label="Facebook"></a>
                    <a href="https://twitter.com/" class="fa fa-twitter" aria-label="Twitter"></a>
                    <a href="https://www.instagram.com/" class="fa fa-instagram" aria-label="Instagram"></a>
                    <a href="https://www.youtube.com/" class="fa fa-youtube" aria-label="Youtube"></a>
                </section>
                <div class='footer-text' >
                    <div class="copyright" >
                        <p >&copy; 2020 Edar Velasquez | OFFICIAL STORE. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
import React from "react";
import Link from "next/link";
import "./topbar.css";
export default function TopBar() {
  return (
    <div
      id="topbar"
      className="top-bar row gx-0 align-items-center d-none d-lg-flex"
    >
      <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
        <div className="col-lg-4 px-5 text-start">
          <small>
            <i className="fa fa-map-marker-alt text-primary me-2"></i>123
            Street, New York, USA
          </small>
          <small className="ms-4">
            <i className="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm
          </small>
        </div>
        <div className="col-lg-4 px-5 text-start">
        <aside id="mainNavigationAside">	
        <nav id="lang-navigation"className="lang-nav">	
          <ul>
          <li><Link href="/">Deutsch</Link></li>
          <li lang="de"><Link href="/">Français</Link></li>
          <li><Link href="/">Italiana</Link></li>
          <li><Link href="/">Русский</Link></li>
          </ul>
           {/* <p class="noprint"><bdi title="German"><a href="#" onclick="stickyConneg('qa-html-language-declarations','en','de'); return false;" lang="de" translate="no" dir="auto">Deutsch</a></bdi> •  
           <bdi title="Spanish"><a href="#" onclick="stickyConneg('qa-html-language-declarations','en','es'); return false;" lang="es" translate="no" dir="auto">Español</a></bdi> •
            <bdi title="French"><a href="#" onclick="stickyConneg('qa-html-language-declarations','en','fr'); return false;" lang="fr" translate="no" dir="auto">Français</a></bdi> • 
            <bdi title="Italian"><a href="#" onclick="stickyConneg('qa-html-language-declarations','en','it'); return false;" lang="it" translate="no" dir="auto">Italiano</a></bdi> •  
           <bdi title="Brazilian Portuguese"><a href="#" onclick="stickyConneg('qa-html-language-declarations','en','pt-br'); return false;" lang="pt-br" translate="no" dir="auto">Português-BR</a></bdi> • 
            <bdi title="Russian"><a href="#" onclick="stickyConneg('qa-html-language-declarations','en','ru'); return false;" lang="ru" translate="no" dir="auto">Pусский</a></bdi> </p>		</nav>	 */}
       </nav>
        </aside>
      </div>
        <div className="col-lg-4 px-5 text-end">
          <small>
            <i className="fa fa-envelope text-primary me-2"></i>info@example.com
          </small>
          <small className="ms-4">
            <i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789
          </small>
        </div>
      </div>
    </div>
  );
}

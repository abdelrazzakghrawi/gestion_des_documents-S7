
import attes from './attes.png';
import emploi from './emploi.png';
import releve from './relevedenotes.png';
import presentationfilliere from './presentationfilliere.png';
import vacances from './vacances.png';
import pai from './fichepaiem.png';

function liste_document() {
    return (
        <div>
            <section className="main-content">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={attes} alt="" />

                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">Attestation de Scolarite</span>
                                        <span className="food-card_author">Necessite Validation </span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" className="btn btn-primary">Demander</a>
                                        <a target="_blank" href='/documents/attestation' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={releve} alt="" />

                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span   className="food-card_title">Relevé de Notes</span >
                                        <span className="food-card_author">Necessite Validation </span >
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" className="btn btn-primary">Demander</a>
                                        <a target="_blank" href='/documents/releve' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={pai} alt="" />

                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">Fiche de paiement</span >
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" href='/documents/paiement' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={vacances} alt="" />

                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span  className="food-card_title">Liste des Vacances</span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" href='/documents/vacances' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={emploi} alt="" />

                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span  className="food-card_title">Emploi de temps</span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" href='/documents/emploi' className="btn btn-secondary">Imprimer</a >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-6 col-lg-6">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={presentationfilliere} alt="" />

                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span  className="food-card_title">Presentation de la fillière</span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: "body {    background: #f9f9f9;    font-family: \"roboto\", sans-serif;}\n.main-content {    padding-top: 100px;    padding-bottom: 100px;}\na {    text-decoration: none;}\n.food-card {    background: #fff;    border-radius: 5px;    overflow: hidden;    margin-bottom: 30px;    -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);    -webkit-transition: 0.1s;    transition: 0.1s;}\n\n\n\n\n.food-card .food-card_content {    padding: 15px;}\n.food-card .food-card_content .food-card_title-section {    height: 100px;    overflow: hidden;}\n.food-card .food-card_content .food-card_title-section .food-card_title {    font-size: 24px;    color: #333;    font-weight: 500;    display: block;    line-height: 1.3;    margin-bottom: 8px;    display: -webkit-box;    -webkit-line-clamp: 2;    -webkit-box-orient: vertical;    overflow: hidden;    text-overflow: ellipsis;}\n\n.food-card .food-card_content .food-card_bottom-section .space-between {    display: -webkit-box;    display: -ms-flexbox;    display: flex;    -webkit-box-pack: justify;    -ms-flex-pack: justify;    justify-content: space-between;}\n\n\n@media (min-width: 992px) {    .food-card--vertical {        display: -webkit-box;        display: -ms-flexbox;        display: flex;        position: relative;\n    }\n    .food-card--vertical .food-card_img img {        width: 200px;        height: 100%;        -o-object-fit: cover;        object-fit: cover;    }}\n    " }} />
        </div>




    );
}
export default liste_document;

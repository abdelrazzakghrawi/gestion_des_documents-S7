import attes from './DocImage/attes.png';
import emploi from './DocImage/emploi.png';
import releve from './DocImage/relevedenotes.png';
import presentationfilliere from './DocImage/presentationfilliere.png';
import vacances from './DocImage/vacances.png';
import pai from './DocImage/fichepaiem.png';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Document() {
    return (
        <div>
             <section className="main-contentt">
                <div className="containerr">
                    <div className="row">
                        {/* Carte Attestation de Scolarité */}
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={attes} alt="Attestation de Scolarité" />
                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">Attestation de Scolarite</span> <br/>
                                        <span className="food-card_author">Necessite Validation </span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" className="btn btn-primary">Demander</a>
                                        <a target="_blank" href='/scolarite' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={releve} alt="Relevé de Notes" />
                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">Relevé de Notes</span> <br/>
                                        <span className="food-card_author">Necessite Validation </span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" className="btn btn-primary">Demander</a>
                                        <a target="_blank" href='/Releve' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={pai} alt="Fiche de paiement" />
                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">Fiche de paiement</span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" href='/Paiement' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={vacances} alt="Liste des Vacances" />
                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">Liste des Vacances</span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" href='/vacances' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={emploi} alt="Emploi de temps" />
                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">Emploi de temps</span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a target="_blank" href='/Emploi' className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-4 col-lg-4">
                            <div className="food-card food-card--vertical">
                                <div className="food-card_img">
                                    <img src={presentationfilliere} alt="Presentation de la fillière" />
                                </div>
                                <div className="food-card_content">
                                    <div className="food-card_title-section">
                                        <span className="food-card_title">Presentation de la fillière</span>
                                    </div>
                                    <div className="food-card_bottom-section">
                                        <hr /><br />
                                        <a href='/Presentationfilliere' target="_blank" className="btn btn-secondary">Imprimer</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style dangerouslySetInnerHTML={{ __html: `
                body {
                    background: #f9f9f9;
                    font-family: "roboto", sans-serif;
                }
                .main-content {
                    padding-top: 100px;
                    padding-bottom: 100px;
                }
                a {
                    text-decoration: none;
                }
                .food-card {
                    background: #fff;
                    border-radius: 5px;
                    overflow: hidden;
                    margin-bottom: 30px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
                    transition: 0.1s;
                }
                .food-card .food-card_content {
                    padding: 15px;
                }
                .food-card .food-card_content .food-card_title-section {
                    height: 100px;
                    overflow: hidden;
                }
                .food-card .food-card_content .food-card_title-section .food-card_title {
                    font-size: 24px;
                    color: #333;
                    font-weight: 500;
                    line-height: 1.3;
                    margin-bottom: 8px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .food-card .food-card_content .food-card_bottom-section .space-between {
                    display: flex;
                    justify-content: space-between;
                }
                @media (min-width: 992px) {
                    .food-card--vertical {
                        display: flex;
                        position: relative;
                    }
                    .food-card--vertical .food-card_img img {
                        width: 200px;
                        height: 100%;
                        object-fit: cover;
                    }
                }
            ` }} />

        </div>
    );
}

import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

export default function HomeBody() {

    return(
        <main>
            <section>
                <div className="container">
                    <div className="mb30 mt30">
                        <Card title="Página inicial"/>
                    </div>
                    <Link to="/promotion">
                        <div className="dflex">
                            <Button text="Ver promoção" />
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    );
}
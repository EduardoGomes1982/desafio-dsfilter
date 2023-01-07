import { ProductDTO } from "../../models/product";
import { findByPrice } from "../../services/product-service";
import "./styles.css";

export default function Listing() {
    const listProd: ProductDTO[] = findByPrice(0, Number.MAX_VALUE);

    return (
        <section id="listing-section" className="ds-container ds-listing-card">
            {
                listProd.map(p => 
                    <div key={p.id} className="dsc-list-item">
                        <p className="ds-item-title">{p.name}</p>
                        <p className="ds-item-price">R$ {p.price.toFixed(2)}</p>
                    </div>
                )
            }
        </section>
    )
}
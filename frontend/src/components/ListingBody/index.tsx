import { useState } from "react";
import { ProductDTO } from "../../models/product";
import { findByPrice } from "../../services/product-service";
import Filter from "../Filter";
import Listing from "../Listing";
import "./styles.css";

export default function ListingBody() {
    const [products, setProducts] = useState<ProductDTO[]>(findByPrice(0, Number.MAX_VALUE));

    function handleFilter(min: number, max: number) {
        setProducts(findByPrice(min, max));
    }

    return (
        <main>
            <Filter onFilter={handleFilter} />
            <Listing products={products}/>
        </main>
    );
}
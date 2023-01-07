import "./styles.css";

export default function Filter() {
    return(
        <section id="filter-section" className="ds-container ds-filter-card">
            <form id="filter-frm">
                <input id="min-price" name="minPrice" type="text" placeholder="Preço mínimo" />
                <input id="max-price" name="maxPrice" type="text" placeholder="Preço máximo" />
                <input type="submit" value="Filtrar" />
            </form>
        </section>
    )
}
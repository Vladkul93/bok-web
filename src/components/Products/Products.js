    import { CATALOG } from "../../constants/catalog"
    import { ROOT_PRODUCTS } from "../../constants/root";

    export class Products {
        render() {
                let htmlCatalog = '';
                    CATALOG.forEach(({id, name, img, circle, price})=>{
                        htmlCatalog +=`
                            <li class = "">
                                <span>${circle}</span>
                                <img src="${img}"/>
                                <span>${name}</span>
                                <span>${price}</span>
                            </li>
                        `;
            });
            const html = `
                <ul class = "products-container">
                    ${htmlCatalog}
                </ul>
            `
            ROOT_PRODUCTS.innerHTML = html;
        }
    } 

    let productsPage = new Products();
    productsPage.render()


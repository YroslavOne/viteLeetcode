function ProductMainHtml(elementHtml){

    const $divBreadCrumbs = document.createElement("div");
    $divBreadCrumbs.className = "breadCrumbs"
    elementHtml.append($divBreadCrumbs);
    const $pBreadCrumbs = document.createElement('p');
    $pBreadCrumbs.id = "breadCrumbs";
    $pBreadCrumbs.textContent = "Home / Products"
    $divBreadCrumbs.append($pBreadCrumbs);
    const $divBlockProductsFlex = document.createElement("div");
    $divBlockProductsFlex.className = "block_products_flex";
    elementHtml.append($divBlockProductsFlex);
    const $divBlockProducts = document.createElement("div");
    $divBlockProducts.className = "block_products"
    $divBlockProductsFlex.append($divBlockProducts);
    const $divFilterSidbar = document.createElement("div");
    $divFilterSidbar.className = "filter_sidbar"
    $divBlockProducts.append($divFilterSidbar);
    const $divSidebar = document.createElement("div");
    $divSidebar.className = "sidebar"
    $divFilterSidbar.append($divSidebar);
    const $inputTextInput = document.createElement("input");
    $inputTextInput.id = "text_input"
    $inputTextInput.type = "text"
    $inputTextInput.placeholder = "search..."
    $divSidebar.append($inputTextInput);

    const $divSimplyTwo = document.createElement("div");
    $divSidebar.append($divSimplyTwo);


    const $h4TitleProductsCompany = document.createElement("h4");
    $h4TitleProductsCompany.id = "title_products"
    $h4TitleProductsCompany.textContent = "Company"
    $divSimplyTwo.append($h4TitleProductsCompany);

    const $divAllCompany = document.createElement("div");
    $divAllCompany.className = "all_company"
    $divAllCompany.id = "all_company"
    $divSimplyTwo.append($divAllCompany);

    const $divSimplyOne = document.createElement("div");
    $divSidebar.append($divSimplyOne);


    const $h4TitleProductsPrice = document.createElement("div");
    $h4TitleProductsPrice.className = "title_products"
    $h4TitleProductsPrice.textContent = "Prise"
    $divSimplyOne.append($h4TitleProductsPrice);

    const $divSimply = document.createElement("div");
    $divSimplyOne.append($divSimply);

    const $inputvaluePriceInput = document.createElement("input");
    $inputvaluePriceInput.id = "value_price_input"
    $inputvaluePriceInput.type = "range"
    $inputvaluePriceInput.step = "1"
    $divSimply.append($inputvaluePriceInput);


    const $pValuePriceInput = document.createElement('p');
    $pValuePriceInput.className = "value_price_input"
    $pValuePriceInput.id = "value_price_in_input"
    $divSimply.append($pValuePriceInput);
    
const $divCatalogPrice = document.createElement('div');
$divCatalogPrice.className = "catalog_block"
$divCatalogPrice.id = "catalog_block"
$divBlockProducts.append($divCatalogPrice);





}
export default ProductMainHtml;
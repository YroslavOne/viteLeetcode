function cleanProducts() {
  const $blockProducts = document.querySelector('.block_products');
  const $catalogBlock = document.getElementById('catalog_block');
  $blockProducts.removeChild($catalogBlock);
  const $divCatalogBlock = document.createElement('div');
  $divCatalogBlock.className = 'catalog_block';
  $divCatalogBlock.id = 'catalog_block';
  $blockProducts.append($divCatalogBlock);
}
export default cleanProducts;

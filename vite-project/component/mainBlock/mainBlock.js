function mainBlock(elemHtml) {
  const $mainBlock = document.createElement('div');
  $mainBlock.className = 'main_block';
  elemHtml.append($mainBlock);
  const $textMainBlock = document.createElement('div');
  $textMainBlock.className = 'text_main_block';
  $mainBlock.append($textMainBlock);
  const $h1TextMainBlock = document.createElement('h1');
  const $h2TextMainBlock = document.createElement('h2');
  $h1TextMainBlock.className = 'main_block_h1';
  const $thisH1TextMainBlock = document.createTextNode('Rest, Relax, Unwind');
  const $thisH2TextMainBlock = document.createTextNode(
    'Embrace your choices - we do'
  );
  $h1TextMainBlock.appendChild($thisH1TextMainBlock);
  $h2TextMainBlock.appendChild($thisH2TextMainBlock);

  const $mainBlockButton = document.createElement('button');
  $mainBlockButton.className = 'main_block_button';
  $mainBlockButton.id = 'main_block_button';
  const $textMainBlockButton = document.createTextNode('show now');
  $mainBlockButton.appendChild($textMainBlockButton);
  $textMainBlock.append($h1TextMainBlock);
  $textMainBlock.append($h2TextMainBlock);
  $textMainBlock.append($mainBlockButton);

  document
    .getElementById('main_block_button')
    .addEventListener('click', () => console.log('hi man'));
}
export default mainBlock;

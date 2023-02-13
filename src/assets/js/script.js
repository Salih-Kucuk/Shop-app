function searchProducts() {
  document.getElementById("search-input").addEventListener('input', filterList);
  function filterList(){
    const searchInput = document.getElementById("search-input");
    const filter = searchInput.value.toLowerCase();
    const cardItems = document.querySelectorAll('.card');

    cardItems.forEach((item) => {
      let text = item.textContent;
      if(text.toLowerCase().includes(filter.toLowerCase())){
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  }
}

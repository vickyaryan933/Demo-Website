function toggleSearch() {
    const searchBar = document.getElementById('search-bar');
    let searchSymbol = document.getElementById('hidden');
    if (searchBar.style.display === 'block' && hidden.style.display === 'none' ) {
      searchBar.style.display = 'none';
    } else {
      searchBar.style.display = 'block';
      hidden.style.display = 'none';
      searchBar.focus();  // Focus on the search bar when it appears
    }
  }
  
function Remove() {
    let ul = document.querySelector('.storage');
    localStorage.clear();
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }
}

export default Remove;
(function(){
  function setYear(){
    const y = new Date().getFullYear();
    document.querySelectorAll('.current-year').forEach(el => el.textContent = y);
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', setYear);
  } else setYear();
})();

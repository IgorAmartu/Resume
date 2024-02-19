var checkbox = document.querySelector('.theme-switch__checkbox');
var theme = localStorage.getItem('data-theme');

if (theme != null && theme == 'dark') {
  const btnTheme = document.getElementById('btnTheme');
  btnTheme.checked = true;
  transition();
  document.documentElement.setAttribute('data-theme', 'dark');
}

checkbox.addEventListener('change', function () {
  transition();
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('data-theme', 'light');
  }
})

function transition() {
  document.documentElement.classList.add('transition');
  setTimeout(function () {
    document.documentElement.classList.remove('transition');
  }, 250)
}
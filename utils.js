export function showLoading(msg) {
  document.getElementById('loading-msg').textContent = msg || 'Please wait…';
  document.getElementById('loading').classList.add('show');
}

export function hideLoading() {
  document.getElementById('loading').classList.remove('show');
}

let toastTimer;
export function toast(msg, type = 'success') {
  const el = document.getElementById('toast');
  if(!el) return;
  el.textContent = msg;
  el.className = 'show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.className = ''; }, 3500);
}

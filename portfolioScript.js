const scriptURL = 'https://script.google.com/macros/s/AKfycbyHzRQwGjBwRJrtDCqT1FD6TO7mC3jD9omnkFvGHAcvhOlNfGGT6inlYONnziivIc927A/exec';
const form = document.forms['Bagas-form-contact'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ketika tombol submit diklik
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  // Tampilkan tombol loading, hilangkan tombol kirim
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // Tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // Tampilkan alert
      myAlert.classList.toggle('d-none');
      // reset form
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});

function copyEmail(email) {
    navigator.clipboard.writeText(email).then(() => {
      const toast = document.getElementById('toast');
      toast.style.visibility = 'visible';
      toast.style.opacity = '1';

      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
          toast.style.visibility = 'hidden';
        }, 500);
      }, 2000);
    }).catch(err => {
      console.error('Error al copiar: ', err);
    });
  }

 function handleSubmit(event) {
  event.preventDefault();


  const toast = document.getElementById('form-toast');
  toast.style.visibility = 'visible';
  toast.style.opacity = '1';

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.style.visibility = 'hidden';
    }, 500);
  }, 2000);

  event.target.reset();
  return false;
}


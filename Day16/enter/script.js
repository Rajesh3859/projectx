setTimeout(() => {
  document.getElementById("display").innerText = "5";
  setTimeout(() => {
    document.getElementById("display").innerText = "4";
    setTimeout(() => {
      document.getElementById("display").innerText = "3";
      setTimeout(() => {
        document.getElementById("display").innerText = "2";
        setTimeout(() => {
          document.getElementById("display").innerText = "1";
          setTimeout(() => {
            document.getElementById("display").innerText = "ajay oru koosa";
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

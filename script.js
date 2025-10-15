let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  const name = document.querySelector("#name-input").value;
  let uploadProgressBar = document.querySelector("#upload-progress-bar");
  uploadProgressBar.style.backgroundColor = "black";

  if (name === "") {
    alert(
      "Podaj imię lub nick, żebyśmy wiedzieli komu podziękować za film w napisach końcowych :)",
    );
  } else {
    const file = document.querySelector("#file-input").files[0];
    const formData = new FormData();
    formData.append("file", file, file.name);
    formData.append("name", name);

    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "upload.php", true);

    xhr.upload.onprogress = function (e) {
      if (e.lengthComputable) {
        const percent = (e.loaded / e.total) * 100;
        const uploadProgressBar = document.querySelector(
          "#upload-progress-bar",
        );
        uploadProgressBar.style.width = percent + "%";
        uploadProgressBar.innerHTML = percent + "%";
      }
    };

    xhr.onload = function () {
      if (xhr.status === 200) {
        alert("Upload zakończony powodzeniem");
        uploadProgressBar.style.backgroundColor = "#4caf50";
      } else {
        alert(`Błąd uploadu:\n${xhr.responseText}`);
        uploadProgressBar.style.backgroundColor = "red";
      }
    };
    xhr.send(formData);
  }
});

// fileInput.addEventListener("change", function () {
//   const name = document.querySelector("#name-input").value;
//   console.log(name);
//
//   if (name === "") {
//     alert(
//       "Podaj imię lub nick, żebyśmy wiedzieli komu podziękować za film w napisach końcowych :)",
//     );
//   } else {
//     const file = this.files[0];
//     const formData = new FormData();
//     formData.append("file", file, file.name);
//     formData.append("name", name);
//
//     for (let [key, value] of formData.entries()) {
//       console.log(key, value);
//     }
//
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", "upload.php", true);
//
//     xhr.upload.onprogress = function (e) {
//       if (e.lengthComputable) {
//         const percent = (e.loaded / e.total) * 100;
//         document.querySelector("#upload-progress-bar").style.width =
//           percent + "%";
//       }
//     };
//
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         alert("Upload zakończony");
//       } else {
//         alert("Błąd uploadu");
//       }
//     };
//     xhr.send(formData);
//   }
// });

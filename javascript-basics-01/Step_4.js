function alertTest() {
    userName = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    city = document.getElementById("city").value;

    alert(
      "Name: " + userName + "\n" + "Surname: " + surname + "\n" + "City: " + city
    );
  }
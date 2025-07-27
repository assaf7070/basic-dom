function validateForm() {
  const name = document.getElementById("name").value.trim()
  const salary = parseInt(document.getElementById("salary").value)
  const birthday = document.getElementById("birthday").value
  const phone = document.getElementById("phone").value.trim()

  const errorsDiv = document.getElementById("errors")
  errorsDiv.innerHTML = ""

  let isValid = true

  if (name.length <= 2) {
    errorsDiv.innerHTML += "<p>Name must be longer than 2 characters</p>"
    isValid = false
  }

  if (!(salary > 10000 && salary < 16000)) {
    errorsDiv.innerHTML += "<p>Salary must be between 10,000 and 16,000</p>"
    isValid = false
  }

  if (!birthday) {
    errorsDiv.innerHTML += "<p>Birthday is required</p>"
    isValid = false
  }

  if (!/^\d{10}$/.test(phone)) {
    errorsDiv.innerHTML += "<p>Phone must be 10 digits long</p>"
    isValid = false
  }

  // Extension: Hide form and show welcome message
  if (isValid) {
    document.getElementById("form-container").style.display = "none"
    document.getElementById("welcome-message").textContent = `Welcome, ${name}!`
  }
}

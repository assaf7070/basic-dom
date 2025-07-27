const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const checkReservation = () => {
  const name = document.getElementById("nameInput").value.trim()
  const message = document.getElementById("message")

  if (!name) {
    message.textContent = "Please enter a name"
    return
  }

  const reservation = reservations[name]

  if (reservation) {
    if (!reservation.claimed) {
      message.textContent = `Welcome, ${name}`
    } else {
      message.textContent = "Hmm, someone already claimed this reservation"
    }
  } else {
    message.textContent = `You have no reservation`
  }
}

document.getElementById("checkBtn").addEventListener("click", checkReservation)

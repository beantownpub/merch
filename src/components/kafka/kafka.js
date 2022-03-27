export async function sendEvent(data) {
  console.log(data)
  const eventData = {
    class: data.target.className,
    pointerType: data.pointerType,
    element: data.target.nodeName,
    id: data.target.id
  }
  try {
    await fetch('/event', {method: "POST", credentials: "include", body: JSON.stringify(eventData), headers: {"Content-Type": "application/json"}})
      .then(response => {})
      .catch(error => console.log(error))
  } catch (error) {
    console.error('Error sending event ', error)
  }
}
